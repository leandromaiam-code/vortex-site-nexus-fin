import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "kNexo — AI Money Coach on WhatsApp (US/UK)",
  description:
    "An AI money coach that messages you proactively on WhatsApp: insights, alerts, and missions that improve habits. Join the kNexo waitlist.",
  alternates: { canonical: "/ai-money-coach" },
};

export default function AiCoachPage() {
  return (
    <div>
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Your{" "}
                <span className="bg-gradient-to-r from-[#00D2D3] via-white to-[#8B7BFF] bg-clip-text text-transparent">
                  AI money coach
                </span>{" "}
                — inside WhatsApp.
              </h1>
              <p className="mt-4 text-base text-white/70 md:text-lg">
                kNexo doesn’t just answer questions. It notices changes, alerts you early, and suggests missions that fit your real spending patterns.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="#waitlist"><Button size="lg">Join the waitlist</Button></Link>
                <Link href="/whatsapp-expense-tracker"><Button size="lg" variant="outline">See WhatsApp flow</Button></Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/6 p-6">
              <div className="text-sm font-semibold">Proactive alert (mock)</div>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-[#00D2D3]/10 p-4 text-sm text-white/85">
                  Heads up: subscriptions are up $19 vs last month. Want to review and cancel anything?
                </div>
                <div className="rounded-2xl bg-[#6C5CE7]/14 p-4 text-sm text-white/85">
                  Suggestion: set a weekly “Fun money” cap and earn +80 XP if you stay under it 2 weeks in a row.
                </div>
              </div>
              <div className="mt-3 text-xs text-white/45">{/* placeholder */} AI coaching UI mock (placeholder).</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="text-2xl font-semibold tracking-tight">What “proactive” means</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Early warnings", d: "Spot drift before it becomes a problem." },
              { t: "Opportunities", d: "Find easy wins based on your patterns." },
              { t: "Personal missions", d: "Missions adapt to what you spend on most." },
              { t: "Clear explanations", d: "Know what changed and why." },
              { t: "Better habits", d: "Gamification reinforces consistency." },
              { t: "Household-friendly", d: "Shared goals and co-op missions (optional)." },
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
                <h2 className="text-3xl font-semibold tracking-tight">Get coached automatically</h2>
                <p className="mt-3 text-sm text-white/70">Join the waitlist for proactive AI insights and missions.</p>
              </div>
              <WaitlistForm market="INTL" sourcePage="/ai-money-coach" persona="ai_coach" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}