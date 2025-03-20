import Spline from "@splinetool/react-spline";

export default function Splent() {
  return (
    <main style={{ width: "500px", height: "500px", margin: "0 auto" }}>
      <Spline scene="https://prod.spline.design/iUgR258erK4HcA9p/scene.splinecode" />
    </main>
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
