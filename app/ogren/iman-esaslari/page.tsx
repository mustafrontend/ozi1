"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock3, ShieldCheck, Heart, Library, ChevronDown } from "lucide-react";
import { FAITH_PRINCIPLES } from "@/lib/quranData";

export default function FaithPrinciplesScreen() {
  const [openSources, setOpenSources] = useState<number[]>([0]);

  const toggleSource = (idx: number) => {
    setOpenSources((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
  };

  return (
    <div className="min-h-screen pb-32 font-body">
      <header className="border-b-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card px-5 pb-6 pt-12">
        <Link href="/ogren" className="flex items-center gap-2 text-xs font-black text-primary">
          <ArrowLeft className="h-4 w-4" /> Öğren&apos;e Dön
        </Link>
        <h1 className="mt-4 font-heading text-3xl font-black text-foreground">İmanın Şartları</h1>
        <p className="mt-1 text-sm text-muted-foreground">İman, Allah&apos;ın bildirdiği esaslara gönülden inanmaktır.</p>
        <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-primary" /> 8 dk</span>
          <span className="flex items-center gap-1.5 text-success"><ShieldCheck className="h-4 w-4" /> Kaynaklı</span>
        </div>
      </header>

      <main className="space-y-5 px-5 pt-6">
        {/* Principles List */}
        {FAITH_PRINCIPLES.map((principle) => (
          <article
            key={principle.id}
            className={`rounded-2xl border-[0.5px] p-5 shadow-card ${
              principle.featured
                ? "border-primary/40 bg-white dark:bg-card"
                : "border-slate-200 dark:border-border bg-white dark:bg-card"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                0{principle.number}
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-primary">{principle.label}</p>
                <h2 className="font-heading text-xl font-black text-foreground">{principle.title}</h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{principle.detailedText}</p>
          </article>
        ))}

        {/* Reflection Card */}
        <section className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-wider">
            <Heart className="h-4 w-4" /> Düşün ve Tefekkür Et
          </div>
          <p className="mt-3 font-heading text-lg font-bold text-foreground">
            Bugün Allah&apos;a olan tevekkülünü ve şükrünü hangi davranışınla gösterebilirsin?
          </p>
        </section>

        {/* Sources Accordion */}
        <section className="rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Library className="h-4 w-4 text-primary" />
            <h3 className="font-heading text-lg font-black text-foreground">Güvenilir Kaynaklar</h3>
          </div>
          {FAITH_PRINCIPLES[0].sources.map((src, i) => (
            <div key={src.title} className="border-t border-slate-100 dark:border-border pt-3 mt-3">
              <button
                type="button"
                onClick={() => toggleSource(i)}
                className="flex w-full items-center justify-between text-left"
              >
                <div>
                  <p className="text-sm font-bold text-foreground">{src.title}</p>
                  <p className="text-xs text-muted-foreground">{src.description}</p>
                </div>
                <ChevronDown className={`h-4 w-4 text-primary transition-transform ${openSources.includes(i) ? "rotate-180" : ""}`} />
              </button>
              {openSources.includes(i) && (
                <p className="mt-2 text-xs font-semibold text-primary">{src.reference}</p>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
