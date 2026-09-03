"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Headphones, Bookmark, Compass, LockKeyhole, Sparkles, Check, ShieldCheck, Zap } from "lucide-react";
import { usePremium } from "@/components/providers/PremiumProvider";
import { PaywallSection } from "@/components/organisms/PaywallSection";
import { Button } from "@/components/atoms/Button";

const proFeatures = [
  { icon: BookOpen, title: "114 Surenin Tamamı", desc: "Tüm sure ve ayetlere sınırsız okuma erişimi" },
  { icon: Headphones, title: "Sesli Kıraat & Tilavet", desc: "Mishary Alafasy sesiyle arka planda dinleme" },
  { icon: Compass, title: "Canlı Kıble Pusulası", desc: "Dereceli hassas yön ve titreşimli hizalama" },
  { icon: Bookmark, title: "Sınırsız Ayet Kaydı", desc: "Favori ayetlerini kişisel kitaplığında tut" },
  { icon: Zap, title: "%100 Reklamsız Deneyim", desc: "Manevi odaklanmayı bozan sıfır reklam" },
];

export default function PremiumScreen() {
  const { isPremium, purchaseSelectedPlan, restorePurchases, isLoading, toggleMockPremium } = usePremium();
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handlePurchase = async () => {
    setFeedbackMessage(null);
    const success = await purchaseSelectedPlan();
    if (success) {
      setFeedbackMessage("Tebrikler! Huzur Pro üyeliğiniz aktif edildi.");
    } else {
      setFeedbackMessage("Satın alma tamamlanamadı veya iptal edildi.");
    }
  };

  const handleRestore = async () => {
    setFeedbackMessage(null);
    const active = await restorePurchases();
    if (active) {
      setFeedbackMessage("Geçmiş Pro aboneliğiniz başarıyla geri yüklendi.");
    } else {
      setFeedbackMessage("Aktif bir Pro abonelik kaydı bulunamadı.");
    }
  };

  return (
    <div className="min-h-screen pb-36 font-body">
      {/* Top Banner */}
      <header className="relative">
        <div className="relative px-5 pt-12">
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-card border-[0.5px] border-slate-200 dark:border-border text-foreground shadow-sm hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
          </Link>
        </div>

        <div className="mt-3 px-5">
          <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-primary/30 shadow-card">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/805dccb5-c8f4-40fe-8f1a-5113fa706da5.png"
              alt="Huzur Pro"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center gap-1.5 text-primary">
                <Sparkles size={16} />
                <span className="text-[11px] font-black uppercase tracking-wider">Huzur Pro Üyelik</span>
              </div>
              <h1 className="mt-1 font-heading text-3xl font-black text-amber-50 leading-tight">
                Manevi Yolculuğunu Derinleştir
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="px-5 space-y-6">
        {/* Feedback Alert */}
        {feedbackMessage && (
          <div className="mt-4 rounded-xl border border-primary/40 bg-primary/10 p-3 text-xs font-bold text-center text-primary animate-in fade-in">
            {feedbackMessage}
          </div>
        )}

        {/* Pro Active Badge */}
        {isPremium && (
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/30 p-4">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">
              <Check className="h-5 w-5" />
              <span>Huzur Pro Üyeliğiniz Aktif</span>
            </div>
            <button
              onClick={toggleMockPremium}
              className="text-[10px] font-bold text-muted-foreground underline hover:text-foreground"
            >
              Test Durumunu Değiştir
            </button>
          </div>
        )}

        {/* Feature Highlights */}
        <section className="pt-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Güvenilir İslami kaynaklara, kesintisiz Kur&apos;an tilavetine ve ibadet araçlarına Pro ayrıcalığıyla ulaşın.
          </p>

          <div className="mt-4 space-y-3">
            {proFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-black text-foreground">{title}</p>
                  <p className="text-[11px] text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Plan Selector */}
        <PaywallSection />

        {/* Restore & Terms */}
        <section className="pb-4 text-center">
          <button
            type="button"
            onClick={handleRestore}
            className="text-xs font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:opacity-80"
          >
            Satın Alımları Geri Yükle
          </button>
          <p className="mx-auto mt-3 max-w-[320px] text-[10px] text-muted-foreground leading-normal">
            Aboneliğiniz dönem sonunda otomatik yenilenir. İstediğiniz an Google Play veya App Store hesap ayarlarınızdan iptal edebilirsiniz.
          </p>
        </section>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 dark:border-border bg-white/95 dark:bg-background/95 p-4 shadow-floating backdrop-blur-xl max-w-md mx-auto">
        <Button
          onClick={handlePurchase}
          disabled={isLoading}
          className="w-full text-base py-4"
        >
          <span>{isLoading ? "İşlem Yapılıyor..." : "Huzur Pro ile Devam Et"}</span>
          <ArrowRight size={18} className="ml-1" />
        </Button>
        <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-muted-foreground">
          <LockKeyhole size={11} className="text-success" />
          <span>RevenueCat & App Store / Google Play Güvenli Ödeme</span>
        </div>
      </div>
    </div>
  );
}
