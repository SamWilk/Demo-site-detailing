import styles from "./SocialHighlights.module.css";

const highlights = [
  {
    name: "Instagram",
    handle: "See Clean Drive Mobile Spa work on Instagram",
    href: "https://www.instagram.com/cleandrivemobilespa/",
    icon: "ig",
  },
  {
    name: "Service request",
    handle: "Send vehicle, location, and car spa preferences through the form",
    href: "/#contact-form",
    icon: "CD",
  },
  {
    name: "Service area",
    handle: "Tampa, St. Pete, and Clearwater mobile detailing",
    href: "/#services",
    icon: "FL",
  },
];

export default function SocialHighlights() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Profiles and booking</p>
        <h2>Follow the work or request a Tampa Bay appointment.</h2>
        <p>
          Clean Drive Mobile Spa shares car spa work on Instagram and accepts
          service requests for interior and exterior detailing.
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
