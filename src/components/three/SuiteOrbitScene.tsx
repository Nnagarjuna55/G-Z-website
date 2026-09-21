"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Html,
  Lightformer,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";

const ORANGE = "#FF4D01";
const GREEN = "#02683F";
const NAVY = "#000080";

interface OrbitNode {
  label: string;
  color: string;
  phase: number;
}

interface RingSpec {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  nodes: OrbitNode[];
}

const RINGS: RingSpec[] = [
  {
    radius: 1.95,
    rotation: [1.15, 0, 0.35],
    speed: 0.22,
    nodes: [
      { label: "AI LMS", color: ORANGE, phase: 0 },
      { label: "AI Resume Builder", color: ORANGE, phase: Math.PI },
    ],
  },
  {
    radius: 2.45,
    rotation: [1.4, 0, -0.55],
    speed: -0.16,
    nodes: [
      { label: "AI Interviewer", color: GREEN, phase: Math.PI / 2 },
      { label: "AI Job Portal", color: GREEN, phase: (3 * Math.PI) / 2 },
    ],
  },
];

function Ring({ spec, reduced }: { spec: RingSpec; reduced: boolean }) {
  const nodeRefs = useRef<(THREE.Group | null)[]>([]);

  useFrame((state) => {
    const t = reduced ? 0 : state.clock.elapsedTime * spec.speed;
    spec.nodes.forEach((node, i) => {
      const ref = nodeRefs.current[i];
      if (!ref) return;
      const angle = node.phase + t;
      ref.position.set(Math.cos(angle) * spec.radius, Math.sin(angle) * spec.radius, 0);
    });
  });

  return (
    <group rotation={spec.rotation}>
      <mesh>
        <torusGeometry args={[spec.radius, 0.006, 12, 220]} />
        <meshBasicMaterial color={NAVY} transparent opacity={0.18} />
      </mesh>

      {spec.nodes.map((node, i) => (
        <group
          key={node.label}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          position={[Math.cos(node.phase) * spec.radius, Math.sin(node.phase) * spec.radius, 0]}
        >
          <mesh>
            <sphereGeometry args={[0.16, 32, 32]} />
            <meshPhysicalMaterial
              color={node.color}
              roughness={0.2}
              metalness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.15}
              emissive={node.color}
              emissiveIntensity={0.25}
            />
          </mesh>
          <Html center position={[0, 0.36, 0]} zIndexRange={[20, 0]} style={{ pointerEvents: "none" }}>
            <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-foreground shadow-lg">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: node.color }} />
              {node.label}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

function Suite({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const shellRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (group && !reduced) {
      group.rotation.y = THREE.MathUtils.damp(group.rotation.y, state.pointer.x * 0.35, 2.5, delta);
      group.rotation.x = THREE.MathUtils.damp(group.rotation.x, -state.pointer.y * 0.22, 2.5, delta);
    }
    if (shellRef.current && !reduced) {
      shellRef.current.rotation.y += delta * 0.08;
      shellRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={reduced ? 0 : 1.4} rotationIntensity={0.35} floatIntensity={0.55}>
        <mesh>
          <icosahedronGeometry args={[1.1, 24]} />
          <MeshDistortMaterial
            color="#0d0da8"
            distort={0.3}
            speed={reduced ? 0 : 1.8}
            roughness={0.04}
            metalness={0.55}
            envMapIntensity={1.4}
          />
        </mesh>

        <mesh ref={shellRef}>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshBasicMaterial color={ORANGE} wireframe transparent opacity={0.14} />
        </mesh>
      </Float>

      {RINGS.map((spec) => (
        <Ring key={spec.radius} spec={spec} reduced={reduced} />
      ))}

      <Sparkles count={45} scale={[7, 5, 4]} size={2.2} speed={reduced ? 0 : 0.35} color={ORANGE} opacity={0.55} />
    </group>
  );
}

export default function SuiteOrbitScene({ active, reduced }: { active: boolean; reduced: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <pointLight position={[-4, 2, 3]} color={ORANGE} intensity={30} distance={12} />
      <pointLight position={[4, -2, 2.5]} color={GREEN} intensity={22} distance={12} />

      {/* Built-in light formers: glossy reflections with no external HDR download */}
      <Environment resolution={256}>
        <Lightformer intensity={2} position={[0, 5, -6]} scale={[10, 5, 1]} />
        <Lightformer intensity={2.2} color={ORANGE} position={[-6, 0, 0]} rotation-y={Math.PI / 2} scale={[6, 6, 1]} />
        <Lightformer intensity={1.6} color={GREEN} position={[6, -1, 0]} rotation-y={-Math.PI / 2} scale={[6, 6, 1]} />
      </Environment>

      <Suite reduced={reduced} />
    </Canvas>
  );
}
