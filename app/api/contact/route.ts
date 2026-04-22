import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "ben@lobglaw.com";
const FROM = "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      message,
      practiceArea,
      honeypot,
    }: {
      name: string;
      email: string;
      phone?: string;
      message: string;
      practiceArea?: string;
      honeypot?: string;
    } = body;

    // Bot detection — if honeypot is filled, return success silently
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Notification email to Ben
    await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1a1a1a;">
          <h2 style="color: #2b2b2b; border-bottom: 2px solid #b8965a; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 12px 0; font-weight: bold; color: #b8965a; width: 140px;">Name</td>
              <td style="padding: 12px 0;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 12px 0; font-weight: bold; color: #b8965a;">Email</td>
              <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #2b2b2b;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 12px 0; font-weight: bold; color: #b8965a;">Phone</td>
              <td style="padding: 12px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 12px 0; font-weight: bold; color: #b8965a;">Practice Area</td>
              <td style="padding: 12px 0;">${practiceArea || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #b8965a; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 32px; color: #666; font-size: 13px;">
            Submitted via lawofficesofbengharagozli.com contact form
          </p>
        </div>
      `,
    });

    // Confirmation email to the person who submitted
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Thank you for contacting Law Offices of Ben Gharagozli",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1a1a1a;">
          <h2 style="color: #2b2b2b; border-bottom: 2px solid #b8965a; padding-bottom: 12px;">
            We received your message
          </h2>
          <p style="margin-top: 24px; line-height: 1.7;">Dear ${name},</p>
          <p style="line-height: 1.7;">
            Thank you for reaching out to the Law Offices of Ben Gharagozli. We have received
            your inquiry and will respond within 1–2 business days.
          </p>
          <p style="margin-top: 32px; line-height: 1.7;">
            Best regards,<br/>
            <strong>Law Offices of Ben Gharagozli</strong><br/>
            <span style="color: #666;">ben@lobglaw.com</span>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
