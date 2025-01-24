import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true, // Name is required
    },
    lastname: {
      type: String,
      required: true, // Name is required
    },
    username: {
      type: String,
      required: true,
      unique: true, // Username should be unique
      trim: true, // Removes any extra spaces from the start and end
    },
    email: {
      type: String,
      required: true,
      unique: true, // Email should be unique
      lowercase: true, // Automatically converts to lowercase
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"], // Email validation
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "default.jpg", // Default profile picture if none is uploaded
    },
    bio: {
      type: String,
      maxlength: 200, // Limit bio length
      default: "", // Empty by default
    },
    status: {
      type: String,
      enum: ["online", "offline", "away", "busy"], // Possible user status values
      default: "offline", // Default status
    },
    lastSeen: {
      type: Date,
      default: Date.now, // Timestamp of the last time the user was active
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users", // References other users for a "friends" relationship
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages", // References a messages collection (if you're separating messages into a different model)
      },
    ],
    conversations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversations", // Conversations that the user is part of
      },
    ],
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notifications", // Notifications for the user
      },
    ],
    deviceToken: {
      type: String,
      default: "", // To store device token for push notifications
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set when the user is created
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Automatically updated on user updates
    },
    isAdmin: {
      type: Boolean,
      default: false, // Set to true if the user is an admin
    },
    isBanned: {
      type: Boolean,
      default: false, // Flag to indicate if the user is banned
    },
    isVerified: {
      type: Boolean,
      default: false, // If the user's email or phone is verified
    },
    verificationCode: {
      type: String,
      default: "", // Temporary code for email or phone verification
    },
    recoveryEmail: {
      type: String,
      default: "", // Used for password recovery
    },
    role: {
      type: String,
      enum: ["user", "moderator", "admin", "superadmin"], // Different roles for the user
      default: "user", // Default role
    },
    typingStatus: {
      type: Boolean,
      default: false, // Indicates if the user is typing in a conversation
    },
    readReceipts: [
      {
        messageId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Messages",
        },
        readAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    mediaAttachments: [
      {
        type: String,
        default: "", // Store media file URLs for chat
      },
    ],
  },
  {
    minimize: true, // Minimizes empty objects
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

export const usersModel =
  mongoose.models.Users || mongoose.model("Users", userSchema);
