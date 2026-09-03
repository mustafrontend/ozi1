import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { LocationProvider } from "@/components/providers/LocationProvider";
import { PremiumProvider } from "@/components/providers/PremiumProvider";
import { AudioProvider } from "@/components/providers/AudioProvider";
import { BottomNav } from "@/components/organisms/BottomNav";

export const metadata: Metadata = {
  title: "Huzur - İslami Yaşam ve Manevi Rehber",
  description: "Namaz vakitleri, Kur'an tilaveti, kıble pusulası ve güvenilir İslami rehberlik uygulaması.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#081C1B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="antialiased">
      <body className="min-h-screen bg-slate-50 dark:bg-background text-foreground transition-colors">
        <LanguageProvider>
          <LocationProvider>
            <PremiumProvider>
              <AudioProvider>
                <div className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-50 dark:bg-background shadow-2xl relative">
                  {children}
                  <BottomNav />
                </div>
              </AudioProvider>
            </PremiumProvider>
          </LocationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
