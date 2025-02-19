import { NextResponse } from "next/server";
import { usersModel } from "../../models/user";
import { connectDB } from "../../utils/dbConnect";
import { emailDecoder } from "../../emailDecoder/pureEmail";
import jwt from "jsonwebtoken"

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { token } = reqBody;
        if (!token) {
            return NextResponse.json({ success: false, message: "token not found" }, { status: 400 })
        };
        const email = await emailDecoder(token);
        console.log("Email:", email);

        await connectDB();
        const user = await usersModel.findOne({ email });

        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 400 })
        }
        const verifiedUser = await usersModel.findOneAndUpdate({ email }, { isVerified: true, verificationToken: "" }, { new: true });

        const browserToken =  jwt.sign({ id: verifiedUser._id }, process.env.JWT_SECRET);

        const res = NextResponse.json({ success: true, message: "user verified, login", data: verifiedUser });

        res.cookies.set("EmpireGToken", browserToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            maxAge: 2 * 24 * 60 * 60, // 2 days
            sameSite: "lax",
            path: "/",
        });
        return res;
    } catch (error) {
        console.log("VerifyEmailError:", error);
        return NextResponse.json({ success: false, message: "Unable to verify email" }, { status: 500 })
    }
}