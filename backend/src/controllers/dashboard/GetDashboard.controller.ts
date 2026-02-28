import type { Request, Response } from "express";
import GetDashboardService from "../../services/dashboard/GetDashboard.service";

class GetDashboard {
    async handle(req: Request, res: Response) {
        const period = req.query.period as 'today' | 'week' | 'month' | 'year' | 'all'
        const service = new GetDashboardService();
        const response = await service.execute({period});

        res.status(200).json(response);
    }
}
export default new GetDashboard