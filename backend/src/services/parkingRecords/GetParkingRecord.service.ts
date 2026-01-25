import prisma from "../../config/database";

class GetParkingRecordService {
    async execute() {
        const parkingRecords = await prisma.parkingRecord.findMany()
        return parkingRecords;
    }
}

export default GetParkingRecordService;
