"use client";

import React from "react";

const committeeMembers = [
  { id: 1, name: "श्री प्रवीण मांगरिया", details: "", role: "राष्ट्रीय अध्यक्ष", state: "मध्यप्रदेश", phone: "9425303351" },
  { id: 2, name: "श्री प्रवीण मारू", details: "पूर्व विधायक गुजरात", role: "राष्ट्रीय कार्यकारी अध्यक्ष", state: "गुजरात", phone: "9824677776" },
  { id: 3, name: "श्री जी.पी. मेहरा", details: "Rtd. ENC.MP.PWD", role: "राष्ट्रीय कार्यकारी अध्यक्ष", state: "मध्यप्रदेश", phone: "9425146510" },
  { id: 4, name: "श्री भगवती प्रसाद चौधरी", details: "पूर्व विधायक, उ.प्र.", role: "राष्ट्रीय उपाध्यक्ष", state: "उत्तरप्रदेश", phone: "9415205644" },
  { id: 5, name: "श्रीमती फुलो देवी", details: "संसद सदस्य राज्यसभा", role: "राष्ट्रीय उपाध्यक्ष", state: "छत्तीसगढ़", phone: "9993397471" },
  { id: 6, name: "श्रीमती माया इवनाते", details: "सदस्य राज्यसभा", role: "राष्ट्रीय उपाध्यक्ष", state: "महाराष्ट्र", phone: "9923596001" },
  { id: 7, name: "श्री पृथ्वीराज सिंह (Rtd. IPS)", details: "पूर्व पुलिस महानिरीक्षक", role: "राष्ट्रीय उपाध्यक्ष", state: "हरियाणा", phone: "9418033177" },
  { id: 8, name: "श्री पी.सी. बेरवाल (Rtd. IAS)", details: "पूर्व संभागायुक्त भरतपुर राजस्थान", role: "राष्ट्रीय महासचिव (संगठन)", state: "राजस्थान", phone: "7340662219" },
  { id: 9, name: "श्री देवराव होली", details: "पूर्व विधायक, गढ़चिरोली, महाराष्ट्र", role: "राष्ट्रीय महासचिव (प्रशासक)", state: "महाराष्ट्र", phone: "9404555827" },
  { id: 10, name: "श्री वाय जया राजु", details: "वरिष्ठ अधिवक्ता", role: "राष्ट्रीय महासचिव", state: "आन्ध्रप्रदेश", phone: "9440294559" },
  { id: 11, name: "श्री एस.आर. डेहरिया", details: "महाप्रबंधक माईनिंग कॉर्पो. इण्डिया", role: "राष्ट्रीय मिडिया प्रभारी", state: "छत्तीसगढ़", phone: "8817751974" },
  { id: 12, name: "डॉ. चन्द्रशेखर सुशील", details: "पूर्व डीन मेडिकल कॉलेज कोटा", role: "राष्ट्रीय महासचिव", state: "राजस्थान", phone: "9829095981" },
  { id: 13, name: "श्री रतनलाल बैरवा", details: "वरिष्ठ समाजसेवी", role: "राष्ट्रीय महासचिव", state: "दिल्ली", phone: "9811057695" },
  { id: 14, name: "श्री विनोद भूषण दाहीया", details: "Ex Enc, PWD", role: "राष्ट्रीय महासचिव", state: "हरियाणा", phone: "8295473391" },
  { id: 15, name: "श्री टी.आर. दिनकर", details: "पूर्व महाप्रबन्धक भारत संचार निगम", role: "राष्ट्रीय महासचिव", state: "उत्तरप्रदेश", phone: "9415909945, 6307744373" },
  { id: 16, name: "श्रीमति ज्योत्सना बैरवा", details: "वरिष्ठ समाजसेवी", role: "राष्ट्रीय महासचिव", state: "गुजरात", phone: "9558206049" },
  { id: 17, name: "श्री घनश्याम सहाय", details: "वरिष्ठ समाजसेवी", role: "राष्ट्रीय महासचिव", state: "उत्तरप्रदेश", phone: "9453846060" },
  { id: 18, name: "डॉ. पी.एस. मालवीय", details: "संयुक्त संचालक योजना एवं सांख्यिकी", role: "राष्ट्रीय कोषाध्यक्ष", state: "मध्यप्रदेश", phone: "8982490147" },
  { id: 19, name: "श्री जयेश कुमार परमार", details: "पूर्व अध्यक्ष ओ.एन.जी.सी. यूनियन", role: "राष्ट्रीय संगठन सचिव", state: "गुजरात", phone: "9428331509" },
  { id: 20, name: "श्री महेश बड़ोले", details: "अपर कलेक्टर हरदा", role: "राष्ट्रीय संगठन सचिव", state: "मध्यप्रदेश", phone: "9926557806" },
  { id: 21, name: "श्री ए.आर. सिंह", details: "मुख्य अभियंता, म.प्र. लो.नि. विभाग", role: "राष्ट्रीय सचिव", state: "मध्यप्रदेश", phone: "9826086414" },
  { id: 22, name: "श्री ए. सुन्दर पाँडियान", details: "पूर्व विधायक", role: "राष्ट्रीय सचिव", state: "तमिलनाडु", phone: "9443851517" },
  { id: 23, name: "श्री महेन्द्र परमार", details: "सिनीयर एडवोकेट, गुजरात", role: "राष्ट्रीय सचिव", state: "गुजरात", phone: "9825942352" },
  { id: 24, name: "श्री ओ.पी. अहीरवार", details: "गृह मंत्रालय, भारत सरकार", role: "राष्ट्रीय सचिव", state: "दिल्ली", phone: "7011126788" },
  { id: 25, name: "श्री खुशीराम ग्रजाना", details: "मुख्य सचिव, भारत सरकार", role: "राष्ट्रीय सचिव", state: "दिल्ली", phone: "9868238049" },
  { id: 26, name: "श्री जयपाल सिंह", details: "पूर्व वित्तिय सलाहकार निर्वाचन आयोग म.प्र.", role: "राष्ट्रीय सचिव", state: "मध्यप्रदेश", phone: "8120945365" },
  { id: 27, name: "श्री राजेन्द्र प्रसाद", details: "पूर्व संचालक, म.प्र. स्कुल विभाग", role: "राष्ट्रीय सचिव", state: "मध्यप्रदेश", phone: "9589581103" },
  { id: 28, name: "श्री आर.के. पोरिया", details: "से.नि. एक्साईज एण्ड टेक्ससेशन कमीश्नर", role: "प्रदेश प्रभारी", state: "हरियाणा", phone: "9354818711" },
  { id: 29, name: "श्री कुशाग्र चौहान", details: "वरिष्ठ अधिवक्ता म.प्र. हाईकोर्ट", role: "राष्ट्रीय विधिक सलाहकार", state: "मध्यप्रदेश", phone: "7223000376" },
  { id: 30, name: "श्रीमती लीलावती वर्मा", details: "राष्ट्रीय उपाध्यक्ष, रेगर महासभा", role: "राष्ट्रीय संगठन सचिव", state: "राजस्थान", phone: "9799127036" },
  { id: 31, name: "सुश्री पूजा वर्मा", details: "पूर्व छात्रसंघ अध्यक्ष, राजस्थान वि.वि.", role: "राष्ट्रीय सचिव", state: "राजस्थान", phone: "9521632248" },
];

export default function ExecutiveCommittee() {
  return (
    <div className="pt-20">
      
      {/* IMAGE BANNER SECTION */}
      {/* HERO SECTION */}
      <div className="py-12 bg-gradient-to-r from-[#1a3a8f] to-[#2e7d32] text-center border-t-4 border-[#c0282a]">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          राष्ट्रीय कार्यकारिणी
        </h1>
        <p className="text-white/80 mt-2 text-sm md:text-base tracking-wide">
          नेतृत्व मंडल
        </p>
      </div>

       

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
              राष्ट्रीय कार्यकारिणी सदस्य
            </h2>
            <div className="w-16 h-1 bg-[#c0282a] mx-auto mt-3 rounded-full" />
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a3a8f] text-white">
                    <th className="py-4 px-4 font-semibold text-center w-16">क्र.</th>
                    <th className="py-4 px-4 font-semibold min-w-[250px]">नाम</th>
                    <th className="py-4 px-4 font-semibold min-w-[200px]">पद</th>
                    <th className="py-4 px-4 font-semibold min-w-[120px]">राज्य</th>
                    <th className="py-4 px-4 font-semibold min-w-[150px]">मोबाईल</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm md:text-base">
                  {committeeMembers.map((member, index) => (
                    <tr 
                      key={member.id} 
                      className={`border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-4 px-4 text-center font-medium text-gray-500">
                        {member.id}
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-bold text-gray-900">{member.name}</div>
                        {member.details && (
                          <div className="text-xs text-gray-500 mt-1 leading-snug">
                            {member.details}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-4 font-medium text-[#1a3a8f]">
                        {member.role}
                      </td>
                      <td className="py-4 px-4">
                        <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-xs font-medium">
                          {member.state}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-medium tracking-wide">
                        {member.phone.split(',').map((phoneNum, i, arr) => {
                          const cleanPhone = phoneNum.trim();
                          return (
                            <React.Fragment key={i}>
                              <a 
                                href={`tel:${cleanPhone}`} 
                                className="text-[#1a3a8f] hover:text-[#c0282a] hover:underline transition-colors duration-200"
                              >
                                {cleanPhone}
                              </a>
                              {i < arr.length - 1 && <span className="text-gray-400">, </span>}
                            </React.Fragment>
                          );
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}