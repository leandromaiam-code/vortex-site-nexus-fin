import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "kNexo — AI Budgeting on WhatsApp (UK) | Join the Waitlist",
  description:
    "A budgeting app for the UK that works inside WhatsApp. Track spending by texting, get proactive AI insights, and stay consistent with missions and XP. Join the UK waitlist.",
  alternates: { canonical: "/uk" },
  openGraph: {
    title: "kNexo — AI Budgeting on WhatsApp (UK)",
    description: "Text your spending on WhatsApp. Get AI insights + missions + XP. Join the UK waitlist.",
    url: "/uk",
    images: [{ url: "/og/knexo-og.png", width: 1200, height: 630, alt: "kNexo UK" }],
  },
};

export default function UKLanding() {
  return (
    <div>
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6C5CE7]/28 blur-3xl" />
            <div className="absolute -bottom-40 right-[-80px] h-[520px] w-[520px] rounded-full bg-[#00D2D3]/16 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#00D2D3]" />
                  UK launch • Privacy-minded • Pounds-ready
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  A <span className="bg-gradient-to-r from-[#8B7BFF] via-white to-[#00D2D3] bg-clip-text text-transparent">budgeting app for the UK</span>{" "}
                  that lives in WhatsApp.
                </h1>

                <p className="mt-4 text-base text-white/70 md:text-lg">
                  Text spending like “£24 groceries”. kNexo categorises it, spots trends, and nudges you with missions and XP—without spreadsheets.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="#waitlist">
                    <Button size="lg">Join the waitlist</Button>
                  </Link>
                  <Link href="/whatsapp-expense-tracker">
                    <Button size="lg" variant="outline">See WhatsApp demo</Button>
                  </Link>
                </div>

                <div className="mt-4 text-sm text-white/55">
                  Privacy & security: minimal data collection, clear controls (placeholders—final policy will ship pre-launch).
                </div>
              </div>

              <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-5">
                <div className="text-sm font-semibold">Example: weekly summary</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/6 p-4">
                    <div className="text-xs text-white/55">Weekly spend</div>
                    <div className="mt-1 text-xl font-semibold">£428</div>
                  </div>
                  <div className="rounded-2xl bg-white/6 p-4">
                    <div className="text-xs text-white/55">Top category</div>
                    <div className="mt-1 text-xl font-semibold">Groceries</div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-[#00D2D3]/10 p-4 text-sm text-white/85">
                  Heads up: takeaways are up 18% vs last week. Want a 5-day mission to reset?
                </div>
                <div className="mt-3 text-xs text-white/45">{/* placeholder */} UK mock data (placeholder).</div>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl px-4 pb-20">
          <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Join the UK waitlist</h2>
                <p className="mt-3 text-sm text-white/70">Get early access + launch perks for the UK rollout.</p>
              </div>
              <WaitlistForm market="UK" sourcePage="/uk" persona="core_uk" headline="Join the UK waitlist" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}