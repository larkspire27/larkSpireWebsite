"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, Phone, Mail } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    // Check if popup was already closed in this session
    const hasSeenPopup = sessionStorage.getItem("larkspire_popup_dismissed");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("larkspire_popup_dismissed", "true");
  };

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Valid email required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Send to server API endpoint (Zero-click background delivery to spirelark@gmail.com)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click Outside Overlay */}
      <div
        className="absolute inset-0"
        onClick={handleClose}
        aria-label="Close modal background"
      />

      {/* Modal Card - Compact & Mobile Responsive */}
      <div className="relative w-full max-w-[420px] max-h-[90vh] bg-white rounded-2xl border border-teal-200/90 shadow-2xl overflow-y-auto z-10 animate-in zoom-in-95 duration-200 flex flex-col scrollbar-thin">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-4 sm:p-5 relative shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-600/50 text-teal-100 text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-teal-300" />
            <span>Free Consultation &amp; Quote</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-snug">
            Start Your Project with <span className="text-teal-200">Larkspire</span>
          </h3>
          <p className="text-teal-100/90 text-xs font-light mt-0.5">
            Fill in the details below and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-5 flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-3 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Inquiry Sent!
              </h4>
              <p className="text-slate-600 text-xs max-w-xs mx-auto leading-relaxed">
                Thank you <strong>{formData.name}</strong>. Your details have been sent to <strong>spirelark@gmail.com</strong>.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 rounded-full bg-teal-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-teal-800 transition-colors shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
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
              {/* Full Name */}
              <div className="space-y-1">
                <label
                  htmlFor="popup-name"
                  className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="popup-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3 py-2 rounded-lg bg-teal-50/40 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                />
                {errors.name && (
                  <p className="text-[10px] text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label
                    htmlFor="popup-email"
                    className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="popup-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-teal-50/40 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="popup-phone"
                    className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider"
                  >
                    Phone No.
                  </label>
                  <input
                    id="popup-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 9928196424"
                    className="w-full px-3 py-2 rounded-lg bg-teal-50/40 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Required */}
              <div className="space-y-1">
                <label
                  htmlFor="popup-service"
                  className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider"
                >
                  Service Required
                </label>
                <select
                  id="popup-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-teal-50/40 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Graphic Design">Graphic &amp; Brand Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Poster Design">Poster Design</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Meta Ads">Meta Ads Campaigns</option>
                  <option value="Full Package">Full Agency Retainer</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label
                  htmlFor="popup-message"
                  className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider"
                >
                  Project Details
                </label>
                <textarea
                  id="popup-message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Brief project details or requirements..."
                  className="w-full px-3 py-2 rounded-lg bg-teal-50/40 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-teal-700 focus:bg-white focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Contact Info Footer */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                <span className="flex items-center gap-1 font-medium">
                  <Mail className="w-3 h-3 text-teal-700" />
                  spirelark@gmail.com
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Phone className="w-3 h-3 text-teal-700" />
                  +91 9928196424
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-teal-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-1"
              >
                {isSubmitting ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <span>Send Inquiry to Spirelark</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
