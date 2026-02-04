import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <div className="container section">
                <h2 className="heading-lg about-title">About Hasoon General Trading</h2>
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="about-text"
                    >
                        <p>
                            Established in 2014, Hasoon General Trading has grown to become a reliable name in the import and export industry.
                            Based in Dubai, UAE, we connect markets across the globe, specializing in a wide range of products including
                            building materials, safety equipment, animal health products, and consumer goods.
                        </p>
                        <p>
                            Our mission is to provide efficient, high-quality service to our partners and clients, ensuring
                            smooth logistics and premium product sourcing.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="vision-card"
                    >
                        <h3>Our Vision</h3>
                        <p>
                            To be the most trusted trading partner bridging the gap between manufacturers and consumers worldwide.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
