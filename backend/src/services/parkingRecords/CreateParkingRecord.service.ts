import prisma from "../../config/database";
import { ParkingRecordStatus } from "../../generated/prisma/client";
import { AppError } from "../../utils/errors";

interface CreateParkingRecordServiceInput {
    plate: string,
    model: string,
    color: string,
    userId: string,
}

class CreateParkingRecordService {
    async execute(input: CreateParkingRecordServiceInput) {
        const existRecord = await prisma.parkingRecord.findFirst({
            where: {
                plate: input.plate,
                status: ParkingRecordStatus.ACTIVE,
            }
        })
        if (existRecord) {
            throw new AppError("Vehicle already in parking.", 409)
        }

        const parkingRecord = await prisma.parkingRecord.create({
            data: {
                plate: input.plate,
                model: input.model,
                color: input.color,
                entryUserID: input.userId,
            }
        })
        return parkingRecord;
    }
}

export default CreateParkingRecordService;
