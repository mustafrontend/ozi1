"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Bookmark, BookmarkCheck, Share2, Repeat, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { ALL_SURAHS, isFreeSurah, FREE_BOOKMARK_LIMIT } from "@/lib/quranData";
import { MiniAudioPlayer } from "@/components/molecules/MiniAudioPlayer";
import { usePremium } from "@/components/providers/PremiumProvider";
import { ProGateModal } from "@/components/molecules/ProGateModal";
import { storage } from "@/lib/storage";

const BOOKMARKS_STORAGE_KEY = "quran_bookmarked_verses";

interface SurahReaderClientProps {
  surahId: string;
}

export function SurahReaderClient({ surahId }: SurahReaderClientProps) {
  const surahIdNum = parseInt(surahId, 10);
  const currentSurah = ALL_SURAHS.find((s) => s.number === surahIdNum) || ALL_SURAHS[1]; // default Rahman
  const { isPremium } = usePremium();
  const isLocked = !isPremium && !isFreeSurah(currentSurah.number);

  const [bookmarks, setBookmarks] = useState<Record<string, number[]>>({});
  const [isGateOpen, setIsGateOpen] = useState(false);

  useEffect(() => {
    storage.getJSON<Record<string, number[]>>(BOOKMARKS_STORAGE_KEY, {}).then(setBookmarks);
  }, []);

  const savedVerses = bookmarks[String(currentSurah.number)] || [];
  const totalBookmarkCount = Object.values(bookmarks).reduce((sum, arr) => sum + arr.length, 0);

  const toggleBookmark = useCallback(
    (vNum: number) => {
      const surahKey = String(currentSurah.number);
      const current = bookmarks[surahKey] || [];
      const isSaved = current.includes(vNum);

      if (!isSaved && !isPremium && totalBookmarkCount >= FREE_BOOKMARK_LIMIT) {
        setIsGateOpen(true);
        return;
      }

      const nextForSurah = isSaved ? current.filter((n) => n !== vNum) : [...current, vNum];
      const next = { ...bookmarks, [surahKey]: nextForSurah };
      setBookmarks(next);
      storage.setJSON(BOOKMARKS_STORAGE_KEY, next);
    },
    [bookmarks, currentSurah.number, isPremium, totalBookmarkCount]
  );

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
          {(isLocked ? (currentSurah.verses || []).slice(0, 1) : currentSurah.verses || []).map((verse) => {
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

        {/* Pro Lock Card */}
        {isLocked && (
          <section className="rounded-2xl border border-primary/40 bg-primary/5 p-5 text-center shadow-card">
            <p className="font-heading text-lg font-black text-foreground">
              {currentSurah.name} Suresinin Devamı Pro Üyelere Özel
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Bu surenin tamamını okumak için Pro üyeliğe geçin.
            </p>
            <button
              type="button"
              onClick={() => setIsGateOpen(true)}
              className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-xs font-black text-primary-foreground shadow-glow active:scale-95"
            >
              Pro Üyeliği İncele
            </button>
          </section>
        )}

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

      <ProGateModal
        isOpen={isGateOpen}
        onClose={() => setIsGateOpen(false)}
        featureName={isLocked ? `${currentSurah.name} Suresi` : "Sınırsız Ayet Kaydı"}
      />
    </div>
  );
}
