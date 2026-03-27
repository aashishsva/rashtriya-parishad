"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadersSection() {
  const { t } = useLanguage();
  // Agar TypeScript abhi bhi leader type maange, toh bas any ya proper type assign karein
  const leaders = t.leaders.list;

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#c0282a] uppercase tracking-widest mb-2">
            नेतृत्व
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
            {t.leaders.title}
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {leaders.map((leader: any, i: number) => (
            <div
              key={i}
              className="card-hover rounded-2xl overflow-hidden border-2 transition-all flex flex-col border-gray-100 bg-white shadow-sm"
            >
              {/* Photo */}
              <div className="relative w-full aspect-square bg-gray-50">
                {leader.photo ? (
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a3a8f]/8 to-[#1a3a8f]/3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold border-2 bg-[#1a3a8f]/10 border-[#1a3a8f]/20 text-[#1a3a8f]">
                      {leader.name
                        .replace(/श्री |मा\. |डॉ\. |Mr\. |Shri /g, "")
                        .trim()
                        .split(" ")
                        .slice(0, 2)
                        .map((w: string) => w[0])
                        .join("")}
                    </div>
                  </div>
                )}
              </div>

              {/* Name + Details */}
              <div className="p-4 flex-1 bg-white">
                {/* Name */}
                <h3 className="font-bold text-sm leading-snug mb-1 text-[#1a1a2e]">
                  {leader.name}
                </h3>

                {/* Position */}
                <p className="text-xs font-semibold text-[#1a3a8f]">
                  {leader.position}
                </p>

                {/* Extra */}
                {leader.extra && (
                  <p className="text-[11px] text-gray-500">
                    {leader.extra}
                  </p>
                )}

                {/* Organization */}
                <p className="text-[10px] mt-1 leading-tight text-gray-400">
                  {leader.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}