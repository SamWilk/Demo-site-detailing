import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Detail Gallery | Clean Drive Mobile Spa",
  description:
    "View mobile car spa and detailing photos from Clean Drive Mobile Spa in Tampa, St. Pete, and Clearwater.",
};

const projectGroups = [
  {
    title: "Clean Drive Mobile Spa results",
    description: "Mobile car spa photos from Tampa, St. Pete, and Clearwater.",
    layout: "three",
    photos: [
      {
        src: "/clean-drive/bmw-detail.jpg",
        alt: "Clean Drive Mobile Spa detailed BMW",
        label: "Finish",
        caption: "Clean exterior finish",
      },
      {
        src: "/clean-drive/corvette-foam.jpg",
        alt: "Clean Drive Mobile Spa foam wash on red Corvette",
        label: "Foam",
        caption: "Exterior foam wash",
      },
      {
        src: "/clean-drive/suv-detail.jpg",
        alt: "Clean Drive Mobile Spa detailed SUV",
        label: "Mobile",
        caption: "SUV detail finish",
      },
    ],
  },
];

const additionalPhotos = [
  {
    src: "/clean-drive/detail-vertical.jpg",
    alt: "Clean Drive Mobile Spa vertical detailing photo",
    caption: "Mobile detail",
  },
  {
    src: "/clean-drive/detail-finish.jpg",
    alt: "Clean Drive Mobile Spa finished vehicle photo",
    caption: "Finished exterior",
  },
  {
    src: "/clean-drive/detail-square.jpg",
    alt: "Clean Drive Mobile Spa square gallery photo",
    caption: "Car spa result",
  },
  {
    src: "/clean-drive/detail-tall.jpg",
    alt: "Clean Drive Mobile Spa tall gallery photo",
    caption: "Detailing work",
  },
];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Detail gallery</p>
          <h1>Photos from Clean Drive Mobile Spa.</h1>
          <p>
            A look at mobile car spa work from Tampa, St. Pete, and Clearwater.
          </p>
          <Link href="/#contact-form">Book a detail</Link>
        </div>
      </section>

      <section className={styles.gallerySection} aria-label="Mobile detailing gallery">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Featured work</p>
          <h2>Professional detailing photos</h2>
        </div>

        <div className={styles.projectStack}>
          {projectGroups.map((project, projectIndex) => (
            <article className={styles.projectGroup} key={project.title}>
              <div className={styles.projectHeader}>
                <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
              <div
                className={`${styles.groupedPhotos} ${
                  project.layout === "pair" ? styles.photoPair : ""
                }`}
              >
                {project.photos.map((photo, photoIndex) => (
                  <figure className={styles.groupPhoto} key={photo.src}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={720}
                        height={560}
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        priority={projectIndex === 0 && photoIndex < 2}
                      />
                      <span>{photo.label}</span>
                    </div>
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>More photos</p>
          <h2>Additional Clean Drive work</h2>
        </div>

        <div className={styles.galleryGrid}>
          {additionalPhotos.map((photo, index) => (
            <article className={styles.photoCard} key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={720}
                height={560}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{photo.caption}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
