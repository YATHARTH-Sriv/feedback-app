import {z} from 'zod'

export const messageschema=z.object({
    content:z.string()
    .min(6,"content should be of atleast 6 charachters")
    .max(30,"content should be of atmost 30 charachters")
})