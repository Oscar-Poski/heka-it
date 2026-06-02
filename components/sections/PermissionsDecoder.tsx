"use client";

import { useMemo, useState } from "react";
import { Eye, Pencil, PlayCircle, X } from "lucide-react";

type Bit = "r" | "w" | "x" | "-";

const PRESETS: { label: string; perms: string }[] = [
  { label: "Script público", perms: "rwxr-xr-x" },
  { label: "Documento privado", perms: "rw-------" },
  { label: "Archivo de equipo", perms: "rw-rw----" },
  { label: "Solo lectura general", perms: "rw-r--r--" },
];

function parsePerm(perms: string, offset: number): [Bit, Bit, Bit] {
  return [
    (perms[offset] ?? "-") as Bit,
    (perms[offset + 1] ?? "-") as Bit,
    (perms[offset + 2] ?? "-") as Bit,
  ];
}

function octal(bits: [Bit, Bit, Bit]): number {
  return (bits[0] === "r" ? 4 : 0) + (bits[1] === "w" ? 2 : 0) + (bits[2] === "x" ? 1 : 0);
}

function PermBlock({
  titulo,
  bits,
  toggle,
  color,
}: {
  titulo: string;
  bits: [Bit, Bit, Bit];
  toggle: (idx: number) => void;
  color: string;
}) {
  const value = octal(bits);
  return (
    <div className="rounded-card border border-border bg-bg p-3">
      <div className="flex items-center justify-between mb-2">
        <div className={`text-[12px] font-semibold ${color}`}>{titulo}</div>
        <span className="text-[11px] font-mono font-semibold text-text-muted">
          {value}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {(["r", "w", "x"] as const).map((expected, i) => {
          const active = bits[i] === expected;
          const Icon = expected === "r" ? Eye : expected === "w" ? Pencil : PlayCircle;
          return (
            <button
              key={expected}
              type="button"
              onClick={() => toggle(i)}
              className={`flex flex-col items-center gap-0.5 rounded-card border px-2 py-2 transition-colors ${
                active
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border bg-surface2 text-text-dim hover:text-text-primary"
              }`}
            >
              {active ? <Icon size={14} strokeWidth={1.8} /> : <X size={12} strokeWidth={1.8} />}
              <span className="text-[11px] font-mono font-semibold">
                {active ? expected : "-"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PermissionsDecoder() {
  const [perms, setPerms] = useState("rwxr-xr--");

  const owner = useMemo(() => parsePerm(perms, 0), [perms]);
  const group = useMemo(() => parsePerm(perms, 3), [perms]);
  const others = useMemo(() => parsePerm(perms, 6), [perms]);

  const octalString = `${octal(owner)}${octal(group)}${octal(others)}`;

  const toggleBit = (block: "owner" | "group" | "others", idx: number) => {
    const offset = block === "owner" ? 0 : block === "group" ? 3 : 6;
    const expected: Bit = idx === 0 ? "r" : idx === 1 ? "w" : "x";
    const current = perms[offset + idx];
    const next = current === expected ? "-" : expected;
    setPerms(perms.substring(0, offset + idx) + next + perms.substring(offset + idx + 1));
  };

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setPerms(p.perms)}
            className="text-[11.5px] px-2.5 py-1 rounded-full border border-border bg-surface2 text-text-muted hover:border-accent/40 hover:text-accent transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="rounded-card border border-accent/40 bg-accent/5 p-3 mb-3 text-center">
        <div className="font-mono text-[20px] font-semibold text-text-primary tracking-widest">
          {perms}
        </div>
        <div className="text-[11px] text-text-muted mt-1">
          chmod equivalente: <span className="font-mono font-semibold">{octalString}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <PermBlock
          titulo="Dueño"
          bits={owner}
          toggle={(i) => toggleBit("owner", i)}
          color="text-accent"
        />
        <PermBlock
          titulo="Grupo"
          bits={group}
          toggle={(i) => toggleBit("group", i)}
          color="text-teal"
        />
        <PermBlock
          titulo="Otros"
          bits={others}
          toggle={(i) => toggleBit("others", i)}
          color="text-amber-700"
        />
      </div>

      <p className="mt-3 text-[11.5px] text-text-dim leading-relaxed">
        Cada bloque tiene 3 bits: <span className="font-mono">r</span> (leer, 4),{" "}
        <span className="font-mono">w</span> (escribir, 2),{" "}
        <span className="font-mono">x</span> (ejecutar, 1). Suma los activos por bloque
        para obtener el valor octal que usa <span className="font-mono">chmod</span>.
      </p>
    </div>
  );
}
