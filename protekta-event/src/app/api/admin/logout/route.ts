
import { NextResponse } from "next/server";

function logout(request: Request) {
  const response = NextResponse.redirect(
    new URL("/admin", request.url),
    303
  );

  response.cookies.set({
    name: "protekta_admin_session",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
  });

  return response;
}

// Cierre mediante formulario POST
export async function POST(request: Request) {
  return logout(request);
}

// También permite corregir accesos directos por GET
export async function GET(request: Request) {
  return logout(request);
}
