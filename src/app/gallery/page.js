import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Detail Gallery | Detail King 904",
  description:
    "View professional detailing photos from Detail King 904 in Jacksonville, FL.",
};

const projectGroups = [
  {
    title: "Detail King 904 results",
    description: "Professional detailing photos from Detail King 904 in Jacksonville.",
    layout: "three",
    photos: [
      {
        src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/AED99DE3-331F-4220-9D06-42E1B62B21DB.jpeg",
        alt: "Detail King 904 gallery photo 1",
        label: "Detail",
        caption: "Featured gallery photo",
      },
      {
        src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/74C06722-92DE-411F-93D5-3DCFA8D66AA6.jpeg",
        alt: "Detail King 904 gallery photo 2",
        label: "Finish",
        caption: "Gallery detail photo",
      },
      {
        src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/33372B9D-5FFB-4DAA-AC78-E1CB75B0FC1D.jpeg",
        alt: "Detail King 904 gallery photo 3",
        label: "Care",
        caption: "Detail King 904 gallery photo",
      },
    ],
  },
];

const additionalPhotos = [
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/46B37548-5A68-4DA6-8359-0E3B294AF8D8.jpeg",
    alt: "Detail King 904 gallery photo 4",
    caption: "Gallery photo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/90BB666E-EE2D-42CF-81ED-BFED4B697CA4.jpeg",
    alt: "Detail King 904 gallery photo 5",
    caption: "Gallery photo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/9A917C06-AEF0-4624-B7B5-F62091F71803.jpeg",
    alt: "Detail King 904 gallery photo 6",
    caption: "Gallery photo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/1000013615.jpg",
    alt: "Detail King 904 gallery photo 7",
    caption: "Gallery photo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/1000013683.jpg",
    alt: "Detail King 904 gallery photo 8",
    caption: "Gallery photo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/1000013615-e1a200b.jpg",
    alt: "Detail King 904 gallery photo 9",
    caption: "Gallery photo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/1000008645.jpg",
    alt: "Detail King 904 gallery photo 10",
    caption: "Gallery photo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/1000012025.jpg",
    alt: "Detail King 904 gallery photo 11",
    caption: "Gallery photo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/47346fc5-530e-4b5c-a6bf-5f4a7698897a/1000006522.jpg",
    alt: "Detail King 904 gallery photo 12",
    caption: "Gallery photo",
  },
];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Detail gallery</p>
          <h1>Photos from Detail King 904.</h1>
          <p>
            A look at detailing and vehicle care work from the Jacksonville
            service area.
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
          <h2>Additional Detail King 904 work</h2>
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
