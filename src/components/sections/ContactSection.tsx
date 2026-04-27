"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-[#0b0d12] px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Kontakt"
            title="Skontaktuj sie z AUTO-MAX Serwis Klimatyzacji"
            description="Odpowiemy szybko i zaproponujemy termin serwisu stacjonarnego lub mobilnego z dojazdem."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="border border-[#283243] bg-[#121722] p-7">
              <h3 className="text-xl font-semibold tracking-[0.03em] text-[#f3f6fb]">Dane kontaktowe</h3>
              <ul className="mt-6 space-y-5 font-light text-[#b8c4d8]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0D6EFD]" strokeWidth={1.4} />
                  <span>ul. Przykladowa 12, 00-000 Miasto</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#0D6EFD]" strokeWidth={1.4} />
                  <span>+48 600 000 000</span>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="border border-[#283243] bg-[#121722] p-7">
              <h3 className="text-xl font-semibold tracking-[0.03em] text-[#f3f6fb]">Formularz kontaktowy</h3>
              <div className="mt-5 space-y-4">
                <input
                  type="text"
                  placeholder="Imie i nazwisko"
                  className="w-full border border-[#283243] bg-[#0b0d12] px-4 py-3 text-[#f3f6fb] placeholder:text-[#8ea0ba] focus:border-[#0D6EFD] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="w-full border border-[#283243] bg-[#0b0d12] px-4 py-3 text-[#f3f6fb] placeholder:text-[#8ea0ba] focus:border-[#0D6EFD] focus:outline-none"
                />
                <textarea
                  placeholder="Wiadomosc"
                  rows={4}
                  className="w-full border border-[#283243] bg-[#0b0d12] px-4 py-3 text-[#f3f6fb] placeholder:text-[#8ea0ba] focus:border-[#0D6EFD] focus:outline-none"
                />
                <motion.button
                  type="button"
                  whileHover={{ backgroundColor: "#b02a37" }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#dc3545] px-6 py-3 text-sm font-medium text-white"
                >
                  <Send className="h-4 w-4" />
                  Zamow kontakt i dojazd
                </motion.button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
