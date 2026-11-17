
import { CalendarDays, Clock3, MapPin } from "lucide-react";

const details = [
  {
    icon: CalendarDays,
    label: "FECHA",
    value: "Sábado, 21 de noviembre",
  },
  {
    icon: Clock3,
    label: "HORARIO",
    value: "13:00 horas",
  },
  {
    icon: MapPin,
    label: "UBICACIÓN",
    value: "Viaducto Tlalpan 157",
  },
];

export default function EventInfo() {
  return (
    <section id="evento" className="border-y border-white/10 bg-[#171717]">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">

        {details.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center gap-5 px-6 py-10">
              <Icon className="text-[#E87524]" size={25} />

              <div>
                <p className="text-[9px] tracking-[0.25em] text-gray-500">
                  {item.label}
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
