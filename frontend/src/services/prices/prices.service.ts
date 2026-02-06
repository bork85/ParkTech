//import { api } from "@/lib/axios";
import type { fractionsPermittedType } from "@/types/prices.types";
import { sleep } from "@/utils/sleep";


export async function getPrices() {
    // COMENTADO PARA FASE DE TESTES, USANDO MOCK DE DADOS
    //const response = await api.get("/price-config")
    const mockPrices = [
        {
            id: "jfhjfhwkjhckjwhvhwkjvhwkh",
            firstHourPrice: 15,
            aditionalHourPrice: 10,
            fractionsPermitted: "NÃO" as fractionsPermittedType,
            isActive: true,
            createdAt: "2026-02-01 08:06:55.949",
            updatedAt: undefined,
        },
                {
            id: "ggdjvkchwkjvhwkckckjb",
            firstHourPrice: 25,
            aditionalHourPrice: 20,
            fractionsPermitted: "15min" as fractionsPermittedType,
            isActive: false,
            createdAt: "2026-02-01 08:06:55.949",
            updatedAt: "2026-02-05 08:06:55.949",
        },            
        {
            id: "d653626572bbsvbsmbv",
            firstHourPrice: 15,
            aditionalHourPrice: 10,
            fractionsPermitted: "30min" as fractionsPermittedType,
            isActive: false,
            createdAt: "2026-02-05 08:06:55.949",
            updatedAt: undefined,
        },
    ]
    await sleep()
    return {data: mockPrices};
}