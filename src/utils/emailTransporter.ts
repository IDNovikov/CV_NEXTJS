import nodemailer from "nodemailer";
import { getEmailConfig } from "./emailConfig";

let transporter: nodemailer.Transporter;

export function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport(getEmailConfig());
  }
  return transporter;
}
