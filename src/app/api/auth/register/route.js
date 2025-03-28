import bcryptjs from "bcryptjs";
import { usersModel } from "@/app/api/models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextResponse } from "next/server";
import { connectDB } from "../../utils/dbConnect";
import validator from "validator";
import { emailTransporter } from "../../emailSender/route";
dotenv.config();

const registerUser = async (req) => {
  if (req.method === "POST") {
    const reqBody = await req.json();
    try {
      // Establish database connection
      await connectDB();
      const {
        firstname,
        lastname,
        username,
        email,
        phone = "",
        password,
        passwordRepeat,
        profilePicture = "avatar_icon.png",
        bio = "",
        status = "offline",
        lastSeen = Date.now(),
        friends = [],
        messages = [],
        conversations = [],
        notifications = [],
        deviceToken = "",
        isAdmin = false,
        isBanned = false,
        isVerified = false,
        recoveryPasswordToken = "",
        role = "user",
        typingStatus = false,
        readReceipts = [],
        mediaAttachments = [],
      } = reqBody;

      if (!firstname || !lastname || !username || !email || !password) {
        return NextResponse.json(
          { success: false, message: "All fields are required" },
          { status: 400 },
        );
      }

      const userExist = await usersModel.findOne({ email });
      if (userExist) {
        return NextResponse.json(
          { success: false, message: "User already exists" },
          { status: 400 },
        );
      }

      const userNameTaken = await usersModel.findOne({ username });
      if (userNameTaken) {
        return NextResponse.json(
          { success: false, message: "Username taken" },
          { status: 400 },
        );
      }

      const isEmail = validator.isEmail(email);
      if (!isEmail) {
        return NextResponse.json(
          { success: false, message: "Email not valid" },
          { status: 400 },
        );
      }

      if (password.length < 8) {
        return NextResponse.json(
          { success: false, message: "Password too short" },
          { status: 400 },
        );
      }

      if (password !== passwordRepeat) {
        return NextResponse.json(
          { success: false, message: "Password not match" },
          { status: 400 },
        );
      };

      const hashedPassword = await bcryptjs.hash(password, 10);
      const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET);

      const newUser = new usersModel({
        firstname,
        lastname,
        username,
        email,
        phone,
        password: hashedPassword,
        profilePicture,
        bio,
        status,
        lastSeen,
        friends,
        messages,
        conversations,
        notifications,
        deviceToken,
        isAdmin,
        isBanned,
        isVerified,
        verificationToken:verificationToken,
        recoveryPasswordToken,
        role,
        typingStatus,
        readReceipts,
        mediaAttachments,
      });

      await newUser.save();
      
      const verificationLink =
      `${process.env.BASE_URL}/verify-email?token=${verificationToken}&username=${newUser.username}`
      await emailTransporter(email, verificationLink);
      return NextResponse.json(
        { success: true, message: "User signed up", user: newUser },
        { status: 200 },
      );
    } catch (error) {
      console.log("Unable to save user:", error);
      return NextResponse.json(
        { success: false, message: "Creating user error" },
        { status: 500 },
      );
    }
  }
};

export async function POST(req) {
  return registerUser(req);
}


