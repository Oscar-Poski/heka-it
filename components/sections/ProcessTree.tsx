"use client";

import { useState } from "react";
import { Activity, Pause, Skull, Loader2 } from "lucide-react";

type Estado = "running" | "sleeping" | "stopped" | "zombie";

type Proc = {
  pid: number;
  ppid: number;
  name: string;
  user: string;
  cpu: number;
  estado: Estado;
  depth: number;
};

const PROCS: Proc[] = [
  { pid: 1, ppid: 0, name: "systemd", user: "root", cpu: 0.1, estado: "running", depth: 0 },
  { pid: 412, ppid: 1, name: "sshd", user: "root", cpu: 0.0, estado: "sleeping", depth: 1 },
  { pid: 1023, ppid: 412, name: "bash (oscar)", user: "oscar", cpu: 0.2, estado: "sleeping", depth: 2 },
  { pid: 4521, ppid: 1023, name: "vim notas.md", user: "oscar", cpu: 1.4, estado: "running", depth: 3 },
  { pid: 530, ppid: 1, name: "nginx", user: "www-data", cpu: 3.8, estado: "running", depth: 1 },
  { pid: 532, ppid: 530, name: "nginx (worker)", user: "www-data", cpu: 2.1, estado: "running", depth: 2 },
  { pid: 698, ppid: 1, name: "postgres", user: "postgres", cpu: 12.3, estado: "running", depth: 1 },
  { pid: 891, ppid: 1, name: "cron", user: "root", cpu: 0.0, estado: "sleeping", depth: 1 },
  { pid: 2104, ppid: 1023, name: "old_script.sh", user: "oscar", cpu: 0.0, estado: "zombie", depth: 3 },
];

function EstadoBadge({ estado }: { estado: Estado }) {
  const cfg = {
    running: { label: "Running", cls: "bg-accent/15 text-accent border-accent/40", Icon: Activity },
    sleeping: { label: "Sleeping", cls: "bg-blue-500/15 text-blue-700 border-blue-500/40", Icon: Loader2 },
    stopped: { label: "Stopped", cls: "bg-amber-500/15 text-amber-700 border-amber-500/40", Icon: Pause },
    zombie: { label: "Zombie", cls: "bg-red-500/15 text-red-700 border-red-500/40", Icon: Skull },
  };
  const c = cfg[estado];
  const Icon = c.Icon;
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-md border ${c.cls}`}>
      <Icon size={10} strokeWidth={2} />
      {c.label}
    </span>
  );
}

export function ProcessTree() {
  const [selectedPid, setSelectedPid] = useState<number>(1);
  const selected = PROCS.find((p) => p.pid === selectedPid)!;
  const parent = PROCS.find((p) => p.pid === selected.ppid);
  const children = PROCS.filter((p) => p.ppid === selected.pid);

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-2">
        Árbol de procesos · clic para inspeccionar
      </div>

      <div className="rounded-card border border-border bg-bg p-3 mb-3 font-mono text-[12.5px] max-h-[260px] overflow-y-auto">
        {PROCS.map((p) => {
          const active = p.pid === selectedPid;
          return (
            <button
              key={p.pid}
              type="button"
              onClick={() => setSelectedPid(p.pid)}
              className={`w-full flex items-center gap-2 px-2 py-1 rounded-md transition-colors text-left ${
                active
                  ? "bg-accent/15 text-accent"
                  : "text-text-muted hover:bg-surface2 hover:text-text-primary"
              }`}
              style={{ paddingLeft: `${0.5 + p.depth * 1.25}rem` }}
            >
              {p.depth > 0 && <span className="opacity-40">└─</span>}
              <span className="font-semibold w-12 shrink-0">{p.pid}</span>
              <span className="flex-1 truncate">{p.name}</span>
              <EstadoBadge estado={p.estado} />
            </button>
          );
        })}
      </div>

      <div className="rounded-card border border-accent/40 bg-accent/5 p-3">
        <div className="text-[11px] text-accent font-semibold uppercase tracking-wide mb-2">
          Proceso seleccionado
        </div>
        <div className="grid grid-cols-2 gap-2 text-[12.5px]">
          <div>
            <span className="text-text-dim">PID:</span>{" "}
            <span className="font-mono font-semibold text-text-primary">{selected.pid}</span>
          </div>
          <div>
            <span className="text-text-dim">PPID:</span>{" "}
            <span className="font-mono font-semibold text-text-primary">
              {selected.ppid} {parent && `(${parent.name})`}
            </span>
          </div>
          <div>
            <span className="text-text-dim">Usuario:</span>{" "}
            <span className="font-mono text-text-primary">{selected.user}</span>
          </div>
          <div>
            <span className="text-text-dim">CPU:</span>{" "}
            <span className="font-mono text-text-primary">{selected.cpu.toFixed(1)}%</span>
          </div>
          <div className="col-span-2">
            <span className="text-text-dim">Hijos directos:</span>{" "}
            <span className="font-mono text-text-primary">
              {children.length === 0 ? "ninguno" : children.map((c) => c.pid).join(", ")}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-[11.5px] text-text-dim leading-relaxed">
        Todo proceso desciende de PID 1 (systemd). Si un padre muere sin esperar a su
        hijo, el hijo queda «huérfano» y systemd lo adopta. Los zombies (como PID 2104)
        ya terminaron pero su padre no recogió su estado de salida.
      </p>
    </div>
  );
}
