"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Image as ImageIcon,
  Search,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const servicesList = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Bespoke, high-speed custom websites engineered for seamless performance, accessibility, and high conversion rates.",
    icon: Code,
    href: "/services/web-development",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Modern brand identities, visual language systems, typography, and design tokens that distinguish your business.",
    icon: Palette,
    href: "/services/graphic-design",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Data-driven growth strategies, omnichannel marketing campaigns, and funnel optimization to drive sustainable ROI.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
  },
  {
    slug: "poster-design",
    title: "Poster Design",
    description:
      "Striking promotional graphics, event posters, and visual editorial assets crafted to capture attention instantly.",
    icon: ImageIcon,
    href: "/services/poster-design",
  },
  {
    slug: "search-engine-optimization",
    title: "SEO Optimization",
    description:
      "Comprehensive technical & content SEO strategies to rank at the top of search results and capture high-intent organic traffic.",
    icon: Search,
    href: "/services/search-engine-optimization",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description:
      "Precision-targeted Facebook & Instagram ad campaigns with high-converting creative, A/B testing, and audience analytics.",
    icon: Target,
    href: "/services/meta-ads",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main ref={containerRef} className="flex-grow pt-28">
        {/* Services Landing Hero */}
        <section className="py-20 px-6 bg-background relative border-b border-slate-200/60">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              Capabilities &amp; Solutions
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              What We Do Best At <span className="text-teal-700">Larkspire</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed">
              We bridge high-end digital design with cutting-edge engineering and performance marketing to scale ambitious companies.
            </p>
          </div>
        </section>

        {/* 6 Service Cards Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div
              ref={cardsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesList.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={service.href}
                    prefetch={true}
                    className="group relative p-8 rounded-2xl bg-teal-50/40 border border-teal-100/80 hover:border-teal-300 hover:bg-white shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <div className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                      <span>LEARN MORE</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
