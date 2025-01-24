import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () =>{
  if(mongoose.connection.readyState === 1){
    console.log('Already connected to the database');
    return;
  }
    try {
        const response = await mongoose.connect("mongodb+srv://asehindej:asehindej@cluster0.mu1i7pc.mongodb.net/EmpireGram");
        if(response){
            console.log("DB: connection successfully");
        }
    } catch (error) {
        console.log("ERROR:", error)
    }
}