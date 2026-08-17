"use client";

import React, { useRef, useState } from "react";
import { ExternalLink, Tag, X, CheckCircle, Sparkles, ArrowRight, Layers } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
  techStack: string[];
  impactMetric: string;
  impactLabel: string;
  fullCaseStudy: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

const projects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Apex FinTech Platform",
    category: "Web Development",
    description: "High-performance web dashboard with real-time financial analytics.",
    gradient: "from-teal-700 via-teal-800 to-slate-900",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Chart.js"],
    impactMetric: "+340%",
    impactLabel: "Performance Target",
    fullCaseStudy: {
      challenge: "Financial platforms require sub-second analytics dashboards capable of rendering 10,000+ data points per second with zero UI freeze.",
      solution: "Engineered a custom serverless Next.js architecture with web workers, GPU-accelerated canvas charts, and optimized client state.",
      results: [
        "Sub-200ms page load speed architecture",
        "99.9% high-concurrency uptime design",
        "Optimized client session state and data flow",
      ],
    },
  },
  {
    id: "project-2",
    title: "Lumina Brand Identity",
    category: "Graphic Design",
    description: "Complete brand design system, logo mark, and brand guidelines.",
    gradient: "from-slate-800 via-teal-700 to-teal-600",
    techStack: ["Figma", "Adobe Illustrator", "Brand Strategy", "Typography"],
    impactMetric: "100%",
    impactLabel: "Custom Design Token System",
    fullCaseStudy: {
      challenge: "Modern luxury brands require identity systems that communicate high prestige while staying modern and accessible across touchpoints.",
      solution: "Crafted a comprehensive design system featuring custom typography, vector assets, luxury print specifications, and a digital UI kit.",
      results: [
        "Unified brand guidelines across digital & print media",
        "500+ design tokens and asset guidelines generated",
        "Scalable design tokens for cross-platform expansion",
      ],
    },
  },
  {
    id: "project-3",
    title: "Pulse Campaign Growth",
    category: "Meta Ads & Marketing",
    description: "Multi-channel advertising campaign framework for maximum ROAS.",
    gradient: "from-teal-600 via-teal-700 to-slate-800",
    techStack: ["Meta Ads Manager", "Server-Side CAPI", "A/B Testing", "Funnel Copy"],
    impactMetric: "4.5x",
    impactLabel: "Target ROAS Model",
    fullCaseStudy: {
      challenge: "Rising customer acquisition costs (CAC) severely limit growth across competitive paid social marketing channels.",
      solution: "Designed a server-side Meta Conversions API (CAPI) funnel with structured dynamic creative testing and high-converting landed lead pages.",
      results: [
        "Engineered framework to reduce CAC by up to 40%",
        "Designed to achieve high-conversion funnel throughput",
        "Automated lead capture & CRM integration flow",
      ],
    },
  },
  {
    id: "project-4",
    title: "Vanguard Event Posters",
    category: "Poster Design",
    description: "Series of high-impact editorial print & digital event posters.",
    gradient: "from-slate-900 via-teal-800 to-teal-700",
    techStack: ["Adobe Photoshop", "Indesign", "Vector Artwork", "Print Ready"],
    impactMetric: "Editorial",
    impactLabel: "Visual Standard",
    fullCaseStudy: {
      challenge: "High-profile international summits require bold visual assets across print billboards and digital screen networks.",
      solution: "Created high-contrast poster artwork combining vibrant typography with geometric vector illustrations.",
      results: [
        "High visual impact across billboard & screen dimensions",
        "Structured typography hierarchy for instant legibility",
        "Full suite of 40+ print and digital aspect ratio exports",
      ],
    },
  },
  {
    id: "project-5",
    title: "EcoStore Global SEO",
    category: "SEO Optimization",
    description: "Technical SEO framework for scaling organic search traffic.",
    gradient: "from-teal-800 via-slate-800 to-teal-600",
    techStack: ["Technical SEO", "Schema Markup", "Content Strategy", "Link Building"],
    impactMetric: "24x",
    impactLabel: "Organic Scale Model",
    fullCaseStudy: {
      challenge: "E-commerce stores suffer from search engine indexation errors, duplicate metadata, and slow mobile page performance.",
      solution: "Designed technical audit resolution checklists, structured JSON-LD schema integration, and high-intent keyword content mapping.",
      results: [
        "Technical SEO framework built for sub-second indexing",
        "Built-in Google Rich Snippet JSON-LD structure",
        "Scalable keyword mapping and content architecture",
      ],
    },
  },
  {
    id: "project-6",
    title: "Horizon Mobile App UX",
    category: "Web & UI Design",
    description: "Next-generation iOS & Android application user experience.",
    gradient: "from-teal-700 via-teal-600 to-slate-900",
    techStack: ["React Native", "Figma Prototyping", "UX Research", "Micro-Interactions"],
    impactMetric: "4.9★",
    impactLabel: "UX Benchmark",
    fullCaseStudy: {
      challenge: "Mobile apps face high onboarding drop-off rates if navigation flows are cumbersome or unintuitive.",
      solution: "Designed micro-animated interaction flows, seamless biometric sign-in, and intuitive modular dashboard widgets.",
      results: [
        "Streamlined onboarding user journeys",
        "Micro-animated feedback for high engagement",
        "Accessible, high-contrast dark & light themes",
      ],
    },
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

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

      const items = gridRef.current?.children;
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="portfolio"
      ref={sectionRef}
      className="py-24 px-6 bg-transparent relative border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div ref={headingRef} className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold uppercase tracking-wider border border-teal-200">
            <Layers className="w-3.5 h-3.5 text-teal-700" />
            <span>Capability Showcase &amp; Concept Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Design Explorations &amp; <span className="text-teal-700">Case Studies</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A showcase of custom concept case studies and technical design explorations engineered by Larkspire to demonstrate our creative standards.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-2xl glass-card border border-teal-200/60 shadow-subtle hover:shadow-floating overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
            >
              {/* Project Card Graphic Container */}
              <div
                className={`h-56 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col justify-between p-6`}
              >
                {/* Decorative Grid SVG overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="flex justify-between items-start relative z-10">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-semibold tracking-wider uppercase">
                    CONCEPT &bull; {project.category}
                  </span>
                  <div className="px-2.5 py-1 rounded-full bg-teal-950/60 text-teal-300 font-bold text-xs flex items-center gap-1 border border-teal-500/30">
                    <Sparkles className="w-3 h-3 text-teal-300" />
                    <span>{project.impactMetric}</span>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-white/80 text-[10px] uppercase font-mono tracking-widest">{project.impactLabel}</p>
                  <p className="text-white font-bold text-lg">{project.title}</p>
                </div>

                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-5 py-2.5 rounded-full bg-white text-teal-700 text-xs font-bold flex items-center gap-2 shadow-xl">
                    <span>Explore Concept Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-700">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200/60 text-[10px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="absolute inset-0"
            onClick={() => setActiveProject(null)}
            aria-label="Close modal background"
          />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-teal-200 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Header Banner */}
            <div className={`p-6 sm:p-8 bg-gradient-to-br ${activeProject.gradient} text-white relative shrink-0`}>
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-teal-200 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                <span>Featured Concept Exploration &bull; {activeProject.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-teal-100/90 text-sm mt-1 max-w-lg">
                {activeProject.description}
              </p>

              {/* Highlight Metric Badge */}
              <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <span className="text-2xl font-extrabold text-teal-300">{activeProject.impactMetric}</span>
                <span className="text-xs uppercase font-mono text-teal-100 tracking-wider">{activeProject.impactLabel}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 scrollbar-thin">
              {/* Tech Stack Tags */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Technologies &amp; Design Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Industry Challenge</span>
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {activeProject.fullCaseStudy.challenge}
                  </p>
                </div>

                <div className="space-y-2 bg-teal-50/50 p-4 rounded-2xl border border-teal-200/60">
                  <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    <span>Larkspire Capability Solution</span>
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {activeProject.fullCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Key Results */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Engineering &amp; Design Benchmarks</h4>
                <div className="space-y-2">
                  {activeProject.fullCaseStudy.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action Footer */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-medium">Ready to build a custom solution for your brand?</p>
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
