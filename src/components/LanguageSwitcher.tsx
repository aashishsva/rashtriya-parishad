"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
      <button
        onClick={() => setLang("hi")}
        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
          lang === "hi"
            ? "bg-[#1a3a8f] text-white shadow-sm"
            : "text-gray-600 hover:text-[#1a3a8f]"
        }`}
      >
        हिंदी
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
          lang === "en"
            ? "bg-[#1a3a8f] text-white shadow-sm"
            : "text-gray-600 hover:text-[#1a3a8f]"
        }`}
      >
        EN
      </button>
    </div>
  );
}