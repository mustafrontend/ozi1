"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Pause, Volume2, Quote, Info, CheckCircle2, ArrowRight } from "lucide-react";
import { PRAYER_GUIDE_STEPS } from "@/lib/quranData";
import { Button } from "@/components/atoms/Button";

export default function PrayerGuideScreen() {
  const [activeStepId, setActiveStepId] = useState(1);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const activeStep = PRAYER_GUIDE_STEPS.find((s) => s.id === activeStepId) || PRAYER_GUIDE_STEPS[0];

  useEffect(() => {
    setIsSpeechSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Stop narration when the user switches steps
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsAudioPlaying(false);
  }, [activeStepId]);

  const toggleAudioGuide = useCallback(() => {
    if (!isSpeechSupported) return;

    if (isAudioPlaying) {
      window.speechSynthesis.cancel();
      setIsAudioPlaying(false);
      return;
    }

    const textToSpeak = [
      activeStep.title,
      activeStep.description,
      activeStep.duaTransliteration,
    ]
      .filter(Boolean)
      .join(". ");

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "tr-TR";
    utterance.rate = 0.95;
    utterance.onend = () => setIsAudioPlaying(false);
    utterance.onerror = () => setIsAudioPlaying(false);
    utteranceRef.current = utterance;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsAudioPlaying(true);
  }, [isAudioPlaying, isSpeechSupported, activeStep]);

  return (
    <div className="min-h-screen pb-32 font-body">
      <header className="border-b-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card px-5 pb-5 pt-12">
        <div className="flex items-center gap-3">
          <Link
            href="/ogren"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-foreground hover:bg-slate-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary">Namaz Rehberi</p>
            <h1 className="font-heading text-2xl font-black text-foreground">Namaz Nasıl Kılınır?</h1>
          </div>
        </div>
      </header>

      <main className="space-y-6 px-5 pt-5">
        {/* Audio Summary Card */}
        <div className="rounded-2xl border-[0.5px] border-primary/30 bg-white dark:bg-card p-5 shadow-card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-primary">Temel Akış</span>
              <h2 className="mt-1 font-heading text-2xl font-black text-foreground">İki Rekât Namaz</h2>
              <p className="mt-1 text-xs text-muted-foreground">İki rekâtlık farz veya sünnet namazın eksiksiz kılınışı.</p>
            </div>
            <button
              onClick={toggleAudioGuide}
              disabled={!isSpeechSupported}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow active:scale-95 disabled:opacity-40"
            >
              {isAudioPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary">
            <Volume2 className="h-4 w-4" />
            {isSpeechSupported
              ? isAudioPlaying
                ? `Okunuyor: ${activeStep.name}`
                : "Sesli Rehber · Adımı Dinle"
              : "Sesli rehber bu cihazda desteklenmiyor"}
          </div>
        </div>

        {/* Step Numbers Bar */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading text-lg font-black text-foreground">Adım Adım İlerle</h3>
            <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-black text-primary">
              {activeStepId} / {PRAYER_GUIDE_STEPS.length}
            </span>
          </div>

          <div className="flex justify-between rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card p-3 shadow-card">
            {PRAYER_GUIDE_STEPS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStepId(s.id)}
                className="flex flex-col items-center gap-1.5 focus:outline-none"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black transition-all ${
                    s.id === activeStepId
                      ? "bg-primary text-primary-foreground scale-110 shadow-glow"
                      : "bg-slate-100 dark:bg-muted text-muted-foreground"
                  }`}
                >
                  {s.id}
                </span>
                <span className={`text-[10px] font-bold ${s.id === activeStepId ? "text-primary" : "text-muted-foreground"}`}>
                  {s.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content Card */}
        <div className="overflow-hidden rounded-2xl border-[0.5px] border-primary/30 bg-white dark:bg-card p-5 shadow-card">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
              {activeStep.stepNumber}
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-primary">{activeStep.subtitle}</p>
              <h2 className="font-heading text-2xl font-black text-foreground">{activeStep.title}</h2>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{activeStep.description}</p>

          {activeStep.duaArabic && (
            <p dir="rtl" className="mt-4 text-right font-arabic text-2xl leading-loose text-foreground">
              {activeStep.duaArabic}
            </p>
          )}

          {activeStep.duaTransliteration && (
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-start gap-2">
                <Quote className="h-4 w-4 shrink-0 text-primary mt-1" />
                <div>
                  <p className="font-heading text-base font-bold text-foreground">{activeStep.duaTransliteration}</p>
                  {activeStep.duaTranslation && (
                    <p className="mt-1 text-xs text-muted-foreground">{activeStep.duaTranslation}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Info className="h-4 w-4 text-primary" />
            <span>Namaz esnasında kıbleye yönelmek ve huşû esastır.</span>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 dark:border-border bg-white/95 dark:bg-background/95 p-4 backdrop-blur-xl max-w-md mx-auto">
        <Button
          onClick={() => {
            if (activeStepId < PRAYER_GUIDE_STEPS.length) setActiveStepId((p) => p + 1);
          }}
          className="w-full"
        >
          <CheckCircle2 className="h-5 w-5" />
          <span>{activeStepId === PRAYER_GUIDE_STEPS.length ? "Rehberi Tamamladım" : "Sonraki Adıma Geç"}</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
