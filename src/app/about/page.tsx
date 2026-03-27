"use client";

import AboutFocus from "@/components/AboutFocus";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  // नए 17 उद्देश्यों की सूची
  const newObjectives = [
    "मूलनिवासी बहुजन समाज के हितों की रक्षा एवं संरक्षण हेतु आवाज उठाना।",
    "मूलनिवासी बहुजन समाज में शिक्षा का प्रचार-प्रसार की व्यवस्था करना।",
    "मूलनिवासी बहुजन समाज के स्वास्थ्य एवं परिवार कल्याण व रोजगार के लिये कार्य करना।",
    "मूलनिवासी बहुजन समाज के समग्र विकास की बाधाओं का निदान करना।",
    "आर्थिक, सामाजिक और राजनैतिक क्षेत्रों में सक्रिय भागीदारी का प्रयास कर सुदृढ़ता प्रदान करना।",
    "देश व प्रदेशों के सभी संगठनों से पारस्परिक सहयोग एवं संबंधों हेतु नैतिक समर्थन लेना-देना।",
    "मूलनिवासी बहुजन समाज के अधिकारी व कर्मचारियों के साथ आपसी सामंजस्य स्थापित कर कार्य करना।",
    "मूलनिवासी बहुजन समाज का आंदोलन आत्मनिर्भर बनाने के लिए इनसे ही बुद्धि, पैसा एवं हुनर का निर्माण करना।",
    "विषमता मूलक समाज व्यवस्था से कम या अधिक शोषित, वंचित व पीड़ित वर्ग में जागृति लाकर उनमें भाईचारा पैदा करना और इन जातियों को आपस में जोड़कर सामाजिक शक्ति का निर्माण करना।",
    "नेतृत्वहीन समाज में कर्तव्यनिष्ठ एवं ईमानदार नेतृत्व का निर्माण करना और उसकी बेहतर व्यवस्था करना।",
    "दिशाहीन समाज को सम्मानजनक एवं कल्याणकारी, आत्मनिर्भर दिशा प्रदान करना।",
    "उद्देश्य, विचारधारा, मूल्य एवं सिद्धांतों के प्रति समर्पित पूर्णकालिक प्रचारक को मिशन सामाजिक परिवर्तन के कार्य में लगाना।",
    "साहित्यिक शोध, महापुरुषों की विचारधारा पर आधारित साहित्य तैयार करना व प्रचार-प्रसार के माध्यम से जन-जन तक पहुँचाना।",
    "समाज में व्याप्त बुराईयों को दूर करना।",
    "विकास की अपेक्षित दिशा को निर्देशित करना।",
    "समाज में हो रहे परिवर्तनों का मूल्यांकन करना।",
    "डॉ. बी.आर. अम्बेडकर चिकित्सा शिक्षा एवं अनुसंधान विश्वविद्यालय की स्थापना करना।"
  ];

  return (
    <div className="pt-20">
      {/* 🔥 TOP HERO */}
      <div
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a3a8f 0%, #2e3fa0 60%, #c0282a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <p className="text-yellow-300 text-sm font-semibold uppercase tracking-widest mb-3">
            जय भीम · जय संविधान
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            {t.about.subtitle}
          </h1>
        </div>
      </div>

      {/* 🔥 BANNER IMAGE */}
      <div className="w-full">
        <img
          src="/images/banner.png"
          className="w-full h-[220px] sm:h-[400px] object-fill"
          alt="Banner"
        />
      </div>

      {/* 🔹 INTRO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-800 leading-[1.8] text-lg md:text-xl text-justify">
            <span className="font-extrabold text-[#1a3a8f] text-xl md:text-2xl">
              राष्ट्रीय अनुसूचित जाति-जनजाति विकास परिषद्
            </span>{" "}
            की स्थापना 26 नवम्बर 1977 को इसके संस्थापक सदस्य माननीय श्री के.आर.
            नारायण द्वारा की गई थी। यह{" "}
            <strong className="text-gray-900 bg-gray-100 px-1 rounded">
              नॉन रजिस्टर्ड
            </strong>{" "}
            संस्था है और सम्पूर्ण भारत में कार्यरत है।
          </p>

          <div className="mt-6 md:mt-8 bg-[#fef2f2] border-l-4 md:border-l-6 border-[#c0282a] py-3 px-4 md:py-4 md:px-6 rounded-r-lg shadow-sm">
            <p className="text-[#c0282a] text-lg md:text-xl font-medium leading-relaxed italic text-center md:text-left">
              "विषमता, मनुवादी व्यवस्था को समाप्त कर समता, स्वतंत्रता, भाईचारा
              और न्याय पर आधारित समाज का निर्माण करना।"
            </p>
          </div>
        </div>
      </section>
      
      <AboutFocus />

      {/* 🔹 MISSION STRIP */}
      <section className="py-12 bg-[#1a3a8f] text-white">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold mb-1">{t.about.mission}</h3>
            <p className="text-sm text-white/80">{t.about.missionText}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">{t.about.ideology}</h3>
            <p className="text-sm text-white/80">{t.about.ideologyText}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">{t.about.strategy}</h3>
            <p className="text-sm text-white/80">{t.about.strategyText}</p>
          </div>
        </div>
      </section>

      {/* 🔹 NEW OBJECTIVES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a8f] inline-block relative">
              संगठन के प्रमुख उद्देश्य
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#c0282a] rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newObjectives.map((obj, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#1a3a8f] font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed pt-1">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 STATE LEADERS SECTION - PREMIUM OVERLAY DESIGN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a8f] inline-block relative">
              {t.stateLeaders?.title || "हमारे राज्य अध्यक्ष"}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#c0282a] rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {t.stateLeaders?.list.map((leader: any, i: number) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] cursor-pointer"
              >
                {/* 1. Full Cover Image */}
                <img
                  src={leader.photo}
                  alt={leader.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + leader.name + '&background=eef2ff&color=1a3a8f&size=512&bold=true';
                  }}
                />

                {/* 2. Dark Gradient Overlay (Bottom to Top) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* 3. Top Red Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#c0282a] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                {/* 4. Text Content (Absolute at bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
                  
                  {/* State Badge */}
                  <span className="inline-block px-3 py-1 bg-[#c0282a] text-white text-[11px] font-bold uppercase tracking-wider rounded-md w-max mb-3 shadow-md border border-red-500/30">
                    {leader.state}
                  </span>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md group-hover:text-yellow-400 transition-colors">
                    {leader.name}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    {leader.role}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 LIMITATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#1a1a2e] mb-10 text-center">
            संगठन की मर्यादाएं
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#c0282a] mb-2 text-lg">गैर राजनैतिक</h3>
              <p className="text-sm text-gray-600">यह गैर राजनैतिक संगठन है।</p>
            </div>
            <div className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#c0282a] mb-2 text-lg">अहिंसात्मक</h3>
              <p className="text-sm text-gray-600">संगठन अहिंसात्मक है।</p>
            </div>
            <div className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#c0282a] mb-2 text-lg">गैर-धार्मिक</h3>
              <p className="text-sm text-gray-600">यह गैर धार्मिक संगठन है।</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}