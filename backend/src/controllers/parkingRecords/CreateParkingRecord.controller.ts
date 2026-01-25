import type { Request, Response } from "express";
import CreateParkingRecordService from "../../services/parkingRecords/CreateParkingRecord.service";

class GetParkingRecordController {
    async handle(req: Request, res: Response) {
        const input = req.body;
        input.userId = req.user?.id;

        const service = new CreateParkingRecordService();
        const response = await service.execute(input);

        return res.status(201).json(response);
    }
}
export default new GetParkingRecordController();