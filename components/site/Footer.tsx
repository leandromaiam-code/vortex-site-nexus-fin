import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050513]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-white/65">
              Accessible financial intelligence that changes lives. WhatsApp-first AI budgeting + real gamification + shared finances.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-white">Product</div>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                <li><Link className="hover:text-white" href="/whatsapp-expense-tracker">WhatsApp tracking</Link></li>
                <li><Link className="hover:text-white" href="/gamified-budgeting">Gamification</Link></li>
                <li><Link className="hover:text-white" href="/couples-and-families">Couples & families</Link></li>
                <li><Link className="hover:text-white" href="/ai-money-coach">AI money coach</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                <li><Link className="hover:text-white" href="/">Home</Link></li>
                <li><Link className="hover:text-white" href="/#waitlist">Waitlist</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                <li><Link className="hover:text-white" href="/privacy">Privacy</Link></li>
                <li><Link className="hover:text-white" href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} kNexo (Nexus Fin). All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="https://x.com" target="_blank" rel="noreferrer">X</a>
            <a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a className="hover:text-white" href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}