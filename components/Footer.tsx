"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/basePath";
import { Mail, Phone } from "lucide-react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-700 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-200/60">
        {/* Column 1: Brand Info */}
        <div className="space-y-6">
          <Link href="/" className="inline-block focus:outline-none">
            <Image
              src={getAssetPath("/logo.webp")}
              alt="LarkSpire Logo"
              width={240}
              height={70}
              sizes="(max-width: 768px) 160px, 240px"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain"
            />
          </Link>

          <p className="text-slate-600 text-sm leading-relaxed font-light">
            Larkspire is a boutique digital agency crafting high-impact web experiences, visual identities, and performance marketing.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61593659866731"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-700 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/larkspireservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-700 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:spirelark@gmail.com"
              className="w-9 h-9 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-700 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+919928196424"
              className="w-9 h-9 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-700 hover:text-white transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/services" className="hover:text-teal-700 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-teal-700 transition-colors">
                Our Process
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-teal-700 transition-colors">
                Portfolio &amp; Work
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="hover:text-teal-700 transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-700 transition-colors">
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Capabilities */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Capabilities
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/services/web-development" prefetch={true} className="hover:text-teal-700 transition-colors">
                Custom Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/graphic-design" prefetch={true} className="hover:text-teal-700 transition-colors">
                Graphic &amp; Brand Design
              </Link>
            </li>
            <li>
              <Link href="/services/digital-marketing" prefetch={true} className="hover:text-teal-700 transition-colors">
                Digital Growth Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/poster-design" prefetch={true} className="hover:text-teal-700 transition-colors">
                Poster &amp; Print Design
              </Link>
            </li>
            <li>
              <Link href="/services/search-engine-optimization" prefetch={true} className="hover:text-teal-700 transition-colors">
                SEO Strategy
              </Link>
            </li>
            <li>
              <Link href="/services/meta-ads" prefetch={true} className="hover:text-teal-700 transition-colors">
                Meta &amp; Paid Ads
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Direct Contact */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-teal-700 shrink-0" />
              <a href="mailto:spirelark@gmail.com" className="hover:text-teal-700 transition-colors">
                spirelark@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-teal-700 shrink-0" />
              <a href="tel:+919928196424" className="hover:text-teal-700 transition-colors">
                +91 9928196424
              </a>
            </li>
            <li className="flex items-center gap-3">
              <InstagramIcon className="w-4 h-4 text-teal-700 shrink-0" />
              <a
                href="https://www.instagram.com/larkspireservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-700 transition-colors"
              >
                @larkspireservices
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FacebookIcon className="w-4 h-4 text-teal-700 shrink-0" />
              <a
                href="https://www.facebook.com/profile.php?id=61593659866731"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-700 transition-colors"
              >
                Facebook Page
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <p>&copy; 2026 Larkspire Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}
