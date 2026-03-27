"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a3a8f 0%, #c0282a 100%)" }}
      >
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-white/80 text-lg">हमसे जुड़ें, हम आपकी सेवा में तत्पर हैं।</p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div className="mb-8">
                <p className="text-sm font-bold text-[#c0282a] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#c0282a]"></span>
                  संपर्क सूत्र
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                  हमसे संपर्क करें
                </h2>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: (
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    title: t.contact.address,
                    value: `${t.contact.addressLine2}`,
                    theme: "blue",
                  },
                  {
                    icon: (
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    title: t.contact.phone,
                    value: "Mo. 9425303351\nMo. 7340662219",
                    theme: "red",
                    href: "tel:9425303351",
                  },
                  {
                    icon: (
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    title: t.contact.email,
                    value: "praveenmangariya77@gmail.com",
                    theme: "blue",
                    href: "mailto:praveenmangariya77@gmail.com",
                  },
                  {
                    icon: (
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    ),
                    title: t.contact.website,
                    value: "Rashtriyaparisadindia.com",
                    theme: "red",
                    href: "https://Rashtriyaparisadindia.com",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  >
                    {/* Icon Container - Soft Backgrounds */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        item.theme === "blue" 
                          ? "bg-[#1a3a8f]/10 text-[#1a3a8f] group-hover:bg-[#1a3a8f] group-hover:text-white" 
                          : "bg-[#c0282a]/10 text-[#c0282a] group-hover:bg-[#c0282a] group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </div>
                    
                    <div className="pt-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base font-medium text-gray-800 hover:text-[#1a3a8f] transition-colors whitespace-pre-line"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-gray-800 whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-blue-900/5 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">संदेश भेजें</h2>
              <p className="text-gray-500 text-sm mb-8">किसी भी जानकारी या सहायता के लिए कृपया फॉर्म भरें।</p>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      आपका नाम
                    </label>
                    <input
                      type="text"
                      placeholder="पूरा नाम दर्ज करें"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]/30 focus:border-[#1a3a8f] transition-all bg-gray-50/50 hover:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      मोबाइल नंबर
                    </label>
                    <input
                      type="tel"
                      placeholder="10 अंकों का नंबर"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]/30 focus:border-[#1a3a8f] transition-all bg-gray-50/50 hover:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ईमेल (वैकल्पिक)
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]/30 focus:border-[#1a3a8f] transition-all bg-gray-50/50 hover:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    संदेश
                  </label>
                  <textarea
                    rows={4}
                    placeholder="अपना संदेश यहाँ लिखें..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]/30 focus:border-[#1a3a8f] transition-all bg-gray-50/50 hover:bg-white resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 mt-2 text-lg font-bold text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 transform hover:-translate-y-1"
                  style={{ background: "linear-gradient(135deg, #1a3a8f, #c0282a)" }}
                >
                  संदेश भेजें &rarr;
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}