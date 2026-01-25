import prisma from "../../config/database";
import { AppError } from "../../utils/errors";


interface UpdateParkingRecordServiceInput {
    plate?: string,
    model?: string,
    color?: string,
    id: string
}

class UpdateParkingRecordService {
    async execute(input: UpdateParkingRecordServiceInput) {
        const existRecord = await prisma.parkingRecord.findUnique({
            where: {
                id: input.id
            }
        })
        if (!existRecord) {
            throw new AppError("Vehicle isn't parking here now.", 404)
        }

        const parkingRecord = await prisma.parkingRecord.update({
            where: {
                id: input.id
            },
            data: {
                plate: input.plate,
                model: input.model,
                color: input.color,
            }
        })
        return parkingRecord;
    }
}

export default UpdateParkingRecordService;
