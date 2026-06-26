import Link from "next/link";
import AuditCta from "./_components/AuditCta/AuditCta";
import ContactForm from "./_components/ContactForm/ContactForm";
import SectionIntro from "./_components/SectionIntro/SectionIntro";
import SiteHeader from "./_components/SiteHeader/SiteHeader";
import SocialHighlights from "./_components/SocialHighlights/SocialHighlights";
import styles from "./page.module.css";

const serviceAreas = [
  "Duval County",
  "Clay County",
  "Nassau County",
  "St. Johns County",
];

const proofPoints = [
  {
    metric: "5.0",
    label: "Yelp rating",
    detail: "Local customers rate the mobile detailing work highly on Yelp.",
  },
  {
    metric: "4",
    label: "Yelp reviews",
    detail: "A claimed local profile with customer feedback and detail photos.",
  },
  {
    metric: "1,627",
    label: "local searches",
    detail: "Yelp search visibility within 15 miles for car wash services.",
  },
];

const services = [
  {
    title: "Mobile Auto Detailing",
    copy: "Interior and exterior detailing brought to your driveway, office, or parking spot across the Jacksonville area.",
    href: "#contact-form",
  },
  {
    title: "Hand Washing",
    copy: "Careful handwashing for vehicles that need a clean finish without the rushed feel of a tunnel wash.",
    href: "#contact-form",
  },
  {
    title: "Protection Packages",
    copy: "Paint-safe protection services for drivers who want their vehicle cleaned, refreshed, and easier to maintain.",
    href: "#contact-form",
  },
];

const checklist = [
  "Mobile appointments",
  "Hand wash service",
  "Interior detailing",
  "Exterior detailing",
  "Protection options",
  "Touchless wash options",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Jacksonville mobile detailing</p>
            <h1>Mobile car detailing that comes to your curb.</h1>
            <p className={styles.heroText}>
              Florida Boys Mobile Detail brings hand wash, auto detailing,
              touchless wash, and protection services to drivers across Duval,
              Clay, Nassau, and St. Johns counties.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact-form">
                Book a detail
              </a>
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
          eyebrow="Local trust signals"
          title="A claimed Jacksonville detailing profile with strong local signals."
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
          <p className={styles.eyebrow}>How the detail gets handled</p>
          <h2>Clean scheduling, careful washing, and a finish ready to drive.</h2>
          <p>
            The service is built around convenience: mobile appointments, clear
            detail options, and vehicle care that fits around your day instead of
            sending you across town.
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
          title="Detailing services for daily drivers, family cars, and clean weekend rides."
        />
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Link href={service.href}>Request help</Link>
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
