import * as React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  // Inline SVG from Brand Creator Output (compact horizontal)
  return (
    <svg
      className={className}
      viewBox="0 0 720 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="kNexo"
    >
      <defs>
        <linearGradient id="gP" x1="18" y1="18" x2="122" y2="122" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B7BFF" />
          <stop offset="0.55" stopColor="#6C5CE7" />
          <stop offset="1" stopColor="#00D2D3" />
        </linearGradient>
        <linearGradient id="gA" x1="72" y1="26" x2="120" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FECA57" />
          <stop offset="1" stopColor="#FF9F43" />
        </linearGradient>
        <linearGradient id="gW" x1="180" y1="28" x2="700" y2="112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2F0FF" />
          <stop offset="0.5" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#D6FFFF" />
        </linearGradient>
      </defs>

      <g>
        <rect x="18" y="18" width="104" height="104" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
        <path
          d="M46 76c0-17.673 14.327-32 32-32h16c8.837 0 16 7.163 16 16 0 8.837-7.163 16-16 16H78c-8.837 0-16 7.163-16 16 0 8.837 7.163 16 16 16h20"
          stroke="url(#gP)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M98 64c0 17.673-14.327 32-32 32H50c-8.837 0-16-7.163-16-16 0-8.837 7.163-16 16-16h16c8.837 0 16-7.163 16-16 0-8.837-7.163-16-16-16H46"
          stroke="url(#gP)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        <circle cx="106" cy="42" r="8.5" fill="url(#gA)" />
      </g>

      <g>
        <text
          x="150"
          y="92"
          fill="url(#gW)"
          fontSize="58"
          fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial"
          fontWeight="800"
          letterSpacing="-1.2"
        >
          kNexo
        </text>
        <text
          x="152"
          y="112"
          fill="rgba(207,251,251,0.75)"
          fontSize="14"
          fontFamily="Inter, system-ui"
          fontWeight="500"
        >
          AI budgeting on WhatsApp
        </text>
      </g>
    </svg>
  );
}