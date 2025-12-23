import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ==============================
// IONOS SMTP CONFIG
// ==============================
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // smtp.ionos.com
  port: process.env.EMAIL_PORT, // 587
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER, // support@twoelephants.org
    pass: process.env.EMAIL_PASS, // APP PASSWORD
  },
});

// Verify SMTP
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP Error:", error);
  } else {
    console.log("✅ IONOS SMTP Connected Successfully");
  }
});

// ==============================
// CONTACT FORM API
// ==============================
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // ==========================
    // 1️⃣ SEND EMAIL TO COMPANY
    // ==========================
    await transporter.sendMail({
      from: `"Two Elephants Website" <support@twoelephants.org>`,
      to: "support@twoelephants.org",
      replyTo: email,
      subject: `New Contact Form Message – ${name}`,
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // ==========================
    // 2️⃣ AUTO-REPLY TO USER
    // ==========================
    await transporter.sendMail({
      from: `"Two Elephants" <support@twoelephants.org>`,
      to: email,
      subject: "Thank you for contacting Two Elephants",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out to <strong>Two Elephants</strong>.</p>

          <p>We have received your message and our team will get back to you shortly.</p>

          <p><strong>Your Message:</strong></p>
          <blockquote>${message}</blockquote>

          <br/>
          <p>Best regards,</p>
          <p><strong>Two Elephants Team</strong></p>
          <p>📧 support@twoelephants.org</p>
          <p>🌐 www.twoelephants.org</p>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (err) {
    console.error("❌ Email send failed:", err);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

// ==============================
// START SERVER
// ==============================
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
