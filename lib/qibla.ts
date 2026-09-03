import { Coordinates, Qibla } from "adhan";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Capacitor } from "@capacitor/core";

// Kaaba Coordinates
const MECCA_LAT = 21.422487;
const MECCA_LNG = 39.826206;

/**
 * Calculates the forward azimuth / bearing in degrees towards the Kaaba (Qibla)
 * from given latitude and longitude coordinates.
 */
export function calculateQiblaBearing(lat: number, lng: number): number {
  try {
    const coords = new Coordinates(lat, lng);
    return Math.round(Qibla(coords) * 10) / 10;
  } catch {
    // Great-circle formula fallback
    const φ1 = (lat * Math.PI) / 180;
    const φ2 = (MECCA_LAT * Math.PI) / 180;
    const Δλ = ((MECCA_LNG - lng) * Math.PI) / 180;

    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const θ = Math.atan2(y, x);
    const bearing = ((θ * 180) / Math.PI + 360) % 360;

    return Math.round(bearing * 10) / 10;
  }
}

/**
 * Trigger subtle haptic feedback on mobile when aligned to Qibla
 */
export async function triggerQiblaAlignedHaptic(): Promise<void> {
  if (Capacitor.isNativePlatform()) {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch {
      // Haptics not available
    }
  } else if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(30);
    } catch {
      // ignored
    }
  }
}
