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
        isScrolled ? "border-[#dfe5ea] bg-white/75 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[#1A1A1A] md:text-base">
          <Snowflake className="h-4 w-4 text-[#4682B4]" strokeWidth={1.6} />
          <span>FHU AUTO-MAX</span>
        </a>
        <ul className="hidden items-center gap-9 text-sm font-light text-[#1A1A1A] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="border-b border-transparent pb-1 hover:border-[#4682B4]/60">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={{ backgroundColor: "#f4f7fa" }}
          href="#kontakt"
          className="hidden rounded-full border border-[#d3dce3] px-5 py-2 text-sm font-medium text-[#1A1A1A] md:inline-flex"
        >
          Kontakt
        </motion.a>
        <button
          onClick={() => setIsMobileOpen((value) => !value)}
          className="inline-flex rounded-full border border-[#e4e9ee] p-2 text-[#1A1A1A] md:hidden"
          aria-label="Przelacz menu"
        >
          {isMobileOpen ? <X className="h-4 w-4" strokeWidth={1.7} /> : <Menu className="h-4 w-4" strokeWidth={1.7} />}
        </button>
      </nav>
      {isMobileOpen ? (
        <div className="border-t border-[#e5eaef] bg-white/95 px-4 py-4 md:hidden">
          <ul className="space-y-3 text-sm font-light text-[#1A1A1A]">
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
