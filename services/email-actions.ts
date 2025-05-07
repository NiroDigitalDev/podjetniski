import { mg, MAILGUN_ADMIN_DOMAIN, MAILGUN_ADMIN_FROM } from "./EmailService";

import { generateContactClientEmail } from "./utils/email-utils";

/**
 * Sends a success email after questionnaire submission
 * @param email - The recipient's email address
 * @returns Whether the email was sent successfully
 */
export async function sendSuccessEmail(email: string): Promise<boolean> {
  try {
    const emailHtml = generateContactClientEmail();

    await mg.messages.create(MAILGUN_ADMIN_DOMAIN, {
      from: MAILGUN_ADMIN_FROM,
      to: [email],
      subject: "Povpraševanje uspešno prejeto",
      html: emailHtml,
    });

    return true;
  } catch (error) {
    console.error("Error sending success email:", error);
    return false;
  }
}
