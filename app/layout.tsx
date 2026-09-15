import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://larkspire.in"),
  title: {
    default: "Larkspire | Digital & Creative Agency",
    template: "%s | Larkspire",
  },
  alternates: {
    canonical: "https://larkspire.in",
  },
  description:
    "Larkspire is a boutique digital agency delivering world-class web development, graphic design, digital marketing, SEO, and brand experiences.",
  keywords: [
    "Larkspire",
    "Larkspire Services",
    "Larkspire Agency",
    "Larkspire Digital Agency",
    "Digital Agency",
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "SEO",
    "Meta Ads",
    "Brand Strategy",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: "Larkspire Agency" }],
  openGraph: {
    title: "Larkspire Services | Digital & Creative Agency",
    description:
      "Transforming ambitious brands through world-class web development, design, and digital marketing.",
    url: "https://larkspire.in",
    siteName: "Larkspire Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larkspire Services | Digital & Creative Agency",
    description: "Boutique creative agency specializing in modern web design and digital growth.",
  },
};

import LeadPopup from "@/components/LeadPopup";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://larkspire.in/#organization",
      "name": "Larkspire",
      "alternateName": ["Larkspire Services", "Larkspire Digital Agency", "Larkspire Agency"],
      "url": "https://larkspire.in",
      "logo": "https://larkspire.in/logo.webp",
      "description":
        "Larkspire is a boutique digital agency delivering world-class web development, graphic design, digital marketing, SEO, and brand experiences.",
      "email": "spirelark@gmail.com",
      "priceRange": "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://larkspire.in/#website",
      "url": "https://larkspire.in",
      "name": "Larkspire Services",
      "publisher": {
        "@id": "https://larkspire.in/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8K39D3L7C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z8K39D3L7C');
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-teal-700 selection:text-white font-sans">
        {children}
        <LeadPopup />
      </body>
    </html>
  );
}

