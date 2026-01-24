import z from "zod";
import { FractionalTimes } from "../../generated/prisma/enums";

export const CreatePriceConfigSchema = z.object({
        firstHourPrice: z.number().min(0.01, 'First hour price is required and must be greater than 0'),
        additionalHourPrice: z.number().min(0.01, 'Additional hour price is required and must be greater than 0'),
        permitFractionalTime: z.boolean().optional(),
        fractionalTime: z.enum(FractionalTimes).optional(),
        isActive: z.boolean().optional()
})