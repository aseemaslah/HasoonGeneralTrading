'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CursorSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const trailX = useSpring(mouseX, springConfig);
    const trailY = useSpring(mouseY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isMobile]);

    const spotlightBg = useMemo(() => `radial-gradient(800px circle at var(--x) var(--y), rgba(10, 35, 81, 0.15), transparent 80%)`, []);

    if (isMobile) return null;

    return (
        <>
            {/* Main Spotlight Background */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: -2,
                    pointerEvents: 'none',
                    background: spotlightBg,
                } as any}
                animate={{
                    '--x': `${mouseX.get()}px`,
                    '--y': `${mouseY.get()}px`,
                } as any}
            />

            {/* Trailing Cursor Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isHovering ? 60 : 20,
                    height: isHovering ? 60 : 20,
                    borderRadius: '50%',
                    border: '2px solid var(--accent)',
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    backgroundColor: isHovering ? 'rgba(251, 191, 36, 0.1)' : 'transparent',
                }}
            />
        </>
    );
};
