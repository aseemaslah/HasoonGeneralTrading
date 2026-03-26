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
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://hasoongeneraltrading.com'),
    title: {
        default: 'Hasoon General Trading | #1 International Trading Company Dubai | India & GCC',
        template: '%s | Hasoon General Trading'
    },
    description: 'Hasoon General Trading: A premier international trading company connecting global markets with a specialized focus on India and GCC countries. Experts in building materials, animal health, and industrial goods since 2014.',
    keywords: [
        'Hasoon General Trading',
        'Top Trading Company Dubai',
        'Best Import Export UAE',
        'General Trading Dubai',
        'India UAE Trade Partner',
        'GCC Import Export Services',
        'International Trading India GCC',
        'Dubai India Supply Chain',
        'Middle East Trade Specialist',
        'Import Export Companies UAE',
        'International Trade Dubai 2025',
        'Building Materials Export India',
        'Building Materials Export GCC',
        'Animal Health Products Middle East',
        'Safety Equipment Supplier Dubai',
        'Hasoon General Trading LLC',
        'Wholesale Construction Materials',
        'Dubai Free Zone Trading',
        'Jebel Ali Port Trading Companies',
        'Industrial Equipment Import Dubai',
        'FMCG Wholesale Dubai',
        'Global Sourcing Agents UAE',
        'Electronics Import Export Dubai',
        'Petroleum Products Trading UAE',
        'شركات تجارية عامة في دبي',
        'استيراد وتصدير دبي',
        'India GCC Trade Corridor',
        'Supply Chain Management Dubai',
        'Reliable Trading Partner Dubai',
        'Global Trade Solutions 2025'
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
        title: 'Hasoon General Trading | Global Trade Focus: India & GCC',
        description: 'Connecting global markets with a premium focus on the India-GCC trade corridor. Trust Dubai\'s leading international trading partner for building materials and industrial solutions.',
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
        title: 'Hasoon General Trading | International Trade India & GCC',
        description: 'Specialized international trade solutions between India and the GCC. Quality building materials and industrial supply delivered worldwide.',
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
    icons: {
        icon: '/favicon.ico?v=2',
        apple: '/favicon.png?v=2',
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
    '@type': 'Corporation',
    name: 'Hasoon General Trading',
    alternateName: ['Hasoon Trading', 'Hasoon General Trading LLC'],
    url: 'https://hasoongeneraltrading.com',
    logo: 'https://hasoongeneraltrading.com/logo.png',
    description: 'Leading international trading company based in Dubai,Saudi Arabia and Kerala, focused on the India-GCC trade corridor. Experts in building materials, safety equipment, and industrial supply since 2014.',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vilayattery Building, 1, 13/334,Unnikulam, Valliyoth, Kerala 673574',
        addressLocality: 'Kerala',
        addressRegion: 'Kerala',
        addressCountry: 'India'
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91- 9645207034',
        contactType: 'customer service',
        areaServed: ['UAE', 'IN', 'GCC'],
        availableLanguage: ['en', 'Arabic', 'Hindi', 'Malayalam']
    },
    sameAs: [
        'https://www.instagram.com/hasoon_general_tradin    ',
    ],
    knowsAbout: [
        'International Trade',
        'General Trading',
        'Global Logistics',
        'India-GCC Trade Corridor',
        'Building Materials Supply',
        'Industrial Equipment'
    ]
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={outfit.variable}>
            <head>
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
