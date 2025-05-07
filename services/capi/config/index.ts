// src/config/index.ts
import "server-only"; // Ensure this runs only on the server

interface MetaConfig {
  pixelId: string;
  accessToken: string;
  testEventCode?: string; // Optional for testing
}

let config: MetaConfig | null = null;

export function initializeMetaConfig(): MetaConfig {
  if (config) {
    return config;
  }

  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const testEventCode = process.env.META_TEST_EVENT_CODE; // Optional

  if (!pixelId) {
    throw new Error("META_PIXEL_ID environment variable is not set.");
  }
  if (!accessToken) {
    throw new Error("META_ACCESS_TOKEN environment variable is not set.");
  }

  config = {
    pixelId,
    accessToken,
    testEventCode,
  };

  console.info("Meta Conversions API Config Initialized."); // Optional logging
  return config;
}

export function getConfig(): MetaConfig {
  return initializeMetaConfig();
}
