
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import DigitalBadge from "./DigitalBadge";

interface Attendee {
  id: string;
  name: string;
  email: string;
  company: string | null;
  occupation: string;
  ticket_code: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
  attendee?: Attendee;
}

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    occupation: "",
    phone: "",
  });

  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attendee, setAttendee] = useState<Attendee | null>(null);

  const inputClass =
    "mt-3 w-full border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#E87524]";

  // Actualizar campos
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Enviar registro
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!consent) {
      setError("Debes aceptar el aviso de privacidad para continuar.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          company: form.company.trim(),
          occupation: form.occupation.trim(),
          phone: form.phone.trim(),
          consent,
        }),
      });

      const result: ApiResponse = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error || "No fue posible completar tu registro."
        );
      }

      if (!result.attendee) {
        throw new Error(
          "No se recibió la información de tu acreditación."
        );
      }

      // Mostrar gafete personalizado
      setAttendee(result.attendee);

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error inesperado. Intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  // Si el registro fue exitoso, mostrar el gafete
  if (attendee) {
    return <DigitalBadge attendee={attendee} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="grid gap-6 sm:grid-cols-2">

        {/* Nombre completo */}
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wider text-gray-300"
          >
            Nombre completo *
          </label>

          <input
            id="name"
            required
            maxLength={120}
            autoComplete="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre completo"
            className={inputClass}
          />
        </div>

        {/* Correo electrónico */}
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wider text-gray-300"
          >
            Correo electrónico *
          </label>

          <input
            id="email"
            required
            type="email"
            maxLength={254}
            autoComplete="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="correo@empresa.com"
            className={inputClass}
          />
        </div>

        {/* Empresa */}
        <div>
          <label
            htmlFor="company"
            className="text-xs font-semibold uppercase tracking-wider text-gray-300"
          >
            Empresa
          </label>

          <input
            id="company"
            name="company"
            maxLength={150}
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className={inputClass}
          />
        </div>

        {/* Ocupación */}
        <div>
          <label
            htmlFor="occupation"
            className="text-xs font-semibold uppercase tracking-wider text-gray-300"
          >
            Ocupación *
          </label>

          <input
            id="occupation"
            required
            name="occupation"
            maxLength={120}
            value={form.occupation}
            onChange={handleChange}
            placeholder="Ej. Ingeniero industrial"
            className={inputClass}
          />
        </div>

        {/* Teléfono */}
        <div className="sm:col-span-2">
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-wider text-gray-300"
          >
            Teléfono
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            maxLength={30}
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Número de contacto"
            className={inputClass}
          />
        </div>

      </div>

      {/* Consentimiento */}
      <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-gray-400">

        <input
          required
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#E87524]"
        />

        <span>
          He leído y acepto el aviso de privacidad y autorizo
          el tratamiento de mis datos personales para gestionar
          mi registro y participación en el evento.
        </span>

      </label>

      {/* Mensaje de error */}
      {error && (
        <div
          role="alert"
          className="border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
        >
          {error}
        </div>
      )}

      {/* Botón de registro */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-4 bg-[#E87524] px-8 py-5 text-xs font-black tracking-[0.15em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <LoaderCircle size={18} className="animate-spin" />
            PROCESANDO REGISTRO...
          </>
        ) : (
          <>
            COMPLETAR REGISTRO
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-gray-600">
        TU SEGURIDAD COMIENZA CON NOSOTROS.
      </p>

    </form>
  );
}
