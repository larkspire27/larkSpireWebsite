"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Zap, Code } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "devops" | "design";
  color: string;
  ring: 1 | 2 | 3;
  angle: number;
  iconSvg: React.ReactNode;
  description: string;
}

const technologies: TechItem[] = [
  // Ring 1 (Inner)
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    color: "#0284c7",
    ring: 1,
    angle: 30,
    description: "Component-based UI architecture",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <circle cx="12" cy="12" r="2.5" />
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js 14",
    category: "frontend",
    color: "#0f172a",
    ring: 1,
    angle: 150,
    description: "Full-stack React framework with SSR & App Router",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9v6l-6-6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    color: "#2563eb",
    ring: 1,
    angle: 270,
    description: "Strongly typed JavaScript for robust codebase",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="7" y="16" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    ),
  },

  // Ring 2 (Middle)
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    color: "#16a34a",
    ring: 2,
    angle: 0,
    description: "High-throughput asynchronous JavaScript runtime",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.5l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z" />
      </svg>
    ),
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    color: "#0284c7",
    ring: 2,
    angle: 90,
    description: "AI, data processing & backend microservices",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.87 2c-4.8 0-4.5 2.08-4.5 2.08v2.16h4.56v.64H5.73s-2.73.31-2.73 4.54c0 4.22 2.38 4.38 2.38 4.38h1.42v-2.02s-.08-2.38 2.37-2.38h4.03s2.26.04 2.26-2.18V4.26S16.14 2 11.87 2zm-1.28 1.41a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
        <path d="M12.13 22c4.8 0 4.5-2.08 4.5-2.08v-2.16h-4.56v-.64h6.2s2.73-.31 2.73-4.54c0-4.22-2.38-4.38-2.38-4.38h-1.42v2.02s.08 2.38-2.37 2.38h-4.03s-2.26-.04-2.26 2.18v4.32S7.86 22 12.13 22zm1.28-1.41a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    color: "#0891b2",
    ring: 2,
    angle: 180,
    description: "Utility-first modern responsive styling engine",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 6c-3.3 0-5.3 1.6-6 4.9 1.3-1.6 2.7-2.1 4.3-1.4 1 0.4 1.6 1.1 2.4 1.9C14 12.7 15.6 14 19 14c3.3 0 5.3-1.6 6-4.9-1.3 1.6-2.7 2.1-4.3 1.4-1-0.4-1.6-1.1-2.4-1.9C17 7.3 15.4 6 12 6zm-7 6c-3.3 0-5.3 1.6-6 4.9 1.3-1.6 2.7-2.1 4.3-1.4 1 0.4 1.6 1.1 2.4 1.9C7 18.7 8.6 20 12 20c3.3 0 5.3-1.6 6-4.9-1.3 1.6-2.7 2.1-4.3 1.4-1-0.4-1.6-1.1-2.4-1.9C8.6 13.3 7 12 5 12z" />
      </svg>
    ),
  },
  {
    id: "gsap",
    name: "GSAP Motion",
    category: "frontend",
    color: "#65a30d",
    ring: 2,
    angle: 270,
    description: "High-performance interactive web animation library",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },

  // Ring 3 (Outer)
  {
    id: "aws",
    name: "AWS Cloud",
    category: "devops",
    color: "#d97706",
    ring: 3,
    angle: 45,
    description: "Scalable cloud infrastructure & serverless APIs",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M6.7 15.5c-2.3-1.1-3.7-2.8-3.7-4.7 0-3.3 4.5-6 10-6s10 2.7 10 6c0 1.9-1.4 3.6-3.7 4.7l1.7 2.5-4-1.2c-1.3.3-2.6.5-4 .5-1.4 0-2.7-.2-4-.5l-4 1.2 1.7-2.5z" />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker & K8s",
    category: "devops",
    color: "#2563eb",
    ring: 3,
    angle: 120,
    description: "Isolated containerization & microservices deployment",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4 14h2v-2H4v2zm3 0h2v-2H7v2zm3 0h2v-2h-2v2zm3 0h2v-2h-2v2zm-6-3h2V9H7v2zm3 0h2V9h-2v2zm3 0h2V9h-2v2zm3 0h2V9h-2v2zM2 17c0 2.5 3 4 10 4s10-1.5 10-4h-20z" />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend",
    color: "#1d4ed8",
    ring: 3,
    angle: 200,
    description: "Enterprise relational database system",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    id: "figma",
    name: "Figma UI/UX",
    category: "design",
    color: "#ea580c",
    ring: 3,
    angle: 280,
    description: "Collaborative interface prototyping & design systems",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M8 2h4v4H8V2zm4 4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4V6zm-4 4h4v4H8v-4zm0 4h4v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2zm0-8a2 2 0 0 1 2-2H8v4h2z" />
      </svg>
    ),
  },
  {
    id: "graphql",
    name: "GraphQL & REST",
    category: "backend",
    color: "#c026d3",
    ring: 3,
    angle: 340,
    description: "Flexible data query APIs & schema integration",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

type TechCategory = "all" | "frontend" | "backend" | "devops" | "design";

export default function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<TechCategory>("all");
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".tech-fade") || [],
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

  const filteredTechnologies =
    activeTab === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeTab);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-transparent text-slate-800 border-t border-slate-200/80 overflow-hidden"
      id="tech-stack"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-teal-50/70 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading & Information */}
          <div className="lg:col-span-5 space-y-6 tech-fade text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal-700" />
              <span>Modern Architecture</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Our <span className="text-teal-700">Technologies</span> Stack
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Behind every product we build is a powerful technology stack. Using modern frameworks and cloud-native tools, we create innovative, scalable, and seamless digital experiences.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: "All Tech", value: "all" },
                { label: "Frontend", value: "frontend" },
                { label: "Backend & DB", value: "backend" },
                { label: "DevOps & Cloud", value: "devops" },
                { label: "Design", value: "design" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value as TechCategory)}
                  className={`px-3.5 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-xl text-xs font-semibold transition-all duration-300 border apple-focus-ring ${
                    activeTab === tab.value
                      ? "bg-teal-700 text-white border-teal-700 shadow-md shadow-teal-700/20 scale-105"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-teal-400 hover:text-teal-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Hovered / Active Tech Detail Box */}
            <div className="min-h-[76px] p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-teal-200/60 shadow-sm transition-all duration-300 flex items-center gap-3.5">
              {hoveredTech ? (
                <>
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-white"
                    style={{ backgroundColor: hoveredTech.color }}
                  >
                    {hoveredTech.iconSvg}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      {hoveredTech.name}
                      <span className="text-xs px-2 py-0.5 rounded-full uppercase tracking-wider bg-teal-100 text-teal-800 font-mono">
                        {hoveredTech.category}
                      </span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">{hoveredTech.description}</p>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2.5 text-slate-500 text-xs">
                  <Zap className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Tap or hover over any tech node to view features &amp; details.</span>
                </div>
              )}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[44px] rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm shadow-md shadow-teal-900/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group apple-focus-ring"
              >
                <span>Explore Full Capabilities</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Desktop Concentric Orbit vs Mobile Grid */}
          <div className="lg:col-span-7 flex items-center justify-center tech-fade w-full">
            
            {/* 1. DESKTOP VIEW (hidden on mobile, visible on md and up): Orbit concentric rings */}
            <div className="hidden md:flex relative w-full max-w-[480px] aspect-square items-center justify-center p-4">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="18" fill="none" stroke="#0d9488" strokeWidth="0.5" strokeDasharray="1.5 1.5" opacity="0.4" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#94a3b8" strokeWidth="0.4" opacity="0.5" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#0d9488" strokeWidth="0.3" strokeDasharray="2 2" opacity="0.3" />
              </svg>

              {/* Central Core */}
              <div className="absolute z-20 w-24 h-24 rounded-full bg-gradient-to-br from-white via-teal-50 to-teal-100 border-2 border-teal-600 shadow-[0_0_30px_rgba(13,148,136,0.2)] flex flex-col items-center justify-center p-2 text-center transition-transform hover:scale-105 duration-300">
                <div className="w-7 h-7 rounded-full bg-teal-700 text-white flex items-center justify-center shadow-md mb-1">
                  <Code className="w-3.5 h-3.5 text-teal-200" />
                </div>
                <span className="text-xs font-extrabold tracking-wider text-slate-900 uppercase leading-none">
                  LarkSpire
                </span>
                <span className="text-xs font-bold text-teal-700 uppercase mt-0.5">
                  CORE STACK
                </span>
              </div>

              {/* Tech Nodes */}
              {technologies.map((tech) => {
                let rPct = 18;
                if (tech.ring === 2) rPct = 30;
                if (tech.ring === 3) rPct = 42;

                const rad = (tech.angle * Math.PI) / 180;
                const posX = 50 + Math.cos(rad) * rPct;
                const posY = 50 + Math.sin(rad) * rPct;

                const isFiltered = activeTab !== "all" && tech.category !== activeTab;
                const isHovered = hoveredTech?.id === tech.id;

                return (
                  <div
                    key={tech.id}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    style={{
                      left: `${posX}%`,
                      top: `${posY}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className={`absolute z-30 flex flex-col items-center cursor-pointer transition-all duration-300 ${
                      isFiltered ? "opacity-20 scale-75 blur-[1px]" : "opacity-100 scale-100"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isHovered
                          ? "scale-125 text-white ring-4 ring-offset-2 ring-teal-500/30 z-40"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-teal-500 hover:text-teal-700 hover:scale-110"
                      }`}
                      style={{
                        backgroundColor: isHovered ? tech.color : "#ffffff",
                        borderColor: isHovered ? tech.color : undefined,
                        color: isHovered ? "#ffffff" : tech.color,
                        boxShadow: isHovered ? `0 8px 20px -3px ${tech.color}60` : undefined,
                      }}
                    >
                      {tech.iconSvg}
                    </div>

                    <div
                      className={`mt-1 px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                        isHovered
                          ? "bg-slate-900 text-white shadow-md scale-105"
                          : "bg-white/95 text-slate-700 border border-slate-200/80"
                      }`}
                    >
                      {tech.name}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2. MOBILE VIEW (md:hidden): Clean responsive 2-column tech card grid */}
            <div className="md:hidden w-full grid grid-cols-2 gap-3 pt-2">
              {filteredTechnologies.map((tech) => {
                const isHovered = hoveredTech?.id === tech.id;
                return (
                  <div
                    key={tech.id}
                    onClick={() => setHoveredTech(tech)}
                    className={`p-3.5 rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between space-y-2 cursor-pointer shadow-subtle ${
                      isHovered
                        ? "border-teal-600 bg-teal-50/60 shadow-md ring-2 ring-teal-500/20"
                        : "border-slate-200/80 hover:border-teal-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shadow-xs text-white"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.iconSvg}
                      </div>
                      <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {tech.category}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-900">{tech.name}</p>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-light">
                        {tech.description}
                      </p>
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
