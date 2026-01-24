import prisma from "../../config/database";
import { FractionalTimes } from "../../generated/prisma/enums";


interface CreatePriceConfigInput {
    firstHourPrice: number,
    additionalHourPrice: number,
    permitFractionalTime?: boolean,
    fractionalTime?: FractionalTimes,
    isActive?: boolean
}

class CreatePriceConfigService {
    async execute(input: CreatePriceConfigInput) {
        await prisma.priceConfig.updateMany({
            data: {
                isActive: false,
            },
        });
        const config = await prisma.priceConfig.create({
            data: {
                firstHourPrice: input.firstHourPrice,
                additionalHourPrice: input.additionalHourPrice,
                permitFractionalTime: input.permitFractionalTime,
                fractionalTime: input.fractionalTime,
                isActive: input.isActive                
            }
        })
        return config;
    }
}
export default CreatePriceConfigService;