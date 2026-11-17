
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ==========================================
// CONFIGURACIÓN DE SUPABASE
// ==========================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecret = process.env.SUPABASE_SECRET_KEY;

// ==========================================
// UTILIDADES
// ==========================================

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function responseError(message: string, status: number) {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status }
  );
}

// ==========================================
// POST: REGISTRO DE ASISTENTES
// ==========================================

export async function POST(request: Request) {
  try {
    // 1. Verificar variables de entorno

    if (!supabaseUrl || !supabaseSecret) {
      console.error("Faltan las credenciales de Supabase.");

      return responseError(
        "El servicio de registro no está configurado.",
        500
      );
    }

    // 2. Validar tipo de contenido

    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return responseError(
        "El formato de los datos no es válido.",
        415
      );
    }

    // 3. Obtener información del formulario

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return responseError(
        "No fue posible interpretar los datos enviados.",
        400
      );
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return responseError(
        "Los datos enviados no son válidos.",
        400
      );
    }

    const form = body as Record<string, unknown>;

    const name = cleanText(form.name);
    const email = cleanText(form.email).toLowerCase();
    const company = cleanText(form.company);
    const occupation = cleanText(form.occupation);
    const phone = cleanText(form.phone);
    const consent = form.consent === true;

    // 4. Validar campos obligatorios

    if (!name || !email || !occupation) {
      return responseError(
        "Completa todos los campos obligatorios.",
        400
      );
    }

    // 5. Validar longitudes

    if (
      name.length > 120 ||
      email.length > 254 ||
      company.length > 150 ||
      occupation.length > 120 ||
      phone.length > 30
    ) {
      return responseError(
        "Uno o más campos exceden la longitud permitida.",
        400
      );
    }

    // 6. Validar correo electrónico

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return responseError(
        "Ingresa un correo electrónico válido.",
        400
      );
    }

    // 7. Validar consentimiento

    if (!consent) {
      return responseError(
        "Debes aceptar el aviso de privacidad para continuar.",
        400
      );
    }

    // 8. Crear cliente de Supabase

    const supabase = createClient(
      supabaseUrl,
      supabaseSecret,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // 9. Insertar asistente en Supabase

    const { data, error } = await supabase
      .from("registrations")
      .insert({
        name,
        email,
        company: company || null,
        occupation,
        phone: phone || null,
        consent,
      })
      .select(
        "id, ticket_code, name, email, company, occupation"
      )
      .single();

    // 10. Manejar errores de Supabase

    if (error) {
      console.error(
        "Error de Supabase:",
        error.code,
        error.message
      );

      if (error.code === "23505") {
        return responseError(
          "Este correo ya cuenta con un registro para la inauguración.",
          409
        );
      }

      return responseError(
        "No fue posible guardar tu registro. Intenta nuevamente.",
        500
      );
    }

    // 11. Verificar resultado

    if (!data) {
      return responseError(
        "No se recibió la confirmación de la base de datos.",
        500
      );
    }

    // 12. Confirmación del registro

    console.log(
      "Nuevo asistente registrado:",
      data.ticket_code
    );

    return NextResponse.json(
      {
        success: true,
        message: "¡Tu registro se completó correctamente!",

        // Todos los datos del asistente
        attendee: {
          id: data.id,
          name: data.name,
          email: data.email,
          company: data.company,
          occupation: data.occupation,
          ticket_code: data.ticket_code,
        },
      },
      { status: 201 }
    );

  } catch (error) {
    console.error(
      "Error interno en API de registro:",
      error
    );

    return responseError(
      "Ocurrió un error inesperado al procesar tu registro.",
      500
    );
  }
}
