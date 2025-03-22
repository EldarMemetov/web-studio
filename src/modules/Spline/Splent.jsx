// import Spline from "@splinetool/react-spline";
// import styles from "./splent.module.scss";
// export default function Splent() {
//   return (
//     <div className={styles.containerD}>
//       <Spline
//         className={styles.img}
//         scene="https://prod.spline.design/iUgR258erK4HcA9p/scene.splinecode"
//       />
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Splent() {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 1000 });

  // Обновляем размер и камеру в зависимости от экрана
  const updateScene = () => {
    const width = window.innerWidth;

    if (width < 600) {
      setScaleFactor(0.5);
      setCameraPosition({ x: 0, y: 0, z: 2 });
    } else if (width < 1024) {
      setScaleFactor(1);
      setCameraPosition({ x: 0, y: 0, z: 2 });
    } else {
      setScaleFactor(1.5);
      setCameraPosition({ x: 0, y: 0, z: 2 });
    }
  };

  useEffect(() => {
    updateScene();
    window.addEventListener("resize", updateScene);
    return () => window.removeEventListener("resize", updateScene);
  }, []);

  function onLoad(splineApp) {
    const ball = splineApp.findObjectByName("Sphere"); // Название объекта в Spline
    const camera = splineApp.findObjectByName("Camera"); // Название камеры в Spline

    if (ball) {
      ball.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

    if (camera) {
      camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    }
  }

  return (
    <div style={{ width: "500px", height: "500px", margin: "0 auto" }}>
      <Spline
        scene="https://prod.spline.design/iUgR258erK4HcA9p/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { Suspense } from "react";

// export default function Splent() {
//   return (
//     <Canvas style={{ width: "500px", height: "500px", margin: "0 auto" }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 2, 2]} />
//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// }

// function Model() {
//   const { scene } = useGLTF("/image/ai_brain.gltf"); // Убедись, что путь правильный
//   return <primitive object={scene} scale={1.5} />;
// }
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
// import { Suspense } from "react";
// import * as THREE from "three"; // Для использования материалов и других классов Three.js

// export default function Splent() {
//   return (
//     <Canvas style={{ width: "500px", height: "500px", margin: "0 auto" }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 2, 2]} />
//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// }

// function Model() {
//   const { scene } = useGLTF("/image/ai_brain.gltf"); // Загружаем модель
//   const texture = useTexture("/image/brain_texture.png"); // Загружаем текстуру

//   // Применяем текстуру к материалу
//   scene.traverse((child) => {
//     if (child.isMesh) {
//       child.material = new THREE.MeshStandardMaterial({ map: texture });
//     }
//   });

//   return <primitive object={scene} scale={1.5} />;
// }
