
"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import {
  Download,
  ShieldCheck,
  CalendarDays,
  MapPin,
  Ticket,
  LoaderCircle,
} from "lucide-react";

interface BadgeAttendee {
  id: string;
  name: string;
  email?: string;
  company?: string | null;
  occupation?: string | null;
  ticket_code: string;
}

interface DigitalBadgeProps {
  attendee: BadgeAttendee;
}

export default function DigitalBadge({
  attendee,
}: DigitalBadgeProps) {
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState("");

  // Generar QR individual
  useEffect(() => {
    let active = true;

    async function generateQR() {
      try {
        const qr = await QRCode.toDataURL(
          attendee.ticket_code,
          {
            errorCorrectionLevel: "H",
            type: "image/png",
            width: 400,
            margin: 2,
            color: {
              dark: "#111111",
              light: "#FFFFFF",
            },
          }
        );

        if (active) {
          setQrCode(qr);
          setError("");
        }
      } catch {
        if (active) {
          setError("No fue posible generar el código QR.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    generateQR();

    return () => {
      active = false;
    };
  }, [attendee.ticket_code]);

  // Descargar gafete completo como PNG
  const downloadBadge = async () => {
    if (!qrCode) return;

    setDownloading(true);

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 900;
      canvas.height = 1200;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("No se pudo crear el gafete.");
      }

      // Fondo
      ctx.fillStyle = "#111111";
      ctx.fillRect(0, 0, 900, 1200);

      // Marco exterior
      ctx.strokeStyle = "#393939";
      ctx.lineWidth = 3;
      ctx.strokeRect(30, 30, 840, 1140);

      // Franja naranja
      ctx.fillStyle = "#E87524";
      ctx.fillRect(30, 30, 840, 13);

      // Decoración superior
      ctx.fillStyle = "#1C1C1C";
      ctx.fillRect(30, 43, 840, 210);

      // Logo / marca
      ctx.fillStyle = "#E87524";
      ctx.fillRect(75, 85, 65, 65);

      ctx.fillStyle = "#111111";
      ctx.font = "bold 39px Arial";
      ctx.textAlign = "center";
      ctx.fillText("P", 107, 132);

      ctx.textAlign = "left";
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 49px Arial";
      ctx.fillText("PROTEKTA", 165, 120);

      ctx.fillStyle = "#888888";
      ctx.font = "18px Arial";
      ctx.fillText("PROTECCIÓN INDUSTRIAL", 167, 155);

      ctx.fillStyle = "#E87524";
      ctx.font = "bold 19px Arial";
      ctx.fillText("ACREDITACIÓN OFICIAL", 75, 218);

      // Información del asistente
      ctx.fillStyle = "#888888";
      ctx.font = "bold 19px Arial";
      ctx.fillText("NOMBRE DEL ASISTENTE", 75, 325);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 43px Arial";

      const name =
        attendee.name.length > 26
          ? attendee.name.slice(0, 25) + "..."
          : attendee.name;

      ctx.fillText(name, 75, 385);

      // Empresa
      ctx.fillStyle = "#888888";
      ctx.font = "bold 18px Arial";
      ctx.fillText("EMPRESA", 75, 455);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "25px Arial";
      ctx.fillText(
        (attendee.company || "INVITADO").slice(0, 35),
        75,
        495
      );

      // Ocupación
      ctx.fillStyle = "#888888";
      ctx.font = "bold 18px Arial";
      ctx.fillText("OCUPACIÓN", 75, 560);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "25px Arial";
      ctx.fillText(
        (attendee.occupation || "ASISTENTE").slice(0, 35),
        75,
        600
      );

      // Separador
      ctx.strokeStyle = "#393939";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(75, 660);
      ctx.lineTo(825, 660);
      ctx.stroke();

      // QR
      const qrImage = new Image();
      qrImage.src = qrCode;

      await new Promise<void>((resolve, reject) => {
        qrImage.onload = () => resolve();
        qrImage.onerror = () =>
          reject(new Error("No se pudo cargar el QR."));
      });

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(295, 690, 310, 310);

      ctx.drawImage(qrImage, 315, 710, 270, 270);

      // Folio
      ctx.fillStyle = "#888888";
      ctx.font = "bold 17px Arial";
      ctx.textAlign = "center";
      ctx.fillText("FOLIO DE ACREDITACIÓN", 450, 1040);

      ctx.fillStyle = "#E87524";
      ctx.font = "20px monospace";

      const ticket = attendee.ticket_code;

      ctx.fillText(
        ticket.length > 34
          ? ticket.slice(0, 34)
          : ticket,
        450,
        1078
      );

      // Evento
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 21px Arial";
      ctx.fillText("21 NOVIEMBRE 2026 · 13:00 H", 450, 1125);

      // Descargar
      canvas.toBlob((blob) => {
        if (!blob) {
          setError("No se pudo generar la descarga.");
          setDownloading(false);
          return;
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = `PROTEKTA-${attendee.ticket_code.slice(0, 8)}.png`;

        link.click();

        URL.revokeObjectURL(url);
        setDownloading(false);
      }, "image/png");

    } catch (err) {
      console.error("Error al generar gafete:", err);
      setError("No fue posible descargar el gafete.");
      setDownloading(false);
    }
  };

  return (
    <div className="w-full space-y-6">

      {/* GAFETE */}
      <div className="relative overflow-hidden border border-white/15 bg-[#111111]">

        {/* Cabecera */}
        <div className="relative overflow-hidden border-b border-white/10 bg-[#1C1C1C] p-7">

          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#E87524]/10 blur-3xl" />

          <div className="relative flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center bg-[#E87524] text-black">
                <ShieldCheck size={29} strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-wider text-white">
                  PROTEKTA
                </h2>

                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                  PROTECCIÓN INDUSTRIAL
                </p>
              </div>

            </div>

            <span className="border border-[#E87524]/50 px-3 py-2 text-[9px] font-bold tracking-widest text-[#E87524]">
              EVENTO 001
            </span>

          </div>

          <p className="relative mt-8 text-xs font-bold tracking-[0.2em] text-[#E87524]">
            ACREDITACIÓN OFICIAL
          </p>

          <h3 className="relative mt-2 text-3xl font-black uppercase text-white">
            INVITADO
          </h3>

        </div>

        {/* Datos */}
        <div className="space-y-6 p-7">

          <div>
            <p className="text-[10px] font-bold tracking-widest text-gray-500">
              NOMBRE DEL ASISTENTE
            </p>

            <p className="mt-2 break-words text-2xl font-black uppercase text-white">
              {attendee.name}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-500">
                EMPRESA
              </p>

              <p className="mt-2 break-words text-sm font-semibold text-white">
                {attendee.company || "Invitado"}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-500">
                OCUPACIÓN
              </p>

              <p className="mt-2 break-words text-sm font-semibold text-white">
                {attendee.occupation || "Asistente"}
              </p>
            </div>

          </div>

          {/* QR */}
          <div className="flex flex-col items-center border-y border-white/10 py-7">

            {loading ? (
              <LoaderCircle
                className="animate-spin text-[#E87524]"
                size={35}
              />
            ) : error && !qrCode ? (
              <p className="text-sm text-red-400">{error}</p>
            ) : (
              <>
                <div className="bg-white p-3">
                  <img
                    src={qrCode}
                    alt="Código QR de acreditación PROTEKTA"
                    className="h-44 w-44"
                  />
                </div>

                <p className="mt-4 text-[10px] font-bold tracking-[0.2em] text-[#E87524]">
                  PRESENTA ESTE CÓDIGO AL INGRESAR
                </p>
              </>
            )}

          </div>

          {/* Evento */}
          <div className="space-y-4">

            <div className="flex items-center gap-3 text-sm text-gray-300">
              <CalendarDays size={18} className="text-[#E87524]" />
              Sábado 21 de noviembre de 2026 · 13:00 h
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-300">
              <MapPin size={18} className="text-[#E87524]" />
              Viaducto Tlalpan 157
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Ticket size={18} className="text-[#E87524]" />
              Folio: {attendee.ticket_code.slice(0, 13)}
            </div>

          </div>

          <div className="border-t border-white/10 pt-5 text-center">
            <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500">
              TU SEGURIDAD COMIENZA CON NOSOTROS.
            </p>
          </div>

        </div>

        {/* Decoración inferior */}
        <div className="h-2 bg-[#E87524]" />

      </div>

      {/* DESCARGA */}
      <button
        type="button"
        onClick={downloadBadge}
        disabled={loading || downloading || !qrCode}
        className="flex w-full items-center justify-center gap-3 bg-[#E87524] px-6 py-5 text-xs font-black tracking-[0.15em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
      >

        {downloading ? (
          <>
            <LoaderCircle size={18} className="animate-spin" />
            GENERANDO GAFETE...
          </>
        ) : (
          <>
            <Download size={18} />
            DESCARGAR MI GAFETE
          </>
        )}

      </button>

      {error && qrCode && (
        <p role="alert" className="text-center text-xs text-red-400">
          {error}
        </p>
      )}

      <p className="text-center text-xs leading-5 text-gray-500">
        Conserva tu acreditación y presenta el código QR
        al llegar a la inauguración.
      </p>

    </div>
  );
}
