import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUser.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/users/createUser.schema";
import { validateAuth } from "../middlewares/validateAuth";
import { validateRole } from "../middlewares/validateRole";
import { UserRole } from "../generated/prisma/enums";
import GetUserController from "../controllers/users/GetUser.controller";

const router = Router();

    router.post("/user", validateAuth, validateRole(UserRole.ADMIN), validateSchema(createUserSchema), CreateUserController.handle);
    router.get("/user", validateAuth, validateRole(UserRole.ADMIN), GetUserController.handle);

export default router;