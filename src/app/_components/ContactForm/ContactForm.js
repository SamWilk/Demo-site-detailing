"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactRequest } from "../../_serverless/contactActions";
import styles from "./ContactForm.module.css";

const initialState = {
  ok: null,
  message: "",
};

const initialRequestData = {
  name: "",
  phone: "",
  service: "",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  details: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending request..." : "Send request"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactRequest, initialState);
  const [requestData, setRequestData] = useState(initialRequestData);
  const updateRequestField = (fieldName) => (event) => {
    setRequestData((current) => ({
      ...current,
      [fieldName]: event.target.value,
    }));
  };

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      action={formAction}
      noValidate
      aria-label="Request service from Clean Drive Mobile Spa"
    >
      <div className={styles.formHeader}>
        <p>Request mobile detailing</p>
        <h2>Tell us what you drive.</h2>
        <span>Most details start with your vehicle, location, and service goal.</span>
      </div>

      <div className={styles.fieldGrid}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={requestData.name}
            onChange={updateRequestField("name")}
            required
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(813) 555-0123"
            value={requestData.phone}
            onChange={updateRequestField("phone")}
            required
          />
        </label>
      </div>

      <label>
        Detail needed
        <select
          name="service"
          value={requestData.service}
          onChange={updateRequestField("service")}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>Interior Detailing</option>
          <option>Exterior Detailing</option>
          <option>Full Car Spa</option>
          <option>Maintenance Detail</option>
          <option>Custom Request</option>
        </select>
      </label>

      <div className={styles.vehicleGrid}>
        <label>
          Year
          <input
            name="vehicleYear"
            type="text"
            inputMode="numeric"
            placeholder="2022"
            value={requestData.vehicleYear}
            onChange={updateRequestField("vehicleYear")}
            required
          />
        </label>
        <label>
          Make
          <input
            name="vehicleMake"
            type="text"
            placeholder="Toyota"
            value={requestData.vehicleMake}
            onChange={updateRequestField("vehicleMake")}
            required
          />
        </label>
        <label>
          Model
          <input
            name="vehicleModel"
            type="text"
            placeholder="Camry"
            value={requestData.vehicleModel}
            onChange={updateRequestField("vehicleModel")}
            required
          />
        </label>
      </div>

      <label>
        Service details
        <textarea
          name="details"
          rows="4"
          placeholder="Share your location, preferred timing, and what needs attention."
          value={requestData.details}
          onChange={updateRequestField("details")}
          required
        />
      </label>

      <SubmitButton />

      {state.message ? (
        <p className={state.ok ? styles.successMessage : styles.errorMessage}>
          {state.message}
        </p>
      ) : null}

      <p className={styles.formNote}>
        Prefer Instagram?{" "}
        <a href="https://www.instagram.com/cleandrivemobilespa/">
          DM @cleandrivemobilespa
        </a>
      </p>
    </form>
  );
}
