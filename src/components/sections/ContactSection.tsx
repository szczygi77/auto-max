"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const PHONE_PRIMARY = "509 541 747";
const PHONE_PRIMARY_HREF = "tel:+48509541747";
const PHONE_SECONDARY = "733 399 239";
const PHONE_SECONDARY_HREF = "tel:+48733399239";
const ADDRESS = "Trzciana 470, 39-304";

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-[#0b0d12] px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Kontakt"
            title="Skontaktuj sie z AUTO-MAX Serwis Klimatyzacji"
            description="Zadzwon - ustalimy termin serwisu stacjonarnego lub mobilnego z dojazdem."
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-12">
          <div className="mx-auto max-w-xl border border-[#283243] bg-[#121722] p-8">
            <h3 className="text-xl font-semibold tracking-[0.03em] text-[#f3f6fb]">Dane kontaktowe</h3>
            <ul className="mt-6 space-y-5 font-light text-[#b8c4d8]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0D6EFD]" strokeWidth={1.4} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#0D6EFD]" strokeWidth={1.4} />
                <a href={PHONE_PRIMARY_HREF} className="hover:text-white">
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#dc3545]" strokeWidth={1.4} />
                <a href={PHONE_SECONDARY_HREF} className="hover:text-white">
                  {PHONE_SECONDARY}
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                whileHover={{ backgroundColor: "#0b5ed7" }}
                href={PHONE_PRIMARY_HREF}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0D6EFD] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 sm:w-auto"
              >
                Zadzwon: {PHONE_PRIMARY}
              </motion.a>
              <a
                href={PHONE_SECONDARY_HREF}
                className="inline-flex w-full items-center justify-center rounded-full border border-[#283243] px-8 py-3 text-sm font-medium text-[#e4ebf5] hover:border-[#0D6EFD] sm:w-auto"
              >
                Alternatywnie: {PHONE_SECONDARY}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
