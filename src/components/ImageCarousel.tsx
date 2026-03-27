"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  "/carousel/1.jpg",
  "/carousel/2.jpg",
  "/carousel/3.jpg",
  "/carousel/4.jpg",
  "/carousel/5.jpg",
  "/carousel/6.jpg",
  "/carousel/7.jpg",
  "/carousel/8.jpg",
  "/carousel/9.jpg",
  "/carousel/10.jpg",
  "/carousel/11.jpg",
  "/carousel/12.jpg",
  "/carousel/13.jpg",
  // "/carousel/14.jpg",
  "/carousel/15.jpg",
];

export default function ImageCarousel() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = slides.length;

  // ── i18n strings ──────────────────────────────────────────────
  const i18n = {
    eyebrow: lang === "en" ? "About the Organisation" : "संगठन के बारे में",
    heading:  lang === "en" ? "Our Gallery"            : "हमारी जानकारी",
    prev:     lang === "en" ? "Previous"               : "पिछला",
    next:     lang === "en" ? "Next"                   : "अगला",
    pause:    lang === "en" ? "Pause"                  : "रोकें",
    play:     lang === "en" ? "Play"                   : "चलाएं",
    slide:    lang === "en" ? "Slide"                  : "स्लाइड",
  };

  // ── Navigation ────────────────────────────────────────────────
  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((index + total) % total);
        setIsTransitioning(false);
      }, 250);
    },
    [isTransitioning, total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // ── Auto-play ─────────────────────────────────────────────────
  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(next, 7000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPlaying, next]);

  const pause = () => { setIsPlaying(false); if (timerRef.current) clearInterval(timerRef.current); };
  const play  = () => setIsPlaying(true);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#c0282a] uppercase tracking-widest mb-2">
            {i18n.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
            {i18n.heading}
          </h2>
          <div
            className="w-14 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg,#1a3a8f,#c0282a)" }}
          />
        </div>

        {/* ── Carousel wrapper ── */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          onMouseEnter={pause}
          onMouseLeave={play}
        >
          {/* Image */}
          <div
            className={`transition-opacity duration-700 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={slides[current]}
                alt={`${i18n.slide} ${current + 1}`}
                fill
                className="object-contain bg-white"
                sizes="(max-width:768px) 100vw, 80vw"
                priority={current < 3}
              />
            </div>
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label={i18n.prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10 border border-gray-100"
          >
            <svg className="w-5 h-5 text-[#1a3a8f]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label={i18n.next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10 border border-gray-100"
          >
            <svg className="w-5 h-5 text-[#1a3a8f]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play / Pause */}
          <button
            onClick={isPlaying ? pause : play}
            aria-label={isPlaying ? i18n.pause : i18n.play}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 shadow flex items-center justify-center hover:bg-white transition-all z-10"
          >
            {isPlaying ? (
              <svg className="w-4 h-4 text-[#1a3a8f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6zm8-14v14h4V5z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-[#1a3a8f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Counter badge */}
          <div className="absolute top-3 left-3 bg-[#1a3a8f] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            {current + 1} / {total}
          </div>
        </div>

        {/* ── Dot navigation ── */}
        <div className="flex items-center justify-center gap-1.5 mt-6 flex-wrap">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`${i18n.slide} ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-[#1a3a8f]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-[#1a3a8f]/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}