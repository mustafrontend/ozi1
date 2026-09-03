"use client";

import React, { memo } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SkeletonProps {
  className?: string;
}

export const Skeleton = memo(function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "animate-pulse rounded-theme bg-slate-200/80 dark:bg-slate-800/80",
          className
        )
      )}
    />
  );
});
