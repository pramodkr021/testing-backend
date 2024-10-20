import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`)
        console.log(`DB connected on ${connectionInstance.connection.host} !!`)
    } catch (error) {
        console.error("DB Connection error ",error)
        process.exit(1)
    }
}

export default connectDB