"use client";

import React, { memo } from "react";

export interface SurahBadgeProps {
  number: number | string;
  className?: string;
}

export const SurahBadge = memo(function SurahBadge({ number, className = "" }: SurahBadgeProps) {
  return (
    <div
      className={`relative flex h-11 w-11 shrink-0 items-center justify-center text-primary ${className}`}
    >
      <svg viewBox="0 0 52 52" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M26 3 32 9 41 8 40 17 47 23 40 29 41 38 32 37 26 49 20 37 11 38 12 29 5 23 12 17 11 8 20 9Z"
          fill="none"
          className="stroke-primary"
          strokeWidth="1.5"
        />
      </svg>
      <span className="font-heading text-sm font-extrabold text-foreground">{number}</span>
    </div>
  );
});
