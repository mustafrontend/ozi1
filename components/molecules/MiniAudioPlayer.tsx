"use client";

import React, { memo } from "react";
import { Play, Pause, RotateCcw, SkipBack, SkipForward, ChevronDown } from "lucide-react";
import { useAudio } from "../providers/AudioProvider";

export const MiniAudioPlayer = memo(function MiniAudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlayPause,
    seekRelative,
    seekToPercent,
    progressPercent,
    formattedTime,
    formattedDuration,
    speed,
    setPlaybackSpeed,
  } = useAudio();

  const handleSpeedCycle = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border-[0.5px] border-primary/35 bg-white dark:bg-card p-4 shadow-card">
      <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full border border-primary/15" />

      <div className="relative flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Durdur" : "Oynat"}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow active:scale-95 transition-transform"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold text-foreground">
                {currentTrack?.title || "Mishary Rashid Alafasy"}
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground truncate">
                {currentTrack?.subtitle || "Rahman Suresi dinleniyor"}
              </p>
            </div>
            <span className="shrink-0 text-xs font-bold text-primary">
              {formattedTime} / {formattedDuration}
            </span>
          </div>

          {/* Seekable Progress Track */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = ((e.clientX - rect.left) / rect.width) * 100;
              seekToPercent(percent);
            }}
            className="mt-3 h-2 cursor-pointer overflow-hidden rounded-full bg-slate-100 dark:bg-muted"
          >
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-full rounded-full bg-primary transition-all duration-150"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-4 flex items-center justify-between border-t border-slate-100 dark:border-border pt-3">
        <button
          type="button"
          onClick={() => seekRelative(-15)}
          className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground active:scale-95 transition-all"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          15 sn
        </button>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => seekRelative(-30)}
            className="text-muted-foreground hover:text-primary active:scale-95 transition-colors"
          >
            <SkipBack className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => seekRelative(30)}
            className="text-muted-foreground hover:text-primary active:scale-95 transition-colors"
          >
            <SkipForward className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleSpeedCycle}
          className="flex items-center gap-1 text-xs font-extrabold text-primary hover:opacity-80 active:scale-95 transition-all"
        >
          <span>{speed}x</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
});
