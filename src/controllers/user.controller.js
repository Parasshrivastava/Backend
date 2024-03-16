import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"

import {ApiResponse} from "../utils/ApiResponse.js"
const registerUser=asyncHandler( async(req,res)=>{
    // get user detail from frontend
    // validation
    // check if user already exists using username and email
    // check for images 
    // check for avatar
    // upload them to cloudnary
    // crate user object -create entry in db
    // remove password and password token field in response
    // check response for user creaton 
    // return response


   const {fullName,email,username,password} =req.body
   console.log("email",email);
   if([fullName,email,username,password].some((field)=>field?.trim()===""))
   {
    throw new ApiError(400,"ALL Fields Are Required")
   }

   const existedUser=User.findOne({
    $or:[{username},{email}]
   })
   if(existedUser)
   {
    throw new ApiError(409,"User With username or email already exists")
   }

   const avatarLocalPath=req.files?.avatar[0]?.path

   const coverImageLocalpath=req.files?.coverImage[0]?.path
   if(!avatarLocalPath)
    {throw new ApiError(400,"Avatar File. is Required")}
   const avatar=await uploadOnCloudinary(avatarLocalPath)

   const coverImage=await uploadOnCloudinary(coverImageLocalpath)
   if(!avatar)
   {
    throw new ApiError(400,"Avatar File. is Required")
   }


   const user=await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage.url||"",
    email,
    password,
    username:username.toLowerCase()
   })

   const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
   )
   if(!createdUser)
   {
    throw new ApiError(500,"SOMETHING went wrong while registering user")
   }

   return res.status(201).json(
    
    new ApiResponse(200,createdUser,"User Registered Sucessfully" )
   )

})


export {registerUser}