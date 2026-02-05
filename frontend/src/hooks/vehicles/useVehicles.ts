import { getVehicles } from "@/services/vehicles/vehicles.service"
import type { Vehicle } from "@/types/vehicles.types";
import { useEffect, useState } from "react";

interface VehiclesResponse {
    data: Vehicle[] | [];
    error: boolean;
    isLoading: boolean;
}

export const useVehicles = ():VehiclesResponse => {
    const [data, setData] = useState<Vehicle[] | []>([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await getVehicles();
                setData(response.data);
            } catch {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return {data, error, isLoading};
}