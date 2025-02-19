import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextResponse } from "next/server";
dotenv.config();


export const emailDecoder = async (token) => {
    try {
        if (!token) {
            return NextResponse.json({ success: false, message: "No token found" })
        }
        const decodedEmail = jwt.verify(token, process.env.JWT_SECRET);
        return decodedEmail.email;
    } catch (error) {
        console.log("JWT Error:", error)
    }
}