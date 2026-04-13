import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for kNexo waitlist and product updates.",
};

export default function TermsPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-4 text-white/70">
          Placeholder terms. By joining the waitlist, you agree to receive emails about kNexo.
        </p>
        <div className="mt-6 space-y-4 text-sm text-white/70">
          <p>kNexo is in pre-launch. Features may change.</p>
          <p>Contact: support@knexo.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}