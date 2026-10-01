import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Larkspire",
  description: "Privacy policy and data protection terms for Larkspire Digital Agency.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-teal-100 shadow-subtle">
          <div className="space-y-3 border-b border-slate-200 pb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">Legal & Transparency</span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
            <p className="text-xs text-slate-500 font-mono">Last Updated: October 2026</p>
          </div>

          <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
              <p>
                When you submit a project inquiry or contact us on Larkspire.in, we collect information such as your name, email address, phone number, and project details. We use this information solely to communicate with you and provide our web development, design, and marketing services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. How We Use Your Data</h2>
              <p>
                Your data is used to process service inquiries, send project updates, and deliver requested digital solutions. We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Analytics & Cookies</h2>
              <p>
                We use privacy-conscious analytics tools (such as Google Analytics and Meta Pixel) to monitor website performance and improve user experience. You can manage or disable cookies via your browser settings.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Data Protection & Security</h2>
              <p>
                We implement industry-standard security measures to safeguard your personal data against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">5. Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy or wish to request data deletion, please contact us at{" "}
                <a href="mailto:spirelark@gmail.com" className="text-teal-700 font-semibold underline">
                  spirelark@gmail.com
                </a>{" "}
                or call us at +91 9928196424.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
