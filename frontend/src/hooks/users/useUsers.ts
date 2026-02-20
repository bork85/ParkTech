import { getUsers } from "@/services/users/users.service";
import type { User } from "@/types/users.types";
import { useEffect, useState } from "react";

interface UsersResponse {
    data: User[] | [];
    error: boolean;
    isLoading: boolean;
    refetch: () => void;
}

export const useUsers = ():UsersResponse => {
    const [data, setData] = useState<User[] | []>([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData() {
        try {
            console.log("FETCHDATA")
            const response = await getUsers();
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

    return {data, error, isLoading, refetch: fetchData};
}