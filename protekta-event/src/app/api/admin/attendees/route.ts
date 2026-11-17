
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function GET() {
  try {
    // 1. Verificar sesión administrativa
    const authenticated = await isAdminAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        { error: "No tienes autorización." },
        { status: 401 }
      );
    }

    // 2. Verificar Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecret = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecret) {
      return NextResponse.json(
        { error: "Configuración de base de datos incompleta." },
        { status: 500 }
      );
    }

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

    // 3. Obtener los últimos 500 asistentes
    const { data: attendees, error, count } = await supabase
      .from("registrations")
      .select(
        "id, name, email, company, occupation, phone, ticket_code, checked_in, checked_in_at, created_at",
        { count: "exact" }
      )
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.error("Error obteniendo asistentes:", error);

      return NextResponse.json(
        { error: "No fue posible consultar los asistentes." },
        { status: 500 }
      );
    }

    // 4. Obtener total de entradas registradas
    const { count: checkedIn, error: checkError } =
      await supabase
        .from("registrations")
        .select("id", { count: "exact", head: true })
        .eq("checked_in", true);

    if (checkError) {
      console.error("Error obteniendo accesos:", checkError);

      return NextResponse.json(
        { error: "No fue posible consultar las entradas." },
        { status: 500 }
      );
    }

    const total = count ?? 0;
    const entered = checkedIn ?? 0;

    // 5. Respuesta
    return NextResponse.json({
      success: true,

      stats: {
        total,
        checkedIn: entered,
        pending: total - entered,
      },

      attendees: attendees ?? [],
      showing: attendees?.length ?? 0,
    });

  } catch (error) {
    console.error("Error en API administrativa:", error);

    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
