// src/core/api.ts
import "server-only";
import { getConfig } from "../config";
import { MetaPayload } from "../types";

export async function sendMetaEvent(
  payload: MetaPayload
): Promise<{ success: boolean; error?: any; responseData?: any }> {
  const { pixelId, accessToken } = getConfig();
  const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`; // Use latest stable API version

  // console.log("Sending Meta Event Payload:", JSON.stringify(payload, null, 2)); // Log payload for debugging (consider removing PII in production logs)

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      // Use Next.js fetch caching options if needed, but likely 'no-store' for API calls
      cache: "no-store",
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Meta API Error Response:", responseData);
      return {
        success: false,
        error: responseData || `HTTP error! status: ${response.status}`,
      };
    }

    // console.log("Meta API Success Response:", responseData); // Log success response for debugging
    return { success: true, responseData };
  } catch (error) {
    console.error("Failed to send event to Meta API:", error);
    return { success: false, error };
  }
}
