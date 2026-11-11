import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface VisualPreset {
  id: string;
  name: string;
  wireframe: boolean;
  roughness: number;
  metalness: number;
  color: string;
  emissive: string;
}

export const VISUAL_PRESETS: VisualPreset[] = [
  { id: 'titanium', name: 'Quantum Monolith', wireframe: false, roughness: 0.12, metalness: 0.95, color: '#DCE4EC', emissive: '#020617' },
  { id: 'lattice', name: 'Neural Lattice', wireframe: true, roughness: 0.25, metalness: 0.9, color: '#00E5FF', emissive: '#00E5FF' },
  { id: 'spectral', name: 'Spectral Prism', wireframe: false, roughness: 0.08, metalness: 0.7, color: '#F1F5F9', emissive: '#0B132B' },
  { id: 'minimal', name: 'Minimal Wireframe', wireframe: true, roughness: 0.4, metalness: 0.85, color: '#7C4DFF', emissive: '#7C4DFF' },
];

interface DigitalMonolithProps {
  preset: VisualPreset;
  streamEnabled: boolean;
  autoRotate: boolean;
}

export function DigitalMonolith({ preset, streamEnabled, autoRotate }: DigitalMonolithProps) {
  const monolithGroup = useRef<THREE.Group>(null);
  const outerKnot = useRef<THREE.Mesh>(null);
  const innerCore = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Group>(null);
  const ring2 = useRef<THREE.Group>(null);
  const streamsGroup = useRef<THREE.Group>(null);

  // Pre-calculate curated harmonic stream points
  const streamPoints = useMemo(() => {
    const coords: [number, number, number][] = [];
    const count = 32;
    for (let i = 0; i < count; i++) {
      const u = (i / count) * Math.PI * 2;
      const radius = 3.6 + Math.sin(u * 3) * 0.4;
      const y = Math.cos(u * 2) * 1.4;
      coords.push([Math.cos(u) * radius, y, Math.sin(u) * radius]);
    }
    return coords;
  }, []);

  // Liquid Titanium / Metallic Sculptural PBR Material
  const monolithMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(preset.color),
      emissive: new THREE.Color(preset.emissive),
      emissiveIntensity: preset.wireframe ? 0.7 : 0.15,
      roughness: preset.roughness,
      metalness: preset.metalness,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      wireframe: preset.wireframe,
    });
  }, [preset]);

  // Refractive Faceted Glass Core Material
  const coreMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      emissive: new THREE.Color('#00E5FF'),
      emissiveIntensity: 0.35,
      roughness: 0.08,
      metalness: 0.2,
      transmission: 0.88,
      ior: 1.55,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.9,
      wireframe: preset.wireframe,
    });
  }, [preset.wireframe]);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;

    if (autoRotate && monolithGroup.current) {
      monolithGroup.current.rotation.y += delta * 0.2;
    }

    if (outerKnot.current) {
      outerKnot.current.rotation.x = Math.sin(elapsed * 0.3) * 0.15;
      outerKnot.current.rotation.z = Math.cos(elapsed * 0.25) * 0.15;
    }

    if (innerCore.current) {
      innerCore.current.rotation.y -= delta * 0.4;
      innerCore.current.rotation.x += delta * 0.25;
    }

    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.3;
      ring1.current.rotation.y += delta * 0.15;
    }

    if (ring2.current) {
      ring2.current.rotation.y -= delta * 0.25;
      ring2.current.rotation.z += delta * 0.2;
    }

    if (streamsGroup.current && streamEnabled) {
      streamsGroup.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={monolithGroup} position={[0, 0, 0]}>
      {/* 1. PRIMARY SCULPTURAL MONOLITH: Fluid Parametric Mathematical Curvature */}
      <mesh ref={outerKnot} castShadow receiveShadow>
        <torusKnotGeometry args={[1.7, 0.44, 128, 32, 2, 3]} />
        <primitive object={monolithMaterial} attach="material" />
      </mesh>

      {/* 2. REFRACTIVE INNER CORE: Nested Faceted Crystalline Obelisk */}
      <mesh ref={innerCore} position={[0, 0, 0]} castShadow>
        <octahedronGeometry args={[1.0, 1]} />
        <primitive object={coreMaterial} attach="material" />
      </mesh>

      {/* Internal Pulsar Point Lights */}
      <pointLight color="#00E5FF" intensity={2.8} distance={7} />
      <pointLight color="#7C4DFF" intensity={1.8} distance={5} position={[0, -0.5, 0]} />

      {/* 3. CONCENTRIC ORBITAL HARMONIC RINGS */}
      <group ref={ring1}>
        <mesh>
          <torusGeometry args={[2.8, 0.025, 16, 120]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </group>

      <group ref={ring2} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <mesh>
          <torusGeometry args={[3.2, 0.02, 16, 120]} />
          <meshStandardMaterial
            color="#7C4DFF"
            emissive="#7C4DFF"
            emissiveIntensity={1.0}
            roughness={0.25}
            metalness={0.9}
          />
        </mesh>
      </group>

      {/* 4. KINETIC HARMONIC DATA STREAMS */}
      {streamEnabled && (
        <group ref={streamsGroup}>
          {streamPoints.map((pos, idx) => (
            <mesh key={idx} position={pos}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? '#00E5FF' : '#E2E8F0'}
                emissive={idx % 2 === 0 ? '#00E5FF' : '#94A3B8'}
                emissiveIntensity={1.5}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
          ))}
        </group>
      )}

      {/* 5. SOFT CONTACT SHADOW & FLOOR GROUNDING */}
      <mesh position={[0, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.65} depthWrite={false} />
      </mesh>
    </group>
  );
}
