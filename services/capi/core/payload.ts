// src/core/payload.ts
import "server-only";
import { ServerEvent, UserData, CustomData, MetaPayload } from "../types";
import { hashUserData } from "./utils";
import { getConfig } from "../config";

interface CreateEventOptions {
  eventName: string;
  eventSourceUrl?: string;
  userData: UserData; // Raw user data (will be hashed)
  customData?: CustomData;
  eventId?: string; // Optional unique event ID
  actionSource?: ServerEvent["action_source"];
}

export function createEventPayload(options: CreateEventOptions): MetaPayload {
  const config = getConfig();
  const {
    eventName,
    eventSourceUrl,
    userData,
    customData,
    eventId,
    actionSource = "website",
  } = options;

  const eventTime = Math.floor(Date.now() / 1000);

  // Hash user data before including it in the event
  const hashedUserData = hashUserData(userData);

  const serverEvent: ServerEvent = {
    event_name: eventName,
    event_time: eventTime,
    user_data: hashedUserData,
    action_source: actionSource,
    ...(eventSourceUrl && { event_source_url: eventSourceUrl }),
    ...(customData && { custom_data: customData }),
    ...(eventId && { event_id: eventId }),
  };

  const payload: MetaPayload = {
    data: [serverEvent],
    ...(config.testEventCode && { test_event_code: config.testEventCode }),
  };

  return payload;
}
