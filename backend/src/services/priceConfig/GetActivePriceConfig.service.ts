import prisma from "../../config/database";
import { AppError } from "../../utils/errors";

class GetActivePriceConfigService {
    async execute(){
        const priceActive = await prisma.priceConfig.findFirst({
            where: {
                isActive: true,
            },
        });

        if(!priceActive) throw new AppError("No active price config found." , 404)
            
        return priceActive;
    }
}
export default GetActivePriceConfigService;