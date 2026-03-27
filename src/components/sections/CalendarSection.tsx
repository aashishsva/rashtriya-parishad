"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function CalendarSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#c0282a] uppercase tracking-widest mb-2">
            वर्ष भर
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
            {t.calendar.title}
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {t.calendar.events.map((event, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-2xl p-5 border border-blue-50 shadow-sm"
            >
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-3 text-white"
                style={{
                  background:
                    i % 3 === 0
                      ? "#1a3a8f"
                      : i % 3 === 1
                        ? "#2e7d32"
                        : "#c0282a",
                }}
              >
                📅 {event.date}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {event.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
