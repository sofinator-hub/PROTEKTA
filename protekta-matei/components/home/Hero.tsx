
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] w-full overflow-hidden bg-black">

      {/* DESKTOP BACKGROUND */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/industries/hero-seguridad.png"
          alt="Mobiliario urbano industrial PROTEKTA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/images/industries/hero-seguridad.png"
          alt="Mobiliario urbano industrial PROTEKTA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* CONTRASTE DESKTOP */}
      <div className="absolute inset-0 z-[1] hidden bg-black/10 md:block" />

      <div className="absolute inset-0 z-[1] hidden bg-gradient-to-r from-black/40 via-transparent to-transparent md:block" />

      <div className="absolute inset-0 z-[1] hidden bg-gradient-to-t from-black/70 via-transparent to-black/10 md:block" />

      {/* CONTRASTE MOBILE */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-transparent to-black/55 md:hidden" />

      {/* CONTENT */}
      <div
        className="
          relative z-10 mx-auto flex min-h-[100svh] w-full
          max-w-[1600px] flex-col
          justify-start
          px-6 pt-36 pb-36
          sm:px-10
          md:justify-center md:px-16 md:py-32
          lg:px-24
        "
      >

        {/* BRAND LABEL */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 flex items-center gap-4 md:mb-9"
        >
          <span className="h-[2px] w-9 shrink-0 bg-[#E87524] md:w-12" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-[10px] md:text-xs md:tracking-[0.3em]">
            PROTEKTA / SEGURIDAD INDUSTRIAL
          </span>
        </motion.div>

        {/* MAIN HEADLINE */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-[850px]
            text-[clamp(2.8rem,11vw,4.5rem)]
            font-black uppercase
            leading-[0.88]
            tracking-[-0.075em]
            text-white
            md:text-[clamp(4rem,7vw,7rem)]
            lg:max-w-[1050px]
          "
        >
          LA SEGURIDAD
          <br />

          <span className="text-[#E87524]">
            NO ES OPCIONAL.
          </span>
        </motion.h1>

        {/* ACCENT LINE */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 65 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 h-[2px] bg-[#E87524] md:mt-10"
        />
      </div>

      {/* BOTTOM BRAND DETAIL */}
      <div
        className="
          absolute bottom-6 left-6 right-6 z-10
          flex items-center justify-between
          border-t border-white/20 pt-4
          sm:left-10 sm:right-10
          md:bottom-9 md:left-16 md:right-16
          lg:left-24 lg:right-24
        "
      >
        <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/55 sm:text-[9px] md:tracking-[0.25em]">
          PROTEKTA · MATEI
        </span>

        <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-white/55 sm:text-[9px] md:tracking-[0.2em]">
          PROTECCIÓN INDUSTRIAL
        </span>
      </div>

    </section>
  );
}
