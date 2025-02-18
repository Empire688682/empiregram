import nodemailer from "nodemailer";

export const emailTransporter = async (email, verifyLink) =>{
    try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT),
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false, // Allows self-signed certificates
          },
        });
    
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Email Verification",
          html: `<p>Please verify your email by clicking on the link:<a href="${verifyLink}">Verify Email</a></p>`,
        };
        await transporter.sendMail(mailOptions);
        console.log("Verification email sent to:", email);
      } catch (error) {
        console.error("Error sending email:", error);
        throw new Error(`Failed to send verification email: ${error.message}`);
      }
}