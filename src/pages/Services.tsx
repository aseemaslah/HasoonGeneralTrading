'use client';

import React from 'react';
import { motion } from 'framer-motion';

const products = [
    { title: "Building Materials", desc: "High quality cement, steel, and construction tools.", img: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=800" },
    { title: "Animal Health", desc: "Medicines, vitamins, and supplements for livestock.", img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=800" },
    { title: "Safety Equipment", desc: "Helmets, vests, and industrial safety gear.", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800" },
    { title: "Spices & Food", desc: "Premium cardamom, rice, and vegetables.", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800" },
    { title: "Machinery Parts", desc: "Vibrator motors, molds, and spares.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
    { title: "General Goods", desc: "Wide variety of consumer and industrial items.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" }
];

const Services = () => {
    return (
        <div className="services-page">
            <div className="container section">
                <h2 className="heading-xl bg-title">Our Products & Services</h2>
                <div className="services-grid">
                    {products.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="product-card"
                        >
                            <div className="card-image-wrap">
                                <img src={p.img} alt={p.title} />
                            </div>
                            <div className="card-content">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
