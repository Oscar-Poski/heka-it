"use client";

import { useState } from "react";
import { Cpu, Code2, TerminalSquare, AppWindow } from "lucide-react";

type Capa = {
  id: string;
  label: string;
  icon: typeof Cpu;
  borderCls: string;
  bgCls: string;
  textCls: string;
  badge: string;
  detalle: string;
};

const CAPAS: Capa[] = [
  {
    id: "user",
    label: "Espacio de usuario",
    icon: AppWindow,
    borderCls: "border-blue-500/40",
    bgCls: "bg-blue-500/5",
    textCls: "text-blue-700",
    badge: "Apps, navegador, editor, servicios",
    detalle:
      "Todo lo que ves y todo lo que instalas. Tus aplicaciones, herramientas y la interfaz gráfica viven aquí, aisladas del kernel por seguridad.",
  },
  {
    id: "shell",
    label: "Shell",
    icon: TerminalSquare,
    borderCls: "border-accent/40",
    bgCls: "bg-accent/5",
    textCls: "text-accent",
    badge: "bash, zsh, fish",
    detalle:
      "La terminal: interpreta los comandos que escribes y los traduce en llamadas al kernel. Bash es el shell por defecto en la mayoría de distros.",
  },
  {
    id: "kernel",
    label: "Kernel",
    icon: Code2,
    borderCls: "border-amber-500/40",
    bgCls: "bg-amber-500/5",
    textCls: "text-amber-700",
    badge: "Linux kernel (Linus Torvalds, 1991)",
    detalle:
      "El núcleo. 30+ millones de líneas de código C que hablan directamente con el hardware. Decide qué proceso usa CPU, memoria y disco en cada momento.",
  },
  {
    id: "hardware",
    label: "Hardware",
    icon: Cpu,
    borderCls: "border-red-500/40",
    bgCls: "bg-red-500/5",
    textCls: "text-red-700",
    badge: "CPU, RAM, disco, red",
    detalle:
      "El metal: procesador, memoria, disco, tarjeta de red. Ninguna app toca esto directamente: siempre pasa por el kernel.",
  },
];

export function LinuxLayers() {
  const [selected, setSelected] = useState(1);
  const capa = CAPAS[selected];
  const Icon = capa.icon;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-2">
        Toca una capa para verla
      </div>

      <div className="space-y-1.5 mb-3">
        {CAPAS.map((c, i) => {
          const CapaIcon = c.icon;
          const active = i === selected;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(i)}
              className={`w-full flex items-center gap-3 rounded-card border px-3 py-2.5 text-left transition-all ${
                active
                  ? `${c.borderCls} ${c.bgCls} ${c.textCls}`
                  : "border-border bg-bg text-text-muted hover:border-text-dim"
              }`}
            >
              <CapaIcon size={18} strokeWidth={1.8} className="shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[13.5px] font-semibold">{c.label}</div>
                <div className="text-[11.5px] opacity-70 truncate">{c.badge}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-card border border-border bg-bg p-3">
        <div className={`flex items-center gap-2 mb-1.5 ${capa.textCls}`}>
          <Icon size={16} strokeWidth={1.8} />
          <span className="text-[13px] font-semibold">{capa.label}</span>
        </div>
        <p className="text-[13px] text-text-primary leading-relaxed">
          {capa.detalle}
        </p>
      </div>

      <p className="mt-3 text-[11.5px] text-text-dim leading-relaxed">
        Cada capa solo habla con la capa de arriba y la de abajo. Las apps NUNCA tocan
        el hardware directamente: siempre pasan por el kernel.
      </p>
    </div>
  );
}
