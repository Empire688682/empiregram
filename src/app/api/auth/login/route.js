import { NextResponse } from "next/server";
import { usersModel } from "../../models/user";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { connectDB } from "../../utils/dbConnect";
dotenv.config();


const loginUser = async (req) =>{
    connectDB();
   if(req.method === "POST"){
    try {
        const reqBody = await req.json();
        const {username, password} = reqBody;

        const user = await usersModel.findOne({username});

        if(!user){
            return NextResponse.json({success:false, message: "User not found"}, {status:400})
        };

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return NextResponse.json({success:false, message: "Incorrect password"}, {status:400})
        }

        const token = jwt.sign({id:user._id}, "juwon");
        const res = NextResponse.json({success:true, message:"Log in successfully", user: user}, {status:200});
        res.cookies.set("EmpireGToken", token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            maxAge: 2 * 24 * 60 * 60, // 2 days
            sameSite: "lax",
            path: "/",
        });
        return res;

    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({success:false, message:"Unable to login user"}, {status:500})
    }
   }
}

export async function POST(req){
    return loginUser(req);
}