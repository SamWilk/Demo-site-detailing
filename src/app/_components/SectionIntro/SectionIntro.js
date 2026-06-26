import styles from "./SectionIntro.module.css";

export default function SectionIntro({ eyebrow, title }) {
  return (
    <div className={styles.sectionIntro}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
