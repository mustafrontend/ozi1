"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Droplets,
  Heart,
  MoveUp,
  CheckCircle2,
  Clock3,
  Leaf,
  Ban,
  Scale,
} from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";

const prayerTopics = [
  { title: "Abdest", desc: "Temizlik ve hazırlık", dur: "5 dk", icon: Droplets },
  { title: "Namaza niyet", desc: "Kalbin yönelişi", dur: "3 dk", icon: Heart },
  { title: "Kıyam ve rükû", desc: "Namazın duruşları", dur: "8 dk", icon: MoveUp },
  { title: "Tesbihat", desc: "Huzurla tamamla", dur: "4 dk", icon: CheckCircle2 },
];

const faithList = [
  "Allah'a iman", "Meleklere iman", "Kitaplara iman",
  "Peygamberlere iman", "Ahiret gününe iman", "Kadere iman",
];

const islamPillars = [
  ["١", "Kelime-i şehadet", "3 dk"],
  ["٢", "Namaz kılmak", "6 dk"],
  ["٣", "Oruç tutmak", "5 dk"],
  ["٤", "Zekât vermek", "7 dk"],
  ["٥", "Hacca gitmek", "8 dk"],
];

const concepts = [
  { title: "Helal", desc: "Dinen izin verilen", dur: "6 dk", icon: Leaf, tone: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200" },
  { title: "Haram", desc: "Dinen yasaklanan", dur: "7 dk", icon: Ban, tone: "text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-200" },
  { title: "Mekruh", desc: "Kaçınılması güzel olan", dur: "5 dk", icon: Scale, tone: "text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200" },
];

export default function LearnHubScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("Tümü");

  const tags = ["Tümü", "Abdest", "Fatiha", "İman", "Zekât"];

  return (
    <div className="min-h-screen pb-36 font-body">
      <header className="relative overflow-hidden border-b-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card px-5 pb-6 pt-12">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Manevi Kütüphane</p>
            <h1 className="mt-1 font-heading text-4xl font-black text-foreground">Öğren</h1>
            <p className="mt-1 text-sm text-muted-foreground">Bilgini derinleştir, ibadetini anlamla güzelleştir.</p>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-primary">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-border bg-slate-50 dark:bg-muted px-4 py-3">
          <Search className="h-4 w-4 text-primary" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="İslami konularda ara..."
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground font-semibold"
          />
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Tags */}
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs transition-all ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground font-extrabold shadow-sm"
                  : "bg-slate-100 dark:bg-muted text-muted-foreground font-bold hover:bg-slate-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      <main className="space-y-7 px-5 pt-6">
        {/* Namaz Rehberi Banner */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <SectionHeading eyebrow="Başlangıç Noktası" title="Namaz Rehberi" />
            <span className="flex items-center gap-1 text-[11px] font-bold text-success">
              <ShieldCheck className="h-4 w-4" /> Güvenilir
            </span>
          </div>

          <Link href="/ogren/namaz-rehberi" className="group block">
            <article className="relative h-44 overflow-hidden rounded-2xl border-[0.5px] border-primary/40 shadow-card">
              <img
                src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/13646063-3832-422c-92e6-5481f3838714.png"
                alt="Namaz Rehberi"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">Adım Adım Öğren</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-black text-amber-50">Namazı Bilinçle Kıl</h3>
                    <p className="text-xs text-slate-300">7 temel adım · 12 dk</p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Quick Subtopics */}
          <div className="mt-3 grid grid-cols-2 gap-3">
            {prayerTopics.map(({ title, desc, dur, icon: Icon }) => (
              <div key={title} className="rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card p-4 shadow-card">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="mt-3 font-heading text-lg font-bold text-foreground">{title}</h4>
                <p className="mt-0.5 text-[11px] text-muted-foreground">{desc}</p>
                <span className="mt-2 block text-[10px] font-semibold text-primary">{dur} okuma</span>
              </div>
            ))}
          </div>
        </section>

        {/* İmanın Şartları */}
        <section>
          <SectionHeading eyebrow="İnanç Temelleri" title="İmanın Şartları" subtitle="6 esas" />
          <Link href="/ogren/iman-esaslari" className="mt-3 block overflow-hidden rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-card shadow-card">
            <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 dark:divide-border">
              {faithList.map((faith, i) => (
                <div key={faith} className="flex items-center gap-2.5 p-3.5">
                  <span className="font-heading text-lg font-black text-primary">0{i + 1}</span>
                  <span className="text-xs font-bold text-foreground">{faith}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-border px-4 py-3 bg-slate-50/50 dark:bg-muted/40">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                <Clock3 className="h-4 w-4 text-primary" /> 8 dk okuma
              </span>
              <span className="flex items-center gap-1 text-xs font-black text-primary">
                Detayları Oku <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </section>

        {/* İslamın Şartları */}
        <section>
          <SectionHeading eyebrow="Günlük Yaşam" title="İslamın Şartları" />
          <div className="mt-3 flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {islamPillars.map(([num, title, dur]) => (
              <div key={title} className="min-w-[130px] rounded-2xl border-[0.5px] border-slate-200 dark:border-border bg-white dark:bg-muted p-3.5 shadow-card">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 font-heading text-base font-black text-primary">{num}</span>
                <p className="mt-3 text-xs font-black text-foreground">{title}</p>
                <p className="mt-1 text-[10px] text-muted-foreground">{dur}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dini Kavramlar */}
        <section>
          <SectionHeading eyebrow="Sık Başvurulan" title="Kavramlar" />
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {concepts.map(({ title, desc, dur, icon: Icon, tone }) => (
              <div key={title} className={`rounded-2xl border p-3 ${tone}`}>
                <Icon className="h-4 w-4" />
                <h4 className="mt-2 font-heading text-lg font-black">{title}</h4>
                <p className="text-[10px] opacity-80 leading-tight">{desc}</p>
                <span className="mt-2 block text-[9px] font-bold">{dur}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
