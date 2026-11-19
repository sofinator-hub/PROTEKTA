
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const menuItems = [
  { number: "01", name: "Inicio", href: "/" },
  { number: "02", name: "Catálogo", href: "/catalogo" },
  { number: "03", name: "Industrias", href: "/industrias" },
  { number: "04", name: "Nosotros", href: "/nosotros" },
  { number: "05", name: "Contacto", href: "/contacto" },
];

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="fixed left-0 right-0 top-0 z-[60] px-3 pt-3 sm:px-5 lg:hidden">
        <nav className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between border border-white/10 bg-black/65 px-4 backdrop-blur-xl sm:h-[82px] sm:px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/logo1.webp"
              alt="PROTEKTA"
              width={190}
              height={65}
              priority
              className="h-auto w-[145px] object-contain sm:w-[165px]"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 text-white transition-colors duration-300 hover:border-[#E87524] hover:text-[#E87524]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={25} strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={25} strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] overflow-y-auto bg-[#080808] lg:hidden"
          >
            {/* BACKGROUND DETAIL */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,117,36,0.13),transparent_35%)]" />

            <div className="relative flex min-h-[100svh] flex-col px-5 pb-7 pt-[120px] sm:px-8 sm:pt-[135px]">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#E87524]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                  Navegación / PROTEKTA
                </span>
              </div>

              <nav className="flex flex-col">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.055,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex min-h-[82px] items-center justify-between border-b border-white/10 py-4 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-5 sm:gap-7">
                        <span className="text-[10px] tracking-[0.2em] text-white/30">
                          {item.number}
                        </span>

                        <span className="text-[clamp(1.5rem,7vw,2.5rem)] font-bold uppercase leading-none tracking-[-0.045em] text-white/75 transition-colors duration-300 group-hover:text-white">
                          {item.name}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={23}
                        strokeWidth={1.5}
                        className="text-[#E87524] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                    PROTEKTA · MATEI
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#E87524]">
                    Seguridad industrial
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
