import Link from "next/link";
import AuditCta from "./_components/AuditCta/AuditCta";
import ContactForm from "./_components/ContactForm/ContactForm";
import SectionIntro from "./_components/SectionIntro/SectionIntro";
import SiteHeader from "./_components/SiteHeader/SiteHeader";
import SocialHighlights from "./_components/SocialHighlights/SocialHighlights";
import styles from "./page.module.css";

const serviceAreas = [
  "Jacksonville, FL",
  "Surrounding areas",
  "No water needed",
  "No power needed",
];

const proofPoints = [
  {
    metric: "904",
    label: "Jacksonville service",
    detail: "Mobile detailing for Jacksonville, FL and nearby communities.",
  },
  {
    metric: "0",
    label: "water or power needed",
    detail: "Appointments can be handled without customer water or power access.",
  },
  {
    metric: "5",
    label: "core services",
    detail: "Detailing, paint correction, ceramic coating, tinting, and water spot removal.",
  },
];

const services = [
  {
    title: "Professional Detailing",
    copy: "Interior and exterior detailing brought to your driveway, workplace, or parking spot across Jacksonville.",
    href: "#contact-form",
  },
  {
    title: "Paint Correction",
    copy: "Correction work for swirls, haze, and defects that keep paint from looking deep, glossy, and clear.",
    href: "#contact-form",
  },
  {
    title: "Certified Ceramic Coating",
    copy: "Certified ceramic coating installation for long-term gloss, easier washing, and stronger paint protection.",
    href: "#contact-form",
  },
  {
    title: "Window Tinting",
    copy: "Window tinting service for a cleaner look, added privacy, and a more comfortable cabin.",
    href: "#contact-form",
  },
  {
    title: "Paint Decontamination",
    copy: "Water spot removal and paint decon service for contamination that a regular wash will not clear.",
    href: "#contact-form",
  },
];

const checklist = [
  "Professional detailing",
  "Paint correction",
  "Certified ceramic coatings",
  "Window tinting",
  "Water spot removal",
  "Gift certificates",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Jacksonville mobile detailing</p>
            <h1>Detail King 904 brings the detail shop to you.</h1>
            <p className={styles.heroText}>
              Professional detailing, paint correction, certified ceramic
              coating, window tinting, and water spot removal for Jacksonville,
              FL and surrounding areas. No water or power necessary.
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
            Detail King 904 serves Jacksonville-area drivers with mobile
            appointments, coating-ready prep, correction work, tinting, and
            clean follow-through from first call to finished vehicle.
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
          title="Detailing and protection services for daily drivers, weekend cars, and clean builds."
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
