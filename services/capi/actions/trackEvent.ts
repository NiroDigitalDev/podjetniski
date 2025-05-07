// src/actions/trackEvent.ts
"use server"; // Mark this as a Server Action

import { createEventPayload } from "../core/payload";
import { sendMetaEvent } from "../core/api";
import { UserData, CustomData } from "../types";
import { headers } from "next/headers"; // For IP/User Agent
import { cookies } from "next/headers"; // For fbp/fbc

interface TrackEventArgs {
  eventName: string;
  userData?: Partial<UserData>; // Allow providing partial raw data
  customData?: CustomData;
  eventSourceUrl?: string;
  eventId?: string;
}

export async function trackMetaEvent(args: TrackEventArgs) {
  // console.log(`Server Action: trackMetaEvent triggered for ${args.eventName}`);
  try {
    // --- Gather User Data ---
    const headersList = await headers();
    const cookieStore = await cookies();

    // Get standard identifiers from request context
    const ipAddress =
      headersList.get("x-forwarded-for") || headersList.get("remote-addr"); // Or other relevant headers depending on hosting
    const userAgent = headersList.get("user-agent");
    const fbp = cookieStore.get("_fbp")?.value; // Facebook browser cookie
    const fbc = cookieStore.get("_fbc")?.value; // Facebook click cookie (if available from URL param initially)

    // Combine provided user data with auto-detected data
    const combinedUserData: UserData = {
      ...args.userData, // User-provided data takes precedence if keys overlap
      client_ip_address: ipAddress ?? undefined,
      client_user_agent: userAgent ?? undefined,
      fbp: fbp ?? undefined,
      fbc: fbc ?? undefined,
    };

    // Clean up undefined values potentially added above
    Object.keys(combinedUserData).forEach((key) => {
      if (combinedUserData[key as keyof UserData] === undefined) {
        delete combinedUserData[key as keyof UserData];
      }
    });

    // --- Create and Send Payload ---
    const payload = createEventPayload({
      eventName: args.eventName,
      userData: combinedUserData, // Pass the combined, raw data for hashing
      customData: args.customData,
      eventSourceUrl: args.eventSourceUrl, // Pass this from the component if known
      eventId: args.eventId,
    });

    const result = await sendMetaEvent(payload);

    if (!result.success) {
      console.error(
        `Server Action Error: Failed to send ${args.eventName} event`,
        result.error
      );
      // Decide if/how to return error state to the client if needed
      return { success: false, error: "Failed to track event." };
    }

    // console.log(`Server Action Success: ${args.eventName} event sent.`);
    return { success: true };
  } catch (error) {
    console.error(
      `Server Action Exception: Error in trackMetaEvent for ${args.eventName}:`,
      error
    );
    return {
      success: false,
      error: "Internal server error during event tracking.",
    };
  }
}
