"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const googleMapsUrl =
  "https://maps.app.goo.gl/36g1NfG1AgQA9d1NA?g_st=aw";

export default function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-[#181818] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#ff6a00]" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              Estamos para ayudarte
            </span>
          </div>

          <h2 className="max-w-4xl text-[clamp(2.7rem,5.5vw,5.8rem)] font-black uppercase leading-[0.88] tracking-[-0.05em]">
            Hablemos de
            <br />
            <span className="text-[#ff6a00]">
              seguridad.
            </span>
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="border border-white/10 bg-[#202020] p-7 sm:p-9 lg:p-12"
          >
            <p className="max-w-md text-sm leading-relaxed text-white/45 md:text-base">
              Nuestro equipo puede ayudarte a encontrar
              soluciones de protección adecuadas para tu
              operación, proyecto o industria.
            </p>

            {/* INFO */}
            <div className="mt-10 space-y-6">

              {/* LOCATION */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#ff6a00] transition-all duration-300 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-black">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Ubicación
                  </p>

                  <p className="mt-1 text-sm font-medium transition-colors group-hover:text-[#ff6a00]">
                    MATEI · PROTEKTA
                  </p>

                  <p className="mt-1 text-xs text-white/35">
                    Ver ubicación en Google Maps ↗
                  </p>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+525564997750"
                className="group flex gap-4"
              >
                <div className="flex h-12 w-11 shrink-0 items-center justify-center border border-white/10 text-[#ff6a00] transition-all duration-300 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-black">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Teléfono
                  </p>

                  <p className="mt-1 text-sm font-medium transition-colors group-hover:text-[#ff6a00]">
                    56 1051 4050
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:protektatlalpan@gmail.com"
                className="group flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#ff6a00] transition-all duration-300 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-black">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Correo
                  </p>

                  <p className="mt-1 break-all text-sm font-medium transition-colors group-hover:text-[#ff6a00]">
                    protektatlalpan@gmail.com
                  </p>
                </div>
              </a>

              {/* HOURS */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#ff6a00]">
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Horario
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Lunes — Viernes · 8:00 — 18:00
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <a
              href="/contacto"
              className="group mt-10 inline-flex items-center gap-4 bg-[#ff6a00] px-6 py-4 text-xs font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-white"
            >
              Contáctanos

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </motion.div>

          {/* MAP */}
          <motion.a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="group relative min-h-[420px] overflow-hidden border border-white/10 bg-[#101010] sm:min-h-[500px] lg:min-h-full"
          >

            {/* MAP GRID */}
            <div className="absolute inset-0 opacity-60 transition-transform duration-700 group-hover:scale-105">

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />

              <div className="absolute left-[15%] top-[18%] h-[2px] w-[75%] rotate-[17deg] bg-white/10" />

              <div className="absolute left-[5%] top-[42%] h-[2px] w-[95%] rotate-[-12deg] bg-white/10" />

              <div className="absolute left-[25%] top-[70%] h-[2px] w-[65%] rotate-[8deg] bg-white/10" />

              <div className="absolute left-[40%] top-[5%] h-[90%] w-[2px] rotate-[16deg] bg-white/10" />

              <div className="absolute left-[68%] top-[10%] h-[85%] w-[2px] rotate-[-22deg] bg-white/10" />

            </div>

            {/* ORANGE GLOW */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00]/10 blur-[90px]" />

            {/* MAP PIN */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="absolute inset-[-18px] animate-ping rounded-full border border-[#ff6a00]/30" />

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6a00] text-black shadow-[0_0_50px_rgba(255,106,0,0.3)]">
                <MapPin size={22} />
              </div>

            </div>

            {/* LABEL */}
            <div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-black/60 p-5 backdrop-blur-xl transition-all duration-300 group-hover:border-[#ff6a00]/40">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#ff6a00]">
                PROTEKTA · MATEI
              </p>

              <p className="mt-2 text-sm font-semibold">
                Ver nuestra ubicación
              </p>

              <p className="mt-2 text-xs text-white/40">
                Haz clic para abrir Google Maps.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-white transition-colors group-hover:text-[#ff6a00]">
                Abrir ubicación
                <ArrowUpRight size={13} />
              </div>
            </div>

          </motion.a>

        </div>
      </div>
    </section>
  );
}