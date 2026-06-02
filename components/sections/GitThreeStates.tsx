"use client";

import { useState } from "react";
import { FileText, FilePlus2, GitCommit, RotateCcw, Folder, Archive } from "lucide-react";

type Estado = "modificado" | "staged" | "commited";
type Archivo = { nombre: string; estado: Estado };

const ARCHIVOS_INICIAL: Archivo[] = [
  { nombre: "README.md", estado: "modificado" },
  { nombre: "src/index.ts", estado: "modificado" },
  { nombre: "package.json", estado: "modificado" },
];

function ColumnHeader({
  icon: Icon,
  title,
  subtitle,
  color,
}: {
  icon: typeof Folder;
  title: string;
  subtitle: string;
  color: string;
}) {
  return (
    <div className={`flex items-center gap-1.5 mb-2 ${color}`}>
      <Icon size={14} strokeWidth={1.8} />
      <div>
        <div className="text-[12px] font-semibold">{title}</div>
        <div className="text-[10.5px] opacity-70">{subtitle}</div>
      </div>
    </div>
  );
}

export function GitThreeStates() {
  const [archivos, setArchivos] = useState<Archivo[]>(ARCHIVOS_INICIAL);
  const [log, setLog] = useState<string[]>([]);

  const moverA = (nombre: string, nuevo: Estado) => {
    setArchivos((prev) =>
      prev.map((a) => (a.nombre === nombre ? { ...a, estado: nuevo } : a))
    );
  };

  const stageAll = () => {
    setArchivos((prev) =>
      prev.map((a) => (a.estado === "modificado" ? { ...a, estado: "staged" } : a))
    );
    setLog((l) => ["$ git add .", ...l].slice(0, 4));
  };

  const commitAll = () => {
    const stagedCount = archivos.filter((a) => a.estado === "staged").length;
    if (stagedCount === 0) return;
    setArchivos((prev) =>
      prev.map((a) => (a.estado === "staged" ? { ...a, estado: "commited" } : a))
    );
    setLog((l) => [`$ git commit -m "cambios"   → ${stagedCount} archivos`, ...l].slice(0, 4));
  };

  const reset = () => {
    setArchivos(ARCHIVOS_INICIAL);
    setLog([]);
  };

  const filterBy = (e: Estado) => archivos.filter((a) => a.estado === e);

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="rounded-card border border-amber-500/40 bg-amber-500/5 p-3">
          <ColumnHeader
            icon={Folder}
            title="Working dir"
            subtitle="Tus cambios sin guardar"
            color="text-amber-700"
          />
          <div className="space-y-1 min-h-[80px]">
            {filterBy("modificado").map((a) => (
              <button
                key={a.nombre}
                type="button"
                onClick={() => moverA(a.nombre, "staged")}
                className="w-full flex items-center gap-1.5 text-left px-2 py-1 rounded-md border border-amber-500/30 bg-bg hover:border-amber-500/60 transition-colors text-[11.5px] font-mono text-text-primary"
              >
                <FileText size={11} strokeWidth={1.8} className="text-amber-700" />
                <span className="truncate">{a.nombre}</span>
              </button>
            ))}
            {filterBy("modificado").length === 0 && (
              <div className="text-[11px] text-text-dim italic">vacío</div>
            )}
          </div>
        </div>

        <div className="rounded-card border border-accent/40 bg-accent/5 p-3">
          <ColumnHeader
            icon={FilePlus2}
            title="Staging"
            subtitle="Listos para commit"
            color="text-accent"
          />
          <div className="space-y-1 min-h-[80px]">
            {filterBy("staged").map((a) => (
              <button
                key={a.nombre}
                type="button"
                onClick={() => moverA(a.nombre, "modificado")}
                className="w-full flex items-center gap-1.5 text-left px-2 py-1 rounded-md border border-accent/30 bg-bg hover:border-accent/60 transition-colors text-[11.5px] font-mono text-text-primary"
              >
                <FileText size={11} strokeWidth={1.8} className="text-accent" />
                <span className="truncate">{a.nombre}</span>
              </button>
            ))}
            {filterBy("staged").length === 0 && (
              <div className="text-[11px] text-text-dim italic">vacío</div>
            )}
          </div>
        </div>

        <div className="rounded-card border border-teal/40 bg-teal/5 p-3">
          <ColumnHeader
            icon={Archive}
            title="Repository"
            subtitle="Historial permanente"
            color="text-teal"
          />
          <div className="space-y-1 min-h-[80px]">
            {filterBy("commited").map((a) => (
              <div
                key={a.nombre}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-teal/30 bg-bg text-[11.5px] font-mono text-text-primary"
              >
                <GitCommit size={11} strokeWidth={1.8} className="text-teal" />
                <span className="truncate">{a.nombre}</span>
              </div>
            ))}
            {filterBy("commited").length === 0 && (
              <div className="text-[11px] text-text-dim italic">vacío</div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <button
          type="button"
          onClick={stageAll}
          disabled={filterBy("modificado").length === 0}
          className="flex-1 text-[12.5px] px-3 py-2 rounded-card border border-accent bg-accent text-bg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors font-mono"
        >
          git add .
        </button>
        <button
          type="button"
          onClick={commitAll}
          disabled={filterBy("staged").length === 0}
          className="flex-1 text-[12.5px] px-3 py-2 rounded-card border border-teal bg-teal text-bg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-teal/90 transition-colors font-mono"
        >
          git commit -m
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

      <div className="rounded-card border border-border bg-bg p-2.5 min-h-[80px]">
        <div className="text-[10.5px] text-text-dim uppercase tracking-wide mb-1">
          Terminal
        </div>
        {log.length === 0 ? (
          <div className="text-[11px] text-text-dim italic font-mono">
            (sin comandos aún. Haz clic en un archivo o usa los botones de arriba.)
          </div>
        ) : (
          <div className="space-y-0.5">
            {log.map((l, i) => (
              <div key={i} className="text-[11.5px] font-mono text-text-primary">
                {l}
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="mt-3 text-[11.5px] text-text-dim leading-relaxed">
        Haz clic en un archivo para moverlo entre estados, o usa los botones que
        simulan los comandos reales: <span className="font-mono">git add</span> mueve a
        staging; <span className="font-mono">git commit</span> mueve al repositorio.
      </p>
    </div>
  );
}
