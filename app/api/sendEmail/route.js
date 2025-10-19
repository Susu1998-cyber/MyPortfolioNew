import nodemailer from "nodemailer";
import { NextResponse as Response } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    const subject = `New message from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #4f46e5; text-align: center;">
          New Contact Form Submission - Portfolio Website
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="padding: 10px; background: #f4f4f4; border-radius: 5px;">${message}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #888;">This email was sent from your website contact form.</p>
      </div>
    `;

    // ✅ Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // your Gmail App Password
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // where you want to receive messages
      subject,
      text,
      html,
      replyTo: email,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Email error:", err);
    return new Response(
      JSON.stringify({ message: "Failed to send email.", error: err.message }),
      { status: 500 }
    );
  }
}
