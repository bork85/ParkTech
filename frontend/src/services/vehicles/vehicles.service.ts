//import { api } from "@/lib/axios";
import type { StatusParking } from "@/types/vehicles.types";
import { sleep } from "@/utils/sleep";


export async function getVehicles() {
    // COMENTADO PARA FASE DE TESTES, USANDO MOCK DE DADOS
    //const response = await api.get("/parking")
    const mockVehicles = [
        {
            id: "kjhfajsfkjafgag",
            plate: "ABC-1234",
            model: "Uno Mille",
            color: "Prata",
            totalValue: 25,
            exitAt: "2026-01-25 22:16:55.949",
            status: "FINISHED" as StatusParking,
            createdAt: "2026-01-25 19:36:55.949",
            updatedAt: "2026-01-25 22:16:55.949",
            entryUserID: "1d196335-9cfc-4144-87f5-7f152f7c56d1",
            exitUserID: "1d196335-9cfc-4144-87f5-7f152f7c56d1",
        },
        {
            id: "jfhjfhwkjhckjwhvhwkjvhwkh",
            plate: "IYI-1020",
            model: "Argo",
            color: "Cinza",
            totalValue: 50,
            exitAt: undefined,
            status: "ACTIVE" as StatusParking,
            createdAt: "2026-02-05 08:06:55.949",
            updatedAt: undefined,
            entryUserID: "1d196335-9cfc-4144-87f5-7f152f7c56d1",
            exitUserID: "1d196335-9cfc-4144-87f5-7f152f7c56d1",
        },
        {
            id: "cjhdskjhskhsvvv",
            plate: "ABC1Z34",
            model: "Uno Mille",
            color: "Vermelho",
            totalValue: 25,
            exitAt: "2026-02-05 11:36:55.949",
            status: "FINISHED" as StatusParking,
            createdAt: "2026-02-05 10:49:55.949",
            updatedAt: "2026-02-05 11:36:55.949",
            entryUserID: "1d196335-9cfc-4144-87f5-7f152f7c56d1",
            exitUserID: "1d196335-9cfc-4144-87f5-7f152f7c56d1",
        },
        {
            id: "vhjhjhvnkenvjenbj",
            plate: "IYI-0000",
            model: "C4",
            color: "Azul",
            totalValue: 50,
            exitAt: undefined,
            status: "ACTIVE" as StatusParking,
            createdAt: "2026-02-05 09:36:55.949",
            updatedAt: undefined,
            entryUserID: "1d196335-9cfc-4144-87f5-7f152f7c56d1",
            exitUserID: "1d196335-9cfc-4144-87f5-7f152f7c56d1",
        }
    ]
    await sleep()
    return {data: mockVehicles};
}