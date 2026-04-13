"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { trackWaitlistSignup } from "@/lib/track";

type Props = {
  source: string; // page identifier
  buttonLabel?: string;
};

export function WaitlistForm({ source, buttonLabel = "Join the waitlist" }: Props) {
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState<string>("US");
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = React.useState<string>("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setMessage("");

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      setStatus("error");
      setMessage("Missing Supabase env vars. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
        method: "POST",
        headers: {
          apikey: anonKey,
          Authorization: `Bearer ${anonKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify([
          {
            email,
            country,
            source,
            created_at: new Date().toISOString(),
            user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
            referrer: typeof document !== "undefined" ? document.referrer : null,
            utm_source: getParam("utm_source"),
            utm_medium: getParam("utm_medium"),
            utm_campaign: getParam("utm_campaign"),
            utm_term: getParam("utm_term"),
            utm_content: getParam("utm_content"),
          },
        ]),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Request failed");
      }

      setStatus("ok");
      setMessage("You're on the list. We'll email you early access.");
      trackWaitlistSignup({ source, country });
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage("Something went wrong. Try again in a moment.");
      // Optional: console for debugging
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="grid gap-3 md:grid-cols-[1fr_140px_190px]">
        <label className="sr-only" htmlFor={`email-${source}`}>
          Email
        </label>
        <input
          id={`email-${source}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          inputMode="email"
          autoComplete="email"
          className="h-12 w-full rounded-xl bg-white/5 px-4 text-sm text-white placeholder:text-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#00D2D3]/60"
          aria-label="Email address"
        />

        <label className="sr-only" htmlFor={`country-${source}`}>
          Country
        </label>
        <select
          id={`country-${source}`}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="h-12 w-full rounded-xl bg-white/5 px-3 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#00D2D3]/60"
          aria-label="Country"
        >
          <option value="US">US</option>
          <option value="UK">UK</option>
        </select>

        <Button
          as="button"
          variant="primary"
          size="md"
          className="h-12"
          ariaLabel={buttonLabel}
          eventName="cta_click_waitlist"
          onClick={() => {}}
        >
          {loading ? "Joining..." : buttonLabel}
        </Button>
      </div>

      <p className="mt-3 text-xs text-white/60">
        No spam. Early access + launch perks. By joining, you agree to receive product updates.
      </p>

      {status !== "idle" ? (
        <div
          className={`mt-3 rounded-xl border px-4 py-3 text-sm ${
            status === "ok"
              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
              : "border-rose-400/20 bg-rose-400/10 text-rose-100"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}

function getParam(key: string) {
  if (typeof window === "undefined") return null;
  const v = new URLSearchParams(window.location.search).get(key);
  return v ? v : null;
}