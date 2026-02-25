import z from "zod";

export const editPriceSchema = z.object({
    id: z.string().optional(),
    firstHourPrice: z.number().min(1, "O preço da primeira hora é obrigatório").optional(),
    additionalHourPrice: z.number().min(1, "O preço da hora adicional é obrigatório").optional(),
    permitFractionalTime: z.boolean().optional(),
    fractionalTime: z.enum(["NONE", "MINUTES_30", "MINUTES_15", "MINUTES_10", "MINUTES_05"]).optional(),
})

export type editPriceSchema = z.infer<typeof editPriceSchema>