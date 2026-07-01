"use client";

import { useRef, useState } from "react";

export type VideoItem = { src: string; title: string; label?: string };

export default function VideoShowcase({ videos }: { videos: VideoItem[] }) {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const mainRef = useRef<HTMLVideoElement | null>(null);
  const current = videos[active];

  const toggleMute = () => {
    const v = mainRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <div className="reveal-img">
      <div className="relative overflow-hidden rounded-[2rem] bg-sidi-ink shadow-lift">
        {/* Fond flouté — s'adapte à n'importe quel format vidéo */}
        <video
          key={`bg-${current.src}`}
          className="absolute inset-0 h-full w-full scale-125 object-cover opacity-45 blur-2xl"
          src={current.src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="relative flex aspect-[4/5] items-center justify-center sm:aspect-[16/10]">
          <video
            key={current.src}
            ref={mainRef}
            className="h-full w-full object-contain"
            src={current.src}
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
          />
        </div>

        {/* overlay bas */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-sidi-ink/85 to-transparent p-5 pt-16">
          <div className="pointer-events-auto flex items-end justify-between gap-4">
            <div>
              {current.label && (
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-sun">
                  {current.label}
                </span>
              )}
              <p className="mt-1 font-display text-xl text-cream md:text-2xl">
                {current.title}
              </p>
            </div>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Activer le son" : "Couper le son"}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/30 bg-sidi-ink/40 text-cream backdrop-blur transition-colors hover:bg-cream hover:text-sidi-ink"
            >
              {muted ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="m23 9-6 6M17 9l6 6" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {videos.length > 1 && (
        <div className="mt-4 flex gap-2">
          {videos.map((v, i) => (
            <button
              key={v.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Vidéo ${i + 1} : ${v.title}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-8 bg-terracotta" : "w-2 bg-sidi-ink/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
