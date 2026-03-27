"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // 🔥 AUTO IMAGE GENERATOR
  const generateImages = (folder: string, count: number) => {
    return Array.from(
      { length: count },
      (_, i) => `/gallery/${folder}/(${i + 1}).jpeg`
    );
  };

  const galleryData = [
    {
      key: "delhi2023",
      title: "राष्ट्रीय अधिवेशन 2023 - नई दिल्ली",
      images: generateImages("DLEHI 2023", 3),
    },
    {
      key: "rajasthan2022",
      title: "प्रादेशिक अधिवेशन 2022 - राजस्थान",
      images: generateImages("RAJSATHAN 2022", 5),
    },
    {
      key: "gujarat2021",
      title: "राज्य स्तरीय अधिवेशन 2021 - गुजरात",
      images: generateImages("GUJRAJ 2021", 3),
    },
    {
      key: "chhattisgarh",
      title: "राज्य स्तरीय सम्मेलन - छत्तीसगढ़",
      images: generateImages("CHATTISGARH", 5),
    },
    {
      key: "madhyapradesh",
      title: "राज्य स्तरीय सम्मेलन - मध्य प्रदेश",
      images: generateImages("MADHYAPRADESH", 3),
    },
    {
      key: "mp2024",
      title: "राष्ट्रीय अधिवेशन 2024 - मध्य प्रदेश",
      images: generateImages("MADHYAPRADESH 2024", 6),
    },
    {
      key: "ambedkar",
      title: "डॉ. अंबेडकर जयंती - राजस्थान",
      images: generateImages("RAJASTHAN", 3),
    },
    {
      key: "national2025",
      title: "राष्ट्रीय अधिवेशन 2025",
      images: generateImages("ADHIVESHAN 2025", 4),
    },
    {
      key: "maharashtra2026",
      title: "महिला सम्मान सम्मेलन 2026 - महाराष्ट्र",
      images: generateImages("MAHARASHTRA 2026", 27),
    },
    {
      key: "uttarakhand",
      title: "दिव्यांग उपकरण वितरण - उत्तराखंड",
      images: generateImages("UTTARAKHAND", 3),
    },

    // ✅ OLD IMAGES
    {
      key: "others",
      title: "Others",
      images: [
        "/gallery/101.jpeg",
        "/gallery/102.jpeg",
        "/gallery/103.jpeg",
        "/gallery/104.jpeg",
        "/gallery/105.jpeg",
        "/gallery/106.jpeg",
        "/gallery/107.jpeg",
        "/gallery/108.jpeg",
        "/gallery/110.jpeg",
        "/gallery/111.jpeg",
        "/gallery/112.jpeg",
        "/gallery/113.jpeg",
        "/gallery/114.jpeg",
        "/gallery/115.jpeg",
        "/gallery/116.jpeg",
        "/gallery/117.jpeg",
        "/gallery/118.jpeg",
        "/gallery/119.jpeg",
        "/gallery/120.jpeg",
        "/gallery/121.jpeg",
        "/gallery/122.jpeg",
        "/gallery/123.jpeg",
        "/gallery/124.jpeg",
        "/gallery/125.jpeg",
        "/gallery/126.jpeg",
        "/gallery/127.jpeg",
        "/gallery/128.jpeg",
        "/gallery/129.jpeg",
      ],
    },
  ];

  const activeImages =
    activeTab === "all"
      ? galleryData.flatMap((cat) => cat.images)
      : galleryData.find((cat) => cat.key === activeTab)?.images || [];

  const next = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev! + 1) % activeImages.length);
  };

  const prev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev! - 1
    );
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <div className="py-20 bg-gradient-to-r from-[#2e7d32] to-[#1a3a8f] text-center">
        <h1 className="text-4xl font-bold text-white">
          {t.gallery?.title || "Gallery"}
        </h1>
      </div>

      {/* 🔘 TABS (Updated for Mobile Swipe) */}
      <div className="bg-white py-4 sticky top-0 z-20 shadow-sm border-b border-gray-100">
        {/* Mobile me scroll, Desktop me center wrap */}
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto md:flex-wrap gap-3 md:justify-center items-center pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition whitespace-nowrap flex-shrink-0 ${
              activeTab === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
            }`}
          >
            All
          </button>

          {galleryData.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveTab(cat.key);
                setCurrentIndex(null);
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition whitespace-nowrap flex-shrink-0 ${
                activeTab === cat.key
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 GRID */}
      <section className="py-12 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          {activeImages.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              No images available
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {activeImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="cursor-pointer group"
                >
                  <div className="aspect-square overflow-hidden rounded-xl bg-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={img}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 🔥 POPUP */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-sm">
          <button
            onClick={() => setCurrentIndex(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl p-2 z-50"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-5 text-white/70 hover:text-white text-5xl p-2 z-50"
          >
            ‹
          </button>

          <div className="w-full h-full flex items-center justify-center p-4" onClick={() => setCurrentIndex(null)}>
            <img
              src={activeImages[currentIndex]}
              className="max-h-[85vh] max-w-full object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-5 text-white/70 hover:text-white text-5xl p-2 z-50"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}