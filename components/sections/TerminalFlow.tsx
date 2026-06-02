"use client";

import { useState } from "react";
import {
  Keyboard,
  TerminalSquare,
  Search,
  Split,
  Cpu,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

const COMANDO = "ls -la /etc";

type Stage = {
  id: string;
  label: string;
  icon: typeof Keyboard;
  color: string;
  detalle: string;
  output: string;
};

const STAGES: Stage[] = [
  {
    id: "type",
    label: "1. Escribes el comando",
    icon: Keyboard,
    color: "text-blue-600",
    detalle:
      "Tu teclado emite cada tecla como un evento que llega al shell activo en la terminal. Aún no se ejecuta nada: solo entrada de texto.",
    output: "$ ls -la /etc█",
  },
  {
    id: "parse",
    label: "2. El shell parsea",
    icon: TerminalSquare,
    color: "text-accent",
    detalle:
      "Al presionar Enter, bash parte la línea en partes: comando, opciones y argumentos. Resuelve variables ($HOME, $PATH), expande comodines (*) y comillas.",
    output:
      "comando = ls\nflags   = -la\narg     = /etc",
  },
  {
    id: "lookup",
    label: "3. Busca el ejecutable",
    icon: Search,
    color: "text-amber-600",
    detalle:
      "Bash recorre los directorios listados en $PATH (/usr/local/bin, /usr/bin, /bin…) hasta encontrar un archivo ejecutable llamado «ls».",
    output:
      "$ which ls\n/usr/bin/ls  ← encontrado",
  },
  {
    id: "fork",
    label: "4. fork() + exec()",
    icon: Split,
    color: "text-purple-600",
    detalle:
      "Bash hace fork() para crear un proceso hijo, y el hijo llama a exec() para reemplazarse con el programa /usr/bin/ls. Bash queda esperando.",
    output:
      "PID 1843 (bash) → fork() → PID 4521 (ls)",
  },
  {
    id: "kernel",
    label: "5. Kernel ejecuta",
    icon: Cpu,
    color: "text-red-600",
    detalle:
      "El kernel le da a «ls» tiempo de CPU, abre el directorio /etc desde el sistema de archivos, lee sus entradas y devuelve los datos al proceso.",
    output:
      "syscall: openat(\"/etc\")\nsyscall: getdents() → [hosts, ssh, fstab, …]",
  },
  {
    id: "out",
    label: "6. Salida en pantalla",
    icon: CheckCircle2,
    color: "text-teal",
    detalle:
      "«ls» formatea la salida y la escribe en stdout, que por defecto es tu terminal. El proceso termina, bash recibe el código de salida y vuelve a mostrar el prompt.",
    output:
      "drwxr-xr-x  3 root root  4096 hosts\n-rw-r--r--  1 root root   513 fstab\n-rw-r--r--  1 root root  2347 passwd\n…\n$ ",
  },
];

export function TerminalFlow() {
  const [step, setStep] = useState(0);
  const stage = STAGES[step];
  const Icon = stage.icon;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="rounded-card border border-accent/40 bg-accent/5 p-3 mb-3">
        <div className="text-[11px] font-semibold text-accent uppercase tracking-wide mb-0.5">
          Comando a ejecutar
        </div>
        <div className="font-mono text-[14px] text-text-primary">$ {COMANDO}</div>
      </div>

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

      <div className="rounded-card border border-border bg-bg p-4 min-h-[220px]">
        <div className={`flex items-center gap-2 mb-2 ${stage.color}`}>
          <Icon size={18} strokeWidth={1.8} />
          <span className="text-[13.5px] font-semibold">{stage.label}</span>
        </div>
        <p className="text-[13px] text-text-primary leading-relaxed mb-3">
          {stage.detalle}
        </p>
        <pre className="rounded-card border border-border bg-surface2 p-2.5 text-[12px] font-mono text-text-primary whitespace-pre-wrap leading-relaxed">
          {stage.output}
        </pre>
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
