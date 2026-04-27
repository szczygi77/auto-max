"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, CarTaxiFront, Cog, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc?: string;
};

const services: ServiceItem[] = [
  {
    icon: Wind,
    title: "Kompleksowy serwis klimatyzacji",
    description: "Odgrzybianie, osuszanie i precyzyjne nabijanie czynnika zgodnie z parametrami producenta auta.",
  },
  {
    icon: CarTaxiFront,
    title: "Serwis mobilny z dojazdem",
    description: "Realizujemy wybrane uslugi na miejscu u klienta, z szybkim dojazdem i diagnostyka w terenie.",
    imageSrc: "/images/mobilny-serwis.png",
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
    <section id="uslugi" className="bg-[#121722] px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Zakres uslug"
            title="Serwis klimatyzacji na pierwszym miejscu"
            description="Od pelnej obslugi ukladu AC po mobilny dojazd i regeneracje podzespolow."
          />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full border-t border-[#0D6EFD]/40 pt-6"
              >
                {service.imageSrc ? (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#283243] bg-[#0b0d12]">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 280px, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  <service.icon className="h-7 w-7 text-[#dc3545]" strokeWidth={1.4} />
                )}
                <h3 className="mt-6 text-xl font-semibold tracking-[0.03em] text-[#f3f6fb]">{service.title}</h3>
                <p className="mt-4 font-light text-[#b8c4d8]">{service.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
