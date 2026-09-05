import { Capacitor } from "@capacitor/core";
import { Purchases, LOG_LEVEL } from "@revenuecat/purchases-capacitor";
import { SubscriptionPlan, UserSubscriptionState } from "./types";
import { storage } from "./storage";

export const DEFAULT_PLANS: SubscriptionPlan[] = [
  {
    id: "monthly",
    rcPackageId: "$rc_monthly",
    name: "Aylık",
    subtitle: "Esnek başlangıç",
    priceString: "119 TL",
    periodDescription: "aylık",
    monthlyEquivalent: "119 TL / ay",
  },
  {
    id: "six-month",
    rcPackageId: "$rc_six_month",
    name: "6 Aylık",
    subtitle: "Toplam 650 TL",
    priceString: "650 TL",
    periodDescription: "6 ayda bir",
    monthlyEquivalent: "108,33 TL / ay",
    savingsBadge: "%10 Tasarruf",
  },
  {
    id: "yearly",
    rcPackageId: "$rc_annual",
    name: "Yıllık",
    subtitle: "Toplam 999 TL",
    priceString: "999 TL",
    periodDescription: "yıllık",
    monthlyEquivalent: "83,25 TL / ay",
    savingsBadge: "%30 Tasarruf",
    isPopular: true,
    isBestValue: true,
  },
];

const REVENUECAT_API_KEY_IOS = process.env.NEXT_PUBLIC_REVENUECAT_IOS_KEY || "appl_mock_ios_key";
const REVENUECAT_API_KEY_ANDROID = process.env.NEXT_PUBLIC_REVENUECAT_ANDROID_KEY || "goog_mock_android_key";
const STORAGE_PREMIUM_KEY = "huzur_user_premium_status";

class RevenueCatService {
  private isInitialized = false;

  public async init(): Promise<void> {
    if (this.isInitialized) return;

    if (Capacitor.isNativePlatform()) {
      try {
        await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
        const apiKey = Capacitor.getPlatform() === "ios" ? REVENUECAT_API_KEY_IOS : REVENUECAT_API_KEY_ANDROID;
        await Purchases.configure({ apiKey });
        this.isInitialized = true;
      } catch (err) {
        console.warn("RevenueCat native initialization error:", err);
      }
    } else {
      // Running on Web / PWA / Next.js dev server
      this.isInitialized = true;
    }
  }

  public async getSubscriptionState(): Promise<UserSubscriptionState> {
    await this.init();

    if (Capacitor.isNativePlatform()) {
      try {
        const { customerInfo } = await Purchases.getCustomerInfo();
        const isPremium = typeof customerInfo.entitlements.active["premium"] !== "undefined" ||
                          typeof customerInfo.entitlements.active["pro"] !== "undefined";

        return {
          isPremium,
          activePlanId: isPremium ? "premium_active" : null,
          expirationDate: null,
          isLoading: false,
          error: null,
        };
      } catch (err: unknown) {
        // Fail closed: never fall back to a locally-writable flag on native.
        console.error("Error fetching CustomerInfo:", err);
        return {
          isPremium: false,
          activePlanId: null,
          expirationDate: null,
          isLoading: false,
          error: "Abonelik durumu alınamadı",
        };
      }
    }

    // Web / Next.js dev server: no native purchase flow, use local mock state.
    const cachedStatus = await storage.get(STORAGE_PREMIUM_KEY);
    const isPremium = cachedStatus === "true";

    return {
      isPremium,
      activePlanId: isPremium ? "yearly" : null,
      expirationDate: isPremium ? "2027-12-31" : null,
      isLoading: false,
      error: null,
    };
  }

  public async purchasePackage(planId: string): Promise<{ success: boolean; error?: string }> {
    await this.init();

    if (Capacitor.isNativePlatform()) {
      try {
        const offerings = await Purchases.getOfferings();
        if (offerings.current && offerings.current.availablePackages.length > 0) {
          const matchedPackage = offerings.current.availablePackages.find(
            (pkg) => pkg.identifier === planId || pkg.packageType.toLowerCase().includes(planId.toLowerCase())
          ) || offerings.current.availablePackages[0];

          const { customerInfo } = await Purchases.purchasePackage({ aPackage: matchedPackage });
          const isPremium = typeof customerInfo.entitlements.active["premium"] !== "undefined";
          await storage.set(STORAGE_PREMIUM_KEY, isPremium ? "true" : "false");
          return { success: isPremium };
        }
        // Fail closed: no offerings configured, never grant premium for free.
        return { success: false, error: "Satın alma paketleri şu anda kullanılamıyor." };
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Satın alma işlemi tamamlanamadı.";
        return { success: false, error: message };
      }
    }

    // Mock Purchase for web development / simulator
    await storage.set(STORAGE_PREMIUM_KEY, "true");
    return { success: true };
  }

  public async restorePurchases(): Promise<{ success: boolean; isPremium: boolean; error?: string }> {
    await this.init();

    if (Capacitor.isNativePlatform()) {
      try {
        const { customerInfo } = await Purchases.restorePurchases();
        const isPremium = typeof customerInfo.entitlements.active["premium"] !== "undefined";
        await storage.set(STORAGE_PREMIUM_KEY, isPremium ? "true" : "false");
        return { success: true, isPremium };
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Geri yükleme başarısız oldu.";
        return { success: false, isPremium: false, error: message };
      }
    }

    // Web mock restore
    const cached = await storage.get(STORAGE_PREMIUM_KEY);
    return { success: true, isPremium: cached === "true" };
  }
}

export const revenueCat = new RevenueCatService();
