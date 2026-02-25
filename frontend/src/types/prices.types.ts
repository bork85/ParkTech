export type fractionsPermittedType = "NONE" | "MINUTES_30" | "MINUTES_15" | "MINUTES_10" | "MINUTES_05";

export type Price = {
    id: string;
    firstHourPrice: number;
    additionalHourPrice: number;
    fractionalTime: fractionsPermittedType; 
    isActive: boolean;   
    createdAt: string;
    updatedAt?: string;
}
