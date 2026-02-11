//import { api } from "@/lib/axios";
import type { roleType } from "@/types/users.types";
import { sleep } from "@/utils/sleep";

interface User2 {
    email: string;
    password: string;
}

export async function loginUsers(data: User2) {
    // COMENTADO PARA FASE DE TESTES, USANDO MOCK DE DADOS
    //const response = await api.get("/user")
    const mockUsers = [
        {
            id: "jfhjfhwkjhckjwhvhwkjvhwkh",
            name: "Daniel Bork",
            email: "daniel.bork@email.com",
            role: "ADMIN" as roleType,
            createdAt: "2026-02-01 08:06:55.949",
            updatedAt: undefined,
        },
                {
            id: "ggdjvkchwkjvhwkckckjb",
            name: "João Borge",
            email: "joao.borges@email.com",
            role: "OPERATOR" as roleType,
            createdAt: "2026-02-01 08:06:55.949",
            updatedAt: "2026-02-05 08:06:55.949",
        },        
        {
            id: "lkklkçlknbnvsxgcashfcas",
            name: "José Claudio",
            email: "jose.claudio@email.com",
            role: "OPERATOR" as roleType,
            createdAt: "2026-02-03 08:06:55.949",
            updatedAt: "2026-02-05 08:06:55.949",
        },        
        {
            id: "d653626572bbsvbsmbv",
            name: "Luiza Maria",
            email: "luiza.maria@email.com",
            role: "ADMIN" as roleType,
            createdAt: "2026-02-05 08:06:55.949",
            updatedAt: undefined,
        },
    ]
    await sleep()

    const userValid = mockUsers.find(user => user.email === data.email)

    if(!userValid) {
        alert("Usuário ou senha inválidos!")
        throw new Error("Usuário ou senha inválidos!")
    }

    return {data: userValid};
}