"use client";

import { useState } from "react";
import { Search } from "lucide-react";

type Frase = { id: string; texto: string };

const FRASES: Frase[] = [
  { id: "perro", texto: "Mi perro corre por el parque." },
  { id: "cachorro", texto: "El cachorro juega en el jardín." },
  { id: "gato", texto: "El gato duerme en el sofá." },
  { id: "auto", texto: "Compré un auto rojo nuevo." },
  { id: "tren", texto: "El tren llega a las ocho." },
  { id: "cocina", texto: "Estoy cocinando pasta para la cena." },
];

// Similitudes pre-cocinadas (0-1). Simula coseno entre embeddings.
// Conceptos cercanos = score alto, conceptos lejanos = score bajo.
const SIMILARITY: Record<string, Record<string, number>> = {
  perro:    { perro: 1.00, cachorro: 0.92, gato: 0.71, auto: 0.18, tren: 0.15, cocina: 0.09 },
  cachorro: { perro: 0.92, cachorro: 1.00, gato: 0.74, auto: 0.16, tren: 0.13, cocina: 0.11 },
  gato:     { perro: 0.71, cachorro: 0.74, gato: 1.00, auto: 0.14, tren: 0.12, cocina: 0.22 },
  auto:     { perro: 0.18, cachorro: 0.16, gato: 0.14, auto: 1.00, tren: 0.68, cocina: 0.10 },
  tren:     { perro: 0.15, cachorro: 0.13, gato: 0.12, auto: 0.68, tren: 1.00, cocina: 0.08 },
  cocina:   { perro: 0.09, cachorro: 0.11, gato: 0.22, auto: 0.10, tren: 0.08, cocina: 1.00 },
};

function colorFor(score: number): string {
  if (score >= 0.8) return "bg-accent text-bg border-accent";
  if (score >= 0.5) return "bg-accent/20 text-accent border-accent/40";
  if (score >= 0.3) return "bg-amber-500/15 text-amber-700 border-amber-500/40";
  return "bg-surface2 text-text-dim border-border";
}

function barColor(score: number): string {
  if (score >= 0.8) return "bg-accent";
  if (score >= 0.5) return "bg-accent/60";
  if (score >= 0.3) return "bg-amber-500";
  return "bg-text-dim/40";
}

export function EmbeddingSimilarity() {
  const [queryId, setQueryId] = useState<string>("perro");
  const query = FRASES.find((f) => f.id === queryId)!;
  const others = FRASES.filter((f) => f.id !== queryId);
  const ranked = others
    .map((f) => ({ ...f, score: SIMILARITY[queryId][f.id] }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-2">
        Elige una frase como consulta
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {FRASES.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setQueryId(f.id)}
            className={`text-[12px] px-2.5 py-1.5 rounded-full border transition-colors ${
              f.id === queryId
                ? "bg-accent text-bg border-accent"
                : "bg-surface2 text-text-muted border-border hover:border-accent/40"
            }`}
          >
            {f.texto}
          </button>
        ))}
      </div>

      <div className="rounded-card border border-accent/40 bg-accent/5 p-3 mb-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-accent uppercase tracking-wide mb-1">
          <Search size={13} strokeWidth={2} />
          Consulta
        </div>
        <div className="text-[14px] text-text-primary">{query.texto}</div>
      </div>

      <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-2">
        Resultados ordenados por similitud semántica
      </div>
      <div className="space-y-2">
        {ranked.map((r) => (
          <div
            key={r.id}
            className="rounded-card border border-border bg-bg p-3"
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="text-[13.5px] text-text-primary leading-snug flex-1">
                {r.texto}
              </div>
              <span
                className={`shrink-0 inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-semibold rounded-md border ${colorFor(r.score)}`}
              >
                {r.score.toFixed(2)}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-surface2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${barColor(r.score)}`}
                style={{ width: `${r.score * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[12px] text-text-dim leading-relaxed">
        El score (0-1) mide qué tan cerca están dos frases en el espacio de embeddings.
        Fíjate: «perro» y «cachorro» son cercanos aunque no compartan palabras. «Perro» y
        «auto» tienen palabras igual de distintas, pero el score es muchísimo más bajo.
      </p>
    </div>
  );
}
