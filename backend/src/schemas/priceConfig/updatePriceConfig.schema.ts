import z from "zod";
import { FractionalTimes } from "../../generated/prisma/enums";

export const UpdatePriceConfigSchema = z.object({
        firstHourPrice: z.number()
                .min(0.01, 'First hour price is required and must be greater than 0').optional(),
        additionalHourPrice: z.number()
                .min(0.01, 'Additional hour price is required and must be greater than 0').optional(),
        permitFractionalTime: z.boolean().optional(),
        fractionalTime: z.enum(FractionalTimes).optional(),
        isActive: z.boolean().optional(),
        id: z.string()
})