import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStackSection from "@/components/TechStackSection";
import HorizontalTextScroll from "@/components/HorizontalTextScroll";
import Process from "@/components/Process";
import IndustriesWeServeSection from "@/components/IndustriesWeServeSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Larkspire – Digital Agency in Jaipur: Web, SEO & Marketing",
  description:
    "Larkspire builds fast Next.js websites, Shopify stores and runs SEO & Meta ads for Jaipur businesses. See live projects and get a free quote.",
  alternates: {
    canonical: "https://larkspire.in",
  },
  keywords: [
    "Larkspire",
    "Larkspire Agency",
    "digital agency in jaipur",
    "next.js website development jaipur",
    "web development and digital marketing agency jaipur",
    "web design and development company in jaipur",
  ],
  openGraph: {
    title: "Larkspire – Digital Agency in Jaipur: Web, SEO & Marketing",
    description:
      "Larkspire builds fast Next.js websites, Shopify stores and runs SEO & Meta ads for Jaipur businesses. See live projects and get a free quote.",
    url: "https://larkspire.in",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Grid */}
        <Services />

        {/* 3. Industries We Serve Section */}
        <IndustriesWeServeSection />

        {/* GSAP Horizontal Text Scroll Banner */}
        <HorizontalTextScroll />

        {/* 4. Process Timeline */}
        <Process />

        {/* 5. Portfolio & Case Studies ("Design Explorations & Case Studies") */}
        <Portfolio />

        {/* 6. Technologies Stack Section */}
        <TechStackSection />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* Instagram Feed Widget */}
        <InstagramFeed />

        {/* 8. Contrast CTA Block */}
        <CTASection />

        {/* 9. Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
