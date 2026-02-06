import z from "zod";

export const createUserSchema = z.object({
    name: z.string().min(2, "O nome é obrigatório"),
    email: z.email("Email inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export type createUserSchema = z.infer<typeof createUserSchema>