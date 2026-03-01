'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Torus, Octahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface AssetProps {
    type: 'box' | 'torus' | 'octahedron' | 'container' | 'globe';
    color?: string;
    position?: [number, number, number];
    scale?: number;
}

const Asset = ({ type, color = "#fbbf24", position = [0, 0, 0], scale = 1 }: AssetProps) => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const { x, y } = state.mouse;

        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.5 + y * 0.5;
            meshRef.current.rotation.y = time * 0.3 + x * 0.5;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <group position={position} scale={scale}>
                {type === 'box' && (
                    <Box ref={meshRef} args={[1, 1, 1]}>
                        <meshStandardMaterial color={color} wireframe transparent opacity={0.2} />
                    </Box>
                )}
                {type === 'container' && (
                    <Box ref={meshRef} args={[2, 0.8, 0.8]}>
                        <meshStandardMaterial
                            color={color}
                            roughness={0.2}
                            metalness={0.8}
                            emissive={color}
                            emissiveIntensity={0.2}
                        />
                        <lineSegments>
                            <edgesGeometry args={[new THREE.BoxGeometry(2, 0.8, 0.8)]} />
                            <lineBasicMaterial color="white" transparent opacity={0.4} />
                        </lineSegments>
                    </Box>
                )}
                {type === 'torus' && (
                    <Torus ref={meshRef} args={[1, 0.3, 16, 100]}>
                        <meshStandardMaterial color={color} wireframe transparent opacity={0.2} />
                    </Torus>
                )}
                {type === 'octahedron' && (
                    <Octahedron ref={meshRef} args={[1]}>
                        <meshStandardMaterial color={color} wireframe transparent opacity={0.2} />
                    </Octahedron>
                )}
                {type === 'globe' && (
                    <Sphere ref={meshRef} args={[1.2, 24, 24]}>
                        <meshStandardMaterial color={color} wireframe transparent opacity={0.25} />
                    </Sphere>
                )}
            </group>
        </Float>
    );
};

export const FloatingAsset3D = (props: AssetProps) => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Asset {...props} />
            </Canvas>
        </div>
    );
};
