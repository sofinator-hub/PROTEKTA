
"use client";

import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Industrias", href: "/industrias" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 hidden px-8 pt-4 lg:block">
        <nav className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between border border-white/10 bg-black/60 px-7 backdrop-blur-xl">
          <Link href="/" className="group flex shrink-0 items-center">
            <img
              src="/images/logo1.webp"
              alt="PROTEKTA"
              className="h-auto w-[175px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          <div className="flex items-center gap-6 xl:gap-9">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-xs font-medium text-white/65 transition-colors duration-300 hover:text-white"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#E87524] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="h-9 w-[1px] bg-white/10" />

          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
            Industrial Safety
          </span>
        </nav>
      </header>

      {/* MOBILE NAVBAR */}
      <MobileMenu />
    </>
  );
}
