"use client";

import { useState } from "react";
import {
  Mail,
  Scissors,
  Route,
  Combine,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

type Stage = {
  id: string;
  label: string;
  icon: typeof Mail;
  color: string;
  detalle: string;
  visual: "mensaje" | "fragmentos" | "rutas" | "reensamble";
};

const STAGES: Stage[] = [
  {
    id: "mensaje",
    label: "1. Mensaje original",
    icon: Mail,
    color: "text-blue-600",
    detalle:
      "Quieres enviar una foto. Para internet es solo una secuencia larga de bytes que tu dispositivo debe entregar al servidor.",
    visual: "mensaje",
  },
  {
    id: "fragmentos",
    label: "2. Fragmentación",
    icon: Scissors,
    color: "text-accent",
    detalle:
      "El mensaje se parte en paquetes pequeños. Cada uno lleva su número de orden, la IP de destino y un TTL (Time To Live) que evita bucles infinitos.",
    visual: "fragmentos",
  },
  {
    id: "rutas",
    label: "3. Ruteo independiente",
    icon: Route,
    color: "text-amber-600",
    detalle:
      "Cada paquete viaja por su cuenta y puede tomar caminos distintos a través de routers. En cada salto, el TTL baja en 1. Si llega a 0, el paquete se descarta.",
    visual: "rutas",
  },
  {
    id: "reensamble",
    label: "4. Reensamble",
    icon: Combine,
    color: "text-teal",
    detalle:
      "Cuando todos los paquetes llegan al destino, se ordenan por su número y se reconstruye el mensaje original. Si falta alguno, se pide de nuevo.",
    visual: "reensamble",
  },
];

const PAQUETES = [1, 2, 3, 4];
const RUTAS = [
  { id: 1, ruta: "→ Router A → Router B → Destino", ttl: 62 },
  { id: 2, ruta: "→ Router C → Router B → Destino", ttl: 61 },
  { id: 3, ruta: "→ Router A → Router D → Destino", ttl: 60 },
  { id: 4, ruta: "→ Router C → Router D → Destino", ttl: 62 },
];

function PaqueteChip({ n, label }: { n: number; label?: string }) {
  const colors = [
    "border-accent/40 bg-accent/10 text-accent",
    "border-teal/40 bg-teal/10 text-teal",
    "border-amber-500/40 bg-amber-500/10 text-amber-700",
    "border-purple-500/40 bg-purple-500/10 text-purple-700",
  ];
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md border font-mono text-[11.5px] ${colors[(n - 1) % colors.length]}`}
    >
      <span className="font-semibold">#{n}</span>
      {label && <span className="opacity-70">{label}</span>}
    </div>
  );
}

export function PacketJourney() {
  const [step, setStep] = useState(0);
  const stage = STAGES[step];
  const Icon = stage.icon;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Stage indicator */}
      <div className="flex items-center justify-between gap-2 mb-3 overflow-x-auto">
        {STAGES.map((s, i) => (
          <div key={s.id} className="flex items-center gap-1 shrink-0">
            <div
              className={`w-7 h-7 rounded-full border flex items-center justify-center text-[11px] font-semibold transition-colors ${
                i === step
                  ? "bg-accent text-bg border-accent"
                  : i < step
                  ? "bg-accent/20 text-accent border-accent/40"
                  : "bg-surface2 text-text-dim border-border"
              }`}
            >
              {i + 1}
            </div>
            {i < STAGES.length - 1 && (
              <ChevronRight size={12} className="text-text-dim shrink-0" />
            )}
          </div>
        ))}
      </div>

      <div className="rounded-card border border-border bg-bg p-4 min-h-[220px]">
        <div className={`flex items-center gap-2 mb-2 ${stage.color}`}>
          <Icon size={18} strokeWidth={1.8} />
          <span className="text-[13.5px] font-semibold">{stage.label}</span>
        </div>
        <p className="text-[13.5px] text-text-primary leading-relaxed mb-3">
          {stage.detalle}
        </p>

        {/* Visual per stage */}
        {stage.visual === "mensaje" && (
          <div className="rounded-card border border-border bg-surface2 p-3 text-center">
            <div className="text-[11px] text-text-dim mb-1.5 uppercase tracking-wide">
              Tu foto.jpg (1.2 MB)
            </div>
            <div className="text-[13px] font-mono text-text-primary break-all">
              01001000 01101111 01101100 01100001 11110000 10011111 ...
            </div>
          </div>
        )}

        {stage.visual === "fragmentos" && (
          <div className="flex flex-wrap gap-1.5">
            {PAQUETES.map((n) => (
              <PaqueteChip key={n} n={n} />
            ))}
          </div>
        )}

        {stage.visual === "rutas" && (
          <div className="space-y-1.5">
            {RUTAS.map((r) => (
              <div
                key={r.id}
                className="flex items-center gap-2 rounded-card border border-border bg-surface2 px-2.5 py-1.5"
              >
                <PaqueteChip n={r.id} />
                <span className="text-[12px] font-mono text-text-muted flex-1">
                  {r.ruta}
                </span>
                <span className="text-[11px] text-text-dim">TTL {r.ttl}</span>
              </div>
            ))}
          </div>
        )}

        {stage.visual === "reensamble" && (
          <div className="flex items-center gap-2 flex-wrap">
            {PAQUETES.map((n) => (
              <PaqueteChip key={n} n={n} label="✓" />
            ))}
            <ChevronRight size={14} className="text-text-dim" />
            <div className="rounded-card border border-accent/40 bg-accent/10 px-2.5 py-1 text-[12px] text-accent font-semibold">
              foto.jpg reconstruido
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="text-[12.5px] px-3 py-2 rounded-card border border-border bg-bg text-text-primary disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent/40 transition-colors"
        >
          ← Anterior
        </button>
        <span className="text-[11px] text-text-dim">
          Paso {step + 1} de {STAGES.length}
        </span>
        {step < STAGES.length - 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(STAGES.length - 1, s + 1))}
            className="text-[12.5px] px-3 py-2 rounded-card border border-accent bg-accent text-bg hover:bg-accent/90 transition-colors"
          >
            Siguiente →
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStep(0)}
            className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card border border-border bg-surface2 text-text-muted hover:text-text-primary transition-colors"
          >
            <RotateCcw size={13} strokeWidth={1.8} />
            Reiniciar
          </button>
        )}
      </div>
    </div>
  );
}
