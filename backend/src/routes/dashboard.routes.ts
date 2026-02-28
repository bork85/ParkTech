import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth";
import { validateRole } from "../middlewares/validateRole";
import { UserRole } from "../generated/prisma/enums";
import { getQueryDashboardSchema } from "../schemas/dashboard/getQueryDashboard.schema";
import GetDashboardController from "../controllers/dashboard/GetDashboard.controller";
import { validateQuerySchema } from "../middlewares/validateQuerySchema";

const router = Router();

router.get('/dashboard', validateAuth, validateRole(UserRole.ADMIN), 
    validateQuerySchema(getQueryDashboardSchema), GetDashboardController.handle)

export default router;