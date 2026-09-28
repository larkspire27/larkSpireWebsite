import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Web, SEO & Marketing Services in Jaipur | Larkspire",
  description:
    "Website design, development, SEO, Shopify, Google Business Profile, digital marketing and more, all under one roof at Larkspire, Jaipur.",
  alternates: {
    canonical: "https://larkspire.in/services",
  },
  keywords: [
    "digital agency services jaipur",
    "website and digital marketing services jaipur",
    "web design seo and marketing services jaipur",
    "SEO services in jaipur",
    "web development in jaipur",
  ],
  openGraph: {
    title: "Web, SEO & Marketing Services in Jaipur | Larkspire",
    description:
      "Website design, development, SEO, Shopify, Google Business Profile, digital marketing and more, all under one roof at Larkspire, Jaipur.",
    url: "https://larkspire.in/services",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web, SEO & Marketing Services in Jaipur | Larkspire",
    description:
      "Website design, development, SEO, Shopify, Google Business Profile, digital marketing and more, all under one roof at Larkspire, Jaipur.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
