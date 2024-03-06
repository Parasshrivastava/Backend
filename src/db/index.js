import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTED !!! DB HOST :${connectionInstance.connection.host}`);   
            //  conecttion check kerne ke liye data kaha se a raha hai
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1);//NODE MAi PADNA HAI NODE Acess deta hai process ka
    }   
}


export default connectDB;