import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Web Development, SEO, Graphic Design & Meta Ads",
  description:
    "Discover Larkspire's 14+ specialized digital agency capabilities: Custom Web Engineering, SEO, WordPress, Shopify, E-Commerce, Graphic Design, Mobile Apps, SaaS & Performance Marketing.",
  keywords: [
    "Digital Agency Services",
    "Web Development Capabilities",
    "Graphic Design Agency",
    "SEO Services",
    "Shopify Store Design",
    "Meta Ads Management",
    "Custom CRM Software",
  ],
  openGraph: {
    title: "Our Services | Full-Spectrum Digital Agency Solutions",
    description:
      "Bridging high-end digital design with cutting-edge web engineering and performance marketing to scale ambitious companies.",
    url: "https://larkspire.in/services",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Larkspire Digital Agency",
    description:
      "Explore full-spectrum web development, graphic design, SEO, and paid growth services.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
