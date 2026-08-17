"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Image as ImageIcon,
  Search,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Bespoke, high-speed Next.js websites engineered for seamless performance, accessibility, and high conversion rates.",
    icon: <Code className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    href: "/services/graphic-design",
    description:
      "Modern brand identities, visual language systems, typography, and design tokens that distinguish your business.",
    icon: <Palette className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "Data-driven growth strategies, omnichannel marketing campaigns, and funnel optimization to drive sustainable ROI.",
    icon: <TrendingUp className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "poster-design",
    title: "Poster Design",
    href: "/services/poster-design",
    description:
      "Striking promotional graphics, event posters, and visual editorial assets crafted to capture attention instantly.",
    icon: <ImageIcon className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "seo",
    title: "SEO Optimization",
    href: "/services/search-engine-optimization",
    description:
      "Comprehensive technical & content SEO strategies to rank at the top of search results and capture high-intent organic traffic.",
    icon: <Search className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    href: "/services/meta-ads",
    description:
      "Precision-targeted Facebook & Instagram ad campaigns with high-converting creative, A/B testing, and audience analytics.",
    icon: <Target className="w-6 h-6 text-teal-700" />,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Header animation triggers when section is comfortably in view
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

      // Cards stagger animation
      const cards = cardsRef.current?.children;
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
              trigger: cardsRef.current,
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
      id="services"
      ref={sectionRef}
      className="py-24 px-6 bg-transparent relative border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div ref={headingRef} className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Tailored Digital Services for <br />
            <span className="text-teal-700">Modern Growth</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We deliver end-to-end creative and technical solutions designed to give your brand a decisive competitive edge.
          </p>
        </div>

        {/* 6 Services Responsive Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              prefetch={true}
              className="group relative p-8 rounded-2xl bg-white border border-teal-100 hover:border-teal-300 shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100/70 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement, {
                    className:
                      "w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-300",
                  })}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                <span>EXPLORE CAPABILITY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
