import React from "react";
import {
  ArrowRight,
  Ban,
  BookOpen,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Compass,
  Droplets,
  GraduationCap,
  Heart,
  Leaf,
  MoveUp,
  Scale,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

const prayerTopics = [
  {
    title: "Abdest",
    description: "Temizlik ve hazırlık",
    duration: "5 dk",
    icon: Droplets,
    decoration: "rounded-full",
  },
  {
    title: "Namaza niyet",
    description: "Kalbin yönelişi",
    duration: "3 dk",
    icon: Heart,
    decoration: "rotate-45",
  },
  {
    title: "Kıyam, rükû ve secde",
    description: "Namazın hareketleri",
    duration: "8 dk",
    icon: MoveUp,
    decoration: "rounded-full",
  },
  {
    title: "Namaz sonrası tesbihat",
    description: "Huzurla tamamla",
    duration: "4 dk",
    icon: CheckCircle2,
    decoration: "rotate-45",
  },
];

const faithTopics = [
  "Allah'a iman",
  "Meleklere iman",
  "Kitaplara iman",
  "Peygamberlere iman",
  "Ahiret gününe iman",
  "Kader'e iman",
];

const islamTopics = [
  ["١", "Kelime-i şehadet", "3 dk"],
  ["٢", "Namaz kılmak", "6 dk"],
  ["٣", "Oruç tutmak", "5 dk"],
  ["٤", "Zekât vermek", "7 dk"],
  ["٥", "Hacca gitmek", "8 dk"],
];

const concepts = [
  {
    title: "Helal",
    description: "Dinen izin verilen",
    duration: "6 dk",
    icon: Leaf,
    tone: "success",
  },
  {
    title: "Haram",
    description: "Dinen yasaklanan",
    duration: "7 dk",
    icon: Ban,
    tone: "destructive",
  },
  {
    title: "Mekruh",
    description: "Kaçınılması güzel olan",
    duration: "5 dk",
    icon: Scale,
    tone: "accent",
  },
];

const tabs = [
  { label: "Bugün", icon: CalendarDays },
  { label: "Öğren", icon: GraduationCap, active: true },
  { label: "Kuran", icon: BookOpen },
  { label: "Kıble", icon: Compass },
];

function SectionHeading({ eyebrow, title, meta }) {
  return (
    <div className="flex items-end justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-1 font-heading text-2xl text-foreground">{title}</h2>
      </div>
      {meta && <span className="text-xs text-muted-foreground">{meta}</span>}
    </div>
  );
}

function SourceLabel() {
  return (
    <span className="flex items-center gap-1 font-bold text-success">
      <BookOpen className="h-3 w-3" />
      Kaynaklar
    </span>
  );
}

export default function LearnScreen() {
  return (
    <div className="min-h-screen w-full bg-background pb-36 font-body text-foreground">
      <header className="relative overflow-hidden border-b border-border bg-card px-5 pb-6 pt-12">
        <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border border-primary/20" />
        <div className="absolute right-5 top-10 h-24 w-24 rounded-full border border-primary/10" />

        <div className="relative">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Manevi kütüphane
              </p>
              <h1 className="mt-2 font-heading text-4xl leading-none text-foreground">
                Öğren
              </h1>
              <p className="mt-2 max-w-[260px] text-sm leading-5 text-muted-foreground">
                Bilgini derinleştir, ibadetini anlamla güzelleştir.
              </p>
            </div>

            <button
              type="button"
              aria-label="Öğrenme geçmişi"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-primary"
            >
              <Bookmark className="h-5 w-5" />
            </button>
          </div>

          <label className="relative mt-5 flex items-center gap-3 rounded-theme border border-border bg-input px-4 py-3.5">
            <Search className="h-5 w-5 text-primary" />
            <input
              type="search"
              aria-label="İslami konularda ara"
              placeholder="İslami konularda ara"
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              aria-label="Arama filtreleri"
              className="text-muted-foreground"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </label>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {["Abdest", "Fatiha", "Zekât"].map((tag, index) => (
              <button
                key={tag}
                type="button"
                className={`shrink-0 rounded-full border px-3.5 py-2 text-xs ${
                  index === 0
                    ? "border-primary/35 bg-primary/10 font-bold text-primary"
                    : "border-border bg-muted font-semibold text-muted-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="px-5 pt-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                Başlangıç noktası
              </p>
              <h2 className="mt-1 font-heading text-3xl text-foreground">
                Namaz Rehberi
              </h2>
            </div>
            <span className="mb-1 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-success" />
              Güvenilir içerik
            </span>
          </div>

          <article className="relative mt-4 h-44 overflow-hidden rounded-theme border border-primary/30">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/13646063-3832-422c-92e6-5481f3838714.png"
              alt="Seccade, tesbih ve kapalı Kur'an"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/50 bg-background/70 text-primary backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary">
                  Adım adım öğren
                </span>
              </div>

              <div className="flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-heading text-2xl leading-tight text-foreground">
                    Namazı bilinçle kıl
                  </h3>
                  <p className="mt-1 text-xs text-foreground/75">
                    Temel rehber · 12 dk
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Namaz Rehberini aç"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </article>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {prayerTopics.map(
              ({ title, description, duration, icon: Icon, decoration }) => (
                <article
                  key={title}
                  className="relative overflow-hidden rounded-theme border border-border bg-card p-4"
                >
                  <div
                    className={`absolute -right-3 -top-3 h-16 w-16 border border-primary/15 ${decoration}`}
                  />
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="relative mt-3 font-heading text-xl leading-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                    {description}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[10px]">
                    <span className="text-muted-foreground">{duration}</span>
                    <SourceLabel />
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="px-5 pt-7">
          <SectionHeading
            eyebrow="İnanç temelleri"
            title="İmanın Şartları"
            meta="6 konu"
          />
          <div className="mt-3 overflow-hidden rounded-theme border border-border bg-card">
            <div className="grid grid-cols-2">
              {faithTopics.map((topic, index) => (
                <div
                  key={topic}
                  className={`flex items-center gap-3 border-b border-border px-3.5 py-3.5 ${
                    index % 2 === 0 ? "border-r" : ""
                  } ${index >= 4 ? "border-b-0" : ""}`}
                >
                  <span className="font-heading text-xl text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold text-card-foreground">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-border px-4 py-3">
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <Clock3 className="h-4 w-4 text-primary" />
                10 dk okuma
              </span>
              <SourceLabel />
            </div>
          </div>
        </section>

        <section className="px-5 pt-7">
          <SectionHeading
            eyebrow="Günlük yaşam"
            title="İslamın Şartları"
            meta="5 konu"
          />
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {islamTopics.map(([number, title, duration]) => (
              <article
                key={title}
                className="min-w-[124px] rounded-theme border border-border bg-muted p-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 font-heading text-lg text-primary">
                  {number}
                </span>
                <p className="mt-3 text-xs font-bold text-foreground">{title}</p>
                <p className="mt-2 text-[10px] text-muted-foreground">
                  {duration} · Kaynaklar
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pt-7">
          <div className="flex items-end justify-between">
            <SectionHeading eyebrow="Sık başvurulan" title="Kavramlar" />
            <button type="button" className="text-xs font-bold text-primary">
              Tümünü gör
            </button>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {concepts.map(
              ({ title, description, duration, icon: Icon, tone }) => (
                <article
                  key={title}
                  className={`rounded-theme border border-${tone}/30 bg-${tone}/10 p-3`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-${tone}/20 text-${tone}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 font-heading text-xl text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
                    {description}
                  </p>
                  <p className={`mt-3 text-[10px] font-bold text-${tone}`}>
                    {duration} · Kaynaklar
                  </p>
                </article>
              ),
            )}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-5 left-1/2 z-20 flex w-[calc(100%-32px)] -translate-x-1/2 items-center justify-around rounded-[22px] border border-primary/35 bg-card/95 px-2 py-2 shadow-2xl backdrop-blur-xl">
        {tabs.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex min-w-[70px] flex-col items-center gap-1 px-3 py-2 ${
              active
                ? "rounded-theme bg-primary/15 font-extrabold text-primary"
                : "font-semibold text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px]">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}