import { z } from "zod";

// --- Prayer Times Types ---
export interface PrayerTimeItem {
  id: string;
  name: string;
  time: string;
  timestamp?: Date;
  active?: boolean;
  passed?: boolean;
}

export interface PrayerTimesData {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  currentPrayer: PrayerTimeItem | null;
  nextPrayer: PrayerTimeItem | null;
  timeRemainingSeconds: number;
  formattedRemaining: string;
  progressPercent: number;
  dateStr: string;
  hijriDateStr: string;
  locationName: string;
}

// --- Quran & Surah Types ---
export interface Verse {
  number: number;
  surahNumber: number;
  arabic: string;
  transliteration: string;
  translation: string;
  featured?: boolean;
  audioUrl?: string;
}

export interface Surah {
  number: number;
  name: string;
  arabicName: string;
  meaning: string;
  versesCount: number;
  revelationType: "Mekke" | "Medine";
  description?: string;
  audioUrl?: string;
  verses?: Verse[];
  isLocked?: boolean;
}

// --- Reminders & Notifications Types ---
export interface Reminder {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "prayer" | "verse" | "dhikr" | "custom";
  enabled: boolean;
  iconName: string;
  iconBgClass: string;
}

// --- Learn Module Types ---
export interface PrayerGuideStep {
  id: number;
  stepNumber: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  duaArabic?: string;
  duaTransliteration?: string;
  duaTranslation?: string;
  image: string;
  icon: string;
  badgeLabel?: string;
}

export interface FaithPrinciple {
  id: string;
  number: number;
  title: string;
  label: string;
  summary: string;
  detailedText: string;
  sources: { title: string; reference: string; description: string }[];
  reflectionPrompt: string;
  featured?: boolean;
}

// --- RevenueCat & Subscription Types ---
export interface SubscriptionPlan {
  id: string;
  rcPackageId: string;
  name: string;
  subtitle: string;
  priceString: string;
  periodDescription: string;
  monthlyEquivalent?: string;
  savingsBadge?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
}

export interface UserSubscriptionState {
  isPremium: boolean;
  activePlanId: string | null;
  expirationDate: string | null;
  isLoading: boolean;
  error: string | null;
}

// Zod Schema for input validation
export const LocationSchema = z.object({
  city: z.string().min(2),
  country: z.string().default("Türkiye"),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export type LocationCoords = z.infer<typeof LocationSchema>;
