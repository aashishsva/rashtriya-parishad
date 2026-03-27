"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSlider() {
  const { t, lang } = useLanguage();

  const stats = [
    { value: "1977", label: lang === "en" ? "Founded" : "स्थापना वर्ष" },
    { value: "8+", label: lang === "en" ? "Presidents" : "राष्ट्रीय अध्यक्ष" },
    { value: "28+", label: lang === "en" ? "States" : "राज्यों में" },
    { value: "6742", label: lang === "en" ? "Castes" : "जातियों के लिए" },
  ];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#0d1b4b]">
      {/* ── Geometric background shapes ───────────────────────────── */}
      {/* Large circle — top right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5" />
      <div className="absolute -top-16 -right-16 w-[360px] h-[360px] rounded-full border border-white/5" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main content ───────────────────────────────────────────── */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — 3 cols */}
          <div
            className={`lg:col-span-3 text-white space-y-7 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#d4a017]" />
              <span className="text-[#d4a017] text-xs font-bold tracking-[0.2em] uppercase">
                {t.hero.tagline}
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-[2.75rem] font-bold leading-[1.15] text-white">
                {t.hero.title}
              </h1>
              <p className="mt-2 text-lg text-[#d4a017] font-semibold">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-white/65 text-base leading-relaxed max-w-lg border-l-2 border-[#d4a017]/40 pl-4">
              {t.hero.description}
            </p>

            {/* Est. */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 w-fit">
              <span className="text-[#d4a017]">🏛️</span>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                {t.hero.estd}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-7 py-3 font-bold text-[#0d1b4b] rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-sm"
                style={{
                  background: "linear-gradient(135deg, #d4a017, #f0c040)",
                }}
              >
                {t.hero.cta}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/8 transition-all duration-200 text-sm"
              >
                {t.hero.learnMore}
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-4 gap-1 pt-2 border-t border-white/10"
              style={{ transitionDelay: "200ms" }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center py-4">
                  <div className="text-xl sm:text-2xl font-bold text-[#d4a017]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/50 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 2 cols — Logo + card */}
          <div
            className={`lg:col-span-2 flex justify-center lg:justify-end transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative flex flex-col items-center gap-6">
              {/* Logo Ring Container */}
              <div className="relative group flex items-center justify-center">
                {/* 1. Glowing Back-shadow (यह लोगो को पीछे से 'उठाव' देगा) */}
                <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full blur-xl opacity-60 bg-gradient-to-r from-[#ff9933] via-white to-[#138808] group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500"></div>

                {/* 2. Tricolor Border Ring */}
                <div
                  className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-[5px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-2"
                  style={{
                    background:
                      "conic-gradient(from 45deg, #ff9933, #ffffff, #138808, #ffffff, #ff9933)",
                  }}
                >
                  {/* 3. Inner White Circle (लोगो को क्लीन और प्रीमियम दिखाने के लिए) */}
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden shadow-inner border border-gray-100">
                    <Image
                      src="/images/logo.jpeg"
                      alt="Rashtriya SC ST Vikas Parishad"
                      width={300}
                      height={300}
                      // p-4 देने से लोगो और बॉर्डर के बीच अच्छी स्पेसिंग आ जाएगी
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Info card below logo */}
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 w-full max-w-xs backdrop-blur-sm">
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-3">
                  {lang === "en" ? "Current Leadership" : "वर्तमान नेतृत्व"}
                </p>
                <div className="space-y-2.5">
                  {[
                    {
                      role:
                        lang === "en"
                          ? "National President"
                          : "राष्ट्रीय अध्यक्ष",
                      name:
                        lang === "en"
                          ? "Shri Praveen Mangariya"
                          : "श्री प्रवीण मांगरिया",
                    },
                    {
                      role: lang === "en" ? "Patron" : "संरक्षक",
                      name:
                        lang === "en"
                          ? "Shri Juel Ji Oraon"
                          : "श्री जुएल जी उरांव",
                    },
                    {
                      role:
                        lang === "en"
                          ? "National Coordinator"
                          : "राष्ट्रीय संयोजक",
                      name:
                        lang === "en"
                          ? "Shri Faggan Singh Kulaste"
                          : "मा. फग्गन सिंह कुलस्ते",
                    },
                  ].map((person) => (
                    <div
                      key={person.role}
                      className="flex justify-between items-center gap-3"
                    >
                      <span className="text-white/40 text-[11px]">
                        {person.role}
                      </span>
                      <span className="text-white/85 text-[11px] font-semibold text-right leading-tight">
                        {person.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/30 text-[10px]">
                    {lang === "en" ? "Mobile" : "मो."}
                  </span>
                  <a
                    href="tel:9425303351"
                    className="text-[#d4a017] text-xs font-semibold hover:text-yellow-300 transition-colors"
                  >
                    9425108577
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom wave ───────────────────────────────────────────── */}
      {/* <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 70L1440 70L1440 25C1200 65 960 5 720 25C480 45 240 5 0 25L0 70Z"
            fill="#f8f9fc"
          />
        </svg>
      </div> */}
    </section>
  );
}
