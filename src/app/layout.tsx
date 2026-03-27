import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "राष्ट्रीय अनुसूचित जाति-जनजाति विकास परिषद्",
  description:
    "National Scheduled Castes-Tribes Development Council of India — Working for the welfare and development of SC/ST communities since 1977.",
  keywords: [
    "SC ST",
    "Scheduled Caste",
    "Scheduled Tribe",
    "Parishad",
    "Mangariya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Serif:wght@400;600;700&family=Noto+Serif+Devanagari:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#f8f9fc] text-[#1a1a2e]">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
