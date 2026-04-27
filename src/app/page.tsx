import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="bg-[#0b0d12] text-[#f3f6fb]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="border-t border-[#283243] bg-[#0b0d12] px-4 py-8 text-center text-sm font-light text-[#aab7cc] md:px-6">
        © {new Date().getFullYear()} AUTO-MAX Serwis Klimatyzacji. Serwis stacjonarny i mobilny z dojazdem do klienta.
      </footer>
    </div>
  );
}
