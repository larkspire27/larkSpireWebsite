// Meta Pixel ID
export const FB_PIXEL_ID = "1057934516854935";

// Declare fbq on window for TypeScript
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}

/**
 * Track a standard Meta Pixel event
 * @see https://developers.facebook.com/docs/meta-pixel/reference#standard-events
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
): void => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};

/**
 * Track a custom Meta Pixel event
 */
export const trackCustomEvent = (
  eventName: string,
  params?: Record<string, unknown>
): void => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
};

// ─── Pre-built event helpers ───────────────────────────────────

/** Fire on every page navigation (already auto-fired by base pixel) */
export const trackPageView = (): void => trackEvent("PageView");

/** Fire when a service page is viewed */
export const trackViewContent = (
  contentName: string,
  contentCategory?: string
): void =>
  trackEvent("ViewContent", {
    content_name: contentName,
    content_category: contentCategory || "Service",
  });

/** Fire when a lead form is submitted */
export const trackLead = (
  source: string,
  service?: string
): void =>
  trackEvent("Lead", {
    content_name: source, // "ContactForm" | "LeadPopup"
    content_category: service || "General Inquiry",
    value: 1,
    currency: "INR",
  });

/** Fire when someone clicks a CTA button */
export const trackCTAClick = (
  ctaLabel: string,
  location: string
): void =>
  trackCustomEvent("CTAClick", {
    cta_label: ctaLabel,
    location: location,
  });

/** Fire when someone clicks the email copy button */
export const trackEmailCopy = (): void =>
  trackCustomEvent("EmailCopy", { method: "clipboard" });

/** Fire when someone clicks phone number */
export const trackPhoneClick = (location: string): void =>
  trackCustomEvent("PhoneClick", { location });

/** Fire when someone clicks a social media link */
export const trackSocialClick = (platform: string): void =>
  trackCustomEvent("SocialClick", { platform });

/** Fire when the Lead Popup opens */
export const trackPopupOpen = (): void =>
  trackCustomEvent("LeadPopupOpen");

/** Fire when the Lead Popup is dismissed */
export const trackPopupClose = (): void =>
  trackCustomEvent("LeadPopupClose");

/** Track scroll depth milestones */
export const trackScrollDepth = (percentage: number): void =>
  trackCustomEvent("ScrollDepth", { depth: `${percentage}%` });
