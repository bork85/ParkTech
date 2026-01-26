import z from "zod";

export const getQueryParkingRecordSchema = z.object({
    search: z.string().optional(),
}).strict();