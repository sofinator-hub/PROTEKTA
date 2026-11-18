
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
    <section className="relative isolate min-h-screen overflow-hidden bg-transparent pt-28">

      {/* ========================================
          FONDO PRINCIPAL
      ======================================== */}

      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/fondo_negro.jpg')",
        }}
      />

      {/* Capas de contraste */}
      <div className="absolute inset-0 z-[1] bg-black/35" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/35 to-black/20" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* Iluminación naranja */}
      <div className="pointer-events-none absolute -right-40 top-20 z-[2] h-[550px] w-[550px] rounded-full bg-[#E87524]/15 blur-[150px]" />

      {/* Textura */}
      <div className="event-grid pointer-events-none absolute inset-0 z-[2] opacity-[0.05]" />

      {/* ========================================
          CONTENIDO
      ======================================== */}

      <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col justify-center px-6 py-20 lg:px-12">

        {/* Etiqueta superior */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E87524] opacity-50" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E87524]" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E87524] sm:text-xs">
            Nueva apertura · CDMX · 2026
          </span>

          <span className="h-px w-16 bg-white/20" />
        </motion.div>

        {/* Título principal */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
            El futuro de la protección industrial
          </p>

          <h1 className="text-[clamp(3.5rem,10vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-white">
            ¡ABRIMOS
            <br />

            <span className="text-[#E87524]">
              LAS PUERTAS!
            </span>
          </h1>

          {/* Descripción, CTA y fecha */}

          <div className="mt-12 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            {/* Descripción */}

            <div className="max-w-xl">

              <p className="text-xl font-semibold leading-relaxed text-white sm:text-2xl">
                La seguridad industrial comienza con una nueva experiencia.
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                PROTEKTA abre sus puertas. Ven a descubrir nuestro
                espacio, conocer nuestras soluciones de protección
                industrial y celebrar este nuevo comienzo con nosotros.
              </p>

              {/* Botón de registro */}

              <div className="mt-9 flex flex-col items-start gap-7 sm:flex-row sm:items-center">

                <a
                  href="https://protekta-event.vercel.app/"
                  className="group inline-flex items-center gap-5 bg-[#E87524] px-7 py-5 text-xs font-black uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-white"
                >
                  QUIERO MI GAFETE

                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* Beneficio de registro */}

                <div className="flex items-center gap-3 border-l border-[#E87524]/50 pl-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E87524]/30 bg-[#E87524]/10">
                    <BadgePercent
                      size={24}
                      className="text-[#E87524]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E87524]">
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

            {/* Fecha del evento */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative border-l border-[#E87524] py-2 pl-7 lg:mb-2"
            >

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                <CalendarDays
                  size={14}
                  className="text-[#E87524]"
                />

                Reserva la fecha
              </div>

              <div className="mt-5 flex items-end gap-5">

                {/* Día y mes */}

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                    SÁBADO
                  </p>

                  <p className="text-8xl font-black leading-[0.9] tracking-tighter text-white sm:text-9xl">
                    21
                  </p>

                  <p className="mt-2 text-lg font-black uppercase tracking-[0.2em] text-[#E87524]">
                    NOVIEMBRE
                  </p>
                </div>

                {/* Hora */}

                <div className="mb-2 border-l border-white/15 pl-5">

                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Inauguración
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <Clock3
                      size={17}
                      className="text-[#E87524]"
                    />

                    <p className="text-3xl font-black text-white">
                      13:00
                    </p>
                  </div>

                  <p className="mt-1 text-[10px] tracking-[0.2em] text-white/40">
                    HORAS
                  </p>

                </div>

              </div>

            </motion.div>

          </div>
        </motion.div>

        {/* ========================================
            PIE DEL HERO
        ======================================== */}

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-7">

          <div className="flex items-center gap-3 text-xs text-white/50">
            <MapPin
              size={17}
              className="text-[#E87524]"
            />

            Viaducto Tlalpan 157
          </div>

          <a
            href="#evento"
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 transition hover:text-[#E87524]"
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
