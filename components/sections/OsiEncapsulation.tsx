"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, RotateCcw } from "lucide-react";

type Capa = {
  numero: number;
  nombre: string;
  protocolo: string;
  cabecera: string;
  color: string;
};

const CAPAS: Capa[] = [
  { numero: 7, nombre: "Aplicación", protocolo: "HTTP", cabecera: "GET /index.html", color: "bg-blue-500/15 border-blue-500/40 text-blue-700" },
  { numero: 6, nombre: "Presentación", protocolo: "TLS", cabecera: "AES-256 cipher", color: "bg-purple-500/15 border-purple-500/40 text-purple-700" },
  { numero: 5, nombre: "Sesión", protocolo: "Session", cabecera: "session_id=abc", color: "bg-pink-500/15 border-pink-500/40 text-pink-700" },
  { numero: 4, nombre: "Transporte", protocolo: "TCP", cabecera: "src:443 dst:51234", color: "bg-accent/15 border-accent/40 text-accent" },
  { numero: 3, nombre: "Red", protocolo: "IP", cabecera: "src:10.0.0.5 dst:142.250.80.46", color: "bg-teal/15 border-teal/40 text-teal" },
  { numero: 2, nombre: "Enlace", protocolo: "Ethernet", cabecera: "src-MAC dst-MAC", color: "bg-amber-500/15 border-amber-500/40 text-amber-700" },
  { numero: 1, nombre: "Física", protocolo: "Cable / Wi-Fi", cabecera: "101011010101...", color: "bg-red-500/15 border-red-500/40 text-red-700" },
];

type Direccion = "encapsulacion" | "desencapsulacion";

export function OsiEncapsulation() {
  const [direccion, setDireccion] = useState<Direccion>("encapsulacion");
  const [paso, setPaso] = useState(0);

  // Encapsulación = de capa 7 (índice 0) a capa 1 (índice 6).
  // Desencapsulación = de capa 1 (índice 6) a capa 7 (índice 0).
  const capasIluminadas = direccion === "encapsulacion"
    ? CAPAS.slice(0, paso + 1)
    : CAPAS.slice(CAPAS.length - 1 - paso);

  const capaIdsIluminados = new Set(capasIluminadas.map((c) => c.numero));
  const capaActual = direccion === "encapsulacion" ? CAPAS[paso] : CAPAS[CAPAS.length - 1 - paso];

  const next = () => {
    if (paso < CAPAS.length - 1) {
      setPaso(paso + 1);
    } else if (direccion === "encapsulacion") {
      setDireccion("desencapsulacion");
      setPaso(0);
    }
  };

  const reset = () => {
    setDireccion("encapsulacion");
    setPaso(0);
  };

  const completado = direccion === "desencapsulacion" && paso === CAPAS.length - 1;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Direction indicator */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <div
          className={`inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-full border ${
            direccion === "encapsulacion"
              ? "bg-accent/15 text-accent border-accent/40 font-semibold"
              : "bg-surface2 text-text-dim border-border"
          }`}
        >
          <ArrowDown size={12} strokeWidth={2} />
          Encapsulación (origen)
        </div>
        <div
          className={`inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-full border ${
            direccion === "desencapsulacion"
              ? "bg-teal/15 text-teal border-teal/40 font-semibold"
              : "bg-surface2 text-text-dim border-border"
          }`}
        >
          <ArrowUp size={12} strokeWidth={2} />
          Desencapsulación (destino)
        </div>
      </div>

      {/* Stack */}
      <div className="rounded-card border border-border bg-bg p-3 mb-3">
        <div className="space-y-1.5">
          {CAPAS.map((capa) => {
            const iluminada = capaIdsIluminados.has(capa.numero);
            const esActual = capaActual.numero === capa.numero;
            return (
              <div
                key={capa.numero}
                className={`rounded-card border px-3 py-2 transition-all ${
                  iluminada ? capa.color : "border-border bg-surface2 text-text-dim opacity-50"
                } ${esActual ? "ring-2 ring-offset-1 ring-offset-bg" : ""}`}
                style={esActual ? { boxShadow: "0 0 0 2px var(--accent, #00A896)" } : undefined}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold opacity-70">
                      L{capa.numero}
                    </span>
                    <span className="text-[13px] font-semibold">{capa.nombre}</span>
                    <span className="text-[11px] opacity-70">· {capa.protocolo}</span>
                  </div>
                  {iluminada && (
                    <span className="text-[11px] font-mono opacity-80 truncate max-w-[180px]">
                      {capa.cabecera}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current action */}
      <div className="rounded-card border border-border bg-bg p-3 mb-3">
        <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1">
          {direccion === "encapsulacion" ? "Capa actual añade su cabecera" : "Capa actual lee y retira su cabecera"}
        </div>
        <div className="text-[13px] text-text-primary">
          <span className="font-semibold">L{capaActual.numero} {capaActual.nombre}</span>
          {" → "}
          <span className="font-mono">{capaActual.cabecera}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card border border-border bg-surface2 text-text-muted hover:text-text-primary transition-colors"
        >
          <RotateCcw size={13} strokeWidth={1.8} />
          Reiniciar
        </button>
        <span className="text-[11px] text-text-dim">
          {direccion === "encapsulacion" ? "Bajando" : "Subiendo"} · Paso {paso + 1} / {CAPAS.length}
        </span>
        <button
          type="button"
          onClick={next}
          disabled={completado}
          className="text-[12.5px] px-3 py-2 rounded-card border border-accent bg-accent text-bg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
        >
          {completado ? "Completo ✓" : "Siguiente →"}
        </button>
      </div>
    </div>
  );
}
