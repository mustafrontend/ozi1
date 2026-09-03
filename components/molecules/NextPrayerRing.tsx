"use client";

import React, { memo } from "react";
import { Sparkles, BookOpen, ArrowRight, BellRing } from "lucide-react";
import Link from "next/link";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";

interface NextPrayerRingProps {
  currentPrayerName: string;
  nextPrayerName: string;
  nextPrayerTime: string;
  formattedRemaining: string;
  progressPercent: number;
}

export const NextPrayerRing = memo(function NextPrayerRing({
  nextPrayerName,
  nextPrayerTime,
  formattedRemaining,
  progressPercent,
}: NextPrayerRingProps) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="relative overflow-hidden rounded-2xl border-[0.5px] border-primary/30 bg-card p-5 shadow-card">
      <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border border-primary/15" />
      <div className="absolute -right-4 -top-6 h-32 w-32 rounded-full border border-primary/10" />
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <div className="relative flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            <Badge variant="primary">Sıradaki Namaz</Badge>
          </div>

          <h1 className="mt-2 font-heading text-3xl font-black leading-none text-foreground">
            {nextPrayerName}&apos;ye {formattedRemaining}
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Vakit girdiğinde kalbini huzura çağır.
          </p>
        </div>

        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
          <svg viewBox="0 0 120 120" className="-rotate-90 absolute inset-0 h-full w-full">
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              className="stroke-muted"
              strokeWidth="6"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              className="stroke-primary transition-all duration-1000 ease-linear"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          <div className="text-center">
            <p className="font-heading text-3xl font-black leading-none text-primary">
              {nextPrayerTime}
            </p>
            <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
              {nextPrayerName}
            </p>
          </div>
        </div>
      </div>

      <Link href="/ogren/namaz-rehberi" className="block">
        <Button variant="primary" className="mt-5 w-full">
          <BookOpen className="h-4 w-4" />
          <span>Namaza hazırlık rehberini aç</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>

      <div className="relative mt-4 flex items-center justify-center gap-2 text-xs font-bold text-success">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success-soft">
          <BellRing className="h-3.5 w-3.5" />
        </span>
        Hatırlatıcı açık
      </div>
    </div>
  );
});
