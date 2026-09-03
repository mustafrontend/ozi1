"use client";

import React, { useState, useMemo, memo } from "react";
import Link from "next/link";
import { Search, BookOpen, Sparkles, ArrowRight, Lock } from "lucide-react";
import { ALL_SURAHS } from "@/lib/quranData";
import { SurahBadge } from "@/components/atoms/SurahBadge";
import { usePremium } from "@/components/providers/PremiumProvider";
import { Surah } from "@/lib/types";

const SurahRowItem = memo(function SurahRowItem({
  surah,
  isPremium,
}: {
  surah: Surah;
  isPremium: boolean;
}) {
  const isFreeSurah = [1, 36, 55, 67, 112, 113, 114].includes(surah.number);
  const isLocked = !isPremium && !isFreeSurah;

  return (
    <Link
      href={`/kuran/${surah.number}`}
      className="flex items-center gap-3.5 p-4 hover:bg-slate-50 dark:hover:bg-muted/50 transition-colors active:bg-slate-100"
    >
      <SurahBadge number={surah.number} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <p className="font-heading text-lg font-black text-foreground">{surah.name}</p>
          <span className="font-arabic text-base text-primary">{surah.arabicName}</span>
        </div>
        <p className="text-xs text-muted-foreground truncate">
          {surah.meaning} · {surah.versesCount} ayet
        </p>
      </div>
      {isLocked && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <Lock className="h-3.5 w-3.5" />
        </span>
      )}
    </Link>
  );
});

export default function QuranLibraryScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isPremium } = usePremium();
  const [displayCount, setDisplayCount] = useState(25);

  const filteredSurahs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return ALL_SURAHS;
    return ALL_SURAHS.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.meaning.toLowerCase().includes(query) ||
        s.number.toString() === query
    );
  }, [searchQuery]);

  const visibleSurahs = useMemo(() => {
    return filteredSurahs.slice(0, displayCount);
  }, [filteredSurahs, displayCount]);

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(filteredSurahs.length, prev + 30));
  };

  return (
    <div className="min-h-screen pb-36 font-body">
      <header className="border-b-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card px-5 pb-6 pt-12">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Mushaf Kütüphanesi</p>
        <h1 className="mt-1 font-heading text-4xl font-black text-foreground">Kur’an</h1>
        <p className="mt-1 text-sm text-muted-foreground">114 Sure, kesintisiz okuma ve dinleme deneyimi.</p>

        {/* Search Input */}
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-border bg-slate-50 dark:bg-muted px-4 py-3">
          <Search className="h-4 w-4 text-primary" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setDisplayCount(25);
            }}
            placeholder="114 sure içerisinde ara (örn. Yasin, Rahman, 55)..."
            className="w-full bg-transparent text-sm text-foreground outline-none font-semibold placeholder:text-muted-foreground"
          />
        </div>
      </header>

      <main className="space-y-6 px-5 pt-6">
        {/* Daily Featured Surah (Rahman) */}
        <section>
          <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-primary/30 shadow-card">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/d63a18b8-9b47-4a24-b27c-36cbc9e8cbf8.png"
              alt="Mushaf"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                  <BookOpen className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-primary">Günün Tilaveti</span>
              </div>

              <div>
                <p className="font-heading text-2xl font-black text-amber-50">Rahmân Suresi</p>
                <p className="text-xs text-slate-300">55. Sure · 78 ayet · Medine dönemi</p>
                <Link
                  href="/kuran/55"
                  className="mt-3 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-black text-primary-foreground shadow-glow active:scale-95 transition-all"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Okumaya Başla</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Banner (if not subscribed) */}
        {!isPremium && (
          <section className="relative overflow-hidden rounded-2xl border border-primary/45 bg-white dark:bg-card p-5 shadow-card">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <p className="text-xs font-black uppercase tracking-wider text-primary">Pro Tam Erişim</p>
            </div>
            <h2 className="mt-2 font-heading text-2xl font-black text-foreground">114 Surenin Tamamını Dinle & Oku.</h2>
            <p className="mt-1 text-xs text-muted-foreground">Sınırsız ayet kaydı, reklamsız deneyim ve Kıble pusulası kilitlerini kaldırın.</p>
            <Link
              href="/premium"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-black text-primary-foreground shadow-glow active:scale-95"
            >
              <span>Pro Üyeliği Aç</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        )}

        {/* 114 Surahs Catalog List */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-heading text-2xl font-black text-foreground">Sure Fihristi</h2>
            <span className="text-xs font-bold text-muted-foreground">{filteredSurahs.length} / 114 Sure</span>
          </div>

          <div className="overflow-hidden rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card shadow-card divide-y divide-slate-100 dark:divide-border">
            {visibleSurahs.map((surah) => (
              <SurahRowItem key={surah.number} surah={surah} isPremium={isPremium} />
            ))}
          </div>

          {displayCount < filteredSurahs.length && (
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 text-xs font-extrabold text-primary hover:bg-primary/20 active:scale-95 transition-all"
              >
                Daha Fazla Sure Yükle ({filteredSurahs.length - displayCount} sure kaldı)
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
