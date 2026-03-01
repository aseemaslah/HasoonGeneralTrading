'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, MeshDistortMaterial, Float, OrbitControls } from '@react-three/drei';

const TradeRoutes = ({ isMobile }: { isMobile: boolean }) => {
    const routeCount = isMobile ? 4 : 8;
    const routes = React.useMemo(() => {
        const temp = [];
        for (let i = 0; i < routeCount; i++) {
            const start = new THREE.Vector3().setFromSphericalCoords(1.05, Math.random() * Math.PI, Math.random() * Math.PI * 2);
            const end = new THREE.Vector3().setFromSphericalCoords(1.05, Math.random() * Math.PI, Math.random() * Math.PI * 2);

            // Create a curved path for the arc
            const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(1.5);
            const curve = new THREE.CatmullRomCurve3([start, mid, end]);
            const points = curve.getPoints(isMobile ? 20 : 50);
            temp.push({ points, start, end });
        }
        return temp;
    }, [isMobile, routeCount]);

    const cargoRef = useRef<THREE.Group>(null!);
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (cargoRef.current) {
            cargoRef.current.children.forEach((child, i) => {
                const route = routes[i];
                if (route) {
                    const t = (time * 0.15 + i * 0.1) % 1;
                    const pos = new THREE.CatmullRomCurve3(route.points).getPoint(t);
                    child.position.copy(pos);
                }
            });
        }
    });

    return (
        <group>
            {routes.map((route, i) => (
                <line key={i}>
                    <bufferGeometry attach="geometry" onUpdate={self => self.setFromPoints(route.points)} />
                    <lineBasicMaterial attach="material" color="#fbbf24" transparent opacity={0.3} />
                </line>
            ))}
            <group ref={cargoRef}>
                {routes.map((_, i) => (
                    <mesh key={i}>
                        <sphereGeometry args={[0.015, isMobile ? 4 : 8, isMobile ? 4 : 8]} />
                        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={2} />
                    </mesh>
                ))}
            </group>
        </group>
    );
};

const GlobeContent = ({ isMobile }: { isMobile: boolean }) => {
    const meshRef = useRef<any>(null);
    const cloudsRef = useRef<any>(null);
    const groupRef = useRef<any>(null);
    const segments = isMobile ? 32 : 64;

    useFrame((state) => {
        const { x, y } = state.mouse;
        const time = state.clock.getElapsedTime();

        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.05;
        }
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y = time * 0.07;
            cloudsRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
        }
        if (groupRef.current) {
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.2, 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.2, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                {/* Main Earth Sphere */}
                <Sphere args={[1, segments, segments]} ref={meshRef}>
                    <meshStandardMaterial
                        color="#0a2351"
                        metalness={0.9}
                        roughness={0.1}
                        emissive="#163a7a"
                        emissiveIntensity={0.2}
                    />
                </Sphere>

                {/* Trade Routes */}
                <TradeRoutes isMobile={isMobile} />

                {/* Continental Overlay (Wireframe Effect) */}
                <Sphere args={[1.02, segments, segments]} ref={cloudsRef}>
                    <meshPhongMaterial
                        color="#fbbf24"
                        wireframe
                        transparent
                        opacity={0.3}
                        emissive="#d97706"
                        emissiveIntensity={0.5}
                    />
                </Sphere>

                {/* Atmosphere Glow */}
                <Sphere args={[1.1, 16, 16]}>
                    <meshPhongMaterial
                        color="#163a7a"
                        transparent
                        opacity={0.1}
                        side={THREE.BackSide}
                    />
                </Sphere>
            </Float>
        </group>
    );
};

const HeroGlobe = () => {
    const [mounted, setMounted] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        setIsMobile(window.innerWidth < 768);
    }, []);

    if (!mounted) return <div style={{ height: '500px' }} />;

    return (
        <Canvas
            camera={{ position: [0, 0, 3] }}
            gl={{
                antialias: !isMobile,
                powerPreference: 'high-performance',
                stencil: false,
                depth: true
            }}
            dpr={isMobile ? [1, 1] : [1, 2]}
        >
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <GlobeContent isMobile={isMobile} />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
            />
        </Canvas>
    );
};

export default HeroGlobe;
