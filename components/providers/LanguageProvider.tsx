"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { storage } from "@/lib/storage";
import { isRTLLanguage, getLanguageOption, t as translate, LanguageOption } from "@/lib/i18n";

export interface LanguageContextValue {
  language: string;
  isRTL: boolean;
  setLanguage: (lang: string) => Promise<void>;
  t: (key: string) => string;
  currentLanguageObj: LanguageOption;
}

const STORAGE_LANGUAGE_KEY = "huzur_app_language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<string>("tr");

  // Apply RTL/LTR direction and lang attribute to document.documentElement
  const applyDirectionAndLang = useCallback((lang: string) => {
    if (typeof document === "undefined") return;
    const isRtl = isRTLLanguage(lang);
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }, []);

  // Load initial saved language on mount
  useEffect(() => {
    async function loadSavedLanguage() {
      const savedLang = await storage.get(STORAGE_LANGUAGE_KEY);
      if (savedLang) {
        setLanguageState(savedLang);
        applyDirectionAndLang(savedLang);
      } else {
        applyDirectionAndLang("tr");
      }
    }
    loadSavedLanguage();
  }, [applyDirectionAndLang]);

  const setLanguage = useCallback(
    async (newLang: string) => {
      setLanguageState(newLang);
      applyDirectionAndLang(newLang);
      await storage.set(STORAGE_LANGUAGE_KEY, newLang);
    },
    [applyDirectionAndLang]
  );

  const tFunc = useCallback(
    (key: string): string => {
      return translate(key, language);
    },
    [language]
  );

  const isRTL = useMemo(() => isRTLLanguage(language), [language]);

  const currentLanguageObj = useMemo(() => getLanguageOption(language), [language]);

  const value = useMemo(
    () => ({
      language,
      isRTL,
      setLanguage,
      t: tFunc,
      currentLanguageObj,
    }),
    [language, isRTL, setLanguage, tFunc, currentLanguageObj]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div dir={isRTL ? "rtl" : "ltr"} className="w-full min-h-full">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
