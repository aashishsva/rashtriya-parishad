"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider() {
  const { t } = useLanguage();
  
  const banners = [
    "/carousel/image_0.jpg", 
    "/carousel/image_1.jpg", 
    "/carousel/image_2.jpg", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-[#050a1f]">
      
      {/* 1. Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={banners[currentIndex]}
            alt="Banner"
            fill
            // Mobile par center focus, Desktop par Right focus taaki face na kate
            className="mt-30 object-cover object-center md:object-right transition-transform duration-[6000ms] scale-110" 
            priority
          />
          
          {/* Mobile Overlay: Pure background ko thoda dark rakhta hai taaki text readable ho */}
          <div className="absolute inset-0 bg-[#050a1f]/60 md:bg-transparent md:bg-gradient-to-r md:from-[#050a1f] md:via-[#050a1f]/40 md:to-transparent" />
          
          {/* Bottom Gradient: Soft finish for the tricolor strip */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050a1f] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 ">
        {/* Mobile par center, Desktop par left align content */}
        <div className="max-w-2xl space-y-5 md:space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Chota Premium Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl p-2 shadow-2xl border border-white/20">
              <Image src="/images/logo.jpeg" alt="Logo" fill className="object-contain p-1" />
            </div>
            <div className="h-8 md:h-10 w-[2px] bg-orange-500 hidden md:block" />
            <span className="text-yellow-400 text-[10px] md:text-xs font-black tracking-widest uppercase">
              {t.hero.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-6xl font-black text-white leading-[1.2] md:leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
              {t.hero.title}
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl font-bold text-orange-400 italic"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/90 text-sm md:text-lg leading-relaxed md:border-l-4 md:border-orange-500 md:pl-6 max-w-xl md:bg-transparent bg-black/20 p-4 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none"
          >
            {t.hero.description}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto"
          >
            <Link href="/membership" className="px-8 py-4 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95 text-center">
              {t.hero.cta}
            </Link>
            <Link href="/about" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all text-center">
              {t.hero.learnMore}
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Tricolor Gradient Strip */}
      <div className="absolute bottom-0 left-0 w-full h-2 flex z-20">
        <div className="flex-1 bg-[#ff9933]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#138808]" />
      </div>

    </section>
  );
}