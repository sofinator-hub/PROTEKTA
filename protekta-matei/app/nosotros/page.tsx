"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Compass,
  Crosshair,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

const principles = [
  {
    number: "01",
    title: "Protección",
    description:
      "Categorías de equipos orientadas a las necesidades de personas y actividades en distintos entornos de trabajo.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Variedad",
    description:
      "Protección personal, señalización vial y equipamiento para organizar espacios industriales y urbanos.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Orientación",
    description:
      "Información organizada para identificar categorías, comparar opciones y consultar disponibilidad.",
    icon: Compass,
  },
];

const steps = [
  {
    number: "01",
    title: "Identificar",
    description:
      "Definir el entorno, la actividad y las necesidades del proyecto.",
  },
  {
    number: "02",
    title: "Explorar",
    description:
      "Revisar las categorías y los productos relacionados con la solicitud.",
  },
  {
    number: "03",
    title: "Consultar",
    description:
      "Enviar los detalles para solicitar información y confirmar disponibilidad.",
  },
];

export default function NosotrosPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />

      <main
        className="relative min-h-screen overflow-hidden bg-[#151616] pb-20 pt-32 text-[#f4f3ef] sm:pt-36 lg:pt-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px), radial-gradient(circle at 80% 8%, rgba(255,106,0,.08), transparent 34%)",
          backgroundSize: "48px 48px, 48px 48px, auto",
        }}
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          {/* HERO */}
          <section className="grid min-h-[540px] items-center gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_.8fr] lg:min-h-[620px]">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#ff6a00]" />
                <span className="text-[10px] uppercase tracking-[.25em] text-neutral-400 sm:text-xs">
                  PROTEKTA / NOSOTROS
                </span>
              </div>

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[.25em] text-[#ff7519]">
                Protección con intención
              </p>

              <h1 className="max-w-5xl text-[clamp(3rem,7.8vw,7.5rem)] font-bold uppercase leading-[.86] tracking-[-.07em]">
                La seguridad
                <span className="block text-[#ff7519]">no es un</span>
                accesorio.
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-neutral-300 sm:text-base">
                PROTEKTA reúne categorías de protección industrial,
                señalización y equipamiento para ayudar a encontrar
                soluciones relacionadas con cada proyecto.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#enfoque"
                  className="inline-flex min-h-12 items-center gap-3 bg-[#ff6a00] px-5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[#e65f00]"
                >
                  Conocer nuestro enfoque
                  <ArrowDown size={16} />
                </Link>

                <Link
                  href="/catalogo"
                  className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-[#ff6a00]"
                >
                  Explorar catálogo
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* GRÁFICO ORBITAL */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center"
              aria-label="Gráfico abstracto de protección y precisión"
            >
              <div className="absolute inset-[5%] rounded-full border border-white/[.08]" />
              <div className="absolute inset-[15%] rounded-full border border-white/10" />
              <div className="absolute inset-[25%] rounded-full border border-[#ff6a00]/25" />

              <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[15%] rounded-full border border-dashed border-[#ff6a00]/35"
              >
                <span className="absolute left-[16%] top-[11%] h-3 w-3 bg-[#ff6a00] shadow-[0_0_22px_rgba(255,106,0,.65)]" />
                <span className="absolute bottom-[14%] right-[7%] h-2 w-2 bg-white/70" />
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{
                  duration: 52,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[27%] rounded-full border border-white/10"
              >
                <span className="absolute right-[6%] top-[18%] h-2 w-2 rounded-full bg-[#ff7519]" />
              </motion.div>

              <div className="relative flex h-[38%] w-[38%] flex-col items-center justify-center border border-[#ff6a00]/40 bg-[#191a1a]/90 shadow-[0_0_70px_rgba(255,106,0,.08)]">
                <Crosshair
                  size={42}
                  strokeWidth={1}
                  className="text-[#ff7519] sm:h-12 sm:w-12"
                />
                <span className="mt-4 text-[9px] font-semibold uppercase tracking-[.2em] text-neutral-300 sm:text-[10px]">
                  PROTEKTA
                </span>
              </div>

              <div className="absolute left-0 top-[23%] border border-white/10 bg-[#191a1a]/85 px-3 py-2 sm:px-4">
                <span className="block text-[9px] uppercase tracking-[.16em] text-neutral-500">
                  Enfoque
                </span>
                <span className="mt-1 block text-xs font-semibold text-white">
                  Prevención
                </span>
              </div>

              <div className="absolute bottom-[15%] right-0 border border-white/10 bg-[#191a1a]/85 px-3 py-2 sm:px-4">
                <span className="block text-[9px] uppercase tracking-[.16em] text-neutral-500">
                  Objetivo
                </span>
                <span className="mt-1 block text-xs font-semibold text-white">
                  Soluciones
                </span>
              </div>

              <div className="absolute right-[6%] top-[10%] h-7 w-7 border-r border-t border-[#ff6a00]/60" />
              <div className="absolute bottom-[7%] left-[8%] h-7 w-7 border-b border-l border-[#ff6a00]/60" />
            </motion.div>
          </section>

          {/* NAVEGACIÓN INTERNA */}
          <nav
            aria-label="Secciones de Nosotros"
            className="flex flex-wrap gap-2 border-b border-white/15 py-5"
          >
            {[
              { label: "Nuestro enfoque", href: "#enfoque" },
              { label: "Principios", href: "#principios" },
              { label: "Cómo trabajamos", href: "#proceso" },
              { label: "MATEI", href: "#matei" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-wider text-neutral-300 transition-colors hover:border-[#ff6a00]/60 hover:text-white sm:text-xs"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ENFOQUE */}
          <motion.section
            id="enfoque"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={
              reduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            className="grid scroll-mt-32 gap-8 py-16 sm:py-20 md:grid-cols-[.8fr_1.2fr] md:gap-16"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff7519]">
                01 / Nuestro enfoque
              </p>

              <h2 className="mt-5 text-3xl font-semibold uppercase leading-tight tracking-[-.045em] sm:text-5xl">
                Más claridad.
                <span className="block text-neutral-500">
                  Menos complicaciones.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-7 text-neutral-400 sm:text-base">
              <p>
                Elegir un producto comienza por entender dónde se utilizará,
                qué actividad se realizará y qué necesidades deben cubrirse.
                Por eso, el catálogo de PROTEKTA organiza distintas categorías
                para facilitar la búsqueda.
              </p>

              <p>
                La plataforma reúne protección personal, señalización vial
                y equipamiento para espacios urbanos. Cada consulta permite
                precisar las características, cantidades y disponibilidad
                que necesita el proyecto.
              </p>

              <Link
                href="/catalogo"
                className="inline-flex items-center gap-3 pt-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#ff7519]"
              >
                Recorrer las categorías
                <MoveUpRight size={16} />
              </Link>
            </div>
          </motion.section>

          {/* PRINCIPIOS */}
          <section
            id="principios"
            className="scroll-mt-32 border-y border-white/15 py-12 sm:py-16"
          >
            <div className="mb-9 grid gap-5 md:grid-cols-[1fr_.8fr] md:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff7519]">
                  02 / Principios
                </p>

                <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[-.04em] sm:text-4xl">
                  Una propuesta con propósito.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-neutral-400 md:justify-self-end">
                Estos principios describen el enfoque de la plataforma
                y la experiencia que busca ofrecer a quienes consultan
                sus categorías.
              </p>
            </div>

            <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.number}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={
                      reduceMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: reduceMotion ? 0 : index * 0.08,
                    }}
                    className="group bg-[#191a1a] p-6 transition-colors duration-300 hover:bg-[#202121] sm:p-8 lg:p-9"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={30}
                        strokeWidth={1.3}
                        className="text-[#ff7519] transition-transform duration-300 group-hover:-translate-y-1"
                      />

                      <span className="text-xs tracking-widest text-neutral-500">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-9 text-xl font-semibold uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-neutral-400">
                      {item.description}
                    </p>

                    <div className="mt-8 h-px w-10 bg-[#ff6a00] transition-all duration-300 group-hover:w-full" />
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* PROCESO */}
          <section id="proceso" className="scroll-mt-32 py-16 sm:py-20">
            <div className="grid gap-6 md:grid-cols-[.9fr_1.1fr] md:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff7519]">
                  03 / Cómo trabajamos
                </p>

                <h2 className="mt-4 max-w-xl text-3xl font-semibold uppercase leading-tight tracking-[-.04em] sm:text-5xl">
                  De la necesidad a la consulta.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-neutral-400 md:justify-self-end">
                Un recorrido sencillo para identificar la categoría
                adecuada y reunir la información necesaria para una
                consulta comercial.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={
                    reduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="relative border border-white/10 bg-[#191a1a] p-6 sm:p-8"
                >
                  <span className="text-xs tracking-[.2em] text-[#ff7519]">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold uppercase">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={19}
                      className="absolute right-6 top-7 hidden text-neutral-600 lg:block"
                    />
                  )}
                </motion.article>
              ))}
            </div>
          </section>

          {/* MATEI */}
          <motion.section
            id="matei"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={
              reduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            className="scroll-mt-32 border border-white/10 bg-[#1b1c1c] p-7 sm:p-10 lg:p-14"
          >
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <Wrench size={19} className="text-[#ff7519]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff7519]">
                    PROTEKTA · MATEI
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-semibold uppercase leading-tight tracking-[-.04em] sm:text-4xl">
                  Conoce nuestras categorías y encuentra el siguiente paso.
                </h2>

                <p className="mt-5 text-sm leading-7 text-neutral-400">
                  PROTEKTA está vinculada a MATEI. Para consultas sobre
                  productos, cantidades o disponibilidad, puedes revisar
                  el catálogo y comunicarte directamente con el equipo.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/catalogo"
                  className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#ff6a00] px-5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[#e65f00]"
                >
                  Ver catálogo
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/contacto"
                  className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/20 px-5 text-xs font-bold uppercase tracking-wider transition-colors hover:border-[#ff6a00]"
                >
                  Contactar
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.section>

          <div className="mt-8 flex flex-col gap-2 text-[9px] uppercase tracking-[.18em] text-neutral-500 sm:flex-row sm:justify-between">
            <span>PROTEKTA · MATEI</span>
            <span>Protección industrial y equipamiento</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}