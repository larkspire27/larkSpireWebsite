import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio & Works | Larkspire Agency",
  description:
    "Explore Larkspire's portfolio of custom web platforms, brand identity systems, digital growth campaigns, poster designs, and e-commerce solutions.",
  alternates: {
    canonical: "https://larkspire.in/portfolio",
  },
  keywords: [
    "Larkspire Portfolio",
    "Web Development Case Studies",
    "Brand Identity Examples",
    "Digital Marketing Results",
    "Graphic Design Showcase",
    "Selected Agency Works",
  ],
  openGraph: {
    title: "Portfolio & Case Studies | Larkspire Selected Works",
    description:
      "Transforming ambitious brand visions into high-performing digital realities. Explore our web engineering, brand identity, and marketing case studies.",
    url: "https://larkspire.in/portfolio",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Larkspire Digital Agency",
    description: "Browse selected web development, design, and growth marketing case studies.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
