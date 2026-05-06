import type { Request, Response } from "express";
import CreatePriceConfigService from "../../services/priceConfig/CreatePriceConfig.service";

class CreatePriceConfig {
    async handle(req: Request, res: Response) {
        const input = req.body;

        const service = new CreatePriceConfigService();
        const response = await service.execute(input);

        return res.status(201).json(response);
    }
}
export default new CreatePriceConfig();