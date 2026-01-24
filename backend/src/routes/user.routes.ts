import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUser.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/users/createUser.schema";

const router = Router();

    router.post("/user", validateSchema(createUserSchema), CreateUserController.handle);

export default router;