import mongoose from "mongoose"
import {DB_NAME} from "./constants"
import express from "express";

const app=express();




























// ;(async ()=>{
//     try{
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR IN APP",error);
//             throw error;
//         })

//         app.listen(process.env.PORT,()=>{
//            console.log(`APP IS LISTENING ON PORT ${process.env.PORT}`);
//         })
//     }catch(error)
//     {
//         console.log(error);
//         throw error;
//     }
// } )()