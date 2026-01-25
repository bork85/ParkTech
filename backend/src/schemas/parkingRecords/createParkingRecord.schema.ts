import z from "zod";


export const createParkingRecordSchema = z.object({
    plate: z.string().min(5, 'Plate is required'),
    model: z.string().min(2, 'Model is required'),
    color: z.string().min(2, 'Color is required'),
})