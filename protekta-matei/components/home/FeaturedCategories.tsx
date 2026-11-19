
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Cascos",
    description: "Protección para cabeza",
    image: "/images/casco.webp",
    className: "md:col-span-2",
  },
  {
    number: "02",
    title: "Lentes",
    description: "Protección visual",
    image: "/images/lentes.webp",
    className: "md:col-span-1",
  },
  {
    number: "03",
    title: "Guantes",
    description: "Protección para manos",
    image: "/images/guantes.webp",
    className: "md:col-span-1",
  },
  {
    number: "04",
    title: "Calzado",
    description: "Seguridad para tus pasos",
    image: "/images/calzado.webp",
    className: "md:col-span-2",
  },
  {
    number: "05",
    title: "Respiradores",
    description: "Protección respiratoria",
    image: "/images/respiradores.webp",
    className: "md:col-span-1",
  },
  {
    number: "06",
    title: "Alta visibilidad",
    description: "Visibilidad y señalización",
    image: "/images/alta-visibilidad.webp",
    className: "md:col-span-1",
  },
  {
    number: "07",
    title: "Señalética vial",
    description: "Seguridad para cada entorno",
    image: "/images/señaletica-vial.webp",
    className: "md:col-span-1",
  },
];

export default function FeaturedCategories() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[#080808]
        py-16 sm:py-20 md:py-24 lg:py-32
      "
    >
      {/* DECORATION */}
      <div
        className="
          pointer-events-none absolute right-0 top-0
          h-[250px] w-[250px]
          rounded-full bg-[#ff6a00]/5 blur-[100px]
          sm:h-[400px] sm:w-[400px]
          md:h-[500px] md:w-[500px] md:blur-[140px]
        "
      />

      <div
        className="
          relative z-10 mx-auto
          w-full max-w-[1500px]
          px-5 sm:px-8 md:px-10 lg:px-16
        "
      >
        {/* HEADER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mb-10 flex min-w-0 flex-col
            gap-6 sm:mb-12 sm:gap-8
            md:mb-14 md:flex-row md:items-end md:justify-between
          "
        >
          <div className="min-w-0">
            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-3 sm:gap-4">
              <span className="h-[2px] w-8 shrink-0 bg-[#ff6a00] sm:w-10" />

              <span
                className="
                  text-[9px] font-semibold uppercase
                  tracking-[0.25em] text-white/40
                  sm:text-[10px] sm:tracking-[0.35em]
                "
              >
                Explora nuestra selección
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                max-w-3xl
                text-[clamp(2.35rem,9vw,5.5rem)]
                font-black uppercase
                leading-[0.92]
                tracking-[-0.06em]
                text-white
                sm:text-[clamp(3rem,6vw,5.5rem)]
                md:leading-[0.9]
                md:tracking-[-0.05em]
              "
            >
              Todo lo que
              <br />
              necesitas para
              <br />
              <span className="text-[#ff6a00]">
                estar seguro.
              </span>
            </h2>
          </div> 

          {/* DESCRIPTION */}
          <div className="w-full max-w-sm md:pb-2">
            <p className="text-sm leading-7 text-white/45 sm:text-base">
              Encuentra soluciones de protección diseñadas
              para responder a las exigencias de cada
              industria y cada jornada de trabajo.
            </p>

            <a
              href="/catalogo"
              className="
                group mt-6 inline-flex min-h-11
                items-center gap-3
                text-xs font-bold uppercase tracking-wide
                text-white
                transition-colors duration-300
                hover:text-[#ff6a00]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#ff6a00]
              "
            >
              Ver catálogo completo

              <span
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  border border-white/20
                  transition-colors duration-300
                  group-hover:border-[#ff6a00]
                  group-hover:bg-[#ff6a00]
                  group-hover:text-black
                "
              >
                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </a> 
          </div> 
        </motion.div>

        {/* CATEGORY GRID */}
        <div
          className="
            grid grid-cols-1 gap-3
            sm:grid-cols-2
            md:grid-cols-3
            md:gap-4
          "
        >
          {categories.map((category) => (
            <a
              key={category.title}
              href="/catalogo"
              className={`
                group relative isolate
                block min-w-0
                min-h-[260px]
                overflow-hidden
                border border-white/10
                bg-[#111111]
                outline-none
                transition-colors duration-300
                hover:border-[#ff6a00]/50
                focus-visible:ring-2
                focus-visible:ring-[#ff6a00]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
                sm:min-h-[300px]
                md:min-h-[320px]
                lg:min-h-[360px]
                ${category.className}
              `}
            > 
              {/* IMAGE */}
              <div
                className="
                  absolute inset-0
                  bg-cover bg-center
                  transition-transform duration-700 ease-out
                  md:group-hover:scale-105
                "
                style={{
                  backgroundImage: `url("${category.image}")`,
                }}
              />

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-black/40
                  transition-colors duration-500
                  md:group-hover:bg-black/25
                "
              />

              {/* GRADIENT */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black via-black/25 to-transparent
                "
              />

              {/* ORANGE LIGHT */}
              <div
                className="
                  pointer-events-none absolute
                  -right-20 -top-20
                  h-48 w-48 rounded-full
                  bg-[#ff6a00]/0 blur-[80px]
                  transition-colors duration-700
                  md:group-hover:bg-[#ff6a00]/20
                "
              />

              {/* NUMBER */}
              <span
                className="
                  absolute right-5 top-5 z-10
                  text-[10px] tracking-[0.2em]
                  text-white/60
                  transition-colors duration-300
                  md:right-6 md:top-6
                  md:group-hover:text-[#ff6a00]
                "
              >
                {category.number}
              </span>

              {/* CONTENT */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 z-10
                  p-5 sm:p-6 md:p-7
                "
              >
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <h3
                      className="
                        text-xl font-bold uppercase
                        tracking-tight text-white
                        transition-transform duration-500
                        sm:text-2xl
                        md:group-hover:translate-x-2
                      "
                    >
                      {category.title}
                    </h3>

                    <p
                      className="
                        mt-2 text-[9px] uppercase
                        tracking-[0.15em] text-white/55
                        sm:text-[10px]
                        sm:tracking-[0.18em]
                      "
                    >
                      {category.description}
                    </p> 
                  </div>

                  {/* ARROW */}
                  <div
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      border border-white/30
                      bg-black/20 text-white
                      transition-colors duration-300
                      sm:h-10 sm:w-10
                      md:group-hover:border-[#ff6a00]
                      md:group-hover:bg-[#ff6a00]
                      md:group-hover:text-black
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform duration-300
                        md:group-hover:translate-x-0.5
                        md:group-hover:-translate-y-0.5
                      "
                    />
                  </div> 
                </div> 
              </div>

              {/* TOP BORDER */}
              <div
                className="
                  absolute left-0 right-0 top-0
                  h-[2px] origin-left scale-x-0
                  bg-[#ff6a00]
                  transition-transform duration-500
                  md:group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </div> 
      </div>
    </section>
  );
}
