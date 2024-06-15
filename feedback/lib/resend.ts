import { Resend } from 'resend';
import { Apiresponse } from '../helpers/Apiresponse';
import VerificationEmail from '../email/sendverify';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendemail(
    email:string,
    verifycode:string,
    username:string
):Promise<Apiresponse>{
        try {
            await resend.emails.send({
                from: '<onboarding@resend.dev>',
                to: email,
                subject: 'Feedback app verification email',
                react: VerificationEmail({ username,otp:verifycode}),
              });
            
            return {success:true,message:"verification email was sent"}
        } catch (error) {
            console.log("error",error)
            return {success:false,message:"verification email could not be sent"}
        }
}


