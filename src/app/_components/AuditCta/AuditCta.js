import Link from "next/link";
import styles from "./AuditCta.module.css";

export default function AuditCta() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div>
        <p className={styles.eyebrow}>Book a detail</p>
        <h2>Need professional vehicle care without driving across town?</h2>
        <p>
          Request Clean Drive Mobile Spa for interior and exterior mobile car
          spa services across Tampa, St. Pete, and Clearwater.
        </p>
      </div>
      <div className={styles.actions}>
        <Link className={styles.primaryButton} href="/#contact-form">
          Request a detail
        </Link>
        <a
          className={styles.secondaryButton}
          href="https://www.instagram.com/cleandrivemobilespa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DM on Instagram
        </a>
      </div>
    </section>
  );
}
