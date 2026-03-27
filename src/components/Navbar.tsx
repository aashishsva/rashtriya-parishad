// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import { useLanguage } from "@/context/LanguageContext";
// import LanguageSwitcher from "./LanguageSwitcher";

// export default function Navbar() {
//   const { t } = useLanguage();
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
    
//     // Dropdown ke bahar click karne par band karne ke liye
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const executiveLinks = [
//     { href: "/executive-committee/list", label: "राष्ट्रीय कार्यकारिणी सूची" },
//     { href: "/executive-committee/state-presidents", label: "प्रदेशाध्यक्ष" },
//     { href: "/executive-committee/leadership", label: "हमारा नेतृत्व" },
//   ];

//   const mainLinks = [
//     { href: "/", label: t.nav.home },
//     { href: "/about", label: t.nav.about },
//     { href: "/gallery", label: t.nav.ourGallery || "Our Gallery" },
//     { href: "/videos", label: t.nav.ourVideos || "Our Videos" },
//     { href: "/annual-calendar", label: t.nav.annualCalendar || "Annual Calendar" },
//     { href: "/contact", label: t.nav.contact },
//   ];

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-lg border-b border-blue-100" : "bg-white/95 backdrop-blur-sm"
//       }`}>
//       <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%)" }} />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
          
//           {/* Logo Section */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0">
//               <Image src="/images/logo.jpeg" alt="Logo" fill className="object-contain rounded-full" />
//             </div>
//             <div className="hidden sm:block">
//               <p className="text-[11px] font-semibold text-[#c0282a] leading-tight">राष्ट्रीय अनुसूचित जाति-जनजाति</p>
//               <p className="text-[13px] font-bold text-[#1a3a8f] leading-tight">विकास परिषद्, नई दिल्ली</p>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-1">
//             <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1a3a8f] rounded-lg">{t.nav.home}</Link>
//             <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1a3a8f] rounded-lg">{t.nav.about}</Link>

//             {/* Dropdown Menu */}
//             <div className="relative" ref={dropdownRef}>
//               <button 
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1a3a8f] rounded-lg transition-all"
//               >
//                 {t.nav.executiveCommittee || "Executive Committee"}
//                 <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Stack 19 9l-7 7-7-7" /></svg>
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
//                   {executiveLinks.map((sub) => (
//                     <Link 
//                       key={sub.href} 
//                       href={sub.href} 
//                       className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a3a8f]"
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       {sub.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Other Links */}
//             {mainLinks.slice(2).map((link) => (
//               <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1a3a8f] rounded-lg">
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Side Tools */}
//           <div className="flex items-center gap-2">
//             <LanguageSwitcher />
//             <Link href="/membership" className="hidden lg:inline-flex px-5 py-2 text-sm font-semibold text-white rounded-lg" style={{ background: "linear-gradient(135deg, #1a3a8f, #c0282a)" }}>
//               {t.nav.joinNow}
//             </Link>
//             {/* Hamburger for Mobile */}
//             <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
//                {/* Icon lines logic same as before */}
//                <div className="space-y-1.5 w-5">
//                 <span className={`block h-0.5 bg-[#1a3a8f] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
//                 <span className={`block h-0.5 bg-[#1a3a8f] ${menuOpen ? "opacity-0" : ""}`} />
//                 <span className={`block h-0.5 bg-[#1a3a8f] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Isme dropdown options ko list ki tarah dikhayenge) */}
//       <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
//         <div className="bg-white px-4 pb-4 pt-2 space-y-1">
//           <Link href="/" className="block py-3 px-4 text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
//           <div className="bg-gray-50 rounded-lg p-2">
//             <p className="px-4 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">Executive Committee</p>
//             {executiveLinks.map(link => (
//               <Link key={link.href} href={link.href} className="block py-2 px-4 text-sm text-gray-600" onClick={() => setMenuOpen(false)}>{link.label}</Link>
//             ))}
//           </div>
//           {mainLinks.slice(2).map(link => (
//             <Link key={link.href} href={link.href} className="block py-3 px-4 text-gray-700" onClick={() => setMenuOpen(false)}>{link.label}</Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { ChevronDown } from "lucide-react"; 

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile Hamburger
  const [isHovered, setIsHovered] = useState(false); // Desktop Hover
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false); // Mobile Dropdown

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hindi/English support ke liye labels
  const executiveLinks = [
    { href: "/executive-committee/list", label: t.nav.executiveList || "राष्ट्रीय कार्यकारिणी सूची" },
    { href: "/executive-committee/state-presidents", label: t.nav.statePresidents || "प्रदेशाध्यक्ष" },
    { href: "/executive-committee/leadership", label: t.nav.leadership || "हमारा नेतृत्व" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg border-b border-blue-100" : "bg-white/95 backdrop-blur-sm"
      }`}>
      {/* Tricolor top bar */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0">
              <Image src="/images/logo.jpeg" alt="Logo" fill className="object-contain rounded-full" />
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-semibold text-[#c0282a] leading-tight">राष्ट्रीय अनुसूचित जाति-जनजाति</p>
              <p className="text-[13px] font-bold text-[#1a3a8f] leading-tight">विकास परिषद्, नई दिल्ली</p>
              <p className="text-[10px] text-gray-500 leading-tight italic">Related By SC-ST Commission Govt. of India</p>
            </div>
          </Link>

          {/* Desktop Nav (Hover Logic) */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-[13px] font-semibold text-gray-700 hover:text-[#1a3a8f] rounded-lg">{t.nav.home}</Link>
            <Link href="/about" className="px-3 py-2 text-[13px] font-semibold text-gray-700 hover:text-[#1a3a8f] rounded-lg">{t.nav.about}</Link>

            {/* --- Executive Committee Dropdown (Desktop Hover) --- */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold text-gray-700 group-hover:text-[#1a3a8f] transition-all">
                {t.nav.executiveCommittee || "Executive Committee"}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />
              </button>

              <div className={`absolute left-0 mt-0 w-60 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 transition-all duration-300 transform 
                ${isHovered ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
                {executiveLinks.map((sub) => (
                  <Link key={sub.href} href={sub.href} className="block px-5 py-3 text-[13px] font-medium text-gray-600 hover:bg-blue-50 hover:text-[#1a3a8f] border-l-4 border-transparent hover:border-[#1a3a8f] transition-all">
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" className="px-3 py-2 text-[13px] font-semibold text-gray-700 hover:text-[#1a3a8f] rounded-lg">{t.nav.ourGallery || "Our Gallery"}</Link>
            <Link href="/videos" className="px-3 py-2 text-[13px] font-semibold text-gray-700 hover:text-[#1a3a8f] rounded-lg">{t.nav.ourVideos || "Our Videos"}</Link>
            <Link href="/annual-calendar" className="px-3 py-2 text-[13px] font-semibold text-gray-700 hover:text-[#1a3a8f] rounded-lg">{t.nav.annualCalendar || "Annual Calendar"}</Link>
            <Link href="/contact" className="px-3 py-2 text-[13px] font-semibold text-gray-700 hover:text-[#1a3a8f] rounded-lg">{t.nav.contact}</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href="/membership" className="hidden lg:inline-flex px-5 py-2 text-sm font-bold text-white rounded-lg transition-all hover:shadow-lg active:scale-95"
              style={{ background: "linear-gradient(135deg, #1a3a8f, #c0282a)" }}>
              {t.nav.joinNow}
            </Link>

            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="space-y-1.5 w-6">
                <span className={`block h-0.5 bg-[#1a3a8f] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-[#1a3a8f] ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-[#1a3a8f] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Click Accordion) */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[1000px] border-t" : "max-h-0"}`}>
        <div className="bg-white p-4 space-y-1">
          <Link href="/" className="block p-3 font-medium text-gray-700" onClick={() => setMenuOpen(false)}>{t.nav.home}</Link>
          <Link href="/about" className="block p-3 font-medium text-gray-700" onClick={() => setMenuOpen(false)}>{t.nav.about}</Link>
          
          {/* Mobile Dropdown with Arrow */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <button 
              onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
              className="w-full flex items-center justify-between p-4 font-semibold text-[#1a3a8f]"
            >
              {t.nav.executiveCommittee || "Executive Committee"}
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileSubMenuOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${mobileSubMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
              {executiveLinks.map(link => (
                <Link key={link.href} href={link.href} className="block py-3 px-8 text-sm text-gray-600 border-t border-gray-100 hover:bg-blue-50" 
                  onClick={() => { setMenuOpen(false); setMobileSubMenuOpen(false); }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/gallery" className="block p-3 font-medium text-gray-700" onClick={() => setMenuOpen(false)}>{t.nav.ourGallery || "Our Gallery"}</Link>
          <Link href="/videos" className="block p-3 font-medium text-gray-700" onClick={() => setMenuOpen(false)}>{t.nav.ourVideos || "Our Videos"}</Link>
          <Link href="/annual-calendar" className="block p-3 font-medium text-gray-700" onClick={() => setMenuOpen(false)}>{t.nav.annualCalendar || "Annual Calendar"}</Link>
          <Link href="/contact" className="block p-3 font-medium text-gray-700" onClick={() => setMenuOpen(false)}>{t.nav.contact}</Link>
          
          <Link href="/membership" className="block mt-4 p-4 text-center font-bold text-white rounded-xl"
            style={{ background: "linear-gradient(135deg, #1a3a8f, #c0282a)" }} onClick={() => setMenuOpen(false)}>
            {t.nav.joinNow}
          </Link>
        </div>
      </div>
    </header>
  );
}