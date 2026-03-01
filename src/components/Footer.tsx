'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <a href="#home" className="footer-logo" aria-label="Return to top">
                        <img src="/logo.png" alt="Hasoon Logo" width="150" height="50" style={{ height: '50px' }} />
                    </a>
                    <p className="footer-desc">
                        Your trusted partner in global trade, delivering quality products and services since 2014.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link" aria-label="Visit our Facebook page"><Facebook size={20} /></a>
                        <a href="https://www.instagram.com/hasoon_general_trading/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Visit our Instagram profile"><Instagram size={20} /></a>
                        <a href="https://wa.me/919645207034" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Chat with us on WhatsApp">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.04c0 2.123.553 4.197 1.606 6.04L0 24l6.117-1.604a11.811 11.811 0 005.928 1.588h.005c6.636 0 12.046-5.411 12.049-12.042 0-3.213-1.252-6.234-3.525-8.508z" />
                            </svg>
                        </a>
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
