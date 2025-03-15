import { NextResponse } from "next/server";
import { usersModel } from "../../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { connectDB } from "../../utils/dbConnect";
import { emailTransporter } from "../../emailSender/route";
dotenv.config();

const loginUser = async (req) => {
  connectDB();
  if (req.method === "POST") {
    try {
      const reqBody = await req.json();
      const { username, password } = reqBody;

      const user = await usersModel.findOne({ username });

      if (!user) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 400 },
        );
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return NextResponse.json(
          { success: false, message: "Incorrect password" },
          { status: 400 },
        );
      };

      const verificationToken = user.verificationToken;

      const isVerified = user.isVerified;
      if (!isVerified) {
        const verificationLink =
          `${process.env.BASE_URL}/verify-email?token=${verificationToken}&username=${user.username}`
        await emailTransporter(user.email, verificationLink);
        return NextResponse.json(
          { success: false, message: "Email not verify!! Please verify your email" },
          { status: 400 },
        );
      };

      const browserToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const res = NextResponse.json(
        { success: true, message: "Log in successfully", user: user },
        { status: 200 },
      );
      res.cookies.set("EmpireGToken", browserToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 2 * 24 * 60 * 60, // 2 days
        sameSite: "lax",
        path: "/",
      });
      return res;
    } catch (error) {
      console.log("Error:", error);
      return NextResponse.json(
        { success: false, message: `Internal please try again later` },
        { status: 500 },
      );
    }
  }
};

export async function POST(req) {
  return loginUser(req);
}


