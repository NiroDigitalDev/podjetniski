import {
  mg,
  MAILGUN_ADMIN_DOMAIN,
  MAILGUN_ADMIN_FROM,
  MAILGUN_ADMIN_EMAIL,
} from "./EmailService";
import {
  generateContactClientEmail,
  generateContactAdminEmail,
} from "./utils/email-utils";

/**
 * Checks if all required email configuration is present
 */
function isEmailConfigValid(): boolean {
  return !!(MAILGUN_ADMIN_DOMAIN && MAILGUN_ADMIN_FROM && MAILGUN_ADMIN_EMAIL);
}

/**
 * Sends both a confirmation email to the user and a notification to the admin
 * @param name - The user's name
 * @param email - The user's email address
 * @param message - The user's message
 * @returns Whether the emails were sent successfully
 */
export async function sendContactEmails(
  name: string,
  email: string,
  message: string
): Promise<boolean> {
  // Check if we have all required configuration
  if (!isEmailConfigValid()) {
    console.warn(
      "Email configuration is incomplete. Required environment variables: MAILGUN_ADMIN_DOMAIN, MAILGUN_ADMIN_FROM, MAILGUN_ADMIN_EMAIL"
    );

    // If in development mode, we can fake success
    if (process.env.NODE_ENV === "development") {
      console.info(
        "Development mode detected - logging email content instead of sending:"
      );
      console.info(
        `Would send to ${email} - Subject: "Sporočilo prejeto - Podjetniški klub FMF"`
      );
      console.info(
        `Would send to ${
          MAILGUN_ADMIN_EMAIL || "admin@example.com"
        } - Subject: "Novo sporočilo od ${name}"`
      );

      // Simulate a delay to mimic API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Return true in dev mode to allow testing the UI flow
      return true;
    }

    // In production, we should fail if config is missing
    throw new Error("Email configuration is incomplete");
  }

  try {
    // Generate email templates
    const clientEmailHtml = generateContactClientEmail(name);
    const adminEmailHtml = generateContactAdminEmail(name, email, message);

    // Send confirmation email to the user
    await mg.messages.create(MAILGUN_ADMIN_DOMAIN, {
      from: MAILGUN_ADMIN_FROM,
      to: [email],
      subject: "Sporočilo prejeto - Podjetniški klub FMF",
      html: clientEmailHtml,
    });

    // Send notification to admin
    await mg.messages.create(MAILGUN_ADMIN_DOMAIN, {
      from: MAILGUN_ADMIN_FROM,
      to: [MAILGUN_ADMIN_EMAIL],
      subject: `Novo sporočilo od ${name}`,
      html: adminEmailHtml,
    });

    return true;
  } catch (error) {
    console.error("Error sending contact emails:", error);

    // Throw the error to be handled by the calling component
    throw error;
  }
}
