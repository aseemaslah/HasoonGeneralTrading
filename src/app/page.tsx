'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeSection from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

export default function Page() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <div id="home"><HomeSection /></div>
                <div id="about" className="section-scroll"><About /></div>
                <div id="services" className="section-scroll"><Services /></div>
                <div id="contact" className="section-scroll"><Contact /></div>
            </main>
            <Footer />
        </div>
    );
}
