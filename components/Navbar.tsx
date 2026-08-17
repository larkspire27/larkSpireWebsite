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
  TrendingUp,
  Image as ImageIcon,
  Search,
  Target,
} from "lucide-react";
import { clsx } from "clsx";

const servicesList = [
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "Next.js & React web platforms",
    icon: Code,
  },
  {
    name: "Graphic Design",
    href: "/services/graphic-design",
    description: "Visual identity & brand systems",
    icon: Palette,
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Omnichannel growth strategies",
    icon: TrendingUp,
  },
  {
    name: "Poster Design",
    href: "/services/poster-design",
    description: "Promotional artwork & print",
    icon: ImageIcon,
  },
  {
    name: "SEO Optimization",
    href: "/services/search-engine-optimization",
    description: "Organic rankings & traffic",
    icon: Search,
  },
  {
    name: "Meta Ads",
    href: "/services/meta-ads",
    description: "Facebook & Instagram campaigns",
    icon: Target,
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
            width={240}
            height={70}
            sizes="(max-width: 768px) 160px, 240px"
            className="h-14 sm:h-16 md:h-18 w-auto transition-transform duration-300 group-hover:scale-105 object-contain"
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
              className={clsx(
                "inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-1",
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
              <div className="absolute top-full -left-20 w-[32rem] mt-2 p-4 bg-white rounded-2xl border border-teal-100 shadow-floating grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
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
                        "group p-3 rounded-xl transition-all duration-200 flex items-start gap-3 hover:bg-teal-50",
                        isServiceActive ? "bg-teal-50/80 border border-teal-200/60" : ""
                      )}
                    >
                      <div className="p-2 rounded-lg bg-teal-100/60 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {service.name}
                        </p>
                        <p className="text-[11px] text-slate-500 font-light leading-snug">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
                <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <Link
                    href="/services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="text-teal-700 hover:underline flex items-center gap-1"
                  >
                    <span>View All Services Landing Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Link */}
          <Link
            href="/about"
            className={clsx(
              "text-sm font-medium transition-colors duration-200",
              pathname === "/about"
                ? "text-teal-700 font-semibold border-b-2 border-teal-700 pb-0.5"
                : "text-slate-700 hover:text-teal-700"
            )}
          >
            About
          </Link>

          {/* Portfolio Link */}
          <Link
            href="/portfolio"
            className={clsx(
              "text-sm font-medium transition-colors duration-200",
              pathname === "/portfolio"
                ? "text-teal-700 font-semibold border-b-2 border-teal-700 pb-0.5"
                : "text-slate-700 hover:text-teal-700"
            )}
          >
            Portfolio
          </Link>

          {/* Contact Link */}
          <Link
            href="/contact"
            className={clsx(
              "text-sm font-medium transition-colors duration-200",
              pathname === "/contact"
                ? "text-teal-700 font-semibold border-b-2 border-teal-700 pb-0.5"
                : "text-slate-700 hover:text-teal-700"
            )}
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-teal-700 text-white text-xs font-semibold tracking-wide uppercase shadow-sm hover:bg-teal-800 transition-all duration-300 hover:shadow-card hover:scale-[1.02]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-teal-700 hover:bg-teal-100/50 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-background/95 backdrop-blur-xl border-b border-teal-100 p-6 shadow-floating flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          {/* Services Mobile Accordion */}
          <div className="border-b border-slate-200/50 pb-2">
            <button
              onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
              className="w-full flex items-center justify-between text-lg font-medium text-slate-800 py-2"
            >
              <span className={pathname.startsWith("/services") ? "text-teal-700 font-bold" : ""}>
                Services
              </span>
              <ChevronDown
                className={clsx(
                  "w-5 h-5 transition-transform duration-200",
                  mobileServicesAccordion && "rotate-180 text-teal-700"
                )}
              />
            </button>

            {mobileServicesAccordion && (
              <div className="pl-4 py-2 space-y-3 border-l-2 border-teal-200 my-2">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-bold text-teal-700 uppercase tracking-wider mb-2"
                >
                  &rarr; All Services Overview
                </Link>
                {servicesList.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-slate-600 hover:text-teal-700 py-1"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={clsx(
              "text-lg font-medium py-2 border-b border-slate-200/50",
              pathname === "/about" ? "text-teal-700 font-bold" : "text-slate-800"
            )}
          >
            About
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className={clsx(
              "text-lg font-medium py-2 border-b border-slate-200/50",
              pathname === "/portfolio" ? "text-teal-700 font-bold" : "text-slate-800"
            )}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={clsx(
              "text-lg font-medium py-2 border-b border-slate-200/50",
              pathname === "/contact" ? "text-teal-700 font-bold" : "text-slate-800"
            )}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 rounded-xl bg-teal-700 text-white text-center text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-teal-800"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
