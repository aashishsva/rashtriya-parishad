"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a3a8f 0%, #c0282a 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center text-white">

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t.cta?.title || "Join us to build a better society"}
        </h2>

        <p className="text-white/80 mb-8">
          {t.cta?.subtitle || "Be part of change and growth"}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/membership"
            className="px-8 py-3 bg-white text-[#1a3a8f] font-bold rounded-xl"
          >
            {t.cta?.join || "Join Now"}
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white rounded-xl"
          >
            {t.cta?.contact || "Contact"}
          </Link>
        </div>

      </div>
    </section>
  );
}