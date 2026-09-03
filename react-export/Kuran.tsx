import {
  ArrowRight,
  Bookmark,
  BookOpen,
  CalendarDays,
  Compass,
  GraduationCap,
  Info,
  Lock,
  LockKeyhole,
  Search,
  Sparkles,
} from "lucide-react";

const surahs = [
  { number: "55", name: "Rahman", meaning: "Merhamet eden", verses: "78 ayet" },
  { number: "36", name: "Yasin", meaning: "Kalplerin huzuru", verses: "83 ayet" },
  { number: "18", name: "Kehf", meaning: "Mağara", verses: "110 ayet" },
  { number: "67", name: "Mülk", meaning: "Hükümranlık", verses: "30 ayet" },
];

const tabs = [
  { label: "Bugün", icon: CalendarDays },
  { label: "Öğren", icon: GraduationCap },
  { label: "Kuran", icon: BookOpen, active: true },
  { label: "Kıble", icon: Compass },
];

function SurahBadge({ number }: { number: string }) {
  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center text-primary">
      <svg
        viewBox="0 0 52 52"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M26 3 32 9 41 8 40 17 47 23 40 29 41 38 32 37 26 49 20 37 11 38 12 29 5 23 12 17 11 8 20 9Z"
          fill="none"
          className="stroke-chart1"
          strokeWidth="1.5"
        />
      </svg>
      <span className="font-heading text-base">{number}</span>
    </div>
  );
}

export default function QuranLibraryScreen() {
  return (
    <div className="min-h-screen w-full bg-background pb-36 font-body text-foreground">
      <header className="relative overflow-hidden border-b border-border bg-card px-5 pb-6 pt-12">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-primary/15" />
        <div className="absolute right-4 top-10 h-28 w-28 rounded-full border border-primary/10" />

        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Mushaf kütüphanesi
            </p>
            <h1 className="mt-2 font-heading text-4xl leading-none text-foreground">
              Kur’an
            </h1>
            <p className="mt-2 max-w-[270px] text-sm leading-5 text-muted-foreground">
              Oku, dinle ve kalbine yerleşen ayetleri sakla.
            </p>
          </div>

          <button
            type="button"
            aria-label="Arama"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-muted text-primary"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main>
        <section className="px-5 pt-5">
          <div className="relative h-48 w-full overflow-hidden rounded-theme border border-primary/30">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/d63a18b8-9b47-4a24-b27c-36cbc9e8cbf8.png"
              alt="Zarif mushaf cilt dokusu"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-background/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/50 bg-background/70 text-primary backdrop-blur-sm">
                  <BookOpen className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                  Günlük tilavet
                </span>
              </div>

              <div>
                <p className="font-heading text-2xl text-foreground">
                  Rahman Suresi
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  55. sure · 78 ayet · Mekke dönemi
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-theme bg-primary px-3.5 py-2.5 text-xs font-extrabold text-primary-foreground"
                  >
                    <Lock className="h-4 w-4" />
                    <span>Okumaya devam et</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Rahman Suresi hakkında bilgi"
                    className="flex h-10 w-10 items-center justify-center rounded-theme border border-foreground/25 bg-background/60 text-foreground backdrop-blur-sm"
                  >
                    <Info className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pt-5">
          <div className="relative overflow-hidden rounded-theme border border-primary/45 bg-card p-5 shadow-xl">
            <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-primary/20" />
            <div className="absolute right-6 top-8 h-20 w-20 rounded-full border border-primary/10" />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Premium erişim
                </p>
              </div>

              <h2 className="mt-3 max-w-[290px] font-heading text-3xl leading-tight text-foreground">
                Kur’an’la bağını derinleştir.
              </h2>
              <p className="mt-2 max-w-[305px] text-sm leading-6 text-muted-foreground">
                Ayetleri okumak, sesli dinlemek ve kaydetmek için güvenli ve
                reklamsız Premium deneyimini keşfet.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 rounded-theme bg-primary px-4 py-3.5 text-sm font-extrabold text-primary-foreground shadow-lg"
                >
                  <span>Premium’u keşfet</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-theme border border-primary/35 bg-muted text-primary">
                  <LockKeyhole className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pt-7">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-2xl text-foreground">Sureler</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Kısa önizleme · 114 sure
              </p>
            </div>
            <button type="button" className="text-xs font-bold text-primary">
              Sırala
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-theme border border-border bg-muted px-4 py-3">
            <Search className="h-[18px] w-[18px] text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Sure veya ayet ara
            </span>
            <span className="ml-auto text-[10px] font-bold text-muted-foreground">
              PREMİUM
            </span>
          </div>

          <div className="mt-4 overflow-hidden rounded-theme border border-border bg-card">
            {surahs.map((surah, index) => (
              <div
                key={surah.number}
                className={`flex items-center gap-3 px-4 py-4 ${
                  index < surahs.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <SurahBadge number={surah.number} />
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-xl text-foreground">
                    {surah.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {surah.meaning} · {surah.verses}
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lock className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="flex items-center justify-between rounded-theme border border-border bg-muted px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                <Bookmark className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Kaydedilen ayetler
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Premium ile kişisel koleksiyonun
                </p>
              </div>
            </div>
            <LockKeyhole className="h-[18px] w-[18px] text-primary" />
          </div>
        </section>
      </main>

      <nav
        aria-label="Ana navigasyon"
        className="fixed bottom-5 left-1/2 z-20 flex w-[calc(100%-32px)] -translate-x-1/2 items-center justify-around rounded-[22px] border border-primary/35 bg-card/95 px-2 py-2 shadow-2xl backdrop-blur-xl"
      >
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