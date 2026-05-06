import type { Request, Response } from "express";
import UpdatePriceConfigService from "../../services/priceConfig/UpdatePriceConfig.service";

class UpdatePriceConfigController {
    async handle(req: Request, res: Response) {

        const input = req.body;
        input.id = req.params.id;

        const service = new UpdatePriceConfigService();
        await service.execute(input);

        res.status(200).json("Update Success");
    }
}
export default new UpdatePriceConfigController();