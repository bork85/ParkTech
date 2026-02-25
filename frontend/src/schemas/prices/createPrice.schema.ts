import z from "zod";

export const createPriceSchema = z.object({
    firstHourPrice: z.number().min(1, "O preço da primeira hora é obrigatório"),
    additionalHourPrice: z.number().min(1, "O preço da hora adicional é obrigatório"),
    permitFractionalTime: z.boolean().optional(),
    fractionalTime: z.enum(["NONE", "MINUTES_30", "MINUTES_15", "MINUTES_10", "MINUTES_05"]),
})

export type createPriceSchema = z.infer<typeof createPriceSchema>