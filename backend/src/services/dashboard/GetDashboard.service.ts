import prisma from "../../config/database";
import { ParkingRecordStatus } from "../../generated/prisma/enums";

interface GetDashboardInput {
    period: 'today' | 'week' | 'month' | 'year' | 'all'
}

class GetDashboardService {
    async execute(input: GetDashboardInput) {
        const period = input.period;
        const startDate = this.getStartDate({period})

        const activeVehicles = await prisma.parkingRecord.count({
            where: {
                status: ParkingRecordStatus.ACTIVE,
            }
        })
        const totalEntries = await prisma.parkingRecord.count({
            where: {
                createdAt: { gte: startDate },
            }
        })
        const totalExits = await prisma.parkingRecord.count({
            where: {
                createdAt: {gte: startDate},
                status: ParkingRecordStatus.FINISHED,
            }
        })
        const totalRevenue = await prisma.parkingRecord.aggregate({
            _sum: {
                totalValue: true,
            },
            where: {
                createdAt: {gte: startDate},
                status: ParkingRecordStatus.FINISHED,
            }
        })
        return {
            activeVehicles,
            totalEntries,
            totalExits,
            totalRevenue: totalRevenue._sum.totalValue ?? 0,
        }
    }
    private getStartDate({period}: GetDashboardInput) {
        const now = new Date();
        switch (period) {
            case 'today':
                return new Date(now.setHours(0, 0, 0, 0));
            case 'week':                
                return new Date(now.setDate(now.getDate() - 7 ));
            case 'month':
                return new Date(now.setDate(now.getDate() - 30 ));
            case 'year':
                return new Date(now.setDate(now.getDate() - 365 ));
            case 'all':
                return undefined;
            default:
                return undefined;
        }
    }
}

export default GetDashboardService