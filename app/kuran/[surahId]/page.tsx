import React from "react";
import { ALL_SURAHS } from "@/lib/quranData";
import { SurahReaderClient } from "@/components/organisms/SurahReaderClient";

export function generateStaticParams() {
  return ALL_SURAHS.map((s) => ({ surahId: s.number.toString() }));
}

interface SurahPageProps {
  params: { surahId: string };
}

export default function SurahPage({ params }: SurahPageProps) {
  return <SurahReaderClient surahId={params.surahId} />;
}
