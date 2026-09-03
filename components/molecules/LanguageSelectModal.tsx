"use client";

import React, { memo, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Languages, Check, Search, Globe } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";
import { SUPPORTED_LANGUAGES, LanguageOption } from "@/lib/i18n";

export interface LanguageSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LanguageSelectModal = memo(function LanguageSelectModal({
  isOpen,
  onClose,
}: LanguageSelectModalProps) {
  const { language, setLanguage, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return SUPPORTED_LANGUAGES;
    const query = searchQuery.toLowerCase().trim();
    return SUPPORTED_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(query) ||
        lang.nativeName.toLowerCase().includes(query) ||
        lang.code.toLowerCase().includes(query) ||
        lang.badge.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  const handleSelectLanguage = (langCode: string) => {
    setLanguage(langCode);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/60 p-4 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 dark:border-border bg-white dark:bg-card p-5 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-border pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary border border-primary/30">
                <Languages className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-black text-foreground tracking-tight">
                  {t("select_language")}
                </h3>
                <p className="text-[11px] font-normal text-muted-foreground">
                  {t("select_language_desc")}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-muted-foreground hover:text-foreground transition-colors active:scale-[0.98]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("search_language")}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-muted/50 border border-slate-200 dark:border-border text-xs font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Language List */}
          <div className="mt-4 max-h-72 space-y-1.5 overflow-y-auto pr-1 scrollbar-none">
            {filteredLanguages.length === 0 ? (
              <div className="py-8 text-center text-xs text-muted-foreground">
                <Globe className="h-8 w-8 mx-auto mb-2 opacity-40 text-muted-foreground" />
                <p>Dil bulunamadı</p>
              </div>
            ) : (
              filteredLanguages.map((lang: LanguageOption) => {
                const isSelected = language.toLowerCase() === lang.code.toLowerCase();
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all duration-200 active:scale-[0.98] ${
                      isSelected
                        ? "bg-primary/15 border border-primary/40 text-primary shadow-sm"
                        : "bg-slate-50/60 dark:bg-muted/30 border border-slate-200/60 dark:border-border/40 text-foreground hover:bg-slate-100 dark:hover:bg-muted/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl leading-none select-none" role="img" aria-label={lang.name}>
                        {lang.flag}
                      </span>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${isSelected ? "font-black" : "font-bold"}`}>
                            {lang.nativeName}
                          </span>
                          {lang.isRTL && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold border border-amber-500/20">
                              RTL
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-normal text-muted-foreground">
                          {lang.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-slate-200/70 dark:bg-muted text-muted-foreground"
                        }`}
                      >
                        {lang.badge}
                      </span>
                      {isSelected && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
});
