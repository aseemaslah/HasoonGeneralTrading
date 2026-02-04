'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="container section">
                <h2 className="heading-xl contact-title">Contact Us</h2>
                <div className="contact-layout">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <h2 className="heading-lg">Get in Touch</h2>
                        <p className="contact-desc">
                            Have a question about our products or services? Fill out the form or reach us directly.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="icon-box"><MapPin /></div>
                                <div>
                                    <h3>Headquarters</h3>
                                    <p>Vilayattery Building, 1, 13/334,<br />Unnikulam, Valliyoth, Kerala 673574</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><Phone /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+91 9645207034</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><Mail /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>hasoongeneraltrading@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="contact-form-card"
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
