"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ContactSection() {
  return (
    <section id="kontakt" className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Kontakt"
            title="Skontaktuj sie z FHU AUTO-MAX"
            description="Odpowiemy szybko i zaproponujemy najlepszy termin serwisu."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="border border-[#e2e8ee] bg-white p-7">
              <h3 className="text-xl font-semibold tracking-[0.03em] text-[#1A1A1A]">Dane kontaktowe</h3>
              <ul className="mt-6 space-y-5 font-light text-[#3f3f3f]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#4682B4]" strokeWidth={1.4} />
                  <span>ul. Przykladowa 12, 00-000 Miasto</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#4682B4]" strokeWidth={1.4} />
                  <span>+48 600 000 000</span>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="border border-[#e2e8ee] bg-[#F8F9FA] p-7">
              <h3 className="text-xl font-semibold tracking-[0.03em] text-[#1A1A1A]">Formularz kontaktowy</h3>
              <div className="mt-5 space-y-4">
                <input
                  type="text"
                  placeholder="Imie i nazwisko"
                  className="w-full border border-[#dde4eb] bg-white px-4 py-3 text-[#1A1A1A] placeholder:text-[#7c8792] focus:border-[#4682B4] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="w-full border border-[#dde4eb] bg-white px-4 py-3 text-[#1A1A1A] placeholder:text-[#7c8792] focus:border-[#4682B4] focus:outline-none"
                />
                <textarea
                  placeholder="Wiadomosc"
                  rows={4}
                  className="w-full border border-[#dde4eb] bg-white px-4 py-3 text-[#1A1A1A] placeholder:text-[#7c8792] focus:border-[#4682B4] focus:outline-none"
                />
                <motion.button
                  type="button"
                  whileHover={{ backgroundColor: "#3f729f" }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#4682B4] px-6 py-3 text-sm font-medium text-white"
                >
                  <Send className="h-4 w-4" />
                  Wyslij zapytanie
                </motion.button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
