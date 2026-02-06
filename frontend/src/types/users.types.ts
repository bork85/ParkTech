export type roleType = "ADMIN" | "OPERATOR";

export type User = {
    id: string;
    name: string;
    email: string;
    role: roleType;    
    createdAt: string;
    updatedAt?: string;
}