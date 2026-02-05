import z from "zod";

export const createVehicleSchema = z.object({
    plate: z.string().min(1, "A placa é obrigatória").transform(data=> data.toUpperCase()),
    model: z.string().min(2, "O modelo é obrigatório"),
    color: z.string().min(2, "A cor é obrigatória"),
})

export type createVehicleSchema = z.infer<typeof createVehicleSchema>