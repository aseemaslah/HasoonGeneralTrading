'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Particles = ({ count = 5000 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, [count]);

    const pointsRef = useRef<THREE.Points>(null!);

    useFrame((state) => {
        const { x, y } = state.mouse;
        const time = state.clock.getElapsedTime();

        // Base rotation
        pointsRef.current.rotation.y = time * 0.05;
        pointsRef.current.rotation.x = time * 0.02;

        // Dynamic mouse reaction
        pointsRef.current.rotation.y += x * 0.1;
        pointsRef.current.rotation.x -= y * 0.1;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[points, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#0a2351"
                transparent
                opacity={0.3}
                sizeAttenuation
            />
        </points>
    );
};

const Background3D = () => {
    const [mounted, setMounted] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        setIsMobile(window.innerWidth < 768);
    }, []);

    if (!mounted) return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundColor: 'var(--bg-light)'
        }} />
    );

    if (isMobile) return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundColor: '#f8fafc' // A nice light background
        }} />
    );

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            opacity: 0.6
        }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{
                    antialias: false, // Turn off antialias for background for speed
                    powerPreference: 'high-performance',
                    stencil: false,
                    alpha: true
                }}
                dpr={[1, 1.5]} // Limit DPR for performance
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Particles count={2000} />

                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Sphere args={[1.5, 32, 32]} position={[2, -1, -2]}>
                        <MeshDistortMaterial
                            color="#fbbf24"
                            speed={2}
                            distort={0.4}
                            radius={1}
                            opacity={0.05}
                            transparent
                        />
                    </Sphere>
                </Float>
            </Canvas>
        </div>
    );
};

export default Background3D;
