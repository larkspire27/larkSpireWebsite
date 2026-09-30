import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FB_PIXEL_ID } from "@/lib/fbpixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.larkspire.in"),
  title: {
    default: "Larkspire – Digital Agency in Jaipur: Web, SEO & Marketing",
    template: "%s | Larkspire",
  },
  alternates: {
    canonical: "https://www.larkspire.in",
  },
  description:
    "Larkspire builds fast Next.js websites, Shopify stores and runs SEO & Meta ads for Jaipur businesses. See live projects and get a free quote.",
  keywords: [
    "digital agency in jaipur",
    "web development services in jaipur",
    "website design in jaipur",
    "seo services in jaipur",
    "digital wedding invitation jaipur",
    "shopify store design jaipur",
    "meta ads agency jaipur",
    "Larkspire",
    "Larkspire Agency",
    "Larkspire Digital Agency",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: "Larkspire Agency" }],
  openGraph: {
    title: "Larkspire – Digital Agency in Jaipur: Web, SEO & Marketing",
    description:
      "Larkspire builds fast Next.js websites, Shopify stores and runs SEO & Meta ads for Jaipur businesses. See live projects and get a free quote.",
    url: "https://www.larkspire.in",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larkspire – Digital Agency in Jaipur: Web, SEO & Marketing",
    description:
      "Larkspire builds fast Next.js websites, Shopify stores and runs SEO & Meta ads for Jaipur businesses. See live projects and get a free quote.",
  },
};

import LeadPopup from "@/components/LeadPopup";
import ArcadeGameWidget from "@/components/ArcadeGameWidget";
import CustomCursor from "@/components/CustomCursor";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
      "@id": "https://www.larkspire.in/#organization",
      "name": "LarkSpire Services",
      "alternateName": ["LarkSpire", "Larkspire", "Larkspire Agency", "Larkspire Digital Agency"],
      "url": "https://www.larkspire.in",
      "logo": "https://www.larkspire.in/logo.webp",
      "image": "https://www.larkspire.in/logo.webp",
      "description":
        "Larkspire is the best website development and digital marketing company in jaipur. We offer web design, SEO, graphic design, and online marketing to help your business grow online.",
      "telephone": "+91 9928196424",
      "email": "spirelark@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "areaServed": ["India", "Rajasthan", "Jaipur", "Bharatpur"],
      "sameAs": [
        "https://www.linkedin.com/company/larkspire-services/",
        "https://www.instagram.com/larkspireservices/",
        "https://www.facebook.com/profile.php?id=61593659866731"
      ],
      "knowsAbout": [
        "Website Development",
        "SEO",
        "Digital Marketing",
        "Graphic Design"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Graphic Design"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.larkspire.in/#website",
      "url": "https://www.larkspire.in",
      "name": "LarkSpire Services",
      "publisher": {
        "@id": "https://www.larkspire.in/#organization"
      }
    }
  ]
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

        {/* ── Meta Pixel Code ── */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* ── End Meta Pixel Code ── */}

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-teal-700 selection:text-white font-sans">
        <CustomCursor />
        {children}
        <LeadPopup />
        <ArcadeGameWidget />
      </body>
    </html>
  );
}

