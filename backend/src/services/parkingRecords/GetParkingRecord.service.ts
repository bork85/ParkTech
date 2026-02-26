import prisma from "../../config/database";
import { ParkingRecordStatus } from "../../generated/prisma/enums";

interface getQueryParkingRecordInput {
    search?: string;
    status?: ParkingRecordStatus
}
class GetParkingRecordService {
    async execute(input: getQueryParkingRecordInput) {
        const searchTerm = input.search;
        const status = input.status;
        const parkingRecords = await prisma.parkingRecord.findMany({
            where: {
                ...(searchTerm && {
                    OR: [
                        { plate: { contains: searchTerm, mode: 'insensitive' } },
                        { model: { contains: searchTerm, mode: 'insensitive' } },
                        { color: { contains: searchTerm, mode: 'insensitive' } },
                    ]
                }),
                ...(status && { status: status })
            }
        })
        return parkingRecords;
    }
}

export default GetParkingRecordService;
