"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAssetPath } from "@/lib/basePath";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Code,
  Palette,
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
} from "lucide-react";
import { clsx } from "clsx";

const servicesList = [
  {
    name: "Website Design",
    href: "/services/website-design",
    description: "Bespoke UI/UX & landing page layouts",
    icon: Layout,
  },
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "Next.js & React web platforms",
    icon: Code,
  },
  {
    name: "Search Engine Optimization (SEO)",
    href: "/services/search-engine-optimization",
    description: "Organic rankings & traffic growth",
    icon: Search,
  },
  {
    name: "WordPress Development",
    href: "/services/wordpress-development",
    description: "Bespoke themes & Gutenberg blocks",
    icon: Globe,
  },
  {
    name: "Shopify Website Design",
    href: "/services/shopify-website-design",
    description: "High-converting Liquid themes",
    icon: ShoppingBag,
  },
  {
    name: "Ecommerce Development",
    href: "/services/ecommerce-development",
    description: "Scalable digital storefronts & carts",
    icon: ShoppingCart,
  },
  {
    name: "Logo & Graphic Design",
    href: "/services/graphic-design",
    description: "Logos, branding & design systems",
    icon: Palette,
  },
  {
    name: "CRM Software Development",
    href: "/services/crm-software-development",
    description: "Custom sales pipelines & portals",
    icon: Database,
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "iOS & Android cross-platform apps",
    icon: Smartphone,
  },
  {
    name: "Web Apps & SaaS",
    href: "/services/web-apps-saas",
    description: "Multi-tenant cloud platforms",
    icon: Cloud,
  },
  {
    name: "Google Business Profile",
    href: "/services/google-business-profile",
    description: "Local SEO & Google Maps pack",
    icon: MapPin,
  },
  {
    name: "Digital Wedding Invitation",
    href: "/services/digital-wedding-invitation",
    description: "Online wedding cards & WhatsApp RSVP in Jaipur",
    icon: Heart,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(false);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-nav py-4 shadow-subtle border-b border-teal-100/60"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group focus:outline-none">
          <Image
            src={getAssetPath("/logo.webp")}
            alt="LarkSpire Logo"
            width={280}
            height={65}
            sizes="(max-width: 768px) 180px, 280px"
            className="h-10 sm:h-11 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services Mega-Menu Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              prefetch={true}
              className={clsx(
                "inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2.5 min-h-[44px] rounded-lg px-2 apple-focus-ring",
                pathname.startsWith("/services")
                  ? "text-teal-700 font-semibold"
                  : "text-slate-700 hover:text-teal-700"
              )}
            >
              <span>Services</span>
              <ChevronDown
                className={clsx(
                  "w-4 h-4 transition-transform duration-200",
                  servicesDropdownOpen && "rotate-180 text-teal-700"
                )}
              />
            </Link>

            {/* Desktop Mega-Menu Dropdown Panel */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-48 w-[42rem] mt-2 p-5 bg-white rounded-2xl border border-teal-100 shadow-2xl grid grid-cols-2 gap-3 max-h-[75vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 scrollbar-thin">
                {servicesList.map((service) => {
                  const Icon = service.icon;
                  const isServiceActive = pathname === service.href;
                  return (
                    <Link
                      key={service.name}
                      href={service.href}
                      prefetch={true}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={clsx(
                        "group p-3 rounded-xl transition-all duration-200 flex items-start gap-3 hover:bg-teal-50 min-h-[44px] apple-focus-ring",
                        isServiceActive ? "bg-teal-50/80 border border-teal-200/60" : ""
                      )}
                    >
                      <div className="p-2 rounded-lg bg-teal-100/60 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {service.name}
                        </p>
                        <p className="text-[11px] text-slate-500 font-light leading-snug line-clamp-1">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
                <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <Link
                    href="/services"
                    prefetch={true}
                    onClick={() => setServicesDropdownOpen(false)}
                    className="text-teal-700 hover:underline flex items-center gap-1 py-2 min-h-[44px] apple-focus-ring"
                  >
                    <span>View All Services Landing Page &rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Link */}
          <Link
            href="/about"
            prefetch={true}
            className={clsx(
              "text-sm font-medium transition-colors duration-200 py-2.5 px-2 min-h-[44px] inline-flex items-center rounded-lg apple-focus-ring",
              pathname === "/about"
                ? "text-teal-700 font-semibold border-b-2 border-teal-700"
                : "text-slate-700 hover:text-teal-700"
            )}
          >
            About
          </Link>

          {/* Portfolio Link */}
          <Link
            href="/portfolio"
            prefetch={true}
            className={clsx(
              "text-sm font-medium transition-colors duration-200 py-2.5 px-2 min-h-[44px] inline-flex items-center rounded-lg apple-focus-ring",
              pathname === "/portfolio"
                ? "text-teal-700 font-semibold border-b-2 border-teal-700"
                : "text-slate-700 hover:text-teal-700"
            )}
          >
            Portfolio
          </Link>

          {/* Contact Link */}
          <Link
            href="/contact"
            prefetch={true}
            className={clsx(
              "text-sm font-medium transition-colors duration-200 py-2.5 px-2 min-h-[44px] inline-flex items-center rounded-lg apple-focus-ring",
              pathname === "/contact"
                ? "text-teal-700 font-semibold border-b-2 border-teal-700"
                : "text-slate-700 hover:text-teal-700"
            )}
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 min-h-[44px] rounded-full bg-teal-700 text-white text-xs font-semibold tracking-wide uppercase shadow-sm hover:bg-teal-800 transition-all duration-300 hover:shadow-card hover:scale-[1.02] apple-focus-ring"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-teal-700 hover:bg-teal-100/50 transition-colors apple-focus-ring"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-background/95 backdrop-blur-xl border-b border-teal-100 p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          {/* Services Mobile Accordion */}
          <div className="border-b border-slate-200/50 pb-2">
            <button
              onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
              className="w-full min-h-[44px] flex items-center justify-between text-lg font-medium text-slate-800 py-2.5 apple-focus-ring rounded-lg px-1"
            >
              <span className={pathname.startsWith("/services") ? "text-teal-700 font-bold" : ""}>
                Services ({servicesList.length})
              </span>
              <ChevronDown
                className={clsx(
                  "w-5 h-5 transition-transform duration-200",
                  mobileServicesAccordion && "rotate-180 text-teal-700"
                )}
              />
            </button>

            {mobileServicesAccordion && (
              <div className="pl-4 py-2 space-y-2.5 border-l-2 border-teal-200 my-2 max-h-[60vh] overflow-y-auto">
                <Link
                  href="/services"
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-bold text-teal-700 uppercase tracking-wider mb-3 py-2 min-h-[44px] flex items-center apple-focus-ring rounded-lg"
                >
                  &rarr; All Services Overview
                </Link>
                {servicesList.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-teal-700 py-2 min-h-[44px] apple-focus-ring rounded-lg px-1"
                  >
                    <service.icon className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            prefetch={true}
            onClick={() => setMobileMenuOpen(false)}
            className={clsx(
              "text-lg font-medium py-3 min-h-[44px] flex items-center border-b border-slate-200/50 apple-focus-ring rounded-lg px-1",
              pathname === "/about" ? "text-teal-700 font-bold" : "text-slate-800"
            )}
          >
            About
          </Link>

          <Link
            href="/portfolio"
            prefetch={true}
            onClick={() => setMobileMenuOpen(false)}
            className={clsx(
              "text-lg font-medium py-3 min-h-[44px] flex items-center border-b border-slate-200/50 apple-focus-ring rounded-lg px-1",
              pathname === "/portfolio" ? "text-teal-700 font-bold" : "text-slate-800"
            )}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            prefetch={true}
            onClick={() => setMobileMenuOpen(false)}
            className={clsx(
              "text-lg font-medium py-3 min-h-[44px] flex items-center border-b border-slate-200/50 apple-focus-ring rounded-lg px-1",
              pathname === "/contact" ? "text-teal-700 font-bold" : "text-slate-800"
            )}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            prefetch={true}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 min-h-[44px] flex items-center justify-center rounded-xl bg-teal-700 text-white text-center text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-teal-800 apple-focus-ring"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
