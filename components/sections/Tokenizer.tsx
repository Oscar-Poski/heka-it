"use client";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";

// Heurística de tokenización (no es BPE real, es para enseñar el concepto).
// Reglas: separa por espacios y signos de puntuación. Si una palabra es larga
// (>6 chars) o contiene mayúsculas internas, la divide en sub-tokens.
function tokenize(input: string): string[] {
  if (!input.trim()) return [];
  // Separa por espacios y signos de puntuación, conservando los signos.
  const pieces = input.match(/[\p{L}\p{N}]+|[^\s\p{L}\p{N}]/gu) ?? [];
  const tokens: string[] = [];
  for (const piece of pieces) {
    if (/^[\p{L}\p{N}]+$/u.test(piece)) {
      // Palabra: si es corta y minúsculas, un token. Si no, parte en chunks.
      if (piece.length <= 5 && piece === piece.toLowerCase()) {
        tokens.push(piece);
      } else {
        // Divide en chunks de ~4 caracteres simulando sub-tokens BPE.
        let i = 0;
        while (i < piece.length) {
          const chunkSize = i === 0 ? 4 : 3;
          tokens.push(piece.slice(i, i + chunkSize));
          i += chunkSize;
        }
      }
    } else {
      tokens.push(piece);
    }
  }
  return tokens;
}

const PRESETS: { label: string; texto: string }[] = [
  { label: "Frase corta", texto: "Hola, ¿cómo estás?" },
  { label: "Palabra larga", texto: "Internacionalización" },
  { label: "Mixto ES/EN", texto: "Voy a usar ChatGPT mañana." },
];

const CHIP_COLORS = [
  "bg-accent/15 text-accent border-accent/30",
  "bg-teal/15 text-teal border-teal/30",
  "bg-amber-500/15 text-amber-700 border-amber-500/30",
  "bg-purple-500/15 text-purple-700 border-purple-500/30",
];

export function Tokenizer() {
  const [input, setInput] = useState(PRESETS[0].texto);

  const tokens = useMemo(() => tokenize(input), [input]);

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <label className="block text-[12px] font-semibold text-text-muted mb-2 uppercase tracking-wide">
        Escribe una frase
      </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe algo para tokenizar…"
        className="w-full rounded-card border border-border bg-bg px-3 py-2.5 text-[14px] text-text-primary focus:outline-none focus:border-accent transition-colors"
      />

      <div className="mt-3 flex flex-wrap gap-1.5">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setInput(p.texto)}
            className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-surface2 text-text-muted hover:border-accent/40 hover:text-accent transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between mb-2">
        <span className="text-[12px] font-semibold text-text-muted uppercase tracking-wide">
          Tokens
        </span>
        <span className="inline-flex items-center gap-1 text-[12px] text-accent font-semibold">
          <Sparkles size={13} strokeWidth={2} />
          {tokens.length}
        </span>
      </div>

      <div className="rounded-card border border-border bg-bg p-3 min-h-[64px] flex flex-wrap gap-1.5">
        {tokens.length === 0 ? (
          <span className="text-[13px] text-text-dim italic">
            Tu texto aparecerá aquí dividido en tokens.
          </span>
        ) : (
          tokens.map((t, i) => (
            <span
              key={i}
              className={`inline-flex items-center px-2 py-0.5 text-[12.5px] font-mono rounded-md border ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
            >
              {t === " " ? "␣" : t}
            </span>
          ))
        )}
      </div>

      <p className="mt-3 text-[12px] text-text-dim leading-relaxed">
        Aproximación didáctica. Los tokenizadores reales (BPE) son más sofisticados:
        una palabra común como «hola» es 1 token, pero «Internacionalización» puede
        ser 5 o más.
      </p>
    </div>
  );
}
