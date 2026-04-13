import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | kNexo',
  description: 'Privacy policy for kNexo (placeholder).',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar ctaHref="/#waitlist" />
      <main className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-4 text-sm text-white/70">
          Placeholder. Add your final privacy policy here (data handling, retention, user rights, contact).
        </p>
      </main>
      <Footer />
    </div>
  );
}