import type { Request, Response } from "express";
import ExitParkingRecordService from "../../services/parkingRecords/ExitParkingRecord.service";

class ExitParkingRecord {
    async handle(req: Request, res: Response) {
        const parkingRecordId = req.params.id as string;
        const userId = req.user?.id as string;
        const service = new ExitParkingRecordService();
        const response = await service.execute({id: parkingRecordId, userId});

        return res.status(201).json("Vehicle exit successful");
    }
}
export default new ExitParkingRecord();