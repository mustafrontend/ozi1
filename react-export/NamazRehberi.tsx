import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Compass,
  Info,
  Play,
  Quote,
  Share2,
  Sparkles,
  Volume2,
} from "lucide-react";

const steps = [
  { number: 1, label: "Niyet", active: true },
  { number: 2, label: <>İftitah<br />tekbiri</> },
  { number: 3, label: "Kıyam" },
  { number: 4, label: "Rükû" },
  { number: 5, label: "Secde" },
  { number: 6, label: "Oturma" },
  { number: 7, label: "Selam" },
];

const positions = [
  {
    step: "02 · Duruş",
    title: "Kıyam",
    icon: ArrowUp,
    image:
      "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/d4c18b43-049d-4aba-b820-a0972856aac1.png",
    alt: "Namaz duruşlarını gösteren çizim",
    textLabel: "Okuma",
    text: "Fâtiha Suresi ve ardından kısa bir sure okunur.",
    variant: "secondary",
    imageClass: "h-28 w-full",
  },
  {
    step: "03 · Duruş",
    title: "Rükû",
    icon: ArrowDown,
    image:
      "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/ac0672ed-8bbf-4205-9e12-7ed492885e78.png",
    alt: "Rükû duruşu",
    textLabel: "Tesbih",
    text: "Sübhâne rabbiye'l-azîm",
    variant: "card",
    imageClass: "h-28 w-32",
  },
  {
    step: "04 · Duruş",
    title: "Secde",
    icon: ChevronDown,
    image:
      "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/af0f71e6-9472-42b6-b020-e248858e413c.png",
    alt: "Secde duruşu",
    textLabel: "Tesbih",
    text: "Sübhâne rabbiye'l-a'lâ",
    variant: "card",
    imageClass: "h-28 w-32",
  },
];

const preparations = [
  { label: "Abdestin farzları", icon: Check, color: "success" },
  { label: "Kıbleye yönelmek", icon: Compass, color: "primary" },
  { label: "Vakit girmiş olmalı", icon: Clock3, color: "accent" },
];

export default function PrayerGuide() {
  return (
    <div className="min-h-screen w-full bg-background pb-28 font-body text-foreground">
      <header className="relative overflow-hidden border-b border-border bg-card px-5 pb-5 pt-12">
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-primary/15" />
        <div className="absolute right-1 top-8 h-24 w-24 rounded-full border border-primary/10" />

        <div className="relative flex items-center gap-4">
          <button
            type="button"
            aria-label="Öğren'e dön"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Namaz Rehberi
            </p>
            <h1 className="mt-1 font-heading text-[29px] leading-tight text-foreground">
              Namaz Nasıl Kılınır?
            </h1>
          </div>

          <button
            type="button"
            aria-label="Rehberi paylaş"
            className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main>
        <section className="px-5 pt-5">
          <div className="relative overflow-hidden rounded-theme border border-primary/30 bg-card px-5 py-5 shadow-xl">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-primary/15" />

            <div className="relative flex items-start justify-between gap-4">
              <div className="max-w-[230px]">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                    Temel akış
                  </p>
                </div>
                <h2 className="mt-3 font-heading text-2xl leading-tight text-foreground">
                  İki rekât namazın yolculuğu
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Bu rehber iki rekât namazın temel akışını anlatır.
                </p>
              </div>

              <button
                type="button"
                aria-label="Sesli anlatımı başlat"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
              >
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              </button>
            </div>

            <button
              type="button"
              className="relative mt-5 flex items-center gap-2 text-xs font-bold text-primary"
            >
              <Volume2 className="h-4 w-4" />
              <span>Sesli anlatım</span>
              <span className="text-muted-foreground">· 2 dk</span>
            </button>
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-2xl text-foreground">
                Adım adım ilerle
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                İlk adım açık
              </p>
            </div>
            <span className="rounded-full bg-primary/15 px-3 py-1.5 text-xs font-extrabold text-primary">
              1 / 7
            </span>
          </div>

          <div className="mt-4 rounded-theme border border-border bg-card px-4 py-4">
            <div className="relative flex justify-between">
              <div className="absolute left-3 right-3 top-3 h-px bg-border" />
              <div className="absolute left-3 top-3 h-px w-[5%] bg-primary" />

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex w-10 flex-col items-center gap-2"
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] ${
                      step.active
                        ? "border-2 border-primary bg-primary font-extrabold text-primary-foreground"
                        : "border border-border bg-muted font-bold text-muted-foreground"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`text-center text-[9px] leading-3 ${
                      step.active
                        ? "font-bold text-primary"
                        : "font-semibold text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="relative overflow-hidden rounded-theme border border-primary/35 bg-card px-5 pb-5 pt-5">
            <svg
              viewBox="0 0 120 120"
              className="absolute -right-7 -top-8 h-32 w-32 text-chart1 opacity-20"
              aria-hidden="true"
            >
              <path
                d="M60 5 72 35 105 15 85 48 115 60 85 72 105 105 72 85 60 115 48 85 15 105 35 72 5 60 35 48 15 15 48 35Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="60"
                cy="60"
                r="24"
                fill="none"
                stroke="currentColor"
              />
            </svg>

            <div className="relative flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                1
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  İlk adım
                </p>
                <h2 className="font-heading text-3xl leading-tight text-foreground">
                  Niyet
                </h2>
              </div>
            </div>

            <p className="relative mt-5 text-sm leading-7 text-muted-foreground">
              Kalbinle hangi namazı kılmaya niyet ettiğini belirle. Niyet,
              ibadetin yönünü ve maksadını gönülde tayin etmektir.
            </p>

            <div className="relative mt-5 rounded-theme border border-primary/25 bg-muted px-4 py-4">
              <div className="flex items-start gap-3">
                <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="font-heading text-xl leading-8 text-foreground">
                  Niyet ettim Allah rızası için sabah namazının farzını kılmaya
                </p>
              </div>
            </div>

            <div className="relative mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Info className="h-4 w-4 text-primary" />
              <span>Niyet kalpten geçirilir; dil ile söylemek güzeldir.</span>
            </div>
          </div>
        </section>

        <section className="pt-7">
          <div className="flex items-end justify-between px-5">
            <div>
              <h2 className="font-heading text-2xl text-foreground">
                Duruşlar ve okumalar
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Yatay kaydırarak incele
              </p>
            </div>
            <div className="flex gap-1.5">
              <span className="h-1.5 w-5 rounded-full bg-primary" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto px-5 pb-2">
            {positions.map((position) => {
              const Icon = position.icon;
              return (
                <article
                  key={position.title}
                  className={`relative min-w-[278px] overflow-hidden rounded-theme border border-border px-4 pb-4 pt-4 ${
                    position.variant === "secondary" ? "bg-secondary" : "bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                        {position.step}
                      </p>
                      <h3 className="mt-1 font-heading text-2xl text-foreground">
                        {position.title}
                      </h3>
                    </div>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex h-28 items-center justify-center">
                    <img
                      src={position.image}
                      alt={position.alt}
                      loading="lazy"
                      decoding="async"
                      className={`${position.imageClass} object-contain drop-shadow-xl`}
                    />
                  </div>

                  <div className="border-t border-border pt-3">
                    <p className="text-xs font-bold text-primary">
                      {position.textLabel}
                    </p>
                    <p
                      className={`mt-1 leading-6 text-foreground ${
                        position.title === "Kıyam"
                          ? "text-sm"
                          : "font-heading text-lg"
                      }`}
                    >
                      {position.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-5 pb-8 pt-7">
          <div className="mb-3">
            <h2 className="font-heading text-2xl text-foreground">
              Namazdan Önce
            </h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Hazırlığını tamamla
            </p>
          </div>

          <div className="overflow-hidden rounded-theme border border-border bg-card">
            {preparations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label}>
                  {index > 0 && <div className="mx-4 border-t border-border" />}
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-4 text-left"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-${item.color}/15 text-${item.color}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-foreground">
                      {item.label}
                    </span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-border bg-background/95 px-5 pb-6 pt-4 backdrop-blur-xl">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-theme bg-primary px-5 py-4 text-sm font-extrabold text-primary-foreground shadow-lg"
        >
          <CheckCircle2 className="h-5 w-5" />
          <span>Rehberi tamamladım</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}