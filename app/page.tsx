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
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Larkspire | Best Website Development & Digital Marketing Company in Jaipur",
  description:
    "Larkspire is the best website development and digital marketing company in jaipur. We offer web design, SEO, graphic design, and online marketing to help your business grow online.",
  alternates: {
    canonical: "https://larkspire.in",
  },
  keywords: [
    "best website development and digital marketing company in jaipur",
    "best website development company in jaipur",
    "digital marketing company in jaipur",
    "web development company jaipur",
    "Larkspire",
    "Larkspire Agency",
  ],
  openGraph: {
    title: "Larkspire | Best Website Development & Digital Marketing Company in Jaipur",
    description:
      "Larkspire is the best website development and digital marketing company in jaipur. We offer web design, SEO, graphic design, and online marketing to help your business grow online.",
    url: "https://larkspire.in",
    siteName: "Larkspire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larkspire | Best Website Development & Digital Marketing Company in Jaipur",
    description:
      "Larkspire is the best website development and digital marketing company in jaipur. We offer web design, SEO, graphic design, and online marketing to help your business grow online.",
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
