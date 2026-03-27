"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function VideosPage() {
  const { t } = useLanguage();

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/4.mp4",
    "/videos/5.mp4",
    "/videos/6.mp4",
    "/videos/7.mp4",
    "/videos/8.mp4",
    "/videos/9.mp4",
    "/videos/10.mp4",
    "/videos/11.mp4",
    "/videos/12.mp4",
    "/videos/13.mp4",
    "/videos/14.mp4",
    "/videos/15.mp4",
  ];

  return (
    <div className="pt-20">

      {/* Hero */}
      <div className="py-20 bg-gradient-to-r from-[#c0282a] to-[#1a3a8f] text-center">
        <h1 className="text-4xl font-bold text-white">
          {t.video?.title || "Our Videos"}
        </h1>
      </div>

      {/* 🔥 VIDEO GRID */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                onClick={() => setActiveVideo(video)}
                className="cursor-pointer group relative overflow-hidden rounded-xl bg-black"
              >
                {/* Smart aspect ratio */}
                <div className="w-full aspect-video sm:aspect-[3/4] lg:aspect-video flex items-center justify-center">
                  <video
                    src={video}
                    className="max-h-full max-w-full object-contain"
                    muted
                  />
                </div>

                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-3xl">▶</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 YOUTUBE VIDEO */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">
            Featured Video
          </h2>

          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/Mn5jj7E-euc"
              title="YouTube video"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* 🔥 POPUP PLAYER */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* Close */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* Video */}
          <div className="w-[90%] max-w-4xl">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] object-contain"
            />
          </div>

        </div>
      )}
    </div>
  );
}