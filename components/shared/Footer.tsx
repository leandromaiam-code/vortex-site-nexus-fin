import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-[#CFFBFB] bg-clip-text text-transparent">
                kNexo
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-md">
              AI budgeting on WhatsApp with real gamification and shared finances — turning money stress into daily wins.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <Link className="hover:text-white transition" href="/whatsapp-expense-tracker">
                  WhatsApp expense tracking
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/gamified-budgeting">
                  Gamified budgeting
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/couples-family-budget">
                  Couples & Families
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <Link className="hover:text-white transition" href="/privacy">
                  Privacy (placeholder)
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/terms">
                  Terms (placeholder)
                </Link>
              </li>
              <li>
                <a className="hover:text-white transition" href="mailto:hello@knexo.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} kNexo. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-white transition" href="#" aria-label="kNexo on X (placeholder)">
              X
            </a>
            <a className="hover:text-white transition" href="#" aria-label="kNexo on Instagram (placeholder)">
              Instagram
            </a>
            <a className="hover:text-white transition" href="#" aria-label="kNexo on TikTok (placeholder)">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}