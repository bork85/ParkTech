import type { Request, Response } from "express";
import GetParkingRecordService from "../../services/parkingRecords/GetParkingRecord.service";

class GetParkingRecords {
    async handle(req: Request, res: Response) {
        const search = req.query.search as string;
        const status = req.query.status as 'ACTIVE' | 'FINISHED';
        const service = new GetParkingRecordService();
        const response = await service.execute({search, status});

        return res.status(200).json(response);
    }
}
export default new GetParkingRecords();