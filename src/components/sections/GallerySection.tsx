"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { galleryImages } from "@/lib/galleryImages";

export function GallerySection() {
  return (
    <section id="galeria" className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Galeria realizacji"
            title="Minimalizm procesu, maksymalna jakosc wykonania"
            description="Przykladamy uwage do kazdego szczegolu pracy serwisowej i diagnostycznej."
          />
        </Reveal>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.05}>
              <div className="relative mb-4 break-inside-avoid overflow-hidden rounded-[4px] border border-[#e6ecf1] bg-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={560}
                  className={`w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02] ${
                    index % 3 === 0 ? "h-80" : index % 3 === 1 ? "h-60" : "h-72"
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
