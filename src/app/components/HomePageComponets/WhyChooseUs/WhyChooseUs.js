"use client";
// import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHandHoldingHeart,
  FaLightbulb,
  FaComments,
  FaTools,
  FaRocket,
  FaAward,
} from "react-icons/fa";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-bounce",
      once: true,
      offset: 10,
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 data-aos="fade-up" data-aos-delay="200" className={styles.title}>
          Warum <span className={styles.highlight}>PixelPro Studio</span>{" "}
          wählen?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className={styles.description}
        >
          Bei PixelPro Studio arbeiten Sie direkt mit einem vielseitigen
          Experten, der sowohl in der Webentwicklung als auch in der
          Videoproduktion spezialisiert ist.
        </p>
        <div>
          {/* <Image
            width={500}
            height={500}
            src={"/image/divine.jpg"}
            alt="promotion icon"
          /> */}
          <ul className={styles.featuresList}>
            <li
              data-aos="fade-up"
              data-aos-delay="600"
              className={styles.featureItem}
            >
              <FaHandHoldingHeart className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Individueller Ansatz</h3>
              <p className={styles.featureDescription}>
                Jedes Projekt wird mit besonderer Aufmerksamkeit und Sorgfalt
                behandelt, um maßgeschneiderte Lösungen für Ihre Bedürfnisse zu
                bieten.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="800"
              className={styles.featureItem}
            >
              <FaLightbulb className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Frische Ideen</h3>
              <p className={styles.featureDescription}>
                Als leidenschaftlicher Entwickler und Videograf bringe ich
                Kreativität und Innovation in jedes Projekt ein.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1000"
              className={styles.featureItem}
            >
              <FaComments className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Direkte Kommunikation</h3>
              <p className={styles.featureDescription}>
                Sie arbeiten direkt mit mir zusammen, ohne Umwege oder
                Missverständnisse, was eine schnelle und klare Umsetzung
                garantiert.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1200"
              className={styles.featureItem}
            >
              <FaTools className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Modernste Technologien</h3>
              <p className={styles.featureDescription}>
                Ich nutze die neuesten Technologien und Tools, um Ihre Projekte
                effizient und zukunftssicher zu gestalten.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1400"
              className={styles.featureItem}
            >
              <FaRocket className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Schnelle Umsetzung</h3>
              <p className={styles.featureDescription}>
                Mit einem klar strukturierten Prozess garantiere ich eine
                schnelle und dennoch qualitativ hochwertige Projektabwicklung.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="1600"
              className={styles.featureItem}
            >
              <FaAward className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Exzellente Qualität</h3>
              <p className={styles.featureDescription}>
                Ihre Zufriedenheit steht im Mittelpunkt, und jedes Projekt wird
                mit höchster Präzision und Qualität realisiert.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
