"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MembershipForm() {
  const { t } = useLanguage();
  const [memberType, setMemberType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-7xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-[#1a3a8f] mb-3">आवेदन सफलतापूर्वक जमा हुआ!</h3>
        <p className="text-gray-600">आपसे जल्द संपर्क किया जाएगा।</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-3 bg-[#1a3a8f] text-white rounded-xl font-semibold hover:bg-[#15317a] transition-colors"
        >
          नया आवेदन
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Membership Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {t.membership.fields.memberType} <span className="text-red-500">*</span>
        </label>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {t.membership.types.map((mem) => (
            <label
              key={mem.name}
              className={`cursor-pointer rounded-xl border-2 p-3 transition-all ${
                memberType === mem.name
                  ? "border-[#1a3a8f] bg-[#1a3a8f]/5"
                  : "border-gray-200 hover:border-[#1a3a8f]/40"
              }`}
            >
              <input
                type="radio"
                name="memberType"
                value={mem.name}
                className="sr-only"
                onChange={() => setMemberType(mem.name)}
              />
              <p className="font-semibold text-sm text-[#1a3a8f]">{mem.name}</p>
              <p className="text-lg font-bold text-gray-800">{mem.amount}</p>
              <p className="text-xs text-gray-500">{mem.level}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Personal Info */}
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { key: "name", label: t.membership.fields.name, required: true },
          { key: "father", label: t.membership.fields.father, required: true },
          { key: "mother", label: t.membership.fields.mother },
          { key: "dob", label: t.membership.fields.dob, type: "date" },
          { key: "gotra", label: t.membership.fields.gotra },
          { key: "mobile", label: t.membership.fields.mobile, required: true, type: "tel" },
          { key: "education", label: t.membership.fields.education },
          { key: "occupation", label: t.membership.fields.occupation },
          { key: "party", label: t.membership.fields.party },
        ].map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type || "text"}
              required={field.required}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]/30 focus:border-[#1a3a8f] transition-all bg-gray-50"
            />
          </div>
        ))}
      </div>

      {/* Address */}
      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 border-b pb-2">📍 पता विवरण</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { key: "village", label: t.membership.fields.village },
            { key: "post", label: t.membership.fields.post },
            { key: "tehsil", label: t.membership.fields.tehsil },
            { key: "district", label: t.membership.fields.district },
            { key: "state", label: t.membership.fields.state },
            { key: "pincode", label: t.membership.fields.pincode },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {field.label}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]/30 focus:border-[#1a3a8f] transition-all bg-gray-50"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Social work */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.membership.fields.social}
        </label>
        <textarea
          rows={3}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]/30 focus:border-[#1a3a8f] transition-all bg-gray-50 resize-none"
        />
      </div>

      {/* Declaration */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required className="mt-1 accent-[#1a3a8f]" />
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>घोषणापत्र:</strong> मैं यह घोषणा करता हूँ कि संगठन के उद्देश्यों को पूरी तरह समझ लिया है।
            संगठन के उद्देश्यों के प्रति पूर्ण निष्ठा के साथ कार्य करूंगा।
          </p>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-4 font-bold text-white rounded-xl text-base transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
        style={{ background: "linear-gradient(135deg, #1a3a8f, #c0282a)" }}
      >
        {t.membership.fields.submit} →
      </button>
    </form>
  );
}