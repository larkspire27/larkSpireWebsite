"use client";

import React, { useRef } from "react";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Heart,
  Award,
  Layers,
  Users,
  Cpu,
  BarChart3,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const advantagePoints = [
  {
    title: "Direct Senior Engineering & Design",
    description:
      "No account managers or middleman delays. You get direct access to senior full-stack developers and designers working directly on your project.",
    icon: Users,
    highlight: "Direct Access",
  },
  {
    title: "Sub-Second Performance Stack",
    description:
      "Engineered with Next.js 14, TypeScript, and serverless edge delivery for sub-second page loads, 95+ Core Web Vitals, and maximum SEO authority.",
    icon: Cpu,
    highlight: "< 1s Speed",
  },
  {
    title: "All-in-One Growth Ecosystem",
    description:
      "From custom web development and brand identity design to targeted SEO and Meta Ads — we handle the entire digital pipeline seamlessly.",
    icon: Layers,
    highlight: "Unified Stack",
  },
  {
    title: "Measurable Commercial ROI",
    description:
      "We don't build vanity metrics. Every feature, ad campaign, and design token is optimized to drive real leads, conversions, and revenue growth.",
    icon: BarChart3,
    highlight: "Data Driven",
  },
];

const valuesList = [
  {
    title: "Relentless Excellence",
    description:
      "We don't settle for 'good enough'. Every pixel, line of code, and campaign metric is refined to perfection.",
    icon: Award,
  },
  {
    title: "Speed & Performance",
    description:
      "In the digital world, speed is feature #1. We build lightweight, ultra-fast web experiences.",
    icon: Zap,
  },
  {
    title: "Radical Transparency",
    description:
      "Clear communication, transparent timelines, and honest reporting — no hidden jargon or fluff.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centric Empathy",
    description:
      "We treat your business as our own, aligning creative direction with your real commercial goals.",
    icon: Heart,
  },
];

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const advantageRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
      );

      gsap.fromTo(
        advantageRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: advantageRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        missionRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
          },
        }
      );

      const valueCards = valuesRef.current?.querySelectorAll(".value-card");
      if (valueCards && valueCards.length > 0) {
        gsap.fromTo(
          valueCards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            scrollTrigger: {
              trigger: valuesRef.current,
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
        {/* About Hero */}
        <section className="py-20 px-6 bg-background border-b border-slate-200/60">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-teal-200/60 shadow-subtle text-xs font-semibold tracking-wider text-teal-700 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative Digital Studio</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Crafting Digital Legacies <br />
              <span className="text-teal-700 font-extrabold">For Ambitious Brands</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed">
              LarkSpire was built on a simple premise: modern brands deserve high-converting web engineering and striking visual design without the bureaucracy or delays of legacy agencies.
            </p>
          </div>
        </section>

        {/* The LarkSpire Advantage Section */}
        <section className="py-24 px-6 bg-white border-b border-slate-200/60">
          <div ref={advantageRef} className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Why Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                The LarkSpire <span className="text-teal-700">Advantage</span>
              </h2>
              <p className="text-slate-600 text-base">
                We combine elite web engineering with commercial design psychology to deliver faster, higher-converting digital assets.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-teal-900 text-white shadow-xl">
              <div className="text-center space-y-1 border-r border-teal-800/80 last:border-0">
                <p className="text-3xl sm:text-4xl font-extrabold text-teal-300">50+</p>
                <p className="text-xs font-mono uppercase tracking-wider text-teal-100">Brands Scaled</p>
              </div>
              <div className="text-center space-y-1 border-r border-teal-800/80 last:border-0">
                <p className="text-3xl sm:text-4xl font-extrabold text-teal-300">98%+</p>
                <p className="text-xs font-mono uppercase tracking-wider text-teal-100">Client Retention</p>
              </div>
              <div className="text-center space-y-1 border-r border-teal-800/80 last:border-0">
                <p className="text-3xl sm:text-4xl font-extrabold text-teal-300">&lt; 1s</p>
                <p className="text-xs font-mono uppercase tracking-wider text-teal-100">Page Load Speed</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-teal-300">24/7</p>
                <p className="text-xs font-mono uppercase tracking-wider text-teal-100">Direct Support</p>
              </div>
            </div>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantagePoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-teal-50/40 border border-teal-100/80 hover:border-teal-300 shadow-subtle hover:shadow-card transition-all duration-300 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-mono font-semibold uppercase">
                        {item.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-6 bg-background border-b border-slate-200/60">
          <div ref={missionRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-teal-100 shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To empower forward-thinking companies by engineering digital products, graphic systems, and marketing campaigns that capture market share and drive scalable revenue.
              </p>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-teal-100 shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To set the global benchmark for boutique digital agencies — where design excellence, lightning-fast performance, and client-centric partnership converge.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 px-6 bg-white border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Our Core <span className="text-teal-700">Values</span>
              </h2>
            </div>

            <div
              ref={valuesRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {valuesList.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="value-card p-8 rounded-2xl bg-background border border-teal-100 shadow-subtle space-y-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
