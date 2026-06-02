"use client";

import { useState } from "react";
import { AlertTriangle, Check, GitMerge, RotateCcw } from "lucide-react";

type Resolucion = "main" | "feature" | "ambos" | null;

const ARCHIVO_BASE = `function precio(items) {
  // calcula el total
  return items.reduce((a, b) => a + b, 0);
}`;

const VERSION_MAIN = `function precio(items) {
  // calcula el total con IVA
  const subtotal = items.reduce((a, b) => a + b, 0);
  return subtotal * 1.16;
}`;

const VERSION_FEATURE = `function precio(items) {
  // calcula el total con descuento
  const subtotal = items.reduce((a, b) => a + b, 0);
  return subtotal * 0.9;
}`;

const ARCHIVO_CONFLICTO = `function precio(items) {
<<<<<<< HEAD
  // calcula el total con IVA
  const subtotal = items.reduce((a, b) => a + b, 0);
  return subtotal * 1.16;
=======
  // calcula el total con descuento
  const subtotal = items.reduce((a, b) => a + b, 0);
  return subtotal * 0.9;
>>>>>>> feature/descuento
}`;

const RESUELTO: Record<Exclude<Resolucion, null>, string> = {
  main: `function precio(items) {
  // calcula el total con IVA
  const subtotal = items.reduce((a, b) => a + b, 0);
  return subtotal * 1.16;
}`,
  feature: `function precio(items) {
  // calcula el total con descuento
  const subtotal = items.reduce((a, b) => a + b, 0);
  return subtotal * 0.9;
}`,
  ambos: `function precio(items) {
  // calcula el total con IVA y descuento
  const subtotal = items.reduce((a, b) => a + b, 0);
  return subtotal * 1.16 * 0.9;
}`,
};

export function GitConflict() {
  const [resolucion, setResolucion] = useState<Resolucion>(null);

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Base */}
      <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
        Estado base (ambas ramas parten de aquí)
      </div>
      <pre className="rounded-card border border-border bg-bg p-2.5 text-[11.5px] font-mono text-text-primary mb-3 overflow-x-auto leading-relaxed">
        {ARCHIVO_BASE}
      </pre>

      {/* Two parallel changes */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-card border border-accent/40 bg-accent/5 p-2.5">
          <div className="text-[11px] font-semibold text-accent uppercase tracking-wide mb-1">
            main añade IVA
          </div>
          <pre className="text-[11px] font-mono text-text-primary whitespace-pre-wrap leading-relaxed">
            {VERSION_MAIN}
          </pre>
        </div>
        <div className="rounded-card border border-teal/40 bg-teal/5 p-2.5">
          <div className="text-[11px] font-semibold text-teal uppercase tracking-wide mb-1">
            feature añade descuento
          </div>
          <pre className="text-[11px] font-mono text-text-primary whitespace-pre-wrap leading-relaxed">
            {VERSION_FEATURE}
          </pre>
        </div>
      </div>

      {/* Conflict markers */}
      <div className="rounded-card border border-red-500/40 bg-red-500/5 p-2.5 mb-3">
        <div className="flex items-center gap-1.5 text-red-700 mb-1.5">
          <AlertTriangle size={13} strokeWidth={1.8} />
          <span className="text-[11px] font-semibold uppercase tracking-wide">
            Git detecta el conflicto y marca el archivo así
          </span>
        </div>
        <pre className="text-[11.5px] font-mono text-text-primary whitespace-pre-wrap leading-relaxed">
          {ARCHIVO_CONFLICTO}
        </pre>
      </div>

      {/* Resolution buttons */}
      <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-2">
        Tú decides cómo resolver
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        <button
          type="button"
          onClick={() => setResolucion("main")}
          className={`text-[11.5px] px-2 py-2 rounded-card border transition-colors ${
            resolucion === "main"
              ? "bg-accent text-bg border-accent"
              : "bg-surface2 text-text-muted border-border hover:border-accent/40"
          }`}
        >
          Quedarme con main
        </button>
        <button
          type="button"
          onClick={() => setResolucion("feature")}
          className={`text-[11.5px] px-2 py-2 rounded-card border transition-colors ${
            resolucion === "feature"
              ? "bg-teal text-bg border-teal"
              : "bg-surface2 text-text-muted border-border hover:border-teal/40"
          }`}
        >
          Quedarme con feature
        </button>
        <button
          type="button"
          onClick={() => setResolucion("ambos")}
          className={`text-[11.5px] px-2 py-2 rounded-card border transition-colors ${
            resolucion === "ambos"
              ? "bg-purple-500 text-bg border-purple-500"
              : "bg-surface2 text-text-muted border-border hover:border-purple-500/40"
          }`}
        >
          Combinar ambos
        </button>
      </div>

      {resolucion && (
        <>
          <div className="flex items-center gap-1.5 text-accent mb-1.5">
            <Check size={13} strokeWidth={2} />
            <span className="text-[11px] font-semibold uppercase tracking-wide">
              Archivo final + commit de merge
            </span>
          </div>
          <pre className="rounded-card border border-accent/40 bg-accent/5 p-2.5 text-[11.5px] font-mono text-text-primary mb-2 whitespace-pre-wrap leading-relaxed">
            {RESUELTO[resolucion]}
          </pre>
          <div className="rounded-card border border-border bg-bg p-2 text-[11.5px] font-mono text-text-muted">
            <span className="text-accent">$</span> git add precio.js && git commit
            <br />
            <GitMerge className="inline" size={11} /> Merge branch 'feature/descuento' into main
          </div>
        </>
      )}

      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={() => setResolucion(null)}
          className="inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-card border border-border bg-surface2 text-text-muted hover:text-text-primary transition-colors"
        >
          <RotateCcw size={12} strokeWidth={1.8} />
          Reset
        </button>
      </div>
    </div>
  );
}
