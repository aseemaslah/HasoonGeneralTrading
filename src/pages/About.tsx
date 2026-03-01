import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye } from 'lucide-react';
import { FloatingAsset3D } from '../components/FloatingAsset3D';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="about-page">
            <motion.div
                className="container section"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center">
                    <motion.h2 variants={itemVariants} className="heading-lg section-title">About Hasoon General Trading</motion.h2>
                </div>
                <div className="about-grid">
                    <motion.div
                        variants={itemVariants}
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
                        variants={itemVariants}
                        className="vision-card glass-morphism relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-30 pointer-events-none">
                            <FloatingAsset3D type="octahedron" scale={0.8} />
                        </div>
                        <div className="icon-box"><Target className="text-accent" /></div>
                        <h3>Our Vision</h3>
                        <p>
                            To be the most trusted trading partner bridging the gap between manufacturers and consumers worldwide.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
