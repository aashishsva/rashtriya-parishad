"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const videos = [
  "/videos/5.mp4",
  "/videos/6.mp4",
  "/videos/7.mp4",
  "/videos/4.mp4",
];

export default function VideoSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a2e]">
            {t.video?.title || "Our Videos"}
          </h2>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-5">
          {videos.map((video, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md">
              <video
                src={video}
                controls
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            href="/videos"
            className="px-6 py-3 bg-[#1a3a8f] text-white rounded-xl font-semibold hover:bg-[#15317a]"
          >
            {t.video?.more || "Show More"}
          </Link>
        </div>
      </div>
    </section>
  );
}
