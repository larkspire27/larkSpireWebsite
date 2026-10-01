import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Larkspire",
  description: "Terms of service and project engagement conditions for Larkspire Digital Agency.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-teal-100 shadow-subtle">
          <div className="space-y-3 border-b border-slate-200 pb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">Legal & Transparency</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
            <p className="text-xs text-slate-500 font-mono">Last Updated: October 2026</p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Larkspire website or commissioning digital services from us, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. Scope of Services</h2>
              <p>
                Larkspire provides web engineering, custom web application development, graphic and brand design, SEO strategy, and Meta ads performance marketing. Specific project scope, timelines, and deliverables are governed by individual project agreements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property Ownership</h2>
              <p>
                Upon final invoice payment, clients retain 100% full intellectual property ownership of all custom source code, brand assets, and design collateral produced for their project.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Limitation of Liability</h2>
              <p>
                Larkspire strives for sub-second performance, high availability, and measurable marketing ROI. However, we are not liable for third-party hosting outages, algorithm changes, or external service interruptions beyond our direct control.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">5. Contact Information</h2>
              <p>
                For any inquiries regarding our service terms, please contact us at{" "}
                <a href="mailto:spirelark@gmail.com" className="text-teal-700 font-semibold underline">
                  spirelark@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
