"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Briefcase,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

type QuoteForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  quantity: string;
  urgency: string;
  details: string;
};

const initialForm: QuoteForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  category: "",
  quantity: "",
  urgency: "Sin fecha definida",
  details: "",
};

const contactDetails: {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}[] = [
  {
    title: "Correo",
    value: "matei_company@hotmail.com",
    description: "Consultas, información y cotizaciones.",
    href: "mailto:matei_company@hotmail.com?subject=Consulta%20PROTEKTA",
    icon: Mail,
  },
  {
    title: "Teléfono",
    value: "56 1051 4050",
    description: "Contacto telefónico con el equipo.",
    href: "tel:+525610514050",
    icon: Phone,
  },
  {
    title: "Ubicación",
    value: "Abrir ubicación en Google Maps",
    description: "Consulta la ubicación y organiza tu visita.",
    href: "https://maps.app.goo.gl/4y91kyDuZqyZ8uq58?g_st=aw",
    icon: MapPin,
    external: true,
  },
];

const socialProfiles: {
  name: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Instagram",
    href: "",
    icon: AtSign,
  },
  {
    name: "Facebook",
    href: "",
    icon: Users,
  },
];

const categories = [
  "Protección personal",
  "Señalización vial",
  "Equipamiento urbano",
  "Equipamiento industrial",
  "Otro / necesito orientación",
];

export default function ContactoPage() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const field = event.currentTarget.name as keyof QuoteForm;
    const value = event.currentTarget.value;

    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Solicitud de cotización PROTEKTA | ${form.name}`;

    const body = [
      "SOLICITUD DE COTIZACIÓN PROTEKTA",
      "",
      "DATOS DE CONTACTO",
      `Nombre: ${form.name}`,
      `Empresa: ${form.company || "No especificada"}`,
      `Correo: ${form.email}`,
      `Teléfono: ${form.phone || "No especificado"}`,
      "",
      "DETALLES DE LA SOLICITUD",
      `Categoría: ${form.category}`,
      `Cantidad aproximada: ${form.quantity || "Por definir"}`,
      `Fecha o urgencia: ${form.urgency}`,
      "",
      "DESCRIPCIÓN",
      form.details || "Sin comentarios adicionales.",
      "",
      "Solicitud preparada desde el sitio web de PROTEKTA.",
    ].join("\n");

    const mailtoUrl =
      `mailto:matei_company@hotmail.com?` +
      new URLSearchParams({
        subject,
        body,
      }).toString();

    setSubmitted(true);
    window.location.href = mailtoUrl;
  }

  const whatsappHref =
    "https://wa.me/525610514050?text=" +
    encodeURIComponent(
      "Hola, me interesa solicitar información y una cotización de PROTEKTA."
    );

  return (
    <>
      <Navbar />

      <main
        className="relative min-h-screen overflow-hidden bg-[#151616] pb-20 pt-32 text-[#f4f3ef] sm:pt-36 lg:pt-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px), radial-gradient(circle at 80% 4%, rgba(255,106,0,.08), transparent 32%)",
          backgroundSize: "48px 48px, 48px 48px, auto",
        }}
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          {/* HERO */}
          <section className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_.8fr] md:items-end lg:pb-16">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#ff6a00]" />
                <span className="text-[10px] uppercase tracking-[.25em] text-neutral-400 sm:text-xs">
                  PROTEKTA / CONTACTO
                </span>
              </div>

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.24em] text-[#ff7519]">
                Cuéntanos qué necesitas
              </p>

              <h1 className="max-w-5xl text-[clamp(3rem,7.5vw,7rem)] font-bold uppercase leading-[.89] tracking-[-.065em]">
                Hagamos
                <span className="block text-[#ff7519]">tu cotización.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
                Completa los detalles del proyecto para preparar una
                solicitud con la información necesaria sobre los productos
                que buscas.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#cotizacion"
                  className="inline-flex min-h-12 items-center gap-3 bg-[#ff6a00] px-5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[#e65f00]"
                >
                  Iniciar cotización
                  <ArrowDownRight size={16} />
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 text-xs font-bold uppercase tracking-wider transition-colors hover:border-[#ff6a00]"
                >
                  WhatsApp
                  <MessageCircle size={16} />
                </a>
              </div>
            </motion.div>

            {/* PANEL DE AYUDA */}
            <motion.aside
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="relative overflow-hidden border border-white/10 bg-[#1a1b1b]/90 p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#ff6a00]/20" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full border border-[#ff6a00]/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <ShieldCheck
                    size={27}
                    strokeWidth={1.3}
                    className="text-[#ff7519]"
                  />

                  <span className="text-[10px] uppercase tracking-[.2em] text-neutral-500">
                    Atención comercial
                  </span>
                </div>

                <h2 className="mt-8 text-2xl font-semibold uppercase leading-tight sm:text-3xl">
                  Una solicitud.
                  <span className="block text-neutral-500">
                    Todos los detalles importantes.
                  </span>
                </h2>

                <div className="mt-8 space-y-4">
                  {[
                    "Cuéntanos qué producto buscas.",
                    "Indica la cantidad aproximada.",
                    "Describe el uso o proyecto.",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-white/15 text-[10px] text-[#ff7519]">
                        0{index + 1}
                      </span>
                      <span className="leading-6">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </section>

          {/* FORMULARIO + CONTACTO */}
          <section
            id="cotizacion"
            className="grid scroll-mt-32 gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] lg:gap-14"
          >
            {/* FORMULARIO */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.1 }}
              className="min-w-0"
            >
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/15 pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff7519]">
                    01 / Solicitud comercial
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[-.035em] sm:text-3xl">
                    Formulario de cotización
                  </h2>
                </div>

                <span className="hidden text-[10px] uppercase tracking-wider text-neutral-500 sm:block">
                  * Campos obligatorios
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* DATOS */}
                <fieldset className="space-y-5">
                  <legend className="mb-5 text-[10px] font-semibold uppercase tracking-[.2em] text-neutral-400">
                    Datos de contacto
                  </legend>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium text-neutral-300"
                      >
                        Nombre completo *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={updateField}
                        required
                        autoComplete="name"
                        placeholder="Tu nombre"
                        className="h-12 w-full border border-white/15 bg-white/[.025] px-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#ff6a00]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-xs font-medium text-neutral-300"
                      >
                        Empresa
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={updateField}
                        autoComplete="organization"
                        placeholder="Nombre de la empresa"
                        className="h-12 w-full border border-white/15 bg-white/[.025] px-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#ff6a00]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-neutral-300"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={updateField}
                        required
                        autoComplete="email"
                        placeholder="nombre@empresa.com"
                        className="h-12 w-full border border-white/15 bg-white/[.025] px-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#ff6a00]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-medium text-neutral-300"
                      >
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={updateField}
                        autoComplete="tel"
                        placeholder="Tu teléfono de contacto"
                        className="h-12 w-full border border-white/15 bg-white/[.025] px-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#ff6a00]"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* PROYECTO */}
                <fieldset className="space-y-5 border-t border-white/10 pt-7">
                  <legend className="mb-5 text-[10px] font-semibold uppercase tracking-[.2em] text-neutral-400">
                    ¿Qué necesitas cotizar?
                  </legend>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="category"
                        className="mb-2 block text-xs font-medium text-neutral-300"
                      >
                        Categoría *
                      </label>

                      <select
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={updateField}
                        required
                        className="h-12 w-full border border-white/15 bg-[#1a1b1b] px-4 text-sm text-white outline-none transition-colors focus:border-[#ff6a00]"
                      >
                        <option value="" disabled>
                          Selecciona una categoría
                        </option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="quantity"
                        className="mb-2 block text-xs font-medium text-neutral-300"
                      >
                        Cantidad aproximada
                      </label>

                      <input
                        id="quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={updateField}
                        placeholder="Ej. 50 piezas"
                        className="h-12 w-full border border-white/15 bg-white/[.025] px-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#ff6a00]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="urgency"
                        className="mb-2 block text-xs font-medium text-neutral-300"
                      >
                        Fecha o prioridad
                      </label>

                      <select
                        id="urgency"
                        name="urgency"
                        value={form.urgency}
                        onChange={updateField}
                        className="h-12 w-full border border-white/15 bg-[#1a1b1b] px-4 text-sm text-white outline-none transition-colors focus:border-[#ff6a00]"
                      >
                        <option>Sin fecha definida</option>
                        <option>Lo antes posible</option>
                        <option>Durante esta semana</option>
                        <option>Durante este mes</option>
                        <option>Es para un proyecto futuro</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="details"
                        className="mb-2 block text-xs font-medium text-neutral-300"
                      >
                        Describe tu solicitud
                      </label>

                      <textarea
                        id="details"
                        name="details"
                        value={form.details}
                        onChange={updateField}
                        rows={5}
                        placeholder="Especifica el tipo de producto, sus características, el uso previsto o cualquier detalle importante."
                        className="w-full resize-y border border-white/15 bg-white/[.025] px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#ff6a00]"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* ENVÍO */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs leading-6 text-neutral-500">
                    Al continuar se preparará un correo con los datos
                    proporcionados para que puedas revisar y enviar tu
                    solicitud desde tu aplicación de correo.
                  </p>

                  <button
                    type="submit"
                    className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#ff6a00] px-6 text-xs font-bold uppercase tracking-[.14em] text-white transition-colors hover:bg-[#e65f00] sm:w-auto"
                  >
                    Preparar solicitud de cotización
                    <Send size={17} />
                  </button>

                  {submitted && (
                    <div
                      role="status"
                      className="mt-5 flex items-start gap-3 border border-[#ff6a00]/30 bg-[#ff6a00]/[.06] p-4 text-sm leading-6 text-neutral-300"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#ff7519]"
                      />
                      <p>
                        La solicitud se ha preparado. Revisa tu aplicación
                        de correo y pulsa Enviar para completarla. Si no se
                        abre, escribe a{" "}
                        <a
                          href="mailto:matei_company@hotmail.com"
                          className="text-white underline decoration-[#ff6a00] underline-offset-4"
                        >
                          matei_company@hotmail.com
                        </a>
                        .
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </motion.div>

            {/* CONTACTO Y REDES */}
            <motion.aside
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.1 }}
              className="min-w-0"
            >
              <div className="border border-white/10 bg-[#1a1b1b]/90 p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff7519]">
                  02 / Canales directos
                </p>

                <h2 className="mt-4 text-2xl font-semibold uppercase tracking-[-.035em]">
                  Contacta al equipo.
                </h2>

                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  Utiliza el medio que te resulte más conveniente para
                  consultar productos y disponibilidad.
                </p>

                <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-start gap-4 py-5"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#ff7519] transition-colors group-hover:border-[#ff6a00]/50 group-hover:bg-[#ff6a00]/[.06]">
                          <Icon size={20} strokeWidth={1.4} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <span className="block text-[10px] uppercase tracking-[.16em] text-neutral-500">
                            {item.title}
                          </span>

                          <span className="mt-2 block break-words text-sm font-medium text-white transition-colors group-hover:text-[#ff7519]">
                            {item.value}
                          </span>

                          <span className="mt-2 block text-xs leading-5 text-neutral-400">
                            {item.description}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={16}
                          className="mt-1 shrink-0 text-neutral-500 transition-colors group-hover:text-[#ff7519]"
                        />
                      </a>
                    );
                  })}
                </div>

                {/* WHATSAPP */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex min-h-12 w-full items-center justify-between gap-3 border border-[#ff6a00]/40 bg-[#ff6a00]/[.06] px-4 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[#ff6a00]/[.12]"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle size={18} className="text-[#ff7519]" />
                    Consultar por WhatsApp
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* REDES SOCIALES */}
              <div className="mt-5 border border-white/10 bg-[#1a1b1b]/90 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff7519]">
                      03 / Redes sociales
                    </p>

                    <h2 className="mt-3 text-xl font-semibold uppercase">
                      Sigamos conectados.
                    </h2>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-neutral-500"
                  />
                </div>

                <div className="mt-6 space-y-2">
                  {socialProfiles.map((profile) => {
                    const Icon = profile.icon;

                    if (!profile.href) {
                      return (
                        <div
                          key={profile.name}
                          className="flex items-center gap-3 border border-white/[.06] px-4 py-3 text-neutral-500"
                        >
                          <Icon size={18} />
                          <span className="text-sm">{profile.name}</span>
                          <span className="ml-auto text-[9px] uppercase tracking-wider">
                            Por configurar
                          </span>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={profile.name}
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border border-white/10 px-4 py-3 text-neutral-300 transition-colors hover:border-[#ff6a00]/50 hover:text-white"
                      >
                        <Icon size={18} className="text-[#ff7519]" />
                        <span className="text-sm">{profile.name}</span>
                        <ArrowUpRight
                          size={15}
                          className="ml-auto text-neutral-500"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          </section>

          {/* CIERRE */}
          <section className="border-t border-white/15 pt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[.22em] text-neutral-500">
                  PROTEKTA · MATEI
                </p>

                <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[-.035em]">
                  ¿Prefieres explorar primero?
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/catalogo"
                  className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 text-xs font-bold uppercase tracking-wider transition-colors hover:border-[#ff6a00]"
                >
                  Ir al catálogo
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/industrias"
                  className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 text-xs font-bold uppercase tracking-wider transition-colors hover:border-[#ff6a00]"
                >
                  Ver industrias
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-8 flex flex-col gap-2 text-[9px] uppercase tracking-[.18em] text-neutral-500 sm:flex-row sm:justify-between">
            <span>PROTEKTA · MATEI</span>
            <span>Protección industrial · Seguridad vial · Espacios urbanos</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}