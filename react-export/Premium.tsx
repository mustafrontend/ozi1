import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookOpen,
  Compass,
  Headphones,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Kur’an’ı reklamsız oku",
    description: "Surelere ve ayetlere kesintisiz erişim",
    emphasized: true,
  },
  {
    icon: Headphones,
    title: "Sureleri dinle",
    description: "Seçkin kıraatlerle gönülden takip et",
  },
  {
    icon: Bookmark,
    title: "Ayetlerini kaydet",
    description: "İlham veren pasajları kişisel kitaplığında tut",
  },
  {
    icon: Compass,
    title: "Kıble pusulasını kullan",
    description: "Kâbe yönünü her yerde kolayca bul",
  },
];

const plans = [
  {
    id: "monthly",
    name: "Aylık",
    subtitle: "Esnek başlangıç",
    price: "119 TL",
    detail: "aylık",
    selected: true,
  },
  {
    id: "six-month",
    name: "6 aylık",
    subtitle: "Toplam 650 TL",
    price: "650 TL",
    detail: "108,33 TL / ay",
  },
  {
    id: "yearly",
    name: "Yıllık",
    subtitle: "Toplam 999 TL",
    price: "999 TL",
    detail: "83,25 TL / ay",
    recommended: true,
  },
];

export default function PremiumMembershipScreen() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  return (
    <div className="min-h-screen w-full bg-background pb-32 font-body text-foreground">
      <header className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-card via-background to-background" />

        <div className="relative px-5 pt-12">
          <button
            type="button"
            aria-label="Geri dön"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-card"
          >
            <ArrowLeft size={20} strokeWidth={1.8} />
          </button>
        </div>

        <div className="relative mt-4 px-5">
          <div className="relative h-48 w-full overflow-hidden rounded-theme border border-primary/25 shadow-2xl">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/805dccb5-c8f4-40fe-8f1a-5113fa706da5.png"
              alt="Zarif İslami geometrik motif"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/10" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/55 bg-primary/15 text-primary shadow-lg">
                  <Sparkles size={16} strokeWidth={1.8} />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary">
                  Premium üyelik
                </span>
              </div>
              <h1 className="mt-3 max-w-[310px] font-heading text-[32px] leading-[1.05] text-foreground">
                Manevi yolculuğunu derinleştir
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="px-5">
        <section className="pt-6">
          <p className="max-w-[340px] text-sm leading-6 text-muted-foreground">
            Güvenilir içeriklere, huzurlu bir okuma deneyimine ve ibadet ritmini
            destekleyen tüm araçlara tek üyelikle ulaş.
          </p>

          <div className="mt-5 space-y-3">
            {features.map(({ icon: Icon, title, description, emphasized }) => (
              <div key={title} className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-primary ${
                    emphasized ? "bg-primary/10" : "bg-secondary"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-8">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="font-heading text-2xl text-foreground">
                Sana uygun planı seç
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                İstediğin zaman iptal edebilirsin.
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1 text-[11px] font-bold text-success">
              <ShieldCheck size={14} strokeWidth={1.8} />
              Güvenli ödeme
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.id;

              return (
                <button
                  key={plan.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative block w-full rounded-theme bg-card px-4 py-4 text-left transition-colors ${
                    isSelected
                      ? "border-2 border-primary shadow-lg"
                      : plan.recommended
                        ? "border border-primary/45"
                        : "border border-border"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute -top-2.5 left-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-primary-foreground">
                      Seçili plan
                    </span>
                  )}

                  {plan.recommended && (
                    <span className="absolute -right-1.5 -top-3 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-extrabold text-accent-foreground shadow-md">
                      <Star size={12} strokeWidth={2} />
                      En avantajlı
                    </span>
                  )}

                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        isSelected
                          ? "border-[5px] border-primary bg-card"
                          : "border-2 border-muted-foreground"
                      }`}
                    />
                    <span className="flex-1">
                      <span className="block text-sm font-extrabold text-foreground">
                        {plan.name}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {plan.subtitle}
                      </span>
                    </span>
                    <span className="text-right">
                      <span
                        className={`block font-heading text-2xl ${
                          isSelected ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="block text-[11px] text-muted-foreground">
                        {plan.detail}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="pb-5 pt-6 text-center">
          <button
            type="button"
            className="text-xs font-bold text-primary underline decoration-primary/40 underline-offset-4"
          >
            Satın alımlarımı geri yükle
          </button>
          <p className="mx-auto mt-4 max-w-[330px] text-[10px] leading-4 text-muted-foreground">
            Aboneliğiniz, dönem sonunda otomatik olarak yenilenir. Yenileme
            tarihinden en az 24 saat önce iptal etmediğiniz sürece ücretlendirme
            devam eder. Abonelik koşulları ve gizlilik politikası geçerlidir.
          </p>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 px-5 pb-6 pt-4 shadow-2xl backdrop-blur-xl">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-theme bg-primary px-5 py-4 text-sm font-extrabold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
        >
          <span>Premium’a devam et</span>
          <ArrowRight size={18} strokeWidth={2} />
        </button>
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
          <LockKeyhole size={12} strokeWidth={1.8} className="text-success" />
          <span>Ödemeniz App Store üzerinden güvenle işlenir</span>
        </div>
      </div>
    </div>
  );
}