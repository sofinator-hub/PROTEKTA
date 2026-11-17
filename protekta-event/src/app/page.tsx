
import Navbar from "@/components/event/Navbar";
import Hero from "@/components/event/Hero";
import EventInfo from "@/components/event/EventInfo";
import RegistrationForm from "@/components/event/RegistrationForm";
import Footer from "@/components/event/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">

      <Navbar />

      <Hero />

      <EventInfo />

      <section id="registro" className="relative overflow-hidden py-28">

        <div className="orange-glow absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">

          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-[#E87524]">
              / REGISTRO DE ASISTENTES
            </p>

            <h2 className="mt-8 text-5xl font-black uppercase leading-none tracking-tighter sm:text-6xl">
              ASEGURA
              <br />
              TU <span className="text-[#E87524]">LUGAR.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-8 text-gray-400">
              Forma parte de este nuevo comienzo. Completa tus datos
              y obtén tu acreditación digital personalizada para
              la inauguración de PROTEKTA.
            </p>

            <div className="mt-12 border-l border-[#E87524] py-2 pl-6">
              <p className="text-xs tracking-widest text-gray-500">
                FECHA DEL EVENTO
              </p>

              <p className="mt-2 text-xl font-bold">
                21 NOVIEMBRE 2026
              </p>

              <p className="mt-1 text-sm text-[#E87524]">
                13:00 H
              </p>
            </div>
          </div>

          <div className="border border-white/10 bg-[#191919] p-7 sm:p-10">

            <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-lg font-black uppercase">
                  Registro oficial
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Completa los siguientes campos
                </p>
              </div>

              <span className="border border-[#E87524]/40 px-3 py-2 text-[9px] tracking-widest text-[#E87524]">
                EVENT 001
              </span>
            </div>

            <RegistrationForm />

          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}
