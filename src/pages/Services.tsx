'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FloatingAsset3D } from '../components/FloatingAsset3D';
import Image from 'next/image';

const products = [
    { title: "Building Materials", desc: "High quality cement, steel, and construction tools.", img: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=800" },
    { title: "Petroleum Products", desc: "Reliable supply of fuel, lubricants, and refined petroleum derivatives.", img: "/petroleum-products.png" },
    { title: "Chemical & Insecticide", desc: "High-grade industrial chemicals and insecticides including Aluminum Phosphide, and Indoxacarb.", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800" },
    { title: "Animal Health", desc: "Medicines, vitamins, and supplements for livestock.", img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=800" },
    { title: "Safety Equipment", desc: "Helmets, vests, and industrial safety gear.", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800" },
    { title: "Spices & Food", desc: "Premium cardamom, rice, vegetables, and high-quality food products.", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800" },
    { title: "General Export & Import", desc: "Global distribution of Laptops, Mobile accessories, and high-demand consumer goods.", img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800" },
    { title: "Machinery Parts", desc: "Vibrator motors, molds, and spares.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" }
];

const Services = () => {
    return (
        <div className="services-page relative overflow-hidden">
            <div className="absolute top-5 left-0 w-48 h-48 opacity-5 pointer-events-none">
                <FloatingAsset3D type="globe" color="#fbbf24" scale={0.8} />
            </div>
            <div className="absolute top-20 right-0 w-48 h-48 opacity-5 pointer-events-none">
                <FloatingAsset3D type="container" color="#163a7a" scale={0.8} />
            </div>
            <div className="container section">
                <div className="text-center">
                    <h2 className="heading-xl section-title">Products & Services</h2>
                </div>
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
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    width={400}
                                    height={250}
                                    loading="lazy"
                                    className="object-cover"
                                />
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
