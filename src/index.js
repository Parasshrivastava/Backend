// require ('dotenv').config({path:'./env'})\\\more optimised code as we use modulle form

import dotenv from"dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js"

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error",()=>{
        console.log("ERROR IN APP :)",error);
        throw error;
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`SERVER IS RUNNING :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED",err);
})








































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