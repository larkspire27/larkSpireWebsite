"use client";

import React, { useRef } from "react";
import { Search, Palette, Code, Rocket } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stepsData: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your brand, target market, competitors, and commercial objectives to construct a clear roadmap.",
    icon: <Search className="w-6 h-6 text-teal-700" />,
  },
  {
    number: "02",
    title: "Design System & UX",
    description:
      "Crafting bespoke visual identity tokens, modern typography, wireframes, and interactive UI prototypes.",
    icon: <Palette className="w-6 h-6 text-teal-700" />,
  },
  {
    number: "03",
    title: "Precision Engineering",
    description:
      "Building fast, responsive, production-ready code with clean architecture and smooth animations.",
    icon: <Code className="w-6 h-6 text-teal-700" />,
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "Rigorous speed testing, SEO optimization, smooth deployment, and ongoing digital marketing scaling.",
    icon: <Rocket className="w-6 h-6 text-teal-700" />,
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Header animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Steps stagger animation
      const cards = stepsRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 px-6 bg-teal-100/40 border-t border-slate-200/60 relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div ref={headingRef} className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            A Proven 4-Step <br />
            <span className="text-teal-700">Execution Framework</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From initial concept to deployment and scaling, our structured process guarantees clarity and exceptional outcomes.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {stepsData.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl glass-card border border-teal-200/60 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-100/70 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-teal-700/80">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
