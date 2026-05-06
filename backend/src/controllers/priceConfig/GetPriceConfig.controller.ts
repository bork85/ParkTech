import type { Request, Response } from "express";
import GetPriceConfigService from "../../services/priceConfig/GetPriceConfig.service";

class GetPriceConfigController {
    async handle(_req: Request, res: Response) {        
        const response = await GetPriceConfigService.execute();
        res.status(200).json(response)
    }
}
export default new GetPriceConfigController();