"use client";

import React, { memo } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface DailyVerseCardProps {
  arabic: string;
  translation: string;
  reference: string;
  surahNumber: number;
}

export const DailyVerseCard = memo(function DailyVerseCard({
  translation,
  reference,
  surahNumber,
}: DailyVerseCardProps) {
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl border-[0.5px] border-slate-200 dark:border-border shadow-card">
      <img
        src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/8c508426-858d-4a28-a041-63ff8b46578d.png"
        alt="Rahle üzerinde açık Kur'an"
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/50 bg-slate-900/80 text-primary backdrop-blur-sm shadow-glow">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
            Günün Ayeti
          </p>
        </div>

        <div>
          <p className="max-w-[280px] font-heading text-2xl font-bold leading-snug text-amber-50">
            {translation}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-300">
              {reference}
            </p>
            <Link
              href={`/kuran/${surahNumber}`}
              className="flex items-center gap-1.5 rounded-full bg-slate-900/90 px-3.5 py-2 text-xs font-bold text-slate-100 backdrop-blur-md border border-slate-700/50 hover:bg-slate-800 transition-colors"
            >
              <span>Ayeti oku</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
