/**
 * One-off build script: merges authoritative Quran data fetched from
 * api.alquran.cloud (Uthmani Arabic text, Diyanet Turkish translation,
 * and a standard transliteration edition) into lib/data/quran-verses.json.
 *
 * Run manually with `node scripts/build-quran-data.js` if the data needs
 * to be regenerated; the JSON output is committed so the app never needs
 * network access to show real Quran text.
 */
const fs = require("fs");
const path = require("path");

const ar = require("./tmp/quran_ar.json");
const tr = require("./tmp/quran_tr.json");
const tl = require("./tmp/quran_translit.json");

const result = {};

for (let i = 0; i < ar.data.surahs.length; i++) {
  const surahAr = ar.data.surahs[i];
  const surahTr = tr.data.surahs[i];
  const surahTl = tl.data.surahs[i];
  const surahNumber = surahAr.number;

  const verses = surahAr.ayahs.map((ayah, idx) => ({
    number: ayah.numberInSurah,
    surahNumber,
    arabic: ayah.text,
    transliteration: surahTl.ayahs[idx]?.text ?? "",
    translation: surahTr.ayahs[idx]?.text ?? "",
    featured: idx === 0,
  }));

  result[surahNumber] = verses;
}

const outDir = path.join(__dirname, "..", "lib", "data");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "quran-verses.json"), JSON.stringify(result));

console.log("Wrote", Object.keys(result).length, "surahs to lib/data/quran-verses.json");
