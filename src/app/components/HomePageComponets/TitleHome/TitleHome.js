import styles from "./TitleHome.module.css";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function TitleHome() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Willkommen bei{" "}
          <span className={styles.highlight}>PixelPro Studio</span> Ihr Partner
          für moderne Webentwicklung
        </h1>
        <p className={styles.description}>
          Wir erstellen moderne Websites und professionelle Videos, die Ihrem
          Unternehmen helfen, online erfolgreich zu sein.
        </p>
        <button className={styles.pulseButton}>Kontakt</button>

        <ul className={styles.socialList}>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={30} className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={30} className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={30} className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} className={styles.socialIcon} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
