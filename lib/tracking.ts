declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function track(event: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;

  // GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  // GA4 gtag
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params || {});
  }
}

export function trackCtaClick({ label, location }: { label: string; location: string }) {
  track("cta_click", { label, location });
}

export function trackWaitlistSignup({
  market,
  sourcePage,
  persona,
}: {
  market?: string;
  sourcePage?: string;
  persona?: string;
}) {
  track("waitlist_signup", { market, sourcePage, persona });
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100) {
  track("page_scroll_depth", { depth });
}