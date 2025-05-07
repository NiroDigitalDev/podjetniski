import Mailgun from "mailgun.js";
import formData from "form-data";

// Check the environment
const isDevelopment = process.env.NODE_ENV === "development";

// Get environment variables (do NOT use NEXT_PUBLIC prefix for API keys)
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY || "";
export const MAILGUN_ADMIN_DOMAIN = process.env.MAILGUN_ADMIN_DOMAIN || "";
export const MAILGUN_ADMIN_FROM = process.env.MAILGUN_ADMIN_FROM || "";
export const MAILGUN_ADMIN_EMAIL = process.env.MAILGUN_ADMIN_EMAIL || "";

// Check if email service is properly configured
const isEmailServiceConfigured = !!(
  MAILGUN_API_KEY &&
  MAILGUN_ADMIN_DOMAIN &&
  MAILGUN_ADMIN_FROM &&
  MAILGUN_ADMIN_EMAIL
);

// Log configuration status
if (!isEmailServiceConfigured) {
  const missingVars = [];
  if (!MAILGUN_API_KEY) missingVars.push("MAILGUN_API_KEY");
  if (!MAILGUN_ADMIN_DOMAIN) missingVars.push("MAILGUN_ADMIN_DOMAIN");
  if (!MAILGUN_ADMIN_FROM) missingVars.push("MAILGUN_ADMIN_FROM");
  if (!MAILGUN_ADMIN_EMAIL) missingVars.push("MAILGUN_ADMIN_EMAIL");

  console.warn(
    `Warning: Email service is not fully configured. Missing environment variables: ${missingVars.join(
      ", "
    )}`
  );

  if (isDevelopment) {
    console.info(
      "In development mode, ensure you've set up your .env.local file with the required variables. " +
        "For Next.js 13+, make sure to add these to your server-side environment variables."
    );
  } else {
    console.error(
      "CRITICAL: Email service is not configured in production mode. Please set the required environment variables."
    );
  }
}

// Initialize mailgun client
const mailgun = new Mailgun(formData);
export const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY || "key-placeholder", // Use placeholder to prevent build errors
  url: "https://api.eu.mailgun.net",
});
