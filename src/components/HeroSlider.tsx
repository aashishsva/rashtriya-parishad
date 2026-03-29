"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider() {
  const { t } = useLanguage();

  const banners = [
    "/carousel/image_0.png",
    "/carousel/image_1.png",
    "/carousel/image_2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <>
      {/* ════════════════════════════════════════
          MOBILE LAYOUT  (visible on mobile only)
      ════════════════════════════════════════ */}
      <section className="block md:hidden w-full overflow-hidden bg-[#f0f4f8]">
        {/* Top Tricolor */}
        <div className="flex h-1.5 w-full">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white border-y border-gray-200" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        {/* Gov Header Bar */}
        <div className="bg-[#1a3a6b] w-full px-4 py-2.5 flex items-center gap-3 shadow-md">
          <div className="w-9 h-9 rounded-full bg-white/10 border border-white/30 flex items-center justify-center shrink-0">
            <span className="text-white text-[10px] font-bold">🪬</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-[11px] tracking-wide">
              {t.hero.ministry ?? "Ministry of Social Justice & Empowerment"}
            </span>
            <span className="text-blue-200 text-[9px] tracking-widest uppercase">
              {t.hero.govLabel ?? "Government of India"}
            </span>
          </div>
          <div className="ml-auto flex flex-col gap-1 cursor-pointer p-1">
            <span className="block w-5 h-0.5 bg-white rounded" />
            <span className="block w-5 h-0.5 bg-white rounded" />
            <span className="block w-5 h-0.5 bg-white rounded" />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative h-[52vw] min-h-[200px] max-h-[320px] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0"
            >
              <Image
                src={banners[currentIndex]}
                alt="Banner"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() =>
              setCurrentIndex((p) => (p - 1 + banners.length) % banners.length)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-sm px-2 py-1.5 text-xs transition"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentIndex((p) => (p + 1) % banners.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-sm px-2 py-1.5 text-xs transition"
            aria-label="Next"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-sm transition-all duration-300 ${
                  i === currentIndex ? "w-5 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="relative z-10 bg-white mx-3 -mt-4 rounded-t-lg shadow-lg border border-gray-100 px-4 pt-5 pb-6">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 border border-[#1a3a6b]/20 rounded-full px-3 py-1 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[#1a3a6b] text-[9px] font-bold tracking-widest uppercase">
              {t.hero.tagline ?? "Official Government Portal"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#1a3a6b] text-xl font-extrabold leading-snug mb-2"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.hero.title ?? "Empowering Every Citizen"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-orange-700 text-sm font-semibold mb-3"
          >
            {t.hero.subtitle ?? "Social Justice · Equity · Inclusion"}
          </motion.p>

          <div className="h-px bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mb-3" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-xs leading-relaxed mb-5"
          >
            {t.hero.description ??
              "Dedicated to the welfare and upliftment of disadvantaged sections of society through inclusive policies and targeted programmes."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex gap-3"
          >
            <Link
              href="/about"
              className="flex-1 text-center bg-[#1a3a6b] text-white text-xs font-bold uppercase tracking-wider py-3 rounded shadow-sm hover:bg-[#14306b] active:scale-95 transition-all"
            >
              {t.hero.learnMore ?? "Know More"}
            </Link>
          </motion.div>
        </div>

        {/* Bottom Tricolor */}
        <div className="flex h-1.5 w-full">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white border-y border-gray-200" />
          <div className="flex-1 bg-[#138808]" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  (hidden on mobile, visible on md+)
          — Original design, completely untouched —
      ════════════════════════════════════════ */}
      <section className="hidden md:flex relative h-screen min-h-[600px] w-full items-center overflow-hidden bg-[#f4f4f4]">
        {/* Background Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={banners[currentIndex]}
              alt="Banner"
              fill
              className="object-cover object-right transition-transform duration-[8000ms] scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10">
          <div className="max-w-xl space-y-6 text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-white/80 py-1 px-3 rounded-full border border-gray-200 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-[#1a237e] text-xs font-bold tracking-wider uppercase">
                {t.hero.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-extrabold text-[#1a237e] leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-semibold text-orange-700"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-700 text-base leading-relaxed max-w-md"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-row gap-3 pt-2"
            >
              <Link
                href="/about"
                className="px-6 py-3 border-2 border-[#1a237e] text-[#1a237e] text-sm font-bold rounded hover:bg-gray-50 transition-all text-center uppercase tracking-wider"
              >
                {t.hero.learnMore}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Top tricolor */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 z-30" />
        {/* Bottom tricolor */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 flex z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#138808]" />
        </div>
      </section>
    </>
  );
}
