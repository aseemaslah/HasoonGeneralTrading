'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeSection from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Testimonials from '../pages/Testimonials';
import WhatsAppButton from '../components/WhatsAppButton';
import '../components/WhatsAppButton.css';

export default function Page() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <div id="home"><HomeSection /></div>
                <div id="about" className="section-scroll"><About /></div>
                <div id="services" className="section-scroll"><Services /></div>
                <Testimonials />
                <div id="contact" className="section-scroll"><Contact /></div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
