export type DashboardPeriod = 'today' | 'week' | 'month' | 'year' | 'all';

export interface DashboardData {
    activeVehicles: number;
    totalEntries: number;
    totalExits: number;
    totalRevenue: number;
}