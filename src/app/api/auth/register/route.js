import bcryptjs from "bcryptjs";
import userModel from "@/app/api/models/user";
import connectDb from "@/app/api/utils/dbConnect";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextResponse } from "next/server";
dotenv.config();

const registerUser = async (req) => {
    if (req.method === "POST") {
        try {
            // Establish database connection
            await connectDb();
            const {
                name,
                username,
                email,
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
                verificationCode = "",
                recoveryEmail = "",
                role = "user",
                typingStatus = false,
                readReceipts = [],
                mediaAttachments = [],
            } = req.body; // Extract data from the request body

            if (!name || !username || !email || !password) {
                return NextResponse.json(
                    { success: false, message: "All fields are required" },
                    { status: 400 },
                );
            }

            const userExist = await userModel.findOne({ email });
            if (userExist) {
                return NextResponse.json(
                    { success: false, message: "User already exist" },
                    { status: 400 },
                );
            }

            const userNameTaken = await userModel.findOne({ username });
            if (userNameTaken) {
                return NextResponse.json(
                    { success: false, message: "UserName taken" },
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

            if (password.lenght < 8) {
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
            }

            const hashedPassword = await bcryptjs.hash(password, 10);

            const newUser = new userModel({
                name,
                username,
                email,
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
                verificationCode,
                recoveryEmail,
                role,
                typingStatus,
                readReceipts,
                mediaAttachments,
            });
            await newUser.save();

            const token = jwt.sign({ id: newUser._id }, process.env.EMPIREGRAM_KEY);

            const res = NextResponse.json(
                { success: true, message: "User signed up", user: newUser },
                { status: 200 },
            );

            res.cookies.set("EmpireGToken", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 2 * 24 * 60 * 60,
                sameSite: "lax",
                path: "/"
            });

            return res

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