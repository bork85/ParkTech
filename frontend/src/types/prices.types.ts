export type fractionsPermittedType = "NÃO" | "30min" | "15min" | "10min" | "05min";

export type Price = {
    id: string;
    firstHourPrice: number;
    aditionalHourPrice: number;
    fractionsPermitted: fractionsPermittedType; 
    isActive: boolean;   
    createdAt: string;
    updatedAt?: string;
}
