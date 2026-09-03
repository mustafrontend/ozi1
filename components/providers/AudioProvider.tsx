"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback, useMemo } from "react";

interface AudioTrack {
  id: string;
  title: string;
  subtitle: string;
  audioUrl: string;
  surahNumber?: number;
}

interface AudioContextValue {
  currentTrack: AudioTrack | null;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  progressPercent: number;
  speed: number;
  playTrack: (track: AudioTrack) => void;
  pauseTrack: () => void;
  togglePlayPause: () => void;
  seekRelative: (seconds: number) => void;
  seekToPercent: (percent: number) => void;
  setPlaybackSpeed: (speed: number) => void;
  formattedTime: string;
  formattedDuration: string;
}

const AudioContext = createContext<AudioContextValue | undefined>(undefined);

function formatSeconds(secs: number): string {
  if (isNaN(secs) || secs < 0) return "00:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>({
    id: "surah-55",
    title: "Mishary Rashid Alafasy",
    subtitle: "Rahman Suresi dinleniyor",
    audioUrl: "https://server8.mp3quran.net/afs/055.mp3",
    surahNumber: 55,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(494); // default ~8 min for Rahman
  const [currentTime, setCurrentTime] = useState(102); // 01:42 initial demo position
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
      const audio = audioRef.current;

      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration || 494);
      const handleEnded = () => setIsPlaying(false);

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateDuration);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
        audio.removeEventListener("ended", handleEnded);
        audio.pause();
      };
    }
  }, []);

  const playTrack = useCallback((track: AudioTrack) => {
    setCurrentTrack(track);
    if (audioRef.current) {
      if (audioRef.current.src !== track.audioUrl) {
        audioRef.current.src = track.audioUrl;
      }
      audioRef.current.playbackRate = speed;
      audioRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
      setIsPlaying(true);
    }
  }, [speed]);

  const pauseTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  }, []);

  const togglePlayPause = useCallback(() => {
    if (!currentTrack && audioRef.current) return;
    if (isPlaying) {
      pauseTrack();
    } else if (currentTrack) {
      playTrack(currentTrack);
    }
  }, [isPlaying, currentTrack, pauseTrack, playTrack]);

  const seekRelative = useCallback((seconds: number) => {
    if (audioRef.current) {
      const nextTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
      audioRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    } else {
      setCurrentTime((prev) => Math.max(0, Math.min(duration, prev + seconds)));
    }
  }, [duration]);

  const seekToPercent = useCallback((percent: number) => {
    const target = (percent / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = target;
      setCurrentTime(target);
    } else {
      setCurrentTime(target);
    }
  }, [duration]);

  const setPlaybackSpeed = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  }, []);

  const progressPercent = useMemo(() => {
    if (!duration || duration <= 0) return 0;
    return Math.min(100, Math.max(0, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  const value = useMemo(
    () => ({
      currentTrack,
      isPlaying,
      duration,
      currentTime,
      progressPercent,
      speed,
      playTrack,
      pauseTrack,
      togglePlayPause,
      seekRelative,
      seekToPercent,
      setPlaybackSpeed,
      formattedTime: formatSeconds(currentTime),
      formattedDuration: formatSeconds(duration),
    }),
    [
      currentTrack,
      isPlaying,
      duration,
      currentTime,
      progressPercent,
      speed,
      playTrack,
      pauseTrack,
      togglePlayPause,
      seekRelative,
      seekToPercent,
      setPlaybackSpeed,
    ]
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
