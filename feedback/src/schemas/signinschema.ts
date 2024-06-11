import {z} from "zod"

export const signinschema=z.object({
   username:z.string(),
   password:z.string()
})
