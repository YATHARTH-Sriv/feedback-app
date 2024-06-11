import mongoose ,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content: string,
    createdAt: Date
}

const MessageSchema: Schema<Message>=new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
}) 

export interface User extends Document{
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    isVerified:boolean,
    verifycodeExpiry: Date,
    isAcceptingMessage: boolean,
    message: Message[]
}

const UserSchema: Schema<User>=new Schema({
    username:{
        type: String,
        required: [true,"username is required"],
        trim: true
        
    },
    email:{
        type: String,
        required: [true,"email is required"],
        unique: true,
        match: [/.+\@.+\..+/,"give valid email"]
    },
    password:{
        type: String,
        required: [true,"password required"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verifyCode:{
        type: String,
        required: [true,"verifycode required"]
    },
    verifycodeExpiry:{
        type: Date,
        required: [true,"paswword required"]
    },
    isAcceptingMessage:{
        type: Boolean,
       default:true
    },
    message: [MessageSchema]
})

const Usermodel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("Usermodel",UserSchema)

export default Usermodel