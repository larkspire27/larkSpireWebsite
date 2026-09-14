"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  Code,
  Palette,
  TrendingUp,
  Image as ImageIcon,
  Search,
  Target,
  Layout,
  Globe,
  ShoppingBag,
  ShoppingCart,
  Database,
  Smartphone,
  Cloud,
  MapPin,
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const servicesList = [
  {
    slug: "website-design",
    title: "Website Design",
    description:
      "Bespoke UI/UX wireframes, interactive Figma prototypes, and responsive landing pages crafted to captivate visitors.",
    icon: Layout,
    href: "/services/website-design",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Bespoke, high-speed custom websites engineered for seamless performance, accessibility, and high conversion rates.",
    icon: Code,
    href: "/services/web-development",
  },
  {
    slug: "search-engine-optimization",
    title: "SEO Optimization",
    description:
      "Comprehensive technical & content SEO strategies to rank at the top of search results and capture high-intent organic traffic.",
    icon: Search,
    href: "/services/search-engine-optimization",
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    description:
      "Custom WordPress theme coding, WooCommerce integration, and custom Gutenberg blocks without template bloat.",
    icon: Globe,
    href: "/services/wordpress-development",
  },
  {
    slug: "shopify-website-design",
    title: "Shopify Website Design",
    description:
      "Conversion-driven Liquid themes, mobile shopping UX, and automated shop app integrations for D2C brands.",
    icon: ShoppingBag,
    href: "/services/shopify-website-design",
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    description:
      "Scalable e-commerce platforms featuring custom checkout flows, payment gateways, and inventory automation.",
    icon: ShoppingCart,
    href: "/services/ecommerce-development",
  },
  {
    slug: "graphic-design",
    title: "Logo & Graphic Design",
    description:
      "Modern brand identities, visual language systems, typography, and design tokens that distinguish your business.",
    icon: Palette,
    href: "/services/graphic-design",
  },
  {
    slug: "crm-software-development",
    title: "CRM Software Development",
    description:
      "Tailored sales pipelines, lead scoring, client communication hubs, and WhatsApp/Email automation.",
    icon: Database,
    href: "/services/crm-software-development",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android mobile apps engineered with React Native, smooth UX, and App Store submission.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    slug: "web-apps-saas",
    title: "Web Apps & SaaS",
    description:
      "Multi-tenant SaaS cloud applications featuring Stripe subscription billing, dashboards, and scalable APIs.",
    icon: Cloud,
    href: "/services/web-apps-saas",
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    description:
      "Dominating local Google Map Pack rankings, profile verification, review management, and local lead generation.",
    icon: MapPin,
    href: "/services/google-business-profile",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Data-driven growth strategies, omnichannel marketing campaigns, and funnel optimization to drive sustainable ROI.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
  },
  {
    slug: "poster-design",
    title: "Poster Design",
    description:
      "Striking promotional graphics, event posters, and visual editorial assets crafted to capture attention instantly.",
    icon: ImageIcon,
    href: "/services/poster-design",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description:
      "Precision-targeted Facebook & Instagram ad campaigns with high-converting creative, A/B testing, and audience analytics.",
    icon: Target,
    href: "/services/meta-ads",
  },
];

const generalFaqs = [
  {
    question: "What agency services does Larkspire specialize in?",
    answer:
      "Larkspire provides full-spectrum digital solutions: Website Design, Web Development, SEO, WordPress, Shopify, E-Commerce, Graphic & Logo Design, CRM Software, Mobile Apps, SaaS Platforms, Google Business Profile, and Digital Marketing & Meta Ads.",
  },
  {
    question: "How do I choose the right combination of services for my business?",
    answer:
      "We recommend starting with a strategy discovery call. For most growth-oriented companies, combining custom web development or Shopify with targeted SEO and Google Business Profile generates fast commercial returns.",
  },
  {
    question: "Do you offer custom package pricing for multi-service projects?",
    answer:
      "Yes, we build tailored multi-service bundles that combine web engineering, visual identity design, and marketing funnels into cost-effective growth retainers.",
  },
  {
    question: "What is Larkspire's typical project onboarding workflow?",
    answer:
      "Our 4-step workflow includes: (1) Discovery & Strategy Alignment, (2) UI/UX Design & Architecture Prototyping, (3) Production Engineering / Campaign Creation, and (4) Quality Audit & Launch.",
  },
];

export default function ServicesClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Inject FAQ Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main ref={containerRef} className="flex-grow pt-28">
        {/* Services Landing Hero */}
        <section className="py-20 px-6 bg-background relative border-b border-slate-200/60">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              Capabilities &amp; Solutions
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              What We Do Best At <span className="text-teal-700">Larkspire</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed">
              We bridge high-end digital design with cutting-edge engineering and performance marketing to scale ambitious companies.
            </p>
          </div>
        </section>

        {/* All Service Cards Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div
              ref={cardsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesList.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={service.href}
                    prefetch={true}
                    className="group relative p-8 rounded-2xl bg-teal-50/40 border border-teal-100/80 hover:border-teal-300 hover:bg-white shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <div className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                      <span>EXPLORE SERVICE</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Overview Banner Section */}
        <section className="py-20 px-6 bg-background border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-700" />
              <span>Full-Spectrum Digital Agency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Ambitious Brands Partner with <span className="text-teal-700">Larkspire</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Larkspire is a boutique digital agency combining elite technical engineering with commercial design strategy. From high-speed Next.js web applications to profitable Meta Ad funnels and dominant organic search rankings, we build digital assets engineered for market leadership.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
              <div className="p-6 rounded-2xl bg-white border border-teal-100 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>Sub-Second Performance</span>
                </h3>
                <p className="text-xs text-slate-600">Zero bloat page speeds with 95+ Core Web Vitals optimization.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-teal-100 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>High-Converting UX</span>
                </h3>
                <p className="text-xs text-slate-600">Commercial visual identity systems designed to drive sales conversion.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-teal-100 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>Direct ROAS Focus</span>
                </h3>
                <p className="text-xs text-slate-600">Omnichannel ad strategies tracking real revenue and customer LTV.</p>
              </div>
            </div>
          </div>
        </section>

        {/* General Services FAQ Accordion Section */}
        <section className="py-20 px-6 bg-white border-t border-slate-200/60">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Services <span className="text-teal-700">FAQ</span>
              </h2>
              <p className="text-slate-600 text-base">
                Common questions about our agency capabilities, workflow, and custom service packages.
              </p>
            </div>

            <div className="space-y-4">
              {generalFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-teal-50/50 border-teal-300 shadow-md"
                        : "bg-slate-50/60 border-slate-200/80 hover:border-teal-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.question}
                      </span>
                      <div
                        className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 bg-teal-700 text-white" : "bg-white text-slate-500 border border-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-teal-100/60 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
