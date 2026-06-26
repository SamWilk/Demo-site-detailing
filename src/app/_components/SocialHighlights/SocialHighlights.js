import styles from "./SocialHighlights.module.css";

const highlights = [
  {
    name: "Yelp",
    handle: "Claimed profile, 5.0 rating, 4 reviews, and mobile detail photos",
    href: "https://www.yelp.com/biz/florida-boys-mobile-detail-jacksonville",
    icon: "y",
  },
  {
    name: "Facebook",
    handle: "Follow Florida Boys Mobile Detail for updates and mobile detailing work",
    href: "https://www.facebook.com/floridaboysmobiledetailllc",
    icon: "f",
  },
  {
    name: "Service request",
    handle: "Send vehicle, location, and detailing preferences through the form",
    href: "/#contact-form",
    icon: "904",
  },
];

export default function SocialHighlights() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Profiles and proof</p>
        <h2>Detail photos and local review signals support the service.</h2>
        <p>
          Florida Boys Mobile Detail appears on Yelp as a claimed Jacksonville car
          wash and auto detailing business with a 5.0 rating, visible photos, and
          mobile coverage across nearby counties.
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
