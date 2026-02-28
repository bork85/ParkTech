import z from "zod";

export const getQueryDashboardSchema = z.object({   
    period: z.enum(['today', 'week', 'month', 'year', 'all']).optional(),
}).strict();