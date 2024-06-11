import {z} from "zod"

export const acceptschema=z.object({
   isAcceptingMessage:z.boolean()
})