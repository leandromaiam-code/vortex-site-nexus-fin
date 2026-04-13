import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | kNexo',
  description: 'Terms of service for kNexo (placeholder).',
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar ctaHref="/#waitlist" />
      <main className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <h1 className="text-3xl font-semibold text-white">Terms of Service</h1>
        <p className="mt-4 text-sm text-white/70">
          Placeholder. Add your final terms here (acceptable use, disclaimers, limitations, etc.).
        </p>
      </main>
      <Footer />
    </div>
  );
}