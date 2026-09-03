"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { revenueCat, DEFAULT_PLANS } from "@/lib/revenuecat";
import { SubscriptionPlan, UserSubscriptionState } from "@/lib/types";

interface PremiumContextValue {
  isPremium: boolean;
  activePlanId: string | null;
  isLoading: boolean;
  plans: SubscriptionPlan[];
  selectedPlanId: string;
  setSelectedPlanId: (id: string) => void;
  purchaseSelectedPlan: () => Promise<boolean>;
  restorePurchases: () => Promise<boolean>;
  toggleMockPremium: () => Promise<void>;
}

const PremiumContext = createContext<PremiumContextValue | undefined>(undefined);

export function PremiumProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<UserSubscriptionState>({
    isPremium: false,
    activePlanId: null,
    expirationDate: null,
    isLoading: true,
    error: null,
  });

  const [selectedPlanId, setSelectedPlanId] = useState<string>("yearly");

  const refreshSubscription = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const subState = await revenueCat.getSubscriptionState();
      setState(subState);
    } catch {
      setState((prev) => ({ ...prev, isLoading: false, error: "Abonelik durumu alınamadı" }));
    }
  }, []);

  useEffect(() => {
    refreshSubscription();
  }, [refreshSubscription]);

  const purchaseSelectedPlan = useCallback(async (): Promise<boolean> => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await revenueCat.purchasePackage(selectedPlanId);
      if (res.success) {
        await refreshSubscription();
        return true;
      }
      return false;
    } catch {
      return false;
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, [selectedPlanId, refreshSubscription]);

  const restorePurchases = useCallback(async (): Promise<boolean> => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await revenueCat.restorePurchases();
      await refreshSubscription();
      return res.isPremium;
    } catch {
      return false;
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, [refreshSubscription]);

  const toggleMockPremium = useCallback(async () => {
    const nextVal = !state.isPremium;
    await revenueCat.setMockPremium(nextVal);
    await refreshSubscription();
  }, [state.isPremium, refreshSubscription]);

  const value = useMemo(
    () => ({
      isPremium: state.isPremium,
      activePlanId: state.activePlanId,
      isLoading: state.isLoading,
      plans: DEFAULT_PLANS,
      selectedPlanId,
      setSelectedPlanId,
      purchaseSelectedPlan,
      restorePurchases,
      toggleMockPremium,
    }),
    [
      state.isPremium,
      state.activePlanId,
      state.isLoading,
      selectedPlanId,
      purchaseSelectedPlan,
      restorePurchases,
      toggleMockPremium,
    ]
  );

  return <PremiumContext.Provider value={value}>{children}</PremiumContext.Provider>;
}

export function usePremium() {
  const context = useContext(PremiumContext);
  if (!context) {
    throw new Error("usePremium must be used within a PremiumProvider");
  }
  return context;
}
