export type LanguageCode =
  | "tr"
  | "en"
  | "ar"
  | "id"
  | "ms"
  | "ur"
  | "fr"
  | "de"
  | "es"
  | "ru"
  | "uz"
  | "fa";

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  flag: string;
  badge: string;
  isRTL: boolean;
}

export interface TranslationSchema {
  nav: {
    today: string;
    learn: string;
    quran: string;
    qibla: string;
    premium: string;
  };
  prayerNames: {
    fajr: string;
    sunrise: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  };
  header: {
    selectLocation: string;
    gpsActive: string;
    gpsDetecting: string;
    date: string;
  };
  nextPrayerCard: {
    nextPrayer: string;
    remaining: string;
    CallToPrayer: string;
    prayerGuideButton: string;
    reminderActive: string;
  };
  todayVerse: {
    dailyVerseTitle: string;
    readVerse: string;
    verseReference: string;
  };
  learn: {
    spiritualLibrary: string;
    learnTitle: string;
    searchPlaceholder: string;
    prayerGuideTitle: string;
    prayerGuideDesc: string;
    faithPillarsTitle: string;
    islamPillarsTitle: string;
    conceptsTitle: string;
  };
  quran: {
    mushafLibrary: string;
    quranTitle: string;
    searchSurahPlaceholder: string;
    surahCatalogTitle: string;
    readSurah: string;
    audioRecitation: string;
    savedVerses: string;
    bookmarkVerse: string;
    surahAbout: string;
  };
  qibla: {
    qiblaTitle: string;
    qiblaSubtitle: string;
    liveCompass: string;
    aligned: string;
    kaabaAngle: string;
    alignInstruction: string;
    unlockQibla: string;
  };
  premium: {
    premiumTitle: string;
    premiumSubtitle: string;
    proFeatures: string;
    selectPlan: string;
    monthly: string;
    sixMonth: string;
    yearly: string;
    bestValue: string;
    savingsBadge: string;
    buyButton: string;
    restorePurchases: string;
    securePayment: string;
    proActive: string;
  };
  languageModal: {
    selectLanguage: string;
    changeLanguage: string;
    selectLanguageDesc?: string;
    searchLanguage?: string;
  };
}

export const RTL_LANGUAGES: ReadonlyArray<LanguageCode> = ["ar", "ur", "fa"];

export const isRTL = (langCode: string): boolean => {
  const code = (langCode || "").toLowerCase();
  return RTL_LANGUAGES.includes(code as LanguageCode);
};

export const isRTLLanguage = isRTL;

export const LANGUAGES: ReadonlyArray<LanguageOption> = [
  { code: "tr", name: "Turkish", nativeName: "Türkçe", dir: "ltr", flag: "🇹🇷", badge: "TR", isRTL: false },
  { code: "en", name: "English", nativeName: "English", dir: "ltr", flag: "🇬🇧", badge: "EN", isRTL: false },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", flag: "🇸🇦", badge: "AR", isRTL: true },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", dir: "ltr", flag: "🇮🇩", badge: "ID", isRTL: false },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", dir: "ltr", flag: "🇲🇾", badge: "MS", isRTL: false },
  { code: "ur", name: "Urdu", nativeName: "اردو", dir: "rtl", flag: "🇵🇰", badge: "UR", isRTL: true },
  { code: "fr", name: "French", nativeName: "Français", dir: "ltr", flag: "🇫🇷", badge: "FR", isRTL: false },
  { code: "de", name: "German", nativeName: "Deutsch", dir: "ltr", flag: "🇩🇪", badge: "DE", isRTL: false },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr", flag: "🇪🇸", badge: "ES", isRTL: false },
  { code: "ru", name: "Russian", nativeName: "Русский", dir: "ltr", flag: "🇷🇺", badge: "RU", isRTL: false },
  { code: "uz", name: "Uzbek", nativeName: "O‘zbekcha", dir: "ltr", flag: "🇺🇿", badge: "UZ", isRTL: false },
  { code: "fa", name: "Persian", nativeName: "فارسی", dir: "rtl", flag: "🇮🇷", badge: "FA", isRTL: true },
];

export const SUPPORTED_LANGUAGES = LANGUAGES;

export const getLanguageOption = (langCode: string): LanguageOption => {
  const code = (langCode || "tr").toLowerCase();
  const found = LANGUAGES.find((l) => l.code.toLowerCase() === code);
  return found || LANGUAGES[0];
};

export const translations: Record<LanguageCode, TranslationSchema> = {
  tr: {
    nav: {
      today: "Bugün",
      learn: "Öğren",
      quran: "Kur'an",
      qibla: "Kıble",
      premium: "Premium",
    },
    prayerNames: {
      fajr: "İmsak",
      sunrise: "Güneş",
      dhuhr: "Öğle",
      asr: "İkindi",
      maghrib: "Akşam",
      isha: "Yatsı",
    },
    header: {
      selectLocation: "Konum Seçin",
      gpsActive: "GPS Aktif",
      gpsDetecting: "Konum Aranıyor...",
      date: "Tarih",
    },
    nextPrayerCard: {
      nextPrayer: "Sonraki Vakit",
      remaining: "Kalan Süre",
      CallToPrayer: "Ezan Oku",
      prayerGuideButton: "Namaz Rehberi",
      reminderActive: "Hatırlatıcı Aktif",
    },
    todayVerse: {
      dailyVerseTitle: "Günün Âyeti",
      readVerse: "Âyeti Oku",
      verseReference: "Ayet Referansı",
    },
    learn: {
      spiritualLibrary: "Manevi Kütüphane",
      learnTitle: "İslami İlimler ve Rehber",
      searchPlaceholder: "Konu veya dua ara...",
      prayerGuideTitle: "Adım Adım Namaz Rehberi",
      prayerGuideDesc: "Resimli ve sesli kılınış anlatımı",
      faithPillarsTitle: "İmanın Şartları",
      islamPillarsTitle: "İslam'ın Şartları",
      conceptsTitle: "İslami Kavramlar",
    },
    quran: {
      mushafLibrary: "Mushaf Kütüphanesi",
      quranTitle: "Kur'an-ı Kerim",
      searchSurahPlaceholder: "Sure veya ayet ara...",
      surahCatalogTitle: "Sure Listesi",
      readSurah: "Sureyi Oku",
      audioRecitation: "Sesli Dinle",
      savedVerses: "Kaydedilen Ayetler",
      bookmarkVerse: "Aayeti Yer İmlerine Ekle",
      surahAbout: "Sure Hakkında",
    },
    qibla: {
      qiblaTitle: "Kıble Pusulası",
      qiblaSubtitle: "Kâbe yönünü hassas olarak tespit edin",
      liveCompass: "Canlı Pusula",
      aligned: "Kıbleye Yöneldiniz",
      kaabaAngle: "Kâbe Açısı",
      alignInstruction: "Telefonunuzu düz tutarak yeşil ok ile hizalayın",
      unlockQibla: "Hassas Pusulayı Aç",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Sınırsız manevi içerik ve reklamsız deneyim",
      proFeatures: "Pro Özellikler",
      selectPlan: "Paket Seçin",
      monthly: "Aylık Plan",
      sixMonth: "6 Aylık Plan",
      yearly: "Yıllık Plan",
      bestValue: "En Popüler",
      savingsBadge: "%50 Tasarruf",
      buyButton: "Hemen Başla",
      restorePurchases: "Satın Alımları Geri Yükle",
      securePayment: "Güvenli Ödeme",
      proActive: "Pro Üyelik Aktif",
    },
    languageModal: {
      selectLanguage: "Dil Seçin",
      changeLanguage: "Dili Değiştir",
      selectLanguageDesc: "Uygulama dilini seçiniz",
      searchLanguage: "Dil ara...",
    },
  },
  en: {
    nav: {
      today: "Today",
      learn: "Learn",
      quran: "Quran",
      qibla: "Qibla",
      premium: "Premium",
    },
    prayerNames: {
      fajr: "Fajr",
      sunrise: "Sunrise",
      dhuhr: "Dhuhr",
      asr: "Asr",
      maghrib: "Maghrib",
      isha: "Isha",
    },
    header: {
      selectLocation: "Select Location",
      gpsActive: "GPS Active",
      gpsDetecting: "Detecting Location...",
      date: "Date",
    },
    nextPrayerCard: {
      nextPrayer: "Next Prayer",
      remaining: "Time Remaining",
      CallToPrayer: "Adhan Call",
      prayerGuideButton: "Prayer Guide",
      reminderActive: "Reminder Active",
    },
    todayVerse: {
      dailyVerseTitle: "Daily Verse",
      readVerse: "Read Verse",
      verseReference: "Verse Reference",
    },
    learn: {
      spiritualLibrary: "Spiritual Library",
      learnTitle: "Islamic Knowledge & Guide",
      searchPlaceholder: "Search topics or supplications...",
      prayerGuideTitle: "Step-by-Step Prayer Guide",
      prayerGuideDesc: "Visual and audio tutorial for prayers",
      faithPillarsTitle: "Pillars of Faith",
      islamPillarsTitle: "Pillars of Islam",
      conceptsTitle: "Islamic Concepts",
    },
    quran: {
      mushafLibrary: "Mushaf Library",
      quranTitle: "Holy Quran",
      searchSurahPlaceholder: "Search Surah or verse...",
      surahCatalogTitle: "Surah Catalog",
      readSurah: "Read Surah",
      audioRecitation: "Audio Recitation",
      savedVerses: "Saved Verses",
      bookmarkVerse: "Bookmark Verse",
      surahAbout: "About Surah",
    },
    qibla: {
      qiblaTitle: "Qibla Compass",
      qiblaSubtitle: "Accurate direction to the Holy Kaaba",
      liveCompass: "Live Compass",
      aligned: "Aligned with Qibla",
      kaabaAngle: "Kaaba Angle",
      alignInstruction: "Hold device flat and align with the green arrow",
      unlockQibla: "Unlock Precision Compass",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Unlimited spiritual content and ad-free experience",
      proFeatures: "Pro Features",
      selectPlan: "Select Plan",
      monthly: "Monthly Plan",
      sixMonth: "6-Month Plan",
      yearly: "Annual Plan",
      bestValue: "Best Value",
      savingsBadge: "Save 50%",
      buyButton: "Get Started",
      restorePurchases: "Restore Purchases",
      securePayment: "Secure Payment",
      proActive: "Pro Active",
    },
    languageModal: {
      selectLanguage: "Select Language",
      changeLanguage: "Change Language",
      selectLanguageDesc: "Choose your preferred language",
      searchLanguage: "Search language...",
    },
  },
  ar: {
    nav: {
      today: "اليوم",
      learn: "تعلم",
      quran: "القرآن",
      qibla: "القبلة",
      premium: "بريميوم",
    },
    prayerNames: {
      fajr: "الفجر",
      sunrise: "الشروق",
      dhuhr: "الظهر",
      asr: "العصر",
      maghrib: "المغرب",
      isha: "العشاء",
    },
    header: {
      selectLocation: "حدد الموقع",
      gpsActive: "GPS نشط",
      gpsDetecting: "جاري تحديد الموقع...",
      date: "التاريخ",
    },
    nextPrayerCard: {
      nextPrayer: "الصلاة القادمة",
      remaining: "الوقت المتبقي",
      CallToPrayer: "الأذان",
      prayerGuideButton: "دليل الصلاة",
      reminderActive: "التنبيه مفعل",
    },
    todayVerse: {
      dailyVerseTitle: "آية اليوم",
      readVerse: "اقرأ الآية",
      verseReference: "مرجع الآية",
    },
    learn: {
      spiritualLibrary: "المكتبة الروحية",
      learnTitle: "العلوم الإسلامية والدليل",
      searchPlaceholder: "ابحث عن موضوع أو دعاء...",
      prayerGuideTitle: "دليل الصلاة خطوة بخطوة",
      prayerGuideDesc: "شرح مصور وصوتي لكيفية الصلاة",
      faithPillarsTitle: "أركان الإيمان",
      islamPillarsTitle: "أركان الإسلام",
      conceptsTitle: "المفاهيم الإسلامية",
    },
    quran: {
      mushafLibrary: "مكتبة المصحف",
      quranTitle: "القرآن الكريم",
      searchSurahPlaceholder: "ابحث عن سورة أو آية...",
      surahCatalogTitle: "فهرس السور",
      readSurah: "قراءة السورة",
      audioRecitation: "التلاوة الصوتية",
      savedVerses: "الآيات المحفوظة",
      bookmarkVerse: "حفظ الآية",
      surahAbout: "عن السورة",
    },
    qibla: {
      qiblaTitle: "بوصلة القبلة",
      qiblaSubtitle: "تحديد اتجاه الكعبة المشرفة بدقة",
      liveCompass: "بوصلة مباشرة",
      aligned: "أنت باتجاه القبلة",
      kaabaAngle: "زاوية الكعبة",
      alignInstruction: "احمل الهاتف بشكل مستوٍ وحاذه مع السهم الأخضر",
      unlockQibla: "تفعيل البوصلة الدقيقة",
    },
    premium: {
      premiumTitle: "حضور برو",
      premiumSubtitle: "محتوى روحي غير محدود وتجربة خالية من الإعلانات",
      proFeatures: "مميزات برو",
      selectPlan: "اختر الخطة",
      monthly: "خطة شهرية",
      sixMonth: "خطة 6 أشهر",
      yearly: "خطة سنوية",
      bestValue: "الأكثر شعبية",
      savingsBadge: "وفر 50%",
      buyButton: "ابدأ الآن",
      restorePurchases: "إستعادة المشتريات",
      securePayment: "دفع آمن",
      proActive: "اشتراك برو نشط",
    },
    languageModal: {
      selectLanguage: "اختر اللغة",
      changeLanguage: "تغيير اللغة",
      selectLanguageDesc: "اختر لغتك المفضلة",
      searchLanguage: "البحث عن لغة...",
    },
  },
  id: {
    nav: {
      today: "Hari Ini",
      learn: "Belajar",
      quran: "Al-Qur'an",
      qibla: "Kiblat",
      premium: "Premium",
    },
    prayerNames: {
      fajr: "Subuh",
      sunrise: "Terbit",
      dhuhr: "Dzuhur",
      asr: "Ashar",
      maghrib: "Maghrib",
      isha: "Isya",
    },
    header: {
      selectLocation: "Pilih Lokasi",
      gpsActive: "GPS Aktif",
      gpsDetecting: "Mencari Lokasi...",
      date: "Tanggal",
    },
    nextPrayerCard: {
      nextPrayer: "Sholat Berikutnya",
      remaining: "Waktu Tersisa",
      CallToPrayer: "Panggilan Azan",
      prayerGuideButton: "Panduan Sholat",
      reminderActive: "Pengingat Aktif",
    },
    todayVerse: {
      dailyVerseTitle: "Ayat Hari Ini",
      readVerse: "Baca Ayat",
      verseReference: "Referensi Ayat",
    },
    learn: {
      spiritualLibrary: "Perpustakaan Spiritual",
      learnTitle: "Ilmu & Panduan Islam",
      searchPlaceholder: "Cari topik atau doa...",
      prayerGuideTitle: "Panduan Sholat Langkah demi Langkah",
      prayerGuideDesc: "Tutorial bergambar dan suara",
      faithPillarsTitle: "Rukun Iman",
      islamPillarsTitle: "Rukun Islam",
      conceptsTitle: "Konsep Islam",
    },
    quran: {
      mushafLibrary: "Perpustakaan Mushaf",
      quranTitle: "Al-Qur'an Al-Karim",
      searchSurahPlaceholder: "Cari Surah atau ayat...",
      surahCatalogTitle: "Daftar Surah",
      readSurah: "Baca Surah",
      audioRecitation: "Audio Tilawah",
      savedVerses: "Ayat Tersimpan",
      bookmarkVerse: "Tandai Ayat",
      surahAbout: "Tentang Surah",
    },
    qibla: {
      qiblaTitle: "Kompas Kiblat",
      qiblaSubtitle: "Arah akurat ke Ka'bah",
      liveCompass: "Kompas Langsung",
      aligned: "Menghadap Kiblat",
      kaabaAngle: "Sudut Ka'bah",
      alignInstruction: "Pegang HP datar dan sejajarkan dengan panah hijau",
      unlockQibla: "Buka Kompas Presisi",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Konten spiritual tanpa batas dan bebas iklan",
      proFeatures: "Fitur Pro",
      selectPlan: "Pilih Paket",
      monthly: "Paket Bulanan",
      sixMonth: "Paket 6 Bulan",
      yearly: "Paket Tahunan",
      bestValue: "Paling Populer",
      savingsBadge: "Hemat 50%",
      buyButton: "Mulai Sekarang",
      restorePurchases: "Pulihkan Pembelian",
      securePayment: "Pembayaran Aman",
      proActive: "Pro Aktif",
    },
    languageModal: {
      selectLanguage: "Pilih Bahasa",
      changeLanguage: "Ubah Bahasa",
      selectLanguageDesc: "Pilih bahasa pilihan Anda",
      searchLanguage: "Cari bahasa...",
    },
  },
  ms: {
    nav: {
      today: "Hari Ini",
      learn: "Belajar",
      quran: "Al-Quran",
      qibla: "Kiblat",
      premium: "Premium",
    },
    prayerNames: {
      fajr: "Subuh",
      sunrise: "Syuruk",
      dhuhr: "Zohor",
      asr: "Asar",
      maghrib: "Maghrib",
      isha: "Isyak",
    },
    header: {
      selectLocation: "Pilih Lokasi",
      gpsActive: "GPS Aktif",
      gpsDetecting: "Mengenal Pasti Lokasi...",
      date: "Tarikh",
    },
    nextPrayerCard: {
      nextPrayer: "Waktu Solat Seterusnya",
      remaining: "Masa Berbaki",
      CallToPrayer: "Laungan Azan",
      prayerGuideButton: "Panduan Solat",
      reminderActive: "Peringatan Aktif",
    },
    todayVerse: {
      dailyVerseTitle: "Ayat Hari Ini",
      readVerse: "Baca Ayat",
      verseReference: "Rujukan Ayat",
    },
    learn: {
      spiritualLibrary: "Perpustakaan Rohani",
      learnTitle: "Ilmu & Panduan Islam",
      searchPlaceholder: "Cari topik atau doa...",
      prayerGuideTitle: "Panduan Solat Langkah demi Langkah",
      prayerGuideDesc: "Penerangan bergambar dan audio",
      faithPillarsTitle: "Rukun Iman",
      islamPillarsTitle: "Rukun Islam",
      conceptsTitle: "Konsep Islam",
    },
    quran: {
      mushafLibrary: "Perpustakaan Mushaf",
      quranTitle: "Al-Quran Al-Kareem",
      searchSurahPlaceholder: "Cari Surah atau ayat...",
      surahCatalogTitle: "Katalog Surah",
      readSurah: "Baca Surah",
      audioRecitation: "Bacaan Audio",
      savedVerses: "Ayat Disimpan",
      bookmarkVerse: "Penanda Buku Ayat",
      surahAbout: "Mengenai Surah",
    },
    qibla: {
      qiblaTitle: "Kompas Kiblat",
      qiblaSubtitle: "Arah tepat ke Kaabah",
      liveCompass: "Kompas Langsung",
      aligned: "Menghadap Kiblat",
      kaabaAngle: "Sudut Kaabah",
      alignInstruction: "Pegang telefon secara rata dan selaraskan dengan anak panah hijau",
      unlockQibla: "Buka Kompas Presisi",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Kandungan rohani tanpa had dan bebas iklan",
      proFeatures: "Ciri-ciri Pro",
      selectPlan: "Pilih Pelan",
      monthly: "Pelan Bulanan",
      sixMonth: "Pelan 6 Bulan",
      yearly: "Pelan Tahunan",
      bestValue: "Paling Berbaloi",
      savingsBadge: "Jimat 50%",
      buyButton: "Mulakan Sekarang",
      restorePurchases: "Pulihkan Pembelian",
      securePayment: "Pembayaran Selamat",
      proActive: "Pro Aktif",
    },
    languageModal: {
      selectLanguage: "Pilih Bahasa",
      changeLanguage: "Tukar Bahasa",
      selectLanguageDesc: "Pilih bahasa pilihan anda",
      searchLanguage: "Cari bahasa...",
    },
  },
  ur: {
    nav: {
      today: "آج",
      learn: "سیکھیں",
      quran: "قرآن",
      qibla: "قبلہ",
      premium: "پریمیئم",
    },
    prayerNames: {
      fajr: "فجر",
      sunrise: "طلوعِ آفتاب",
      dhuhr: "ظہر",
      asr: "عصر",
      maghrib: "مغرب",
      isha: "عشاء",
    },
    header: {
      selectLocation: "مقام منتخب کریں",
      gpsActive: "GPS فعال ہے",
      gpsDetecting: "مقام تلاش کیا جا رہا ہے...",
      date: "تاریخ",
    },
    nextPrayerCard: {
      nextPrayer: "اگلی نماز",
      remaining: "بقايا وقت",
      CallToPrayer: "اذان",
      prayerGuideButton: "نماز گائیڈ",
      reminderActive: "تنبیہ فعال ہے",
    },
    todayVerse: {
      dailyVerseTitle: "آج کی آیت",
      readVerse: "آیت پڑھیں",
      verseReference: "آیت کا حوالہ",
    },
    learn: {
      spiritualLibrary: "روحانی لائبریری",
      learnTitle: "اسلامی علوم و معلومات",
      searchPlaceholder: "عنوان یا دعا تلاش کریں...",
      prayerGuideTitle: "قدم بہ قدم نماز گائیڈ",
      prayerGuideDesc: "تصویری اور صوتی طریقہ",
      faithPillarsTitle: "ایمان کے ارکان",
      islamPillarsTitle: "اسلام کے ارکان",
      conceptsTitle: "اسلامی مفاہیم",
    },
    quran: {
      mushafLibrary: "مصحف لائبریری",
      quranTitle: "قرآن مجید",
      searchSurahPlaceholder: "سورت یا آیت تلاش کریں...",
      surahCatalogTitle: "سورتوں کی فہرست",
      readSurah: "سورت پڑھیں",
      audioRecitation: "صوتی تلاوت",
      savedVerses: "محفوظ شدہ آیات",
      bookmarkVerse: "آیت نشان زد کریں",
      surahAbout: "سورت کے بارے میں",
    },
    qibla: {
      qiblaTitle: "قبلہ نما",
      qiblaSubtitle: "خانہ کعبہ کی درست سمت",
      liveCompass: "لائیو قطب نما",
      aligned: "آپ قبلہ رخ ہیں",
      kaabaAngle: "زاویہ کعبہ",
      alignInstruction: "فون کو سیدھا رکھیں اور سبز تیر سے ملائیں",
      unlockQibla: "حساس قطب نما کھولیں",
    },
    premium: {
      premiumTitle: "حضور پرو",
      premiumSubtitle: "لامحدود روحانی مواد اور اشتہارات سے پاک",
      proFeatures: "پرو خصوصیات",
      selectPlan: "پلان منتخب کریں",
      monthly: "ماہانہ پلان",
      sixMonth: "6 ماہانہ پلان",
      yearly: "سالانہ پلان",
      bestValue: "بہترین قیمت",
      savingsBadge: "50% بچت",
      buyButton: "ابھی شروع کریں",
      restorePurchases: "خریداری بحال کریں",
      securePayment: "محفوظ ادائیگی",
      proActive: "پرو فعال ہے",
    },
    languageModal: {
      selectLanguage: "زبان منتخب کریں",
      changeLanguage: "زبان تبدیل کریں",
      selectLanguageDesc: "اپنی پسندیدہ زبان منتخب کریں",
      searchLanguage: "زبان تلاش کریں...",
    },
  },
  fr: {
    nav: {
      today: "Aujourd'hui",
      learn: "Apprendre",
      quran: "Coran",
      qibla: "Qibla",
      premium: "Premium",
    },
    prayerNames: {
      fajr: "Fajr",
      sunrise: "Lever du soleil",
      dhuhr: "Dhuhr",
      asr: "Asr",
      maghrib: "Maghrib",
      isha: "Isha",
    },
    header: {
      selectLocation: "Sélectionner le lieu",
      gpsActive: "GPS Actif",
      gpsDetecting: "Détection du lieu...",
      date: "Date",
    },
    nextPrayerCard: {
      nextPrayer: "Prochaine prière",
      remaining: "Temps restant",
      CallToPrayer: "Appel à la prière",
      prayerGuideButton: "Guide de prière",
      reminderActive: "Rappel actif",
    },
    todayVerse: {
      dailyVerseTitle: "Verset du jour",
      readVerse: "Lire le verset",
      verseReference: "Référence du verset",
    },
    learn: {
      spiritualLibrary: "Bibliothèque spirituelle",
      learnTitle: "Savoirs & Guides islamiques",
      searchPlaceholder: "Rechercher un sujet ou une invocation...",
      prayerGuideTitle: "Guide de prière pas à pas",
      prayerGuideDesc: "Tutoriel visuel et vocal pour prier",
      faithPillarsTitle: "Piliers de la Foi",
      islamPillarsTitle: "Piliers de l'Islam",
      conceptsTitle: "Concepts islamiques",
    },
    quran: {
      mushafLibrary: "Bibliothèque du Mushaf",
      quranTitle: "Noble Coran",
      searchSurahPlaceholder: "Rechercher une sourate ou un verset...",
      surahCatalogTitle: "Catalogue des sourates",
      readSurah: "Lire la sourate",
      audioRecitation: "Récitation audio",
      savedVerses: "Versets sauvegardés",
      bookmarkVerse: "Marquer le verset",
      surahAbout: "À propos de la sourate",
    },
    qibla: {
      qiblaTitle: "Boussole de la Qibla",
      qiblaSubtitle: "Direction précise de la Kaaba",
      liveCompass: "Boussole en direct",
      aligned: "Aligné avec la Qibla",
      kaabaAngle: "Angle de la Kaaba",
      alignInstruction: "Tenez l'appareil à plat et alignez avec la flèche verte",
      unlockQibla: "Déverrouiller la boussole de précision",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Contenu spirituel illimité et sans publicité",
      proFeatures: "Fonctionnalités Pro",
      selectPlan: "Choisir un forfait",
      monthly: "Forfait Mensuel",
      sixMonth: "Forfait 6 Mois",
      yearly: "Forfait Annuel",
      bestValue: "Offre Populaire",
      savingsBadge: "Économisez 50%",
      buyButton: "Commencer",
      restorePurchases: "Restauration des achats",
      securePayment: "Paiement sécurisé",
      proActive: "Pro Actif",
    },
    languageModal: {
      selectLanguage: "Sélectionner la langue",
      changeLanguage: "Changer de langue",
      selectLanguageDesc: "Choisissez votre langue préférée",
      searchLanguage: "Rechercher une langue...",
    },
  },
  de: {
    nav: {
      today: "Heute",
      learn: "Lernen",
      quran: "Koran",
      qibla: "Qibla",
      premium: "Premium",
    },
    prayerNames: {
      fajr: "Fajr",
      sunrise: "Sonnenaufgang",
      dhuhr: "Dhuhr",
      asr: "Asr",
      maghrib: "Maghrib",
      isha: "Isha",
    },
    header: {
      selectLocation: "Standort wählen",
      gpsActive: "GPS Aktiv",
      gpsDetecting: "Standort wird ermittelt...",
      date: "Datum",
    },
    nextPrayerCard: {
      nextPrayer: "Nächstes Gebet",
      remaining: "Verbleibende Zeit",
      CallToPrayer: "Gebetsruf",
      prayerGuideButton: "Gebetsanleitung",
      reminderActive: "Erinnerung aktiv",
    },
    todayVerse: {
      dailyVerseTitle: "Vers des Tages",
      readVerse: "Vers lesen",
      verseReference: "Vers-Referenz",
    },
    learn: {
      spiritualLibrary: "Spirituelle Bibliothek",
      learnTitle: "Islamisches Wissen & Leitfaden",
      searchPlaceholder: "Thema oder Bittgebet suchen...",
      prayerGuideTitle: "Schritt-für-Schritt Gebetsanleitung",
      prayerGuideDesc: "Visuelle und auditive Anleitung",
      faithPillarsTitle: "Glaubensartikel",
      islamPillarsTitle: "Säulen des Islam",
      conceptsTitle: "Islamische Begriffe",
    },
    quran: {
      mushafLibrary: "Mushaf-Bibliothek",
      quranTitle: "Heiliger Koran",
      searchSurahPlaceholder: "Sure oder Vers suchen...",
      surahCatalogTitle: "Surenverzeichnis",
      readSurah: "Sure lesen",
      audioRecitation: "Audio-Rezitation",
      savedVerses: "Gespeicherte Verse",
      bookmarkVerse: "Vers Lesezeichen",
      surahAbout: "Über die Sure",
    },
    qibla: {
      qiblaTitle: "Qibla-Kompass",
      qiblaSubtitle: "Präzise Richtung zur Kaaba",
      liveCompass: "Live-Kompass",
      aligned: "Ausgerichtet zur Qibla",
      kaabaAngle: "Kaaba-Winkel",
      alignInstruction: "Gerät flach halten und am grünen Pfeil ausrichten",
      unlockQibla: "Präzisionskompass freischalten",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Unbegrenzte spirituelle Inhalte und werbefrei",
      proFeatures: "Pro-Funktionen",
      selectPlan: "Tarif wählen",
      monthly: "Monats-Abo",
      sixMonth: "6-Monats-Abo",
      yearly: "Jahres-Abo",
      bestValue: "Beliebtestes Angebot",
      savingsBadge: "50% Sparen",
      buyButton: "Jetzt starten",
      restorePurchases: "Käufe wiederherstellen",
      securePayment: "Sichere Zahlung",
      proActive: "Pro Aktiv",
    },
    languageModal: {
      selectLanguage: "Sprache wählen",
      changeLanguage: "Sprache ändern",
      selectLanguageDesc: "Wählen Sie Ihre bevorzugte Sprache",
      searchLanguage: "Sprache suchen...",
    },
  },
  es: {
    nav: {
      today: "Hoy",
      learn: "Aprender",
      quran: "Corán",
      qibla: "Qibla",
      premium: "Premium",
    },
    prayerNames: {
      fajr: "Fajr",
      sunrise: "Amanecer",
      dhuhr: "Dhuhr",
      asr: "Asr",
      maghrib: "Maghrib",
      isha: "Isha",
    },
    header: {
      selectLocation: "Seleccionar ubicación",
      gpsActive: "GPS Activo",
      gpsDetecting: "Buscando ubicación...",
      date: "Fecha",
    },
    nextPrayerCard: {
      nextPrayer: "Próxima oración",
      remaining: "Tiempo restante",
      CallToPrayer: "Llamada a la oración",
      prayerGuideButton: "Guía de oración",
      reminderActive: "Recordatorio activo",
    },
    todayVerse: {
      dailyVerseTitle: "Versículo del día",
      readVerse: "Leer versículo",
      verseReference: "Referencia del versículo",
    },
    learn: {
      spiritualLibrary: "Biblioteca espiritual",
      learnTitle: "Conocimiento y guía islámica",
      searchPlaceholder: "Buscar temas o súplicas...",
      prayerGuideTitle: "Guía de oración paso a paso",
      prayerGuideDesc: "Tutorial visual y de audio",
      faithPillarsTitle: "Pilares de la Fe",
      islamPillarsTitle: "Pilares del Islam",
      conceptsTitle: "Conceptos islámicos",
    },
    quran: {
      mushafLibrary: "Biblioteca del Mushaf",
      quranTitle: "Sagrado Corán",
      searchSurahPlaceholder: "Buscar sura o versículo...",
      surahCatalogTitle: "Catálogo de suras",
      readSurah: "Leer sura",
      audioRecitation: "Recitación de audio",
      savedVerses: "Versículos guardados",
      bookmarkVerse: "Marcar versículo",
      surahAbout: "Sobre la sura",
    },
    qibla: {
      qiblaTitle: "Brújula de la Qibla",
      qiblaSubtitle: "Dirección precisa hacia la Kaaba",
      liveCompass: "Brújula en vivo",
      aligned: "Alineado con la Qibla",
      kaabaAngle: "Ángulo de la Kaaba",
      alignInstruction: "Mantenga el dispositivo plano y alinee con la flecha verde",
      unlockQibla: "Desbloquear brújula de precisión",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Contenido espiritual ilimitado y sin anuncios",
      proFeatures: "Características Pro",
      selectPlan: "Seleccionar plan",
      monthly: "Plan Mensual",
      sixMonth: "Plan 6 Meses",
      yearly: "Plan Anual",
      bestValue: "Más Popular",
      savingsBadge: "Ahorra 50%",
      buyButton: "Comenzar",
      restorePurchases: "Restaurar compras",
      securePayment: "Pago seguro",
      proActive: "Pro Activo",
    },
    languageModal: {
      selectLanguage: "Seleccionar idioma",
      changeLanguage: "Cambiar idioma",
      selectLanguageDesc: "Elija su idioma preferido",
      searchLanguage: "Buscar idioma...",
    },
  },
  ru: {
    nav: {
      today: "Сегодня",
      learn: "Обучение",
      quran: "Коран",
      qibla: "Кибла",
      premium: "Премиум",
    },
    prayerNames: {
      fajr: "Фаджр",
      sunrise: "Восход",
      dhuhr: "Зухр",
      asr: "Аср",
      maghrib: "Магриб",
      isha: "Иша",
    },
    header: {
      selectLocation: "Выберите локацию",
      gpsActive: "GPS активен",
      gpsDetecting: "Определение места...",
      date: "Дата",
    },
    nextPrayerCard: {
      nextPrayer: "Следующий намаз",
      remaining: "Осталось времени",
      CallToPrayer: "Азан",
      prayerGuideButton: "Обучение намазу",
      reminderActive: "Напоминание включено",
    },
    todayVerse: {
      dailyVerseTitle: "Аят дня",
      readVerse: "Читать аят",
      verseReference: "Ссылка на аят",
    },
    learn: {
      spiritualLibrary: "Духовная библиотека",
      learnTitle: "Исламские знания и гид",
      searchPlaceholder: "Поиск темы или дуа...",
      prayerGuideTitle: "Пошаговое обучение намазу",
      prayerGuideDesc: "Иллюстрированное и аудио руководство",
      faithPillarsTitle: "Столпы веры",
      islamPillarsTitle: "Столпы Ислама",
      conceptsTitle: "Исламские понятия",
    },
    quran: {
      mushafLibrary: "Библиотека Мусхаф",
      quranTitle: "Священный Коран",
      searchSurahPlaceholder: "Поиск суры или аята...",
      surahCatalogTitle: "Список сур",
      readSurah: "Читать суру",
      audioRecitation: "Аудио чтение",
      savedVerses: "Сохраненные аяты",
      bookmarkVerse: "Добавить аят в закладки",
      surahAbout: "О суре",
    },
    qibla: {
      qiblaTitle: "Компас Киблы",
      qiblaSubtitle: "Точное направление на Каабу",
      liveCompass: "Живой компас",
      aligned: "Вы направлены на Киблу",
      kaabaAngle: "Угол Каабы",
      alignInstruction: "Держите телефон ровно и совместите с зеленой стрелкой",
      unlockQibla: "Разблокировать точный компас",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Безлимитный духовный контент и отсутствие рекламы",
      proFeatures: "Преимущества Pro",
      selectPlan: "Выберите тариф",
      monthly: "Ежемесячно",
      sixMonth: "На 6 месяцев",
      yearly: "Ежегодно",
      bestValue: "Самый популярный",
      savingsBadge: "Скидка 50%",
      buyButton: "Начать",
      restorePurchases: "Восстановить покупки",
      securePayment: "Безопасная оплата",
      proActive: "Pro подписка активна",
    },
    languageModal: {
      selectLanguage: "Выберите язык",
      changeLanguage: "Сменить язык",
      selectLanguageDesc: "Выберите предпочитаемый язык",
      searchLanguage: "Поиск языка...",
    },
  },
  uz: {
    nav: {
      today: "Bugun",
      learn: "O'rganish",
      quran: "Qur'on",
      qibla: "Qibla",
      premium: "Premium",
    },
    prayerNames: {
      fajr: "Bomdod",
      sunrise: "Quyosh",
      dhuhr: "Peshin",
      asr: "Asr",
      maghrib: "Shom",
      isha: "Xufton",
    },
    header: {
      selectLocation: "Joylashuvni tanlang",
      gpsActive: "GPS faol",
      gpsDetecting: "Joylashuv aniqlanmoqda...",
      date: "Sana",
    },
    nextPrayerCard: {
      nextPrayer: "Keyingi namoz",
      remaining: "Qolgan vaqt",
      CallToPrayer: "Azon",
      prayerGuideButton: "Namoz qo'llanmasi",
      reminderActive: "Eslatma faol",
    },
    todayVerse: {
      dailyVerseTitle: "Kun oyati",
      readVerse: "Oyatni o'qish",
      verseReference: "Oyat manbasi",
    },
    learn: {
      spiritualLibrary: "Ma'naviy kutubxona",
      learnTitle: "Islomiy ilmlar va qo'llanma",
      searchPlaceholder: "Mavzu yoki duoni qidirish...",
      prayerGuideTitle: "Bosqichma-bosqich namoz qo'llanmasi",
      prayerGuideDesc: "Rasmli va audio tushuntirish",
      faithPillarsTitle: "Iymon arkonlari",
      islamPillarsTitle: "Islom arkonlari",
      conceptsTitle: "Islomiy tushunchalar",
    },
    quran: {
      mushafLibrary: "Mushaf kutubxonasi",
      quranTitle: "Qur'oni Karim",
      searchSurahPlaceholder: "Sura yoki oyatni qidirish...",
      surahCatalogTitle: "Suralar ro'yxati",
      readSurah: "Surani o'qish",
      audioRecitation: "Audio tilovat",
      savedVerses: "Saqlangan oyatlar",
      bookmarkVerse: "Oyatni saqlash",
      surahAbout: "Sura haqida",
    },
    qibla: {
      qiblaTitle: "Qibla kompasi",
      qiblaSubtitle: "Ka'ba yo'nalishini aniq topish",
      liveCompass: "Jonli kompas",
      aligned: "Qiblaga yuzlandingiz",
      kaabaAngle: "Ka'ba burchagi",
      alignInstruction: "Telefonni tekis tuting va yashil ko'rsatkichga moslang",
      unlockQibla: "Aniq kompasni ochish",
    },
    premium: {
      premiumTitle: "Huzur Pro",
      premiumSubtitle: "Cheksiz ma'naviy tartib va reklamasiz tajriba",
      proFeatures: "Pro imkoniyatlari",
      selectPlan: "Tarifni tanlang",
      monthly: "Oylik tarif",
      sixMonth: "6 oylik tarif",
      yearly: "Yillik tarif",
      bestValue: "Eng ommabop",
      savingsBadge: "50% tejash",
      buyButton: "Hozir boshlash",
      restorePurchases: "Xaridlarni tiklash",
      securePayment: "Xavfsiz to'lov",
      proActive: "Pro faol",
    },
    languageModal: {
      selectLanguage: "Tilni tanlang",
      changeLanguage: "Tilni o'zgartirish",
      selectLanguageDesc: "Ma'qul kelgan tilni tanlang",
      searchLanguage: "Tilni qidirish...",
    },
  },
  fa: {
    nav: {
      today: "امروز",
      learn: "آموزش",
      quran: "قرآن",
      qibla: "قبله",
      premium: "پریمیوم",
    },
    prayerNames: {
      fajr: "اذان صبح",
      sunrise: "طلوع آفتاب",
      dhuhr: "اذان ظهر",
      asr: "اذان عصر",
      maghrib: "اذان مغرب",
      isha: "اذان عشاء",
    },
    header: {
      selectLocation: "انتخاب موقعیت",
      gpsActive: "GPS فعال است",
      gpsDetecting: "در حال شناسایی موقعیت...",
      date: "تاریخ",
    },
    nextPrayerCard: {
      nextPrayer: "نماز بعدی",
      remaining: "زمان باقی‌مانده",
      CallToPrayer: "پخش اذان",
      prayerGuideButton: "راهنمای نماز",
      reminderActive: "یادآور فعال است",
    },
    todayVerse: {
      dailyVerseTitle: "آیه روز",
      readVerse: "خواندن آیه",
      verseReference: "مرجع آیه",
    },
    learn: {
      spiritualLibrary: "کتابخانه معنوی",
      learnTitle: "معارف و راهنمای اسلامی",
      searchPlaceholder: "جستجوی موضوع یا دعا...",
      prayerGuideTitle: "راهنمای گام به گام نماز",
      prayerGuideDesc: "آموزش تصویری و صوتی نماز",
      faithPillarsTitle: "اصول ایمان",
      islamPillarsTitle: "ارکان اسلام",
      conceptsTitle: "مفاهیم اسلامی",
    },
    quran: {
      mushafLibrary: "کتابخانه مصحف",
      quranTitle: "قرآن کریم",
      searchSurahPlaceholder: "جستجوی سوره یا آیه...",
      surahCatalogTitle: "فهرست سوره‌ها",
      readSurah: "خواندن سوره",
      audioRecitation: "تلاوت صوتی",
      savedVerses: "آیه‌های نشان‌شده",
      bookmarkVerse: "نشان کردن آیه",
      surahAbout: "درباره سوره",
    },
    qibla: {
      qiblaTitle: "قطب‌نمای قبله",
      qiblaSubtitle: "جهت‌یابی دقیق به سمت کعبه",
      liveCompass: "قطب‌نمای زنده",
      aligned: "رو به قبله قرار گرفتید",
      kaabaAngle: "زاویه کعبه",
      alignInstruction: "گوشی را صاف نگه دارید و با فلش سبز تنظیم کنید",
      unlockQibla: "باز کردن قطب‌نمای دقیق",
    },
    premium: {
      premiumTitle: "حضور پرو",
      premiumSubtitle: "محتوای معنوی نامحدود و بدون تبلیغات",
      proFeatures: "ویژگی‌های پرو",
      selectPlan: "انتخاب اشتراک",
      monthly: "اشتراک ماهانه",
      sixMonth: "اشتراک ۶ ماهه",
      yearly: "اشتراک سالانه",
      bestValue: "محبوب‌ترین",
      savingsBadge: "۵۰٪ تخفیف",
      buyButton: "شروع کنید",
      restorePurchases: "بازیابی خریدها",
      securePayment: "پرداخت امن",
      proActive: "اشتراک پرو فعال است",
    },
    languageModal: {
      selectLanguage: "انتخاب زبان",
      changeLanguage: "تغییر زبان",
      selectLanguageDesc: "زبان مورد نظر خود را انتخاب کنید",
      searchLanguage: "جستجوی زبان...",
    },
  },
};

export const getTranslation = (langCode: string): TranslationSchema => {
  const code = (langCode in translations ? langCode : "tr") as LanguageCode;
  return translations[code];
};

export const t = (key: string, langCode: string = "tr"): string => {
  const dict = getTranslation(langCode);

  // 1. Nested lookup (e.g. "nav.today" or "header.selectLocation")
  if (key.includes(".")) {
    const parts = key.split(".");
    let current: unknown = dict;
    for (const part of parts) {
      if (current && typeof current === "object" && part in (current as Record<string, unknown>)) {
        current = (current as Record<string, unknown>)[part];
      } else {
        current = undefined;
        break;
      }
    }
    if (typeof current === "string") return current;
  }

  // 2. Format snake_case key to camelCase (e.g. "select_language" -> "selectLanguage")
  const camelKey = key.replace(/[-_]([a-z])/g, (_, letter: string) => letter.toUpperCase());

  // 3. Flat category search
  for (const category of Object.values(dict)) {
    if (category && typeof category === "object") {
      const catObj = category as Record<string, string>;
      if (key in catObj && typeof catObj[key] === "string") return catObj[key];
      if (camelKey in catObj && typeof catObj[camelKey] === "string") return catObj[camelKey];
    }
  }

  return key;
};

export const translate = t;
