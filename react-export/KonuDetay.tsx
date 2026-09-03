import { useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  ChevronDown,
  Clock3,
  Heart,
  Library,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const principles = [
  {
    id: "allah",
    title: "Allah'a iman",
    label: "Birinci esas",
    text: "Allah'ın varlığına, birliğine, eşsiz kudretine ve hiçbir şeye muhtaç olmadığına inanmaktır.",
    featured: true,
  },
  {
    id: "melekler",
    title: "Meleklere iman",
    label: "İkinci esas",
    text: "Melekler, Allah'ın emrine uyan ve nurdan yaratılmış varlıklardır. Onların varlığına, görevlerine ve Allah'ın dilemesiyle yerine getirdikleri vazifelere inanmaktır.",
  },
  {
    id: "kitaplar",
    title: "Kitaplara iman",
    label: "Üçüncü esas",
    text: "Allah'ın insanlara yol göstermek üzere peygamberleri aracılığıyla gönderdiği ilahî kitapların hak olduğuna inanmaktır. Kur'an-ı Kerim, bu kitapların sonuncusu ve bütün insanlığa gönderilen rehberdir.",
  },
  {
    id: "peygamberler",
    title: "Peygamberlere iman",
    label: "Dördüncü esas",
    text: "Allah'ın mesajlarını insanlara ulaştırmak için seçtiği peygamberlerin hepsine inanmak ve onları doğrulamaktır. Hz. Muhammed son peygamberdir.",
  },
  {
    id: "ahiret",
    title: "Ahiret gününe iman",
    label: "Beşinci esas",
    text: "Dünya hayatından sonra başlayacak sonsuz hayatın, dirilişin, hesap gününün, cennet ve cehennemin gerçek olduğuna inanmaktır.",
  },
  {
    id: "kader",
    title: "Kadere iman",
    label: "Altıncı esas",
    text: "Allah'ın her şeyi ilmi ve hikmetiyle kuşattığına, evrende gerçekleşen her şeyin O'nun bilgisi dâhilinde olduğuna inanmaktır. Bu inanç, kulun sorumluluğunu ve iradesini ortadan kaldırmaz.",
  },
];

const sources = [
  {
    title: "Cibril Hadisi",
    description: "İman esaslarının temel açıklaması",
    reference: "Sahih-i Müslim, İman 1; Buhârî, İman 37",
  },
  {
    title: "Kur'an-ı Kerim",
    description: "İnanç esaslarına dair ayetler",
    reference: "Bakara Suresi, 2:285; Nisâ Suresi, 4:136",
  },
];

function PrincipleCard({ principle, index }) {
  return (
    <section id={principle.id} className="px-5 pt-5">
      <article
        className={`relative overflow-hidden rounded-theme border p-5 ${
          principle.featured
            ? "border-primary/35 bg-card shadow-xl"
            : "border-border bg-card"
        }`}
      >
        {principle.featured && (
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-primary/15" />
        )}

        <div className="relative">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ${
                principle.featured
                  ? "bg-primary text-primary-foreground"
                  : "h-9 w-9 bg-secondary text-sm text-primary"
              }`}
            >
              {index + 1}
            </span>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-primary">
                {principle.label}
              </p>
              <h2
                className={`font-heading leading-none text-foreground ${
                  principle.featured ? "text-[27px]" : "text-2xl"
                }`}
              >
                {principle.title}
              </h2>
            </div>
          </div>

          <div
            className={`my-5 h-px ${
              principle.featured
                ? "bg-gradient-to-r from-primary/70 via-primary/20 to-transparent"
                : "bg-border"
            }`}
          />

          <p
            className={`text-foreground/90 ${
              principle.featured
                ? "text-[16px] leading-8"
                : "text-[15px] leading-8"
            }`}
          >
            {principle.text}
          </p>

          {principle.featured && (
            <button
              type="button"
              className="mt-5 flex w-full items-center justify-between rounded-theme border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-extrabold text-primary"
            >
              <span>Tam açıklamayı oku</span>
              <ArrowDown className="h-5 w-5" />
            </button>
          )}
        </div>
      </article>
    </section>
  );
}

function SourceItem({ source, open, onToggle }) {
  return (
    <div className="border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-4 text-left"
      >
        <span>
          <span className="block text-sm font-bold text-foreground">
            {source.title}
          </span>
          <span className="mt-1 block text-xs leading-5 text-muted-foreground">
            {source.description}
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-border px-4 py-3">
          <p className="text-xs leading-6 text-muted-foreground">
            {source.reference}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaithPrinciplesScreen() {
  const [openSources, setOpenSources] = useState([0, 1]);

  const toggleSource = (index) => {
    setOpenSources((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  return (
    <div className="min-h-screen w-full bg-background pb-28 font-body text-foreground">
      <header className="relative overflow-hidden border-b border-border bg-card px-5 pb-6 pt-12">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-primary/15" />
        <div className="absolute -right-5 top-8 h-28 w-28 rounded-full border border-primary/10" />

        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-bold text-muted-foreground"
          >
            <ArrowLeft className="h-5 w-5 text-primary" />
            <span>Öğren&apos;e dön</span>
          </button>

          <div className="mt-8 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </span>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary">
              İnanç Esasları
            </p>
          </div>

          <h1 className="mt-3 font-heading text-[38px] leading-[0.98] text-foreground">
            İmanın Şartları
          </h1>
          <p className="mt-4 max-w-[335px] font-heading text-[21px] leading-[1.35] text-foreground/90">
            İman, Allah&apos;ın bildirdiği esaslara gönülden inanmak ve tasdik
            etmektir.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4 text-primary" />
              8 dk okuma
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Temel düzey</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-success" />
              Güvenilir içerik
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="px-5 pt-5">
          <div className="relative h-44 w-full overflow-hidden rounded-theme border border-primary/25">
            <img
              src="https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/62f3fbb8-a545-4203-94da-483dd7624530.png"
              alt="İslami geometrik yıldız desenleri"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-primary/30 bg-background/75 px-3 py-2 backdrop-blur-md">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-[11px] font-bold text-foreground">
                Birlikte düşünelim
              </span>
            </div>
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
                İçindekiler
              </p>
              <h2 className="mt-1 font-heading text-2xl text-foreground">
                Altı temel esas
              </h2>
            </div>
            <span className="text-xs text-muted-foreground">1 / 6</span>
          </div>

          <nav className="mt-4 flex gap-2 overflow-x-auto pb-2" aria-label="İçindekiler">
            {principles.map((principle, index) => (
              <a
                key={principle.id}
                href={`#${principle.id}`}
                className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm ${
                  index === 0
                    ? "bg-primary font-extrabold text-primary-foreground"
                    : "border border-border bg-muted font-bold text-muted-foreground"
                }`}
              >
                {index + 1}
              </a>
            ))}
          </nav>
        </section>

        {principles.map((principle, index) => (
          <PrincipleCard
            key={principle.id}
            principle={principle}
            index={index}
          />
        ))}

        <section className="px-5 pt-7">
          <div className="relative overflow-hidden rounded-theme border border-primary/30 bg-muted p-5">
            <svg
              viewBox="0 0 100 100"
              className="absolute -right-5 -top-7 h-32 w-32 text-primary opacity-20"
              aria-hidden="true"
            >
              <path
                d="M50 5 60 24 82 18 76 40 95 50 76 60 82 82 60 76 50 95 40 76 18 82 24 60 5 50 24 40 18 18 40 24Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M50 24 57 43 76 50 57 57 50 76 43 57 24 50 43 43Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>

            <div className="relative">
              <div className="flex items-center gap-2 text-primary">
                <Heart className="h-5 w-5" />
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em]">
                  Düşün ve Derinleş
                </p>
              </div>
              <p className="mt-4 font-heading text-[23px] leading-[1.35] text-foreground">
                Bugün Allah&apos;a olan güvenini hangi davranışınla
                gösterebilirsin?
              </p>
              <button
                type="button"
                className="mt-5 flex items-center gap-2 text-sm font-extrabold text-primary"
              >
                <span>Cevabını düşün</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-5 pb-8 pt-7">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Library className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary">
                Güvenilir dayanaklar
              </p>
              <h2 className="font-heading text-2xl text-foreground">
                Kaynaklar
              </h2>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-theme border border-border bg-card">
            {sources.map((source, index) => (
              <div
                key={source.title}
                className={index > 0 ? "border-t border-border" : ""}
              >
                <SourceItem
                  source={source}
                  open={openSources.includes(index)}
                  onToggle={() => toggleSource(index)}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 z-20 w-full bg-gradient-to-t from-background via-background/95 to-transparent px-5 pb-5 pt-8">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-theme bg-primary px-5 py-4 text-sm font-extrabold text-primary-foreground shadow-2xl"
        >
          <BookOpenCheck className="h-5 w-5" />
          <span>İmanın şartlarını baştan sona oku</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}