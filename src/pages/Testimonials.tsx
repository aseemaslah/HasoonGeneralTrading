'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Hansika Polymers",
        quote: "Hasoon General Trading's expertise in chemical and polymer supply has been instrumental to our manufacturing process. A truly reliable company.",
        role: "Client",
        logo: "HP"
    },
    {
        name: "Intech",
        quote: "Exceptional service and timely global delivery. Their range of high-quality building materials and general trade items is unmatched in the industry.",
        role: "Client",
        logo: "IN"
    },
    {
        name: "VS Engineering Works",
        quote: "The safety equipment and machinery parts provided by Hasoon are of top-notch quality. Their attention to standards and logistical efficiency is remarkable.",
        role: "Client",
        logo: "VS"
    },
    {
        name: "TMP Group",
        quote: "Hasoon General Trading is a dependable partner with a strong global sourcing network. Their dedication to quality and professionalism has greatly supported our insecticide and fertilizer business.",
        role: "Client",
        logo: "TG"
    }
];

const Testimonials = () => {
    // Triple testimonials for ultra-seamless high-speed loop
    const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="testimonials-section section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="heading-xl section-title"
                >
                    Our Trusted Partners
                </motion.h2>
            </div>

            <div className="testimonials-marquee-container">
                <div className="testimonials-track">
                    {allTestimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <Quote className="quote-icon" size={48} />
                            <p className="testimonial-text">"{t.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-logo">{t.logo}</div>
                                <div className="author-info">
                                    <h4>{t.name}</h4>
                                    <p>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
