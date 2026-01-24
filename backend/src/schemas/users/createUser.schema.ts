import z from 'zod'
import { UserRole } from '../../generated/prisma/enums'

export const createUserSchema = z.object({
    name: z.string().min(2, 'Name is required and minimal lenght is 2 caracters'),
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password is required and minimal lenght is 6 caracters'),
    role: z.enum(UserRole).optional()
})