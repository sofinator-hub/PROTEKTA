"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Factory,
  HardHat,
  TrafficCone,
  Truck,
  type LucideIcon,
} from "lucide-react";

type Industry = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  {
    number: "01",
    title: "Construcción",
    description:
      "Protección personal y equipamiento para obras, maquinaria y espacios de trabajo exigentes.",
    href: "/industrias",
    icon: HardHat,
  },
  {
    number: "02",
    title: "Manufactura",
    description:
      "Soluciones para procesos industriales, líneas de producción y operaciones continuas.",
    href: "/industrias",
    icon: Factory,
  },
  {
    number: "03",
    title: "Logística",
    description:
      "Equipamiento para almacenes, movimiento de materiales y circulación de mercancías.",
    href: "/industrias",
    icon: Truck,
  },
  {
    number: "04",
    title: "Seguridad vial",
    description:
      "Señalización y elementos para delimitar obras, ordenar recorridos y mejorar la circulación.",
    href: "/senalizacion-vial",
    icon: TrafficCone,
  },
  {
    number: "05",
    title: "Espacios urbanos",
    description:
      "Señalética, basureros, botes de acero inoxidable y equipamiento para espacios públicos.",
    href: "/senalizacion-vial",
    icon: Building2,
  },
];

export default function IndustrySolutions() {
  return (
    <section
      id="industrias"
      className="relative isolate overflow-hidden bg-[#1d1e1e] px-5 py-20 text-[#f2f0eb] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      style={{
        backgroundImage: [
          "radial-gradient(ellipse at 15% 0%, rgba(255,106,0,0.045), transparent 42%)",
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 4px)",
        ].join(", "),
      }}
    >
      {/* Iluminación ambiental sutil */}
      <div className="pointer-events-none absolute -right-40 top-32 -z-10 h-[400px] w-[400px] rounded-full bg-[#ff6a00]/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Encabezado */}
        <header className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff6a00]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400 sm:text-xs">
                PROTEKTA / SECTORES
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-bold uppercase leading-[0.94] tracking-[-0.065em]">
              Cada entorno
              <span className="block text-[#ff7519]">
                exige soluciones.
              </span>
            </h2>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-sm leading-7 text-neutral-300 sm:text-base">
              Protección, señalización y equipamiento para entornos
              industriales, obras y espacios públicos. Soluciones
              adaptadas a las necesidades de cada sector.
            </p>

            <Link
              href="/catalogo"
              className="mt-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#f2f0eb] transition-colors duration-150 hover:text-[#ff7519]"
            >
              Explorar catálogo completo
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </Link>
          </div>
        </header>

        {/* Listado editorial de sectores */}
        <div className="border-t border-white/15">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.number}
                href={industry.href}
                className="group grid grid-cols-[28px_minmax(0,1fr)_36px] items-center gap-x-3 border-b border-white/15 px-2 py-6 transition-colors duration-150 hover:bg-white/[0.035] sm:grid-cols-[40px_minmax(0,1fr)_42px] sm:gap-x-5 sm:px-3 sm:py-7 md:grid-cols-[36px_minmax(0,1fr)_88px_40px] lg:grid-cols-[48px_minmax(220px,1.05fr)_minmax(200px,0.9fr)_120px_44px] lg:gap-x-7 lg:px-4 lg:py-6"
              >
                {/* Número */}
                <span className="self-start pt-1 text-[10px] font-medium tracking-[0.15em] text-neutral-500 sm:text-xs lg:pt-2">
                  {industry.number}
                </span>

                {/* Título y descripción móvil */}
                <div className="min-w-0">
                  <h3 className="break-words text-[clamp(1.35rem,3.2vw,2.65rem)] font-semibold uppercase leading-[1.05] tracking-[-0.045em] text-neutral-100 transition-colors duration-150 group-hover:text-[#ff7519]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-xs leading-5 text-neutral-400 sm:text-sm lg:hidden">
                    {industry.description}
                  </p>
                </div>

                {/* Descripción independiente en escritorio */}
                <p className="hidden max-w-sm text-sm leading-6 text-neutral-400 lg:block">
                  {industry.description}
                </p>

                {/* Ícono industrial */}
                <div
                  aria-hidden="true"
                  className="relative hidden h-[76px] w-[88px] items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-white/[0.025] md:flex lg:h-[88px] lg:w-[120px]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.09),transparent_70%)]" />

                  <span className="absolute left-0 top-0 h-px w-7 bg-[#ff6a00]/70" />

                  <Icon
                    size={34}
                    strokeWidth={1.35}
                    className="relative text-neutral-400 transition-colors duration-150 group-hover:text-[#ff7519] lg:h-10 lg:w-10"
                  />
                </div>

                {/* Flecha de navegación */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/25 text-neutral-200 transition-colors duration-150 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-white sm:h-10 sm:w-10">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Pie de sección */}
        <footer className="mt-8 flex flex-col gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>PROTEKTA · MATEI</span>

          <span>
            Protección industrial · Seguridad vial · Espacios públicos
          </span>
        </footer>
      </div>
    </section>
  );
}