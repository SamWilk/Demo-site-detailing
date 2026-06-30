import styles from "./SocialHighlights.module.css";

const highlights = [
  {
    name: "Facebook",
    handle: "Follow Detail King 904 on Facebook",
    href: "https://www.facebook.com/102750125339229",
    icon: "f",
  },
  {
    name: "Instagram",
    handle: "See Detail King 904 work on Instagram",
    href: "https://www.instagram.com/detailking904?igsh=MTU3cndldGprYjd2OQ==",
    icon: "ig",
  },
  {
    name: "Service request",
    handle: "Send vehicle, location, and service preferences through the form",
    href: "/#contact-form",
    icon: "904",
  },
];

export default function SocialHighlights() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Profiles and booking</p>
        <h2>Follow the work or request a Jacksonville-area appointment.</h2>
        <p>
          Detail King 904 shares work on Facebook and Instagram and accepts
          service requests for professional detailing, paint correction, ceramic
          coating, tinting, and paint decontamination.
        </p>
      </div>

      <div className={styles.linkGrid}>
        {highlights.map((link) => (
          <a
            className={styles.socialCard}
            href={link.href}
            key={link.name}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className={styles.icon} aria-hidden="true">
              {link.icon}
            </span>
            <span>
              <strong>{link.name}</strong>
              <small>{link.handle}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
