import { Router } from "express";
import CreatepriceConfigController from "../controllers/PriceConfig/CreatepriceConfig.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { CreatePriceConfigSchema } from "../schemas/priceConfig/createPriceConfig.schema";
import { validateAuth } from "../middlewares/validateAuth";
import { UserRole } from "../generated/prisma/enums";
import { validateRole } from "../middlewares/validateRole";
import getPriceConfigController from "../controllers/PriceConfig/getPriceConfig.controller";
import UpdatePriceConfigController from "../controllers/PriceConfig/UpdatepriceConfig.controller";
import { UpdatePriceConfigSchema } from "../schemas/priceConfig/updatePriceConfig.schema";

const router = Router();

router.post("/price-config", validateAuth, validateRole(UserRole.ADMIN), validateSchema(CreatePriceConfigSchema), 
    CreatepriceConfigController.handle);

router.get("/price-config", validateAuth, validateRole(UserRole.ADMIN), getPriceConfigController.handle);

router.put("/price-config/:id", validateAuth, validateRole(UserRole.ADMIN), 
    validateSchema(UpdatePriceConfigSchema), UpdatePriceConfigController.handle);

export default router;