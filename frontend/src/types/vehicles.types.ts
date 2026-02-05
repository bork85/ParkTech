export type StatusParking = "ACTIVE" | "FINISHED";

export type Vehicle = {
    id: string;
    plate: string;
    model: string;
    color: string;
    totalValue?: number;
    exitAt?: string;
    status: StatusParking;
    createdAt: string;
    updatedAt?: string;
    entryUserID: string;
    exitUserID?: string;
}