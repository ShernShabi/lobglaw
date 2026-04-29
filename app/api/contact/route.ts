import { Resend } from "resend";
import { NextResponse } from "next/server";

const RECIPIENT = "ben@lobglaw.com";
const FROM = "contact@lobglaw.com";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { name, email, phone, message, practiceArea } = body as {
      name: string;
      email: string;
      phone?: string;
      message: string;
      practiceArea?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      subject: "New Contact Form Submission from " + name,
      html: "<h2>New Contact Form Submission</h2><p><b>Name:</b> " + name + "</p><p><b>Email:</b> " + email + "</p><p><b>Phone:</b> " + (phone || "Not provided") + "</p><p><b>Practice Area:</b> " + (practiceArea || "Not specified") + "</p><p><b>Message:</b> " + message + "</p>",
    });

    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Thank you for contacting Law Offices of Ben Gharagozli",
      html: "<p>Dear " + name + ",</p><p>Thank you for reaching out. We will respond within 1-2 business days.</p><p>Best regards,<br/>Law Offices of Ben Gharagozli</p>",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
