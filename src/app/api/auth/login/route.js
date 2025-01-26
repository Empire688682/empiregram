const { NextResponse } = require("next/server");


const loginUser = (req) =>{
    try {
        
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({success:false, message:"Logout user error"}, {status:500})
    }
}