'use client';

import React, { useEffect, useState } from 'react';

export const CursorSpotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setOpacity(1);
        };

        const handleMouseLeave = () => {
            setOpacity(0);
        };

        const handleMouseEnter = () => {
            setOpacity(1);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1, /* Behind everything */
                pointerEvents: 'none',
                background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, rgba(10, 35, 81, 0.25), transparent 70%)`,
                transition: 'background 0.15s ease-out, opacity 0.5s ease',
                opacity: opacity,
            }}
        />
    );
};
