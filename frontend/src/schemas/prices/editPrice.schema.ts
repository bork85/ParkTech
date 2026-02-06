import z from "zod";

export const editPriceSchema = z.object({
    firstHourPrice: z.number().min(1, "O preço da primeira hora é obrigatório").optional(),
    aditionalHourPrice: z.number().min(1, "O preço da hora adicional é obrigatório").optional(),
    fractionsPermitted: z.enum(["NÃO", "30min", "15min", "10min", "05min"]).optional(),
})

export type editPriceSchema = z.infer<typeof editPriceSchema>