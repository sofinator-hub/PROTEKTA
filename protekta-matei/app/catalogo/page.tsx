
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpen,
  Construction,
  Footprints,
  Glasses,
  HardHat,
  Hand,
  Search,
  ShieldCheck,
  Wind,
  type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

/* ========================================
   TIPOS
======================================== */

type Category =
  | "Protección personal"
  | "Señalización vial"
  | "Equipamiento urbano";

type CatalogItem = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  products: string[];
  category: Category;
  icon: LucideIcon;
  pdf?: string;
  fileName?: string;
};

/* ========================================
   DOCUMENTOS
======================================== */

// Catálogo general provisional
const PROVISIONAL_PDF = "/catalogos/catalogo-provisional.pdf";

// Catálogo oficial de cascos y accesorios
const HELMETS_PDF = "/catalogos/catalogo-cascos.pdf";

// Catálogo oficial de chalecos
const CHALECOS_PDF = "/catalogos/catalogo-chalecos.pdf";

/* ========================================
   CATÁLOGOS DISPONIBLES
======================================== */

const catalogItems: CatalogItem[] = [
  {
    id: "cascos",
    number: "01",
    title: "Cascos y accesorios",
    subtitle: "Protección para cabeza",
    description:
      "Descubre nuestra línea de cascos de seguridad y accesorios para protección de cabeza. Incluye cascos MTR, ala ancha, cubrecuellos, viseras, lámparas y barbiquejos.",
    products: [
      "Cascos MTR",
      "Cascos de ala ancha",
      "Cubrecuellos",
      "Viseras",
      "Lámparas",
      "Barbiquejos",
    ],
    category: "Protección personal",
    icon: HardHat,
    pdf: HELMETS_PDF,
    fileName: "catalogo-cascos-protekta.pdf",
  },

  {
    id: "lentes",
    number: "02",
    title: "Lentes de seguridad",
    subtitle: "Protección visual",
    description:
      "Opciones de protección ocular para distintos entornos y actividades de trabajo.",
    products: [
      "Protección visual",
      "Lentes industriales",
    ],
    category: "Protección personal",
    icon: Glasses,
  },

  {
    id: "guantes",
    number: "03",
    title: "Guantes de trabajo",
    subtitle: "Protección para manos",
    description:
      "Guantes para actividades que requieren agarre, destreza y protección de las manos.",
    products: [
      "Guantes industriales",
      "Guantes de protección",
    ],
    category: "Protección personal",
    icon: Hand,
  },

  {
    id: "calzado",
    number: "04",
    title: "Calzado de seguridad",
    subtitle: "Protección para los pies",
    description:
      "Opciones de calzado destinadas a jornadas industriales y actividades de trabajo.",
    products: [
      "Botas de seguridad",
      "Calzado industrial",
    ],
    category: "Protección personal",
    icon: Footprints,
  },

  {
    id: "respiradores",
    number: "05",
    title: "Respiradores",
    subtitle: "Protección respiratoria",
    description:
      "Línea de protección respiratoria para diferentes actividades laborales.",
    products: [
      "Respiradores",
      "Accesorios",
    ],
    category: "Protección personal",
    icon: Wind,
  },

  {
    id: "alta-visibilidad",
    number: "06",
    title: "Chalecos de seguridad",
    subtitle: "Protección y alta visibilidad",
    description:
      "Conoce nuestra línea de chalecos de seguridad y prendas reflectantes, diseñadas para mejorar la visibilidad del personal en entornos industriales, obras y zonas de trabajo.",
    products: [
      "Chalecos reflectantes",
      "Alta visibilidad",
      "Prendas de seguridad",
    ],
    category: "Protección personal",
    icon: ShieldCheck,
    pdf: CHALECOS_PDF,
    fileName: "catalogo-chalecos.pdf",
  },

  {
    id: "conos-viales",
    number: "07",
    title: "Conos viales",
    subtitle: "Señalización temporal",
    description:
      "Elementos para delimitar áreas y canalizar recorridos en zonas de trabajo.",
    products: [
      "Conos",
      "Accesorios viales",
    ],
    category: "Señalización vial",
    icon: Construction,
  },

  {
    id: "trafitambos",
    number: "08",
    title: "Trafitambos",
    subtitle: "Señalización de obra",
    description:
      "Elementos para señalizar obras, desvíos y áreas restringidas.",
    products: [
      "Trafitambos",
      "Delimitación temporal",
    ],
    category: "Señalización vial",
    icon: Construction,
  },

  {
    id: "barreras-viales",
    number: "09",
    title: "Barreras viales",
    subtitle: "Delimitación de espacios",
    description:
      "Soluciones para separar áreas y organizar recorridos vehiculares.",
    products: [
      "Barreras",
      "Delimitadores",
    ],
    category: "Señalización vial",
    icon: Construction,
  },

  {
    id: "topes-goma",
    number: "10",
    title: "Topes de goma",
    subtitle: "Control de estacionamiento",
    description:
      "Elementos para delimitar cajones y ayudar a controlar el avance de los vehículos.",
    products: [
      "Topes de estacionamiento",
      "Accesorios",
    ],
    category: "Señalización vial",
    icon: Construction,
  },

  {
    id: "botes-acero",
    number: "11",
    title: "Botes de acero inoxidable",
    subtitle: "Equipamiento urbano",
    description:
      "Equipamiento complementario para instalaciones y espacios comunes.",
    products: [
      "Botes de acero inoxidable",
      "Equipamiento",
    ],
    category: "Equipamiento urbano",
    icon: BookOpen,
  },
];

/* ========================================
   FILTROS
======================================== */

const filters = [
  "Todos",
  "Protección personal",
  "Señalización vial",
  "Equipamiento urbano",
] as const;

type Filter = (typeof filters)[number];

/* ========================================
   PÁGINA PRINCIPAL
======================================== */

export default function CatalogoPage() {
  const reduceMotion = useReducedMotion() ?? false;

  const [activeFilter, setActiveFilter] =
    useState<Filter>("Todos");

  const [searchQuery, setSearchQuery] =
    useState("");

  /* FILTRADO Y BÚSQUEDA */

  const visibleCatalogs = useMemo(() => {
    const query = searchQuery
      .trim()
      .toLocaleLowerCase("es");

    return catalogItems.filter((item) => {
      const matchesCategory =
        activeFilter === "Todos" ||
        item.category === activeFilter;

      const searchableText = [
        item.title,
        item.subtitle,
        item.description,
        item.category,
        ...item.products,
      ]
        .join(" ")
        .toLocaleLowerCase("es");

      return (
        matchesCategory &&
        searchableText.includes(query)
      );
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-white">

      <Navbar />

      {/* ========================================
          ENCABEZADO
      ======================================== */}

      <section className="px-5 pb-10 pt-32 sm:px-7 sm:pb-12 md:px-10 md:pt-36 lg:px-16">

        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
            }}
          >

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff6a00]" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/45 sm:text-[10px]">
                PROTEKTA / Biblioteca de productos
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">

              <div>

                <span className="text-[10px] font-medium tracking-[0.25em] text-[#ff6a00]">
                  02 / CATÁLOGOS
                </span>

                <h1 className="mt-3 text-[clamp(2.8rem,6vw,5.8rem)] font-black uppercase leading-[0.88] tracking-[-0.06em]">
                  Todo lo
                  <br />
                  que necesitas.
                </h1>

              </div>

              <p className="max-w-md text-sm leading-relaxed text-white/50 md:justify-self-end md:text-base">
                Encuentra catálogos de protección personal,
                señalización vial y equipamiento. Consulta
                cada línea desde un solo lugar.
              </p>

            </div>

          </motion.div>

          {/* BUSCADOR */}

          <div className="mt-10 flex flex-col gap-4 border-y border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between">

            <label className="flex min-h-12 w-full max-w-xl items-center gap-3 border border-white/10 bg-black/30 px-4 transition-colors focus-within:border-[#ff6a00]">

              <Search
                size={17}
                className="shrink-0 text-white/35"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Buscar cascos, chalecos, guantes..."
                aria-label="Buscar catálogos"
                className="h-12 min-w-0 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />

            </label>

            <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
              {visibleCatalogs.length}{" "}
              {visibleCatalogs.length === 1
                ? "catálogo"
                : "catálogos"}
            </p>

          </div>

          {/* FILTROS */}

          <div className="mt-5 flex flex-wrap gap-2">

            {filters.map((filter) => {
              const isActive =
                activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`min-h-10 border px-4 py-2 text-[10px] font-semibold transition-colors sm:text-xs ${
                    isActive
                      ? "border-[#ff6a00] bg-[#ff6a00] text-black"
                      : "border-white/10 bg-black/20 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}

          </div>

        </div>

      </section>

      {/* ========================================
          TARJETAS DE CATÁLOGOS
      ======================================== */}

      <section className="px-5 pb-20 sm:px-7 md:px-10 md:pb-28 lg:px-16">

        <div className="mx-auto max-w-[1500px]">

          {visibleCatalogs.length > 0 ? (

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

              {visibleCatalogs.map((item, index) => {
                const Icon = item.icon;

                // PDF específico o catálogo provisional
                const pdfPath =
                  item.pdf ?? PROVISIONAL_PDF;

                const isOfficial = Boolean(item.pdf);

                const downloadName =
                  item.fileName ??
                  `protekta-catalogo-${item.id}-provisional.pdf`;

                return (

                  <motion.article
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.12,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion
                        ? 0
                        : Math.min(index * 0.04, 0.2),
                    }}
                    className="group relative flex min-h-[390px] flex-col overflow-hidden border border-white/10 bg-[#111111]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#ff6a00]/45 sm:p-6"
                  >

                    {/* ICONO Y NÚMERO */}

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.025] text-[#ff6a00] transition-colors group-hover:border-[#ff6a00]/50 group-hover:bg-[#ff6a00]/[0.08]">
                        <Icon
                          size={22}
                          strokeWidth={1.5}
                        />
                      </div>

                      <span className="text-[10px] tracking-[0.2em] text-white/25">
                        {item.number}
                      </span>

                    </div>

                    {/* INFORMACIÓN */}

                    <div className="mt-7">

                      <div className="flex flex-wrap items-center gap-2">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ff6a00]">
                          {item.category}
                        </p>

                        <span className="text-white/20">
                          /
                        </span>

                        <span
                          className={`text-[8px] font-bold uppercase tracking-[0.12em] ${
                            isOfficial
                              ? "text-emerald-400"
                              : "text-white/35"
                          }`}
                        >
                          {isOfficial
                            ? "Catálogo específico"
                            : "Documento provisional"}
                        </span>

                      </div>

                      <h2 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-white/35">
                        {item.subtitle}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-white/50">
                        {item.description}
                      </p>

                    </div>

                    {/* FAMILIAS DE PRODUCTOS */}

                    <div className="mt-5 flex flex-wrap gap-2">

                      {item.products.map((product) => (
                        <span
                          key={product}
                          className="border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[9px] text-white/45"
                        >
                          {product}
                        </span>
                      ))}

                    </div>

                    {/* ACCIONES */}

                    <div className="mt-auto grid grid-cols-1 gap-2 pt-8 sm:grid-cols-2">

                      {/* VER PDF */}

                      <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#ff6a00] px-3 py-3 text-[9px] font-bold uppercase tracking-[0.08em] text-black transition-colors hover:bg-white sm:text-[10px]"
                      >
                        Ver catálogo

                        <ArrowUpRight size={14} />
                      </a>

                      {/* DESCARGAR PDF */}

                      <a
                        href={pdfPath}
                        download={downloadName}
                        className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/15 px-3 py-3 text-[9px] font-bold uppercase tracking-[0.08em] text-white/75 transition-colors hover:border-[#ff6a00] hover:text-white sm:text-[10px]"
                      >
                        Descargar PDF

                        <ArrowDownToLine size={14} />
                      </a>

                    </div>

                    {/* ACENTO SUPERIOR */}

                    <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-[#ff6a00] transition-transform duration-500 group-hover:scale-x-100" />

                  </motion.article>

                );
              })}

            </div>

          ) : (

            /* SIN RESULTADOS */

            <div className="flex min-h-[260px] flex-col items-center justify-center border border-white/10 bg-[#111111]/80 px-6 text-center backdrop-blur-md">

              <Search
                size={26}
                className="text-white/30"
              />

              <h2 className="mt-5 text-lg font-bold">
                No encontramos catálogos
              </h2>

              <p className="mt-2 max-w-sm text-sm text-white/45">
                Prueba con otro término o cambia el filtro seleccionado.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("Todos");
                }}
                className="mt-5 text-xs font-bold uppercase tracking-wide text-[#ff6a00] hover:text-white"
              >
                Mostrar todos los catálogos
              </button>

            </div>

          )}

          {/* AVISO DE DOCUMENTOS */}

          <div className="mt-6 flex items-start gap-3 border border-white/[0.08] bg-black/30 p-4 backdrop-blur-md sm:p-5">

            <BookOpen
              size={17}
              className="mt-0.5 shrink-0 text-[#ff6a00]"
            />

            <p className="text-xs leading-relaxed text-white/40">
              Los catálogos específicos corresponden a los documentos
              proporcionados por PROTEKTA. Las demás categorías utilizan
              temporalmente un catálogo general provisional. Consulta
              directamente con MATEI para confirmar especificaciones,
              disponibilidad y condiciones comerciales.
            </p>

          </div>

          {/* CONTACTO */}

          <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

            <div>

              <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                ¿Necesitas algo específico?
              </p>

              <p className="mt-2 text-lg font-bold sm:text-xl">
                Te ayudamos a encontrarlo.
              </p>

              <p className="mt-2 text-sm text-white/40">
                matei_company@hotmail.com · 56 1051 4050
              </p>

            </div>

            <a
              href="mailto:matei_company@hotmail.com?subject=Consulta%20sobre%20catalogos%20PROTEKTA"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-5 py-4 text-[10px] font-bold uppercase tracking-wide transition-colors hover:border-[#ff6a00] hover:bg-white/[0.025]"
            >
              Contactar a MATEI

              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* VOLVER AL INICIO */}

          <div className="mt-8">

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white"
            >
              Volver al inicio

              <ArrowUpRight size={13} />
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}
