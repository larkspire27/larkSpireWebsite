"use client";

import React, { useState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const formBoxRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        formBoxRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formBoxRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message or project outline.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", service: "Web Development", message: "", honeypot: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-background relative border-t border-slate-200/60"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Start Your Project with <span className="text-teal-700">Larkspire</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a project in mind? Fill out the form below and our strategy team will reach out within 24 hours.
          </p>
        </div>

        {/* Contact Form Box */}
        <div
          ref={formBoxRef}
          className="bg-white p-8 sm:p-12 rounded-3xl border border-teal-100 shadow-card max-w-3xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in duration-500">
              <CheckCircle2 className="w-16 h-16 text-teal-700 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                Thank you for reaching out. A Larkspire strategist will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-teal-100 text-teal-700 font-semibold text-xs uppercase tracking-wider hover:bg-teal-200 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Invisible Honeypot anti-bot field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-full-name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-full-name"
                    name="name"
                    type="text"
                    aria-label="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3.5 min-h-[44px] rounded-xl bg-teal-50/50 border border-slate-200 focus:border-teal-700 focus:bg-white transition-all text-slate-900 text-sm apple-focus-ring"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="form-email-address" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-email-address"
                    name="email"
                    type="email"
                    aria-label="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3.5 min-h-[44px] rounded-xl bg-teal-50/50 border border-slate-200 focus:border-teal-700 focus:bg-white transition-all text-slate-900 text-sm apple-focus-ring"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label htmlFor="form-service-needed" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Service Needed
                </label>
                <select
                  id="form-service-needed"
                  name="service"
                  aria-label="Service Needed"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3.5 min-h-[44px] rounded-xl bg-teal-50/50 border border-slate-200 focus:border-teal-700 focus:bg-white transition-all text-slate-900 text-sm apple-focus-ring"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Poster Design">Poster Design</option>
                  <option value="SEO">SEO Optimization</option>
                  <option value="Meta Ads">Meta Ads Campaigns</option>
                  <option value="Full Package">Full Agency Retainer</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="form-project-details" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="form-project-details"
                  name="message"
                  rows={4}
                  aria-label="Project Details"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project timeline, goals, or requirements..."
                  className="w-full px-4 py-3.5 rounded-xl bg-teal-50/50 border border-slate-200 focus:border-teal-700 focus:bg-white transition-all text-slate-900 text-sm resize-none apple-focus-ring"
                />
                {errors.message && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 min-h-[44px] rounded-full bg-teal-700 text-white font-bold text-sm tracking-wide uppercase shadow-card hover:bg-teal-800 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 disabled:opacity-50 apple-focus-ring"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
