import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { buildMetadata, FaqJsonLd, OrganizationJsonLd, ProductJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "kNexo for Couples & Families — Shared Budget + Missions (US/UK)",
  description:
    "A budget app for couples and families: shared visibility, shared goals, and shared missions with XP and rewards — powered by WhatsApp-first AI.",
  path: "/couples-family-budget",
});

export default function CouplesFamiliesPage() {
  return (
    <div className="min-h-dvh">
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main className="mx-auto max-w-6xl px-4 md:px-6">
        <OrganizationJsonLd />
        <ProductJsonLd
          name="kNexo for Couples & Families"
          description="Shared budgets + shared missions with WhatsApp-first AI and gamification."
        />
        <FaqJsonLd
          faqs={[
            {
              question: "Is kNexo a budget app for couples?",
              answer:
                "Yes. kNexo is built with couples & families mode for shared visibility, shared goals, and shared missions.",
            },
            {
              question: "How does shared budgeting work?",
              answer:
                "You can align on caps and goals, then track spending via WhatsApp while kNexo keeps both people updated with summaries and nudges.",
            },
          ]}
        />

        <section className="pt-14 pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="h-hero text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Shared money, without the spreadsheets —{" "}
                <span className="bg-gradient-to-r from-[#6C5CE7] to-[#00D2D3] bg-clip-text text-transparent">
                  built for couples
                </span>{" "}
                & families.
              </h1>
              <p className="mt-4 text-base text-white/75 md:text-lg">
                See the household picture, agree on goals, and complete missions together. kNexo keeps it simple on WhatsApp.
              </p>

              <div className="mt-7" id="waitlist">
                <WaitlistForm source="couples_families_page" buttonLabel="Join the waitlist" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4">
                <Card title="Shared goals" desc="One plan for the household — clear caps and targets." />
                <Card title="Shared missions" desc="Team challenges that build habits together." />
                <Card title="Less money stress" desc="Proactive nudges reduce surprises and arguments." />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0A0A23] p-4">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}