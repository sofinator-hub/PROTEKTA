"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = [
  {
    title: "Explora",
    links: [
      { name: "Inicio", href: "/" },
      { name: "Catálogo", href: "/catalogo" },
      { name: "Productos", href: "/catalogo" },
      { name: "Marcas", href: "/marcas" },
    ],
  },
  {
    title: "Soluciones",
    links: [
      { name: "Industrias", href: "/industrias" },
      { name: "Construcción", href: "/industrias" },
      { name: "Manufactura", href: "/industrias" },
      { name: "Logística", href: "/industrias" },
      { name: "Señalización vial", href: "/senalizacion-vial" },
    ],
  },
  {
    title: "PROTEKTA",
    links: [
      { name: "Nosotros", href: "/nosotros" },
      {
        name: "Contacto",
        href: "mailto:matei_company@hotmail.com",
      },
    ],
  },
];

const locationUrl =
  "https://maps.app.goo.gl/4y91kyDuZqyZ8uq58?g_st=aw";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#050505] text-white">

      {/* FOOTER PRINCIPAL */}
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-7 sm:py-16 md:px-10 md:py-20 lg:px-16">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">

          {/* MARCA Y CONTACTO */}
          <div>
            <Link
              href="/"
              aria-label="PROTEKTA, ir al inicio"
              className="inline-flex items-center"
            >
              <img
                src="/images/logo1.webp"
                alt="PROTEKTA"
                className="h-auto w-[150px] object-contain sm:w-[165px]"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              Soluciones de protección y equipamiento para
              personas, empresas e industrias.
            </p>

            {/* CONTACTOS FUNCIONALES */}
            <div className="mt-7 space-y-4">

              <a
                href="mailto:matei_company@hotmail.com"
                className="group flex items-start gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#ff6a00]"
                />

                <span className="break-all">
                  matei_company@hotmail.com
                </span>

                <ArrowUpRight
                  size={13}
                  className="mt-0.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </a>

              <a
                href="tel:+525610514050"
                className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Phone
                  size={16}
                  className="shrink-0 text-[#ff6a00]"
                />

                <span>56 1051 4050</span>

                <ArrowUpRight
                  size={13}
                  className="shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </a>

              <a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#ff6a00]"
                />

                <span>Ver ubicación en Google Maps</span>

                <ArrowUpRight
                  size={13}
                  className="mt-0.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </a>

            </div>
          </div>

          {/* COLUMNAS DE NAVEGACIÓN */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff6a00]">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                      >
                        {link.name}

                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                      >
                        {link.name}

                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* LLAMADA A LA ACCIÓN */}
        <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10 md:mt-20">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                ¿Tienes un proyecto?
              </p>

              <h2 className="mt-3 max-w-2xl text-[clamp(1.7rem,3.2vw,3.2rem)] font-black uppercase leading-[0.95] tracking-[-0.04em]">
                Hagamos que la
                <br />
                seguridad avance.
              </h2>
            </div>

            <a
              href="mailto:matei_company@hotmail.com?subject=Consulta%20sobre%20un%20proyecto"
              className="group inline-flex min-h-12 w-fit items-center gap-4 bg-[#ff6a00] px-6 py-4 text-xs font-bold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-white"
            >
              Hablemos

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-5 text-[8px] uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between sm:px-7 md:px-10 lg:px-16 sm:text-[9px]">

          <span>
            © {new Date().getFullYear()} PROTEKTA · MATEI
          </span>

          <span>Soluciones para cada entorno</span>

        </div>
      </div>

    </footer>
  );
}