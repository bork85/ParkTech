import { api } from "@/lib/axios";
import type { roleType } from "@/types/users.types";

export async function getUsers() {
    const response = await api.get("/user")

    return {data: response.data};
}

interface CreateUserPayload {
    name: string;
    email: string;
    password: string;
    role?: roleType;
}

export async function CreateUser(payload: CreateUserPayload) {
    return await api.post("/user", payload)
}