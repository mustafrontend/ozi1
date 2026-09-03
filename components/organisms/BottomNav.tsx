"use client";

import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, GraduationCap, BookOpen, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../providers/LanguageProvider";

export const BottomNav = memo(function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.today"), path: "/", icon: CalendarDays },
    { label: t("nav.learn"), path: "/ogren", icon: GraduationCap },
    { label: t("nav.quran"), path: "/kuran", icon: BookOpen },
    { label: t("nav.qibla"), path: "/kible", icon: Compass },
  ];

  // Hide bottom nav on standalone reading or paywall screens
  const isDedicatedFlow = pathname.includes("/premium") || pathname.includes("/sure/");

  if (isDedicatedFlow) return null;

  return (
    <nav
      aria-label="Ana Gezinti Menüsü"
      className="fixed bottom-5 left-1/2 z-40 flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 items-center justify-around rounded-[24px] border-[0.5px] border-primary/35 bg-white/90 dark:bg-card/90 px-2 py-2 shadow-floating backdrop-blur-xl"
    >
      {navItems.map(({ label, path, icon: Icon }) => {
        const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);

        return (
          <Link
            key={path}
            href={path}
            className="relative flex min-w-[70px] flex-col items-center gap-1 px-3 py-1.5 transition-colors"
          >
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-2xl bg-primary/15"
              />
            )}

            <Icon
              className={`relative z-10 h-5 w-5 transition-transform duration-200 ${
                isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-foreground"
              }`}
            />

            <span
              className={`relative z-10 text-[10px] tracking-tight ${
                isActive
                  ? "font-black text-primary"
                  : "font-semibold text-muted-foreground"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
});
