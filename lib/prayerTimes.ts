import { Coordinates, CalculationMethod, PrayerTimes } from "adhan";
import { PrayerTimeItem, PrayerTimesData } from "./types";

export interface CityLocation {
  name: string;
  latitude: number;
  longitude: number;
}

export const TURKEY_CITIES: CityLocation[] = [
  { name: "İstanbul (Üsküdar)", latitude: 41.0267, longitude: 29.0175 },
  { name: "Ankara", latitude: 39.9334, longitude: 32.8597 },
  { name: "İzmir", latitude: 38.4237, longitude: 27.1428 },
  { name: "Bursa", latitude: 40.1885, longitude: 29.0610 },
  { name: "Antalya", latitude: 36.8969, longitude: 30.7133 },
  { name: "Konya", latitude: 37.8746, longitude: 32.4932 },
  { name: "Adana", latitude: 37.0000, longitude: 35.3213 },
  { name: "Trabzon", latitude: 41.0027, longitude: 39.7168 },
  { name: "Diyarbakır", latitude: 37.9144, longitude: 40.2306 },
  { name: "Gaziantep", latitude: 37.0662, longitude: 37.3833 },
  { name: "Mekke (Harem)", latitude: 21.4225, longitude: 39.8262 },
  { name: "Medine", latitude: 24.4672, longitude: 39.6111 },
];

export function formatTime24(date: Date): string {
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

export function formatSecondsToCountdown(totalSeconds: number): string {
  if (totalSeconds <= 0) return "00:00:00";
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);

  const hh = h.toString().padStart(2, "0");
  const mm = m.toString().padStart(2, "0");
  const ss = s.toString().padStart(2, "0");

  return `${hh}:${mm}:${ss}`;
}

export function getTurkishDate(date: Date = new Date()): string {
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const dayName = days[date.getDay()];
  const dayNum = date.getDate();
  const monthName = months[date.getMonth()];

  return `${dayNum} ${monthName} ${dayName}`;
}

interface InternalPrayerItem {
  id: string;
  name: string;
  time: string;
  timestamp: Date;
  active?: boolean;
  passed?: boolean;
}

export function calculatePrayerTimes(
  city: CityLocation = TURKEY_CITIES[0],
  date: Date = new Date()
): PrayerTimesData {
  const coordinates = new Coordinates(city.latitude, city.longitude);
  const params = CalculationMethod.Turkey();
  
  const prayerTimes = new PrayerTimes(coordinates, date, params);

  // Tomorrow for next fajr calculation if after isha
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowPrayerTimes = new PrayerTimes(coordinates, tomorrow, params);

  const items: InternalPrayerItem[] = [
    { id: "fajr", name: "İmsak", time: formatTime24(prayerTimes.fajr), timestamp: prayerTimes.fajr },
    { id: "sunrise", name: "Güneş", time: formatTime24(prayerTimes.sunrise), timestamp: prayerTimes.sunrise },
    { id: "dhuhr", name: "Öğle", time: formatTime24(prayerTimes.dhuhr), timestamp: prayerTimes.dhuhr },
    { id: "asr", name: "İkindi", time: formatTime24(prayerTimes.asr), timestamp: prayerTimes.asr },
    { id: "maghrib", name: "Akşam", time: formatTime24(prayerTimes.maghrib), timestamp: prayerTimes.maghrib },
    { id: "isha", name: "Yatsı", time: formatTime24(prayerTimes.isha), timestamp: prayerTimes.isha },
  ];

  const nowMs = date.getTime();
  let currentPrayer: PrayerTimeItem | null = null;
  let nextPrayer: PrayerTimeItem | null = null;
  let prevTimestamp = items[0].timestamp;
  let nextTimestamp = items[1].timestamp;

  if (nowMs < items[0].timestamp.getTime()) {
    // Before Fajr
    nextPrayer = items[0];
    currentPrayer = {
      id: "isha_yesterday",
      name: "Yatsı",
      time: items[5].time,
      timestamp: new Date(items[0].timestamp.getTime() - 6 * 3600 * 1000),
    };
    prevTimestamp = currentPrayer.timestamp ?? items[0].timestamp;
    nextTimestamp = items[0].timestamp;
  } else if (nowMs >= items[5].timestamp.getTime()) {
    // After Isha, next is tomorrow's Fajr
    currentPrayer = items[5];
    nextPrayer = {
      id: "fajr_tomorrow",
      name: "İmsak",
      time: formatTime24(tomorrowPrayerTimes.fajr),
      timestamp: tomorrowPrayerTimes.fajr,
    };
    prevTimestamp = items[5].timestamp;
    nextTimestamp = tomorrowPrayerTimes.fajr;
  } else {
    for (let i = 0; i < items.length - 1; i++) {
      if (nowMs >= items[i].timestamp.getTime() && nowMs < items[i + 1].timestamp.getTime()) {
        currentPrayer = items[i];
        nextPrayer = items[i + 1];
        prevTimestamp = items[i].timestamp;
        nextTimestamp = items[i + 1].timestamp;
        break;
      }
    }
  }

  // Active status mark
  const activeId = currentPrayer?.id || items[2].id;
  items.forEach((item) => {
    item.active = item.id === activeId;
    item.passed = nowMs > item.timestamp.getTime();
  });

  const remainingSeconds = Math.max(
    0,
    Math.floor((nextTimestamp.getTime() - nowMs) / 1000)
  );

  const totalWindowSeconds = Math.max(
    1,
    Math.floor((nextTimestamp.getTime() - prevTimestamp.getTime()) / 1000)
  );
  const elapsedSeconds = totalWindowSeconds - remainingSeconds;
  const progressPercent = Math.min(100, Math.max(0, (elapsedSeconds / totalWindowSeconds) * 100));

  return {
    fajr: formatTime24(prayerTimes.fajr),
    sunrise: formatTime24(prayerTimes.sunrise),
    dhuhr: formatTime24(prayerTimes.dhuhr),
    asr: formatTime24(prayerTimes.asr),
    maghrib: formatTime24(prayerTimes.maghrib),
    isha: formatTime24(prayerTimes.isha),
    currentPrayer,
    nextPrayer,
    timeRemainingSeconds: remainingSeconds,
    formattedRemaining: formatSecondsToCountdown(remainingSeconds),
    progressPercent,
    dateStr: getTurkishDate(date),
    hijriDateStr: "1447 Hicri",
    locationName: city.name,
  };
}
