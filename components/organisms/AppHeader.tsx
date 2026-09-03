"use client";

import React, { memo, useState } from "react";
import Link from "next/link";
import { MapPin, ChevronDown, Crown, LocateFixed, Loader2, Globe } from "lucide-react";
import { useLocation } from "../providers/LocationProvider";
import { usePremium } from "../providers/PremiumProvider";
import { useLanguage } from "../providers/LanguageProvider";
import { CitySelectModal } from "../molecules/CitySelectModal";
import { LanguageSelectModal } from "../molecules/LanguageSelectModal";
import { getLanguageOption } from "@/lib/i18n";

export const AppHeader = memo(function AppHeader() {
  const { selectedCity, prayerData, detectGPSLocation, isDetectingGPS, isGPSActive } = useLocation();
  const { isPremium } = usePremium();
  const { language } = useLanguage();

  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const currentLangOption = getLanguageOption(language);

  const handleQuickGPS = async () => {
    await detectGPSLocation();
  };

  return (
    <>
      <header className="relative overflow-hidden border-b-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card px-5 pb-5 pt-12">
        <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border border-primary/20" />
        <div className="absolute -right-2 top-6 h-24 w-24 rounded-full border border-primary/10" />

        <div className="relative flex items-center justify-between">
          <div>
            <button
              type="button"
              onClick={() => setIsCityModalOpen(true)}
              className="flex items-center gap-1.5 text-sm font-extrabold text-foreground hover:text-primary transition-colors active:scale-98"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span>{selectedCity.name}</span>
              {isGPSActive && (
                <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-400">
                  GPS
                </span>
              )}
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            <p className="mt-0.5 text-xs font-semibold tracking-wide text-muted-foreground">
              {prayerData.dateStr}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Select Button */}
            <button
              type="button"
              onClick={() => setIsLangModalOpen(true)}
              aria-label="Dil değiştir"
              title="Dil Değiştir / Change Language"
              className="flex h-10 px-2.5 items-center justify-center gap-1 rounded-full border border-slate-200 dark:border-border bg-slate-50 dark:bg-muted text-foreground text-xs font-bold hover:bg-slate-100 active:scale-95 transition-all"
            >
              <Globe className="h-4 w-4 text-primary" />
              <span className="uppercase text-[11px] font-black">{language}</span>
            </button>

            {/* Pro Crown Button */}
            <Link
              href="/premium"
              aria-label="Pro üyelik"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all active:scale-95 ${
                isPremium
                  ? "border-amber-400 bg-amber-100 text-amber-900 shadow-glow"
                  : "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              <Crown className="h-5 w-5" />
            </Link>

            {/* GPS Location Button */}
            <button
              type="button"
              onClick={handleQuickGPS}
              disabled={isDetectingGPS}
              aria-label="GPS konumunu bul"
              title="GPS Konumumu Bul"
              className={`flex h-10 w-10 items-center justify-center rounded-theme border-[0.5px] transition-all active:scale-95 ${
                isGPSActive
                  ? "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
                  : "border-slate-200 dark:border-border bg-slate-50 dark:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {isDetectingGPS ? (
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              ) : (
                <LocateFixed className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <CitySelectModal
        isOpen={isCityModalOpen}
        onClose={() => setIsCityModalOpen(false)}
      />

      <LanguageSelectModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      />
    </>
  );
});
