// require ('dotenv').config({path:'./env'})\\\more optimised code as we use modulle form

import dotenv from"dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path:'./env'
})

connectDB()









































// import {DB_NAME} from "./constants"
// import express from "express";
   // const app=express();
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