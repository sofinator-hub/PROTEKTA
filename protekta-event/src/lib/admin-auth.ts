
import {
  createHmac,
  timingSafeEqual,
} from "node:crypto";

import { cookies } from "next/headers";

const COOKIE_NAME = "protekta_admin_session";
const SESSION_DURATION = 8 * 60 * 60 * 1000;

interface SessionPayload {
  exp: number;
}

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET debe tener al menos 32 caracteres."
    );
  }

  return secret;
}

// Firmar el contenido de la sesión
function sign(value: string): string {
  return createHmac("sha256", getSecret())
    .update(value)
    .digest("base64url");
}

// Crear token de sesión
export function createAdminToken(): string {
  const payload: SessionPayload = {
    exp: Date.now() + SESSION_DURATION,
  };

  const encoded = Buffer.from(
    JSON.stringify(payload)
  ).toString("base64url");

  return `${encoded}.${sign(encoded)}`;
}

// Verificar token
export function verifyAdminToken(
  token: string
): boolean {
  try {
    const parts = token.split(".");

    if (parts.length !== 2) return false;

    const [encoded, signature] = parts;

    const expected = sign(encoded);

    const receivedBuffer = Buffer.from(
      signature,
      "base64url"
    );

    const expectedBuffer = Buffer.from(
      expected,
      "base64url"
    );

    if (
      receivedBuffer.length !== expectedBuffer.length ||
      !timingSafeEqual(receivedBuffer, expectedBuffer)
    ) {
      return false;
    }

    const payload = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8")
    ) as SessionPayload;

    return (
      typeof payload.exp === "number" &&
      Number.isFinite(payload.exp) &&
      payload.exp > Date.now()
    );
  } catch {
    return false;
  }
}

// Comprobar sesión administrativa
export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();

  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return false;

  return verifyAdminToken(token);
}

// Opciones de cookie
export const adminCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_DURATION / 1000,
};
