import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin if running in client/browser context
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Force 3D hardware acceleration & batch ScrollTrigger updates for zero reflow
  gsap.config({ force3D: true, autoSleep: 60 });
  ScrollTrigger.config({ limitCallbacks: true, syncInterval: 100 });
}

/**
 * Check if the user has requested reduced motion via system accessibility preferences
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Common animation configurations adhering to Larkspire brand guidelines
 */
export const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.15,
};

export { gsap, ScrollTrigger };

