
"use client";

import { useState, type FormEvent } from "react";
import {
  ShieldCheck,
  LockKeyhole,
  ArrowRight,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "No fue posible iniciar sesión."
        );
      }

      window.location.href = "/admin";

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error inesperado."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101010] px-5 py-12">

      <div className="w-full max-w-md">

        {/* Marca */}
        <div className="mb-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#E87524] text-black">
            <ShieldCheck size={34} />
          </div>

          <h1 className="mt-5 text-3xl font-black tracking-wider text-white">
            PROTEKTA<span className="text-[#E87524]">.</span>
          </h1>

          <p className="mt-2 text-xs font-semibold tracking-[0.25em] text-gray-500">
            PANEL DE ADMINISTRACIÓN
          </p>

        </div>

        {/* Formulario */}
        <div className="border border-white/10 bg-[#191919] p-8 sm:p-10">

          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.2em] text-[#E87524]">
              ACCESO RESTRINGIDO
            </p>

            <h2 className="mt-3 text-2xl font-black text-white">
              Bienvenido
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Ingresa tus credenciales para administrar
              las acreditaciones del evento.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label
                htmlFor="admin-password"
                className="text-xs font-bold uppercase tracking-wider text-gray-300"
              >
                Contraseña administrativa
              </label>

              <div className="relative mt-3">

                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="admin-password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Introduce tu contraseña"
                  className="w-full border border-white/10 bg-[#111111] py-4 pl-12 pr-4 text-sm text-white outline-none transition focus:border-[#E87524]"
                />

              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-3 border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
              >
                <AlertCircle size={18} className="shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 bg-[#E87524] px-6 py-5 text-xs font-black tracking-[0.15em] text-black transition hover:bg-white disabled:opacity-50"
            >
              {loading ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  VERIFICANDO...
                </>
              ) : (
                <>
                  INGRESAR AL PANEL
                  <ArrowRight size={18} />
                </>
              )}
            </button>

          </form>

        </div>

        <p className="mt-8 text-center text-[10px] tracking-wider text-gray-600">
          PROTEKTA · SISTEMA DE CONTROL DE ACCESO
        </p>

      </div>

    </main>
  );
}
