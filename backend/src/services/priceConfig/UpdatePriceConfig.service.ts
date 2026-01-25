import prisma from "../../config/database";
import { FractionalTimes } from "../../generated/prisma/enums";


interface UpdatePriceConfigInput {
    id: string,
    firstHourPrice?: number,
    additionalHourPrice?: number,
    permitFractionalTime?: boolean,
    fractionalTime?: FractionalTimes,
    isActive?: boolean
}

class UpdatePriceConfigService {
    async execute(input: UpdatePriceConfigInput) {
        if(input.isActive){
            await prisma.priceConfig.updateMany({
            where: {
                isActive: true,
            },
            data: {
                isActive: false,
            },
        });
        }
        await prisma.priceConfig.update({
            where: {
                id: input.id,
            },
            data: {
                firstHourPrice: input.firstHourPrice,
                additionalHourPrice: input.additionalHourPrice,
                permitFractionalTime: input.permitFractionalTime,
                fractionalTime: input.fractionalTime,
                isActive: input.isActive                
            }
        })
        return;
    }
}
export default UpdatePriceConfigService;