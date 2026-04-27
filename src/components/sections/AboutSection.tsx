"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  return (
    <section id="o-nas" className="bg-[#121722] px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 border-y border-[#283243] py-12 md:grid-cols-2">
        <Reveal>
          <SectionTitle
            eyebrow="O firmie"
            title="Doswiadczenie i spokojna pewnosc wykonania"
            description="AUTO-MAX Serwis Klimatyzacji to profesjonalna obsluga ukladow AC, skoncentrowana na rzetelnej diagnostyce i powtarzalnej jakosci."
          />
        </Reveal>
        <Reveal delay={0.12} className="flex items-center">
          <p className="font-light text-[#b8c4d8]">
            Pracujemy na sprawdzonych procedurach i nowoczesnym zapleczu technicznym. Kazdy uklad AC traktujemy
            indywidualnie, dlatego klienci wracaja po stabilna wydajnosc klimatyzacji i komfort jazdy przez caly
            sezon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
