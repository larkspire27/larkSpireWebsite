"use client";

import React, { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Larkspire transformed our online presence completely. Our new custom web platform is blazingly fast, and our conversion rate jumped by 42% in the first month.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Vanguard Tech",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Working with Larkspire on our visual identity and Meta ads was seamless. Their design aesthetic is world-class, and their ad campaigns delivered 3.8x ROAS.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Aura Apparel",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "The poster designs and print collateral Larkspire created for our global summit received unanimous praise. They bring true artistic vision combined with speed.",
    author: "Sophia Lin",
    role: "Creative Director",
    company: "Nexus Events",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Header animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 px-6 bg-transparent border-t border-slate-200/60 relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div ref={headingRef} className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Trusted by Brands That <br />
            <span className="text-teal-700">Demand Excellence</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how our tailored web engineering, graphic design, and performance marketing drive measurable results.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl glass-card border border-teal-200/60 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-teal-200" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold text-sm flex items-center justify-center">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.author}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {item.role}, <span className="text-teal-700 font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
