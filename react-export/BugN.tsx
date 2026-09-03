import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  BellRing,
  BookHeart,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Compass,
  Crown,
  GraduationCap,
  LocateFixed,
  MapPin,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import "./theme.css";

const prayerTimes = [
  { name: "İmsak", time: "04:18" },
  { name: "Güneş", time: "05:58" },
  { name: "Öğle", time: "13:18", active: true },
  { name: "İkindi", time: "17:05" },
  { name: "Akşam", time: "20:17" },
  { name: "Yatsı", time: "21:48" },
];

const reminders = [
  {
    title: "Öğle vaktine az kaldı",
    description: "Kalbini namaza yönelt",
    time: "12:58",
    icon: Bell,
    iconClass: "bg-primary/15 text-primary",
  },
  {
    title: "Bugünün tilaveti",
    description: "Rahman Suresi'nden bugün bir ayet oku",
    time: "18:30",
    icon: BookHeart,
    iconClass: "bg-secondary text-primary",
  },
];

const navigationItems = [
  { label: "Bugün", icon: CalendarDays, active: true },
  { label: "Öğren", icon: GraduationCap },
  { label: "Kuran", icon: BookOpen },
  { label: "Kıble", icon: Compass },
];

function App() {
  return (
    <div className="min-h-screen w-full bg-background pb-36 font-body text-foreground">
      <header className="relative overflow-hidden border-b border-border bg-card px-5 pb-5 pt-12">
        <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border border-primary/20" />
        <div className="absolute -right-2 top-6 h-24 w-24 rounded-full border border-primary/10" />

        <div className="relative flex items-center justify-between">
          <div>
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              <MapPin className="h-5 w-5 text-primary" />
              <span>Üsküdar, İstanbul</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
            <p className="mt-1 text-xs tracking-wide text-muted-foreground">
              10 Ağustos Pazartesi
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Premium üyeliği aç"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary"
            >
              <Crown className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Konumu değiştir"
              className="flex h-10 w-10 items-center justify-center rounded-theme border border-border bg-muted text-muted-foreground"
            >
              <LocateFixed className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="px-5 pt-5">
          <div className="relative overflow-hidden rounded-theme border border-primary/30 bg-card px-5 py-5 shadow-xl">
            <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border border-primary/20" />
            <div className="absolute -right-4 -top-6 h-32 w-32 rounded-full border border-primary/15" />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

            <div className="relative flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-lg" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Sıradaki namaz
                  </p>
                </div>
                <h1 className="mt-2 font-heading text-3xl leading-none text-foreground">
                  Öğle&apos;ye 01:18:24
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vakit girdiğinde kalbini huzura çağır.
                </p>
              </div>

              <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
                <svg
                  viewBox="0 0 120 120"
                  className="-rotate-90 absolute inset-0 h-full w-full"
                  aria-label="Öğle namazı geri sayımı"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    className="stroke-muted"
                    strokeWidth="6"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    className="stroke-primary"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="240 302"
                  />
                </svg>
                <div className="text-center">
                  <p className="font-heading text-3xl leading-none text-primary">
                    13:18
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Öğle
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-theme bg-primary px-4 py-3.5 text-sm font-extrabold text-primary-foreground shadow-lg"
            >
              <BookOpen className="h-5 w-5" />
              <span>Namaza hazırlık rehberini aç</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>

            <div className="relative mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-success">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15">
                <BellRing className="h-3.5 w-3.5" />
              </span>
              Hatırlatıcı açık
            </div>
          </div>
        </section>

        <section className="pt-6">
          <div className="flex items-end justify-between px-5">
            <div>
              <h2 className="font-heading text-2xl text-foreground">
                Namaz vakitleri
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Bugünün ritmi
              </p>
            </div>
            <button type="button" className="text-xs font-bold text-primary">
              Tümünü gör
            </button>
          </div>

          <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
            {prayerTimes.map(({ name, time, active }) => (
              <div
                key={name}
                className={
                  active
                    ? "relative min-w-[92px] overflow-hidden rounded-theme border border-primary bg-primary px-3 py-3 text-center shadow-lg"
                    : "min-w-[82px] rounded-theme border border-border bg-muted px-3 py-3 text-center"
                }
              >
                {active && (
                  <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                )}
                <p
                  className={
                    active
                      ? "text-[11px] font-bold text-primary-foreground"
                      : "text-[11px] font-semibold text-muted-foreground"
                  }
                >
                  {name}
                </p>
                <p
                  className={
                    active
                      ? "mt-1 text-sm font-extrabold text-primary-foreground"
                      : "mt-1 text-sm font-bold text-foreground"
                  }
                >
                  {time}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="relative h-48 overflow-hidden rounded-theme border border-border">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/8c508426-858d-4a28-a041-63ff8b46578d.png"
              alt="Rahle üzerinde açık Kur'an"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/70 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/50 bg-background/70 text-primary backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  Bugünün Ayeti
                </p>
              </div>

              <div>
                <p className="max-w-[260px] font-heading text-2xl leading-tight text-foreground">
                  “Şüphesiz Allah sabredenlerle beraberdir.”
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-foreground/80">
                    Bakara 2:153
                  </p>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-2 text-xs font-bold text-foreground backdrop-blur-md"
                  >
                    Ayeti oku
                    <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="relative overflow-hidden rounded-theme border border-border bg-card p-4">
            <svg
              viewBox="0 0 100 100"
              className="absolute -right-7 -top-7 h-32 w-32 opacity-20"
              aria-hidden="true"
            >
              <path
                d="M50 4 60 25 84 16 75 40 96 50 75 60 84 84 60 75 50 96 40 75 16 84 25 60 4 50 25 40 16 16 40 25Z"
                fill="none"
                className="stroke-primary"
                strokeWidth="2"
              />
              <path
                d="M50 23 57 43 77 50 57 57 50 77 43 57 23 50 43 43Z"
                fill="none"
                className="stroke-primary"
                strokeWidth="2"
              />
            </svg>

            <div className="relative flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-theme bg-secondary text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  Namaza Hazırlık
                </p>
                <h2 className="mt-1 font-heading text-2xl leading-tight text-foreground">
                  Namaz nasıl kılınır?
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Temel rehberin %40&apos;ı tamamlandı
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-2/5 rounded-full bg-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary">%40</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl text-foreground">
                Manevi Hatırlatmalar
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Günün nazik çağrıları
              </p>
            </div>
            <button
              type="button"
              aria-label="Hatırlatıcı ayarları"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-primary"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-3 overflow-hidden rounded-theme border border-border bg-card">
            {reminders.map(
              ({ title, description, time, icon: Icon, iconClass }, index) => (
                <React.Fragment key={title}>
                  {index > 0 && <div className="mx-4 border-t border-border" />}
                  <div className="flex gap-3 px-4 py-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-foreground">
                        {title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                    <span className="pt-1 text-[11px] text-muted-foreground">
                      {time}
                    </span>
                  </div>
                </React.Fragment>
              ),
            )}
          </div>

          <div className="mt-4 rounded-theme border border-primary/25 bg-muted p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-foreground">
                  Beş vakit hatırlatıcı
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tüm namaz vakitleri için açık
                </p>
              </div>
              <div className="flex h-7 w-12 items-center justify-end rounded-full bg-primary p-1">
                <span className="h-5 w-5 rounded-full bg-primary-foreground shadow-sm" />
              </div>
            </div>

            <button
              type="button"
              className="mt-3 flex w-full items-center justify-between border-t border-border pt-3 text-xs font-bold text-primary"
            >
              <span>Vakitleri tek tek düzenle</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-5 left-1/2 z-20 flex w-[calc(100%-32px)] -translate-x-1/2 items-center justify-around rounded-[22px] border border-primary/35 bg-card/95 px-2 py-2 shadow-2xl backdrop-blur-xl">
        {navigationItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={
              active
                ? "flex min-w-[70px] flex-col items-center gap-1 rounded-theme bg-primary/15 px-3 py-2 text-primary"
                : "flex min-w-[70px] flex-col items-center gap-1 px-3 py-2 text-muted-foreground"
            }
          >
            <Icon className="h-5 w-5" />
            <span
              className={
                active
                  ? "text-[10px] font-extrabold"
                  : "text-[10px] font-semibold"
              }
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;