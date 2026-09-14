"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Search,
  Layout,
  Globe,
  ShoppingBag,
  ShoppingCart,
  Database,
  Smartphone,
  Cloud,
  MapPin,
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
    id: "website-design",
    title: "Website Design",
    href: "/services/website-design",
    description:
      "Bespoke UI/UX wireframes, interactive Figma prototypes, and responsive landing pages crafted to captivate visitors.",
    icon: <Layout className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "web-dev",
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Bespoke, high-speed Next.js websites engineered for sub-second performance, accessibility, and high conversion rates.",
    icon: <Code className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "seo",
    title: "SEO Optimization",
    href: "/services/search-engine-optimization",
    description:
      "Comprehensive technical & content SEO strategies to rank at the top of search results and capture organic traffic.",
    icon: <Search className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    href: "/services/wordpress-development",
    description:
      "Custom WordPress theme coding, WooCommerce integration, and custom Gutenberg blocks without template bloat.",
    icon: <Globe className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "shopify",
    title: "Shopify Website Design",
    href: "/services/shopify-website-design",
    description:
      "Conversion-driven Liquid themes, mobile shopping UX, and automated shop app integrations for D2C brands.",
    icon: <ShoppingBag className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "ecommerce",
    title: "Ecommerce Development",
    href: "/services/ecommerce-development",
    description:
      "Scalable e-commerce platforms featuring custom checkout flows, payment gateways, and inventory automation.",
    icon: <ShoppingCart className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "graphic-design",
    title: "Logo & Graphic Design",
    href: "/services/graphic-design",
    description:
      "Memorable logo marks, visual brand design systems, design tokens, and marketing collateral.",
    icon: <Palette className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "crm",
    title: "CRM Software Development",
    href: "/services/crm-software-development",
    description:
      "Tailored sales pipelines, lead scoring, client communication hubs, and WhatsApp/Email automation.",
    icon: <Database className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description:
      "Cross-platform iOS and Android mobile apps engineered with React Native, smooth UX, and App Store submission.",
    icon: <Smartphone className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "web-apps-saas",
    title: "Web Apps & SaaS",
    href: "/services/web-apps-saas",
    description:
      "Multi-tenant SaaS cloud applications featuring Stripe subscription billing, dashboards, and scalable APIs.",
    icon: <Cloud className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "google-business",
    title: "Google Business Profile",
    href: "/services/google-business-profile",
    description:
      "Dominating local Google Map Pack rankings, profile verification, review management, and local lead generation.",
    icon: <MapPin className="w-6 h-6 text-teal-700" />,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "Data-driven growth strategies, omnichannel marketing campaigns, and funnel optimization to drive sustainable ROI.",
    icon: <TrendingUp className="w-6 h-6 text-teal-700" />,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

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
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-6 bg-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-teal-700 uppercase font-semibold">
            Capabilities & Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            End-to-End Digital Services Designed to Scale
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you need custom web applications, e-commerce stores, branding, or target local growth — we provide complete engineering and design services under one roof.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-700 transition-colors duration-300">
                  {React.cloneElement(service.icon as React.ReactElement, {
                    className:
                      "w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-300",
                  })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 uppercase tracking-wider group-hover:gap-2.5 transition-all duration-200"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
