"use client";

import React, { memo } from "react";
import { X, MapPin, Check, LocateFixed, Loader2, AlertCircle } from "lucide-react";
import { useLocation } from "../providers/LocationProvider";
import { CityLocation } from "@/lib/prayerTimes";

interface CitySelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CitySelectModal = memo(function CitySelectModal({
  isOpen,
  onClose,
}: CitySelectModalProps) {
  const {
    selectedCity,
    allCities,
    selectCity,
    detectGPSLocation,
    isDetectingGPS,
    isGPSActive,
    locationError,
  } = useLocation();

  if (!isOpen) return null;

  const handleSelect = (city: CityLocation) => {
    selectCity(city);
    onClose();
  };

  const handleGPSClick = async () => {
    const success = await detectGPSLocation();
    if (success) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 dark:border-border bg-white dark:bg-card p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-border pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-black text-foreground">Konum Seçin</h3>
              <p className="text-[11px] text-muted-foreground">Namaz vakitleri için şehir veya GPS</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* GPS Auto Detect Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleGPSClick}
            disabled={isDetectingGPS}
            className={`flex w-full items-center justify-center gap-2.5 rounded-2xl border p-3.5 text-xs font-black transition-all active:scale-[0.98] ${
              isGPSActive
                ? "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"
                : "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
            }`}
          >
            {isDetectingGPS ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>GPS Konumu Tespit Ediliyor...</span>
              </>
            ) : (
              <>
                <LocateFixed className="h-4 w-4" />
                <span>{isGPSActive ? "GPS Konumu Aktif (Yenile)" : "Otomatik Konumumu Bul (GPS)"}</span>
              </>
            )}
          </button>

          {locationError && (
            <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-rose-500">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{locationError}</span>
            </div>
          )}
        </div>

        <div className="my-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-muted-foreground">
          <span className="h-px flex-1 bg-slate-100 dark:bg-border" />
          <span>Veya Şehir Listesinden Seçin</span>
          <span className="h-px flex-1 bg-slate-100 dark:bg-border" />
        </div>

        <div className="max-h-60 space-y-1 overflow-y-auto pr-1">
          {allCities.map((city) => {
            const isSelected = !isGPSActive && city.name === selectedCity.name;
            return (
              <button
                key={city.name}
                type="button"
                onClick={() => handleSelect(city)}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-sm transition-all ${
                  isSelected
                    ? "bg-primary/15 font-extrabold text-primary border border-primary/30"
                    : "text-foreground hover:bg-slate-50 dark:hover:bg-muted/60 font-semibold"
                }`}
              >
                <span>{city.name}</span>
                {isSelected && <Check className="h-4 w-4 text-primary" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
});
