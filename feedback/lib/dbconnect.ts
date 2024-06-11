import mongoose from "mongoose";

type connectiontype={
    isConnected?:number
}

const connection:connectiontype={}

async function dbconnect():Promise<void>{
      if(connection.isConnected){
        console.log("db connection already exists")
        return
      }
      try {
        const db=await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log(db)
        connection.isConnected=db.connections[0].readyState
        console.log("db connected")
      } catch (error) {
        console.log(error)
        process.exit(1)
      }
}

export default dbconnect