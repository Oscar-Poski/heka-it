"use client";

import { useState } from "react";
import {
  FileText,
  Sparkles,
  Database,
  Search,
  Layers,
  MessageSquare,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

type Stage = {
  id: string;
  label: string;
  icon: typeof FileText;
  color: string;
  detalle: string;
  output: string;
};

const STAGES: Stage[] = [
  {
    id: "query",
    label: "1. Pregunta del usuario",
    icon: MessageSquare,
    color: "text-blue-600",
    detalle:
      "El usuario hace una pregunta en lenguaje natural. Es el punto de entrada del pipeline.",
    output: "«¿Cuál es la política de vacaciones para empleados nuevos?»",
  },
  {
    id: "embed",
    label: "2. Convertir a embedding",
    icon: Sparkles,
    color: "text-accent",
    detalle:
      "La pregunta se convierte en un vector numérico (embedding) que captura su significado. Este vector vive en un espacio donde frases parecidas están cerca.",
    output: "[0.21, -0.45, 0.78, 0.13, ..., 0.02]  (vector de 1536 dimensiones)",
  },
  {
    id: "search",
    label: "3. Buscar en la base vectorial",
    icon: Search,
    color: "text-amber-600",
    detalle:
      "Se busca en la base de datos vectorial: ¿qué chunks de documentos están más cerca de este embedding? Se devuelven los top-K (ej: 3 más similares).",
    output:
      "Top 3 chunks recuperados:\n• Manual_RRHH p.14 (sim: 0.91)\n• Política_2025.pdf p.3 (sim: 0.88)\n• FAQ_nuevos.md (sim: 0.82)",
  },
  {
    id: "context",
    label: "4. Construir el prompt aumentado",
    icon: Layers,
    color: "text-purple-600",
    detalle:
      "Los chunks recuperados se inyectan en el prompt como contexto. El LLM ahora recibe: las instrucciones + los documentos relevantes + la pregunta original.",
    output:
      "System: Responde usando solo los documentos provistos.\n\nContexto:\n[chunk 1]\n[chunk 2]\n[chunk 3]\n\nPregunta: ¿Cuál es la política de vacaciones para empleados nuevos?",
  },
  {
    id: "generate",
    label: "5. Generar la respuesta",
    icon: Database,
    color: "text-teal",
    detalle:
      "El LLM genera la respuesta basándose en el contexto recuperado, no en su memoria interna. Esto reduce alucinaciones y permite citar fuentes.",
    output:
      "Los empleados nuevos acumulan 1.25 días de vacaciones por mes trabajado durante el primer año. Fuente: Manual_RRHH p.14, Política_2025.pdf p.3.",
  },
];

export function RagPipeline() {
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

      {/* Stage card */}
      <div className="rounded-card border border-border bg-bg p-4 min-h-[200px]">
        <div className={`flex items-center gap-2 mb-2 ${stage.color}`}>
          <Icon size={18} strokeWidth={1.8} />
          <span className="text-[13.5px] font-semibold">{stage.label}</span>
        </div>
        <p className="text-[13.5px] text-text-primary leading-relaxed mb-3">
          {stage.detalle}
        </p>
        <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
          Salida de esta fase
        </div>
        <pre className="rounded-card border border-border bg-surface2 p-2.5 text-[12px] font-mono text-text-primary whitespace-pre-wrap break-words leading-relaxed">
          {stage.output}
        </pre>
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
