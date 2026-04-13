import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "kNexo for Couples & Families — Shared Budget + Missions (US/UK)",
  description:
    "A budget app for couples and families: shared visibility, shared goals, and co-op missions—powered by WhatsApp-first tracking and proactive AI insights. Join the waitlist.",
  alternates: { canonical: "/couples-and-families" },
};

export default function CouplesFamiliesPage() {
  return (
    <div>
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Shared money, fewer fights:{" "}
                <span className="bg-gradient-to-r from-[#8B7BFF] via-white to-[#00D2D3] bg-clip-text text-transparent">
                  couples & family budgeting
                </span>{" "}
                with missions.
              </h1>
              <p className="mt-4 text-base text-white/70 md:text-lg">
                kNexo brings shared budgets into WhatsApp. See what’s happening, align on goals, and complete co-op missions that turn money stress into daily wins.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="#waitlist"><Button size="lg">Join the waitlist</Button></Link>
                <Link href="/gamified-budgeting"><Button size="lg" variant="outline">See missions & XP</Button></Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/6 p-6">
              <div className="text-sm font-semibold">Household snapshot (mock)</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/6 p-4">
                  <div className="text-xs text-white/55">Shared goal</div>
                  <div className="mt-1 text-sm font-semibold">Emergency fund</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 w-[40%] rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#00D2D3]" />
                  </div>
                  <div className="mt-2 text-xs text-white/55">$2,000 / $5,000</div>
                </div>
                <div className="rounded-2xl bg-white/6 p-4">
                  <div className="text-xs text-white/55">Co-op mission</div>
                  <div className="mt-1 text-sm font-semibold">No takeout week</div>
                  <div className="mt-2 text-xs text-white/60">Reward: +120 XP each</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-white/45">{/* placeholder */} Shared mode UI mock (placeholder).</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="text-2xl font-semibold tracking-tight">Designed for households</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Shared visibility", d: "See household spending clearly, with privacy controls (planned)." },
              { t: "Shared goals", d: "Goals you can actually stick to—powered by missions and streaks." },
              { t: "Less admin", d: "Log in WhatsApp, automatically categorised." },
              { t: "Proactive alerts", d: "Catch drift early, before it becomes conflict." },
              { t: "Co-op missions", d: "Turn goals into teamwork, not blame." },
              { t: "Flexible roles", d: "Works for partners, roommates, and families." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-white/12 bg-white/6 p-5">
                <div className="text-base font-semibold">{x.t}</div>
                <p className="mt-1 text-sm text-white/65">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl px-4 pb-20">
          <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Get early access for your household</h2>
                <p className="mt-3 text-sm text-white/70">Join the waitlist for shared budgeting + co-op missions.</p>
              </div>
              <WaitlistForm market="INTL" sourcePage="/couples-and-families" persona="couples_families" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}