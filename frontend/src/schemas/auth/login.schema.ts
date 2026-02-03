import z from 'zod'

export const LoginSchema = z.object({
    email: z.email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(6, 'Password must be more than 6 characters'),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>