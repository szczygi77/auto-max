"use client";

import { motion } from "framer-motion";
import { Menu, Snowflake, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#uslugi", label: "Uslugi" },
  { href: "#galeria", label: "Galeria" },
  { href: "#o-nas", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        isScrolled ? "border-[#283243] bg-[#0b0d12]/88 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[#f3f6fb] md:text-base">
          <Snowflake className="h-4 w-4 text-[#0D6EFD]" strokeWidth={1.6} />
          <span>AUTO-MAX Serwis Klimatyzacji</span>
        </a>
        <ul className="hidden items-center gap-9 text-sm font-light text-[#d4deea] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="border-b border-transparent pb-1 hover:border-[#0D6EFD]/70 hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={{ backgroundColor: "#dc3545" }}
          href="#kontakt"
          className="hidden rounded-full bg-[#0D6EFD] px-5 py-2 text-sm font-medium text-white md:inline-flex"
        >
          Serwis mobilny
        </motion.a>
        <button
          onClick={() => setIsMobileOpen((value) => !value)}
          className="inline-flex rounded-full border border-[#283243] p-2 text-[#d4deea] md:hidden"
          aria-label="Przelacz menu"
        >
          {isMobileOpen ? <X className="h-4 w-4" strokeWidth={1.7} /> : <Menu className="h-4 w-4" strokeWidth={1.7} />}
        </button>
      </nav>
      {isMobileOpen ? (
        <div className="border-t border-[#283243] bg-[#0b0d12]/95 px-4 py-4 md:hidden">
          <ul className="space-y-3 text-sm font-light text-[#d4deea]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMobile} className="block py-1">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
