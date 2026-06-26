"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactRequest } from "../../_serverless/contactActions";
import styles from "./ContactForm.module.css";

const initialState = {
  ok: null,
  message: "",
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

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      action={formAction}
      aria-label="Request service from Florida Boys Mobile Detail"
    >
      <div className={styles.formHeader}>
        <p>Book mobile detailing</p>
        <h2>Tell us what you drive.</h2>
        <span>Most details start with your vehicle type, location, and service goal.</span>
      </div>

      <div className={styles.fieldGrid}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(904) 555-0123"
            required
          />
        </label>
      </div>

      <label>
        Detail needed
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          <option>Mobile auto detailing</option>
          <option>Interior detail</option>
          <option>Exterior detail</option>
          <option>Hand wash</option>
          <option>Touchless wash</option>
          <option>Protection package</option>
        </select>
      </label>

      <label>
        Vehicle details
        <textarea
          name="details"
          rows="4"
          placeholder="Share the vehicle year/make/model, location, preferred timing, and what needs attention."
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
        Prefer to talk now? <a href="tel:+19044229660">Call (904) 422-9660</a>.
      </p>
    </form>
  );
}
