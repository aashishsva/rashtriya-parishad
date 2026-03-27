"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

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

          {/* IMPORTANT LINKS */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              {t.footer?.importantLinks}
            </h4>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-yellow-300 text-sm">
                  → {t.footer?.links.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-yellow-300 text-sm">
                  → {t.footer?.links.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-yellow-300 text-sm">
                  → {t.footer?.links.services}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-yellow-300 text-sm">
                  → {t.footer?.links.contact}
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/60 hover:text-yellow-300 text-sm">
                  → {t.footer?.links.login}
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-white/60 hover:text-yellow-300 text-sm">
                  → {t.footer?.links.register}
                </Link>
              </li>
            </ul>
          </div>

          {/* EXTRA LINKS */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              {t.footer?.extraLinks}
            </h4>

            <ul className="space-y-2 text-white/60 text-sm">
              <li>→ {t.footer?.extra.national}</li>
              <li>→ {t.footer?.extra.state}</li>
              <li>→ {t.footer?.extra.district}</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              {t.footer?.contact}
            </h4>

            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:national.sc.st.vikas.parisad@gmail.com"
                  className="hover:text-white transition text-xs"
                >
                  national.sc.st.vikas.parisad@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:9425303351"
                  className="hover:text-white transition"
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
        <div className="max-w-7xl mx-auto px-4 py-5 text-center">
          <p className="text-white/50 text-xs">
            © 2021 Rashtriya SC ST Parishad. {t.footer?.rights} |{" "}
            {t.footer?.powered}{" "}
            <span className="text-blue-400 font-semibold">
              CYRUSTECHNOEDGE
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}