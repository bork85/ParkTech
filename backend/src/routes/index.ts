import { Router } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import priceConfigRoutes from './priceConfig.routes'
import parkingRecordRoutes from './parkingRecord.routes'
import dashboardRoutes from './dashboard.routes'

const router = Router();

router.use(userRoutes);
router.use(authRoutes);
router.use(priceConfigRoutes);
router.use(parkingRecordRoutes);
router.use(dashboardRoutes)

export default router;