'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CursorSpotlight = dynamic(() => import('./CursorSpotlight').then(mod => mod.CursorSpotlight), { ssr: false });
const Background3D = dynamic(() => import('./Background3D'), { ssr: false });

export const ClientLayoutElements = () => {
    return (
        <>
            <CursorSpotlight />
            <Background3D />
        </>
    );
};
