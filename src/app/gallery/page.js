import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Detail Gallery | Florida Boys Mobile Detail",
  description:
    "View mobile auto detailing photos from Florida Boys Mobile Detail in Jacksonville, FL.",
};

const projectGroups = [
  {
    title: "Mobile detail results",
    description: "Detail photos from Florida Boys Mobile Detail in Jacksonville.",
    layout: "three",
    photos: [
      {
        src: "https://s3-media0.fl.yelpcdn.com/bphoto/VYJSl70TuSloJ4igFVb-Eg/l.jpg",
        alt: "Florida Boys Mobile Detail vehicle detailing photo in Jacksonville, FL",
        label: "Detail",
        caption: "Mobile detailing service",
      },
      {
        src: "https://s3-media0.fl.yelpcdn.com/bphoto/q6xa5SRsdz_R3GPmKKGrZw/l.jpg",
        alt: "Florida Boys Mobile Detail car wash photo in Jacksonville, FL",
        label: "Wash",
        caption: "Hand wash and clean finish",
      },
      {
        src: "https://s3-media0.fl.yelpcdn.com/bphoto/2HOy2STosNqt247vGK9w6A/l.jpg",
        alt: "Florida Boys Mobile Detail exterior detail photo",
        label: "Exterior",
        caption: "Exterior detail work",
      },
    ],
  },
];

const additionalPhotos = [
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/4UCwr6ExUYUyuhFhbuZbNw/l.jpg",
    alt: "Florida Boys Mobile Detail auto detailing result",
    caption: "Auto detailing work",
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/QnZTbJe8aOPcKDqEfiuDTg/l.jpg",
    alt: "Florida Boys Mobile Detail vehicle cleaning photo",
    caption: "Vehicle cleaning detail",
  },
];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Detail gallery</p>
          <h1>Photos from Florida Boys Mobile Detail.</h1>
          <p>
            A look at mobile wash and detailing work from the Jacksonville service
            area.
          </p>
          <Link href="/#contact-form">Book a detail</Link>
        </div>
      </section>

      <section className={styles.gallerySection} aria-label="Mobile detailing gallery">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Featured work</p>
          <h2>Mobile detailing photos</h2>
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
          <h2>Additional detailing work</h2>
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
