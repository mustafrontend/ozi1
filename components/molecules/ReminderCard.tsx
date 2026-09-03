"use client";

import React, { memo, useState } from "react";
import { Bell, BookHeart, SlidersHorizontal, ChevronRight } from "lucide-react";

export const ReminderCard = memo(function ReminderCard() {
  const [allPrayerReminder, setAllPrayerReminder] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-black text-foreground">
            Manevi Hatırlatmalar
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Günün nazik çağrıları
          </p>
        </div>
        <button
          type="button"
          aria-label="Hatırlatıcı ayarları"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-primary hover:bg-slate-200 transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card shadow-card">
        <div className="flex items-start gap-3 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Bell className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-foreground">Öğle vaktine az kaldı</p>
            <p className="mt-0.5 text-xs leading-5 text-muted-foreground">Kalbini namaza yönelt</p>
          </div>
          <span className="pt-0.5 text-[11px] font-semibold text-muted-foreground">12:58</span>
        </div>

        <div className="mx-4 border-t border-slate-100 dark:border-border" />

        <div className="flex items-start gap-3 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <BookHeart className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-foreground">Bugünün tilaveti</p>
            <p className="mt-0.5 text-xs leading-5 text-muted-foreground">Rahman Suresi&apos;nden bugün bir ayet oku</p>
          </div>
          <span className="pt-0.5 text-[11px] font-semibold text-muted-foreground">18:30</span>
        </div>
      </div>

      <div className="rounded-2xl border-[0.5px] border-primary/30 bg-primary/5 dark:bg-muted p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-extrabold text-foreground">Beş vakit hatırlatıcı</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Tüm namaz vakitleri için açık</p>
          </div>
          <button
            type="button"
            onClick={() => setAllPrayerReminder(!allPrayerReminder)}
            className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
              allPrayerReminder ? "bg-primary justify-end" : "bg-slate-300 dark:bg-slate-700 justify-start"
            }`}
          >
            <span className="h-5 w-5 rounded-full bg-white shadow-sm" />
          </button>
        </div>

        <button
          type="button"
          className="mt-3 flex w-full items-center justify-between border-t border-primary/20 pt-3 text-xs font-bold text-primary hover:opacity-80 transition-opacity"
        >
          <span>Vakitleri tek tek düzenle</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
});
