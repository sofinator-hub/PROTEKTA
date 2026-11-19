
"use client";

import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  CalendarDays,
  Clock3,
  BadgePercent,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black pt-[100px] sm:pt-[115px] lg:pt-28">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[center_35%] bg-no-repeat sm:bg-center"
        style={{
          backgroundImage: "url('/images/fondo_negro.jpg')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 -z-10 bg-black/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

      {/* ORANGE LIGHT */}
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-[#E87524]/10 blur-[130px] sm:h-[550px] sm:w-[550px]" />

      {/* GRID TEXTURE */}
      <div className="event-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.05]" />

      {/* CONTENT */}
      <div className="mx-auto flex min-h-[calc(100svh-100px)] max-w-7xl flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[780px] lg:px-12 lg:py-20">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-9 flex items-center gap-3 sm:mb-12 sm:gap-4"
        >
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E87524] opacity-50" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E87524]" />
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E87524] sm:text-xs sm:tracking-[0.35em]">
            Nueva apertura · CDMX · 2026
          </span>

          <span className="hidden h-px w-16 bg-white/20 sm:block" />
        </motion.div>

        {/* MAIN TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <p className="mb-4 max-w-xl text-[10px] font-semibold uppercase leading-relaxed tracking-[0.28em] text-white/50 sm:mb-5 sm:text-xs sm:tracking-[0.4em]">
            El futuro de la protección industrial
          </p>

          <h1 className="text-[clamp(3.2rem,12.5vw,9.5rem)] font-black uppercase leading-[0.86] tracking-[-0.075em] text-white sm:text-[clamp(4rem,10vw,9.5rem)]">
            ¡ABRIMOS
            <br /> 
            <span className="text-[#E87524]">
              LAS PUERTAS!
            </span>
          </h1>

          {/* DESCRIPTION + EVENT DETAILS */}
          <div className="mt-9 flex flex-col gap-10 sm:mt-12 sm:gap-12 lg:flex-row lg:items-end lg:justify-between">

            {/* DESCRIPTION */}
            <div className="max-w-xl">
              <p className="text-lg font-semibold leading-snug text-white sm:text-xl lg:text-2xl">
                La seguridad industrial comienza con una nueva experiencia.
              </p>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/60 sm:mt-5 sm:text-base">
                PROTEKTA abre sus puertas. Ven a descubrir nuestro espacio,
                conocer nuestras soluciones de protección industrial y
                celebrar este nuevo comienzo con nosotros.
              </p>

              {/* CTA + DISCOUNT */}
              <div className="mt-7 flex flex-col items-start gap-7 sm:mt-9 sm:gap-8 xl:flex-row xl:items-center">

                <a
                  href="https://protekta-event.vercel.app/"
                  className="group inline-flex min-h-[58px] w-full items-center justify-between gap-5 bg-[#E87524] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-white sm:w-auto sm:justify-center sm:px-7 sm:tracking-[0.15em]"
                >
                  QUIERO MI GAFETE

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a> 

                <div className="flex items-center gap-3 border-l border-[#E87524]/50 pl-4"> 
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E87524]/30 bg-[#E87524]/10">
                    <BadgePercent
                      size={24}
                      className="text-[#E87524]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E87524] sm:text-[10px]">
                      Beneficio exclusivo
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      10% DE DESCUENTO
                    </p>

                    <p className="text-[10px] leading-relaxed text-white/55">
                      En cualquier compra con tu QR de registro
                    </p>
                  </div>
                </div> 
              </div> 
            </div>

            {/* EVENT DATE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full border-l-2 border-[#E87524] py-2 pl-5 sm:pl-7 lg:mb-2 lg:w-auto lg:min-w-[310px]"
            >
              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 sm:text-[10px] sm:tracking-[0.3em]">
                <CalendarDays size={14} className="shrink-0 text-[#E87524]" />
                Reserva la fecha
              </div>

              <div className="mt-4 flex items-end gap-5 sm:mt-5 sm:gap-6">

                {/* DAY AND MONTH */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                    SÁBADO
                  </p>

                  <p className="text-7xl font-black leading-[0.9] tracking-tighter text-white sm:text-8xl lg:text-9xl">
                    21
                  </p>

                  <p className="mt-2 text-base font-black uppercase tracking-[0.18em] text-[#E87524] sm:text-lg sm:tracking-[0.2em]">
                    NOVIEMBRE
                  </p>
                </div>

                {/* TIME */}
                <div className="mb-1 border-l border-white/15 pl-4 sm:mb-2 sm:pl-5">
                  <p className="text-[9px] uppercase tracking-widest text-white/40 sm:text-[10px]">
                    Inauguración
                  </p>

                  <div className="mt-2 flex items-center gap-2 sm:mt-3">
                    <Clock3
                      size={17}
                      className="shrink-0 text-[#E87524]"
                    />

                    <p className="text-2xl font-black text-white sm:text-3xl">
                      13:00
                    </p>
                  </div>

                  <p className="mt-1 text-[9px] tracking-[0.2em] text-white/40 sm:text-[10px]">
                    HORAS
                  </p> 
                </div> 
              </div> 
            </motion.div>
         </div>
        </motion.div>

        {/* HERO FOOTER */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:pt-7 lg:mt-20">

          <div className="flex items-center gap-3 text-xs text-white/50 sm:text-sm">
            <MapPin size={17} className="shrink-0 text-[#E87524]" />
            Viaducto Tlalpan 157
          </div>

          <a
            href="#evento"
            className="group flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 transition hover:text-[#E87524] sm:text-[10px] sm:tracking-[0.25em]"
          >
            DESCUBRE LA EXPERIENCIA

            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>

          <span className="hidden text-[9px] font-bold tracking-[0.3em] text-white/20 md:block">
            PROTEKTA® · INDUSTRIAL SAFETY
          </span> 
        </div>  
      </div>
    </section>
  );
}

