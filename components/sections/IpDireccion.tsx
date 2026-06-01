"use client";

import { useMemo, useState } from "react";
import { Globe, Home, AlertTriangle, CheckCircle2 } from "lucide-react";

type Tipo = "publica" | "privada" | "loopback" | "reservada";

function clasificar(a: number, b: number, c: number, d: number): {
  tipo: Tipo;
  label: string;
  detalle: string;
} {
  if (a === 127) {
    return {
      tipo: "loopback",
      label: "Loopback",
      detalle: "El rango 127.0.0.0/8 apunta a tu propio dispositivo. 127.0.0.1 = localhost.",
    };
  }
  if (a === 10) {
    return {
      tipo: "privada",
      label: "Privada (Clase A)",
      detalle: "Rango 10.0.0.0/8. Usada en redes empresariales grandes. No visible en internet.",
    };
  }
  if (a === 172 && b >= 16 && b <= 31) {
    return {
      tipo: "privada",
      label: "Privada (Clase B)",
      detalle: "Rango 172.16.0.0/12. Común en oficinas medianas. No visible en internet.",
    };
  }
  if (a === 192 && b === 168) {
    return {
      tipo: "privada",
      label: "Privada (Clase C)",
      detalle: "Rango 192.168.0.0/16. La que asigna tu router doméstico. No visible en internet.",
    };
  }
  if (a >= 224) {
    return {
      tipo: "reservada",
      label: "Reservada",
      detalle: "Rango usado para multicast (224-239) o experimental (240+). No para hosts normales.",
    };
  }
  return {
    tipo: "publica",
    label: "Pública",
    detalle: "Visible desde internet. Tu router tiene una pública y traduce el tráfico de tus dispositivos con NAT.",
  };
}

function toBinary(n: number): string {
  return n.toString(2).padStart(8, "0");
}

const PRESETS = [
  { label: "Mi PC en casa", ip: [192, 168, 1, 42] },
  { label: "Servidor Google", ip: [142, 250, 80, 46] },
  { label: "Localhost", ip: [127, 0, 0, 1] },
  { label: "Oficina grande", ip: [10, 0, 5, 18] },
];

export function IPv4Animation() {
  const [octets, setOctets] = useState<number[]>([192, 168, 1, 42]);

  const tipo = useMemo(
    () => clasificar(octets[0], octets[1], octets[2], octets[3]),
    [octets]
  );

  const isLocal = tipo.tipo === "privada" || tipo.tipo === "loopback";
  const Icon = isLocal ? Home : tipo.tipo === "publica" ? Globe : AlertTriangle;
  const iconColor =
    tipo.tipo === "publica"
      ? "text-accent"
      : tipo.tipo === "privada"
      ? "text-teal"
      : tipo.tipo === "loopback"
      ? "text-blue-600"
      : "text-amber-600";

  const update = (i: number, value: string) => {
    const n = Math.max(0, Math.min(255, parseInt(value) || 0));
    setOctets((prev) => prev.map((o, idx) => (idx === i ? n : o)));
  };

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Presets */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setOctets([...p.ip])}
            className="text-[11.5px] px-2.5 py-1 rounded-full border border-border bg-surface2 text-text-muted hover:border-accent/40 hover:text-accent transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Octet inputs */}
      <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
        Dirección IPv4
      </div>
      <div className="flex items-center gap-1 mb-3">
        {octets.map((o, i) => (
          <div key={i} className="flex items-center gap-1 flex-1">
            <input
              type="number"
              min={0}
              max={255}
              value={o}
              onChange={(e) => update(i, e.target.value)}
              className="w-full rounded-card border border-border bg-bg px-2 py-2 text-center text-[15px] font-mono text-text-primary focus:outline-none focus:border-accent"
            />
            {i < 3 && (
              <span className="text-[18px] font-bold text-text-dim">.</span>
            )}
          </div>
        ))}
      </div>

      {/* Binary representation */}
      <div className="rounded-card border border-border bg-bg p-2.5 mb-3">
        <div className="text-[10.5px] text-text-dim mb-1 uppercase tracking-wide">
          En binario (32 bits)
        </div>
        <div className="font-mono text-[12px] text-text-primary break-all">
          {octets.map(toBinary).join(".")}
        </div>
      </div>

      {/* Classification */}
      <div
        className={`rounded-card border p-3 ${
          tipo.tipo === "publica"
            ? "border-accent/40 bg-accent/5"
            : tipo.tipo === "privada"
            ? "border-teal/40 bg-teal/5"
            : tipo.tipo === "loopback"
            ? "border-blue-500/40 bg-blue-500/5"
            : "border-amber-500/40 bg-amber-500/5"
        }`}
      >
        <div className={`flex items-center gap-2 mb-1 ${iconColor}`}>
          <Icon size={16} strokeWidth={1.8} />
          <span className="text-[13.5px] font-semibold">{tipo.label}</span>
          {tipo.tipo !== "reservada" && (
            <CheckCircle2 size={14} className="text-text-dim ml-auto" />
          )}
        </div>
        <p className="text-[12.5px] text-text-primary leading-relaxed">
          {tipo.detalle}
        </p>
      </div>

      <p className="mt-3 text-[11.5px] text-text-dim leading-relaxed">
        Cada octeto va de 0 a 255 (8 bits). Una IPv4 tiene 4 × 8 = 32 bits, lo que da
        ~4.300 millones de direcciones únicas. IPv6 usa 128 bits y prácticamente no se
        agota.
      </p>
    </div>
  );
}
