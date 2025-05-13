import { NextResponse } from "next/server";
import { sendContactEmails } from "@/services/email-actions";

export async function POST(request: Request) {
  try {
    // Get form data
    const formData = await request.json();
    const { name, email, message } = formData;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Required fields missing" },
        { status: 400 }
      );
    }

    // Send emails
    const success = await sendContactEmails(name, email, message || "");

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in contact API route:", error);

    // Provide more detailed error message
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        errorType: error instanceof Error ? error.name : "UnknownError",
      },
      { status: 500 }
    );
  }
}
