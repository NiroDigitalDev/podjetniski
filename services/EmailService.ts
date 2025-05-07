import Mailgun from "mailgun.js";
import formData from "form-data";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
export const MAILGUN_ADMIN_DOMAIN = process.env.MAILGUN_ADMIN_DOMAIN || "";
export const MAILGUN_ADMIN_FROM = process.env.MAILGUN_ADMIN_FROM || "";
export const MAILGUN_ADMIN_EMAIL = process.env.MAILGUN_ADMIN_EMAIL || "";

if (!MAILGUN_API_KEY) {
  console.warn(
    "Warning: MAILGUN_API_KEY is not set. Email functionality will not work."
  );
}

const mailgun = new Mailgun(formData);
export const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY || "key-placeholder", // Use placeholder to prevent build errors
  url: "https://api.eu.mailgun.net",
});
