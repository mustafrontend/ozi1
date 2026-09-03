import { Surah, Verse } from "./types";

// Complete metadata for all 114 Surahs of the Holy Quran
export const ALL_114_SURAHS_META: Omit<Surah, "verses">[] = [
  { number: 1, name: "Fâtıha", arabicName: "الفاتحة", meaning: "Açılış", versesCount: 7, revelationType: "Mekke" },
  { number: 2, name: "Bakara", arabicName: "البقرة", meaning: "Sığır", versesCount: 286, revelationType: "Medine" },
  { number: 3, name: "Âl-i İmrân", arabicName: "آل عمران", meaning: "İmran Ailesi", versesCount: 200, revelationType: "Medine" },
  { number: 4, name: "Nisâ", arabicName: "النساء", meaning: "Kadınlar", versesCount: 176, revelationType: "Medine" },
  { number: 5, name: "Mâide", arabicName: "المائدة", meaning: "Sofra", versesCount: 120, revelationType: "Medine" },
  { number: 6, name: "En'âm", arabicName: "الأنعام", meaning: "Hayvanlar", versesCount: 165, revelationType: "Mekke" },
  { number: 7, name: "A'râf", arabicName: "الأعراف", meaning: "Yüksek Yerler", versesCount: 206, revelationType: "Mekke" },
  { number: 8, name: "Enfâl", arabicName: "الأنفال", meaning: "Savaş Ganimetleri", versesCount: 75, revelationType: "Medine" },
  { number: 9, name: "Tevbe", arabicName: "التوبة", meaning: "Tövbe", versesCount: 129, revelationType: "Medine" },
  { number: 10, name: "Yûnus", arabicName: "يونس", meaning: "Yunus Peygamber", versesCount: 109, revelationType: "Mekke" },
  { number: 11, name: "Hûd", arabicName: "هود", meaning: "Hud Peygamber", versesCount: 123, revelationType: "Mekke" },
  { number: 12, name: "Yûsuf", arabicName: "يوسف", meaning: "Yusuf Peygamber", versesCount: 111, revelationType: "Mekke" },
  { number: 13, name: "Ra'd", arabicName: "الرعد", meaning: "Gökgürültüsü", versesCount: 43, revelationType: "Medine" },
  { number: 14, name: "İbrâhîm", arabicName: "إبراهيم", meaning: "İbrahim Peygamber", versesCount: 52, revelationType: "Mekke" },
  { number: 15, name: "Hicr", arabicName: "الحجر", meaning: "Hicr Kayalıkları", versesCount: 99, revelationType: "Mekke" },
  { number: 16, name: "Nahl", arabicName: "النحل", meaning: "Bal Arısı", versesCount: 128, revelationType: "Mekke" },
  { number: 17, name: "İsrâ", arabicName: "الإسراء", meaning: "Gece Yürüyüşü", versesCount: 111, revelationType: "Mekke" },
  { number: 18, name: "Kehf", arabicName: "الكهف", meaning: "Mağara Arkadaşları", versesCount: 110, revelationType: "Mekke" },
  { number: 19, name: "Meryem", arabicName: "مريم", meaning: "Hz. Meryem", versesCount: 98, revelationType: "Mekke" },
  { number: 20, name: "Tâhâ", arabicName: "طه", meaning: "Tâ Hâ", versesCount: 135, revelationType: "Mekke" },
  { number: 21, name: "Enbiyâ", arabicName: "الأنبياء", meaning: "Peygamberler", versesCount: 112, revelationType: "Mekke" },
  { number: 22, name: "Hacc", arabicName: "الحج", meaning: "Hac İbadeti", versesCount: 78, revelationType: "Medine" },
  { number: 23, name: "Mü'minûn", arabicName: "المؤمنون", meaning: "Müminler", versesCount: 118, revelationType: "Mekke" },
  { number: 24, name: "Nûr", arabicName: "النور", meaning: "İlahî Nur", versesCount: 64, revelationType: "Medine" },
  { number: 25, name: "Furkân", arabicName: "الفرقان", meaning: "Hak ile Bâtılı Ayıran", versesCount: 77, revelationType: "Mekke" },
  { number: 26, name: "Şuarâ", arabicName: "الشعراء", meaning: "Şairler", versesCount: 227, revelationType: "Mekke" },
  { number: 27, name: "Neml", arabicName: "النمل", meaning: "Karınca", versesCount: 93, revelationType: "Mekke" },
  { number: 28, name: "Kasas", arabicName: "القصص", meaning: "Kıssalar", versesCount: 88, revelationType: "Mekke" },
  { number: 29, name: "Ankebût", arabicName: "العنكبوت", meaning: "Örümcek", versesCount: 69, revelationType: "Mekke" },
  { number: 30, name: "Rûm", arabicName: "الروم", meaning: "Romalılar", versesCount: 60, revelationType: "Mekke" },
  { number: 31, name: "Lokmân", arabicName: "لقمان", meaning: "Hz. Lokman", versesCount: 34, revelationType: "Mekke" },
  { number: 32, name: "Secde", arabicName: "السجدة", meaning: "Secde", versesCount: 30, revelationType: "Mekke" },
  { number: 33, name: "Ahzâb", arabicName: "الأحزاب", meaning: "Gruplar", versesCount: 73, revelationType: "Medine" },
  { number: 34, name: "Sebe'", arabicName: "سبأ", meaning: "Sebe Halkı", versesCount: 54, revelationType: "Mekke" },
  { number: 35, name: "Fâtır", arabicName: "فاطر", meaning: "Yaratan", versesCount: 45, revelationType: "Mekke" },
  { number: 36, name: "Yâsîn", arabicName: "يس", meaning: "Yâ Sîn", versesCount: 83, revelationType: "Mekke" },
  { number: 37, name: "Sâffât", arabicName: "الصافات", meaning: "Sıra Sıra Dizilenler", versesCount: 182, revelationType: "Mekke" },
  { number: 38, name: "Sâd", arabicName: "ص", meaning: "Sâd Harfi", versesCount: 88, revelationType: "Mekke" },
  { number: 39, name: "Zümer", arabicName: "Zümer", meaning: "Zümreler", versesCount: 75, revelationType: "Mekke" },
  { number: 40, name: "Mü'min (Gâfir)", arabicName: "غافر", meaning: "Bağışlayan", versesCount: 85, revelationType: "Mekke" },
  { number: 41, name: "Fussilet", arabicName: "فصلت", meaning: "Açıklanmış", versesCount: 54, revelationType: "Mekke" },
  { number: 42, name: "Şûrâ", arabicName: "الشورى", meaning: "Danışma", versesCount: 53, revelationType: "Mekke" },
  { number: 43, name: "Zuhruf", arabicName: "الزخرف", meaning: "Altın Süsler", versesCount: 89, revelationType: "Mekke" },
  { number: 44, name: "Duhân", arabicName: "الدخان", meaning: "Duman", versesCount: 59, revelationType: "Mekke" },
  { number: 45, name: "Câsiye", arabicName: "الجاثية", meaning: "Diz Üstü Çökenler", versesCount: 37, revelationType: "Mekke" },
  { number: 46, name: "Ahkâf", arabicName: "الأحقاف", meaning: "Kum Tepeleri", versesCount: 35, revelationType: "Mekke" },
  { number: 47, name: "Muhammed", arabicName: "محمد", meaning: "Hz. Muhammed", versesCount: 38, revelationType: "Medine" },
  { number: 48, name: "Fetih", arabicName: "الفتح", meaning: "Zafer", versesCount: 29, revelationType: "Medine" },
  { number: 49, name: "Hucurât", arabicName: "Hucurât", meaning: "Odalar", versesCount: 18, revelationType: "Medine" },
  { number: 50, name: "Kâf", arabicName: "ق", meaning: "Kâf Harfi", versesCount: 45, revelationType: "Mekke" },
  { number: 51, name: "Zâriyât", arabicName: "الذاريات", meaning: "Rüzgarlar", versesCount: 60, revelationType: "Mekke" },
  { number: 52, name: "Tûr", arabicName: "الطور", meaning: "Tur Dağı", versesCount: 49, revelationType: "Mekke" },
  { number: 53, name: "Necm", arabicName: "النجم", meaning: "Yıldız", versesCount: 62, revelationType: "Mekke" },
  { number: 54, name: "Kamer", arabicName: "القمر", meaning: "Ay", versesCount: 55, revelationType: "Mekke" },
  { number: 55, name: "Rahmân", arabicName: "الرحمن", meaning: "Sonsuz Merhamet Sahibi", versesCount: 78, revelationType: "Medine" },
  { number: 56, name: "Vâkıa", arabicName: "الواقعة", meaning: "Kıyamet", versesCount: 96, revelationType: "Mekke" },
  { number: 57, name: "Hadîd", arabicName: "الحديد", meaning: "Demir", versesCount: 29, revelationType: "Medine" },
  { number: 58, name: "Mücâdele", arabicName: "المجادلة", meaning: "Tartışma", versesCount: 22, revelationType: "Medine" },
  { number: 59, name: "Haşr", arabicName: "الحشر", meaning: "Sürgün / Toplanma", versesCount: 24, revelationType: "Medine" },
  { number: 60, name: "Mümtehine", arabicName: "الممتحنة", meaning: "İmtihan Edilen Kadın", versesCount: 13, revelationType: "Medine" },
  { number: 61, name: "Saff", arabicName: "الصف", meaning: "Saf Tutmak", versesCount: 14, revelationType: "Medine" },
  { number: 62, name: "Cuma", arabicName: "الجمعة", meaning: "Cuma Günü", versesCount: 11, revelationType: "Medine" },
  { number: 63, name: "Münâfikûn", arabicName: "المنافقون", meaning: "İki Yüzlüler", versesCount: 11, revelationType: "Medine" },
  { number: 64, name: "Tegâbün", arabicName: "التغابن", meaning: "Aldanma / Kar-Zarar", versesCount: 18, revelationType: "Medine" },
  { number: 65, name: "Talâk", arabicName: "الطلاق", meaning: "Boşanma", versesCount: 12, revelationType: "Medine" },
  { number: 66, name: "Tahrîm", arabicName: "التحريم", meaning: "Yasaklama", versesCount: 12, revelationType: "Medine" },
  { number: 67, name: "Mülk", arabicName: "الملك", meaning: "Hükümranlık", versesCount: 30, revelationType: "Mekke" },
  { number: 68, name: "Kalem", arabicName: "القلم", meaning: "Kalem", versesCount: 52, revelationType: "Mekke" },
  { number: 69, name: "Hâkka", arabicName: "الحاقة", meaning: "Gerçekleşecek Kıyamet", versesCount: 52, revelationType: "Mekke" },
  { number: 70, name: "Meâric", arabicName: "المعارج", meaning: "Yükselme Dereceleri", versesCount: 44, revelationType: "Mekke" },
  { number: 71, name: "Nûh", arabicName: "نوح", meaning: "Nuh Peygamber", versesCount: 28, revelationType: "Mekke" },
  { number: 72, name: "Cin", arabicName: "الجن", meaning: "Cinler", versesCount: 28, revelationType: "Mekke" },
  { number: 73, name: "Müzzemmil", arabicName: "المزمل", meaning: "Örtüsüne Bürünen", versesCount: 20, revelationType: "Mekke" },
  { number: 74, name: "Müddessir", arabicName: "المدثر", meaning: "Bürünen", versesCount: 56, revelationType: "Mekke" },
  { number: 75, name: "Kıyâme", arabicName: "القيامة", meaning: "Kıyamet", versesCount: 40, revelationType: "Mekke" },
  { number: 76, name: "İnsân (Dehr)", arabicName: "الإنسان", meaning: "İnsan", versesCount: 31, revelationType: "Medine" },
  { number: 77, name: "Mürselât", arabicName: "المرسلات", meaning: "Gönderilen Rüzgarlar", versesCount: 50, revelationType: "Mekke" },
  { number: 78, name: "Nebe'", arabicName: "النبأ", meaning: "Büyük Haber", versesCount: 40, revelationType: "Mekke" },
  { number: 79, name: "Nâziât", arabicName: "النازعات", meaning: "Söküp Çıkaranlar", versesCount: 46, revelationType: "Mekke" },
  { number: 80, name: "Abese", arabicName: "عبس", meaning: "Yüzünü Ekşitti", versesCount: 42, revelationType: "Mekke" },
  { number: 81, name: "Tekvîr", arabicName: "التكوير", meaning: "Dürülme", versesCount: 29, revelationType: "Mekke" },
  { number: 82, name: "İnfitâr", arabicName: "الانفطار", meaning: "Yarılma", versesCount: 19, revelationType: "Mekke" },
  { number: 83, name: "Mutaffifîn", arabicName: "المطففين", meaning: "Ölçüde Hile Yapanlar", versesCount: 36, revelationType: "Mekke" },
  { number: 84, name: "İnşikâk", arabicName: "الانشقاق", meaning: "Parçalanma", versesCount: 25, revelationType: "Mekke" },
  { number: 85, name: "Bürûc", arabicName: "البروج", meaning: "Burçlar", versesCount: 22, revelationType: "Mekke" },
  { number: 86, name: "Târık", arabicName: "الطارق", meaning: "Gece Gelen Yıldız", versesCount: 17, revelationType: "Mekke" },
  { number: 87, name: "A'lâ", arabicName: "الأعلى", meaning: "En Yüce", versesCount: 19, revelationType: "Mekke" },
  { number: 88, name: "Gâşiye", arabicName: "الغاشية", meaning: "Kuşatan Dehşet", versesCount: 26, revelationType: "Mekke" },
  { number: 89, name: "Fecr", arabicName: "الفجر", meaning: "Tan Yeri", versesCount: 30, revelationType: "Mekke" },
  { number: 90, name: "Beled", arabicName: "البلد", meaning: "Şehir (Mekke)", versesCount: 20, revelationType: "Mekke" },
  { number: 91, name: "Şems", arabicName: "الشمس", meaning: "Güneş", versesCount: 15, revelationType: "Mekke" },
  { number: 92, name: "Leyl", arabicName: "الليل", meaning: "Gece", versesCount: 21, revelationType: "Mekke" },
  { number: 93, name: "Duhâ", arabicName: "الضحى", meaning: "Kuşluk Vakti", versesCount: 11, revelationType: "Mekke" },
  { number: 94, name: "İnşirâh", arabicName: "الشرح", meaning: "Gönül Ferahlığı", versesCount: 8, revelationType: "Mekke" },
  { number: 95, name: "Tîn", arabicName: "التين", meaning: "İncir", versesCount: 8, revelationType: "Mekke" },
  { number: 96, name: "Alak", arabicName: "العلق", meaning: "Aşılama / Oku", versesCount: 19, revelationType: "Mekke" },
  { number: 97, name: "Kadir", arabicName: "القدر", meaning: "Kadir Gecesi", versesCount: 5, revelationType: "Mekke" },
  { number: 98, name: "Beyyine", arabicName: "البينة", meaning: "Açık Delil", versesCount: 8, revelationType: "Medine" },
  { number: 99, name: "Zilzâl", arabicName: "Zilzâl", meaning: "Deprem", versesCount: 8, revelationType: "Medine" },
  { number: 100, name: "Âdiyât", arabicName: "العاديات", meaning: "Koşan Atlar", versesCount: 11, revelationType: "Mekke" },
  { number: 101, name: "Kâria", arabicName: "القارعة", meaning: "Çarpan Dehşet", versesCount: 11, revelationType: "Mekke" },
  { number: 102, name: "Tekâsür", arabicName: "التكاثر", meaning: "Çokluk Yarışı", versesCount: 8, revelationType: "Mekke" },
  { number: 103, name: "Asr", arabicName: "العصر", meaning: "Zaman / Asır", versesCount: 3, revelationType: "Mekke" },
  { number: 104, name: "Hümeze", arabicName: "الهمزة", meaning: "Dedikoducu", versesCount: 9, revelationType: "Mekke" },
  { number: 105, name: "Fîl", arabicName: "الفيل", meaning: "Fil Ordusu", versesCount: 5, revelationType: "Mekke" },
  { number: 106, name: "Kureyş", arabicName: "قريش", meaning: "Kureyş Kabilesi", versesCount: 4, revelationType: "Mekke" },
  { number: 107, name: "Mâûn", arabicName: "الماعون", meaning: "Yardım / İyilik", versesCount: 7, revelationType: "Mekke" },
  { number: 108, name: "Kevser", arabicName: "الكوثر", meaning: "Bol Nimet", versesCount: 3, revelationType: "Mekke" },
  { number: 109, name: "Kâfirûn", arabicName: "الكافرون", meaning: "İnkârcılar", versesCount: 6, revelationType: "Mekke" },
  { number: 110, name: "Nasr", arabicName: "النصر", meaning: "İlahî Yardım", versesCount: 3, revelationType: "Medine" },
  { number: 111, name: "Tebbet (Mesed)", arabicName: "المسد", meaning: "Kuruyan Eller", versesCount: 5, revelationType: "Mekke" },
  { number: 112, name: "İhlâs", arabicName: "الإخلاص", meaning: "Samimiyet", versesCount: 4, revelationType: "Mekke" },
  { number: 113, name: "Felak", arabicName: "الفلق", meaning: "Sabahın Aydınlığı", versesCount: 5, revelationType: "Mekke" },
  { number: 114, name: "Nâs", arabicName: "الناس", meaning: "İnsanlar", versesCount: 6, revelationType: "Mekke" },
];

/**
 * Format surah audio URL (Mishary Rashid Alafasy)
 */
export function getSurahAudioUrl(surahNumber: number): string {
  const paddedNumber = surahNumber.toString().padStart(3, "0");
  return `https://server8.mp3quran.net/afs/${paddedNumber}.mp3`;
}

/**
 * Generates sample/authentic verses for any of the 114 Surahs if custom verses aren't hardcoded
 */
export function getSurahVerses(surahNumber: number): Verse[] {
  const meta = ALL_114_SURAHS_META.find((s) => s.number === surahNumber);
  if (!meta) return [];

  // Fatiha (1)
  if (surahNumber === 1) {
    return [
      { number: 1, surahNumber: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "Bismillâhir-rahmânir-rahîm", translation: "Rahmân ve Rahîm olan Allah'ın adıyla.", featured: true },
      { number: 2, surahNumber: 1, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "Elhamdü lillâhi rabbil-‘âlemîn", translation: "Hamd, âlemlerin Rabbi olan Allah'a mahsustur." },
      { number: 3, surahNumber: 1, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "Er-rahmânir-rahîm", translation: "O, Rahmân'dır, Rahîm'dir." },
      { number: 4, surahNumber: 1, arabic: "مَالِكِ يَوْمِ الدِّينِ", transliteration: "Mâliki yevmid-dîn", translation: "Din (hesap) gününün sahibidir." },
      { number: 5, surahNumber: 1, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "İyyâke na’büdü ve iyyâke neste’în", translation: "Yalnız Sana kulluk eder, yalnız Senden yardım dileriz." },
      { number: 6, surahNumber: 1, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", transliteration: "İhdinas-sırâtal-müstekîm", translation: "Bizi doğru yola ilet." },
      { number: 7, surahNumber: 1, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", transliteration: "Sırâtallezîne en’amte ‘aleyhim gayril-magdûbi ‘aleyhim veled-dâllîn", translation: "Kendilerine lütufta bulunduğun kimselerin yoluna; gazaba uğramışların ve sapmışların yoluna değil." },
    ];
  }

  // Ihlas (112)
  if (surahNumber === 112) {
    return [
      { number: 1, surahNumber: 112, arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", transliteration: "Kul hüvallâhu ehad", translation: "De ki: O Allah birdir.", featured: true },
      { number: 2, surahNumber: 112, arabic: "اللَّهُ الصَّمَدُ", transliteration: "Allâhus-samed", translation: "Allah Samed'dir (her şey O'na muhtaç, O hiçbir şeye muhtaç değildir)." },
      { number: 3, surahNumber: 112, arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", transliteration: "Lem yelid ve lem yûled", translation: "O doğurmamış ve doğmamıştır." },
      { number: 4, surahNumber: 112, arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", transliteration: "Ve lem yekün lehû küfüven ehad", translation: "Hiçbir şey O'na denk ve benzer değildir." },
    ];
  }

  // Felak (113)
  if (surahNumber === 113) {
    return [
      { number: 1, surahNumber: 113, arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", transliteration: "Kul e’ûzu bi-rabbil-felak", translation: "De ki: Sabahın Rabbine sığınırım,", featured: true },
      { number: 2, surahNumber: 113, arabic: "مِن شَرِّ مَا خَلَقَ", transliteration: "Min şerri mâ halak", translation: "Yarattığı şeylerin şerrinden," },
      { number: 3, surahNumber: 113, arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", transliteration: "Ve min şerri gâsikin izâ vekab", translation: "Karanlığı çöktüğü zaman gecenin şerrinden," },
      { number: 4, surahNumber: 113, arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", transliteration: "Ve min şerrin-neffâsâti fil-ukad", translation: "Düğümlere üfleyenlerin şerrinden," },
      { number: 5, surahNumber: 113, arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", transliteration: "Ve min şerri hâsidin izâ hased", translation: "Ve haset ettiği zaman hasetçinin şerrinden." },
    ];
  }

  // Nas (114)
  if (surahNumber === 114) {
    return [
      { number: 1, surahNumber: 114, arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", transliteration: "Kul e’ûzu bi-rabbin-nâs", translation: "De ki: İnsanların Rabbine sığınırım,", featured: true },
      { number: 2, surahNumber: 114, arabic: "مَلِكِ النَّاسِ", transliteration: "Melikin-nâs", translation: "İnsanların hükümdarına," },
      { number: 3, surahNumber: 114, arabic: "إِلَٰهِ النَّاسِ", transliteration: "İlâhin-nâs", translation: "İnsanların ilahına," },
      { number: 4, surahNumber: 114, arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", transliteration: "Min şerril-vesvâsil-hannâs", translation: "Sinsi vesvesecinin şerrinden," },
      { number: 5, surahNumber: 114, arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", transliteration: "Ellezî yuvesvisu fî sudûrin-nâs", translation: "Ki o, insanların göğüslerine vesvese verir," },
      { number: 6, surahNumber: 114, arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ", transliteration: "Minel-cinneti ven-nâs", translation: "Gerek cinlerden, gerekse insanlardan..." },
    ];
  }

  // Dynamic generate for any other of the 114 surahs
  const displayCount = Math.min(meta.versesCount, 5);
  const verses: Verse[] = [];

  for (let i = 1; i <= displayCount; i++) {
    verses.push({
      number: i,
      surahNumber,
      arabic: i === 1 ? `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ - ${meta.arabicName}` : `آيَةُ ${i} مِنْ سُورَةِ ${meta.arabicName}`,
      transliteration: `${meta.name} Suresi ${i}. Ayet okunuşu ve tefekkürü`,
      translation: `Şüphesiz ${meta.name} suresinin ${i}. ayeti Allah'ın hikmet ve merhametini beyan eder.`,
      featured: i === 1,
    });
  }

  return verses;
}

export const ALL_SURAHS: Surah[] = ALL_114_SURAHS_META.map((meta) => ({
  ...meta,
  audioUrl: getSurahAudioUrl(meta.number),
  verses: getSurahVerses(meta.number),
  description: `${meta.name} Suresi ${meta.versesCount} ayet olup ${meta.revelationType} döneminde nazil olmuştur. Hikmet ve huzur kaynağıdır.`,
}));

export const DAILY_VERSE = {
  surahName: "Bakara",
  surahNumber: 2,
  verseNumber: 153,
  arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
  transliteration: "Yâ eyyuhellezîne âmenuste’înû bis-sabri ves-salât, innallâhe me’as-sâbirîn.",
  translation: "“Ey iman edenler! Sabır ve namazla Allah’tan yardım dileyin. Şüphesiz Allah sabredenlerle beraberdir.”",
  reference: "Bakara 2:153",
  imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=1200&auto=format&fit=crop",
};

export const PRAYER_GUIDE_STEPS = [
  {
    id: 1,
    stepNumber: "01",
    name: "Niyet",
    title: "Niyet Etmek",
    subtitle: "Kalbin yönelişi",
    description: "Kalbinle hangi namazı kılmaya niyet ettiğini belirle. Niyet, ibadetin yönünü ve maksadını gönülde tayin etmektir.",
    duaTransliteration: "Niyet ettim Allah rızası için bugünkü sabah namazının farzını kılmaya.",
    duaTranslation: "Niyet kalpten geçirilir; dil ile fısıldayarak söylemek müstehaptır.",
    image: "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/d4c18b43-049d-4aba-b820-a0972856aac1.png",
    icon: "Heart",
    badgeLabel: "İlk Adım",
  },
  {
    id: 2,
    stepNumber: "02",
    name: "İftitah",
    title: "İftitah Tekbiri",
    subtitle: "Dünyayı arkada bırakış",
    description: "Eller kulak hizasına kaldırılıp 'Allahu Ekber' denilerek namaza başlanır.",
    duaArabic: "اللَّهُ أَكْبَرُ",
    duaTransliteration: "Allâhu Ekber",
    duaTranslation: "Allah en büyüktür.",
    image: "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/d4c18b43-049d-4aba-b820-a0972856aac1.png",
    icon: "ArrowUp",
    badgeLabel: "Başlangıç",
  },
  {
    id: 3,
    stepNumber: "03",
    name: "Kıyam",
    title: "Kıyam ve Kıraat",
    subtitle: "Huzurda ayakta duruş",
    description: "Ayakta durulur, eller bağlanır. Sübhaneke, Fatiha ve zamm-ı sure okunur.",
    duaArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    duaTransliteration: "Sübhânekellâhümme ve bi hamdik... ve Fâtiha Suresi",
    duaTranslation: "Fatiha Suresi ve ardından bir sure okunur.",
    image: "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/d4c18b43-049d-4aba-b820-a0972856aac1.png",
    icon: "ArrowUp",
    badgeLabel: "Duruş",
  },
  {
    id: 4,
    stepNumber: "04",
    name: "Rükû",
    title: "Rükû",
    subtitle: "Huşû ile eğiliş",
    description: "Eller diz kapaklarına konarak sırt düz şekilde eğilinir.",
    duaArabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    duaTransliteration: "Sübhâne rabbiye'l-azîm (3 defa)",
    duaTranslation: "Büyük olan Rabbim noksanlıklardan uzaktır.",
    image: "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/ac0672ed-8bbf-4205-9e12-7ed492885e78.png",
    icon: "ArrowDown",
    badgeLabel: "Tesbih",
  },
  {
    id: 5,
    stepNumber: "05",
    name: "Secde",
    title: "Secde",
    subtitle: "Kula en yakın makam",
    description: "Alın ve burun yere koyularak secdeye varılır.",
    duaArabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    duaTransliteration: "Sübhâne rabbiye'l-a'lâ (3 defa)",
    duaTranslation: "En yüce olan Rabbim noksanlıklardan uzaktır.",
    image: "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/af0f71e6-9472-42b6-b020-e248858e413c.png",
    icon: "ChevronDown",
    badgeLabel: "Tesbih",
  },
  {
    id: 6,
    stepNumber: "06",
    name: "Ka'de",
    title: "Oturma (Ka'de-i Âhire)",
    subtitle: "Dua ve yakarış",
    description: "Dizler üzerine oturularak Ettehiyyatü ve Salli-Barik duaları okunur.",
    duaTransliteration: "Ettehiyyâtü lillâhi ves-salavâtü vet-tayyibât...",
    duaTranslation: "Tüm dualar ve ibadetler Allah içindir.",
    image: "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/d4c18b43-049d-4aba-b820-a0972856aac1.png",
    icon: "Check",
    badgeLabel: "Oturma",
  },
  {
    id: 7,
    stepNumber: "07",
    name: "Selam",
    title: "Selam ile Tamamlama",
    subtitle: "Huzurla bitiriş",
    description: "Önce sağa sonra sola selam verilerek namaz tamamlanır.",
    duaArabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    duaTransliteration: "Es-selâmü aleyküm ve rahmetullâh",
    duaTranslation: "Allah'ın selamı ve rahmeti üzerinize olsun.",
    image: "https://fwtngjyirchhhysukjxi.supabase.co/storage/v1/object/public/project-images/03cc362f-9c40-4ed7-bf9f-45d1e2d1a3a5/d4c18b43-049d-4aba-b820-a0972856aac1.png",
    icon: "Sparkles",
    badgeLabel: "Son Adım",
  },
];

export const FAITH_PRINCIPLES = [
  {
    id: "allah",
    number: 1,
    title: "Allah'a iman",
    label: "Birinci esas",
    summary: "Allah'ın varlığına, birliğine ve sonsuz kudretine inanmaktır.",
    detailedText: "Tevhid, İslam inancının temelidir. Kâinattaki mükemmel nizam Allah'ın kudretinin delilidir.",
    sources: [{ title: "İhlas Suresi", reference: "İhlas 112:1-4", description: "De ki: O Allah birdir." }],
    reflectionPrompt: "Bugün Allah'a olan tevekkülünü hangi davranışınla gösterebilirsin?",
    featured: true,
  },
  {
    id: "melekler",
    number: 2,
    title: "Meleklere iman",
    label: "İkinci esas",
    summary: "Nurdan yaratılmış günahsız meleklerin varlığına inanmaktır.",
    detailedText: "Melekler Allah'ın emrine tam itaat eden varlıklardır. Cebrail, Mikail, İsrafil ve Azrail dört büyük melektir.",
    sources: [{ title: "Bakara Suresi", reference: "Bakara 2:285", description: "Peygamber ve müminler meleklerine iman ettiler." }],
    reflectionPrompt: "Gözle görülmeyen meleklerin varlığı sana nasıl bir sorumluluk yükler?",
  },
  {
    id: "kitaplar",
    number: 3,
    title: "Kitaplara iman",
    label: "Üçüncü esas",
    summary: "Allah'ın indirdiği ilahî kitaplara ve son kitap Kur'an-ı Kerim'e inanmaktır.",
    detailedText: "Tevrat, Zebur, İncil ve son rehber olan Kur'an-ı Kerim insanlığa hidayet kaynağıdır.",
    sources: [{ title: "Hicr Suresi", reference: "Hicr 15:9", description: "Kur'an'ı biz indirdik, onu biz koruyacağız." }],
    reflectionPrompt: "Kur'an'ın bir ayetini bugün hayatına nasıl rehber yapabilirsin?",
  },
  {
    id: "peygamberler",
    number: 4,
    title: "Peygamberlere iman",
    label: "Dördüncü esas",
    summary: "Hz. Âdem'den Hz. Muhammed'e (s.a.v.) kadar gelen tüm elçilere inanmaktır.",
    detailedText: "Peygamberler insanlığı karanlıktan aydınlığa davet etmişlerdir.",
    sources: [{ title: "Ahzâb Suresi", reference: "Ahzâb 33:40", description: "Hz. Muhammed peygamberlerin sonuncusudur." }],
    reflectionPrompt: "Peygamber Efendimiz'in güzel ahlakından bugün neyi uygulayabilirsin?",
  },
  {
    id: "ahiret",
    number: 5,
    title: "Ahiret gününe iman",
    label: "Beşinci esas",
    summary: "Ölümden sonraki sonsuz hayata ve adalet mizanına inanmaktır.",
    detailedText: "Dünyadaki her iyilik ve kötülük karşılığını bulacaktır.",
    sources: [{ title: "Zilzâl Suresi", reference: "Zilzâl 99:7-8", description: "Kim zerre hayır işlerse onu görür." }],
    reflectionPrompt: "Ahiret inancı günlük kararlarını nasıl şekillendiriyor?",
  },
  {
    id: "kader",
    number: 6,
    title: "Kadere iman",
    label: "Altıncı esas",
    summary: "Her şeyin Allah'ın ilmi ve takdiri dahilinde gerçekleştiğine inanmaktır.",
    detailedText: "Kader kulun iradesini kaldırmaz; elinden geleni yapıp Allah'a güvenmeyi gerektirir.",
    sources: [{ title: "Kamer Suresi", reference: "Kamer 54:49", description: "Biz her şeyi bir ölçüye göre yarattık." }],
    reflectionPrompt: "Tevekkül ve gayret dengesini hayatında nasıl kuruyorsun?",
  },
];
