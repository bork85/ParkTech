import { getVehiclePrice } from "@/services/vehicles/vehicles.service"
import { useEffect, useState } from "react";

interface GetVehiclesPriceResponse {
    data: {totalValue?: number};
    error: boolean;
    isLoading: boolean;
}

interface UseGetVehiclePrice {
    id: string;
}

export const useGetVehiclePrice = (params: UseGetVehiclePrice):GetVehiclesPriceResponse => {
    const [data, setData] = useState<GetVehiclesPriceResponse["data"]>({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData() {
        try {                
            const response = await getVehiclePrice(params);
            console.log('Preço do veículo:', response.data);
            setData(response.data);
        } catch {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return {data, error, isLoading: isLoading};
}