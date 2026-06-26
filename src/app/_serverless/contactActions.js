"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function cleanField(value) {
  return String(value || "").trim();
}

export async function sendContactRequest(_previousState, formData) {
  const name = cleanField(formData.get("name"));
  const phone = cleanField(formData.get("phone"));
  const service = cleanField(formData.get("service"));
  const details = cleanField(formData.get("details"));

  if (!name || !phone || !service || !details) {
    return {
      ok: false,
      message: "Please complete every field before sending your request.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      message: "This form is not configured yet. Please call (904) 422-9660.",
    };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "samwilk1898@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Florida Boys Website <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Florida Boys detail request from ${name}`,
      text: [
        "New detail request from the Florida Boys Mobile Detail website.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        "",
        "Project details:",
        details,
      ].join("\n"),
    });

    return {
      ok: true,
      message: "Request sent. Florida Boys Mobile Detail will follow up by phone.",
    };
  } catch {
    return {
      ok: false,
      message: "The request could not be sent. Please call (904) 422-9660.",
    };
  }
}
