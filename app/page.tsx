import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HorizontalTextScroll from "@/components/HorizontalTextScroll";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Grid (6 cards) */}
        <Services />

        {/* GSAP Horizontal Text Scroll Banner */}
        <HorizontalTextScroll />

        {/* 3. 4-Step Process Timeline */}
        <Process />

        {/* 4. Portfolio & Case Studies */}
        <Portfolio />

        {/* 5. Client Testimonials */}
        <Testimonials />

        {/* 6. Contrast CTA Block */}
        <CTASection />

        {/* 7. Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
