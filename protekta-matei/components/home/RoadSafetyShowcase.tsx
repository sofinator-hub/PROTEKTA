"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const leftWords = [
  "SEGURIDAD",
  "VISIBILIDAD",
  "PREVENCIÓN",
  "CONTROL",
];

const rightWords = [
  "DELIMITAR",
  "SEÑALIZAR",
  "PROTEGER",
  "PREVENIR",
];

export default function RoadSafetyShowcase() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="overflow-hidden bg-[#080808] px-4 py-16 text-white sm:px-6 md:px-10 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-[1720px]">

        {/* CASCADA IZQUIERDA */}
        <aside
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-[80px] overflow-hidden 2xl:block"
        >
          <div className="absolute left-3 top-1/2 h-[380px] w-[65px] -translate-y-1/2 overflow-hidden border-l border-white/10 pl-3">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: ["0%", "-50%"] }
              }
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-col"
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex flex-col">
                  {leftWords.map((word) => (
                    <div
                      key={word + copy}
                      className="flex h-[76px] flex-col justify-center gap-3 border-b border-white/[0.06]"
                    >
                      <span className="text-[7px] tracking-[0.12em] text-white/35">
                        {word}
                      </span>
                      <span className="text-[8px] tracking-[0.25em] text-[#ff6a00]/60">
                        / / /
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </aside>

        {/* CASCADA DERECHA */}
        <aside
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[80px] overflow-hidden 2xl:block"
        >
          <div className="absolute right-3 top-1/2 h-[380px] w-[65px] -translate-y-1/2 overflow-hidden border-r border-white/10 pr-3 text-right">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: ["-50%", "0%"] }
              }
              transition={{
                duration: 36,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-col"
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex flex-col">
                  {rightWords.map((word) => (
                    <div
                      key={word + copy}
                      className="flex h-[76px] flex-col items-end justify-center gap-3 border-b border-white/[0.06]"
                    >
                      <span className="text-[7px] tracking-[0.12em] text-white/35">
                        {word}
                      </span>
                      <span className="text-[8px] tracking-[0.25em] text-[#ff6a00]/60">
                        / / /
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </aside>

        {/* COMPOSICIÓN CENTRAL */}
        <div className="relative mx-auto grid max-w-[1450px] overflow-hidden border border-white/10 bg-[#111111] md:grid-cols-2">

          {/* FOTOGRAFÍA COMPLETA */}
          <div className="relative aspect-square overflow-hidden bg-[#151515]">
            <img
              src="/images/road-safety-showcase.jpg"
              alt="Carretera con conos y señalización vial"
              className="absolute inset-0 h-full w-full object-contain"
            />

            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#ff6a00]" />
              <span className="text-[8px] uppercase tracking-[0.18em] text-white drop-shadow-md">
                Seguridad en cada recorrido
              </span>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="relative flex items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 xl:px-16">

            <div className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-[#ff6a00]/[0.05] blur-[90px]" />

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease: "easeOut",
              }}
              className="relative z-10 w-full"
            >
              <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#ff6a00] sm:text-[10px]">
                Señalización vial
              </p>

              <h2 className="mt-5 text-[clamp(2.6rem,4.3vw,4.6rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                Señaliza,
                <br />
                Delimita
                <br />
                <span className="text-[#ff6a00]">
                Organiza.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                Soluciones para delimitar espacios y mejorar
                la seguridad en vialidades, obras y
                estacionamientos.
              </p>

              <Link
                href="/senalizacion-vial"
                className="group mt-8 flex min-h-[58px] items-center justify-between gap-4 border border-white/15 px-5 transition-colors duration-300 hover:border-[#ff6a00] hover:bg-white/[0.025] sm:px-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs">
                  Descubrir soluciones viales
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-black">
                  <ArrowUpRight size={17} />
                </span>
              </Link>

              <a
                href="mailto:matei_company@hotmail.com?subject=Informacion%20sobre%20senalizacion%20vial"
                className="mt-5 inline-flex items-center gap-2 text-[10px] text-white/40 transition-colors hover:text-white"
              >
                Consultas para tu proyecto
                <ArrowUpRight size={13} />
              </a>
            </motion.div>
          </div>

          {/* LÍNEA NARANJA */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.5,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 z-20 h-[2px] w-full origin-left bg-[#ff6a00]"
          />
        </div>
      </div>
    </section>
  );
}