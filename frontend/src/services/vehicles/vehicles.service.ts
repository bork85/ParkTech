import { api } from "@/lib/axios";

export async function getVehicles() {
    const {data} = await api.get("/parking")
    
    return data;
}
interface CreateVehicleProps {
    plate: string,
    model: string,
    color: string,
}
export async function createVehicle(payload: CreateVehicleProps) {
    const {data} = await api.post("/parking", payload)
    
    return data;
}

interface EditVehicleProps {
    plate?: string,
    model?: string,
    color?: string,
    id:     string,
}
export async function editVehicle(payload: EditVehicleProps) {
    const {data} = await api.put(`/parking/${payload.id}`, payload)
    
    return data;
}