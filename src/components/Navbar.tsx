'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} aria-label="Hasoon General Trading Home">
                    <Image
                        src="/logo.png"
                        alt="Hasoon General Trading Logo"
                        className="logo-img"
                        width={150}
                        height={50}
                        priority
                    />
                </a>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <button suppressHydrationWarning onClick={() => scrollToSection('home')} className="nav-link-btn">Home</button>
                    <button suppressHydrationWarning onClick={() => scrollToSection('about')} className="nav-link-btn">About Us</button>
                    <button suppressHydrationWarning onClick={() => scrollToSection('services')} className="nav-link-btn">Products & Services</button>
                    <button suppressHydrationWarning onClick={() => scrollToSection('contact')} className="nav-link-btn">Contact</button>
                </div>

                <div className="desktop-only">
                    <a href="tel:+919645207034" className="btn btn-primary flex items-center gap-3">
                        <Phone size={20} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '400', opacity: '0.9' }}>Call Our Experts</span>
                            <span style={{ fontSize: '0.9rem' }}>+91 9645207034</span>
                        </div>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="mobile-nav-links">
                                <button onClick={() => scrollToSection('home')}>Home</button>
                                <button onClick={() => scrollToSection('about')}>About Us</button>
                                <button onClick={() => scrollToSection('services')}>Products & Services</button>
                                <button onClick={() => scrollToSection('contact')}>Contact</button>
                                <a href="tel:+919645207034" className="btn btn-primary w-full justify-center gap-3">
                                    <Phone size={20} />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', lineHeight: '1.2' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '400', opacity: '0.9' }}>Call Our Experts</span>
                                        <span style={{ fontSize: '0.9rem' }}>+91 9645207034</span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};



export default Navbar;
