
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { featuredProducts } from "@/data/products";

export default function FeaturedProducts() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="destacados"
      className="
        relative isolate overflow-hidden
        bg-transparent
        px-5 py-16 text-white
        sm:px-8 sm:py-20
        md:px-10 md:py-28
        lg:px-16 lg:py-32
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* HEADER */} 
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            mb-10 flex min-w-0 flex-col
            gap-7 sm:mb-12 sm:gap-8
            lg:mb-16 lg:flex-row lg:items-end lg:justify-between
          "
        >
          <div className="min-w-0">

            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-[2px] w-8 shrink-0 bg-[#ff6a00] sm:w-10" />

              <span className="
                text-[9px] font-bold uppercase
                tracking-[0.25em] text-[#ff6a00]
                sm:text-[10px] sm:tracking-[0.35em]
              ">
                Selección PROTEKTA
              </span>
            </div>

            {/* TITLE */}
            <h2 className="
              max-w-3xl
              text-[clamp(2.6rem,10vw,5rem)]
              font-black uppercase
              leading-[0.9]
              tracking-[-0.065em]
              sm:text-[clamp(3.2rem,7vw,6rem)]
              md:leading-[0.88]
            ">
              LOS MÁS
              <br />
              <span className="text-[#ff6a00]">
                SOLICITADOS.
              </span>
            </h2>

            <p className="
              mt-5 max-w-lg
              text-sm leading-7 text-white/55
              sm:mt-7 sm:text-base
            ">
              Equipamiento que destaca por su calidad, funcionalidad
              y confianza. Descubre algunos de los productos favoritos
              de nuestros clientes.
            </p>
          </div> 

          {/* CATALOG LINK */}
          <Link
            href="/catalogo"
            className="
              group inline-flex min-h-11 w-fit
              items-center gap-3
              border-b border-white/20 pb-3
              text-[10px] font-bold uppercase
              tracking-[0.15em] text-white
              transition-colors duration-300
              hover:border-[#ff6a00] hover:text-[#ff6a00]
              sm:gap-4 sm:text-[11px]
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#ff6a00]
            "
          >
            Explorar catálogo completo

            <ArrowUpRight
              size={18}
              className="
                transition-transform duration-300
                md:group-hover:-translate-y-1
                md:group-hover:translate-x-1
              "
            />
          </Link> 
        </motion.div>

        {/* PRODUCTS GRID */}
        <div className="
          grid grid-cols-1 gap-4
          sm:grid-cols-2
          xl:grid-cols-4 xl:gap-5
        ">
          {featuredProducts.map((product, index) => (
            <article
              key={product.id}
              className="
                group relative flex min-w-0
                flex-col overflow-hidden
                border border-white/10
                bg-[#111111]/80
                transition-colors duration-300
                hover:border-[#ff6a00]/50
                md:hover:-translate-y-1
              "
            >

              {/* PRODUCT IMAGE */}
              <div className="
                relative aspect-[4/4.5]
                w-full overflow-hidden
                bg-white/[0.035]
              ">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    25vw
                  "
                  className="
                    object-contain p-6
                    sm:p-7
                    md:transition-transform
                    md:duration-700
                    md:ease-out
                    md:group-hover:scale-105
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-black/60 via-transparent to-black/10
                " />

                {/* CATEGORY */}
                <div className="
                  absolute left-3 top-3
                  max-w-[75%]
                  border border-white/15
                  bg-black/80
                  px-3 py-2
                  sm:left-4 sm:top-4
                ">
                  <span className="
                    block truncate
                    text-[8px] font-bold uppercase
                    tracking-[0.15em] text-white
                    sm:text-[9px] sm:tracking-[0.2em]
                  ">
                    {product.category}
                  </span>
                </div>

                {/* POSITION */}
                <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-5">
                  <span className="
                    text-4xl font-black
                    tracking-tighter text-white/25
                    transition-colors duration-500
                    md:text-5xl
                    md:group-hover:text-[#ff6a00]
                  ">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* HOVER ACCENT */}
                <div className="
                  absolute bottom-0 left-0
                  h-[3px] w-full origin-left
                  scale-x-0 bg-[#ff6a00]
                  transition-transform duration-500
                  md:group-hover:scale-x-100
                " />
              </div>

              {/* PRODUCT INFORMATION */}
              <div className="
                flex flex-1 flex-col
                p-5 sm:p-6
              ">
 
                {/* BRAND */} 
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 bg-[#ff6a00]" />

                  <p className="
                    truncate text-[9px] font-bold
                    uppercase tracking-[0.2em]
                    text-[#ff6a00] sm:text-[10px]
                    sm:tracking-[0.25em]
                  ">
                    {product.brand}
                  </p>
                </div>

                {/* NAME */}
                <h3 className="
                  mt-3 text-lg font-black
                  uppercase leading-tight
                  tracking-tight text-white
                  transition-colors duration-300
                  sm:mt-4 sm:text-xl
                  md:group-hover:text-[#ff6a00]
                ">
                  {product.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="
                  mt-3 line-clamp-3 flex-1
                  text-xs leading-6 text-white/45
                ">
                  {product.description}
                </p>

                {/* BOTTOM */}
                <div className="
                  mt-6 flex items-center
                  justify-between gap-2
                  border-t border-white/10 pt-4
                  sm:mt-7 sm:pt-5
                ">
                  <div className="flex min-w-0 items-center gap-2">
                    <ShieldCheck
                      size={15}
                      className="shrink-0 text-[#ff6a00]"
                    />

                    <span className="
                      text-[8px] font-bold
                      uppercase tracking-[0.1em]
                      text-white/45
                      sm:text-[9px] sm:tracking-[0.15em]
                    ">
                      Protección industrial
                    </span>
                  </div> 

                  <Link
                    href="/catalogo"
                    aria-label={`Explorar catálogo: ${product.name}`}
                    className="
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      border border-white/15
                      text-white
                      transition-colors duration-300
                      hover:border-[#ff6a00]
                      hover:bg-[#ff6a00]
                      hover:text-black
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#ff6a00]
                    "
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div> 
              </div> 
            </article>
          ))}
        </div> 

        {/* BOTTOM BANNER */}
        <motion.div 
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="
            mt-8 flex flex-col
            gap-6 border border-white/10
            bg-black/40 p-5
            sm:mt-10 sm:p-7
            md:mt-12 md:flex-row
            md:items-center md:justify-between
            md:px-10
          "
        >
          <div className="min-w-0">
            <p className="
              text-[9px] font-bold uppercase
              tracking-[0.25em] text-[#ff6a00]
              sm:text-[10px] sm:tracking-[0.3em]
            ">
              Encuentra lo que necesitas
            </p>

            <h3 className="
              mt-2 text-lg font-black
              uppercase leading-tight
              tracking-tight text-white
              sm:text-xl md:text-2xl
            ">
              Seguridad para cada industria.
            </h3>
          </div> 

          <Link
            href="/catalogo"
            className="
              group flex min-h-[50px]
              w-full items-center
              justify-between gap-4
              bg-[#ff6a00] px-5 py-4
              text-[9px] font-black
              uppercase tracking-[0.12em]
              text-black
              transition-colors duration-300
              hover:bg-white
              sm:w-fit sm:justify-center
              sm:px-6 sm:text-[10px]
            "
          >
            CONOCER PRODUCTOS

            <ArrowRight
              size={17}
              className="
                shrink-0 transition-transform duration-300
                md:group-hover:translate-x-1
              "
            />
          </Link>  
        </motion.div> 
      </div>
    </section>
  );
}
