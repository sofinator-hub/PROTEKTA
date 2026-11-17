
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  Users,
  UserCheck,
  Clock3,
  Search,
  RefreshCw,
  Download,
  LogOut,
  ShieldCheck,
  Building2,
  Mail,
  BriefcaseBusiness,
  Ticket,
  CalendarDays,
  AlertCircle,
} from "lucide-react";

interface Attendee {
  id: string;
  name: string;
  email: string;
  company: string | null;
  occupation: string;
  phone: string | null;
  ticket_code: string;
  checked_in: boolean;
  checked_in_at: string | null;
  created_at: string;
}

interface DashboardData {
  stats: {
    total: number;
    checkedIn: number;
    pending: number;
  };
  attendees: Attendee[];
  showing: number;
}

const orange = "#E87524";

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/attendees", {
        method: "GET",
        cache: "no-store",
      });

      if (response.status === 401) {
        window.location.href = "/admin";
        return;
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "No fue posible cargar los datos."
        );
      }

      setData(result);

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error inesperado."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  // Buscar asistentes
  const filteredAttendees = useMemo(() => {
    if (!data) return [];

    const term = search.trim().toLowerCase();

    if (!term) return data.attendees;

    return data.attendees.filter((person) =>
      [
        person.name,
        person.email,
        person.company ?? "",
        person.occupation,
        person.ticket_code,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [data, search]);

  // Exportar CSV
  const exportCSV = () => {
    if (!data || data.attendees.length === 0) return;

    const headers = [
      "Nombre",
      "Correo",
      "Empresa",
      "Ocupacion",
      "Telefono",
      "Folio",
      "Estado",
      "Fecha de ingreso",
    ];

    const rows = data.attendees.map((person) => [
      person.name,
      person.email,
      person.company ?? "",
      person.occupation,
      person.phone ?? "",
      person.ticket_code,
      person.checked_in ? "Ingresó" : "Pendiente",
      person.checked_in_at ?? "",
    ]);

    const escapeCSV = (value: string) =>
      `"${String(value).replace(/"/g, '""')}"`;

    const csv = [
      headers,
      ...rows,
    ]
      .map((row) => row.map(escapeCSV).join(","))
      .join("\r\n");

    const blob = new Blob(
      ["\uFEFF" + csv],
      { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "PROTEKTA-asistentes.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Mexico_City",
    }).format(new Date(date));

  return (
    <main className="min-h-screen bg-[#101010] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#151515]/95 backdrop-blur">

        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 lg:px-10">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center bg-[#E87524] text-xl font-black text-black">
              P
            </div>

            <div>
              <h1 className="text-xl font-black tracking-wide">
                PROTEKTA<span className="text-[#E87524]">.</span>
              </h1>

              <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                EVENT MANAGEMENT
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 border border-white/10 px-3 py-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-bold tracking-wider text-gray-400">
                ADMINISTRADOR
              </span>
            </div>

            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="flex items-center gap-2 border border-white/10 px-3 py-3 text-xs text-gray-400 transition hover:border-[#E87524] hover:text-[#E87524]"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">SALIR</span>
              </button>
            </form>

          </div>

        </div>

      </header>

      <div className="mx-auto max-w-[1500px] px-5 py-10 lg:px-10">

        {/* TITLE */}
        <section className="mb-10">

          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#E87524]">
            <ShieldCheck size={15} />
            CONTROL ADMINISTRATIVO
          </div>

          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">

            <div>
              <h2 className="text-3xl font-black uppercase sm:text-4xl">
                Panel de control
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Gestiona los registros y las acreditaciones
                de la inauguración PROTEKTA.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CalendarDays size={16} />
              21 NOVIEMBRE 2026
            </div>

          </div>

        </section>

        {/* ERROR */}
        {error && (
          <div className="mb-6 flex items-center gap-3 border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        {/* STATISTICS */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

          <StatCard
            title="Total registrados"
            value={data?.stats.total ?? 0}
            icon={<Users size={23} />}
            description="Asistentes registrados"
            loading={loading}
          />

          <StatCard
            title="Ingresos confirmados"
            value={data?.stats.checkedIn ?? 0}
            icon={<UserCheck size={23} />}
            description="Personas que ya ingresaron"
            loading={loading}
          />

          <StatCard
            title="Pendientes"
            value={data?.stats.pending ?? 0}
            icon={<Clock3 size={23} />}
            description="Acreditaciones por validar"
            loading={loading}
          />

        </section>

        {/* ATTENDEES */}
        <section className="mt-10 border border-white/10 bg-[#171717]">

          <div className="flex flex-col justify-between gap-5 border-b border-white/10 p-5 lg:flex-row lg:items-center lg:p-7">

            <div>
              <h3 className="text-lg font-black uppercase">
                Lista de asistentes
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Consulta y administra las acreditaciones.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">

              <button
                onClick={() => void loadData()}
                disabled={loading}
                className="flex items-center gap-2 border border-white/10 px-4 py-3 text-xs font-bold text-gray-300 transition hover:border-[#E87524] hover:text-[#E87524] disabled:opacity-50"
              >
                <RefreshCw
                  size={15}
                  className={loading ? "animate-spin" : ""}
                />
                ACTUALIZAR
              </button>

              <button
                onClick={exportCSV}
                disabled={!data?.attendees.length}
                className="flex items-center gap-2 bg-[#E87524] px-4 py-3 text-xs font-black text-black transition hover:bg-white disabled:opacity-40"
              >
                <Download size={15} />
                EXPORTAR CSV
              </button>

            </div>

          </div>

          {/* SEARCH */}
          <div className="border-b border-white/10 p-5">

            <div className="relative max-w-xl">

              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por nombre, correo, empresa o folio..."
                className="w-full border border-white/10 bg-[#101010] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#E87524]"
              />

            </div>

            <p className="mt-3 text-[10px] text-gray-500">
              {filteredAttendees.length} RESULTADOS
              {data && data.stats.total > data.showing
                ? ` · MOSTRANDO LOS ÚLTIMOS ${data.showing} DE ${data.stats.total}`
                : ""}
            </p>

          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] text-left">

              <thead className="bg-[#111111] text-[10px] font-bold tracking-widest text-gray-500">

                <tr>
                  <th className="px-6 py-5">ASISTENTE</th>
                  <th className="px-6 py-5">EMPRESA</th>
                  <th className="px-6 py-5">OCUPACIÓN</th>
                  <th className="px-6 py-5">FOLIO</th>
                  <th className="px-6 py-5">ESTADO</th>
                  <th className="px-6 py-5">REGISTRO</th>
                </tr>

              </thead>

              <tbody className="divide-y divide-white/5">

                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center text-sm text-gray-500">
                      Cargando asistentes...
                    </td>
                  </tr>
                ) : filteredAttendees.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center text-sm text-gray-500">
                      {error
                        ? "No fue posible cargar los registros."
                        : "No se encontraron asistentes."}
                    </td>
                  </tr>
                ) : (
                  filteredAttendees.map((person) => (
                    <tr
                      key={person.id}
                      className="transition hover:bg-white/[0.025]"
                    >

                      <td className="px-6 py-5">

                        <p className="text-sm font-bold text-white">
                          {person.name}
                        </p>

                        <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                          <Mail size={12} />
                          {person.email}
                        </p>

                      </td>

                      <td className="px-6 py-5 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <Building2 size={14} />
                          {person.company || "Particular"}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <BriefcaseBusiness size={14} />
                          {person.occupation}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span className="font-mono text-xs text-[#E87524]">
                          {person.ticket_code}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        {person.checked_in ? (
                          <span className="inline-flex items-center gap-2 border border-green-500/20 bg-green-500/10 px-3 py-2 text-[10px] font-bold text-green-400">
                            <UserCheck size={13} />
                            INGRESÓ
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 border border-yellow-500/20 bg-yellow-500/10 px-3 py-2 text-[10px] font-bold text-yellow-400">
                            <Clock3 size={13} />
                            PENDIENTE
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-5 text-xs text-gray-500">
                        {formatDate(person.created_at)}
                      </td>

                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>

          {/* FOOTER */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 p-5">

            <p className="text-[10px] tracking-wider text-gray-600">
              PROTEKTA EVENT MANAGEMENT SYSTEM
            </p>

            <p className="text-[10px] text-gray-500">
              {data?.stats.total ?? 0} REGISTROS EN TOTAL
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}

// ==========================================
// TARJETAS DE ESTADÍSTICAS
// ==========================================

function StatCard({
  title,
  value,
  icon,
  description,
  loading,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
  loading: boolean;
}) {
  return (
    <div className="group border border-white/10 bg-[#171717] p-6 transition hover:border-[#E87524]/40">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {title}
          </p>

          <p className="mt-5 text-4xl font-black tabular-nums text-white">
            {loading ? "—" : value.toLocaleString("es-MX")}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center bg-[#E87524]/10 text-[#E87524] transition group-hover:bg-[#E87524] group-hover:text-black">
          {icon}
        </div>

      </div>

      <p className="mt-4 text-xs text-gray-500">
        {description}
      </p>

      <div className="mt-5 h-[2px] w-full bg-white/5">
        <div className="h-full w-1/3 bg-[#E87524]" />
      </div>

    </div>
  );
}
