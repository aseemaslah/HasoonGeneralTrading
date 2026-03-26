'use client';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Critically important for LCP - HomeSection
// We keep it static or use high priority dynamic import if needed, 
// but since it's the first thing users see, let's keep it but optimize its internals.
import HomeSection from '../pages/Home';

// Below the fold sections - Dynamic import with suspense
const About = dynamic(() => import('../pages/About'), { 
    ssr: false,
    loading: () => <div className="section-loading" style={{ height: '400px' }} />
});
const Services = dynamic(() => import('../pages/Services'), { 
    ssr: false,
    loading: () => <div className="section-loading" style={{ height: '400px' }} />
});
const Contact = dynamic(() => import('../pages/Contact'), { 
    ssr: false,
    loading: () => <div className="section-loading" style={{ height: '400px' }} />
});
const Testimonials = dynamic(() => import('../pages/Testimonials'), { 
    ssr: false,
    loading: () => <div className="section-loading" style={{ height: '300px' }} />
});
const WhatsAppButton = dynamic(() => import('../components/WhatsAppButton'), { ssr: false });

import '../components/WhatsAppButton.css';

export default function Page() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <div id="home">
                    <HomeSection />
                </div>
                
                <Suspense fallback={<div style={{ height: '400px' }} />}>
                    <div id="about" className="section-scroll">
                        <About />
                    </div>
                </Suspense>

                <Suspense fallback={<div style={{ height: '400px' }} />}>
                    <div id="services" className="section-scroll">
                        <Services />
                    </div>
                </Suspense>

                <Suspense fallback={<div style={{ height: '300px' }} />}>
                    <Testimonials />
                </Suspense>

                <Suspense fallback={<div style={{ height: '400px' }} />}>
                    <div id="contact" className="section-scroll">
                        <Contact />
                    </div>
                </Suspense>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
