import React from "react";
import { Sparkles } from "lucide-react";

export default function HorizontalTextScroll() {
  return (
    <section className="py-16 sm:py-24 bg-teal-950 text-white overflow-hidden relative border-y border-teal-900 select-none">
      {/* Decorative subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A4B51_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="space-y-6 sm:space-y-10 relative z-10">
        {/* Row 1: Continuous Smooth Left Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 text-4xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-teal-100/90 whitespace-nowrap">
            {/* Set 1 */}
            <div className="flex items-center gap-8 shrink-0">
              <span className="flex items-center gap-6">
                WE TRANSFORM AMBITIOUS BRANDS INTO DIGITAL MARKET LEADERS
                <Sparkles className="w-8 h-8 sm:w-14 sm:h-14 text-teal-400 shrink-0 inline-block" />
              </span>
              <span className="text-transparent border-text-stroke flex items-center gap-6">
                CRAFTED WITH PRECISION &amp; INTENT
                <Sparkles className="w-8 h-8 sm:w-14 sm:h-14 text-teal-400 shrink-0 inline-block" />
              </span>
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex items-center gap-8 shrink-0">
              <span className="flex items-center gap-6">
                WE TRANSFORM AMBITIOUS BRANDS INTO DIGITAL MARKET LEADERS
                <Sparkles className="w-8 h-8 sm:w-14 sm:h-14 text-teal-400 shrink-0 inline-block" />
              </span>
              <span className="text-transparent border-text-stroke flex items-center gap-6">
                CRAFTED WITH PRECISION &amp; INTENT
                <Sparkles className="w-8 h-8 sm:w-14 sm:h-14 text-teal-400 shrink-0 inline-block" />
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Continuous Smooth Right Marquee */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-8 text-4xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-teal-400/90 whitespace-nowrap">
            {/* Set 1 */}
            <div className="flex items-center gap-8 shrink-0">
              <span className="text-transparent border-text-stroke flex items-center gap-6">
                ENGINEERING BOLD DIGITAL EXPERIENCES
                <span className="text-teal-200">★</span>
              </span>
              <span className="text-teal-50 flex items-center gap-6">
                THAT CAPTIVATE, CONVERT, AND OUTPERFORM
                <span className="text-teal-200">★</span>
              </span>
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex items-center gap-8 shrink-0">
              <span className="text-transparent border-text-stroke flex items-center gap-6">
                ENGINEERING BOLD DIGITAL EXPERIENCES
                <span className="text-teal-200">★</span>
              </span>
              <span className="text-teal-50 flex items-center gap-6">
                THAT CAPTIVATE, CONVERT, AND OUTPERFORM
                <span className="text-teal-200">★</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
