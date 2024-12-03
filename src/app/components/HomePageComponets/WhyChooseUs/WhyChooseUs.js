import styles from "./WhyChooseUs.module.css";
import { FaHandHoldingHeart, FaLightbulb, FaComments } from "react-icons/fa";
import Image from "next/image";
export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Warum <span className={styles.highlight}>PixelPro Studio</span>{" "}
          wählen?
        </h2>
        <p className={styles.description}>
          Bei PixelPro Studio arbeiten Sie direkt mit einem vielseitigen
          Experten, der sowohl in der Webentwicklung als auch in der
          Videoproduktion spezialisiert ist.
        </p>

        <ul className={styles.featuresList}>
          <li className={styles.featureItem}>
            <FaHandHoldingHeart className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Individueller Ansatz</h3>
            <p className={styles.featureDescription}>
              Jedes Projekt wird mit besonderer Aufmerksamkeit und Sorgfalt
              behandelt, um maßgeschneiderte Lösungen für Ihre Bedürfnisse zu
              bieten.
            </p>
          </li>
          <li className={styles.featureItem}>
            <FaLightbulb className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Frische Ideen</h3>
            <p className={styles.featureDescription}>
              Als leidenschaftlicher Entwickler und Videograf bringe ich
              Kreativität und Innovation in jedes Projekt ein.
            </p>
          </li>
          <li className={styles.featureItem}>
            <FaComments className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Direkte Kommunikation</h3>
            <p className={styles.featureDescription}>
              Sie arbeiten direkt mit mir zusammen, ohne Umwege oder
              Missverständnisse, was eine schnelle und klare Umsetzung
              garantiert.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
