"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  // छोटे कार्ड्स का डेटा
  const highlightCards = [
    { label: t.about.mission, value: t.about.missionText, icon: "🎯" },
    { label: t.about.ideology, value: t.about.ideologyText, icon: "💡" },
    { label: t.about.strategy, value: t.about.strategyText, icon: "🏛️" },
  ];

  // संगठन की जानकारी का डेटा
  const orgDetails = [
    { label: t.about.org.foundation, value: t.about.orgData.foundation },
    { label: t.about.org.founder, value: t.about.orgData.founder },
    { label: t.about.org.headquarters, value: t.about.orgData.headquarters },
    { label: t.about.org.area, value: t.about.orgData.area },
    { label: t.about.org.president, value: t.about.orgData.president },
    { label: t.about.org.website, value: t.about.orgData.website },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === TOP ROW: Image (Left) & Text Content (Right) === */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            {/* Background decorative box */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c0282a] rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1a3a8f]/10 rounded-full blur-xl -z-10" />
            
            <img
              src="/ambedkar-banner.jpeg"
              alt="राष्ट्रीय अनुसूचित जाति-जनजाति विकास परिषद्"
              className="w-full h-auto max-h-[450px] object-cover object-top rounded-2xl shadow-xl"
            />
          </div>

          {/* Right: Text & Cards */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold text-[#c0282a] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#c0282a]"></span>
              {t.about.tag || "परिचय"}
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6 leading-tight">
              {t.about.subtitle}
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Highlight Cards (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {highlightCards.map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-[#1a3a8f]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#1a3a8f] text-white font-medium rounded-lg hover:bg-[#c0282a] transition-colors duration-300 shadow-lg shadow-blue-900/20"
            >
              {t.about.title} &rarr;
            </Link>
          </div>
        </div>

        {/* === BOTTOM ROW: Full-width Organization Info Banner === */}
        <div className="relative bg-gradient-to-r from-[#1a3a8f] to-[#2a4db8] rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden">
          
          {/* Decorative shapes inside the banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#c0282a] opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left border-b border-white/20 pb-4 inline-block">
              {t.about.orgTitle}
            </h3>

            {/* 3 Columns Grid for Org Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {orgDetails.map((item) => (
                <div key={item.label} className="flex flex-col bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-white/70 text-sm font-medium mb-1">
                    {item.label}
                  </span>
                  <span className="text-white font-semibold text-base">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}