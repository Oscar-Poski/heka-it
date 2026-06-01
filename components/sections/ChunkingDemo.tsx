"use client";

import { useMemo, useState } from "react";
import { Scissors } from "lucide-react";

const SAMPLE_TEXT = `La política de vacaciones de la empresa establece que todos los empleados a tiempo completo tienen derecho a 22 días hábiles por año calendario. Los empleados nuevos acumulan 1.25 días por mes trabajado durante el primer año, hasta completar el saldo. Las vacaciones deben solicitarse con al menos 15 días de anticipación a través del portal interno. El supervisor directo aprueba o rechaza la solicitud en un máximo de 5 días hábiles. Si no hay respuesta en ese plazo, la solicitud se considera aprobada automáticamente. Los días no usados se pueden acumular hasta 10 días al año siguiente; el excedente se pierde. En caso de terminación laboral, los días pendientes se pagan en la liquidación final.`;

function chunkText(text: string, size: number, overlap: number): string[] {
  if (size <= 0) return [text];
  const safeOverlap = Math.min(overlap, size - 1);
  const step = size - safeOverlap;
  const chunks: string[] = [];
  let i = 0;
  while (i < text.length) {
    chunks.push(text.slice(i, i + size));
    if (i + size >= text.length) break;
    i += step;
  }
  return chunks;
}

const CHUNK_COLORS = [
  "border-accent/40 bg-accent/5",
  "border-teal/40 bg-teal/5",
  "border-amber-500/40 bg-amber-500/5",
  "border-purple-500/40 bg-purple-500/5",
  "border-blue-500/40 bg-blue-500/5",
  "border-red-500/40 bg-red-500/5",
];

export function ChunkingDemo() {
  const [size, setSize] = useState(150);
  const [overlap, setOverlap] = useState(30);

  const chunks = useMemo(
    () => chunkText(SAMPLE_TEXT, size, overlap),
    [size, overlap]
  );

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Sliders */}
      <div className="space-y-3 mb-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-[11px] font-semibold text-text-muted uppercase tracking-wide">
              Tamaño del chunk
            </label>
            <span className="text-[12px] font-mono font-semibold text-accent">
              {size} chars
            </span>
          </div>
          <input
            type="range"
            min={50}
            max={400}
            step={10}
            value={size}
            onChange={(e) => {
              const newSize = parseInt(e.target.value);
              setSize(newSize);
              if (overlap >= newSize) setOverlap(Math.max(0, newSize - 10));
            }}
            className="w-full accent-accent"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-[11px] font-semibold text-text-muted uppercase tracking-wide">
              Overlap (solape)
            </label>
            <span className="text-[12px] font-mono font-semibold text-teal">
              {overlap} chars
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={Math.max(0, size - 10)}
            step={5}
            value={overlap}
            onChange={(e) => setOverlap(parseInt(e.target.value))}
            className="w-full accent-teal"
          />
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center gap-2 text-[12.5px] mb-3">
        <Scissors size={14} strokeWidth={1.8} className="text-accent" />
        <span className="font-semibold text-accent">{chunks.length} chunks</span>
        <span className="text-text-dim">
          generados desde un texto de {SAMPLE_TEXT.length} caracteres
        </span>
      </div>

      {/* Chunks */}
      <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
        {chunks.map((chunk, i) => (
          <div
            key={i}
            className={`rounded-card border p-3 ${CHUNK_COLORS[i % CHUNK_COLORS.length]}`}
          >
            <div className="text-[10.5px] font-mono font-semibold text-text-muted mb-1">
              CHUNK {i + 1} · {chunk.length} chars
            </div>
            <div className="text-[12.5px] text-text-primary leading-relaxed whitespace-pre-wrap">
              {chunk}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[12px] text-text-dim leading-relaxed">
        Sube el overlap para ver cómo el contenido del final de un chunk se repite al
        inicio del siguiente. Esto evita que una idea importante se corte justo en el
        límite y desaparezca del retrieval.
      </p>
    </div>
  );
}
