import { Router } from "express";
import LoginController from "../controllers/auth/Login.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/users/createUser.schema";
import CreateUserController from "../controllers/users/CreateUser.controller";

const router = Router();

router.post("/login", LoginController.handle);
router.post("/register", validateSchema(createUserSchema), CreateUserController.handle);

export default router;