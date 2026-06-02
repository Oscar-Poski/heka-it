"use client";

import { useState } from "react";
import { GitBranch, GitMerge, GitCommit, ChevronRight, RotateCcw } from "lucide-react";

type Commit = {
  id: string;
  parent?: string;
  parent2?: string;
  branch: "main" | "feature";
  msg: string;
};

type Stage = {
  label: string;
  cmd: string;
  detalle: string;
  commits: Commit[];
  branches: { name: "main" | "feature"; head: string }[];
};

const STAGES: Stage[] = [
  {
    label: "1. Estado inicial",
    cmd: "git log --oneline",
    detalle: "main tiene dos commits. Estamos en la rama main.",
    commits: [
      { id: "a1", branch: "main", msg: "init" },
      { id: "b2", parent: "a1", branch: "main", msg: "primer endpoint" },
    ],
    branches: [{ name: "main", head: "b2" }],
  },
  {
    label: "2. Crear rama feature",
    cmd: "git switch -c feature/login",
    detalle: "Creamos una nueva rama desde el último commit de main. Aún no diverge: feature apunta al mismo commit que main.",
    commits: [
      { id: "a1", branch: "main", msg: "init" },
      { id: "b2", parent: "a1", branch: "main", msg: "primer endpoint" },
    ],
    branches: [
      { name: "main", head: "b2" },
      { name: "feature", head: "b2" },
    ],
  },
  {
    label: "3. Commits en feature",
    cmd: "git commit -m '...'",
    detalle: "Trabajamos en feature: dos commits nuevos que solo viven en esa rama. main queda intacta.",
    commits: [
      { id: "a1", branch: "main", msg: "init" },
      { id: "b2", parent: "a1", branch: "main", msg: "primer endpoint" },
      { id: "c3", parent: "b2", branch: "feature", msg: "form de login" },
      { id: "d4", parent: "c3", branch: "feature", msg: "validación" },
    ],
    branches: [
      { name: "main", head: "b2" },
      { name: "feature", head: "d4" },
    ],
  },
  {
    label: "4. Otro commit en main (paralelo)",
    cmd: "git switch main && git commit",
    detalle: "Mientras tanto, alguien más empuja a main. Las ramas ya divergen: tienen historias distintas.",
    commits: [
      { id: "a1", branch: "main", msg: "init" },
      { id: "b2", parent: "a1", branch: "main", msg: "primer endpoint" },
      { id: "c3", parent: "b2", branch: "feature", msg: "form de login" },
      { id: "d4", parent: "c3", branch: "feature", msg: "validación" },
      { id: "e5", parent: "b2", branch: "main", msg: "fix typo" },
    ],
    branches: [
      { name: "main", head: "e5" },
      { name: "feature", head: "d4" },
    ],
  },
  {
    label: "5. Merge feature en main",
    cmd: "git switch main && git merge feature",
    detalle: "Combinamos las dos historias. Git crea un commit de merge con DOS padres (e5 y d4). Ambas líneas de trabajo quedan integradas.",
    commits: [
      { id: "a1", branch: "main", msg: "init" },
      { id: "b2", parent: "a1", branch: "main", msg: "primer endpoint" },
      { id: "c3", parent: "b2", branch: "feature", msg: "form de login" },
      { id: "d4", parent: "c3", branch: "feature", msg: "validación" },
      { id: "e5", parent: "b2", branch: "main", msg: "fix typo" },
      { id: "f6", parent: "e5", parent2: "d4", branch: "main", msg: "merge feature/login" },
    ],
    branches: [
      { name: "main", head: "f6" },
      { name: "feature", head: "d4" },
    ],
  },
];

function CommitNode({ commit, isHead, branchHead }: { commit: Commit; isHead: boolean; branchHead?: string }) {
  const colorCls = commit.branch === "main"
    ? "border-accent/60 bg-accent/10 text-accent"
    : "border-teal/60 bg-teal/10 text-teal";
  const isMerge = !!commit.parent2;
  return (
    <div className="flex items-center gap-2">
      <div
        className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center ${colorCls} ${isHead ? "ring-2 ring-offset-1 ring-accent/40" : ""}`}
      >
        {isMerge ? <GitMerge size={12} strokeWidth={2} /> : <GitCommit size={12} strokeWidth={2} />}
      </div>
      <div className="flex-1 flex items-center gap-2 min-w-0">
        <span className="font-mono text-[11.5px] text-text-dim">{commit.id}</span>
        <span className="text-[12.5px] text-text-primary truncate flex-1">{commit.msg}</span>
        {branchHead && (
          <span
            className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono font-semibold border ${
              branchHead === "main"
                ? "bg-accent text-bg border-accent"
                : "bg-teal text-bg border-teal"
            }`}
          >
            {branchHead}
          </span>
        )}
      </div>
    </div>
  );
}

export function GitGraph() {
  const [step, setStep] = useState(0);
  const stage = STAGES[step];

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="rounded-card border border-accent/40 bg-accent/5 p-3 mb-3">
        <div className="text-[11px] font-semibold text-accent uppercase tracking-wide mb-0.5">
          Comando de esta etapa
        </div>
        <div className="font-mono text-[13px] text-text-primary">$ {stage.cmd}</div>
      </div>

      <div className="flex items-center justify-between gap-1 mb-3 overflow-x-auto">
        {STAGES.map((s, i) => (
          <div key={i} className="flex items-center gap-1 shrink-0">
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
            {i < STAGES.length - 1 && <ChevronRight size={12} className="text-text-dim shrink-0" />}
          </div>
        ))}
      </div>

      <div className="rounded-card border border-border bg-bg p-3 mb-3">
        <div className="text-[13.5px] font-semibold text-text-primary mb-1.5">{stage.label}</div>
        <p className="text-[12.5px] text-text-muted leading-relaxed mb-3">{stage.detalle}</p>
        <div className="space-y-1.5">
          {stage.commits.slice().reverse().map((c) => {
            const branchHead = stage.branches.find((b) => b.head === c.id)?.name;
            return (
              <CommitNode
                key={c.id}
                commit={c}
                isHead={!!branchHead}
                branchHead={branchHead}
              />
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
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
