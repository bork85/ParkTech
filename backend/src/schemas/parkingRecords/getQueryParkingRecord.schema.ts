import z from "zod";

export const getQueryParkingRecordSchema = z.object({
    search: z.string().optional(),
    status: z.enum(['ACTIVE', 'FINISHED']).optional(),
}).strict();