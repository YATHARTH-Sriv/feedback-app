import { Message } from "@/model/user.model";

export interface Apiresponse{
    success: boolean,
    message: string,
    isAcceptingMessages?:boolean,
    messages?:Array<Message>
}