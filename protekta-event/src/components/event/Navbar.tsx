
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">

        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-[#E87524] text-xl font-black text-black">
            P
          </div>

          <div>
            <p className="text-xl font-black tracking-[0.15em]">
              PROTEKTA
            </p>
            <p className="text-[9px] tracking-[0.3em] text-gray-500">
              INDUSTRIAL PROTECTION
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-gray-400 md:flex">
          <a href="#evento" className="transition hover:text-white">
            El evento
          </a>
          <a href="#registro" className="transition hover:text-white">
            Registro
          </a>
        </div>

        <a
          href="#registro"
          className="border border-[#E87524] px-5 py-3 text-[10px] font-bold tracking-[0.15em] text-[#E87524] transition hover:bg-[#E87524] hover:text-black"
        >
          REGISTRARME ↗
        </a>

      </nav>
    </header>
  );
}
