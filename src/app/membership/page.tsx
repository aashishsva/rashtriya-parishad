"use client";
import { useLanguage } from "@/context/LanguageContext";
import MembershipForm from "@/components/MembershipForm";

const colorMap: Record<string, string> = {
  blue: "border-[#1a3a8f] bg-blue-50 text-[#1a3a8f]",
  green: "border-[#2e7d32] bg-green-50 text-[#2e7d32]",
  gold: "border-[#d4a017] bg-amber-50 text-[#d4a017]",
  red: "border-[#c0282a] bg-red-50 text-[#c0282a]",
  purple: "border-purple-700 bg-purple-50 text-purple-700",
};

export default function MembershipPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <div
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2e7d32 0%, #1a3a8f 60%, #c0282a 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-yellow-300 text-sm font-semibold uppercase tracking-widest mb-3">
            संगठन से जुड़ें
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            {t.membership.title}
          </h1>
          <p className="text-white/75 text-base">{t.membership.subtitle}</p>
        </div>
      </div>

      {/* Membership Types */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e]">सदस्यता के प्रकार</h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {t.membership.types.map((mem) => {
              const colorClass = colorMap[mem.color] || colorMap.blue;
              return (
                <div
                  key={mem.name}
                  className={`card-hover rounded-2xl border-2 ${colorClass} p-6 shadow-sm`}
                >
                  <h3 className="font-bold text-sm mb-2">{mem.name}</h3>
                  <p className="text-3xl font-bold my-3">{mem.amount}</p>
                  <p className="text-xs opacity-60 mb-3">{mem.period}</p>
                  <p className="text-xs opacity-80 leading-relaxed mb-3">{mem.description}</p>
                  <span className="inline-block bg-white/60 border border-current/20 text-xs px-3 py-1 rounded-full font-medium">
                    {mem.level}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e]">{t.membership.formTitle}</h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="bg-[#f8f9fc] rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <MembershipForm />
          </div>
        </div>
      </section>
    </div>
  );
}