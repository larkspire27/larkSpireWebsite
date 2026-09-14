import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project | Larkspire",
  description:
    "Get in touch with Larkspire. Submit a project inquiry for web development, graphic design, SEO, or digital growth marketing.",
  alternates: {
    canonical: "https://larkspire.in/contact",
  },
  keywords: [
    "Contact Larkspire",
    "Hire Web Developers",
    "Project Inquiry",
    "Digital Agency Quote",
    "Contact Creative Studio",
    "Larkspire Phone Email",
  ],
  openGraph: {
    title: "Contact Us | Start Your Project with Larkspire",
    description:
      "Have a project in mind? Let's build something great together. Get direct access to senior web engineers & designers.",
    url: "https://larkspire.in/contact",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Larkspire Digital Agency",
    description: "Submit a project inquiry or reach our senior engineering & creative team directly.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
