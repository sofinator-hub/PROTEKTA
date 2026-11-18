"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  {
    number: "01",
    name: "Inicio",
    href: "/",
    image: "/images/menu/Hero.webp",
  },
  {
    number: "02",
    name: "Catálogo",
    href: "/catalogo",
    image: "/images/menu/catalogo.webp",
  },
  {
    number: "03",
    name: "Industrias",
    href: "/industrias",
    image: "/images/menu/industrias.webp",
  },
  {
    number: "04",
    name: "Nosotros",
    href: "/nosotros",
    image: "/images/menu/nosotros.webp",
  },
  {
    number: "05",
    name: "Contacto",
    href: "/contacto",
    image: "/images/menu/contacto.webp",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 md:px-8 md:pt-4">
        <nav
          className="
            mx-auto
            flex
            h-14
            max-w-[1500px]
            items-center
            justify-between
            border
            border-white/10
            bg-black/45
            px-3
            backdrop-blur-xl
            sm:h-16
            sm:px-5
            md:h-[90px]
            md:px-7
          "
        >
          {/* =========================
              LOGO
          ========================= */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center"
          >
            <img
  src="/images/logo1.webp"
  alt="PROTEKTA - Seguridad que te impulsa"
  className="
    h-auto
    w-[135px]
    object-contain
    transition-transform
    duration-300
    group-hover:scale-[1.02]
    sm:w-[155px]
    md:w-[175px]
  "
/>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================= */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {menuItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  relative
                  text-xs
                  font-medium
                  text-white/65
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-[#ff6a00]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* DESKTOP SEARCH */}
            <button
              type="button"
              aria-label="Buscar productos"
              className="
                hidden
                h-9
                items-center
                gap-3
                border
                border-white/10
                bg-white/[0.04]
                px-3
                text-xs
                text-white/35
                transition-colors
                hover:border-white/25
                hover:text-white/70
                md:flex
              "
            >
              Buscar productos...
              <Search size={14} />
            </button>

            {/* MOBILE SEARCH */}
            <button
              type="button"
              aria-label="Buscar"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                border
                border-white/10
                text-white/60
                transition-colors
                hover:border-[#ff6a00]
                hover:text-[#ff6a00]
                md:hidden
              "
            >
              <Search size={16} />
            </button>

            {/* HAMBURGER */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              className="
                group
                flex
                h-9
                w-9
                shrink-0
                flex-col
                items-center
                justify-center
                gap-[4px]
                border
                border-white/10
                transition-all
                duration-300
                hover:border-[#ff6a00]
                sm:h-10
                sm:w-10
              "
            >
              <span
                className="
                  h-px
                  w-5
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-6
                  group-hover:bg-[#ff6a00]
                "
              />

              <span
                className="
                  mr-[9px]
                  h-px
                  w-3
                  self-end
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-6
                  group-hover:bg-[#ff6a00]
                "
              />

              <span
                className="
                  h-px
                  w-5
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-6
                  group-hover:bg-[#ff6a00]
                "
              />
            </button>
          </div>
        </nav>
      </header>

      {/* =========================
          FULLSCREEN MENU
      ========================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#080808]"
          >
            <MenuContent onClose={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuContent({
  onClose,
}: {
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(
    menuItems[0].image
  );

  return (
    <div className="relative h-[100dvh] overflow-hidden">

      {/* =========================
          BACKGROUND IMAGE DESKTOP
      ========================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            absolute
            inset-0
            hidden
            bg-cover
            bg-center
            md:block
          "
          style={{
            backgroundImage: `url(${activeImage})`,
          }}
        />
      </AnimatePresence>

      {/* =========================
          MOBILE BACKGROUND
      ========================= */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.12),transparent_30%),#080808]
        "
      />

      {/* =========================
          OVERLAY
      ========================= */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#080808]
          via-[#080808]/95
          to-[#080808]/65
        "
      />

      {/* =========================
          CONTENT
      ========================= */}
      <div className="relative z-10 flex h-full flex-col px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6 lg:px-16">

        {/* =========================
            TOP
        ========================= */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center"
          >
            <Image
              src="/images/logo.webp"
              alt="PROTEKTA"
              width={190}
              height={55}
              priority
              className="
                h-auto
                w-[135px]
                object-contain
                sm:w-[155px]
                md:w-[175px]
              "
            />
          </Link>

          {/* CLOSE */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/15
              transition-colors
              hover:border-[#ff6a00]
              sm:h-11
              sm:w-11
            "
          >
            <X
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:rotate-90
                group-hover:text-[#ff6a00]
              "
            />
          </button>
        </div>

        {/* =========================
            MENU GRID
        ========================= */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-5xl">

            <div
              className="
                grid
                grid-cols-2
                gap-x-3
                gap-y-2
                sm:gap-x-5
                sm:gap-y-3
                md:grid-cols-3
                md:gap-x-6
                md:gap-y-4
              "
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                >
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActiveImage(item.image)}
                    onFocus={() => setActiveImage(item.image)}
                    onClick={onClose}
                    className="
                      group
                      flex
                      min-h-[74px]
                      items-center
                      gap-3
                      border
                      border-white/10
                      bg-white/[0.025]
                      px-3
                      transition-all
                      duration-300
                      hover:border-[#ff6a00]/50
                      hover:bg-white/[0.05]
                      sm:min-h-[82px]
                      sm:px-4
                      md:min-h-[92px]
                    "
                  >

                    {/* NUMBER */}
                    <span
                      className="
                        text-[8px]
                        tracking-[0.2em]
                        text-white/25
                        sm:text-[9px]
                      "
                    >
                      {item.number}
                    </span>

                    {/* NAME */}
                    <span
                      className="
                        text-[clamp(1rem,3vw,1.8rem)]
                        font-bold
                        uppercase
                        leading-none
                        tracking-[-0.02em]
                        text-white/65
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-white
                      "
                    >
                      {item.name}
                    </span>

                    {/* ARROW */}
                    <span
                      className="
                        ml-auto
                        text-lg
                        text-[#ff6a00]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      ↗
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* MINI MESSAGE */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="mt-6 hidden text-center md:block"
            >
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                Seguridad que te impulsa
              </span>
            </motion.div>
          </div>
        </div>

        {/* =========================
            FOOTER
        ========================= */}
        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-4
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-white/25
            sm:pt-5
            sm:text-[9px]
          "
        >
          <span>PROTEKTA · MATEI</span>

          <span className="hidden sm:block">
            Seguridad industrial
          </span>
        </div>

      </div>
    </div>
  );
}