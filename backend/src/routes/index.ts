import { Router } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import priceConfigRoutes from './priceConfig.routes'

const router = Router();

router.use(userRoutes);
router.use(authRoutes);
router.use(priceConfigRoutes);

export default router;