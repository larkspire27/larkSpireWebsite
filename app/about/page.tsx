import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Larkspire – Digital Agency in Jaipur",
  description:
    "Meet Larkspire, a Jaipur digital agency for web development, SEO, design and marketing. See our process and live projects.",
  alternates: {
    canonical: "https://www.larkspire.in/about",
  },
  keywords: [
    "About Larkspire",
    "larkspire agency",
    "larkspire jaipur",
    "digital agency jaipur team",
    "web development agency jaipur",
  ],
  openGraph: {
    title: "About Larkspire – Digital Agency in Jaipur",
    description:
      "Meet Larkspire, a Jaipur digital agency for web development, SEO, design and marketing. See our process and live projects.",
    url: "https://www.larkspire.in/about",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Larkspire – Digital Agency in Jaipur",
    description: "Meet Larkspire, a Jaipur digital agency for web development, SEO, design and marketing. See our process and live projects.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
