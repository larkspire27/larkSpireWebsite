import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export interface UnansweredQuestion {
  id: string;
  query: string;
  count: number;
  lastAsked: string;
  status: "pending" | "reviewed" | "added";
}

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "unanswered_questions.json");

function ensureFileExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), "utf-8");
  }
}

export function getUnansweredQuestions(): UnansweredQuestion[] {
  try {
    ensureFileExists();
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data) || [];
  } catch (err) {
    console.error("Error reading unanswered questions file:", err);
    return [];
  }
}

export async function logUnansweredQuestion(userQuery: string) {
  const cleanQuery = userQuery.trim();
  if (!cleanQuery || cleanQuery.length < 3) return;

  try {
    ensureFileExists();
    const questions = getUnansweredQuestions();
    
    // Check if query or similar query exists
    const existingIndex = questions.findIndex(
      (q) => q.query.toLowerCase() === cleanQuery.toLowerCase()
    );

    let isNew = false;

    if (existingIndex !== -1) {
      questions[existingIndex].count += 1;
      questions[existingIndex].lastAsked = new Date().toISOString();
    } else {
      isNew = true;
      questions.unshift({
        id: "q_" + Date.now(),
        query: cleanQuery,
        count: 1,
        lastAsked: new Date().toISOString(),
        status: "pending",
      });
    }

    // Keep top 100 questions
    const trimmed = questions.slice(0, 100);
    fs.writeFileSync(FILE_PATH, JSON.stringify(trimmed, null, 2), "utf-8");

    // If new question, trigger email notification asynchronously
    if (isNew && process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
      sendUnansweredEmailAlert(cleanQuery).catch((e) =>
        console.error("Failed to send unanswered question email:", e)
      );
    }
  } catch (err) {
    console.error("Error logging unanswered question:", err);
  }
}

async function sendUnansweredEmailAlert(userQuery: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"LarkSpire AI Bot" <${process.env.SMTP_EMAIL}>`,
      to: "spirelark@gmail.com",
      subject: `🤖 AI Chatbot Alert: New Unanswered User Question`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0f172a; margin-top: 0;">🤖 New Unanswered Question Received</h2>
            <p style="color: #475569; font-size: 14px;">A user asked a question on the website that is not in the AI knowledge base:</p>
            
            <div style="background-color: #f1f5f9; padding: 16px; border-left: 4px solid #3b82f6; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #1e293b;">"${userQuery}"</p>
            </div>

            <p style="color: #64748b; font-size: 12px;">This question has been saved to <code>data/unanswered_questions.json</code> so you can add it to the AI Knowledge Base anytime.</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Error sending unanswered alert email:", err);
  }
}
