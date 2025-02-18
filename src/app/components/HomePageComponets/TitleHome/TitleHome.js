"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./TitleHome.module.css";
import Image from "next/image";

export default function TitleHome() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out-bounce",
      offset: 20,
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <div>
            <h1 className={styles.title} data-aos="fade-up">
              PixelPro Studio — ваш партнер в галузі сучасної веб-розробки
            </h1>
            <p
              className={styles.description}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              З турботою про кожен піксель Ми створюємо сучасні сайти,
              унікальний дизайн і професійні відео - для розвитку вашого бізнесу
            </p>
          </div>
          <div className={styles.containerButton}>
            <button
              className={styles.ButtonConnection}
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              Зв’язатися
            </button>
            <button
              className={styles.buttonServices}
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              Наші послуги
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.cube}>
            <Image
              src="/image/3d-shape.png"
              alt="3D Cube"
              width={563}
              height={586}
              className={styles.cubeFace}
              data-aos="zoom-in"
              data-aos-delay="1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
