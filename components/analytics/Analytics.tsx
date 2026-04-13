"use client";

import * as React from "react";
import { trackScrollDepth } from "@/lib/track";

export function Analytics() {
  React.useEffect(() => {
    const marks = new Set<number>();
    const depths = [25, 50, 75, 90];

    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      if (height <= 0) return;
      const pct = Math.round((scrollTop / height) * 100);

      for (const d of depths) {
        if (pct >= d && !marks.has(d)) {
          marks.add(d);
          trackScrollDepth(d);
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}