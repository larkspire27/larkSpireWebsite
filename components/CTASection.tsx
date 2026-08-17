"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function CTASection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.98, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Contrast Deep Teal Block (#0A4B51) */}
        <div
          ref={cardRef}
          className="relative rounded-3xl bg-teal-700 text-white p-10 sm:p-16 overflow-hidden shadow-floating border border-teal-800"
        >
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-600/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-900/40 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono text-teal-100 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Transformation?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s Build Something Extraordinary Together.
            </h2>

            <p className="text-teal-100/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Whether you need a full web redesign, a brand overhaul, or high-performance Meta ad campaigns, Larkspire is ready to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-teal-700 font-bold text-sm shadow-lg hover:bg-teal-50 transition-all duration-300 hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:spirelark@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-teal-800/60 hover:bg-teal-800 text-teal-100 font-medium text-sm border border-teal-600/50 transition-all duration-300"
              >
                spirelark@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
