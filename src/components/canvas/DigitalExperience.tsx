import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { DigitalMonolith, VisualPreset } from './DigitalMonolith';

interface DigitalExperienceProps {
  scrollProgress: number;
  preset: VisualPreset;
  streamEnabled: boolean;
  autoRotate: boolean;
  activeSection: string;
}

export function DigitalExperience({
  scrollProgress,
  preset,
  streamEnabled,
  autoRotate,
  activeSection,
}: DigitalExperienceProps) {
  const { camera, viewport } = useThree();
  const sceneGroup = useRef<THREE.Group>(null);

  const isMobile = viewport.width < 7;

  // Section-specific cinematic camera coordinates [camX, camY, camZ, lookX, lookY, lookZ]
  const cameraKeyframes = useMemo(() => {
    if (isMobile) {
      return {
        home: { pos: [3.4, 1.4, 4.6], target: [0, 0.1, 0] },
        about: { pos: [3.8, 1.1, 2.2], target: [0, 0.1, 0] },
        skills: { pos: [2.6, 2.4, 4.0], target: [0, 0.1, 0] },
        experience: { pos: [-3.4, 1.2, -3.0], target: [0, 0.1, 0] },
        projects: { pos: [3.8, 1.3, 2.8], target: [0, 0.1, 0] },
        certificates: { pos: [0.5, 1.5, 4.2], target: [0, 0.1, 0] },
        resume: { pos: [3.0, 1.3, 3.6], target: [0, 0.1, 0] },
        contact: { pos: [-2.6, 1.0, -3.8], target: [0, 0.1, 0] },
      };
    }
    return {
      home: { pos: [4.6, 1.4, 5.2], target: [0, 0.1, 0] },
      about: { pos: [5.0, 1.0, 2.2], target: [0.2, 0.1, 0] },
      skills: { pos: [3.2, 2.6, 5.0], target: [0, 0.1, 0] },
      experience: { pos: [-4.8, 1.3, -3.4], target: [-0.1, 0.1, 0] },
      projects: { pos: [5.2, 1.4, 3.2], target: [0, 0.1, 0] },
      certificates: { pos: [0.6, 1.6, 5.0], target: [0, 0.1, 0] },
      resume: { pos: [3.8, 1.3, 4.2], target: [0, 0.1, 0] },
      contact: { pos: [-3.2, 0.9, -4.6], target: [-0.1, 0.1, 0] },
    };
  }, [isMobile]);

  // Current camera target vector
  const currentTarget = useRef(new THREE.Vector3(0, 0.1, 0));

  useFrame((state, delta) => {
    // Determine target keyframe from active section
    const activeKey = (activeSection in cameraKeyframes)
      ? (activeSection as keyof typeof cameraKeyframes)
      : 'home';
    const activeFrame = cameraKeyframes[activeKey] || cameraKeyframes.home;

    // Subtle interactive mouse parallax offset
    const mouseOffsetX = state.pointer.x * 0.45;
    const mouseOffsetY = state.pointer.y * 0.25;

    const targetCamX = activeFrame.pos[0] + mouseOffsetX;
    const targetCamY = Math.max(activeFrame.pos[1] + mouseOffsetY, 0.4);
    const targetCamZ = activeFrame.pos[2];

    // Smooth exponential damping on camera position
    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCamX, 2.8, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamY, 2.8, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCamZ, 2.8, delta);

    // Smooth exponential damping on camera look-at target
    currentTarget.current.x = THREE.MathUtils.damp(currentTarget.current.x, activeFrame.target[0], 3.0, delta);
    currentTarget.current.y = THREE.MathUtils.damp(currentTarget.current.y, activeFrame.target[1], 3.0, delta);
    currentTarget.current.z = THREE.MathUtils.damp(currentTarget.current.z, activeFrame.target[2], 3.0, delta);

    camera.lookAt(currentTarget.current);

    // Dynamic stage movement: on desktop, pan monolith slightly sideways during content sections
    if (sceneGroup.current) {
      const isSidePanned = activeSection === 'about' || activeSection === 'experience';
      const targetSceneX = isMobile ? 0 : (isSidePanned ? 1.2 : 0);
      sceneGroup.current.position.x = THREE.MathUtils.damp(sceneGroup.current.position.x, targetSceneX, 2.5, delta);
    }
  });

  return (
    <group ref={sceneGroup}>
      {/* 1. CINEMATIC STUDIO LIGHTING RIG */}
      {/* Soft Ambient Fill */}
      <ambientLight intensity={0.4} color="#D1DCE5" />

      {/* Front-Right 45° Warm Key Light */}
      <directionalLight
        position={[8, 10, 6]}
        intensity={2.2}
        color="#FFFFFF"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Rear-Left Cool Cyan Studio Rim Light */}
      <directionalLight
        position={[-8, 6, -6]}
        intensity={1.8}
        color="#00E5FF"
      />

      {/* Overhead Caustic Spot Light */}
      <spotLight
        position={[0, 9, 0]}
        intensity={3.6}
        color="#E2F1FF"
        angle={Math.PI / 4}
        penumbra={0.8}
        distance={20}
      />

      {/* Front Accent Fill Light */}
      <pointLight position={[0, 1.5, 4.5]} intensity={1.2} color="#FFFFFF" distance={9} />

      {/* Rear Atmospheric Violet Ambient */}
      <pointLight position={[0, 0.5, -3.2]} intensity={1.5} color="#7C4DFF" distance={6} />

      {/* 2. PROCEDURAL 3D DIGITAL MONOLITH */}
      <DigitalMonolith
        preset={preset}
        streamEnabled={streamEnabled}
        autoRotate={autoRotate}
      />

      {/* 3. GROUNDED CINEMATIC PERSPECTIVE FLOOR */}
      {/* Dark Reflective Ground Plane */}
      <mesh position={[0, -2.61, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[70, 70]} />
        <meshStandardMaterial
          color="#06080E"
          roughness={0.16}
          metalness={0.88}
        />
      </mesh>

      {/* Subtle Studio Technical Perspective Grid visible through glass cards */}
      <gridHelper
        args={[40, 40, '#00E5FF', '#1E293B']}
        position={[0, -2.6, 0]}
      />

      {/* Radial Light Falloff Pod */}
      <mesh position={[0, -2.59, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 5.8, 64]} />
        <meshBasicMaterial
          color="#0C1322"
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      </mesh>

      {/* Perimeter Orbital Track Ring Guide */}
      <mesh position={[0, -2.58, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.8, 4.84, 64]} />
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
