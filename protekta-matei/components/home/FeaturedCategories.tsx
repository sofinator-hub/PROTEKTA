"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 md:py-32">

      {/* DECORATION */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ff6a00]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >

          <div>

            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#ff6a00]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Explora nuestra selección
              </span>
            </div>

            {/* TITLE */}
            <h2 className="max-w-3xl text-[clamp(2.8rem,5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]">
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
          <div className="max-w-sm md:pb-2">

            <p className="text-sm leading-relaxed text-white/45">
              Encuentra soluciones de protección diseñadas
              para responder a las exigencias de cada
              industria y cada jornada de trabajo.
            </p>

            <a
              href="/catalogo"
              className="group mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-white"
            >
              Ver catálogo completo

              <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-black">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>

          </div>

        </motion.div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

          {categories.map((category, index) => (
            <motion.a
              key={category.title}
              href="/catalogo"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              className={`group relative min-h-[300px] overflow-hidden border border-white/10 bg-[#111111] ${category.className}`}
            >

              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/20" />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* ORANGE LIGHT */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#ff6a00]/0 blur-[80px] transition-all duration-700 group-hover:bg-[#ff6a00]/20" />

              {/* NUMBER */}
              <span className="absolute right-6 top-6 z-10 text-[10px] tracking-[0.2em] text-white/60 transition-colors duration-300 group-hover:text-[#ff6a00]">
                {category.number}
              </span>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-7">

                <div className="flex items-end justify-between gap-4">

                  <div>

                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white transition-transform duration-500 group-hover:translate-x-2">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/55">
                      {category.description}
                    </p>

                  </div>

                  {/* ARROW */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 bg-black/20 text-white transition-all duration-500 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-black">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                </div>

              </div>

              {/* TOP BORDER */}
              <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#ff6a00] transition-transform duration-500 group-hover:scale-x-100" />

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}