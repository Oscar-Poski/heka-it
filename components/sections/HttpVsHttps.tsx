"use client";

import { useState } from "react";
import { Lock, Unlock, Eye, Shield } from "lucide-react";

const HTTP_REQUEST = `POST /login HTTP/1.1
Host: mi-banco.com
Content-Type: application/json

{
  "usuario": "oscar@ejemplo.com",
  "password": "MiClav3$ecr3ta!"
}`;

const HTTPS_REQUEST = `POST /login HTTP/1.1
Host: mi-banco.com
Content-Type: application/json

{
  "usuario": "oscar@ejemplo.com",
  "password": "MiClav3$ecr3ta!"
}`;

const HTTPS_ENCRYPTED = `0x3a8d 0xf2c1 0x9b40 0x7e22 0x5a93
0xc8e1 0x4d67 0xfa02 0x18bb 0x29cf
0xe54a 0x6172 0xd391 0x0c5e 0xab8d
0x77f0 0x2e91 0xb14c 0x6a3f 0xd928
... 1.2 KB de datos cifrados con AES-256 ...`;

export function HttpVsHttps() {
  const [protocolo, setProtocolo] = useState<"http" | "https">("https");

  const esHttp = protocolo === "http";

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Toggle */}
      <div className="flex gap-1 mb-4 p-1 rounded-card border border-border bg-surface2">
        <button
          type="button"
          onClick={() => setProtocolo("http")}
          className={`flex-1 inline-flex items-center justify-center gap-1.5 text-[13px] px-3 py-2 rounded-card transition-colors ${
            esHttp
              ? "bg-red-500/10 text-red-700 font-semibold"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          <Unlock size={13} strokeWidth={2} />
          HTTP (sin cifrar)
        </button>
        <button
          type="button"
          onClick={() => setProtocolo("https")}
          className={`flex-1 inline-flex items-center justify-center gap-1.5 text-[13px] px-3 py-2 rounded-card transition-colors ${
            !esHttp
              ? "bg-accent/10 text-accent font-semibold"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          <Lock size={13} strokeWidth={2} />
          HTTPS (cifrado)
        </button>
      </div>

      {/* Scenario */}
      <div className="text-[12px] text-text-muted leading-relaxed mb-3">
        Tu navegador envía un formulario de login a un servidor. Mira qué ve un
        intermediario en el camino (router, Wi-Fi público, ISP).
      </div>

      {/* Browser view */}
      <div className="rounded-card border border-border bg-bg p-3 mb-2">
        <div className="flex items-center gap-1.5 mb-2 text-text-muted">
          <Shield size={13} strokeWidth={1.8} />
          <span className="text-[11px] font-semibold uppercase tracking-wide">
            Tu navegador envía
          </span>
        </div>
        <pre className="font-mono text-[11.5px] text-text-primary whitespace-pre-wrap leading-relaxed">
          {esHttp ? HTTP_REQUEST : HTTPS_REQUEST}
        </pre>
      </div>

      {/* Intermediary view */}
      <div
        className={`rounded-card border p-3 ${
          esHttp
            ? "border-red-500/40 bg-red-500/5"
            : "border-accent/40 bg-accent/5"
        }`}
      >
        <div
          className={`flex items-center gap-1.5 mb-2 ${
            esHttp ? "text-red-700" : "text-accent"
          }`}
        >
          <Eye size={13} strokeWidth={1.8} />
          <span className="text-[11px] font-semibold uppercase tracking-wide">
            Lo que ve un router intermedio
          </span>
        </div>
        <pre
          className={`font-mono text-[11.5px] whitespace-pre-wrap leading-relaxed ${
            esHttp ? "text-red-700" : "text-text-primary"
          }`}
        >
          {esHttp ? HTTP_REQUEST : HTTPS_ENCRYPTED}
        </pre>
      </div>

      <p
        className={`mt-3 text-[12px] leading-relaxed ${
          esHttp ? "text-red-700" : "text-text-muted"
        }`}
      >
        {esHttp
          ? "⚠️ Cualquier nodo en el camino (Wi-Fi de cafetería, ISP, router comprometido) puede leer tu usuario y contraseña en texto plano."
          : "🔒 El cuerpo va cifrado con AES tras un handshake TLS. Los intermediarios solo ven el host destino (en SNI) y bytes ininteligibles."}
      </p>
    </div>
  );
}
