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
  Image as ImageIcon,
  Target,
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
    id: "digital-wedding-invitation",
    title: "Digital Wedding Invitation",
    href: "/services/digital-wedding-invitation",
    description:
      "Animated digital wedding cards in Jaipur with WhatsApp RSVP, music, royal Rajasthani themes & Google Maps navigation.",
    icon: <Heart className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/digital-wedding-invitation.jpg"),
  },
  {
    id: "website-design",
    title: "Website Design",
    href: "/services/website-design",
    description:
      "Custom Figma UI/UX prototypes, responsive layouts & affordable plans for Jaipur small businesses and startups.",
    icon: <Layout className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/website-design.jpg"),
  },
  {
    id: "web-dev",
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Bespoke, fast Next.js & React websites in Jaipur engineered for sub-second performance and 100% custom builds.",
    icon: <Code className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/web-development.jpg"),
  },
  {
    id: "seo",
    title: "SEO Optimization",
    href: "/services/search-engine-optimization",
    description:
      "Technical, local and content SEO for Jaipur businesses. Free SEO audits & keyword positioning to rank on Google.",
    icon: <Search className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/seo-optimization.jpg"),
  },
  {
    id: "shopify",
    title: "Shopify Store Design",
    href: "/services/shopify-website-design",
    description:
      "Conversion-focused Shopify stores for Jaipur jewellery, gemstone, textile and D2C brands. Custom Liquid themes & apps.",
    icon: <ShoppingBag className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/shopify-website-design.jpg"),
  },
  {
    id: "google-business",
    title: "Google Business Profile",
    href: "/services/google-business-profile",
    description:
      "Google Business Profile setup, verification, review management & Google Maps ranking in Jaipur.",
    icon: <MapPin className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/google-business-profile.jpg"),
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    href: "/services/wordpress-development",
    description:
      "Custom WordPress themes, WooCommerce online stores and Gutenberg blocks without template bloat.",
    icon: <Globe className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/wordpress-development.jpg"),
  },
  {
    id: "ecommerce",
    title: "Ecommerce Development",
    href: "/services/ecommerce-development",
    description:
      "Custom online stores with secure checkout, payment gateways (Razorpay/PayU), and inventory automation.",
    icon: <ShoppingCart className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/ecommerce-development.jpg"),
  },
  {
    id: "graphic-design",
    title: "Logo & Brand Identity",
    href: "/services/graphic-design",
    description:
      "Logo design, brand guidelines and marketing creatives for Jaipur startups and small businesses.",
    icon: <Palette className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/graphic-design.jpg"),
  },
  {
    id: "crm",
    title: "CRM Software",
    href: "/services/crm-software-development",
    description:
      "Custom CRM software with lead tracking, sales pipeline and WhatsApp/email automation for Jaipur businesses.",
    icon: <Database className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/crm-software-development.jpg"),
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description:
      "React Native mobile app development for Jaipur startups: iOS & Android apps with App Store launch.",
    icon: <Smartphone className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/mobile-app-development.jpg"),
  },
  {
    id: "web-apps-saas",
    title: "Web Apps & SaaS",
    href: "/services/web-apps-saas",
    description:
      "Multi-tenant SaaS, dashboards and APIs with Stripe/Razorpay billing built for startups.",
    icon: <Cloud className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/web-apps-saas.jpg"),
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "Performance marketing, SEO and funnel optimization for Jaipur startups and D2C brands.",
    icon: <TrendingUp className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/digital-marketing.jpg"),
  },
  {
    id: "meta-ads",
    title: "Meta Ads Agency",
    href: "/services/meta-ads",
    description:
      "Facebook & Instagram ad campaigns for Jaipur businesses: lead-generation, A/B testing & sales funnels.",
    icon: <Target className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/meta-ads.jpg"),
  },
  {
    id: "poster-design",
    title: "Poster & Print Design",
    href: "/services/poster-design",
    description:
      "Eye-catching posters for events, festivals, social offers & print-ready digital creative files.",
    icon: <ImageIcon className="w-6 h-6 text-teal-400" />,
    bgImage: getAssetPath("/images/services/poster-design.jpg"),
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
