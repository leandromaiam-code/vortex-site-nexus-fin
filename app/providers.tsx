'use client';

import * as React from 'react';
import { trackScrollDepth } from '@/lib/analytics';

export function Providers({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const cleanup = trackScrollDepth();
    return () => cleanup?.();
  }, []);

  return <>{children}</>;
}