import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://larkspire.com"),
  title: "Larkspire | Digital & Creative Agency",
  description:
    "Larkspire is a boutique digital agency delivering world-class web development, graphic design, digital marketing, SEO, and brand experiences.",
  keywords: [
    "Digital Agency",
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "SEO",
    "Meta Ads",
    "Brand Strategy",
    "Larkspire",
  ],
  authors: [{ name: "Larkspire Agency" }],
  openGraph: {
    title: "Larkspire | Digital & Creative Agency",
    description:
      "Transforming ambitious brands through world-class web development, design, and digital marketing.",
    url: "https://larkspire.com",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larkspire | Digital & Creative Agency",
    description: "Boutique creative agency specializing in modern web design and digital growth.",
  },
};

import LeadPopup from "@/components/LeadPopup";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://larkspire.com/#organization",
      "name": "Larkspire",
      "url": "https://larkspire.com",
      "logo": "https://larkspire.com/logo.webp",
      "description":
        "Larkspire is a boutique digital agency delivering world-class web development, graphic design, digital marketing, SEO, and brand experiences.",
      "email": "spirelark@gmail.com",
      "priceRange": "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://larkspire.com/#website",
      "url": "https://larkspire.com",
      "name": "Larkspire",
      "publisher": {
        "@id": "https://larkspire.com/#organization",
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
        <link rel="icon" href="/larkSpireWebsite/logo.webp" type="image/webp" />
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

