"use client";

// @ts-nocheck - Three.js types will be available after npm install
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

// Unified dark particle color
const PARTICLE_COLOR = "#0D9488"; // Dark teal

// Mouse position for individual particle interaction
const mousePos = { x: 0, y: 0, active: false };

// Particle Blob Component with Mouse Interaction
function ParticleBlob({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
    const particlesRef = useRef<THREE.Points>(null);
    const particlesCount = 15000;

    const { basePositions, currentPositions } = useMemo(() => {
        const basePos = new Float32Array(particlesCount * 3);
        const currPos = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const radius = 1.5 + Math.random() * 0.5;

            basePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta) * scale;
            basePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * scale;
            basePos[i * 3 + 2] = radius * Math.cos(phi) * scale;

            currPos[i * 3] = basePos[i * 3];
            currPos[i * 3 + 1] = basePos[i * 3 + 1];
            currPos[i * 3 + 2] = basePos[i * 3 + 2];
        }

        return { basePositions: basePos, currentPositions: currPos };
    }, [scale]);

    const positions = useMemo(() => new Float32Array(basePositions), [basePositions]);

    useFrame((state) => {
        if (particlesRef.current) {
            const time = state.clock.getElapsedTime();
            particlesRef.current.rotation.y = time * 0.05;

            const lerpFactor = 0.08; // Smooth interpolation factor

            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                const x = basePositions[i3];
                const y = basePositions[i3 + 1];
                const z = basePositions[i3 + 2];

                // Calculate target position
                let targetX, targetY, targetZ;

                // Individual particle cursor interaction
                if (mousePos.active) {
                    const particleWorldX = position[0] + x;
                    const particleWorldY = position[1] + y;

                    const dx = mousePos.x - particleWorldX;
                    const dy = mousePos.y - particleWorldY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Each particle responds based on its individual distance
                    const repulsionRadius = 2;
                    if (distance < repulsionRadius) {
                        const force = (1 - distance / repulsionRadius) * 0.3;
                        targetX = x - (dx / distance) * force;
                        targetY = y + Math.sin(time * 2 + x) * 0.002 - (dy / distance) * force;
                        targetZ = z + force * 0.2;
                    } else {
                        targetX = x;
                        targetY = y + Math.sin(time * 2 + x) * 0.002;
                        targetZ = z;
                    }
                } else {
                    targetX = x;
                    targetY = y + Math.sin(time * 2 + x) * 0.002;
                    targetZ = z;
                }

                // Smooth lerp from current position to target position
                currentPositions[i3] += (targetX - currentPositions[i3]) * lerpFactor;
                currentPositions[i3 + 1] += (targetY - currentPositions[i3 + 1]) * lerpFactor;
                currentPositions[i3 + 2] += (targetZ - currentPositions[i3 + 2]) * lerpFactor;

                // Apply smoothed positions
                positions[i3] = currentPositions[i3];
                positions[i3 + 1] = currentPositions[i3 + 1];
                positions[i3 + 2] = currentPositions[i3 + 2];
            }
            particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={particlesRef} position={position}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                    args={[]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color={PARTICLE_COLOR}
                transparent
                opacity={0.7}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

// Seamless Organic Bridge with Dense Particles
function OrganicBridge({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
    const bridgeRef = useRef<THREE.Points>(null);
    const particlesCount = 5000; // Increased for density

    const particleData = useMemo(() => {
        return Array.from({ length: particlesCount }, () => ({
            t: Math.random(),
            theta: Math.random() * Math.PI * 2,
            phi: Math.random() * Math.PI * 2,
            radiusMult: 0.3 + Math.random() * 0.7,
            speed: 0.15 + Math.random() * 0.25,
            offset: Math.random() * Math.PI * 2
        }));
    }, [particlesCount]);

    const { positions, currentPositions } = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        const currPos = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            const data = particleData[i];
            const t = data.t;

            const x = start[0] + (end[0] - start[0]) * t;
            const y = start[1] + (end[1] - start[1]) * t;
            const z = start[2] + (end[2] - start[2]) * t;

            // Seamless blending - wider at ends to merge with blobs
            const edgeFactor = Math.min(t * 4, (1 - t) * 4, 1);
            const baseRadius = (0.25 + edgeFactor * 0.6) * data.radiusMult;

            const spreadX = Math.cos(data.theta) * baseRadius;
            const spreadY = Math.sin(data.theta) * baseRadius;
            const spreadZ = (Math.random() - 0.5) * 0.4;

            pos[i * 3] = x + spreadX;
            pos[i * 3 + 1] = y + spreadY;
            pos[i * 3 + 2] = z + spreadZ;

            currPos[i * 3] = pos[i * 3];
            currPos[i * 3 + 1] = pos[i * 3 + 1];
            currPos[i * 3 + 2] = pos[i * 3 + 2];
        }

        return { positions: pos, currentPositions: currPos };
    }, [start, end, particleData]);

    useFrame((state) => {
        if (bridgeRef.current) {
            const time = state.clock.getElapsedTime();
            const positions = bridgeRef.current.geometry.attributes.position.array as Float32Array;
            const lerpFactor = 0.08; // Smooth interpolation factor

            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                const data = particleData[i];

                let t = (data.t + time * data.speed * 0.08) % 1;

                const x = start[0] + (end[0] - start[0]) * t;
                const y = start[1] + (end[1] - start[1]) * t;
                const z = start[2] + (end[2] - start[2]) * t;

                // Seamless edge blending
                const edgeFactor = Math.min(t * 4, (1 - t) * 4, 1);
                const pulse = Math.sin(time + data.offset) * 0.08;
                const radius = (0.25 + edgeFactor * 0.6 + pulse) * data.radiusMult;

                const animTheta = data.theta + time * 0.25;
                let spreadX = Math.cos(animTheta) * radius;
                let spreadY = Math.sin(animTheta) * radius;
                let spreadZ = Math.sin(time * 0.4 + data.phi) * 0.2;

                // Calculate target position
                let targetX = x + spreadX;
                let targetY = y + spreadY;
                let targetZ = z + spreadZ;

                // Individual particle cursor interaction
                if (mousePos.active) {
                    const particleWorldX = x + spreadX;
                    const particleWorldY = y + spreadY;

                    const dx = mousePos.x - particleWorldX;
                    const dy = mousePos.y - particleWorldY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const repulsionRadius = 1.5;
                    if (distance < repulsionRadius) {
                        const force = (1 - distance / repulsionRadius) * 0.4;
                        targetX -= (dx / distance) * force;
                        targetY -= (dy / distance) * force;
                        targetZ += force * 0.3;
                    }
                }

                // Smooth lerp from current position to target position
                currentPositions[i3] += (targetX - currentPositions[i3]) * lerpFactor;
                currentPositions[i3 + 1] += (targetY - currentPositions[i3 + 1]) * lerpFactor;
                currentPositions[i3 + 2] += (targetZ - currentPositions[i3 + 2]) * lerpFactor;

                // Apply smoothed positions
                positions[i3] = currentPositions[i3];
                positions[i3 + 1] = currentPositions[i3 + 1];
                positions[i3 + 2] = currentPositions[i3 + 2];
            }

            bridgeRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={bridgeRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                    args={[]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.028}
                color={PARTICLE_COLOR}
                transparent
                opacity={0.65}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

// 3D Model with Smooth Interactive Rotation
function Model({ path, position, rotation, scale, color, cardColor }: {
    path: string,
    position: [number, number, number],
    rotation?: [number, number, number],
    scale?: number,
    color?: string,
    cardColor?: string
}) {
    const gltf = useLoader(GLTFLoader, path);
    const modelRef = useRef<THREE.Group>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [targetRotation, setTargetRotation] = useState(0);
    const [currentRotation, setCurrentRotation] = useState(0);
    const [lastMouseX, setLastMouseX] = useState(0);

    useEffect(() => {
        if (modelRef.current && (color || cardColor)) {
            modelRef.current.traverse((child: any) => {
                if (child.isMesh && child.material) {
                    const isCard = child.name.toLowerCase().includes('card') ||
                                   child.parent?.name.toLowerCase().includes('card');

                    const targetColor = isCard && cardColor ? cardColor : color;

                    if (targetColor) {
                        if (child.material.userData?.isShared !== false) {
                            child.material = child.material.clone();
                            child.material.userData.isShared = false;
                        }

                        child.material.color.set(targetColor);

                        if (isCard && cardColor) {
                            child.material.metalness = 0.5;
                            child.material.roughness = 0.3;
                            child.material.emissive = new THREE.Color(cardColor);
                            child.material.emissiveIntensity = 0.1;
                        } else {
                            child.material.metalness = 0.3;
                            child.material.roughness = 0.4;
                        }

                        child.material.needsUpdate = true;
                    }
                }
            });
        }
    }, [color, cardColor]);

    const handlePointerDown = (e: any) => {
        e.stopPropagation();
        setIsDragging(true);
        setLastMouseX(e.clientX);
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    const handlePointerMove = (e: any) => {
        if (isDragging) {
            const deltaX = e.clientX - lastMouseX;
            setTargetRotation(prev => prev + deltaX * 0.01);
            setLastMouseX(e.clientX);
        }
    };

    useFrame((state) => {
        if (modelRef.current) {
            // Smooth damping for rotation
            const dampingFactor = 0.1;
            const newRotation = currentRotation + (targetRotation - currentRotation) * dampingFactor;
            setCurrentRotation(newRotation);

            const autoRotation = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
            modelRef.current.rotation.y = autoRotation + newRotation;
            modelRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('pointerup', handlePointerUp);
            window.addEventListener('pointermove', handlePointerMove);
            return () => {
                window.removeEventListener('pointerup', handlePointerUp);
                window.removeEventListener('pointermove', handlePointerMove);
            };
        }
    }, [isDragging, lastMouseX]);

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            position={position}
            rotation={rotation}
            scale={scale || 1}
            onPointerDown={handlePointerDown}
        />
    );
}

// Scene Component
function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
            />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#14B8A6" />
            <pointLight position={[10, 10, 5]} intensity={0.5} color="#0EA5E9" />

            {/* Left - Wallet Model with Particle Blob */}
            <group position={[-4.5, 0, 0]}>
                <Model
                    path="/models/wallet_fbx_1/scene.gltf"
                    position={[0, 0, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                    scale={1.2}
                    color="#5EEAD4"
                    cardColor="#A855F7"
                />
                <ParticleBlob position={[0, 0, 0]} scale={1.2} />
            </group>

            {/* Right - Smartphone Model with Particle Blob */}
            <group position={[4.5, 0, 0]}>
                <Model
                    path="/models/moto_e_2020_smartphone/scene.gltf"
                    position={[0, 0, 0]}
                    rotation={[0, -Math.PI / 6, 0]}
                    scale={1.8}
                />
                <ParticleBlob position={[0, 0, 0]} scale={1.2} />
            </group>

            {/* Seamless Organic Particle Bridge */}
            <OrganicBridge start={[-4.5, 0, 0]} end={[4.5, 0, 0]} />
        </>
    );
}

// Main Hero Component
export default function Hero() {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Convert screen coordinates to 3D world coordinates
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;

            mousePos.x = x * 5; // Scale to match scene coordinates
            mousePos.y = y * 5;
            mousePos.active = true;

            // Interactive text effect
            if (headingRef.current) {
                const rect = headingRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = (e.clientX - centerX) / (rect.width / 2);
                const deltaY = (e.clientY - centerY) / (rect.height / 2);

                const maxTilt = 8; // degrees
                const rotateY = deltaX * maxTilt;
                const rotateX = -deltaY * maxTilt;

                headingRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            }
        };

        const handleMouseLeave = () => {
            mousePos.active = false;

            // Reset text transform
            if (headingRef.current) {
                headingRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white">
            <Canvas
                style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
            >
                <Scene />
            </Canvas>

            {/* Premium Text Overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="text-center space-y-4 md:space-y-8 px-4 max-w-5xl">
                    {/* Main Headline */}
                    <div className="space-y-2 md:space-y-4 pointer-events-auto">
                        <h1
                            ref={headingRef}
                            className="text-5xl sm:text-6xl md:text-8xl font-bold bg-linear-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent leading-relaxed pb-2 transition-transform duration-150 ease-out cursor-default select-none"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <span style={{ fontFamily: "var(--font-cedarville), cursive" }}>Swift</span>
                            <span>Fin</span>
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-4xl font-light text-slate-700">
                            The Future of Digital Finance
                        </p>
                    </div>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2">
                        Experience seamless transactions between your wallet and devices.
                        <span className="hidden sm:inline"> Powered by next-generation blockchain technology.</span>
                    </p>

                    {/* Animated Ticker */}
                    <div className="relative overflow-hidden pt-2 md:pt-4 w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
                        {/* Fade overlays */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-linear-to-r from-white to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-linear-to-l from-white to-transparent z-10"></div>

                        {/* Ticker content */}
                        <div className="flex animate-ticker whitespace-nowrap">
                            <div className="flex gap-6 sm:gap-8 px-4">
                                <span className="text-slate-700 text-sm sm:text-base font-medium">⚡ Instant Transfers</span>
                                <span className="text-slate-700 text-sm sm:text-base font-medium">🔒 Bank-Grade Security</span>
                                <span className="text-slate-700 text-sm sm:text-base font-medium">💰 Zero Fees</span>
                                <span className="text-slate-700 text-sm sm:text-base font-medium">⚡ Instant Transfers</span>
                                <span className="text-slate-700 text-sm sm:text-base font-medium">🔒 Bank-Grade Security</span>
                                <span className="text-slate-700 text-sm sm:text-base font-medium">💰 Zero Fees</span>
                                <span className="text-slate-700 text-sm sm:text-base font-medium">⚡ Instant Transfers</span>
                                <span className="text-slate-700 text-sm sm:text-base font-medium">🔒 Bank-Grade Security</span>
                                <span className="text-slate-700 text-sm sm:text-base font-medium">💰 Zero Fees</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Hint */}
                    <p className="text-xs sm:text-sm text-slate-500 pt-4 md:pt-8">
                        <span className="hidden sm:inline">Drag to explore • </span>Interactive 3D Experience
                    </p>
                </div>
            </div>

            {/* Ticker Animation Styles */}
            <style jsx>{`
                @keyframes ticker {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
                .animate-ticker {
                    animation: ticker 15s linear infinite;
                }
                .animate-ticker:hover {
                    animation-play-state: paused;
                }
            `}</style>

        </section>
    );
}
