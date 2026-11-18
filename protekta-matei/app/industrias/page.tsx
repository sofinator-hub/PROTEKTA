import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

const industries = [
  {
    id: "construccion",
    number: "01",
    title: "Construcción",
    description:
      "Protección y equipamiento para obras, cuadrillas y espacios de trabajo.",
    example:
      "Una obra puede requerir cascos, lentes, guantes y elementos para delimitar zonas.",
    categories: "Cascos · Lentes · Guantes",
    image: "/images/industries/construccion1.png",
    alt: "Maquinaria y trabajador en un entorno de construcción",
    position: "center",
    search: "cascos",
  },
  {
    id: "manufactura",
    number: "02",
    title: "Manufactura",
    description:
      "Soluciones para talleres, plantas productivas y operaciones industriales.",
    example:
      "Un taller puede necesitar protección ocular, guantes y respiradores según la actividad.",
    categories: "Protección ocular · Guantes · Respiradores",
    image: "/images/industries/manufactura1.png",
    alt: "Proceso de fabricación en un entorno industrial",
    position: "center",
    search: "guantes",
  },
  {
    id: "logistica",
    number: "03",
    title: "Logística",
    description:
      "Equipamiento para almacenes, centros de distribución y movimiento de materiales.",
    example:
      "Un área de carga puede utilizar prendas de alta visibilidad y señalización de recorridos.",
    categories: "Alta visibilidad · Señalización",
    image: "/images/industries/logística.png",
    alt: "Movimiento de materiales en un entorno logístico",
    position: "center",
    search: "alta visibilidad",
  },
  {
    id: "seguridad-vial",
    number: "04",
    title: "Seguridad vial",
    description:
      "Elementos para delimitar zonas de trabajo y organizar la circulación.",
    example:
      "Una zona de mantenimiento vial puede requerir conos, trafitambos y barreras.",
    categories: "Conos · Trafitambos · Barreras",
    image: "/images/industries/vialidad1.png",
    alt: "Señalización en una vía de circulación",
    position: "center",
    search: "conos",
  },
  {
    id: "espacios-urbanos",
    number: "05",
    title: "Espacios urbanos",
    description:
      "Señalética y equipamiento para espacios públicos y áreas comunes.",
    example:
      "Una plaza puede necesitar señalización, basureros y botes de acero inoxidable.",
    categories: "Señalética · Basureros · Botes de acero",
    image: "/images/industries/urbano1.png",
    alt: "Equipamiento para un espacio público",
    position: "center",
    search: "botes",
  },
];

export default function IndustriasPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#080909] text-white">
        {/* PORTADA */}
        <section
          id="inicio-industrias"
          className="relative flex min-h-[100svh] scroll-mt-0 flex-col justify-end overflow-hidden bg-[#080909]"
        >
          <Image
            src="/images/industries/industrias1.png"
            alt="Infraestructura y entorno vial"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

          <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:px-16">
            <div className="flex items-center justify-between border-b border-white/25 pb-4">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/75">
                PROTEKTA / Industrias
              </span>

              <span className="text-[10px] tracking-widest text-white/60">
                01 — 05
              </span>
            </div>

            <div className="max-w-5xl py-20">
              <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/70 sm:text-xs">
                Protección para distintos entornos
              </p>

              <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.075em]">
                Cada entorno.
                <span className="mt-3 block text-white/65">
                  Una necesidad.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                Descubre cómo cambian las necesidades de protección,
                señalización y equipamiento de un entorno a otro.
              </p>

              <a
                href="#construccion"
                className="mt-8 inline-flex items-center gap-4 border-b border-white/50 pb-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#ff6a00] hover:text-[#ff7519]"
              >
                Explorar industrias
                <ArrowDown size={15} />
              </a>
            </div>

            <div className="flex items-center justify-between border-t border-white/25 pt-4 text-[9px] uppercase tracking-[0.16em] text-white/50">
              <span>PROTEKTA · MATEI</span>
              <span>Desplázate para descubrir</span>
            </div>
          </div>
        </section>

        {/* UNA INDUSTRIA POR ESCENA */}
        {industries.map((industry, index) => {
          const nextIndustry = industries[index + 1];

          return (
            <section
              key={industry.id}
              id={industry.id}
              className="relative isolate flex min-h-[100svh] scroll-mt-0 flex-col justify-end overflow-hidden bg-[#101111]"
            >
              {/* Imagen completa */}
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                sizes="100vw"
                quality={75}
                loading="lazy"
                className="object-cover"
                style={{ objectPosition: industry.position }}
              />

              {/* Oscurecimiento mínimo para contraste */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:px-16">
                {/* Número y sección */}
                <div className="flex items-center justify-between border-b border-white/25 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/75">
                    PROTEKTA / {industry.title}
                  </span>

                  <span className="text-[10px] tracking-widest text-white/60">
                    {industry.number} — 05
                  </span>
                </div>

                {/* Contenido */}
                <div className="grid gap-10 pt-20 md:grid-cols-[1.15fr_0.65fr] md:items-end md:gap-16 lg:gap-24">
                  <div className="max-w-4xl">
                    <h2 className="text-[clamp(3.2rem,8vw,7.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.07em]">
                      {industry.title}
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:mt-8 sm:text-base sm:leading-8">
                      {industry.description}
                    </p>

                    <p className="mt-5 text-[10px] uppercase leading-6 tracking-[0.1em] text-white/60 sm:text-xs">
                      {industry.categories}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-10">
                      <Link
                        href={`/catalogo?buscar=${encodeURIComponent(industry.search)}`}
                        className="inline-flex min-h-11 items-center gap-4 border-b border-white/60 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[#ff6a00] hover:text-[#ff7519]"
                      >
                        Explorar catálogo
                        <ArrowUpRight size={15} />
                      </Link>

                      <Link
                        href="/contacto"
                        className="inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white"
                      >
                        Solicitar cotización
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* Ejemplo discreto */}
                  <div className="max-w-sm border-l border-[#ff6a00] pl-5 sm:pl-6 md:justify-self-end">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#ff9a50] sm:text-[10px]">
                      Ejemplo de aplicación
                    </p>

                    <p className="mt-3 text-sm leading-7 text-white/75">
                      {industry.example}
                    </p>
                  </div>
                </div>

                {/* Navegación entre escenas */}
                <div className="mt-16 flex items-center justify-between border-t border-white/25 pt-4">
                  <span className="text-[9px] uppercase tracking-[0.16em] text-white/50">
                    PROTEKTA · MATEI
                  </span>

                  {nextIndustry ? (
                    <a
                      href={`#${nextIndustry.id}`}
                      className="inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
                    >
                      Siguiente
                      <ArrowDown size={15} />
                    </a>
                  ) : (
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
                    >
                      Hablemos de tu proyecto
                      <ArrowUpRight size={15} />
                    </Link>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        {/* CIERRE */}
        <section className="flex min-h-[65svh] flex-col justify-center bg-[#080909] px-5 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto w-full max-w-[1400px]">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
              PROTEKTA / MATEI
            </p>

            <h2 className="mt-7 max-w-5xl text-[clamp(3rem,7.5vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.07em]">
              ¿Qué necesita
              <span className="block text-white/50">
                tu proyecto?
              </span>
            </h2>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-4 border-b border-white/50 pb-3 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#ff6a00] hover:text-[#ff7519]"
              >
                Explorar catálogo
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-4 border-b border-white/50 pb-3 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#ff6a00] hover:text-[#ff7519]"
              >
                Solicitar cotización
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}