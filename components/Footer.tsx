import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A23]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <a href="/" aria-label="kNexo home" className="inline-flex items-center gap-3">
              <Logo className="h-8 w-auto" />
            </a>
            <p className="max-w-sm text-sm text-white/70">
              AI budgeting on WhatsApp — with real gamification and shared family finances.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-white">Product</div>
              <a className="block text-sm text-white/70 hover:text-white" href="/whatsapp-expense-tracker">
                WhatsApp tracker
              </a>
              <a className="block text-sm text-white/70 hover:text-white" href="/gamified-budgeting">
                Gamification
              </a>
              <a className="block text-sm text-white/70 hover:text-white" href="/ai-money-coach">
                AI Coach
              </a>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-white">Use cases</div>
              <a className="block text-sm text-white/70 hover:text-white" href="/couples-families">
                Couples & Families
              </a>
              <a className="block text-sm text-white/70 hover:text-white" href="/">
                AI budgeting app
              </a>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-white">Legal</div>
              <a className="block text-sm text-white/70 hover:text-white" href="/privacy">
                Privacy
              </a>
              <a className="block text-sm text-white/70 hover:text-white" href="/terms">
                Terms
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/55">© {new Date().getFullYear()} Nexus Fin (kNexo). All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/60 hover:text-white"
            >
              X
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/60 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@knexo.com"
              className="text-xs text-white/60 hover:text-white"
            >
              hello@knexo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}