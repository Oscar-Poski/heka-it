"use client";

import { useState } from "react";
import { FileText, Filter, Hash, ChevronRight, RotateCcw } from "lucide-react";

type Stage = {
  id: string;
  cmd: string;
  label: string;
  icon: typeof FileText;
  color: string;
  detalle: string;
  input: string;
  output: string;
};

const PIPELINE_CMD = "cat errores.log | grep 'FATAL' | wc -l";

const STAGES: Stage[] = [
  {
    id: "cat",
    cmd: "cat errores.log",
    label: "1. cat — Lee y emite",
    icon: FileText,
    color: "text-blue-600",
    detalle:
      "cat abre el archivo errores.log y manda cada línea por stdout. No filtra ni transforma: solo lee.",
    input: "(archivo en disco: errores.log)",
    output:
      "[2024-01-15] INFO  arranque ok\n[2024-01-15] WARN  cache miss\n[2024-01-15] FATAL conexión BD perdida\n[2024-01-15] INFO  reintentando\n[2024-01-15] FATAL no se pudo recuperar\n[2024-01-15] INFO  apagado limpio",
  },
  {
    id: "grep",
    cmd: "grep 'FATAL'",
    label: "2. grep 'FATAL' — Filtra",
    icon: Filter,
    color: "text-accent",
    detalle:
      "grep recibe por stdin las líneas que emitió cat. Mantiene solo las que contienen el patrón «FATAL» y descarta el resto. Lo que sobrevive sale por stdout.",
    input:
      "[…] INFO  arranque ok\n[…] WARN  cache miss\n[…] FATAL conexión BD perdida\n[…] INFO  reintentando\n[…] FATAL no se pudo recuperar\n[…] INFO  apagado limpio",
    output:
      "[2024-01-15] FATAL conexión BD perdida\n[2024-01-15] FATAL no se pudo recuperar",
  },
  {
    id: "wc",
    cmd: "wc -l",
    label: "3. wc -l — Cuenta líneas",
    icon: Hash,
    color: "text-teal",
    detalle:
      "wc -l recibe las líneas filtradas por grep y simplemente las cuenta. El resultado final es un solo número.",
    input:
      "[2024-01-15] FATAL conexión BD perdida\n[2024-01-15] FATAL no se pudo recuperar",
    output: "2",
  },
];

export function PipelineFlow() {
  const [step, setStep] = useState(0);
  const stage = STAGES[step];
  const Icon = stage.icon;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="rounded-card border border-accent/40 bg-accent/5 p-3 mb-3">
        <div className="text-[11px] font-semibold text-accent uppercase tracking-wide mb-0.5">
          Pipeline a ejecutar
        </div>
        <div className="font-mono text-[13px] text-text-primary break-all">
          $ {PIPELINE_CMD}
        </div>
      </div>

      {/* Stage chips */}
      <div className="flex items-center gap-1 mb-3 overflow-x-auto">
        {STAGES.map((s, i) => (
          <div key={s.id} className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setStep(i)}
              className={`text-[11.5px] font-mono px-2.5 py-1.5 rounded-card border transition-colors ${
                i === step
                  ? "bg-accent text-bg border-accent"
                  : i < step
                  ? "bg-accent/15 text-accent border-accent/40"
                  : "bg-surface2 text-text-dim border-border hover:text-text-primary"
              }`}
            >
              {s.cmd}
            </button>
            {i < STAGES.length - 1 && (
              <ChevronRight size={14} className="text-text-dim shrink-0" />
            )}
          </div>
        ))}
      </div>

      <div className="rounded-card border border-border bg-bg p-3">
        <div className={`flex items-center gap-2 mb-2 ${stage.color}`}>
          <Icon size={16} strokeWidth={1.8} />
          <span className="text-[13px] font-semibold">{stage.label}</span>
        </div>
        <p className="text-[12.5px] text-text-primary leading-relaxed mb-3">
          {stage.detalle}
        </p>

        <div className="grid grid-cols-1 gap-2">
          <div>
            <div className="text-[10.5px] text-text-dim uppercase tracking-wide mb-1">
              stdin recibe
            </div>
            <pre className="rounded-card border border-border bg-surface2 p-2 text-[11.5px] font-mono text-text-muted whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
              {stage.input}
            </pre>
          </div>
          <div>
            <div className="text-[10.5px] text-accent uppercase tracking-wide mb-1">
              stdout emite
            </div>
            <pre className="rounded-card border border-accent/40 bg-accent/5 p-2 text-[11.5px] font-mono text-text-primary whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
              {stage.output}
            </pre>
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
