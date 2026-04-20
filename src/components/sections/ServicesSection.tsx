"use client";

import { motion } from "framer-motion";
import { Activity, Cog, Wind } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const services = [
  {
    icon: Wind,
    title: "Kompleksowy serwis ukladu",
    description: "Odgrzybianie, osuszanie i precyzyjne nabijanie czynnika zgodnie z parametrami producenta.",
  },
  {
    icon: Cog,
    title: "Regeneracja sprezarek",
    description: "Specjalistyczna regeneracja kompresorow klimatyzacji z kontrola efektywnosci po naprawie.",
  },
  {
    icon: Activity,
    title: "Diagnostyka i szczelnosc AC",
    description: "Komputerowa diagnostyka oraz wykrywanie nieszczelnosci metoda UV i metoda wodorowa.",
  },
];

export function ServicesSection() {
  return (
    <section id="uslugi" className="bg-[#F8F9FA] px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Zakres uslug"
            title="Serwis oparty na precyzji i doswiadczeniu"
            description="Kazda usluga realizowana jest wedlug jasnego procesu diagnostycznego i serwisowego."
          />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full border-t border-[#d7e0e7] pt-6"
              >
                <service.icon className="h-7 w-7 text-[#4682B4]" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl font-semibold tracking-[0.03em] text-[#1A1A1A]">{service.title}</h3>
                <p className="mt-4 font-light text-[#4a4a4a]">{service.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
