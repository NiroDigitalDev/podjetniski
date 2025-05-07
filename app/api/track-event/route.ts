import { NextResponse } from "next/server";
import { trackEvent } from "@/services/APIService";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();

    // Validate required fields
    if (!data.eventType) {
      return NextResponse.json({ error: "Missing eventType" }, { status: 400 });
    }

    // Forward the request to the tracking service
    await trackEvent(data);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in track-event API route:", error);
    return NextResponse.json(
      { error: "Failed to process tracking event" },
      { status: 500 }
    );
  }
}
