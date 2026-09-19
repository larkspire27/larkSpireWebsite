"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  HeartPulse,
  ShoppingBag,
  Landmark,
  Building2,
  GraduationCap,
  Plane,
  Cpu,
  Film,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

interface IndustryItem {
  id: string;
  name: string;
  shortLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  color: string;
  angle: number; // Angle in degrees (0 - 360)
}

const industries: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    shortLabel: "Healthcare",
    tagline: "HIPAA-compliant platforms & telehealth apps",
    description:
      "Secure patient portals, telemedicine dashboards, medical booking systems, and health tech interfaces crafted with privacy and precision.",
    highlights: ["Patient Portals", "Telehealth Booking", "HIPAA Compliant"],
    icon: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "#0891b2", // Cyan-teal
    angle: 270, // Top
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    shortLabel: "E-Commerce",
    tagline: "High-converting storefronts & headless shopping",
    description:
      "Custom Shopify & Next.js storefronts built for ultra-fast checkout, payment gateway integrations, and maximized conversion rates.",
    highlights: ["Headless Commerce", "Sub-second Checkout", "Custom Cart UX"],
    icon: <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "#0d9488", // Teal
    angle: 315, // Top-right
  },
  {
    id: "finance",
    name: "Finance & FinTech",
    shortLabel: "Finance",
    tagline: "Bank-grade digital banking & investment tools",
    description:
      "Ultra-secure financial dashboards, payment processing solutions, crypto tracking tools, and institutional reporting platforms.",
    highlights: ["Bank-grade Security", "Real-time Data", "Analytics UI"],
    icon: <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "#2563eb", // Blue
    angle: 0, // Right
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    shortLabel: "Real Estate",
    tagline: "Interactive listing portals & 3D virtual tours",
    description:
      "Property search engines, virtual property tours, CRM integrations, and lead capture websites engineered for real estate growth.",
    highlights: ["Interactive Maps", "Lead Automation", "Property Portals"],
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "#7c3aed", // Violet
    angle: 45, // Bottom-right
  },
  {
    id: "education",
    name: "Education & EdTech",
    shortLabel: "Education",
    tagline: "LMS systems & interactive learning portals",
    description:
      "Learning management platforms, student portals, course marketplaces, and interactive e-learning apps built for high engagement.",
    highlights: ["LMS Integrations", "Interactive Quizzes", "Student Dashboards"],
    icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "#d97706", // Amber
    angle: 90, // Bottom
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    shortLabel: "Travel",
    tagline: "Booking engines & immersive brand experiences",
    description:
      "Hotel reservation portals, flight comparison widgets, custom itinerary builders, and travel agency web platforms.",
    highlights: ["Booking Engines", "Multi-currency", "Dynamic Search"],
    icon: <Plane className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "#db2777", // Pink
    angle: 135, // Bottom-left
  },
  {
    id: "saas",
    name: "SaaS & Enterprise Tech",
    shortLabel: "SaaS & Cloud",
    tagline: "Scalable B2B platforms & cloud web applications",
    description:
      "Feature-rich B2B web applications, multi-tenant SaaS dashboards, API integrations, and product landing pages built for scale.",
    highlights: ["Multi-Tenant Systems", "Stripe Integration", "Role Access"],
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "#059669", // Emerald
    angle: 180, // Left
  },
  {
    id: "media",
    name: "Media & Entertainment",
    shortLabel: "Media & Video",
    tagline: "Streaming platforms & rich content hubs",
    description:
      "Content publishing platforms, video streaming web apps, creator portfolios, and high-impact digital event websites.",
    highlights: ["Video Streaming", "High Traffic Ready", "Dynamic CMS"],
    icon: <Film className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "#4f46e5", // Indigo
    angle: 225, // Top-left
  },
];

export default function IndustriesWeServeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndustry, setActiveIndustry] = useState<IndustryItem>(industries[0]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".ind-fade") || [],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const currentDisplay = hoveredId
    ? industries.find((i) => i.id === hoveredId) || activeIndustry
    : activeIndustry;

  const radiusPct = 37; // Radius percentage from center (50, 50)

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-transparent text-slate-800 border-t border-slate-200/80 overflow-hidden"
      id="industries"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-teal-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Active Industry Details */}
          <div className="lg:col-span-5 space-y-7 ind-fade self-center">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-600/20 text-teal-800 text-xs font-bold tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5 text-teal-700" />
              <span>Tailored Solutions</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Industries <span className="text-teal-700">We Serve</span>
            </h2>

            {/* Sub-description */}
            <p className="text-slate-600 text-base leading-relaxed font-light">
              From ambitious startups to enterprise leaders, we engineer bespoke digital websites and applications custom-built for domain-specific performance, conversion, and scalability.
            </p>

            {/* Active Industry Interactive Card */}
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-teal-200/60 shadow-md transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 transition-transform duration-300"
                  style={{ backgroundColor: currentDisplay.color }}
                >
                  {currentDisplay.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{currentDisplay.name}</h3>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5">{currentDisplay.tagline}</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">{currentDisplay.description}</p>

              {/* Feature Highlights */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentDisplay.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50/70 text-slate-700 text-xs font-semibold border border-teal-100"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Link Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm shadow-md shadow-teal-900/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Discuss Your Industry Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Perfectly Aligned Radial Node Network */}
          <div className="lg:col-span-7 flex items-center justify-center ind-fade">
            <div className="relative w-full max-w-[440px] sm:max-w-[500px] aspect-square flex items-center justify-center p-4">
              
              {/* SVG Canvas for Radial Dotted/Solid Connection Lines (Percentage ViewBox 0 0 100 100) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                {/* Background Guide Circles */}
                <circle cx="50" cy="50" r={radiusPct} fill="none" stroke="#cbd5e1" strokeWidth="0.4" strokeDasharray="1.5 1.5" opacity="0.6" />
                <circle cx="50" cy="50" r="16" fill="none" stroke="#0d9488" strokeWidth="0.5" opacity="0.3" />

                {industries.map((ind) => {
                  const rad = (ind.angle * Math.PI) / 180;
                  const x2 = 50 + Math.cos(rad) * radiusPct;
                  const y2 = 50 + Math.sin(rad) * radiusPct;
                  const isActive = currentDisplay.id === ind.id;

                  return (
                    <g key={ind.id}>
                      {/* Connection Line */}
                      <line
                        x1="50"
                        y1="50"
                        x2={x2}
                        y2={y2}
                        stroke={isActive ? ind.color : "#94a3b8"}
                        strokeWidth={isActive ? "1.2" : "0.6"}
                        strokeDasharray={isActive ? "none" : "1.2 1.2"}
                        opacity={isActive ? "1" : "0.5"}
                        className="transition-all duration-300"
                      />
                      
                      {/* Animated Pulse Beam along active line */}
                      {isActive && (
                        <circle
                          r="1.2"
                          fill={ind.color}
                          cx={50 + (x2 - 50) * 0.5}
                          cy={50 + (y2 - 50) * 0.5}
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Larkspire Hub Node */}
              <div className="absolute z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-white via-teal-50 to-teal-100 border-2 border-teal-600 shadow-[0_0_30px_rgba(13,148,136,0.2)] flex flex-col items-center justify-center p-2 text-center transition-transform hover:scale-105 duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-700 text-white flex items-center justify-center shadow-md mb-1">
                  <Sparkles className="w-4 h-4 text-teal-200" />
                </div>
                <span className="text-xs font-black tracking-wider text-slate-900 uppercase leading-none">
                  Larkspire
                </span>
                <span className="text-xs font-bold text-teal-700 uppercase mt-0.5 tracking-widest">
                  HUB
                </span>
              </div>

              {/* Industry Nodes positioned on exact percentage radius */}
              {industries.map((ind) => {
                const rad = (ind.angle * Math.PI) / 180;
                const posX = 50 + Math.cos(rad) * radiusPct;
                const posY = 50 + Math.sin(rad) * radiusPct;
                const isActive = currentDisplay.id === ind.id;

                return (
                  <div
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind)}
                    onMouseEnter={() => setHoveredId(ind.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      left: `${posX}%`,
                      top: `${posY}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="absolute z-30 flex flex-col items-center cursor-pointer group"
                  >
                    {/* Circle Node Icon */}
                    <div
                      className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isActive
                          ? "scale-125 text-white ring-4 ring-offset-2 ring-teal-500/30 z-40"
                          : "bg-white text-slate-700 border border-slate-200/90 hover:border-teal-500 hover:text-teal-700 hover:scale-110"
                      }`}
                      style={{
                        backgroundColor: isActive ? ind.color : "#ffffff",
                        borderColor: isActive ? ind.color : undefined,
                        boxShadow: isActive ? `0 8px 20px -3px ${ind.color}60` : undefined,
                      }}
                    >
                      {ind.icon}
                    </div>

                    {/* Clean Pill Label under Node */}
                    <div
                      className={`mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "bg-slate-900 text-white shadow-md scale-105"
                          : "bg-white/95 text-slate-700 border border-slate-200/80 group-hover:bg-teal-50 group-hover:text-teal-800"
                      }`}
                    >
                      {ind.shortLabel}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
