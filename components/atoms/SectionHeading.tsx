"use client";

import React, { memo } from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const SectionHeading = memo(function SectionHeading({
  eyebrow,
  title,
  subtitle,
  actionText,
  onAction,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-end justify-between ${className}`}>
      <div>
        {eyebrow && (
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-0.5 font-heading text-2xl font-black tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {actionText && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="text-xs font-bold text-primary transition-opacity hover:opacity-80 active:scale-95"
        >
          {actionText}
        </button>
      )}
    </div>
  );
});
