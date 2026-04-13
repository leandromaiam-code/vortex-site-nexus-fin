"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { insertWaitlist } from "@/lib/supabaseWaitlist";
import { trackWaitlistSignup } from "@/lib/tracking";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function WaitlistForm({
  market = "INTL",
  sourcePage = "unknown",
  persona,
  headline = "Join the waitlist",
  subcopy = "Get early access + launch perks. No spam.",
}: {
  market?: "US" | "UK" | "INTL";
  sourcePage?: string;
  persona?: string;
  headline?: string;
  subcopy?: string;
}) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setStatus("error");
      setError("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    try {
      await insertWaitlist({ email, market, source_page: sourcePage, persona });
      trackWaitlistSignup({ market, sourcePage, persona });
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      // Optional: console for debugging
      console.error(err?.message || err);
    }
  }

  return (
    <div className="rounded-2xl border border-white/12 bg-white/6 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.45)]">
      <div className="text-lg font-semibold text-white">{headline}</div>
      <div className="mt-1 text-sm text-white/65">{subcopy}</div>

      {status === "success" ? (
        <div className="mt-4 rounded-xl bg-emerald-500/15 px-4 py-3 text-sm text-emerald-200">
          You’re on the list. We’ll email you when kNexo opens.
        </div>
      ) : (
        <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full flex-1 rounded-xl border border-white/12 bg-[#07071a]/40 px-4 text-sm text-white placeholder:text-white/45 shadow-inner focus:border-[#00D2D3]/60"
            aria-label="Email address"
          />
          <Button type="submit" size="lg" disabled={status === "loading"} aria-label="Join the waitlist">
            {status === "loading" ? "Joining..." : "Join the waitlist"}
          </Button>
        </form>
      )}

      {status === "error" && error && (
        <div className="mt-3 text-sm text-red-200">{error}</div>
      )}

      <div className="mt-3 text-xs text-white/50">
        By joining, you agree to receive product updates. Unsubscribe anytime.
      </div>
    </div>
  );
}