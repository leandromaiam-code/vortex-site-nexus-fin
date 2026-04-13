declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  // GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }

  // GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...params,
  });
}

export function trackScrollDepth() {
  if (typeof window === 'undefined') return;

  const sent = new Set<number>();
  const marks = [25, 50, 75, 90];

  const handler = () => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const height = doc.scrollHeight - window.innerHeight;
    if (height <= 0) return;

    const pct = Math.round((scrollTop / height) * 100);

    for (const m of marks) {
      if (pct >= m && !sent.has(m)) {
        sent.add(m);
        trackEvent('page_scroll_depth', { depth: m });
      }
    }
  };

  window.addEventListener('scroll', handler, { passive: true });
  handler();

  return () => window.removeEventListener('scroll', handler);
}