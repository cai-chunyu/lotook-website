import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lotook AI - Redefining the Boundaries of AI Applications",
  description: "LOTOOK LTD is a UK registered cutting-edge AI company providing innovative artificial intelligence solutions. We specialize in intelligent dialogue systems, machine learning platforms, computer vision, and AI application development.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "AI Development", "Lotook", "AI Solutions", "Neural Networks", "AI Applications", "AI Humanizer", "AI Detection Bypass", "Text Humanization", "Best Humanizer", "AI Content", "Academic Writing", "Essay Writing", "GPTZero", "Turnitin", "AI Text", "Undetectable AI"],
  authors: [{ name: "LOTOOK LTD" }],
  creator: "LOTOOK LTD",
  publisher: "LOTOOK LTD",
  metadataBase: new URL('https://lotook.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Lotook AI - Redefining the Boundaries of AI Applications",
    description: "LOTOOK LTD - UK registered company providing cutting-edge AI solutions for enterprises. Intelligent dialogue systems, machine learning platforms, and innovative AI applications.",
    url: 'https://lotook.com',
    siteName: 'Lotook AI',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Lotook AI Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lotook AI - Redefining the Boundaries of AI Applications",
    description: "LOTOOK LTD - UK registered company providing cutting-edge AI solutions for enterprises. Intelligent dialogue systems, machine learning platforms, and innovative AI applications.",
    images: ['/logo.svg'],
    creator: '@LotookAI',
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
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/logo.svg' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Meta Tags */}
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.country" content="United Kingdom" />
        <meta name="geo.placename" content="England" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Lotook AI" />
        <meta name="application-name" content="Lotook AI" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://lotook.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LOTOOK LTD",
              "alternateName": "Lotook AI",
              "url": "https://lotook.com",
              "logo": "https://lotook.com/logo.svg",
              "description": "LOTOOK LTD is a UK registered cutting-edge AI company providing innovative artificial intelligence solutions. We specialize in intelligent dialogue systems, machine learning platforms, computer vision, and AI application development.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB",
                "addressRegion": "England"
              },
              "foundingDate": "2024",
              "industry": "Artificial Intelligence",
              "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "AI Development"],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "email": "contact@lotook.com",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://github.com/cai-chunyu/lotook-website"
              ],
              "owns": {
                "@type": "SoftwareApplication",
                "name": "Best Humanizer",
                "url": "https://www.besthumanizer.net",
                "applicationCategory": "AI Text Processing",
                "description": "Transform AI-generated content into undetectable human writing. Best AI humanizer for essay writing, bypass AI detection tools like Turnitin, GPTZero."
              }
            })
          }}
        />

        {/* Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "LOTOOK LTD",
              "legalName": "LOTOOK LTD",
              "incorporationCountry": "GB",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "United Kingdom",
                "addressRegion": "England"
              },
              "industry": "Computer Software",
              "naics": "541511"
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
