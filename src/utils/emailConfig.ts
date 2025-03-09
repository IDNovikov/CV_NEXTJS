import SMTPTransport from "nodemailer/lib/smtp-transport";

export function getEmailConfig(): SMTPTransport.Options {
  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("Some email configuration options are missing");
  }

  return {
    host,
    port: parseInt(port, 10),
    secure: false,
    auth: { user, pass },
  };
}
