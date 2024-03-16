import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret:  process.env.CLOUDINARY_SECRET,
});



const uploadOnCloudinary=async (localFilePath)=>
{
    try {
        if(!localFilePath) return null
        // upload file on cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded sucessfullly
        console.log("FILE IS UPLOADED ON CLOUDINARY",response.url)
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        // remove locally saved temporary file opearation got failed
        console.log("FILE UPLOAD ON CLOUDINARY FAILED ");
        return null
    }   
}