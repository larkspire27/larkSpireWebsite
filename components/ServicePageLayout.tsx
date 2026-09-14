"use client";

import React, { useRef, useState } from "react";

import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Image as ImageIcon,
  Search,
  Target,
  Layout,
  Globe,
  ShoppingBag,
  ShoppingCart,
  Database,
  Smartphone,
  Cloud,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
  Briefcase,
  FileCheck,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ServiceData } from "@/lib/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const iconMap = {
  Code,
  Palette,
  TrendingUp,
  ImageIcon,
  Search,
  Target,
  Layout,
  Globe,
  ShoppingBag,
  ShoppingCart,
  Database,
  Smartphone,
  Cloud,
  MapPin,
};

interface ServicePageLayoutProps {
  service: ServiceData;
}

export default function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);

  // Accordion State for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const ServiceIcon = iconMap[service.iconName] || Code;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Hero entrance
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );

      // Features stagger
      const featureCards = featuresRef.current?.querySelectorAll(".feature-card");
      if (featureCards && featureCards.length > 0) {
        gsap.fromTo(
          featureCards,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Process steps stagger
      const processItems = processRef.current?.querySelectorAll(".process-card");
      if (processItems && processItems.length > 0) {
        gsap.fromTo(
          processItems,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  // JSON-LD Schemas for SEO Rich Snippets
  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Larkspire",
      url: "https://larkspire.in",
    },
    description: service.heroDescription,
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Inject Structured Data Schemas for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Global Navigation */}
      <Navbar />

      <main ref={containerRef} className="flex-grow pt-28">
        {/* 1. HERO SECTION */}
        <section className="py-16 sm:py-24 px-6 bg-background relative border-b border-slate-200/60">
          <div
            ref={heroRef}
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
                <ServiceIcon className="w-3.5 h-3.5 text-teal-700" />
                <span>{service.tagline}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                {service.title} Services by{" "}
                <span className="text-teal-700">Larkspire</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span>Start a {service.title} Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white hover:bg-teal-50 text-slate-700 font-semibold text-sm border border-slate-200/80 transition-colors"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </div>
            </div>

            {/* Right Graphic Banner */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full aspect-4/3 rounded-3xl bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 p-8 text-white shadow-floating relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <ServiceIcon className="w-7 h-7 text-teal-300" />
                  </div>
                  <h2 className="text-2xl font-bold">{service.title} Excellence</h2>
                  <p className="text-teal-100/80 text-xs sm:text-sm leading-relaxed">
                    Custom solutions engineered for maximum commercial impact, speed, and conversion.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono text-teal-200 relative z-10">
                  <span>LARKSPIRE CAPABILITY</span>
                  <Sparkles className="w-4 h-4 text-teal-300 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CORE FEATURES & CAPABILITIES GRID */}
        <section id="features" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Capabilities Included
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Comprehensive Solutions for <span className="text-teal-700">{service.title}</span>
              </h2>
              <p className="text-slate-600 text-base">
                Everything required to build, optimize, and scale your digital presence under one dedicated team.
              </p>
            </div>

            <div
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {service.featuresList.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-card p-8 rounded-2xl bg-teal-50/40 border border-teal-100/80 hover:border-teal-300 shadow-subtle hover:shadow-card transition-all duration-300 space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SEO DEEP-DIVE & BUSINESS BENEFIT OVERVIEW SECTION */}
        {service.detailedSeoContent && (
          <section className="py-20 px-6 bg-background border-t border-slate-200/60">
            <div ref={seoRef} className="max-w-7xl mx-auto space-y-12">
              <div className="max-w-3xl space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                  Strategic Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Why Professional <span className="text-teal-700">{service.title}</span> Matters for Your Growth
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                  {service.detailedSeoContent.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Key Benefits Card */}
                <div className="p-8 rounded-2xl bg-white border border-teal-100 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 text-teal-700">
                    <div className="p-2 rounded-xl bg-teal-50">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Key Benefits</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.detailedSeoContent.keyBenefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Card */}
                <div className="p-8 rounded-2xl bg-white border border-teal-100 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 text-teal-700">
                    <div className="p-2 rounded-xl bg-teal-50">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">What We Deliver</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.detailedSeoContent.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Card */}
                <div className="p-8 rounded-2xl bg-white border border-teal-100 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 text-teal-700">
                    <div className="p-2 rounded-xl bg-teal-50">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Who This Is Ideal For</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.detailedSeoContent.idealFor.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. EXECUTION PROCESS TIMELINE */}
        <section className="py-20 px-6 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Execution Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Our 4-Step <span className="text-teal-700">Delivery Process</span>
              </h2>
              <p className="text-slate-600 text-base">
                Structured milestone execution to guarantee technical quality and fast turnaround.
              </p>
            </div>

            <div
              ref={processRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {service.processSteps.map((step) => (
                <div
                  key={step.number}
                  className="process-card p-8 rounded-2xl bg-teal-50/40 border border-teal-100/80 shadow-subtle space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="text-3xl font-extrabold font-mono text-teal-700">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHY LARKSPIRE SECTION */}
        <section className="py-20 px-6 bg-background border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                The Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Why Work With <span className="text-teal-700">Larkspire</span> for {service.title}
              </h2>
            </div>

            <div
              ref={whyUsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {service.whyUsPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="whyus-card p-8 rounded-2xl bg-white border border-teal-100/80 shadow-subtle space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. INTERACTIVE FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
        {service.faqs && service.faqs.length > 0 && (
          <section id="faqs" className="py-20 px-6 bg-white border-t border-slate-200/60">
            <div ref={faqRef} className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
                  <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
                  <span>Got Questions?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Frequently Asked <span className="text-teal-700">Questions</span>
                </h2>
                <p className="text-slate-600 text-base">
                  Everything you need to know about our {service.title.toLowerCase()} process, deliverables, and pricing.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-teal-50/50 border-teal-300 shadow-md"
                          : "bg-slate-50/60 border-slate-200/80 hover:border-teal-200"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base sm:text-lg font-bold text-slate-900">
                          {faq.question}
                        </span>
                        <div
                          className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                            isOpen ? "rotate-180 bg-teal-700 text-white" : "bg-white text-slate-500 border border-slate-200"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-teal-100/60 animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 7. RELATED PORTFOLIO PREVIEW */}
        {service.relatedProjects && service.relatedProjects.length > 0 && (
          <section className="py-20 px-6 bg-background border-t border-slate-200/60">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                    Proof of Performance
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Related <span className="text-teal-700">{service.title}</span> Projects
                  </h2>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:underline"
                >
                  <span>View Full Portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div
                ref={portfolioRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {service.relatedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href="/contact"
                    className="portfolio-card group rounded-2xl bg-white border border-teal-100 shadow-subtle hover:shadow-card overflow-hidden transition-all duration-300 block"
                  >
                    <div
                      className={`h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6 relative`}
                    >
                      <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-mono text-xs font-semibold">
                        {project.category.toUpperCase()}
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm">{project.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 8. CLOSING CTA BLOCK */}
        <CTASection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
