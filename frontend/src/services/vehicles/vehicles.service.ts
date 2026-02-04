import { api } from "@/lib/axios";


export async function getVehicles() {
    const response = await api.get("/parking")
    console.log(response)
    return response;
}