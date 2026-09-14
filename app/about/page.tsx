import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Larkspire Creative Studio",
  description:
    "Learn about Larkspire — a boutique digital agency combining elite web engineering, commercial design psychology, and sub-second performance.",
  alternates: {
    canonical: "https://larkspire.in/about",
  },
  keywords: [
    "About Larkspire",
    "Digital Agency Team",
    "Web Engineering Studio",
    "Client ROI Design",
    "Senior Web Developers",
    "Creative Digital Agency",
  ],
  openGraph: {
    title: "About Us | Larkspire Digital Agency",
    description:
      "Direct senior engineering & design partnership for forward-thinking brands. Delivering sub-second speed, custom web apps, and commercial ROI.",
    url: "https://larkspire.in/about",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Larkspire Digital Agency",
    description: "Crafting digital legacies for ambitious brands with sub-second performance.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
