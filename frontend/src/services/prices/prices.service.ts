import { api } from "@/lib/axios";

export async function getPrices() {
    const {data} = await api.get("/price-config")

    return data;
}
interface CreatePricePayload {
    firstHourPrice: number,
    additionalHourPrice: number,
    permitFractionalTime?: boolean,
    fractionalTime: "NONE" | "MINUTES_30" | "MINUTES_15" | "MINUTES_10" | "MINUTES_05"    
}
export async function createPrice(payload: CreatePricePayload) {
    return await api.post("/price-config", payload);
}
interface EditPricePayload {
    id: string,
    firstHourPrice?: number,
    additionalHourPrice?: number,
    permitFractionalTime?: boolean,
    fractionalTime?: "NONE" | "MINUTES_30" | "MINUTES_15" | "MINUTES_10" | "MINUTES_05"    
}
export async function editPrice(payload: EditPricePayload) {
    return await api.put(`/price-config/${payload.id}`, payload);
}
