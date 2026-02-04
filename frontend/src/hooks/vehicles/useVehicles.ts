import { getVehicles } from "@/services/vehicles/vehicles.service"
import type { Vehicle } from "@/types/vehicles.types";
import { useEffect, useState } from "react";

interface VehiclesResponse {
    data: Vehicle[] | [];
}


export const useVehicles = ():VehiclesResponse => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getVehicles();
            setData(response.data);
        }
        fetchData();
    }, []);

    return {data};
}