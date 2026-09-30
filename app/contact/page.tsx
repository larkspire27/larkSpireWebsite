import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Larkspire – Get a Free Quote in Jaipur",
  description:
    "Tell us about your website, SEO or marketing project. Larkspire's Jaipur team replies within 24 hours.",
  alternates: {
    canonical: "https://www.larkspire.in/contact",
  },
  keywords: [
    "larkspire contact",
    "hire web developer jaipur",
    "website development quote jaipur",
    "contact digital agency jaipur",
  ],
  openGraph: {
    title: "Contact Larkspire – Get a Free Quote in Jaipur",
    description:
      "Tell us about your website, SEO or marketing project. Larkspire's Jaipur team replies within 24 hours.",
    url: "https://www.larkspire.in/contact",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Larkspire – Get a Free Quote in Jaipur",
    description: "Tell us about your website, SEO or marketing project. Larkspire's Jaipur team replies within 24 hours.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
