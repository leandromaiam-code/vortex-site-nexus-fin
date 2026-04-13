import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for kNexo waitlist and product updates.",
};

export default function PrivacyPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-white/70">
          Placeholder privacy policy. kNexo collects your email to notify you about product updates and early access.
        </p>
        <div className="mt-6 space-y-4 text-sm text-white/70">
          <p>We do not sell your personal information.</p>
          <p>You can unsubscribe at any time.</p>
          <p>Contact: privacy@knexo.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}