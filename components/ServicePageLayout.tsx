"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Image as ImageIcon,
  Search,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ServiceData } from "@/lib/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const iconMap = {
  Code: Code,
  Palette: Palette,
  TrendingUp: TrendingUp,
  ImageIcon: ImageIcon,
  Search: Search,
  Target: Target,
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

      // Why Us stagger
      const whyUsItems = whyUsRef.current?.querySelectorAll(".whyus-card");
      if (whyUsItems && whyUsItems.length > 0) {
        gsap.fromTo(
          whyUsItems,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: whyUsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Portfolio stagger
      const portfolioCards = portfolioRef.current?.querySelectorAll(".portfolio-card");
      if (portfolioCards && portfolioCards.length > 0) {
        gsap.fromTo(
          portfolioCards,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: portfolioRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Global Navbar */}
      <Navbar />

      <main ref={containerRef} className="flex-grow pt-24">
        {/* 1. HERO SECTION */}
        <section className="relative py-20 px-6 overflow-hidden bg-background">
          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            <div ref={heroRef} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-teal-200/60 shadow-subtle text-xs font-semibold tracking-wider text-teal-700 uppercase">
                <ServiceIcon className="w-4 h-4 text-teal-700" />
                <span>{service.title} Capability</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                {service.title} <br />
                <span className="text-teal-700 font-extrabold">{service.tagline}</span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed font-light">
                {service.heroDescription}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal-700 text-white font-semibold text-sm shadow-card hover:bg-teal-800 transition-all duration-300 hover:scale-105"
                >
                  <span>Get a Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full glass-card text-teal-700 font-semibold text-sm border border-teal-200/60 hover:bg-teal-100/60 transition-all duration-300"
                >
                  Explore What&apos;s Included
                </Link>
              </div>

              {/* Service Hero Local Image Showcase */}
              {service.heroImage && (
                <div className="pt-10 max-w-4xl mx-auto">
                  <div className="relative rounded-3xl overflow-hidden glass-card border border-teal-200/80 shadow-floating group">
                    <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-900">
                      <Image
                        src={service.heroImage}
                        alt={`${service.title} - Larkspire Agency`}
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient & Badge Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-semibold tracking-wider">
                          {service.title.toUpperCase()} VISUAL SHOWCASE
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-teal-700/90 backdrop-blur-md text-white font-semibold text-xs flex items-center gap-1.5 shadow-md">
                          <Sparkles className="w-3.5 h-3.5 text-teal-200" />
                          <span>Larkspire Capability</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 2. WHAT'S INCLUDED SECTION */}
        <section id="features" className="py-20 px-6 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Scope of Service
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                What&apos;s Included in <span className="text-teal-700">{service.title}</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Comprehensive deliverables designed to ensure maximum visual impact and strategic business results.
              </p>
            </div>

            <div
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {service.featuresList.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-card p-8 rounded-2xl bg-teal-50/50 border border-teal-100/80 hover:border-teal-300 hover:bg-white shadow-subtle hover:shadow-card transition-all duration-300 space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. OUR PROCESS MINI-SECTION */}
        <section className="py-20 px-6 bg-teal-100/40 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Execution Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Our <span className="text-teal-700">{service.title}</span> Process
              </h2>
            </div>

            <div
              ref={processRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {service.processSteps.map((step) => (
                <div
                  key={step.number}
                  className="process-card bg-white p-6 rounded-2xl border border-teal-100 shadow-subtle space-y-3"
                >
                  <span className="text-2xl font-extrabold font-mono text-teal-700">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE LARK SPIRE FOR THIS SERVICE */}
        <section className="py-20 px-6 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                The Larkspire Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Why Choose Larkspire for <span className="text-teal-700">{service.title}</span>
              </h2>
            </div>

            <div
              ref={whyUsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {service.whyUsPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="whyus-card p-8 rounded-2xl bg-background border border-teal-100 shadow-subtle space-y-4"
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

        {/* 5. RELATED PORTFOLIO PREVIEW */}
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

        {/* 6. CLOSING CTA BLOCK */}
        <CTASection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
