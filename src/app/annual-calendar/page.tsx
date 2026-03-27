"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AnnualCalendarPage() {
  const { t, lang } = useLanguage();

  // Translations file (hi.ts/en.ts) se data utha rha hai
  const calendarEvents = t.calendar.events;

  return (
    <div className="pt-20 bg-[#f8f9fc]">
      
      {/* EXACT IMAGE STYLE HEADER - Blue to Green Gradient */}
      <div 
        className="relative py-16 md:py-24 flex flex-col items-center justify-center text-center px-4"
        style={{
          background: "linear-gradient(90deg, #1a3a8f 0%, #136a5a 50%, #2e7d32 100%)",
          borderTop: "4px solid #0d1b4b" 
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">
          {t.calendar.title}
        </h1>
        <p className="text-white/90 text-sm md:text-lg font-medium tracking-[0.2em] uppercase">
          {lang === "en" ? "Organization Yearly Schedule" : "संगठन की वार्षिक समय-सारणी"}
        </p>
      </div>

      {/* CONTENT SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Table Container */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a3a8f] text-white">
                    <th className="py-5 px-6 font-bold text-center w-20">
                      {lang === "en" ? "S.No." : "क्र."}
                    </th>
                    <th className="py-5 px-6 font-bold min-w-[150px]">
                      {lang === "en" ? "Date" : "दिनांक"}
                    </th>
                    <th className="py-5 px-6 font-bold">
                      {lang === "en" ? "Programme Details" : "कार्यक्रम का विवरण"}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {calendarEvents.map((item: any, i: number) => (
                    <tr 
                      key={i} 
                      className={`border-b border-gray-50 hover:bg-blue-50/50 transition-colors duration-150 ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                      }`}
                    >
                      <td className="py-5 px-6 text-center font-bold text-gray-400">
                        {i + 1}
                      </td>
                      <td className="py-5 px-6 font-black text-[#c0282a] text-lg">
                        {item.date}
                      </td>
                      <td className="py-5 px-6">
                        <p className="font-extrabold text-gray-900 text-base md:text-lg leading-tight mb-1">
                          {item.event}
                        </p>
                        {/* Note: Agar desc alag se chahiye ho toh yahan handle kar sakte hain */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-10 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl">
            <p className="text-gray-700 font-medium text-sm md:text-base italic">
              <span className="font-bold text-orange-600 uppercase mr-2">
                {lang === "en" ? "Note:" : "नोट:"}
              </span>
              {lang === "en" 
                ? "Demonstrations, protests, and memorandums are organized from time to time on immediate issues."
                : "समय-समय पर तात्कालिक विषयों पर धरना, प्रदर्शन एवं ज्ञापन दिया जाता है।"}
            </p>
          </div>

        </div>
      </section>

      {/* Tricolor Strip at Bottom */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green-600" />
      </div>
    </div>
  );
}