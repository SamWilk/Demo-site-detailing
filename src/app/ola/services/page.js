import BookingWorkflow from "../../_components/BookingWorkflow/BookingWorkflow";
import SiteHeader from "../../_components/SiteHeader/SiteHeader";
import styles from "./full-detail-car/page.module.css";

export const metadata = {
  title: "Book Mobile Car Spa Services | Clean Drive Mobile Spa",
  description:
    "Choose a Clean Drive Mobile Spa interior, exterior, full car spa, or maintenance detail service in Tampa, St. Pete, and Clearwater.",
};

export default function ServicesBookingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Clean Drive booking</p>
          <h1>Choose your mobile car spa service.</h1>
          <p>
            Pick the package your vehicle needs, choose a preferred appointment
            time, and Clean Drive Mobile Spa will confirm the mobile service.
          </p>
        </div>
      </section>

      <BookingWorkflow />
    </main>
  );
}
