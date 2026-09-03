"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { Geolocation } from "@capacitor/geolocation";
import { Capacitor } from "@capacitor/core";
import { TURKEY_CITIES, CityLocation, calculatePrayerTimes } from "@/lib/prayerTimes";
import { PrayerTimesData } from "@/lib/types";
import { storage } from "@/lib/storage";

interface LocationContextValue {
  selectedCity: CityLocation;
  allCities: CityLocation[];
  selectCity: (city: CityLocation) => Promise<void>;
  detectGPSLocation: () => Promise<boolean>;
  isDetectingGPS: boolean;
  isGPSActive: boolean;
  locationError: string | null;
  prayerData: PrayerTimesData;
  refreshTimes: () => void;
}

const LocationContext = createContext<LocationContextValue | undefined>(undefined);
const STORAGE_CITY_KEY = "huzur_selected_city_name";
const STORAGE_GPS_KEY = "huzur_gps_coords";

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<CityLocation>(TURKEY_CITIES[0]);
  const [isDetectingGPS, setIsDetectingGPS] = useState(false);
  const [isGPSActive, setIsGPSActive] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const [prayerData, setPrayerData] = useState<PrayerTimesData>(() =>
    calculatePrayerTimes(TURKEY_CITIES[0], new Date())
  );

  const refreshTimes = useCallback(() => {
    setPrayerData(calculatePrayerTimes(selectedCity, new Date()));
  }, [selectedCity]);

  // Load saved city or saved GPS coords on mount
  useEffect(() => {
    async function loadSavedLocation() {
      const savedGps = await storage.get(STORAGE_GPS_KEY);
      if (savedGps) {
        try {
          const coords = JSON.parse(savedGps);
          const gpsLocation: CityLocation = {
            name: coords.cityName || "Konumunuz (GPS)",
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
          setSelectedCity(gpsLocation);
          setIsGPSActive(true);
          return;
        } catch {
          // fallback
        }
      }

      const savedCityName = await storage.get(STORAGE_CITY_KEY);
      if (savedCityName) {
        const found = TURKEY_CITIES.find((c) => c.name === savedCityName);
        if (found) {
          setSelectedCity(found);
        }
      }
    }
    loadSavedLocation();
  }, []);

  // Update countdown timer every second
  useEffect(() => {
    refreshTimes();
    const interval = setInterval(refreshTimes, 1000);
    return () => clearInterval(interval);
  }, [refreshTimes]);

  const selectCity = useCallback(async (city: CityLocation) => {
    setSelectedCity(city);
    setIsGPSActive(false);
    setLocationError(null);
    await storage.remove(STORAGE_GPS_KEY);
    await storage.set(STORAGE_CITY_KEY, city.name);
    setPrayerData(calculatePrayerTimes(city, new Date()));
  }, []);

  const detectGPSLocation = useCallback(async (): Promise<boolean> => {
    setIsDetectingGPS(true);
    setLocationError(null);

    try {
      let lat: number;
      let lng: number;

      if (Capacitor.isNativePlatform()) {
        const permission = await Geolocation.requestPermissions();
        if (permission.location === "denied") {
          throw new Error("Konum izni verilmedi.");
        }
        const position = await Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 10000,
        });
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      } else if (typeof navigator !== "undefined" && "geolocation" in navigator) {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
          });
        });
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      } else {
        throw new Error("Tarayıcı veya cihaz konum servisini desteklemiyor.");
      }

      // Find nearest city name for display or use GPS name
      let nearestName = "Mevcut Konumunuz (GPS)";
      let minDistance = Infinity;

      TURKEY_CITIES.forEach((city) => {
        const d = Math.hypot(city.latitude - lat, city.longitude - lng);
        if (d < minDistance) {
          minDistance = d;
          if (d < 0.3) {
            nearestName = `${city.name} (GPS)`;
          }
        }
      });

      const gpsLocation: CityLocation = {
        name: nearestName,
        latitude: lat,
        longitude: lng,
      };

      setSelectedCity(gpsLocation);
      setIsGPSActive(true);
      await storage.setJSON(STORAGE_GPS_KEY, {
        latitude: lat,
        longitude: lng,
        cityName: nearestName,
      });

      setPrayerData(calculatePrayerTimes(gpsLocation, new Date()));
      setIsDetectingGPS(false);
      return true;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "GPS konumu alınamadı.";
      setLocationError(msg);
      setIsDetectingGPS(false);
      return false;
    }
  }, []);

  const value = useMemo(
    () => ({
      selectedCity,
      allCities: TURKEY_CITIES,
      selectCity,
      detectGPSLocation,
      isDetectingGPS,
      isGPSActive,
      locationError,
      prayerData,
      refreshTimes,
    }),
    [
      selectedCity,
      selectCity,
      detectGPSLocation,
      isDetectingGPS,
      isGPSActive,
      locationError,
      prayerData,
      refreshTimes,
    ]
  );

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
