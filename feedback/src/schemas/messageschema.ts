import {z} from 'zod'

export const messageschema=z.object({
    content:z.string()
    .min(6,"content should be of atleast 6 charachters")
    .max(6,"content should be of atleast 6 charachters")
})