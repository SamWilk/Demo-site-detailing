import Link from "next/link";
import AuditCta from "./_components/AuditCta/AuditCta";
import ContactForm from "./_components/ContactForm/ContactForm";
import SectionIntro from "./_components/SectionIntro/SectionIntro";
import SiteHeader from "./_components/SiteHeader/SiteHeader";
import SocialHighlights from "./_components/SocialHighlights/SocialHighlights";
import styles from "./page.module.css";

const serviceAreas = [
  "Tampa",
  "St. Pete",
  "Clearwater",
  "Interior and exterior",
];

const proofPoints = [
  {
    metric: "3",
    label: "Tampa Bay service",
    detail: "Mobile car spa service across Tampa, St. Pete, and Clearwater.",
  },
  {
    metric: "24",
    label: "Instagram posts",
    detail: "A growing feed of mobile detailing work and clean finishes.",
  },
  {
    metric: "26",
    label: "profile followers",
    detail: "Clean Drive Mobile Spa is building its local Tampa Bay presence.",
  },
];

const services = [
  {
    title: "Interior Detailing",
    copy: "Cabin-focused cleaning for seats, carpets, panels, trim, and the areas that make daily driving feel fresh again.",
    href: "#contact-form",
  },
  {
    title: "Exterior Detailing",
    copy: "A mobile exterior refresh for paint, wheels, glass, tires, and the finish customers notice first.",
    href: "#contact-form",
  },
  {
    title: "Full Car Spa",
    copy: "Interior and exterior detailing together for a complete mobile car spa appointment.",
    href: "#contact-form",
  },
  {
    title: "Maintenance Detail",
    copy: "A lighter upkeep service for vehicles that need consistent cleaning between deeper details.",
    href: "#contact-form",
  },
];

const checklist = [
  "Interior detailing",
  "Exterior detailing",
  "Full car spa",
  "Maintenance detail",
  "Tampa Bay mobile service",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Tampa Bay mobile car spa</p>
            <h1>Clean Drive Mobile Spa brings the car spa to you.</h1>
            <p className={styles.heroText}>
              Car spa services in Tampa, St. Pete, and Clearwater with interior
              and exterior detailing for vehicles that need a cleaner drive.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#contact-form">
                Request a detail
              </Link>
              <Link className={styles.secondaryButton} href="#services">
                View services
              </Link>
            </div>
            <div className={styles.businessTypes} aria-label="Service areas">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className={styles.section} id="proof">
        <SectionIntro
          eyebrow="Mobile service"
          title="Built for convenient detailing wherever your vehicle is parked."
        />
        <div className={styles.winGrid}>
          {proofPoints.map((point) => (
            <article className={styles.winCard} key={point.label}>
              <strong>{point.metric}</strong>
              <h3>{point.label}</h3>
              <p>{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.splitSection} id="approach">
        <div>
          <p className={styles.eyebrow}>How the work gets handled</p>
          <h2>High-end vehicle care without needing your water or power.</h2>
          <p>
            Clean Drive Mobile Spa serves Tampa Bay drivers with mobile
            interior and exterior appointments built around vehicle condition,
            location, and the level of cleanup needed.
          </p>
        </div>
        <div className={styles.checkPanel}>
          {checklist.map((item) => (
            <div className={styles.checkItem} key={item}>
              <span aria-hidden="true">+</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="services">
        <SectionIntro
          eyebrow="Services"
          title="Choose the mobile car spa service that fits the vehicle."
        />
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Link href={service.href}>Choose service</Link>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.socialWrap}>
        <SocialHighlights />
      </div>

      <AuditCta />
    </main>
  );
}
