import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  console.log("URI:", process.env.MONGODB_URI);
  if (mongoose.connection.readyState === 1) {
    console.log('Already connected to the database');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Db connection successful");
  } catch (error) {
    console.log("Error connecting to the Db:", error);
    process.exit(1);
  }
};

export default connectDb;
