"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const pdfs = [
  { file: "/pdf/new-doc-1.pdf" },
  { file: "/pdf/Praveen-Mangaria-8.3-2.pdf" },
  { file: "/pdf/form-member.pdf" },
];

export default function PdfViewerSection() {
  const { t } = useLanguage();
  const [currentPdf, setCurrentPdf] = useState(pdfs[0]);

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
            {t.pdf?.title || "Document"}
          </h2>
          <p className="text-gray-500 mt-2">
            {t.pdf?.subtitle || "View our official document"}
          </p>
        </div>

        {/* 🔥 PDF Selector (PDF 1,2,3) */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {pdfs.map((pdf, i) => (
            <button
              key={i}
              onClick={() => setCurrentPdf(pdf)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold border transition-all ${
                currentPdf.file === pdf.file
                  ? "bg-[#1a3a8f] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              PDF {i + 1}
            </button>
          ))}
        </div>

        {/* PDF Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">

          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
            <span className="text-sm text-gray-500">
              PDF {pdfs.findIndex(p => p.file === currentPdf.file) + 1}
            </span>

            <div className="flex gap-2">
              <a
                href={currentPdf.file}
                target="_blank"
                className="px-3 py-1.5 text-xs font-semibold bg-[#1a3a8f] text-white rounded-lg"
              >
                Open
              </a>
              <a
                href={currentPdf.file}
                download
                className="px-3 py-1.5 text-xs font-semibold bg-[#c0282a] text-white rounded-lg"
              >
                Download
              </a>
            </div>
          </div>

          {/* PDF Frame */}
          <div className="w-full h-[500px] sm:h-[600px] md:h-[700px]">
            <iframe src={currentPdf.file} className="w-full h-full" />
          </div>

        </div>
      </div>
    </section>
  );
}