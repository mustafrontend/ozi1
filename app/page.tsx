"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { AppHeader } from "@/components/organisms/AppHeader";
import { NextPrayerRing } from "@/components/molecules/NextPrayerRing";
import { PrayerTimeCard } from "@/components/molecules/PrayerTimeCard";
import { DailyVerseCard } from "@/components/molecules/DailyVerseCard";
import { ReminderCard } from "@/components/molecules/ReminderCard";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { useLocation } from "@/components/providers/LocationProvider";
import { DAILY_VERSE } from "@/lib/quranData";

export default function TodayScreen() {
  const { prayerData } = useLocation();

  const timesList = [
    { id: "fajr", name: "İmsak", time: prayerData.fajr, active: prayerData.currentPrayer?.id === "fajr" },
    { id: "sunrise", name: "Güneş", time: prayerData.sunrise, active: prayerData.currentPrayer?.id === "sunrise" },
    { id: "dhuhr", name: "Öğle", time: prayerData.dhuhr, active: prayerData.currentPrayer?.id === "dhuhr" },
    { id: "asr", name: "İkindi", time: prayerData.asr, active: prayerData.currentPrayer?.id === "asr" },
    { id: "maghrib", name: "Akşam", time: prayerData.maghrib, active: prayerData.currentPrayer?.id === "maghrib" },
    { id: "isha", name: "Yatsı", time: prayerData.isha, active: prayerData.currentPrayer?.id === "isha" },
  ];

  return (
    <div className="min-h-screen pb-36 font-body">
      <AppHeader />

      <main className="space-y-6 px-5 pt-5">
        {/* Next Prayer Countdown Card */}
        <section>
          <NextPrayerRing
            currentPrayerName={prayerData.currentPrayer?.name || "Öğle"}
            nextPrayerName={prayerData.nextPrayer?.name || "İkindi"}
            nextPrayerTime={prayerData.nextPrayer?.time || "17:05"}
            formattedRemaining={prayerData.formattedRemaining}
            progressPercent={prayerData.progressPercent}
          />
        </section>

        {/* Prayer Times Row */}
        <section>
          <SectionHeading
            title="Namaz Vakitleri"
            subtitle="Bugünün ritmi"
            className="mb-3"
          />
          <PrayerTimeCard times={timesList} />
        </section>

        {/* Daily Verse Card */}
        <section>
          <DailyVerseCard
            arabic={DAILY_VERSE.arabic}
            translation={DAILY_VERSE.translation}
            reference={DAILY_VERSE.reference}
            surahNumber={DAILY_VERSE.surahNumber}
          />
        </section>

        {/* Prayer Guide Mini Banner */}
        <section>
          <Link
            href="/ogren/namaz-rehberi"
            className="relative flex items-center gap-4 overflow-hidden rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card p-4 shadow-card hover:border-primary/40 transition-all active:scale-[0.99]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-black uppercase tracking-wider text-primary">
                Namaza Hazırlık
              </p>
              <h2 className="mt-0.5 font-heading text-xl font-bold text-foreground">
                Namaz nasıl kılınır?
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-muted">
                  <div className="h-full w-2/5 rounded-full bg-primary" />
                </div>
                <span className="text-xs font-black text-primary">%40</span>
              </div>
            </div>
          </Link>
        </section>

        {/* Reminders Section */}
        <section>
          <ReminderCard />
        </section>
      </main>
    </div>
  );
}
