'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <a href="#home" className="footer-logo">
                        <img src="/logo.png" alt="Hasoon" style={{ height: '50px' }} />
                    </a>
                    <p className="footer-desc">
                        Your trusted partner in global trade, delivering quality products and services since 2014.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                        <a href="https://www.instagram.com/hasoon_general_trading/" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact <span>Info</span></h3>
                    <ul className="contact-list">
                        <li>
                            <div className="contact-icon-box"><MapPin size={20} /></div>
                            <div className="contact-text">
                                <label>Address</label>
                                <p style={{ fontSize: '0.9rem' }}>Vilayattery Building, 1, 13/334,<br />Unnikulam, Valliyoth, Kerala 673574</p>
                            </div>
                        </li>
                        <li>
                            <div className="contact-icon-box"><Phone size={20} /></div>
                            <div className="contact-text">
                                <label>Phone</label>
                                <p>+91 9645207034</p>
                            </div>
                        </li>
                        <li>
                            <div className="contact-icon-box"><Mail size={20} /></div>
                            <div className="contact-text">
                                <label>Email</label>
                                <p>hasoongeneraltrading@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Hasoon General Trading. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
