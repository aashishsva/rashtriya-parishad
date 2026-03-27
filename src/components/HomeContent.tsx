import AboutSection from "./sections/AboutSection";
import CalendarSection from "./sections/CalendarSection";
import LeadersSection from "./sections/LeadersSection";
import CtaSection from "./sections/CtaSection";
import GallerySection from "./GallerySection";
import VideoSection from "./VideoSection";
import MarqueeBanner from "./Marqueebanner";
import ImageCarousel from "./ImageCarousel";
import AboutFocus from "./AboutFocus";
import PdfViewerSection from "./PdfViewerSection";

export default function HomeContent() {
  return (
    <>
      <MarqueeBanner />
      <ImageCarousel />
      <AboutFocus />
      <PdfViewerSection />
      <AboutSection />
      {/* <CalendarSection /> */}
      <LeadersSection />
      <GallerySection />
      <VideoSection />
      {/* <CtaSection /> */}
    </>
  );
}
