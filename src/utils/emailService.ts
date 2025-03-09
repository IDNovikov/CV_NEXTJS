import { getTransporter } from "./emailTransporter";

interface SendMailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendMail(options: SendMailOptions): Promise<void> {
  try {
    const info = await getTransporter().sendMail({
      ...options,
      html: options.html ?? `<p>${options.text}</p>`,
    });
    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
