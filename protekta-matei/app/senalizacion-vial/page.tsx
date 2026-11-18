import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

export default function SenalizacionVialPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <section className="relative flex min-h-[80vh] items-center overflow-hidden px-6 pb-20 pt-32 md:px-10 lg:px-16">
        {/* LUZ AMBIENTAL */}
        <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#ff6a00]/[0.06] blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#ff6a00]" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/45">
              PROTEKTA / Soluciones viales
            </span>
          </div>

          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.06em]">
            El camino
            <br />
            también
            <br />
            <span className="text-[#ff6a00]">se protege.</span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
            Estamos preparando un espacio dedicado a nuestras
            soluciones de señalización vial, delimitación y
            equipamiento para estacionamientos.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:matei_company@hotmail.com?subject=Informacion%20sobre%20senalizacion%20vial"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#ff6a00] px-6 py-4 text-xs font-bold uppercase tracking-wide text-black transition-colors hover:bg-white"
            >
              Solicitar información
              <ArrowUpRight size={16} />
            </a>

            <Link
              href="/"
              className="inline-flex min-h-12 items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/55 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>

          <div className="mt-16 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.22em] text-white/30">
            PROTEKTA · MATEI
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}