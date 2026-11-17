
import { NextResponse } from "next/server";

import {
  createAdminToken,
  adminCookieOptions,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD no está configurada.");

      return NextResponse.json(
        { error: "El acceso administrativo no está configurado." },
        { status: 500 }
      );
    }

    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Formato de solicitud inválido." },
        { status: 415 }
      );
    }

    const body = await request.json().catch(() => null);

    if (!body || typeof body.password !== "string") {
      return NextResponse.json(
        { error: "Introduce la contraseña." },
        { status: 400 }
      );
    }

    if (
      body.password.length > 256 ||
      body.password.length === 0
    ) {
      return NextResponse.json(
        { error: "Credenciales incorrectas." },
        { status: 401 }
      );
    }

    if (body.password !== adminPassword) {
      return NextResponse.json(
        { error: "Contraseña incorrecta." },
        { status: 401 }
      );
    }

    const token = createAdminToken();

    const response = NextResponse.json({
      success: true,
      message: "Sesión iniciada correctamente.",
    });

    response.cookies.set(
      "protekta_admin_session",
      token,
      adminCookieOptions
    );

    return response;

  } catch (error) {
    console.error("Error de autenticación:", error);

    return NextResponse.json(
      { error: "No fue posible iniciar sesión." },
      { status: 500 }
    );
  }
}
