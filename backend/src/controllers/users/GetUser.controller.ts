import type { Request, Response } from "express";
import GetUserService from "../../services/users/GetUser.service";

class GetUserController {
    async handle(_req: Request, res: Response) {
        console.log("chegou ate o controller")

        const service = GetUserService;
        const response = await service.execute();

        res.status(200).json(response);
    }
}

export default new GetUserController();