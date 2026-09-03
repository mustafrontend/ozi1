"use client";

import React, { memo } from "react";
import Link from "next/link";
import { X, Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { usePremium } from "../providers/PremiumProvider";
import { Button } from "../atoms/Button";

interface ProGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
}

export const ProGateModal = memo(function ProGateModal({
  isOpen,
  onClose,
  featureName = "Bu Özellik",
}: ProGateModalProps) {
  const { purchaseSelectedPlan, isLoading } = usePremium();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-primary/40 bg-white dark:bg-card p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-wider">
          <Sparkles className="h-4 w-4" />
          <span>Huzur Pro Ayrıcalığı</span>
        </div>

        <h3 className="mt-2 font-heading text-2xl font-black text-foreground leading-tight">
          {featureName} Huzur Pro İle Açılır
        </h3>

        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          114 Surenin tamamına erişmek, kesintisiz kıraat dinlemek, hassas kıble pusulasını kullanmak ve reklamsız deneyim için Pro üyeliğe geçin.
        </p>

        <div className="mt-4 space-y-2 rounded-2xl bg-primary/5 p-4 border border-primary/20">
          {[
            "114 Sure ve Ayetlerin Tamamına Erişim",
            "Mishary Rashid Alafasy ile Kesintisiz Sesli Kıraat",
            "Hassas Dereceli Canlı Kıble Pusulası",
            "Kişisel Kitaplığa Sınırsız Ayet Kaydetme",
            "%100 Reklamsız Manevi Alan",
          ].map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-xs font-bold text-foreground">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          <Link href="/premium" onClick={onClose} className="block w-full">
            <Button className="w-full text-sm py-3.5">
              <span>Pro Paketleri İncele</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>

          <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-muted-foreground pt-1">
            <ShieldCheck className="h-3.5 w-3.5 text-success" />
            <span>App Store & Google Play Güvenli Altyapısı</span>
          </div>
        </div>
      </div>
    </div>
  );
});
