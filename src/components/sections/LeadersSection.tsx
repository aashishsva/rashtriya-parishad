"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadersSection() {
  const { t } = useLanguage();
  const leaders = t.leaders.list;

  return (
    <div className="pt-20 bg-[#f8f9fc]">
      
      {/* EXACT IMAGE STYLE HEADER */}
      <div 
        className="relative py-16 md:py-24 flex flex-col items-center justify-center text-center px-4"
        style={{
          background: "linear-gradient(90deg, #1a3a8f 0%, #136a5a 50%, #2e7d32 100%)"
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">
          {t.leaders.title}
        </h1>
        <p className="text-white/90 text-sm md:text-lg font-medium tracking-[0.2em] uppercase">
          नेतृत्व मंडल
        </p>
      </div>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {leaders.map((leader: any, i: number) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[4/5] bg-gray-50 overflow-hidden">
                {leader.photo ? (
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-50 text-[#1a3a8f] text-4xl font-bold">
                    {leader.name.charAt(0)}
                  </div>
                )}
                {/* Gradient Overlay on image hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a8f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text Area */}
              <div className="p-5 text-center flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold text-gray-900 text-sm md:text-lg leading-tight mb-1">
                  {leader.name}
                </h3>
                <p className="text-xs md:text-sm font-bold text-orange-600 mb-2">
                  {leader.position}
                </p>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-auto">
                  {leader.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}