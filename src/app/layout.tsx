import type { Metadata } from 'next';
import './globals.css';
import '../components/Navbar.css';
import '../components/Footer.css';
import '../pages/Home.css';
import '../pages/About.css';
import '../pages/Services.css';
import '../pages/Contact.css';
import { CursorSpotlight } from '../components/CursorSpotlight';

export const metadata: Metadata = {
    title: {
        default: 'Hasoon General Trading | Global Import & Export Partner',
        template: '%s | Hasoon General Trading'
    },
    description: 'Your trusted partner in global trade since 2014. Specializing in building materials, animal health, safety equipment, and general goods in Dubai and beyond.',
    keywords: ['General Trading', 'Dubai Trading', 'Import Export', 'Building Materials', 'Animal Health', 'Safety Equipment', 'Hasoon Trading'],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://hasoongeneraltrading.com',
        siteName: 'Hasoon General Trading',
        title: 'Hasoon General Trading | Global Import & Export',
        description: 'Connecting markets with quality products. From building materials to animal health, we deliver excellence across borders.',
        images: [
            {
                url: '/logo.png',
                width: 800,
                height: 600,
                alt: 'Hasoon General Trading Logo',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: '#0a2351',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <CursorSpotlight />
                {children}
            </body>
        </html>
    );
}
