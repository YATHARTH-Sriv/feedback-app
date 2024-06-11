import {z} from "zod"

export const usernamevalid=
    z.string()
    .min(3,"username should be of atleast 3 charachters")
    .max(20,"username should be of less than 20")

    export const signupschema=z.object({
        username:usernamevalid,
        email:z.string().email({message:"invalid email address"}),
        password: z.string().min(6,{message:"atleast 6 charachters"})
    })