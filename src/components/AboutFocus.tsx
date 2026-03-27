"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutFocus() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-snug">
              {t.focus.title}
            </h2>

            {/* <p className="text-lg font-semibold text-[#c0282a]">
              {t.focus.welcome}
            </p> */}

            <h3 className="text-xl font-bold text-[#1a3a8f]">
              {t.focus.heading}
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              {t.focus.description}
            </p>

            {/* Points */}
            <ul className="space-y-2 text-md text-gray-700">
              {t.focus.points.map((item: string, i: number) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative flex justify-center">
              <Image
                src="/images/ambedkar.png"
                alt="Focus"
                width={450}
                height={450}
                className="object-contain"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#1a3a8f]/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#c0282a]/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
