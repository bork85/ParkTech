import z from "zod";


export const updateParkingRecordSchema = z.object({
    plate: z.string().min(5, 'Plate is required').optional(),
    model: z.string().min(2, 'Model is required').optional(),
    color: z.string().min(2, 'Color is required').optional(),
})