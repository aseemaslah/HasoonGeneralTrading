import type { Metadata } from 'next';
import './globals.css';
import '../components/Navbar.css';
import '../components/Footer.css';
import '../pages/Home.css';
import '../pages/About.css';
import '../pages/Services.css';
import '../pages/Contact.css';
import '../pages/Testimonials.css';
import { ClientLayoutElements } from '../components/ClientLayoutElements';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";



export const metadata: Metadata = {
    metadataBase: new URL('https://hasoongeneraltrading.com'),
    title: {
        default: 'Hasoon General Trading | Premium Global Import & Export Partner Dubai',
        template: '%s | Hasoon General Trading'
    },
    description: 'Hasoon General Trading: Your premier partner for building materials, animal health products, safety equipment, and general goods in Dubai. Global reach since 2014.',
    keywords: [
        'General Trading Dubai',
        'Building Materials Export Dubai',
        'Animal Health Products Middle East',
        'Safety Equipment Supplier Dubai',
        'Import Export Companies UAE',
        'Hasoon General Trading LLC',
        'Wholesale Construction Materials'
    ],
    authors: [{ name: 'Hasoon General Trading' }],
    creator: 'Hasoon General Trading',
    publisher: 'Hasoon General Trading',
    alternates: {
        canonical: 'https://hasoongeneraltrading.com',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://hasoongeneraltrading.com',
        siteName: 'Hasoon General Trading',
        title: 'Hasoon General Trading | Reliable Global Trade Solutions',
        description: 'Connecting global markets with premium building materials, animal health solutions, and industrial equipment. Trust Dubai\'s leading trading partner.',
        images: [
            {
                url: 'https://hasoongeneraltrading.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Hasoon General Trading Global Operations',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hasoon General Trading | Global Import & Export',
        description: 'Quality building materials, animal health, and safety equipment delivery worldwide from Dubai.',
        images: ['https://hasoongeneraltrading.com/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: '#0a2351',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hasoon General Trading',
    url: 'https://hasoongeneraltrading.com',
    logo: 'https://hasoongeneraltrading.com/logo.png',
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+971-XXXXXXX', // Replace with actual
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: ['en', 'Arabic']
    },
    sameAs: [
        'https://www.linkedin.com/company/hasoon-general-trading',
        // Add other social links
    ]
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body suppressHydrationWarning>
                <ClientLayoutElements />
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
