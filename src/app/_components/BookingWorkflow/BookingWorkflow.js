"use client";

import { useMemo, useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendBookingRequest } from "../../_serverless/contactActions";
import styles from "./BookingWorkflow.module.css";

const initialState = {
  ok: null,
  message: "",
};

const initialBookingData = {
  address: "",
  city: "",
  name: "",
  phone: "",
  email: "",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  notes: "",
};

const servicePackages = [
  {
    name: "Interior Detailing",
    price: "Request pricing",
    duration: "Custom appointment",
    buffer: "Condition-based timing",
    leadTime: "Book at least 1 day ahead",
    location: "Customer location",
    payment: "Confirm by request",
    description:
      "Cabin-focused cleaning for seats, carpets, panels, trim, and the areas that make daily driving feel fresh again.",
  },
  {
    name: "Exterior Detailing",
    price: "Request pricing",
    duration: "Custom appointment",
    buffer: "Vehicle-based timing",
    leadTime: "Book at least 1 day ahead",
    location: "Customer location",
    payment: "Confirm by request",
    description:
      "A mobile exterior refresh for paint, wheels, glass, tires, and the finish customers notice first.",
  },
  {
    name: "Full Car Spa",
    price: "Request pricing",
    duration: "Custom appointment",
    buffer: "Vehicle-based timing",
    leadTime: "Book at least 1 day ahead",
    location: "Customer location",
    payment: "Confirm by request",
    description:
      "Interior and exterior detailing together for a complete Clean Drive Mobile Spa appointment.",
  },
  {
    name: "Maintenance Detail",
    price: "Request pricing",
    duration: "Custom appointment",
    buffer: "Vehicle-based timing",
    leadTime: "Book at least 1 day ahead",
    location: "Customer location",
    payment: "Confirm by request",
    description:
      "A lighter upkeep service for vehicles that need consistent cleaning between deeper details.",
  },
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className={styles.primaryButton} type="submit" disabled={pending}>
      {pending ? "Sending booking..." : "Request booking"}
    </button>
  );
}

function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().slice(0, 10);
}

export default function BookingWorkflow() {
  const [state, formAction] = useActionState(sendBookingRequest, initialState);
  const [step, setStep] = useState(1);
  const [selectedPackageName, setSelectedPackageName] = useState(
    servicePackages[0].name,
  );
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [bookingData, setBookingData] = useState(initialBookingData);
  const minimumDate = useMemo(() => getTomorrowDate(), []);
  const selectedPackage =
    servicePackages.find((item) => item.name === selectedPackageName) ||
    servicePackages[0];
  const updateBookingField = (fieldName) => (event) => {
    setBookingData((current) => ({
      ...current,
      [fieldName]: event.target.value,
    }));
  };

  return (
    <section className={styles.bookingShell} id="booking">
      <div className={styles.servicePanel}>
        <p className={styles.eyebrow}>Online booking</p>
        <h1>{selectedPackage.name}</h1>
        <p>{selectedPackage.description}</p>

        <div className={styles.summaryGrid} aria-label="Service summary">
          <span>
            <strong>{selectedPackage.price}</strong>
            Service price
          </span>
          <span>
            <strong>{selectedPackage.duration}</strong>
            Appointment length
          </span>
          <span>
            <strong>{selectedPackage.location}</strong>
            Mobile service
          </span>
          <span>
            <strong>{selectedPackage.payment}</strong>
            Pricing
          </span>
        </div>

        <div className={styles.detailList}>
          <span>{selectedPackage.buffer}</span>
          <span>{selectedPackage.leadTime}</span>
          <span>Capacity: 1 vehicle</span>
          <span>Service area: Tampa, St. Pete, and Clearwater</span>
        </div>
      </div>

      <form className={styles.bookingForm} action={formAction} noValidate>
        <input type="hidden" name="service" value={selectedPackage.name} />
        <input type="hidden" name="price" value={selectedPackage.price} />
        <input type="hidden" name="duration" value={selectedPackage.duration} />

        <div className={styles.stepHeader}>
          <span>Step {step} of 4</span>
          <h2>
            {step === 1 ? "Choose a service" : null}
            {step === 2 ? "Choose a time" : null}
            {step === 3 ? "Service location" : null}
            {step === 4 ? "Your details" : null}
          </h2>
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span className={step >= 1 ? styles.activeProgress : ""} />
          <span className={step >= 2 ? styles.activeProgress : ""} />
          <span className={step >= 3 ? styles.activeProgress : ""} />
          <span className={step >= 4 ? styles.activeProgress : ""} />
        </div>

        {step === 1 ? (
          <fieldset className={styles.packageFieldset}>
            <legend>Detailing package</legend>
            <div className={styles.packageGrid}>
              {servicePackages.map((servicePackage) => {
                const isSelected = selectedPackageName === servicePackage.name;

                return (
                  <label
                    className={
                      isSelected ? styles.selectedPackage : styles.packageCard
                    }
                    key={servicePackage.name}
                  >
                    <input
                      name="selectedPackage"
                      type="radio"
                      value={servicePackage.name}
                      checked={isSelected}
                      onChange={() => setSelectedPackageName(servicePackage.name)}
                    />
                    <span className={styles.packageTitle}>
                      {servicePackage.name}
                    </span>
                    <span className={styles.packageDescription}>
                      {servicePackage.description}
                    </span>
                    <span className={styles.packageMeta}>
                      <strong>{servicePackage.price}</strong>
                      {servicePackage.duration}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <div className={styles.stepContent}>
            <label>
              Preferred date
              <input
                name="appointmentDate"
                type="date"
                min={minimumDate}
                value={appointmentDate}
                onChange={(event) => setAppointmentDate(event.target.value)}
                required
              />
            </label>

            <fieldset className={styles.timeFieldset}>
              <legend>Preferred start time</legend>
              <div className={styles.timeGrid}>
                {timeSlots.map((slot) => (
                  <label
                    className={
                      appointmentTime === slot ? styles.selectedSlot : styles.timeSlot
                    }
                    key={slot}
                  >
                    <input
                      name="appointmentTime"
                      type="radio"
                      value={slot}
                      checked={appointmentTime === slot}
                      onChange={() => setAppointmentTime(slot)}
                      required
                    />
                    {slot}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        ) : null}

        {step === 3 ? (
          <div className={styles.stepContent}>
            <label>
              Service address
              <input
                name="address"
                type="text"
                autoComplete="street-address"
                placeholder="Street address"
                value={bookingData.address}
                onChange={updateBookingField("address")}
                required
              />
            </label>
            <label>
              City or area
              <input
                name="city"
                type="text"
                autoComplete="address-level2"
                placeholder="Tampa, St. Pete, Clearwater..."
                value={bookingData.city}
                onChange={updateBookingField("city")}
                required
              />
            </label>
            <p className={styles.inlineNote}>
              No water or power is necessary for this mobile appointment.
            </p>
          </div>
        ) : null}

        {step === 4 ? (
          <div className={styles.stepContent}>
            <div className={styles.fieldGrid}>
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={bookingData.name}
                  onChange={updateBookingField("name")}
                  required
                />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={bookingData.phone}
                  onChange={updateBookingField("phone")}
                  required
                />
              </label>
            </div>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={bookingData.email}
                onChange={updateBookingField("email")}
                required
              />
            </label>
            <div className={styles.vehicleGrid}>
              <label>
                Year
                <input
                  name="vehicleYear"
                  type="text"
                  inputMode="numeric"
                  placeholder="2022"
                  value={bookingData.vehicleYear}
                  onChange={updateBookingField("vehicleYear")}
                  required
                />
              </label>
              <label>
                Make
                <input
                  name="vehicleMake"
                  type="text"
                  placeholder="Toyota"
                  value={bookingData.vehicleMake}
                  onChange={updateBookingField("vehicleMake")}
                  required
                />
              </label>
              <label>
                Model
                <input
                  name="vehicleModel"
                  type="text"
                  placeholder="Camry"
                  value={bookingData.vehicleModel}
                  onChange={updateBookingField("vehicleModel")}
                  required
                />
              </label>
            </div>
            <label>
              Notes
              <textarea
                name="notes"
                rows="4"
                placeholder="Gate code, parking instructions, condition notes, pet hair, stains, or timing preferences."
                value={bookingData.notes}
                onChange={updateBookingField("notes")}
              />
            </label>
          </div>
        ) : null}

        {state.message ? (
          <p className={state.ok ? styles.successMessage : styles.errorMessage}>
            {state.message}
          </p>
        ) : null}

        <div className={styles.actions}>
          {step > 1 ? (
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={() => setStep((current) => current - 1)}
            >
              Back
            </button>
          ) : null}
          {step < 4 ? (
            <button
              className={styles.primaryButton}
              type="button"
              onClick={() => setStep((current) => current + 1)}
              disabled={step === 2 && (!appointmentDate || !appointmentTime)}
            >
              Continue
            </button>
          ) : (
            <SubmitButton />
          )}
        </div>
      </form>
    </section>
  );
}
