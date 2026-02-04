'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, ShieldCheck, Users } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-bg"
                ></div>
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >
                        <span className="hero-badge">Established 2014</span>
                        <h1 className="heading-xl">
                            Your Trusted Partner in <span className="text-gradient">Global Trade</span>
                        </h1>
                        <p className="hero-sub">
                            Connecting markets with quality products. From building materials to animal health, we deliver excellence across borders.
                        </p>
                        <div className="hero-btns">
                            <a href="#contact" className="btn btn-primary">Get Started</a>
                            <a href="#services" className="btn btn-glass">Our Products</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-image-container"
                    >
                        {/* Animated Hero Graphic */}
                        <div className="hero-graphic hero-graphic-anim">
                            <div className="globe-graphic"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features">
                <div className="container">
                    <Reveal width="100%">
                        <div className="features-grid">
                            <FeatureCard
                                icon={<Globe size={32} />}
                                title="Global Reach"
                                desc="International network ensuring efficient import and export operations."
                            />
                            <FeatureCard
                                icon={<ShieldCheck size={32} />}
                                title="Quality Assured"
                                desc="Commitment to premium standards in every product we trade."
                            />
                            <FeatureCard
                                icon={<Users size={32} />}
                                title="Client Focused"
                                desc="Building lasting relationships through reliable service and trust."
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* About Teaser */}
            <section className="section about-summary">
                <div className="container split-layout">
                    <div className="image-side">
                        <Reveal>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Corporate building"
                                className="rounded-img"
                            />
                        </Reveal>
                    </div>
                    <div className="content-side">
                        <Reveal>
                            <h2 className="heading-lg">Leading the Way in General Trading</h2>
                            <p>
                                Since 2014, Hasoon General Trading has been a cornerstone in the Dubai trading sector.
                                We believe in transparency, efficiency, and quality. Our diverse portfolio ranges from
                                industrial equipment to consumer goods.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={20} className="check-icon" /> Premium Quality Products</li>
                                <li><CheckCircle size={20} className="check-icon" /> Experienced Team</li>
                                <li><CheckCircle size={20} className="check-icon" /> Global Logistics Network</li>
                            </ul>
                            <a href="#about" className="btn btn-primary">
                                Learn More <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                            </a>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container text-center">
                    <Reveal width="100%">
                        <h2 className="heading-lg mb-4" style={{ color: 'white' }}>Ready to Expand Your Business?</h2>
                        <p className="mb-6" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Partner with us for reliable supply chains and exceptional market expertise.
                        </p>
                        <a href="#contact" className="btn btn-accent">Contact Us Today</a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="feature-card"
    >
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </motion.div>
);

export default Home;
