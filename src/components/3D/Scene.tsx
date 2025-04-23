import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ParticleField from "./ParticleField";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
