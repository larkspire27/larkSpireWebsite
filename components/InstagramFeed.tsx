"use client";

import Script from "next/script";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function InstagramFeed() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white relative border-b border-slate-800 overflow-hidden">
      {/* Elfsight Platform Script */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-widest">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Social Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Follow Us On <span className="text-teal-400">Instagram</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Check out our latest design explorations, client highlights, and brand updates on{" "}
            <a
              href="https://www.instagram.com/larkspireservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline font-medium"
            >
              @larkspireservices
            </a>
            .
          </p>
        </div>

        {/* Elfsight Widget Container */}
        <div className="w-full rounded-2xl overflow-hidden min-h-[320px]">
          <div
            className="elfsight-app-49fe9481-f435-4297-96b7-7d92bc908d04"
            data-elfsight-app-lazy=""
          />
        </div>
      </div>
    </section>
  );
}
