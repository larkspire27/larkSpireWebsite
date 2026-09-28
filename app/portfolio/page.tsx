import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio – Websites Built in Jaipur | Larkspire",
  description:
    "Live websites by Larkspire: CCTV, granite & marble and more. See our Next.js projects and what we built.",
  alternates: {
    canonical: "https://larkspire.in/portfolio",
  },
  keywords: [
    "website for cctv installation company",
    "granite and marble showroom website design",
    "website design portfolio jaipur",
    "next.js website examples india",
    "Larkspire portfolio",
  ],
  openGraph: {
    title: "Portfolio – Websites Built in Jaipur | Larkspire",
    description:
      "Live websites by Larkspire: CCTV, granite & marble and more. See our Next.js projects and what we built.",
    url: "https://larkspire.in/portfolio",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio – Websites Built in Jaipur | Larkspire",
    description: "Live websites by Larkspire: CCTV, granite & marble and more. See our Next.js projects and what we built.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
