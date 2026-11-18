
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { featuredProducts } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section
      id="destacados"
      className="relative overflow-hidden bg-transparent px-6 py-24 text-white md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"
        >
          <div>

            {/* EYEBROW */}

            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#ff6a00]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#ff6a00]">
                Selección PROTEKTA
              </span>
            </div>

            {/* TITLE */}

            <h2 className="max-w-3xl text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.065em]">
              LOS MÁS
              <br />
              <span className="text-[#ff6a00]">
                SOLICITADOS.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/55 md:text-base">
              Equipamiento que destaca por su calidad, funcionalidad
              y confianza. Descubre algunos de los productos favoritos
              de nuestros clientes.
            </p>

          </div>

          {/* LINK AL CATÁLOGO */}

          <Link
            href="/catalogo"
            className="group inline-flex w-fit items-center gap-4 border-b border-white/20 pb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#ff6a00] hover:text-[#ff6a00]"
          >
            Explorar catálogo completo

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

        {/* PRODUCTS GRID */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {featuredProducts.map((product, index) => (

            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: index * 0.1,
                duration: 0.65,
              }}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-[#111111]/65 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6a00]/50"
            >

              {/* PRODUCT IMAGE */}

              <div className="relative aspect-[4/4.5] overflow-hidden bg-white/[0.035]">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-7 transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* IMAGE OVERLAY */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* CATEGORY */}

                <div className="absolute left-4 top-4 border border-white/15 bg-black/70 px-3 py-2 backdrop-blur-sm">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                    {product.category}
                  </span>
                </div>

                {/* POSITION */}

                <div className="absolute bottom-4 right-5">
                  <span className="text-5xl font-black tracking-tighter text-white/25 transition-colors duration-500 group-hover:text-[#ff6a00]">
                    0{index + 1}
                  </span>
                </div>

                {/* HOVER ACCENT */}

                <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#ff6a00] transition-transform duration-500 group-hover:scale-x-100" />

              </div>

              {/* PRODUCT INFORMATION */}

              <div className="flex flex-1 flex-col p-6">

                {/* BRAND */}

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#ff6a00]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff6a00]">
                    {product.brand}
                  </p>
                </div>

                {/* NAME */}

                <h3 className="mt-4 text-xl font-black uppercase leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-[#ff6a00]">
                  {product.name}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-3 line-clamp-3 flex-1 text-xs leading-6 text-white/45">
                  {product.description}
                </p>

                {/* BOTTOM */}

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      size={15}
                      className="text-[#ff6a00]"
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">
                      Protección industrial
                    </span>
                  </div>

                  {/* LINK AL CATÁLOGO */}

                  <Link
                    href="/catalogo"
                    aria-label={`Explorar catálogo: ${product.name}`}
                    className="flex h-9 w-9 items-center justify-center border border-white/15 text-white transition-all duration-300 hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-black"
                  >
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

        {/* BOTTOM BANNER */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col justify-between gap-6 border border-white/10 bg-black/30 p-7 backdrop-blur-md md:flex-row md:items-center md:px-10"
        >

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff6a00]">
              Encuentra lo que necesitas
            </p>

            <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white md:text-2xl">
              Seguridad para cada industria.
            </h3>
          </div>

          {/* LINK AL CATÁLOGO */}

          <Link
            href="/catalogo"
            className="group flex w-fit items-center gap-4 bg-[#ff6a00] px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-white"
          >
            CONOCER PRODUCTOS

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
