// import Spline from "@splinetool/react-spline";
// import styles from "./splent.module.scss";
// export default function Splent() {
//   return (
//     <div className={styles.containerD}>
//       <Spline
//         className={styles.img}
//         scene="https://prod.spline.design/BLmv7eE0ot9gzP2p/scene.splinecode"
//       />
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import Spline from "@splinetool/react-spline";
// import styles from "./splent.module.scss";

// export default function Splent() {
//   const [size, setSize] = useState(700);
//   const [splineInstance, setSplineInstance] = useState(null);

//   // Отслеживаем изменение размеров окна
//   useEffect(() => {
//     const updateSize = () => {
//       if (window.innerWidth < 768) {
//         setSize(300);
//       } else if (window.innerWidth < 1024) {
//         setSize(400);
//       } else {
//         setSize(700);
//       }
//     };

//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   // Обновляем параметры камеры и масштаб сцены после загрузки Spline или изменения размера
//   useEffect(() => {
//     if (splineInstance) {
//       // Обновляем aspect камеры, так как контейнер квадратный (size x size)
//       if (splineInstance.camera) {
//         splineInstance.camera.aspect = 1;
//         splineInstance.camera.updateProjectionMatrix();
//       }
//       // Вычисляем коэффициент масштабирования относительно базового размера 500px
//       const scale = size / 500;
//       if (splineInstance.scene) {
//         splineInstance.scene.scale.set(scale, scale, scale);
//       }
//     }
//   }, [size, splineInstance]);

//   return (
//     <div className={styles.containerD} style={{ width: size, height: size }}>
//       <Spline
//         scene="https://prod.spline.design/BLmv7eE0ot9gzP2p/scene.splinecode"
//         onLoad={(spline) => {
//           setSplineInstance(spline);
//           // Первоначальная настройка камеры
//           if (spline.camera) {
//             spline.camera.aspect = 1;
//             spline.camera.updateProjectionMatrix();
//           }
//           // Применяем масштабирование сразу после загрузки сцены
//           const scale = size / 700;
//           if (spline.scene) {
//             spline.scene.scale.set(scale, scale, scale);
//           }
//         }}
//       />
//     </div>
//   );
// }

import Spline from '@splinetool/react-spline';
import styles from './splent.module.scss';

export default function Splent() {
  return (
    <div className={styles.containerD}>
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/BLmv7eE0ot9gzP2p/scene.splinecode"
      />
    </div>
  );
}
