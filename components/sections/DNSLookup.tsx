"use client";

import { useState } from "react";
import {
  HardDrive,
  Building,
  Globe,
  FolderTree,
  ServerCog,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

type Stage = {
  id: string;
  label: string;
  icon: typeof HardDrive;
  color: string;
  pregunta: string;
  respuesta: string;
  detalle: string;
};

const DOMINIO = "maps.google.com";
const IP_FINAL = "142.250.190.78";

const STAGES: Stage[] = [
  {
    id: "cache",
    label: "1. Caché local",
    icon: HardDrive,
    color: "text-blue-600",
    pregunta: `Mi PC: ¿tengo guardada la IP de ${DOMINIO}?`,
    respuesta: "No la tengo en caché.",
    detalle:
      "Tu sistema operativo guarda respuestas DNS recientes. Si la IP está aquí, terminas en <1ms. Si no, sigue.",
  },
  {
    id: "resolver",
    label: "2. Resolver del ISP",
    icon: Building,
    color: "text-accent",
    pregunta: `Resolver del ISP: ¿conoces la IP de ${DOMINIO}?`,
    respuesta: "Tampoco. Pero sé a quién preguntar. Empiezo desde la raíz.",
    detalle:
      "El servidor DNS de tu proveedor de internet hace toda la búsqueda en tu nombre. También cachea respuestas, así que muchas consultas terminan aquí.",
  },
  {
    id: "raiz",
    label: "3. Servidor raíz",
    icon: Globe,
    color: "text-amber-600",
    pregunta: `Raíz: ¿quién maneja .com?`,
    respuesta: "El TLD .com lo maneja Verisign. Pregúntale a su servidor.",
    detalle:
      "Solo hay 13 conjuntos de servidores raíz en todo el mundo. No conocen IPs concretas, pero saben quién administra cada extensión.",
  },
  {
    id: "tld",
    label: "4. Servidor TLD",
    icon: FolderTree,
    color: "text-purple-600",
    pregunta: `TLD .com: ¿quién es responsable de google.com?`,
    respuesta: "Los nameservers ns1.google.com y ns2.google.com.",
    detalle:
      "El TLD sabe qué servidor autoritativo maneja cada dominio registrado. No conoce la IP, pero te apunta al siguiente paso.",
  },
  {
    id: "auth",
    label: "5. Servidor autoritativo",
    icon: ServerCog,
    color: "text-teal",
    pregunta: `ns1.google.com: ¿cuál es la IP de ${DOMINIO}?`,
    respuesta: `${IP_FINAL} (TTL 300s)`,
    detalle:
      "Aquí vive la respuesta definitiva. El TTL indica cuánto tiempo puedes cachearla antes de volver a preguntar. La respuesta sube de vuelta hasta tu PC.",
  },
];

export function DNSLookup() {
  const [step, setStep] = useState(0);
  const stage = STAGES[step];
  const Icon = stage.icon;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Header */}
      <div className="rounded-card border border-accent/40 bg-accent/5 p-3 mb-3">
        <div className="text-[11px] font-semibold text-accent uppercase tracking-wide mb-0.5">
          Dominio a resolver
        </div>
        <div className="font-mono text-[14px] text-text-primary">{DOMINIO}</div>
      </div>

      {/* Stage indicator */}
      <div className="flex items-center justify-between gap-1 mb-3 overflow-x-auto">
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

      <div className="rounded-card border border-border bg-bg p-4 min-h-[230px]">
        <div className={`flex items-center gap-2 mb-2 ${stage.color}`}>
          <Icon size={18} strokeWidth={1.8} />
          <span className="text-[13.5px] font-semibold">{stage.label}</span>
        </div>
        <p className="text-[13px] text-text-primary leading-relaxed mb-3">
          {stage.detalle}
        </p>

        <div className="space-y-1.5">
          <div className="rounded-card border border-border bg-surface2 p-2.5">
            <div className="text-[10.5px] text-text-dim mb-0.5 uppercase tracking-wide">
              Pregunta
            </div>
            <div className="text-[12.5px] font-mono text-text-primary">
              {stage.pregunta}
            </div>
          </div>
          <div className="rounded-card border border-accent/40 bg-accent/5 p-2.5">
            <div className="text-[10.5px] text-accent mb-0.5 uppercase tracking-wide">
              Respuesta
            </div>
            <div className="text-[12.5px] font-mono text-text-primary">
              {stage.respuesta}
            </div>
          </div>
        </div>
      </div>

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
