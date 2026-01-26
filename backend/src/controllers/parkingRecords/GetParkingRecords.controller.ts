import type { Request, Response } from "express";
import GetParkingRecordService from "../../services/parkingRecords/GetParkingRecord.service";

class GetParkingRecords {
    async handle(req: Request, res: Response) {
        const search = req.query.search as string;
        const service = new GetParkingRecordService();
        const response = await service.execute({search});

        return res.status(201).json(response);
    }
}
export default new GetParkingRecords();