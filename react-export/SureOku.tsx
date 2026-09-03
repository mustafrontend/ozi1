import React, { useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Headphones,
  Info,
  MoreHorizontal,
  Pause,
  Play,
  Repeat,
  RotateCcw,
  Share2,
  SkipBack,
  SkipForward,
} from "lucide-react";

const verses = [
  {
    number: 1,
    arabic: "الرَّحْمَٰنُ",
    transliteration: "Er-Rahmân",
    translation: "Rahmân,",
    featured: true,
  },
  {
    number: 2,
    arabic: "عَلَّمَ الْقُرْآنَ",
    transliteration: "Alleme’l-Kur’ân",
    translation: "Kur'an'ı öğretti.",
  },
  {
    number: 13,
    arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    transliteration: "Fe bi-eyyi âlâi rabbikumâ tukezzibân",
    translation:
      "Öyleyse Rabbinizin nimetlerinden hangisini yalanlayabilirsiniz?",
    featured: true,
    saved: true,
  },
];

function VerseCard({ verse, onToggleBookmark }) {
  return (
    <article
      className={`relative rounded-theme border bg-card px-5 py-6 ${
        verse.featured
          ? "border-primary/35 shadow-lg"
          : "border-border"
      }`}
    >
      {verse.number === 1 && (
        <div className="absolute -right-2 -top-2 flex h-9 w-9 rotate-45 items-center justify-center border border-primary/40 bg-card">
          <span className="-rotate-45 font-heading text-sm text-primary">
            ١
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
            verse.number === 13
              ? "bg-primary text-primary-foreground"
              : verse.number === 1
                ? "bg-primary/15 text-primary"
                : "bg-muted text-muted-foreground"
          }`}
        >
          {verse.number}
        </span>

        <div
          className={`flex items-center gap-4 ${
            verse.saved ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <button
            type="button"
            aria-label={
              verse.saved
                ? `Ayet ${verse.number} yer imlerinden çıkarılsın`
                : `Ayet ${verse.number}'i yer imlerine ekle`
            }
            onClick={() => onToggleBookmark(verse.number)}
          >
            {verse.saved ? (
              <BookmarkCheck className="h-[18px] w-[18px]" />
            ) : (
              <Bookmark className="h-[18px] w-[18px]" />
            )}
          </button>
          <button
            type="button"
            aria-label={`Ayet ${verse.number}'i paylaş`}
          >
            <Share2 className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            aria-label={`Ayet ${verse.number}'i tekrarla`}
          >
            <Repeat className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      <p
        dir="rtl"
        className="mt-7 text-right font-heading text-[29px] leading-[2.05] text-foreground"
      >
        {verse.arabic}
      </p>
      <p className="mt-4 text-sm italic tracking-wide text-primary/90">
        {verse.transliteration}
      </p>
      <p className="mt-3 font-heading text-[21px] leading-relaxed text-foreground">
        {verse.translation}
      </p>

      {verse.saved && (
        <div className="mt-4 flex items-center gap-2 border-t border-primary/20 pt-3 text-[11px] font-semibold text-primary">
          <BookmarkCheck className="h-4 w-4" />
          Kaydedilen ayet
        </div>
      )}
    </article>
  );
}

export default function RahmanSurahScreen() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [savedVerses, setSavedVerses] = useState(
    new Set(verses.filter((verse) => verse.saved).map((verse) => verse.number)),
  );

  const toggleBookmark = (number) => {
    setSavedVerses((current) => {
      const next = new Set(current);
      if (next.has(number)) next.delete(number);
      else next.add(number);
      return next;
    });
  };

  return (
    <div className="min-h-screen w-full bg-background pb-32 font-body text-foreground">
      <header className="border-b border-border bg-card px-5 pb-5 pt-12">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Kuran'a dön"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Kuran
            </p>
            <h1 className="mt-1 truncate font-heading text-3xl leading-none text-foreground">
              Rahman Suresi
            </h1>
            <p className="mt-2 text-xs text-muted-foreground">
              55. Sure · 78 ayet · Medine
            </p>
          </div>

          <button
            type="button"
            aria-label="Daha fazla seçenek"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main>
        <section className="sticky top-0 z-10 border-b border-primary/20 bg-background/95 px-5 py-4 backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-theme border border-primary/35 bg-card p-4 shadow-xl">
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full border border-primary/15" />
            <div className="absolute -right-1 -top-3 h-20 w-20 rounded-full border border-primary/10" />

            <div className="relative flex items-center gap-3">
              <button
                type="button"
                aria-label={isPlaying ? "Sesi duraklat" : "Sesi oynat"}
                onClick={() => setIsPlaying((playing) => !playing)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_22px_rgba(214,171,76,0.28)]"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 fill-current" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-foreground">
                      Mishary Rashid Alafasy
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      Rahman Suresi dinleniyor
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-primary">
                    01:42 / 08:14
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[21%] rounded-full bg-primary" />
                </div>
              </div>
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-border pt-3">
              <button
                type="button"
                aria-label="15 saniye geri"
                className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground"
              >
                <RotateCcw className="h-4 w-4" />
                15 sn
              </button>

              <div className="flex items-center gap-5">
                <button
                  type="button"
                  aria-label="Önceki ayet"
                  className="text-muted-foreground"
                >
                  <SkipBack className="h-[18px] w-[18px]" />
                </button>
                <button
                  type="button"
                  aria-label="Sonraki ayet"
                  className="text-muted-foreground"
                >
                  <SkipForward className="h-[18px] w-[18px]" />
                </button>
              </div>

              <button
                type="button"
                className="flex items-center gap-1.5 text-xs font-bold text-primary"
              >
                1x
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Tilavet
              </p>
              <h2 className="mt-1 font-heading text-2xl text-foreground">
                Rahmân
              </h2>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 text-xs font-bold text-muted-foreground"
            >
              <span>Latin harfleri</span>
              <span className="flex h-5 w-9 items-center justify-end rounded-full bg-primary p-0.5">
                <span className="h-4 w-4 rounded-full bg-primary-foreground" />
              </span>
            </button>
          </div>
          <div className="mt-4 h-px w-20 bg-primary" />
        </section>

        <section className="space-y-4 px-5 pt-5">
          {verses.map((verse) => (
            <VerseCard
              key={verse.number}
              verse={{ ...verse, saved: savedVerses.has(verse.number) }}
              onToggleBookmark={toggleBookmark}
            />
          ))}
        </section>

        <section className="px-5 pt-6">
          <div className="rounded-theme border border-border bg-muted p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Info className="h-[18px] w-[18px]" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-heading text-xl text-foreground">
                  Sure Hakkında
                </h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Rahmet ve şükür üzerine bir hatırlatma
                </p>
              </div>
              <ChevronUp className="h-[18px] w-[18px] text-primary" />
            </div>

            <div className="mt-4 border-t border-border pt-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Rahmân Suresi, Allah&apos;ın kullarına sunduğu sayısız nimeti
                hatırlatır. Sure boyunca tekrar edilen ayet, insanı ve cinni
                nimetleri inkâr etmekten sakındırarak şükre, farkındalığa ve
                yaratılışın dengesi üzerinde düşünmeye çağırır.
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Merhamet, adalet ve ilahî lütuf; su, meyveler, gökler ve
                insanın yaratılışı üzerinden birlikte tefekkür edilir.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pt-6">
          <div className="flex items-center justify-between rounded-theme border border-primary/25 bg-card px-4 py-4">
            <button type="button" className="flex items-center gap-2 text-left">
              <ChevronLeft className="h-[18px] w-[18px] text-primary" />
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Önceki sure
                </span>
                <span className="mt-1 block font-heading text-lg text-foreground">
                  Yasin
                </span>
              </span>
            </button>

            <div className="h-10 w-px bg-border" />

            <button type="button" className="flex items-center gap-2 text-right">
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Sonraki sure
                </span>
                <span className="mt-1 block font-heading text-lg text-foreground">
                  Mülk
                </span>
              </span>
              <ChevronRight className="h-[18px] w-[18px] text-primary" />
            </button>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-primary/25 bg-background/95 px-5 pb-6 pt-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-theme border border-border bg-muted px-3 py-3 text-xs font-bold text-muted-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Önceki sure
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="flex flex-1 items-center justify-center gap-2 rounded-theme bg-primary px-3 py-3 text-xs font-extrabold text-primary-foreground shadow-lg"
          >
            <Headphones className="h-4 w-4" />
            Dinlemeye devam et
          </button>

          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-theme border border-border bg-muted px-3 py-3 text-xs font-bold text-muted-foreground"
          >
            Sonraki sure
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}