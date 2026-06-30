import Link from "next/link";
import styles from "./SiteHeader.module.css";

export default function SiteHeader({ variant = "light" }) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Link className={styles.brand} href="/" aria-label="Detail King 904 home">
        Detail King 904
      </Link>
      <nav className={styles.navLinks} aria-label="Main navigation">
        <Link href="/#proof">Mobile Service</Link>
        <Link href="/#services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/#contact-form">Contact</Link>
      </nav>
    </header>
  );
}
