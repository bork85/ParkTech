import type { Request, Response } from "express";
import UpdateParkingRecordService from "../../services/parkingRecords/CreateParkingRecord.service";

class UpdateParkingRecord {
    async handle(req: Request, res: Response) {
        const input = req.body;
        input.id = req.params.id;

        const service = new UpdateParkingRecordService();
        const response = await service.execute(input);

        return res.status(201).json(response);
    }
}
export default new UpdateParkingRecord();