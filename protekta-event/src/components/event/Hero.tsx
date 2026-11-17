
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="event-grid relative flex min-h-screen items-center overflow-hidden">

      <div className="orange-glow absolute -right-40 top-20 h-[600px] w-[600px] rounded-full" />

      <div className="noise absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-20 pt-40 lg:grid-cols-[1.3fr_.7fr] lg:px-12">

        <div>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-[1px] w-10 bg-[#E87524]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#E87524]">
              Un nuevo espacio comienza
            </span>
          </div>

          <p className="mb-4 text-sm font-medium tracking-[0.4em] text-gray-400">
            PROTEKTA PRESENTA
          </p>

          <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl lg:text-[105px]">
            GRAND
            <br />
            <span className="text-[#E87524]">OPENING</span>
          </h1>

          <div className="mt-10 max-w-xl border-l-2 border-[#E87524] pl-6">
            <p className="text-xl leading-relaxed text-gray-300">
              La protección industrial tiene un nuevo punto de encuentro.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Te invitamos a conocer nuestro nuevo espacio dedicado a la
              seguridad, protección y soluciones industriales.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5">

            <a
              href="#registro"
              className="group flex items-center gap-5 bg-[#E87524] px-7 py-5 text-xs font-black tracking-[0.15em] text-black transition hover:bg-white"
            >
              OBTENER MI ACREDITACIÓN
              <ArrowUpRight size={17} />
            </a>

            <span className="text-xs text-gray-500">
              ACCESO MEDIANTE REGISTRO
            </span>

          </div>
        </div>

        <div className="relative hidden lg:block">

          <div className="absolute -right-4 -top-4 h-full w-full border border-[#E87524]/30" />

          <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden border border-white/10 bg-[#191919] p-8">

            <div className="absolute inset-0 bg-gradient-to-br from-[#E87524]/15 via-transparent to-transparent" />

            <div className="relative">
              <p className="text-[10px] tracking-[0.3em] text-[#E87524]">
                EVENT / 001
              </p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none">
                SAFETY
                <br />
                STARTS
                <br />
                HERE<span className="text-[#E87524]">.</span>
              </h2>
            </div>

            <div className="relative">
              <div className="mb-5 h-px w-full bg-white/20" />

              <div className="flex justify-between">
                <div>
                  <p className="text-[9px] tracking-[0.2em] text-gray-500">
                    FECHA
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    21.11.26
                  </p>
                </div>

                <div>
                  <p className="text-[9px] tracking-[0.2em] text-gray-500">
                    HORA
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    13:00 H
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[9px] tracking-[0.3em] text-gray-600">
                PROTEKTA / INDUSTRIAL PROTECTION
              </p>
            </div>

          </div>
        </div>

      </div>

      <a
        href="#evento"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[9px] tracking-[0.3em] text-gray-500"
      >
        SCROLL TO EXPLORE
        <ArrowDown size={15} />
      </a>

    </section>
  );
}
