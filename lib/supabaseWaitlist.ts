export type WaitlistPayload = {
  email: string;
  market?: "US" | "UK" | "INTL";
  source_page?: string;
  persona?: string;
};

export async function insertWaitlist(payload: WaitlistPayload) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  // Requires a table: public.waitlist (email text, market text, source_page text, persona text, created_at timestamptz default now()).
  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to insert waitlist");
  }

  return true;
}