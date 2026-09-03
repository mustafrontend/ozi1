"use client";

import React, { memo } from "react";
import { Star, ShieldCheck } from "lucide-react";
import { usePremium } from "../providers/PremiumProvider";

export const PaywallSection = memo(function PaywallSection() {
  const { plans, selectedPlanId, setSelectedPlanId } = usePremium();

  return (
    <section className="pt-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl font-black text-foreground">
            Sana uygun planı seç
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            İstediğin zaman kolayca iptal edebilirsin.
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-[11px] font-bold text-success">
          <ShieldCheck size={14} strokeWidth={2} />
          Güvenli Ödeme
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {plans.map((plan) => {
          const isSelected = selectedPlanId === plan.id;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlanId(plan.id)}
              className={`relative block w-full rounded-2xl bg-white dark:bg-card px-4 py-4 text-left transition-all active:scale-[0.99] ${
                isSelected
                  ? "border-2 border-primary shadow-glow shadow-primary/10"
                  : plan.isBestValue
                    ? "border border-primary/45"
                    : "border-[0.5px] border-slate-200 dark:border-border"
              }`}
            >
              {isSelected && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary-foreground shadow-sm">
                  Seçili Plan
                </span>
              )}

              {plan.isBestValue && (
                <span className="absolute -right-1 -top-2.5 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-0.5 text-[10px] font-black text-slate-950 shadow-md">
                  <Star size={11} fill="currentColor" />
                  {plan.savingsBadge || "En Avantajlı"}
                </span>
              )}

              <div className="flex items-center gap-3">
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all ${
                    isSelected
                      ? "border-[5px] border-primary bg-white dark:bg-card"
                      : "border-2 border-slate-300 dark:border-slate-600"
                  }`}
                />

                <div className="flex-1">
                  <span className="block text-sm font-black text-foreground">{plan.name}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{plan.subtitle}</span>
                </div>

                <div className="text-right">
                  <span
                    className={`block font-heading text-2xl font-black ${
                      isSelected ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {plan.priceString}
                  </span>
                  <span className="block text-[11px] font-semibold text-muted-foreground">
                    {plan.monthlyEquivalent}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
});
