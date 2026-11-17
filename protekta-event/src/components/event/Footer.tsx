
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111111]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-12">

        <div>
          <p className="text-xl font-black tracking-[0.15em]">
            PROTEKTA<span className="text-[#E87524]">.</span>
          </p>

          <p className="mt-2 text-[9px] tracking-[0.2em] text-gray-600">
            INDUSTRIAL PROTECTION
          </p>
        </div>

        <div className="text-xs text-gray-500">
          <p>Inauguración oficial · 21.11.2026</p>
          <p className="mt-2">© 2026 PROTEKTA. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
