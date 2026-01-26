import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth";
import { validateSchema } from "../middlewares/validateSchema";
import { createParkingRecordSchema } from "../schemas/parkingRecords/createParkingRecord.schema";
import { updateParkingRecordSchema } from "../schemas/parkingRecords/updateParkingRecord.schema";
import CreateParkingRecordController from "../controllers/parkingRecords/CreateParkingRecord.controller";
import UpdateParkingRecordController from "../controllers/parkingRecords/UpdateParkingRecord.controller";
import GetParkingRecordsController from "../controllers/parkingRecords/GetParkingRecords.controller";
import { validateQuerySchema } from "../middlewares/validateQuerySchema";
import { getQueryParkingRecordSchema } from "../schemas/parkingRecords/getQueryParkingRecord.schema";
import ExitParkingRecordsController from "../controllers/parkingRecords/ExitParkingRecords.controller";

const router = Router();

router.post("/parking", validateAuth, validateSchema(createParkingRecordSchema), 
            CreateParkingRecordController.handle);

router.post("/parking/:id/exit", validateAuth, ExitParkingRecordsController.handle);

router.put("/parking/:id", validateAuth, validateSchema(updateParkingRecordSchema),
            UpdateParkingRecordController.handle);

router.get("/parking", validateAuth, validateQuerySchema(getQueryParkingRecordSchema), 
            GetParkingRecordsController.handle)

export default router;