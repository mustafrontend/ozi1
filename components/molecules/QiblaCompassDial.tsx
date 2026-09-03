"use client";

import React, { memo } from "react";
import { LockKeyhole, Star } from "lucide-react";

interface QiblaCompassDialProps {
  heading: number;
  qiblaAngle: number;
  isAligned: boolean;
  isLocked?: boolean;
}

export const QiblaCompassDial = memo(function QiblaCompassDial({
  heading,
  qiblaAngle,
  isAligned,
  isLocked = false,
}: QiblaCompassDialProps) {
  const rotationDegrees = (qiblaAngle - heading + 360) % 360;

  return (
    <div className="relative flex justify-center py-3">
      <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-primary/20 bg-white/40 dark:bg-background/40 shadow-2xl backdrop-blur-sm">
        <div className="absolute inset-3 rounded-full border border-primary/10" />
        <div className="absolute inset-8 rounded-full border border-slate-200 dark:border-border" />
        <div className="absolute inset-14 rounded-full border border-primary/15" />

        {/* Cardinal directions */}
        <span className="absolute top-4 font-heading text-lg font-bold text-primary">K</span>
        <span className="absolute bottom-4 font-heading text-lg font-semibold text-muted-foreground">G</span>
        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-heading text-lg font-semibold text-muted-foreground">B</span>
        <span className="absolute right-5 top-1/2 -translate-y-1/2 font-heading text-lg font-semibold text-muted-foreground">D</span>

        {/* Qibla Indicator Needle */}
        <div
          style={{ transform: `translate(-50%, -78px) rotate(${rotationDegrees}deg)` }}
          className="absolute left-1/2 top-1/2 h-[102px] w-1 origin-bottom rounded-full bg-gradient-to-t from-primary/20 via-primary to-primary shadow-glow transition-transform duration-300 ease-out"
        />

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background shadow-lg" />

        {/* Center Hub */}
        <div
          className={`relative flex h-24 w-24 items-center justify-center rounded-full border shadow-2xl transition-all duration-300 ${
            isAligned
              ? "border-primary bg-primary/20 scale-105 shadow-glow"
              : "border-primary/35 bg-white dark:bg-card"
          }`}
        >
          <div className="absolute inset-2 rounded-full border border-primary/10" />
          {isLocked ? (
            <LockKeyhole size={30} className="text-primary" strokeWidth={1.6} />
          ) : (
            <div className="text-center">
              <p className="font-heading text-xl font-extrabold text-primary">{Math.round(qiblaAngle)}°</p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Kıble</p>
            </div>
          )}
        </div>

        {/* Kaaba Star Tag at Top */}
        <div className="absolute -top-1 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground shadow-lg">
          <Star size={14} fill="currentColor" />
        </div>
      </div>
    </div>
  );
});
