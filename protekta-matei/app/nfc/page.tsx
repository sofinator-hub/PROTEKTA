
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Camera,
  Globe2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const contacts = [
  {
    name: "WhatsApp",
    detail: "+52 55 6499 7750",
    href: "https://wa.me/525564997750",
    icon: MessageCircle,
    accent: true,
  },
  {
    name: "Correo electrónico",
    detail: "protektatlalpan@gmail.com",
    href: "mailto:protektatlalpan@gmail.com",
    icon: Mail,
  },
  {
    name: "Instagram",
    detail: "@protektatlalpan",
    href: "https://www.instagram.com/protektatlalpan/",
    icon: Camera,
  },
  {
    name: "Sitio web",
    detail: "protekta.com.mx",
    href: "https://protekta.com.mx/",
    icon: Globe2,
  },
];

export default function NFCPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-[#090a0a] px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(3rem,env(safe-area-inset-top))] text-white sm:justify-center sm:px-8">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(232,112,28,0.13),transparent_55%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

        <div className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-600/[0.07] blur-[100px]" />
      </div>

      {/* CENTERED ANIMATION */}
      <div className="relative mb-12 mt-5 flex h-32 w-32 shrink-0 items-center justify-center sm:mb-14 sm:mt-0">

        {!reduceMotion && (
          <motion.div
            className="absolute inset-0 rounded-[38px] border border-orange-500/30"
            animate={{
              scale: [1, 1.32, 1],
              opacity: [0.65, 0, 0.65],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        <div className="absolute inset-2 rounded-[32px] border border-orange-500/20 bg-gradient-to-br from-orange-500/15 via-[#171310] to-[#101010] shadow-[0_0_70px_rgba(249,115,22,0.14)]" />

        <div className="absolute inset-4 rounded-[25px] border border-white/[0.07]" />

        <ShieldCheck
          className="relative z-10 h-14 w-14 text-orange-500"
          strokeWidth={1.5}
        />

        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#090a0a] bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
      </div>

      {/* CONTACT CARDS */}
      <section className="relative z-10 flex w-full max-w-[420px] flex-col gap-3 sm:gap-4">

        {contacts.map((contact) => {
          const Icon = contact.icon;

          return (
            <motion.a
              key={contact.name}
              href={contact.href}
              target={
                contact.href.startsWith("https://")
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              whileTap={reduceMotion ? undefined : { scale: 0.975 }}
              className={`
                group relative flex min-h-[78px] w-full
                items-center gap-4 overflow-hidden
                rounded-2xl border px-4 py-4
                transition-colors duration-300
                sm:min-h-[86px] sm:px-5
                ${
                  contact.accent
                    ? "border-orange-500/40 bg-gradient-to-r from-orange-500/[0.16] to-orange-950/[0.12] shadow-[0_8px_35px_rgba(249,115,22,0.07)] active:bg-orange-500/20"
                    : "border-white/[0.09] bg-white/[0.035] active:bg-white/[0.08] hover:border-white/20"
                }
              `}
            >
              {contact.accent && (
                <span className="absolute inset-y-0 left-0 w-[3px] bg-orange-500" />
              )}

              {/* ICON */}
              <div
                className={`
                  flex h-12 w-12 shrink-0 items-center
                  justify-center rounded-xl
                  transition-all duration-300
                  sm:h-[50px] sm:w-[50px]
                  ${
                    contact.accent
                      ? "bg-orange-500 text-black"
                      : "border border-white/[0.08] bg-white/[0.045] text-orange-400 group-hover:border-orange-500/30 group-hover:bg-orange-500/10"
                  }
                `}
              >
                <Icon
                  className="h-[21px] w-[21px]"
                  strokeWidth={1.8}
                />
              </div>

              {/* LABELS */}
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold tracking-tight text-white sm:text-[15px]">
                  {contact.name}
                </p>

                <p className="mt-1 truncate text-[11px] text-white/45 sm:text-xs">
                  {contact.detail}
                </p>
              </div>

              {/* ARROW */}
              <ArrowUpRight
                className="h-[19px] w-[19px] shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-400"
                strokeWidth={1.7}
              />
            </motion.a>
          );
        })}
      </section>

      {/* MINIMAL BRAND SIGNATURE */}
      <div className="relative z-10 mt-auto flex w-full max-w-[420px] items-center justify-center pt-12 sm:mt-14">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

        <p className="px-5 text-[10px] font-black tracking-[0.32em] text-white/30">
          PROTEKTA
        </p>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
      </div>

    </main>
  );
}
