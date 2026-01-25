import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth";
import { validateSchema } from "../middlewares/validateSchema";
import { createParkingRecordSchema } from "../schemas/parkingRecords/createParkingRecord.schema";
import { updateParkingRecordSchema } from "../schemas/parkingRecords/updateParkingRecord.schema";
import CreateParkingRecordController from "../controllers/parkingRecords/CreateParkingRecord.controller";
import UpdateParkingRecordController from "../controllers/parkingRecords/UpdateParkingRecord.controller";
import GetParkingRecordsController from "../controllers/parkingRecords/GetParkingRecords.controller";

const router = Router();

router.post("/parking", validateAuth, validateSchema(createParkingRecordSchema), 
            CreateParkingRecordController.handle);

router.put("/parking/:id", validateAuth, validateSchema(updateParkingRecordSchema),
            UpdateParkingRecordController.handle);

router.get("/parking", validateAuth, GetParkingRecordsController.handle)

export default router;