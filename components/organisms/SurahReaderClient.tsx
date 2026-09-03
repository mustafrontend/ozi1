"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bookmark, BookmarkCheck, Share2, Repeat, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { ALL_SURAHS } from "@/lib/quranData";
import { MiniAudioPlayer } from "@/components/molecules/MiniAudioPlayer";

interface SurahReaderClientProps {
  surahId: string;
}

export function SurahReaderClient({ surahId }: SurahReaderClientProps) {
  const surahIdNum = parseInt(surahId, 10);
  const currentSurah = ALL_SURAHS.find((s) => s.number === surahIdNum) || ALL_SURAHS[1]; // default Rahman

  const [savedVerses, setSavedVerses] = useState<number[]>([13]);

  const toggleBookmark = (vNum: number) => {
    setSavedVerses((prev) => (prev.includes(vNum) ? prev.filter((n) => n !== vNum) : [...prev, vNum]));
  };

  const prevSurah = ALL_SURAHS.find((s) => s.number === surahIdNum - 1) || ALL_SURAHS[ALL_SURAHS.length - 1];
  const nextSurah = ALL_SURAHS.find((s) => s.number === surahIdNum + 1) || ALL_SURAHS[0];

  return (
    <div className="min-h-screen pb-32 font-body">
      {/* Header */}
      <header className="border-b-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card px-5 pb-5 pt-12">
        <div className="flex items-center gap-3">
          <Link
            href="/kuran"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-foreground hover:bg-slate-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-black uppercase tracking-wider text-primary">Kur&apos;an-ı Kerim</p>
            <h1 className="font-heading text-2xl font-black text-foreground truncate">{currentSurah.name} Suresi</h1>
            <p className="text-xs text-muted-foreground">{currentSurah.number}. Sure · {currentSurah.versesCount} ayet · {currentSurah.revelationType}</p>
          </div>
        </div>
      </header>

      <main className="space-y-5 px-5 pt-4">
        {/* Sticky Audio Recitation Player */}
        <section className="sticky top-0 z-20">
          <MiniAudioPlayer />
        </section>

        {/* Verses List */}
        <section className="space-y-4">
          {(currentSurah.verses || []).map((verse) => {
            const isSaved = savedVerses.includes(verse.number);

            return (
              <article
                key={verse.number}
                className={`rounded-2xl border-[0.5px] bg-white dark:bg-card p-5 shadow-card ${
                  verse.featured ? "border-primary/40" : "border-slate-200 dark:border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-xs font-black text-primary">
                    {verse.number}
                  </span>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <button
                      type="button"
                      onClick={() => toggleBookmark(verse.number)}
                      className={isSaved ? "text-primary" : "hover:text-primary"}
                    >
                      {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                    </button>
                    <button type="button" className="hover:text-primary"><Share2 className="h-4 w-4" /></button>
                    <button type="button" className="hover:text-primary"><Repeat className="h-4 w-4" /></button>
                  </div>
                </div>

                <p dir="rtl" className="mt-5 text-right font-arabic text-2xl leading-[2.2] text-foreground">
                  {verse.arabic}
                </p>

                <p className="mt-3 text-xs italic font-semibold text-primary">
                  {verse.transliteration}
                </p>

                <p className="mt-2 font-heading text-lg font-bold leading-relaxed text-foreground">
                  {verse.translation}
                </p>
              </article>
            );
          })}
        </section>

        {/* Surah Info Card */}
        {currentSurah.description && (
          <section className="rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card p-4 shadow-card">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Info className="h-4 w-4" />
              <h3 className="font-heading text-base font-black text-foreground">Sure Hakkında</h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{currentSurah.description}</p>
          </section>
        )}

        {/* Previous & Next Navigation */}
        <section className="flex items-center justify-between rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card p-4 shadow-card">
          <Link href={`/kuran/${prevSurah.number}`} className="flex items-center gap-2 text-left hover:text-primary">
            <ChevronLeft className="h-4 w-4 text-primary" />
            <div>
              <span className="block text-[10px] font-bold text-muted-foreground">Önceki</span>
              <span className="font-heading text-sm font-black text-foreground">{prevSurah.name}</span>
            </div>
          </Link>
          <div className="h-8 w-px bg-slate-100 dark:bg-border" />
          <Link href={`/kuran/${nextSurah.number}`} className="flex items-center gap-2 text-right hover:text-primary">
            <div>
              <span className="block text-[10px] font-bold text-muted-foreground">Sonraki</span>
              <span className="font-heading text-sm font-black text-foreground">{nextSurah.name}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-primary" />
          </Link>
        </section>
      </main>
    </div>
  );
}
