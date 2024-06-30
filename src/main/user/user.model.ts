import {z} from 'zod';


export const userModel = z.object({
    email: z.string().email(),
    username: z.string()
})