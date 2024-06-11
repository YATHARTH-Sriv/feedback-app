import {  NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import dbconnect from "../../../../../lib/dbconnect";
import Usermodel from "@/model/user.model";

export const authoptions:NextAuthOptions={
    providers: [
        CredentialsProvider({
          id:"Credentials",
          name: "Credentials",
          credentials: {
            email: { label: "email", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials:any):Promise<any>{
               await dbconnect()
               try {
                const user= await Usermodel.findOne({
                    email:credentials.identifier
                  
                })
                if(!user){
                  return Response.json("user was not found",{status:402})
                }
               } catch (error) {
                
               }
          }
        })
        ]
}

