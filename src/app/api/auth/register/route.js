import bcryptjs from "bcryptjs";
import userModel from "@/app/api/models/user";
import connectDb from "@/app/api/utils/dbConnect";

const registerUser = async (req, res) => {
    if (req.method === "POST") {
        try {
            // Establish database connection
            await connectDb();
            const {
                name,
                username,
                email,
                password,
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

            const newUser = new userModel({
                name,
                username,
                email,
                password,
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
            await newUser.save()
        } catch (error) {
            console.log("Unable to save user:", error);
            return res.json({success:false, message:"Creating user error"},{status:500})
        }
    }
}