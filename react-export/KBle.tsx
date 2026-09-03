import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Compass,
  GraduationCap,
  Info,
  Landmark,
  LockKeyhole,
  MapPin,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Hassas yön",
    description: "Anlık pusula desteği",
  },
  {
    icon: Smartphone,
    title: "Kolay hizalama",
    description: "Telefonunu doğru tut",
  },
  {
    icon: Route,
    title: "Yön haritası",
    description: "İstanbul'dan Mekke'ye",
  },
];

const navigationItems = [
  { label: "Bugün", icon: CalendarDays },
  { label: "Öğren", icon: GraduationCap },
  { label: "Kuran", icon: BookOpen },
  { label: "Kıble", icon: Compass, active: true },
];

export default function QiblaScreen() {
  return (
    <div className="min-h-screen w-full bg-background pb-36 font-body text-foreground">
      <header className="relative overflow-hidden border-b border-border bg-card px-5 pb-5 pt-12">
        <div className="absolute -right-12 -top-14 h-48 w-48 rounded-full border border-primary/15" />
        <div className="absolute right-4 top-8 h-28 w-28 rounded-full border border-primary/10" />

        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Kıble
            </p>
            <h1 className="mt-1 font-heading text-3xl leading-none text-foreground">
              Yönünü kalbine çevir
            </h1>
            <p className="mt-2 text-xs text-muted-foreground">
              Namazın huzurlu başlangıcı
            </p>
          </div>

          <button
            type="button"
            aria-label="Kıble hakkında bilgi"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground"
          >
            <Info size={18} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <main>
        <section className="px-5 pt-5">
          <div className="relative overflow-hidden rounded-theme border border-primary/35 bg-card px-5 pb-6 pt-5 shadow-xl">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent" />
            <div className="absolute left-1/2 top-4 h-44 w-44 -translate-x-1/2 rounded-full border border-primary/10" />
            <div className="absolute left-1/2 top-10 h-32 w-32 -translate-x-1/2 rounded-full border border-primary/10" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Ücretsiz önizleme
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Mevcut konumun
                </p>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-semibold text-foreground">
                <MapPin size={14} className="text-primary" />
                İstanbul
              </div>
            </div>

            <div className="relative mt-5 flex justify-center">
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-primary/20 bg-background/40 shadow-2xl">
                <div className="absolute inset-3 rounded-full border border-primary/10" />
                <div className="absolute inset-8 rounded-full border border-border" />
                <div className="absolute inset-14 rounded-full border border-primary/15" />

                <span className="absolute top-4 font-heading text-lg text-primary">
                  K
                </span>
                <span className="absolute bottom-4 font-heading text-lg text-muted-foreground">
                  G
                </span>
                <span className="absolute left-5 top-1/2 -translate-y-1/2 font-heading text-lg text-muted-foreground">
                  B
                </span>
                <span className="absolute right-5 top-1/2 -translate-y-1/2 font-heading text-lg text-muted-foreground">
                  D
                </span>

                <div className="absolute left-1/2 top-1/2 h-[102px] w-0.5 -translate-x-1/2 -translate-y-[78px] rotate-[34deg] origin-bottom rounded-full bg-gradient-to-t from-primary/20 via-primary to-primary/60 shadow-lg" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background shadow-lg" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/35 bg-card shadow-2xl">
                  <div className="absolute inset-2 rounded-full border border-primary/10" />
                  <LockKeyhole size={30} className="text-primary" strokeWidth={1.6} />
                </div>

                <div className="absolute -top-1 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground shadow-lg">
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="relative mt-5 text-center">
              <h2 className="font-heading text-2xl leading-tight text-foreground">
                Kâbe yönünü bulmak
                <br />
                Premium ile açık
              </h2>
              <p className="mx-auto mt-2 max-w-[270px] text-xs leading-5 text-muted-foreground">
                Doğru yönü, hassas derece bilgisiyle ve sakin bir rehberlikle
                bulun.
              </p>
            </div>

            <button
              type="button"
              className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-theme bg-primary px-4 py-3.5 text-sm font-extrabold text-primary-foreground shadow-lg"
            >
              <Sparkles size={18} />
              <span>Kıbleyi aç</span>
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </section>

        <section className="px-5 pt-5">
          <div className="relative h-40 overflow-hidden rounded-theme border border-border">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/21f84436-f103-4104-a777-290b05e88efe.png"
              alt="Mescid-i Haram atmosferini çağrıştıran mimari detay"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-background/25" />
            <div className="absolute inset-0 flex flex-col justify-center px-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-background/70 text-primary">
                  <Landmark size={14} />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  Mekke&apos;ye yönel
                </p>
              </div>
              <p className="mt-2 max-w-[205px] font-heading text-2xl leading-tight text-foreground">
                Her adımda daha bilinçli bir ibadet
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="font-heading text-2xl leading-none text-foreground">
                Güvenle yönünü bul
              </h2>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                İbadet anında sade, güvenilir ve dikkat dağıtmayan bir rehber.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-theme border border-border bg-card p-3"
              >
                <Icon size={20} className="text-primary" />
                <p className="mt-3 text-xs font-bold leading-4 text-foreground">
                  {title}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 pb-8 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl text-foreground">
                Kıble yönü
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Premium ile keşfedin
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-primary">
              <LockKeyhole size={12} />
              Kilitli
            </span>
          </div>

          <div className="relative mt-3 h-36 overflow-hidden rounded-theme border border-border bg-muted">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/7a9ceb34-f05b-442a-b886-f2e9e80487be.png"
              alt="İstanbul'dan Mekke'ye yön haritası"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-60 grayscale"
            />
            <div className="absolute inset-0 bg-background/45" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/60 bg-card/95 text-primary shadow-xl">
                <LockKeyhole size={20} />
              </div>
              <p className="mt-2 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur-sm">
                Premium ile yönü gör
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-theme border border-border bg-card px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">
                  Konumun hazır
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Üsküdar, İstanbul
                </p>
              </div>
            </div>
            <CheckCircle2 size={18} className="text-success" />
          </div>
        </section>
      </main>

      <nav className="fixed bottom-5 left-1/2 z-20 flex w-[calc(100%-32px)] -translate-x-1/2 items-center justify-around rounded-[22px] border border-primary/35 bg-card/95 px-2 py-2 shadow-2xl backdrop-blur-xl">
        {navigationItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            aria-current={active ? "page" : undefined}
            className={`flex min-w-[70px] flex-col items-center gap-1 px-3 py-2 ${
              active
                ? "rounded-theme bg-primary/15 font-extrabold text-primary"
                : "font-semibold text-muted-foreground"
            }`}
          >
            <Icon size={20} />
            <span className="text-[10px]">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}