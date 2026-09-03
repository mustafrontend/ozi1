"use client";

import React, { memo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg" | "icon";
  children?: React.ReactNode;
}

export const Button = memo(function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-500 shadow-md shadow-primary/20",
    secondary:
      "bg-secondary text-primary hover:bg-secondary/90 border border-primary/20",
    outline:
      "border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card text-foreground hover:bg-slate-50 dark:hover:bg-muted",
    ghost:
      "bg-transparent text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-muted",
    gold:
      "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold shadow-lg shadow-amber-500/25",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-theme gap-1.5",
    md: "px-4 py-3 text-sm rounded-theme gap-2",
    lg: "px-5 py-4 text-base rounded-card gap-2.5",
    icon: "h-10 w-10 p-0 rounded-full",
  };

  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
});
