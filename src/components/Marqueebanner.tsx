"use client";
import Image from "next/image";

export default function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden bg-white border-y border-gray-100 shadow-sm">
      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, white, transparent)" }} />

        {/* Scrolling strip — duplicated for seamless loop */}
        <div className="flex animate-marquee">
          <Image
            src="/images/header.png"
            alt="महापुरुष — हमारे आदर्श"
            width={3200}
            height={60}
            className="h-14 w-auto flex-shrink-0 object-cover"
            priority
          />
          <Image
            src="/images/header.png"
            alt=""
            width={3200}
            height={60}
            aria-hidden
            className="h-14 w-auto flex-shrink-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
}