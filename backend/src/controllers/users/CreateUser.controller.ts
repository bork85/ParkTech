import type { Request, Response } from "express";
import CreateUserService from "../../services/users/CreateUser.service";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const input = req.body;
        const service = CreateUserService;
        const user = await service.execute(input);
        res.status(201).json("SUCCESS: User created!");
    }
}

export default new CreateUserController();