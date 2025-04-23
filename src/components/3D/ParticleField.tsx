import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const createSpherePositions = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(theta);
  }
  return positions;
};

const createCubePositions = (count: number, size: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * size;
    positions[i * 3 + 1] = (Math.random() - 0.5) * size;
    positions[i * 3 + 2] = (Math.random() - 0.5) * size;
  }
  return positions;
};

const createPyramidPositions = (count: number, size: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const height = Math.random() * size;
    const angle = Math.random() * Math.PI * 2;
    const radius = (1 - height / size) * (size / 2);
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = height - size / 2;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  return positions;
};

const createWavePositions = (count: number, size: number, time: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * size;
    const z = (Math.random() - 0.5) * size;
    const y = Math.sin((x + time) * 0.5) * Math.cos((z + time) * 0.5) * size * 0.2;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const positionsRef = useRef<Float32Array>();
  const targetPositionsRef = useRef<Float32Array>();
  const count = 5000;
  const size = 4;

  useEffect(() => {
    positionsRef.current = createSpherePositions(count, size / 2);
    targetPositionsRef.current = positionsRef.current.slice();
  }, []);

  useFrame((state, delta) => {
    if (!ref.current || !positionsRef.current || !targetPositionsRef.current) return;

    const time = state.clock.getElapsedTime();
    const scroll = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Update target positions based on scroll
    if (scroll < 0.25) {
      targetPositionsRef.current = createSpherePositions(count, size / 2);
    } else if (scroll < 0.5) {
      targetPositionsRef.current = createCubePositions(count, size);
    } else if (scroll < 0.75) {
      targetPositionsRef.current = createPyramidPositions(count, size);
    } else {
      targetPositionsRef.current = createWavePositions(count, size, time);
    }

    // Interpolate current positions towards target
    for (let i = 0; i < positionsRef.current.length; i++) {
      positionsRef.current[i] += (targetPositionsRef.current[i] - positionsRef.current[i]) * 0.1;
    }

    // Update geometry
    ref.current.geometry.attributes.position.array = positionsRef.current;
    ref.current.geometry.attributes.position.needsUpdate = true;

    // Rotate
    ref.current.rotation.x += delta * 0.1;
    ref.current.rotation.y += delta * 0.15;
  });

  return (
    <Points ref={ref}>
      <bufferAttribute
        attach="geometry-attributes-position"
        count={count}
        array={positionsRef.current || new Float32Array(count * 3)}
        itemSize={3}
      />
      <PointMaterial
        transparent
        color="#0ff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export default ParticleField;