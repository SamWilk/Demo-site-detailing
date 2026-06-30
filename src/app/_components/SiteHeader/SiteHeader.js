import Link from "next/link";
import styles from "./SiteHeader.module.css";

export default function SiteHeader({ variant = "light" }) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Link className={styles.brand} href="/" aria-label="Clean Drive Mobile Spa home">
        Clean Drive Mobile Spa
      </Link>
      <nav className={styles.navLinks} aria-label="Main navigation">
        <Link href="/#services">Services</Link>
        <Link href="/#proof">Mobile Service</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/#contact-form">Contact</Link>
      </nav>
    </header>
  );
}
