"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden px-4 pb-24 pt-28 md:min-h-[85vh] md:px-6 md:pb-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Delikatne przyciemnienie + gradient pod czytelny tekst */}
        <div className="absolute inset-0 bg-black/42" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/38 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#5ea3ff]">
            AUTO-MAX Serwis Klimatyzacji
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[0.04em] text-[#f3f6fb] drop-shadow-md md:text-6xl">
            Profesjonalny serwis klimatyzacji samochodowej
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-3xl text-base font-light text-[#e8eef8] md:text-xl">
            AUTO-MAX to kompleksowy serwis klimatyzacji, specjalistyczna regeneracja sprezarek oraz serwis mobilny z
            dojazdem do klienta.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-12 flex flex-col gap-4 sm:flex-row">
          <motion.a
            whileHover={{ backgroundColor: "#dc3545" }}
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-[#0D6EFD] px-8 py-3 text-sm font-medium text-white shadow-lg shadow-black/25"
          >
            Umow wizyte
          </motion.a>
          <a
            href="#uslugi"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-black/25 px-8 py-3 text-sm font-medium text-[#f3f6fb] backdrop-blur-sm hover:border-[#0D6EFD] hover:bg-black/35"
          >
            Zobacz serwis mobilny
          </a>
        </Reveal>
      </div>
    </section>
  );
}
