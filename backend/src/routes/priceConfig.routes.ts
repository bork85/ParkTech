import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { CreatePriceConfigSchema } from "../schemas/priceConfig/createPriceConfig.schema";
import { validateAuth } from "../middlewares/validateAuth";
import { UserRole } from "../generated/prisma/enums";
import { validateRole } from "../middlewares/validateRole";
import { UpdatePriceConfigSchema } from "../schemas/priceConfig/updatePriceConfig.schema";
import CreatepriceConfigController from "../controllers/PriceConfig/CreatepriceConfig.controller";
import GetPriceConfigController from "../controllers/PriceConfig/GetPriceConfig.controller";
import UpdatePriceConfigController from "../controllers/PriceConfig/UpdatePriceConfig.controller";

const router = Router();

router.post("/price-config", validateAuth, validateRole(UserRole.ADMIN), validateSchema(CreatePriceConfigSchema), 
    CreatepriceConfigController.handle);

router.get("/price-config", validateAuth, validateRole(UserRole.ADMIN), GetPriceConfigController.handle);

router.put("/price-config/:id", validateAuth, validateRole(UserRole.ADMIN), 
    validateSchema(UpdatePriceConfigSchema), UpdatePriceConfigController.handle);

export default router;