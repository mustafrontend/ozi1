"use client";

import React, { memo } from "react";
import { PrayerTimeItem } from "@/lib/types";

interface PrayerTimesListProps {
  times: PrayerTimeItem[];
}

export const PrayerTimeCard = memo(function PrayerTimeCard({ times }: PrayerTimesListProps) {
  return (
    <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
      {times.map(({ id, name, time, active }) => (
        <div
          key={id}
          className={
            active
              ? "relative min-w-[94px] overflow-hidden rounded-theme border border-primary bg-primary px-3 py-3 text-center shadow-lg shadow-primary/20 transition-transform active:scale-95"
              : "min-w-[84px] rounded-theme border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-muted px-3 py-3 text-center transition-colors"
          }
        >
          {active && (
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary-foreground animate-ping" />
          )}
          <p
            className={
              active
                ? "text-[11px] font-extrabold text-primary-foreground"
                : "text-[11px] font-semibold text-muted-foreground"
            }
          >
            {name}
          </p>
          <p
            className={
              active
                ? "mt-1 font-heading text-base font-black text-primary-foreground"
                : "mt-1 font-heading text-base font-bold text-foreground"
            }
          >
            {time}
          </p>
        </div>
      ))}
    </div>
  );
});
