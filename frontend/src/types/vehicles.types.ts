export type StatusParking = "ACTIVE" | "FINISHED";

export type Vehicle = {
    id: string;
    plate: string;
    model: string;
    color: string;
    totalValue: number;
    exitAt?: Date;
    status: StatusParking;
    createdAt: Date;
    updatedAt: Date;
    entryUserID: string;
    exitUserID: string;
}