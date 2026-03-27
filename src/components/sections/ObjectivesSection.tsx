"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ObjectivesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">{t.objectives.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.objectives.list.map((obj, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p>{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}