import * as React from "react";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="kNexo icon"
    >
      <defs>
        <linearGradient id="gPrimaryI" x1="34" y1="24" x2="126" y2="136" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B7BFF" />
          <stop offset="0.55" stopColor="#6C5CE7" />
          <stop offset="1" stopColor="#00D2D3" />
        </linearGradient>
        <linearGradient id="gAccentI" x1="70" y1="38" x2="122" y2="122" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FECA57" />
          <stop offset="1" stopColor="#FF9F43" />
        </linearGradient>
      </defs>

      <rect x="28" y="28" width="104" height="104" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
      <path
        d="M56 86c0-17.673 14.327-32 32-32h16c8.837 0 16 7.163 16 16 0 8.837-7.163 16-16 16H88c-8.837 0-16 7.163-16 16 0 8.837 7.163 16 16 16h20"
        stroke="url(#gPrimaryI)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M108 74c0 17.673-14.327 32-32 32H60c-8.837 0-16-7.163-16-16 0-8.837 7.163-16 16-16h16c8.837 0 16-7.163 16-16 0-8.837-7.163-16-16-16H56"
        stroke="url(#gPrimaryI)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <circle cx="116" cy="52" r="8.5" fill="url(#gAccentI)" />
    </svg>
  );
}

export function LogoWord({ className }: { className?: string }) {
  return (
    <div className={className}>
      <span className="font-semibold tracking-tight">kNexo</span>
    </div>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={["flex items-center gap-2", className].filter(Boolean).join(" ")}>
      <LogoMark className="h-9 w-9" />
      <div className="leading-none">
        <div className="font-semibold tracking-tight text-white">kNexo</div>
        <div className="text-xs text-white/60">AI budgeting on WhatsApp</div>
      </div>
    </div>
  );
}