import z from 'zod'

export const RegisterSchema = z.object({
    name: z.string().min(2, 'Name is required and min length is 2 characters'),
    email: z.email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(6, 'Password must be more than 6 characters'),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>