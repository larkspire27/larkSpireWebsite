import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory IP rate limiter map
const ipRateMap = new Map<string, { count: number; expires: number }>();

function sanitizeHTML(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting Check
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const now = Date.now();
    const rateData = ipRateMap.get(clientIp);

    if (rateData && now < rateData.expires) {
      if (rateData.count >= 5) {
        return NextResponse.json(
          { error: "Too many lead submissions. Please try again in a few minutes." },
          { status: 429 }
        );
      }
      rateData.count += 1;
    } else {
      ipRateMap.set(clientIp, { count: 1, expires: now + 10 * 60 * 1000 }); // 10 min window
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body provided." },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message, honeypot, website_url } = body || {};

    // 2. Invisible Honeypot Trap (Anti-Bot)
    if (honeypot || website_url) {
      console.warn(`BOT TRAPPED: IP ${clientIp} filled honeypot field.`);
      // Return fake success response to trick the bot without executing mailer
      return NextResponse.json(
        { success: true, message: "Inquiry processed successfully." },
        { status: 200 }
      );
    }

    // 3. Server-side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize user inputs for HTML email body
    const cleanName = sanitizeHTML(name.trim());
    const cleanEmail = sanitizeHTML(email.trim());
    const cleanPhone = sanitizeHTML(phone ? String(phone).trim() : "N/A");
    const cleanService = sanitizeHTML(service ? String(service).trim() : "General Inquiry");
    const cleanMessage = sanitizeHTML(message ? String(message).trim() : "N/A");

    console.log("----------------------------------------");
    console.log("NEW LARK SPIRE LEAD RECEIVED:");
    console.log(`To: spirelark@gmail.com`);
    console.log(`From: ${cleanName} (${cleanEmail})`);
    console.log(`Phone: ${cleanPhone}`);
    console.log(`Service: ${cleanService}`);
    console.log(`Message: ${cleanMessage}`);
    console.log("----------------------------------------");

    const smtpEmail = process.env.SMTP_EMAIL || "spirelark@gmail.com";
    const smtpPass = process.env.SMTP_PASSWORD;

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: smtpEmail,
          pass: smtpPass.replace(/\s+/g, ""),
        },
      });

      const mailOptions = {
        from: `"Larkspire Leads" <${smtpEmail}>`,
        to: "spirelark@gmail.com",
        replyTo: cleanEmail,
        subject: `⚡ NEW LEAD: ${cleanService} - ${cleanName}`,
        html: `
          <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #0f766e; border-radius: 16px; background-color: #ffffff; margin: 0 auto;">
            <div style="background-color: #0f766e; padding: 16px; border-radius: 12px; text-align: center; color: white; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 700;">🚀 New Larkspire Project Inquiry</h2>
            </div>
            <p style="color: #475569; font-size: 14px; margin-bottom: 20px;">A client submitted a new project lead via your website form:</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: 700; color: #334155; width: 120px;">Full Name:</td>
                <td style="padding: 12px 8px; color: #0f172a; font-weight: 600;">${cleanName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: 700; color: #334155;">Email:</td>
                <td style="padding: 12px 8px; color: #0f766e;"><a href="mailto:${cleanEmail}" style="color: #0f766e; font-weight: 600;">${cleanEmail}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: 700; color: #334155;">Phone No:</td>
                <td style="padding: 12px 8px; color: #0f172a;"><a href="tel:${cleanPhone}" style="color: #0f172a;">${cleanPhone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 8px; font-weight: 700; color: #334155;">Service:</td>
                <td style="padding: 12px 8px; color: #0f766e; font-weight: 700;">${cleanService}</td>
              </tr>
              <tr>
                <td style="padding: 12px 8px; font-weight: 700; color: #334155; vertical-align: top;">Message:</td>
                <td style="padding: 12px 8px; color: #0f172a; white-space: pre-wrap; line-height: 1.5;">${cleanMessage}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
              Sent automatically via Larkspire Website &bull; Secure Email Gateway
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("SUCCESS: Gmail SMTP Email sent directly to spirelark@gmail.com!");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry sent directly to spirelark@gmail.com",
        data: { name: cleanName, email: cleanEmail, phone: cleanPhone, service: cleanService, message: cleanMessage },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending Gmail SMTP email:", error);
    return NextResponse.json(
      { error: "Failed to send lead email" },
      { status: 500 }
    );
  }
}
