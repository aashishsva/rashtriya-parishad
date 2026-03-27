"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function StateLeadersSection() {
  // Yahan 'lang' add kar diya hai taaki error chala jaye
  const { t, lang } = useLanguage(); 

  return (
    <div className="bg-white">
      {/* ── EXACT IMAGE STYLE HEADER ── */}
      <div 
        className="relative py-16 md:py-24 flex flex-col items-center justify-center text-center px-4 mt-10"
        style={{
          background: "linear-gradient(90deg, #1a3a8f 0%, #136a5a 50%, #2e7d32 100%)",
          borderTop: "4px solid #0d1b4b" 
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold  text-white tracking-tight mb-2">
          {t.stateLeaders?.title || "हमारे राज्य अध्यक्ष"}
        </h1>
        <p className="text-white/90 text-sm md:text-lg font-medium tracking-[0.2em] uppercase">
          {/* Ab 'lang' defined hai toh error nahi aayega */}
          {lang === "en" ? "State Leadership Council" : "राज्य नेतृत्व मंडल"}
        </p>
      </div>

      {/* ── LEADERS CARDS SECTION ── */}
      <section className="py-20 -mt-10 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {t.stateLeaders?.list.map((leader: any, i: number) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4] cursor-pointer border-4 border-white bg-gray-100">
              <img
                src={leader.photo}
                alt={leader.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${leader.name}&background=eef2ff&color=1a3a8f&size=512&bold=true`; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                <span className="inline-block px-4 py-1.5 bg-[#c0282a] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-3 shadow-md">{leader.state}</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 drop-shadow-lg group-hover:text-yellow-400">{leader.name}</h3>
                <p className="text-gray-200 text-sm font-semibold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>{leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}