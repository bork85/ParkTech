import { Router } from "express";
import CreatepriceConfigController from "../controllers/PriceConfig/CreatepriceConfig.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { CreatePriceConfigSchema } from "../schemas/priceConfig/createPriceConfig.schema";
import { validateAuth } from "../middlewares/validateAuth";
import { UserRole } from "../generated/prisma/enums";
import { validateRole } from "../middlewares/validateRole";

const router = Router();

router.post("/price-config", validateAuth, validateRole(UserRole.ADMIN), validateSchema(CreatePriceConfigSchema), CreatepriceConfigController.handle)

export default router;