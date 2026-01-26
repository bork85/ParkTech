import prisma from "../../config/database";

interface getQueryParkingRecordInput {
    search?: string;
}
class GetParkingRecordService {
    async execute(input: getQueryParkingRecordInput) {
        const searchTerm = input.search;
        const parkingRecords = await prisma.parkingRecord.findMany({
            where: {
                ...(searchTerm && {
                    OR: [
                        { plate: { contains: searchTerm, mode: 'insensitive' } },
                        { model: { contains: searchTerm, mode: 'insensitive' } },
                        { color: { contains: searchTerm, mode: 'insensitive' } },
                    ]
                })
            }
        })
        return parkingRecords;
    }
}

export default GetParkingRecordService;
