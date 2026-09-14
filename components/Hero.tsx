"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Star,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
  Send,
  Briefcase,
  Compass,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import InteractiveMascot from "./InteractiveMascot";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.9 } });

      tl.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 }
      ).fromTo(
        rightColRef.current,
        { opacity: 0, x: 30, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1 },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("spirelark@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-end justify-center pt-24 sm:pt-28 pb-0 px-4 sm:px-6 overflow-hidden bg-background"
    >
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-teal-100/60 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] rounded-full bg-teal-200/40 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">

        {/* Left Column: Interactive Intro & Headline */}
        <div ref={leftColRef} className="lg:col-span-7 space-y-5 text-left pb-10 sm:pb-12">

          {/* Blurred Intro Label */}
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 max-w-full px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-xs text-xs font-semibold uppercase tracking-wider text-teal-800">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse shrink-0" />
              <Sparkles className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span>BOUTIQUE CREATIVE &amp; DIGITAL STUDIO</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            We build digital experiences that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">
              rank
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-4">
              convert
            </span>{" "}
            &amp;{" "}
            <span className="text-teal-800">
              scale
            </span>{" "}
            your business
          </h1>

          {/* Action Pill Prompt Buttons */}
          <div className="pt-2 space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Quick Actions / Prompts:
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-700 text-white font-medium text-xs sm:text-sm hover:bg-teal-800 transition-all duration-200 shadow-sm hover:scale-105"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Pitch us an idea</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-800 border border-teal-200 font-medium text-xs sm:text-sm hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 shadow-xs"
              >
                <Compass className="w-3.5 h-3.5 text-teal-700" />
                <span>See how we operate</span>
              </Link>

              <Link
                href="#portfolio"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-800 border border-teal-200 font-medium text-xs sm:text-sm hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 shadow-xs"
              >
                <Briefcase className="w-3.5 h-3.5 text-teal-700" />
                <span>Explore client work</span>
              </Link>

              {/* Copy Email Pill Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white border border-slate-800 font-medium text-xs sm:text-sm hover:bg-teal-900 transition-all duration-200 shadow-xs group"
              >
                <span>Reach us: <span className="underline underline-offset-2 text-teal-300">spirelark@gmail.com</span></span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                )}
              </button>
            </div>
            {copiedEmail && (
              <p className="text-xs text-emerald-600 font-semibold animate-in fade-in">
                ✓ Email copied to clipboard!
              </p>
            )}
          </div>

          {/* Social Proof & Rating Bar */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">5.0</span>
              <span className="text-slate-500">Client Rating</span>
            </div>

            <div className="h-4 w-px bg-slate-300 hidden sm:block" />

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-1.5 text-teal-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600" /> 50+ Brands Scaled
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600" /> 100% Custom Built
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Mouse-Tracking Mascot A.R.I.A. (Hidden on mobile) */}
        <div ref={rightColRef} className="hidden lg:flex lg:col-span-5 items-end justify-center self-end pb-0 pt-4 lg:pt-0 h-full">
          <InteractiveMascot />
        </div>

      </div>
    </section>
  );
}
