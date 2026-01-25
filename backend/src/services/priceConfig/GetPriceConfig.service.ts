import prisma from "../../config/database";

class GetPriceConfigService {
    async execute(){
        const prices = await prisma.priceConfig.findMany();
        return prices;
    }
}
export default new GetPriceConfigService();