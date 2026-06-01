"use client";

import { useState } from "react";
import { PackageCheck, Phone, RotateCcw, X, Check, AlertCircle } from "lucide-react";

type Estado = "ok" | "perdido" | "reenviado" | "ignorado" | "pendiente";

type Paquete = {
  id: number;
  tcp: Estado;
  udp: Estado;
};

const PAQUETES_INICIAL: Paquete[] = [
  { id: 1, tcp: "pendiente", udp: "pendiente" },
  { id: 2, tcp: "pendiente", udp: "pendiente" },
  { id: 3, tcp: "pendiente", udp: "pendiente" },
  { id: 4, tcp: "pendiente", udp: "pendiente" },
  { id: 5, tcp: "pendiente", udp: "pendiente" },
];

function EstadoChip({ estado }: { estado: Estado }) {
  switch (estado) {
    case "ok":
      return (
        <span className="inline-flex items-center gap-1 text-[10.5px] px-1.5 py-0.5 rounded-md border bg-accent/15 text-accent border-accent/40">
          <Check size={10} strokeWidth={2.5} />
          OK
        </span>
      );
    case "perdido":
      return (
        <span className="inline-flex items-center gap-1 text-[10.5px] px-1.5 py-0.5 rounded-md border bg-red-500/15 text-red-700 border-red-500/40">
          <X size={10} strokeWidth={2.5} />
          Perdido
        </span>
      );
    case "reenviado":
      return (
        <span className="inline-flex items-center gap-1 text-[10.5px] px-1.5 py-0.5 rounded-md border bg-accent/15 text-accent border-accent/40">
          <Check size={10} strokeWidth={2.5} />
          Reenviado ✓
        </span>
      );
    case "ignorado":
      return (
        <span className="inline-flex items-center gap-1 text-[10.5px] px-1.5 py-0.5 rounded-md border bg-amber-500/15 text-amber-700 border-amber-500/40">
          <AlertCircle size={10} strokeWidth={2.5} />
          Ignorado
        </span>
      );
    default:
      return (
        <span className="text-[10.5px] text-text-dim font-mono">—</span>
      );
  }
}

export function TcpUdpCompare() {
  const [paquetes, setPaquetes] = useState<Paquete[]>(PAQUETES_INICIAL);
  const [paso, setPaso] = useState(0);

  const enviar = () => {
    if (paso >= paquetes.length) return;
    setPaquetes((prev) =>
      prev.map((p, i) =>
        i === paso ? { ...p, tcp: "ok", udp: "ok" } : p
      )
    );
    setPaso(paso + 1);
  };

  const perderProximo = () => {
    if (paso >= paquetes.length) return;
    setPaquetes((prev) =>
      prev.map((p, i) =>
        i === paso ? { ...p, tcp: "perdido", udp: "perdido" } : p
      )
    );
    setPaso(paso + 1);

    // TCP reenvía automáticamente tras un momento.
    setTimeout(() => {
      setPaquetes((prev) =>
        prev.map((p, i) =>
          i === paso ? { ...p, tcp: "reenviado", udp: "ignorado" } : p
        )
      );
    }, 700);
  };

  const reset = () => {
    setPaquetes(PAQUETES_INICIAL);
    setPaso(0);
  };

  const completado = paso >= paquetes.length;
  const tcpOk = paquetes.filter((p) => p.tcp === "ok" || p.tcp === "reenviado").length;
  const udpOk = paquetes.filter((p) => p.udp === "ok").length;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Two columns */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-card border border-accent/40 bg-accent/5 p-3">
          <div className="flex items-center gap-1.5 mb-1.5 text-accent">
            <PackageCheck size={15} strokeWidth={1.8} />
            <span className="text-[12.5px] font-semibold">TCP</span>
          </div>
          <p className="text-[11.5px] text-text-muted leading-snug">
            Confirma cada paquete. Si uno se pierde, lo reenvía. Garantiza entrega
            completa y ordenada.
          </p>
        </div>
        <div className="rounded-card border border-teal/40 bg-teal/5 p-3">
          <div className="flex items-center gap-1.5 mb-1.5 text-teal">
            <Phone size={15} strokeWidth={1.8} />
            <span className="text-[12.5px] font-semibold">UDP</span>
          </div>
          <p className="text-[11.5px] text-text-muted leading-snug">
            Dispara y sigue. No verifica ni reenvía. Si un paquete se pierde, se
            pierde — la app sigue avanzando.
          </p>
        </div>
      </div>

      {/* Packet matrix */}
      <div className="rounded-card border border-border bg-bg p-3 mb-3">
        <div className="grid grid-cols-3 gap-2 text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-2 pb-1.5 border-b border-border">
          <span>Paquete</span>
          <span className="text-accent">TCP</span>
          <span className="text-teal">UDP</span>
        </div>
        {paquetes.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-3 gap-2 items-center py-1.5 border-b border-border/40 last:border-0"
          >
            <span className="text-[12.5px] font-mono text-text-primary">#{p.id}</span>
            <EstadoChip estado={p.tcp} />
            <EstadoChip estado={p.udp} />
          </div>
        ))}
      </div>

      {/* Score */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-card border border-border bg-surface2 p-2 text-center">
          <div className="text-[10.5px] text-text-dim uppercase tracking-wide">TCP</div>
          <div className="text-[14px] font-semibold text-accent">
            {tcpOk} / {paquetes.length} entregados
          </div>
        </div>
        <div className="rounded-card border border-border bg-surface2 p-2 text-center">
          <div className="text-[10.5px] text-text-dim uppercase tracking-wide">UDP</div>
          <div className="text-[14px] font-semibold text-teal">
            {udpOk} / {paquetes.length} entregados
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={enviar}
          disabled={completado}
          className="flex-1 text-[12.5px] px-3 py-2 rounded-card border border-accent bg-accent text-bg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
        >
          Enviar paquete #{Math.min(paso + 1, paquetes.length)}
        </button>
        <button
          type="button"
          onClick={perderProximo}
          disabled={completado}
          className="flex-1 text-[12.5px] px-3 py-2 rounded-card border border-red-500/40 bg-red-500/5 text-red-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-500/10 transition-colors"
        >
          Perder paquete #{Math.min(paso + 1, paquetes.length)}
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card border border-border bg-surface2 text-text-muted hover:text-text-primary transition-colors"
        >
          <RotateCcw size={13} strokeWidth={1.8} />
          Reset
        </button>
      </div>

      <p className="mt-3 text-[11.5px] text-text-dim leading-relaxed">
        Prueba a perder un paquete. TCP lo reenvía (todos llegan, más lento). UDP lo
        ignora (entrega incompleta pero rápida).
      </p>
    </div>
  );
}
