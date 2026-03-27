"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  // Same links as Navbar
  const footerNavLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/executive-committee", label: t.nav.executiveCommittee || "Executive Committee" },
    { href: "/gallery", label: t.nav.ourGallery || "Our Gallery" },
    { href: "/videos", label: t.nav.ourVideos || "Our Videos" },
    { href: "/annual-calendar", label: t.nav.annualCalendar || "Annual Calendar" },
    { href: "/contact", label: t.nav.contact },
    { href: "/membership", label: t.nav.joinNow },
  ];

  return (
    <footer className="bg-[#0f1f5c] text-white">
      {/* Tricolor bar */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%)",
        }}
      />

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ABOUT */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.jpeg"
                alt="Logo"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-bold text-white/90 leading-tight">
                  राष्ट्रीय अनुसूचित जाति-जनजाति
                </p>
                <p className="text-sm font-bold text-yellow-300 leading-tight">
                  विकास परिषद्, नई दिल्ली
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {t.footer?.aboutText}
            </p>

            <div className="mt-5 flex gap-3 flex-wrap">
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">
                जय भीम
              </span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">
                जय संविधान
              </span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">
                जय मुलनिवासी
              </span>
            </div>
          </div>

          {/* IMPORTANT LINKS (Updated to match Navbar) */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              {t.footer?.importantLinks}
            </h4>

            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-yellow-300 text-sm transition-colors block flex items-center gap-2"
                  >
                    <span className="text-yellow-300/50">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              {t.footer?.contact}
            </h4>

            <div className="space-y-4 text-sm text-white/60">
              {/* Email Icon + Text */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-yellow-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <a
                  href="mailto:national.sc.st.vikas.parisad@gmail.com"
                  className="hover:text-yellow-300 transition text-sm break-all"
                >
                  national.sc.st.vikas.parisad@gmail.com
                </a>
              </div>

              {/* Phone Icon + Text */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-yellow-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <a
                  href="tel:9425303351"
                  className="hover:text-yellow-300 transition"
                >
                  9425303351
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center flex flex-col sm:flex-row items-center justify-center gap-1">
          <p className="text-white/50 text-xs">
            © 2021 Rashtriya SC ST Parishad. {t.footer?.rights} |{" "}
            {t.footer?.powered}{" "}
            <span className="text-blue-400 font-semibold">CYRUSTECHNOEDGE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}