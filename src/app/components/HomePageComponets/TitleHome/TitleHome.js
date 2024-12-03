"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируем стили AOS
import styles from "./TitleHome.module.css";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function TitleHome() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out-bounce" }); // Инициализация AOS с настройками
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title} data-aos="fade-up">
          Willkommen bei{" "}
          <span className={styles.highlight}>PixelPro Studio</span> Ihr Partner
          für moderne Webentwicklung
        </h1>
        <p
          className={styles.description}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Wir erstellen moderne Websites und professionelle Videos, die Ihrem
          Unternehmen helfen, online erfolgreich zu sein.
        </p>
        <button
          className={styles.pulseButton}
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          Kontakt
        </button>

        <ul className={styles.socialList}>
          <li data-aos="fade-up" data-aos-delay="1500">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={30} className={styles.socialIcon} />
            </a>
          </li>
          <li data-aos="fade-up" data-aos-delay="1600">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={30} className={styles.socialIcon} />
            </a>
          </li>
          <li data-aos="fade-up" data-aos-delay="1700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={30} className={styles.socialIcon} />
            </a>
          </li>
          <li data-aos="fade-up" data-aos-delay="1800">
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
