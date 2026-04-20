import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="border-t border-[#e4e9ee] bg-[#F8F9FA] px-4 py-8 text-center text-sm font-light text-[#4b4b4b] md:px-6">
        © {new Date().getFullYear()} FHU AUTO-MAX. Specjalistyczny serwis klimatyzacji samochodowej.
      </footer>
    </div>
  );
}
