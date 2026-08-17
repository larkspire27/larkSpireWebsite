"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const categories = [
  "All",
  "Web Development",
  "Graphic Design",
  "Digital Marketing",
  "Poster Design",
  "SEO",
  "Meta Ads",
];

const portfolioProjects = [
  {
    id: "p1",
    title: "Apex FinTech Web Platform",
    category: "Web Development",
    client: "Apex Financial",
    description: "Custom web app with real-time financial analytics dashboard.",
    gradient: "from-teal-800 via-slate-900 to-teal-900",
  },
  {
    id: "p2",
    title: "Lumina Brand Identity System",
    category: "Graphic Design",
    client: "Lumina Labs",
    description: "Comprehensive vector design system, typography guidelines, and logo.",
    gradient: "from-teal-700 via-teal-800 to-slate-800",
  },
  {
    id: "p3",
    title: "Pulse Digital Campaign Growth",
    category: "Digital Marketing",
    client: "Pulse Fitness",
    description: "Omnichannel digital strategy resulting in 4.5x ROAS and lead scaling.",
    gradient: "from-slate-900 via-teal-700 to-teal-800",
  },
  {
    id: "p4",
    title: "Vanguard Summit Poster Series",
    category: "Poster Design",
    client: "Vanguard Events",
    description: "High-impact digital & print artwork for international creative summit.",
    gradient: "from-teal-800 via-slate-800 to-teal-600",
  },
  {
    id: "p5",
    title: "EcoStore Global SEO Scaling",
    category: "SEO",
    client: "EcoStore E-Commerce",
    description: "Organic search campaign scaling monthly visitors from 5k to 120k.",
    gradient: "from-slate-800 via-teal-900 to-teal-700",
  },
  {
    id: "p6",
    title: "Aura Skincare Meta Ads Campaign",
    category: "Meta Ads",
    client: "Aura Beauty",
    description: "Facebook & Instagram video ad campaign with server-side CAPI integration.",
    gradient: "from-teal-600 via-teal-800 to-slate-900",
  },
  {
    id: "p7",
    title: "Horizon Enterprise Web Portal",
    category: "Web Development",
    client: "Horizon SaaS",
    description: "High-speed SaaS web platform with interactive component library.",
    gradient: "from-slate-900 via-teal-800 to-teal-600",
  },
  {
    id: "p8",
    title: "Krypton Brand Book & Tokens",
    category: "Graphic Design",
    client: "Krypton Capital",
    description: "Minimalist logo design, visual guidelines, and corporate stationery.",
    gradient: "from-teal-700 via-slate-900 to-teal-800",
  },
  {
    id: "p9",
    title: "Starlight Festival Digital Posters",
    category: "Poster Design",
    client: "Starlight Productions",
    description: "Vibrant promotional poster artwork formatted for digital billboards.",
    gradient: "from-teal-800 via-teal-600 to-slate-900",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    },
    { scope: containerRef }
  );

  // Animate grid cards whenever filter changes
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const cards = gridRef.current?.querySelectorAll(".portfolio-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 25, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    },
    { dependencies: [activeFilter], scope: containerRef }
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main ref={containerRef} className="flex-grow pt-28">
        {/* Portfolio Hero */}
        <section className="py-20 px-6 bg-background border-b border-slate-200/60">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              Selected Works &amp; Case Studies
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Transforming Visions Into <span className="text-teal-700">Digital Reality</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed">
              Explore our portfolio of web applications, brand identities, digital growth campaigns, and graphic artwork.
            </p>
          </div>
        </section>

        {/* Filter Bar & Grid Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Filter Buttons Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-teal-700 text-white shadow-sm"
                      : "bg-teal-50 text-slate-700 hover:bg-teal-100 hover:text-teal-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Project Cards Responsive Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href="/contact"
                  className="portfolio-card group rounded-2xl bg-background border border-teal-100 shadow-subtle hover:shadow-card overflow-hidden transition-all duration-300 flex flex-col justify-between"
                >
                  <div
                    className={`h-56 w-full bg-gradient-to-br ${project.gradient} p-6 relative flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-teal-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-xs uppercase tracking-wider backdrop-blur-xs">
                      <span>Inquire About Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md text-white font-mono text-xs font-semibold tracking-wider uppercase border border-white/20">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-teal-700">
                      <span>{project.client}</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
