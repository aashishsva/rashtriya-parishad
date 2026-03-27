"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AnnualCalendarPage() {
  const { t } = useLanguage();

  const events = [
    {
      date: "26 जनवरी",
      title: "गणतंत्र दिवस",
      desc: "संविधान की उद्देशिका का वाचन एवं विचार गोष्ठी का आयोजन",
    },
    {
      date: "8 मार्च",
      title: "अंतरराष्ट्रीय महिला दिवस",
      desc: "महिलाओं का सम्मान समारोह",
    },
    {
      date: "14 अप्रैल",
      title: "डॉ. अम्बेडकर जयंती",
      desc: "वाहन रैली एवं प्रतिभा सम्मान समारोह",
    },
    {
      date: "5 जून",
      title: "विश्व पर्यावरण दिवस",
      desc: "पंछी बचाओ अभियान एवं वृक्षारोपण कार्यक्रम",
    },
    {
      date: "26 नवम्बर",
      title: "संविधान दिवस",
      desc: "स्थापना दिवस व जिला/प्रदेश स्तरीय कार्यशाला",
    },
    {
      date: "3 दिसम्बर",
      title: "विश्व विकलांगता दिवस",
      desc: "दिव्यांगों को उपकरण वितरण",
    },
    {
      date: "6 दिसम्बर",
      title: "परिनिर्माण दिवस",
      desc: "बाबा साहब के परिनिर्माण दिवस पर कैडर कैंप",
    },
  ];

  return (
    <div className="pt-20">

      {/* HERO */}
      <div className="py-20 bg-gradient-to-r from-[#1a3a8f] to-[#2e7d32] text-center">
        <h1 className="text-4xl font-bold text-white">
          वार्षिक कैलेंडर
        </h1>
        <p className="text-white/70 mt-2">
          संगठन के वार्षिक कार्यक्रम
        </p>
      </div>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e]">
              वार्षिक कार्यक्रम सूची
            </h2>
            <div className="w-16 h-1 bg-[#c0282a] mx-auto mt-3 rounded-full" />
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-sm">

              <thead className="bg-[#f1f5ff]">
                <tr className="text-left">
                  <th className="p-3 font-semibold text-[#1a3a8f]">क्र.</th>
                  <th className="p-3 font-semibold text-[#1a3a8f]">दिनांक</th>
                  <th className="p-3 font-semibold text-[#1a3a8f]">कार्यक्रम</th>
                </tr>
              </thead>

              <tbody>
                {events.map((item, i) => (
                  <tr
                    key={i}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{i + 1}</td>
                    <td className="p-3 font-semibold text-[#c0282a]">
                      {item.date}
                    </td>
                    <td className="p-3">
                      <p className="font-semibold text-[#1a1a2e]">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {item.desc}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Note */}
          <p className="text-gray-500 text-sm mt-6 text-center">
            नोट: समय-समय पर तात्कालिक विषयों पर धरना, प्रदर्शन एवं ज्ञापन दिया जाता है।
          </p>

        </div>
      </section>
    </div>
  );
}