"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const images = [
  "/gallery/11.jpeg",
  "/gallery/12.jpeg",
  "/gallery/13.jpeg",
  "/gallery/14.jpeg",
  "/gallery/15.jpeg",
  "/gallery/16.jpeg",
  "/gallery/17.jpeg",
  "/gallery/18.jpeg",
];

export default function GallerySection() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a2e]">
            {t.gallery?.title || "Our Gallery"}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-[220px] flex items-center justify-center">
                <Image
                  src={img}
                  alt="gallery"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="px-6 py-3 bg-[#c0282a] text-white rounded-xl font-semibold hover:bg-[#a82224]"
          >
            {t.gallery?.more || "Show More"}
          </Link>
        </div>

        {/* 🔥 Popup / Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl font-bold"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-[90%] max-w-4xl h-[80vh]">
              <Image
                src={selectedImage}
                alt="preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}