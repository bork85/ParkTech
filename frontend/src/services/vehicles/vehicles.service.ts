import { api } from "@/lib/axios";

interface GetVehiclesParams {
    search?: string;
    status?: 'ACTIVE' | 'FINISHED';
}
export async function getVehicles(params: GetVehiclesParams) {
    const {data} = await api.get("/parking", {params})
    
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

export async function exitVehicle(value:EditVehicleProps) {
    return await api.post(`/parking/${value.id}/exit`)
}
export async function getVehiclePrice(value:EditVehicleProps) {
    return await api.get(`/parking/${value.id}/price`)
}