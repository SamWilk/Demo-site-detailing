import Link from "next/link";
import styles from "./AuditCta.module.css";

export default function AuditCta() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div>
        <p className={styles.eyebrow}>Book a detail</p>
        <h2>Need professional vehicle care without driving across town?</h2>
        <p>
          Call Detail King 904 for professional detailing, paint correction,
          certified ceramic coating, window tinting, and water spot removal
          across the Jacksonville area.
        </p>
      </div>
      <div className={styles.actions}>
        <Link className={styles.primaryButton} href="/#contact-form">
          Request service
        </Link>
        <a
          className={styles.secondaryButton}
          href="tel:+19046016286"
        >
          Call 904-601-6286
        </a>
      </div>
    </section>
  );
}
