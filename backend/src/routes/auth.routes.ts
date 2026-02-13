import { Router } from "express";
import LoginController from "../controllers/auth/Login.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/users/createUser.schema";
import CreateUserController from "../controllers/users/CreateUser.controller";
import { validateAuth } from "../middlewares/validateAuth";

const router = Router();

router.post("/login", LoginController.handle);
router.post("/register", validateSchema(createUserSchema), CreateUserController.handle);

router.get('/me', validateAuth, (_req, res) => {
    return res.status(200).json();
})

export default router;