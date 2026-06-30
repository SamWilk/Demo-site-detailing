"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function cleanField(value) {
  return String(value || "").trim();
}

function missingFieldMessage(fields) {
  const missing = fields
    .filter((field) => !field.value)
    .map((field) => field.label);

  if (missing.length === 0) {
    return "";
  }

  if (missing.length === 1) {
    return `Please complete the ${missing[0]} field.`;
  }

  if (missing.length === 2) {
    return `Please complete the ${missing[0]} and ${missing[1]} fields.`;
  }

  const lastField = missing[missing.length - 1];
  const otherFields = missing.slice(0, -1).join(", ");
  return `Please complete the ${otherFields}, and ${lastField} fields.`;
}

export async function sendContactRequest(_previousState, formData) {
  const name = cleanField(formData.get("name"));
  const phone = cleanField(formData.get("phone"));
  const service = cleanField(formData.get("service"));
  const vehicleYear = cleanField(formData.get("vehicleYear"));
  const vehicleMake = cleanField(formData.get("vehicleMake"));
  const vehicleModel = cleanField(formData.get("vehicleModel"));
  const details = cleanField(formData.get("details"));
  const vehicle = [vehicleYear, vehicleMake, vehicleModel]
    .filter(Boolean)
    .join(" ");

  const missingMessage = missingFieldMessage([
    { label: "name", value: name },
    { label: "phone", value: phone },
    { label: "detail needed", value: service },
    { label: "vehicle year", value: vehicleYear },
    { label: "vehicle make", value: vehicleMake },
    { label: "vehicle model", value: vehicleModel },
    { label: "service details", value: details },
  ]);

  if (missingMessage) {
    return {
      ok: false,
      message: missingMessage,
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      message:
        "This form is not configured yet. Please DM @cleandrivemobilespa on Instagram.",
    };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "samwilk1898@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Clean Drive Mobile Spa Website <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Clean Drive Mobile Spa request from ${name}`,
      text: [
        "New detail request from the Clean Drive Mobile Spa website.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        `Vehicle year: ${vehicleYear}`,
        `Vehicle make: ${vehicleMake}`,
        `Vehicle model: ${vehicleModel}`,
        `Vehicle: ${vehicle}`,
        "",
        "Project details:",
        details,
      ].join("\n"),
    });

    return {
      ok: true,
      message: "Request sent. Clean Drive Mobile Spa will follow up.",
    };
  } catch {
    return {
      ok: false,
      message:
        "The request could not be sent. Please DM @cleandrivemobilespa on Instagram.",
    };
  }
}

export async function sendBookingRequest(_previousState, formData) {
  const name = cleanField(formData.get("name"));
  const phone = cleanField(formData.get("phone"));
  const email = cleanField(formData.get("email"));
  const address = cleanField(formData.get("address"));
  const city = cleanField(formData.get("city"));
  const appointmentDate = cleanField(formData.get("appointmentDate"));
  const appointmentTime = cleanField(formData.get("appointmentTime"));
  const vehicleYear = cleanField(formData.get("vehicleYear"));
  const vehicleMake = cleanField(formData.get("vehicleMake"));
  const vehicleModel = cleanField(formData.get("vehicleModel"));
  const legacyVehicle = cleanField(formData.get("vehicle"));
  const vehicle =
    [vehicleYear, vehicleMake, vehicleModel].filter(Boolean).join(" ") ||
    legacyVehicle;
  const notes = cleanField(formData.get("notes"));
  const service = cleanField(formData.get("service")) || "Full Car Spa";
  const price = cleanField(formData.get("price")) || "Request pricing";
  const duration = cleanField(formData.get("duration")) || "Custom appointment";

  const missingMessage = missingFieldMessage([
    { label: "name", value: name },
    { label: "phone", value: phone },
    { label: "email", value: email },
    { label: "service address", value: address },
    { label: "city or area", value: city },
    { label: "preferred date", value: appointmentDate },
    { label: "preferred start time", value: appointmentTime },
    { label: "vehicle year", value: vehicleYear },
    { label: "vehicle make", value: vehicleMake },
    { label: "vehicle model", value: vehicleModel },
    { label: "vehicle", value: vehicle },
  ]);

  if (missingMessage) {
    return {
      ok: false,
      message: missingMessage,
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      message:
        "This booking form is not configured yet. Please DM @cleandrivemobilespa on Instagram.",
    };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "samwilk1898@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Clean Drive Mobile Spa Website <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New ${service} booking request from ${name}`,
      text: [
        "New booking request from the Clean Drive Mobile Spa website.",
        "",
        `Service: ${service}`,
        `Price: ${price}`,
        `Duration: ${duration}`,
        "Pricing: Confirm by request",
        "Location: Customer address",
        "",
        `Requested date: ${appointmentDate}`,
        `Requested time: ${appointmentTime}`,
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Address: ${address}`,
        `City/Area: ${city}`,
        "",
        `Vehicle year: ${vehicleYear}`,
        `Vehicle make: ${vehicleMake}`,
        `Vehicle model: ${vehicleModel}`,
        `Vehicle: ${vehicle}`,
        "",
        "Notes:",
        notes || "No notes provided.",
      ].join("\n"),
    });

    return {
      ok: true,
      message: "Booking request sent. Clean Drive Mobile Spa will confirm the appointment.",
    };
  } catch {
    return {
      ok: false,
      message:
        "The booking request could not be sent. Please DM @cleandrivemobilespa on Instagram.",
    };
  }
}
