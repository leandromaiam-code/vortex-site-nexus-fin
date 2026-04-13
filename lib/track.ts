type TrackPayload = Record<string, any>;

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function track(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;

  // GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  // GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export function trackWaitlistSignup(payload: TrackPayload = {}) {
  track("waitlist_signup", payload);
}

export function trackCtaClick(eventName = "cta_click", payload: TrackPayload = {}) {
  track(eventName, payload);
}

export function trackScrollDepth(depth: number) {
  track("page_scroll_depth", { depth });
}