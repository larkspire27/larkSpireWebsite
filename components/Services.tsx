"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { getAssetPath } from "@/lib/basePath";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  bgImage: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "website-design",
    title: "Website Design",
    href: "/services/website-design",
    description:
      "Bespoke UI/UX wireframes, interactive Figma prototypes, and responsive landing pages crafted to captivate visitors.",
    icon: <Layout className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/website-design.jpg"),
  },
  {
    id: "web-dev",
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Bespoke, high-speed Next.js websites engineered for sub-second performance, accessibility, and high conversion rates.",
    icon: <Code className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/web-development.jpg"),
  },
  {
    id: "seo",
    title: "SEO Optimization",
    href: "/services/search-engine-optimization",
    description:
      "Comprehensive technical & content SEO strategies to rank at the top of search results and capture organic traffic.",
    icon: <Search className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/seo-optimization.jpg"),
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    href: "/services/wordpress-development",
    description:
      "Custom WordPress theme coding, WooCommerce integration, and custom Gutenberg blocks without template bloat.",
    icon: <Globe className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/wordpress-development.jpg"),
  },
  {
    id: "shopify",
    title: "Shopify Website Design",
    href: "/services/shopify-website-design",
    description:
      "Conversion-driven Liquid themes, mobile shopping UX, and automated shop app integrations for D2C brands.",
    icon: <ShoppingBag className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/shopify-website-design.jpg"),
  },
  {
    id: "ecommerce",
    title: "Ecommerce Development",
    href: "/services/ecommerce-development",
    description:
      "Scalable e-commerce platforms featuring custom checkout flows, payment gateways, and inventory automation.",
    icon: <ShoppingCart className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/ecommerce-development.jpg"),
  },
  {
    id: "graphic-design",
    title: "Logo & Graphic Design",
    href: "/services/graphic-design",
    description:
      "Memorable logo marks, visual brand design systems, design tokens, and marketing collateral.",
    icon: <Palette className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/graphic-design.jpg"),
  },
  {
    id: "crm",
    title: "CRM Software Development",
    href: "/services/crm-software-development",
    description:
      "Tailored sales pipelines, lead scoring, client communication hubs, and WhatsApp/Email automation.",
    icon: <Database className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/crm-software-development.jpg"),
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description:
      "Cross-platform iOS and Android mobile apps engineered with React Native, smooth UX, and App Store submission.",
    icon: <Smartphone className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/mobile-app-development.jpg"),
  },
  {
    id: "web-apps-saas",
    title: "Web Apps & SaaS",
    href: "/services/web-apps-saas",
    description:
      "Multi-tenant SaaS cloud applications featuring Stripe subscription billing, dashboards, and scalable APIs.",
    icon: <Cloud className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/web-apps-saas.jpg"),
  },
  {
    id: "google-business",
    title: "Google Business Profile",
    href: "/services/google-business-profile",
    description:
      "Dominating local Google Map Pack rankings, profile verification, review management, and local lead generation.",
    icon: <MapPin className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/google-business-profile.jpg"),
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "Data-driven growth strategies, omnichannel marketing campaigns, and funnel optimization to drive sustainable ROI.",
    icon: <TrendingUp className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/digital-marketing.jpg"),
  },
  {
    id: "digital-wedding-invitation",
    title: "Digital Wedding Invitation",
    href: "/services/digital-wedding-invitation",
    description:
      "Animated digital wedding cards & online wedding invitations in Jaipur with WhatsApp RSVP, background music & Google Maps navigation.",
    icon: <Heart className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/digital-wedding-invitation.jpg"),
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
            <Link
              key={service.id}
              href={service.href}
              className="group relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-md hover:shadow-2xl hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Service Image Banner Frame */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-100">
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Bottom Card Content Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-5 bg-white">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center group-hover:bg-teal-700 transition-colors duration-300 shrink-0">
                      {React.cloneElement(service.icon as React.ReactElement, {
                        className:
                          "w-5 h-5 text-teal-700 group-hover:text-white transition-colors duration-300",
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 uppercase tracking-wider group-hover:text-teal-800">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
