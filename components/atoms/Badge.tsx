"use client";

import React, { memo } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps {
  variant?: "primary" | "secondary" | "success" | "muted" | "gold";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}

export const Badge = memo(function Badge({
  variant = "primary",
  size = "sm",
  className,
  children,
}: BadgeProps) {
  const base = "inline-flex items-center font-bold uppercase tracking-wider rounded-full";

  const variants = {
    primary: "bg-primary/15 text-primary border border-primary/30",
    secondary: "bg-secondary text-primary border border-secondary",
    success: "bg-success-soft text-success border border-success/30",
    muted: "bg-muted text-muted-foreground border border-border",
    gold: "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/40",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  return <span className={twMerge(clsx(base, variants[variant], sizes[size], className))}>{children}</span>;
});
