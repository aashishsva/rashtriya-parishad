"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/executive-committee", label: t.nav.executiveCommittee || "Executive Committee" }, 
    // { href: "/membership", label: t.nav.membership },
    { href: "/gallery", label: t.nav.ourGallery || "Our Gallery" },
    { href: "/videos", label: t.nav.ourVideos || "Our Videos" },
    { href: "/annual-calendar", label: t.nav.annualCalendar ||"Annual Calendar" },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-blue-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Tricolor top bar */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="Rashtriya SC ST Vikas Parishad Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-semibold text-[#c0282a] leading-tight">
                राष्ट्रीय अनुसूचित जाति-जनजाति
              </p>
              <p className="text-[13px] font-bold text-[#1a3a8f] leading-tight">
                विकास परिषद्, नई दिल्ली
              </p>
              <p className="text-[10px] text-gray-500 leading-tight">
               Related By SC-ST Commission Govt. of India
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a3a8f] hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              href="/membership"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #1a3a8f, #c0282a)",
              }}
            >
              {t.nav.joinNow}
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5 w-5">
                <span
                  className={`block h-0.5 bg-[#1a3a8f] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-[#1a3a8f] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-[#1a3a8f] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1a3a8f] hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            className="block mt-2 px-4 py-3 text-sm font-semibold text-white text-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #1a3a8f, #c0282a)" }}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.joinNow}
          </Link>
        </div>
      </div>
    </header>
  );
}
