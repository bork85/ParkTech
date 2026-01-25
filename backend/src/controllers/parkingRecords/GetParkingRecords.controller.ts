import type { Request, Response } from "express";
import GetParkingRecordService from "../../services/parkingRecords/GetParkingRecord.service";

class GetParkingRecords {
    async handle(_req: Request, res: Response) {
        const service = new GetParkingRecordService();
        const response = await service.execute();

        return res.status(201).json(response);
    }
}
export default new GetParkingRecords();