import { Preferences } from "@capacitor/preferences";

export const storage = {
  async get(key: string): Promise<string | null> {
    try {
      const { value } = await Preferences.get({ key });
      if (value !== null) return value;
    } catch {
      // Fallback to localStorage if Capacitor Preferences fails or on web
    }
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },

  async set(key: string, value: string): Promise<void> {
    try {
      await Preferences.set({ key, value });
    } catch {
      // Fallback to localStorage
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  },

  async remove(key: string): Promise<void> {
    try {
      await Preferences.remove({ key });
    } catch {
      // Fallback
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },

  async getJSON<T>(key: string, defaultValue: T): Promise<T> {
    const val = await this.get(key);
    if (!val) return defaultValue;
    try {
      return JSON.parse(val) as T;
    } catch {
      return defaultValue;
    }
  },

  async setJSON<T>(key: string, value: T): Promise<void> {
    await this.set(key, JSON.stringify(value));
  },
};
