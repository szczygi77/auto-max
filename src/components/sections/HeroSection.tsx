"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section className="px-4 pb-28 pt-24 md:px-6 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#4682B4]">FHU AUTO-MAX</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[0.04em] text-[#1A1A1A] md:text-6xl">
            Precyzja w serwisie klimatyzacji
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-3xl text-base font-light text-[#3b3b3b] md:text-xl">
            FHU AUTO-MAX - Specjalistyczna regeneracja sprezarek i diagnostyka ukladow klimatyzacji.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-12">
          <motion.a
            whileHover={{ backgroundColor: "#edf2f6" }}
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full border border-[#4682B4]/60 px-8 py-3 text-sm font-medium text-[#1A1A1A]"
          >
            Umow wizyte
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
