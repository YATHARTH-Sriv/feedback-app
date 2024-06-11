import dbconnect from "../../../../lib/dbconnect";
import Usermodel from "@/model/user.model";
import bcrypt from "bcryptjs"
import { sendemail } from "../../../../lib/resend";

export async function POST(request:Request){
    await dbconnect()
    try {
        const{username,email,password}=await request.json()
        const useralreadyexistandverified=await Usermodel.findOne({email,isVerified:true})
        if(useralreadyexistandverified){
            return Response.json({
                success:false,
                message:" email already exists and is verified "
            })
        }
        const userexists=await Usermodel.findOne({email})
        const verifyCode=Math.floor(100000 + Math.random()*900000).toString()
        if(userexists){
            if (userexists.isVerified) {
                return Response.json(
                  {
                    success: false,
                    message: 'User already exists with this email',
                  },
                  { status: 400 }
                );
              } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                userexists.password = hashedPassword;
                userexists.verifyCode = verifyCode;
                userexists.verifycodeExpiry = new Date(Date.now() + 3600000);
                await userexists.save()
              }
        }else{
            const newpass=await bcrypt.hash(password,10)
            const expirydate= new Date()
            expirydate.setHours(expirydate.getHours() + 2)
            
            const newuser=await Usermodel.create({
                username,
                email,
                password: newpass,
                verifyCode,
                isVerified:false,
                verifycodeExpiry: expirydate,
                isAcceptingMessage: true,
                message: []
            })
            await newuser.save()
        }
        const emailresponse=await sendemail(email,username,verifyCode)
        if(!emailresponse.success){
            return Response.json({
                sucsess:false,
                message:emailresponse.message
            })
        }
    } catch (error) {
        console.log(error)
        console.log("error occured",error)
        return Response.json({
            success:true,
            message:"an error occured"
        })

    }
}