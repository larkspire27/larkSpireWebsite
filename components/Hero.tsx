"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const ROTATING_WORDS = [
  "Digital Perfection",
  "Bold Innovation",
  "Strategic Growth",
  "Next-Gen Web",
  "Creative Precision",
  "Brand Scalability",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob1ParallaxRef = useRef<HTMLDivElement>(null);
  const blob2ParallaxRef = useRef<HTMLDivElement>(null);
  const rotatingWordRef = useRef<HTMLSpanElement>(null);

  const [wordIndex, setWordIndex] = useState(0);

  // Dynamic Text Swapper Animation
  useEffect(() => {
    const timer = setInterval(() => {
      if (!rotatingWordRef.current) return;

      gsap.to(rotatingWordRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
          gsap.fromTo(
            rotatingWordRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
          );
        },
      });
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Create entrance timeline for text elements
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.4"
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        );

      // Continuous floating animation for background blobs (on inner element)
      gsap.to(blob1Ref.current, {
        y: "25px",
        x: "15px",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2Ref.current, {
        y: "-30px",
        x: "-20px",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Parallax on scroll for background blobs (on outer wrapper element to avoid conflict)
      gsap.to(blob1ParallaxRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
        },
      });

      gsap.to(blob2ParallaxRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-background"
    >
      {/* Background Soft Blob/Gradient Shapes in Light Teal with GPU acceleration */}
      <div
        ref={blob1ParallaxRef}
        className="absolute top-1/4 -left-20 pointer-events-none will-change-transform transform-gpu z-0"
      >
        <div
          ref={blob1Ref}
          className="w-96 h-96 rounded-full bg-teal-100/70 blur-2xl opacity-75 transform-gpu will-change-transform"
        />
      </div>

      <div
        ref={blob2ParallaxRef}
        className="absolute bottom-1/3 -right-20 pointer-events-none will-change-transform transform-gpu z-0"
      >
        <div
          ref={blob2Ref}
          className="w-[28rem] h-[28rem] rounded-full bg-teal-200/50 blur-2xl opacity-65 transform-gpu will-change-transform"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-slate-200/25 blur-2xl pointer-events-none z-0 transform-gpu" />

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Agency Tagline Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-teal-200/60 shadow-subtle text-xs font-semibold tracking-wider text-teal-700 uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-700" />
          <span>Boutique Creative & Digital Agency</span>
        </div>

        {/* Hero Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
        >
          Elevating Ambitious Brands <br className="hidden sm:block" />
          Through{" "}
          <span className="inline-block relative">
            <span
              ref={rotatingWordRef}
              className="inline-block text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-8 will-change-transform"
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={textRef}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-normal leading-relaxed"
        >
          We craft high-converting websites, graphic identities, and targeted digital marketing campaigns designed to scale forward-thinking businesses.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal-700 text-white font-semibold text-sm shadow-card hover:bg-teal-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full glass-card text-teal-700 font-semibold text-sm border border-teal-200/60 hover:bg-teal-100/60 transition-all duration-300"
          >
            View Our Services
          </Link>
        </div>

        {/* Trust Badges / Quick Highlights */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-300/60">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-teal-700">100%</p>
            <p className="text-xs text-slate-500 uppercase font-mono">Custom Built</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-teal-700">50+</p>
            <p className="text-xs text-slate-500 uppercase font-mono">Brands Scaled</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-teal-700">5.0★</p>
            <p className="text-xs text-slate-500 uppercase font-mono">Client Rating</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-teal-700">24/7</p>
            <p className="text-xs text-slate-500 uppercase font-mono">Direct Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
