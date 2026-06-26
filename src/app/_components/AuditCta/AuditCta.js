import Link from "next/link";
import styles from "./AuditCta.module.css";

export default function AuditCta() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div>
        <p className={styles.eyebrow}>Book a detail</p>
        <h2>Need your vehicle cleaned without losing half the day?</h2>
        <p>
          Call Florida Boys Mobile Detail for hand wash, auto detailing,
          protection, and touchless wash service across the Jacksonville area.
        </p>
      </div>
      <div className={styles.actions}>
        <Link className={styles.primaryButton} href="/#contact-form">
          Request service
        </Link>
        <a
          className={styles.secondaryButton}
          href="https://www.yelp.com/biz/florida-boys-mobile-detail-jacksonville"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Yelp profile
        </a>
      </div>
    </section>
  );
}
