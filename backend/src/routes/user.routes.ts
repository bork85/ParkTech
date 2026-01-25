import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUser.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/users/createUser.schema";
import { validateAuth } from "../middlewares/validateAuth";
import { validateRole } from "../middlewares/validateRole";
import { UserRole } from "../generated/prisma/enums";

const router = Router();

    router.post("/user", validateAuth, validateRole(UserRole.ADMIN), validateSchema(createUserSchema), CreateUserController.handle);

export default router;