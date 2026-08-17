"use client";

import React, { useRef } from "react";
import { Sparkles, Target, Eye, ShieldCheck, Zap, Heart, Award, Code2, Palette, TrendingUp } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const valuesList = [
  {
    title: "Relentless Excellence",
    description: "We don't settle for 'good enough'. Every pixel, line of code, and campaign metric is refined to perfection.",
    icon: Award,
  },
  {
    title: "Speed & Performance",
    description: "In the digital world, speed is feature #1. We build lightweight, ultra-fast web experiences.",
    icon: Zap,
  },
  {
    title: "Radical Transparency",
    description: "Clear communication, transparent timelines, and honest reporting — no hidden jargon or fluff.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centric Empathy",
    description: "We treat your business as our own, aligning creative direction with your real commercial goals.",
    icon: Heart,
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
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

      gsap.fromTo(
        founderRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: founderRef.current,
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
              <span>Boutique Creative &amp; Digital Studio</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Crafting Digital Legacies <br />
              <span className="text-teal-700 font-extrabold">For Ambitious Brands</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed">
              Larkspire was founded on a simple premise: modern brands deserve high-converting web engineering and striking visual design without the bureaucracy of legacy agencies.
            </p>
          </div>
        </section>

        {/* Founder Section - Solo Founder Tushar Singhal */}
        <section className="py-24 px-6 bg-white border-b border-slate-200/60">
          <div ref={founderRef} className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                The Mind Behind Larkspire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Meet the <span className="text-teal-700">Founder</span>
              </h2>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-teal-50/50 border border-teal-100 shadow-subtle flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Avatar / Monogram */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-teal-700 text-white font-extrabold text-4xl sm:text-5xl flex items-center justify-center shadow-card shrink-0">
                TS
              </div>

              {/* Bio & Details */}
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Tushar Singhal</h3>
                  <p className="text-sm font-semibold text-teal-700 uppercase tracking-wider mt-1">
                    Founder &amp; Solo Lead Strategist / Engineer
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  As the founder and sole force behind Larkspire, I personally design, engineer, and optimize every project we undertake. Combining full-stack web development, brand identity design, and performance marketing, I ensure direct access, rapid execution, and uncompromised quality for every client.
                </p>

                {/* Core Skills Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-teal-200 text-xs font-semibold text-teal-800 shadow-xs">
                    <Code2 className="w-3.5 h-3.5 text-teal-700" />
                    <span>Next.js &amp; Full-Stack</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-teal-200 text-xs font-semibold text-teal-800 shadow-xs">
                    <Palette className="w-3.5 h-3.5 text-teal-700" />
                    <span>Graphic &amp; UI Design</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-teal-200 text-xs font-semibold text-teal-800 shadow-xs">
                    <TrendingUp className="w-3.5 h-3.5 text-teal-700" />
                    <span>SEO &amp; Meta Ads</span>
                  </span>
                </div>
              </div>
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
