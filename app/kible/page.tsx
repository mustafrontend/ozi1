"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Info, MapPin, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Compass, Smartphone, Route } from "lucide-react";
import { useLocation } from "@/components/providers/LocationProvider";
import { usePremium } from "@/components/providers/PremiumProvider";
import { calculateQiblaBearing, triggerQiblaAlignedHaptic } from "@/lib/qibla";
import { QiblaCompassDial } from "@/components/molecules/QiblaCompassDial";
import { Button } from "@/components/atoms/Button";

interface WebkitDeviceOrientationEvent extends DeviceOrientationEvent {
  webkitCompassHeading?: number;
}

const qiblaFeatures = [
  { icon: Compass, title: "Hassas Yön", desc: "Anlık pusula sensör desteği" },
  { icon: Smartphone, title: "Kolay Hizalama", desc: "Telefonu düz tutarak hizala" },
  { icon: Route, title: "Kâbe Doğrultusu", desc: "GPS koordinatlı açı hesabı" },
];

export default function QiblaCompassScreen() {
  const { selectedCity } = useLocation();
  const { isPremium } = usePremium();

  const [heading, setHeading] = useState(0);
  const [isAligned, setIsAligned] = useState(false);

  const qiblaAngle = calculateQiblaBearing(selectedCity.latitude, selectedCity.longitude);

  // Device orientation sensor listener
  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    const customEvent = event as WebkitDeviceOrientationEvent;
    let compassHeading = 0;

    if (typeof customEvent.webkitCompassHeading === "number") {
      // iOS Safari native compass heading
      compassHeading = customEvent.webkitCompassHeading;
    } else if (event.alpha !== null) {
      // Android standard orientation
      compassHeading = 360 - event.alpha;
    }

    setHeading(compassHeading);
    const diff = Math.abs((qiblaAngle - compassHeading + 360) % 360);
    const aligned = diff <= 5 || diff >= 355;
    setIsAligned(aligned);

    if (aligned) {
      triggerQiblaAlignedHaptic();
    }
  }, [qiblaAngle]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, true);
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation, true);
      };
    }
  }, [handleOrientation]);

  return (
    <div className="min-h-screen pb-36 font-body">
      <header className="border-b-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card px-5 pb-5 pt-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Kıble Pusulası</p>
            <h1 className="font-heading text-3xl font-black text-foreground">Yönünü Kalbine Çevir</h1>
            <p className="mt-0.5 text-xs text-muted-foreground">Namazın huzurlu başlangıcı</p>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-muted-foreground">
            <Info size={18} />
          </button>
        </div>
      </header>

      <main className="space-y-6 px-5 pt-5">
        {/* Main Compass Card */}
        <section className="relative overflow-hidden rounded-2xl border border-primary/35 bg-white dark:bg-card p-5 shadow-card">
          <div className="flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-wider text-primary">Canlı Pusula</p>
            <span className="flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-muted px-3 py-1 text-xs font-bold text-foreground">
              <MapPin size={13} className="text-primary" /> {selectedCity.name}
            </span>
          </div>

          <QiblaCompassDial
            heading={heading}
            qiblaAngle={qiblaAngle}
            isAligned={isAligned}
            isLocked={!isPremium}
          />

          <div className="mt-2 text-center">
            <h2 className="font-heading text-2xl font-black text-foreground">
              {isAligned ? "Kıbleye Doğru Hizalandınız" : `Kâbe Açısı: ${Math.round(qiblaAngle)}°`}
            </h2>
            <p className="mx-auto mt-1 max-w-[270px] text-xs text-muted-foreground">
              Telefonunuzu yatay tutarak ibre altın renkli yıldıza gelene dek dönün.
            </p>
          </div>

          {!isPremium && (
            <Link href="/premium" className="block mt-5">
              <Button variant="primary" className="w-full">
                <Sparkles size={16} />
                <span>Kıbleyi ve Hassas Dereceyi Aç</span>
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          )}
        </section>

        {/* Trust & Features */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-black text-foreground">Güvenle Yönünü Bul</h3>
              <p className="text-xs text-muted-foreground">İbadet anında sade, güvenilir pusula.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {qiblaFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card p-3 shadow-card">
                <Icon size={18} className="text-primary" />
                <p className="mt-2 text-xs font-black text-foreground">{title}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground leading-tight">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location Status */}
        <section className="flex items-center justify-between rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-primary">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Konum Doğrulandı</p>
              <p className="text-[11px] text-muted-foreground">{selectedCity.name}</p>
            </div>
          </div>
          <CheckCircle2 size={18} className="text-success" />
        </section>
      </main>
    </div>
  );
}
