// "use client";
// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import styles from "./TitleHome.module.scss";
// // import Image from "next/image";
// import Container from "@/shared/container/Container";
// import Button from "../../../shared/components/button/Button";
// import Splent from "@/modules/Spline/Splent";
// export default function TitleHome() {
//   const { t } = useTranslation("titleHome");

//   useEffect(() => {
//     AOS.init({
//       duration: 1500,
//       easing: "ease-in-out-bounce",
//       offset: 20,
//     });
//   }, []);

//   return (
//     <section className={styles.section}>
//       <Container>
//         <div className={styles.container}>
//           <div className={styles.containerText}>
//             <div>
//               <h1 className={styles.title} data-aos="fade-up">
//                 {t("title")}
//               </h1>
//               <p
//                 className={styles.description}
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//               >
//                 {t("description")}
//               </p>
//             </div>
//             <div className={styles.containerButton}>
//               <Button
//                 variant="variant3"
//                 data-aos="zoom-in"
//                 data-aos-delay="1000"
//               >
//                 {t("contactButton")}
//               </Button>
//               <Button
//                 variant="variant2"
//                 data-aos="zoom-in"
//                 data-aos-delay="1000"
//               >
//                 {t("servicesButton")}
//               </Button>
//             </div>
//           </div>
//           <div className={styles.imageContainer}>
//             {/* <div className={styles.cube}> */}
//             {/* <Image
//                 src="/image/3d-shape.png"
//                 alt="3D Cube"
//                 width={563}
//                 height={586}
//                 className={styles.cubeFace}
//                 data-aos="zoom-in"
//                 data-aos-delay="1000"
//               /> */}

//             {/* </div> */}
//             <Splent data-aos="zoom-in" data-aos-delay="1000" />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./TitleHome.module.scss";
import Container from "@/shared/container/Container";
import Button from "../../../shared/components/button/Button";
import Splent from "@/modules/Spline/Splent";

export default function TitleHome() {
  const { t } = useTranslation("titleHome");

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out-bounce",
      offset: 20,
    });
  }, []);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {/* 3D‑сцена */}
          <Splent data-aos="zoom-in" data-aos-delay="1000" />
          {/* Текст, который выводится поверх 3D‑сцены */}
          <div className={styles.overlayText}>
            <div className={styles.containerText}>
              <h1 className={styles.title} data-aos="fade-up">
                {t("title")}
              </h1>
              <p
                className={styles.description}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {t("description")}
              </p>
              <div className={styles.containerButton}>
                <Button
                  variant="variant3"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  {t("contactButton")}
                </Button>
                <Button
                  variant="variant2"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  {t("servicesButton")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
