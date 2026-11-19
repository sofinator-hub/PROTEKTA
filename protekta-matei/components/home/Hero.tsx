
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] w-full overflow-hidden bg-black">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/industries/urbano1.png"
          alt="Mobiliario urbano industrial PROTEKTA"
          fill
          priority
          sizes="100vw"
          className="
            object-contain
            object-bottom
            md:object-cover
            md:object-center
          "
        />
      </div>

      {/* DARK OVERLAYS */}
      <div className="absolute inset-0 z-[1] bg-black/10" />

      <div className="
        absolute inset-0 z-[1]
        bg-gradient-to-b
        from-black/70
        via-transparent
        to-black/40
      " />

      <div className="
        absolute inset-0 z-[1]
        bg-gradient-to-r
        from-black/35
        via-transparent
        to-transparent
      " />

      {/* CONTENT */}
      <div className="
        relative z-10 mx-auto
        flex min-h-[100svh] w-full
        max-w-[1600px]
        flex-col justify-center
        px-6 pb-[45svh] pt-32
        sm:px-10 sm:pb-[42svh]
        md:px-16 md:pb-20
        lg:px-24
      ">

        {/* BRAND LABEL */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-[2px] w-9 bg-[#E87524]" />

          <span className="
            text-[9px] font-semibold
            uppercase tracking-[0.3em]
            text-white/60
            sm:text-[10px]
          ">
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
            max-w-[1000px]
            text-[clamp(3rem,8.5vw,8rem)]
            font-black uppercase
            leading-[0.88]
            tracking-[-0.075em]
            text-white
          "
        >
          LA SEGURIDAD
          <br />

          <span className="text-[#E87524]">
            NO ES OPCIONAL.
          </span>
        </motion.h1>

        {/* SMALL ACCENT */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 55 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 h-[2px] bg-[#E87524]"
        />
      </div>

      {/* BOTTOM BRAND DETAIL */}
      <div className="
        absolute bottom-7 left-6 right-6 z-10
        flex items-center justify-between
        border-t border-white/15 pt-4
        sm:left-10 sm:right-10
        md:bottom-9 md:left-16 md:right-16
        lg:left-24 lg:right-24
      ">
        <span className="
          text-[8px] font-medium
          uppercase tracking-[0.25em]
          text-white/45 sm:text-[9px]
        ">
          PROTEKTA · MATEI
        </span>

        <span className="
          text-[8px] font-medium
          uppercase tracking-[0.2em]
          text-white/45 sm:text-[9px]
        ">
          PROTECCIÓN INDUSTRIAL
        </span>
      </div>
    </section>
  );
}
 