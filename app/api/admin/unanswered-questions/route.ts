import { NextResponse } from "next/server";
import { getUnansweredQuestions } from "@/lib/unansweredLogger";

export async function GET() {
  try {
    const questions = getUnansweredQuestions();
    return NextResponse.json({
      success: true,
      total: questions.length,
      questions,
    });
  } catch (error) {
    console.error("Error fetching unanswered questions:", error);
    return NextResponse.json(
      { error: "Failed to retrieve unanswered questions." },
      { status: 500 }
    );
  }
}
