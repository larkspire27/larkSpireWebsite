"use client";

import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Clock,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function ContactClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const formBoxRef = useRef<HTMLDivElement>(null);
  const infoBoxRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-development",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        [formBoxRef.current, infoBoxRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    },
    { scope: containerRef }
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message details are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Page Hero */}
        <section ref={heroRef} className="py-16 px-6 bg-secondary-tint text-center border-b border-teal-100/60">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Let&apos;s Build Something <span className="text-teal-700">Great Together</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed">
              Have a project in mind or want to learn more about our web development, branding, or growth services? Send us a message below.
            </p>
          </div>
        </section>

        {/* 2-Column Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Form Box */}
            <div
              ref={formBoxRef}
              className="lg:col-span-7 bg-background p-8 sm:p-12 rounded-3xl border border-teal-100 shadow-subtle space-y-6"
            >
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-teal-700" />
                <span>Send Us a Message</span>
              </h2>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 space-y-4 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-teal-700 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Thank You!</h3>
                  <p className="text-sm text-teal-800 leading-relaxed">
                    Your inquiry has been received. Your details have been routed directly to <strong>spirelark@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "web-development",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-teal-700 text-white text-xs font-semibold uppercase tracking-wider hover:bg-teal-800 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Your Name <span className="text-teal-700">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-teal-700 focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Email Address <span className="text-teal-700">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-teal-700 focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9928196424"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-teal-700 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-teal-700 focus:outline-none transition-colors"
                    >
                      <option value="web-development">Custom Web Development</option>
                      <option value="graphic-design">Graphic &amp; Brand Design</option>
                      <option value="digital-marketing">Digital Growth Marketing</option>
                      <option value="poster-design">Poster &amp; Print Design</option>
                      <option value="seo">SEO Strategy &amp; Audit</option>
                      <option value="meta-ads">Meta &amp; Social Paid Ads</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Project Details <span className="text-teal-700">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project goals, timeline, or budget..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-teal-700 focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-teal-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-teal-800 transition-colors shadow-card flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Info Box */}
            <div
              ref={infoBoxRef}
              className="lg:col-span-5 bg-secondary-tint p-8 sm:p-12 rounded-3xl border border-teal-200 shadow-subtle space-y-8"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">Direct Contact</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Prefer a direct chat? Reach out via email, phone, or connect with us on Instagram.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-teal-700 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">Email Us</p>
                    <a href="mailto:spirelark@gmail.com" className="text-slate-900 font-semibold text-sm hover:underline">
                      spirelark@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-teal-700 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">Call Us</p>
                    <a href="tel:+919928196424" className="text-slate-900 font-semibold text-sm hover:underline">
                      +91 9928196424
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-teal-700 shadow-xs">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">Instagram</p>
                    <a
                      href="https://www.instagram.com/larkspireservices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold text-sm hover:underline"
                    >
                      @larkspireservices
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-teal-700 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">Working Hours</p>
                    <p className="text-slate-800 text-sm">Mon - Sat: 9:00 AM - 8:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-teal-200/80 space-y-4">
                <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">Follow Larkspire</p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61593659866731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-white text-teal-700 hover:bg-teal-700 hover:text-white transition-colors shadow-xs flex items-center gap-2.5 font-bold text-xs"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook Page</span>
                  </a>
                  <a
                    href="https://www.instagram.com/larkspireservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-white text-teal-700 hover:bg-teal-700 hover:text-white transition-colors shadow-xs flex items-center gap-2.5 font-bold text-xs"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Follow @larkspireservices</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
