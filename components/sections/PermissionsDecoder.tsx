"use client";

import { useState } from "react";

type Permission = "r" | "w" | "x" | "-";

type PermSet = [Permission, Permission, Permission];

type State = {
  type: "f" | "d" | "l";
  owner: PermSet;
  group: PermSet;
  others: PermSet;
};

const INITIAL: State = {
  type: "f",
  owner: ["r", "w", "x"],
  group: ["r", "-", "x"],
  others: ["r", "-", "-"],
};

const TYPE_META = {
  f: { symbol: "-", label: "archivo", color: "#a0a0c0", description: "Archivo regular. Puede ser texto, binario, script o cualquier dato." },
  d: { symbol: "d", label: "directorio", color: "#4A9EFF", description: "Directorio. El permiso x aquí significa poder entrar con cd, no ejecutar." },
  l: { symbol: "l", label: "enlace simbólico", color: "#FFB830", description: "Symlink. Apunta a otro archivo o directorio. Los permisos reales son los del destino." },
};

const PERM_COLORS: Record<Permission, string> = {
  r: "#FFB830",
  w: "#FF5C5C",
  x: "#00FFBF",
  "-": "rgba(255,255,255,0.12)",
};

const PERM_LABELS: Record<string, Record<Permission, string>> = {
  owner: {
    r: "El dueño puede leer el contenido del archivo.",
    w: "El dueño puede modificar o borrar el archivo.",
    x: "El dueño puede ejecutar el archivo como programa.",
    "-": "El dueño no tiene este permiso.",
  },
  group: {
    r: "Los miembros del grupo pueden leer el archivo.",
    w: "Los miembros del grupo pueden modificar el archivo.",
    x: "Los miembros del grupo pueden ejecutar el archivo.",
    "-": "El grupo no tiene este permiso.",
  },
  others: {
    r: "Cualquier otro usuario del sistema puede leer el archivo.",
    w: "Cualquier otro usuario puede modificar el archivo. ⚠️ Peligroso en producción.",
    x: "Cualquier otro usuario puede ejecutar el archivo.",
    "-": "Otros usuarios no tienen este permiso.",
  },
};

const SECTION_META = {
  owner: { label: "Dueño", color: "#4A9EFF", icon: "U" },
  group: { label: "Grupo", color: "#FFB830", icon: "G" },
  others: { label: "Otros", color: "#A855F7", icon: "O" },
};

const PRESETS: { label: string; state: State; description: string }[] = [
  {
    label: "755",
    description: "Scripts y ejecutables públicos. El dueño tiene control total, el resto solo puede leer y ejecutar.",
    state: { type: "f", owner: ["r", "w", "x"], group: ["r", "-", "x"], others: ["r", "-", "x"] },
  },
  {
    label: "644",
    description: "Archivos de configuración. Solo el dueño escribe; todos pueden leer.",
    state: { type: "f", owner: ["r", "w", "-"], group: ["r", "-", "-"], others: ["r", "-", "-"] },
  },
  {
    label: "600",
    description: "Archivos privados: llaves SSH, tokens. Solo el dueño puede siquiera leerlo.",
    state: { type: "f", owner: ["r", "w", "-"], group: ["-", "-", "-"], others: ["-", "-", "-"] },
  },
  {
    label: "700",
    description: "Directorios o scripts completamente privados. Nadie más que el dueño puede entrar o ejecutar.",
    state: { type: "d", owner: ["r", "w", "x"], group: ["-", "-", "-"], others: ["-", "-", "-"] },
  },
  {
    label: "777",
    description: "⚠️ Todos los permisos para todos. Nunca en producción. Solo para debug local temporal.",
    state: { type: "f", owner: ["r", "w", "x"], group: ["r", "w", "x"], others: ["r", "w", "x"] },
  },
];

function permToOctal(p: PermSet): number {
  return (p[0] !== "-" ? 4 : 0) + (p[1] !== "-" ? 2 : 0) + (p[2] !== "-" ? 1 : 0);
}

function PermBit({
  perm,
  section,
  index,
  active,
  onClick,
}: {
  perm: Permission;
  section: string;
  index: number;
  active: { section: string; index: number } | null;
  onClick: () => void;
}) {
  const symbols: Permission[] = ["r", "w", "x"];
  const symbol = symbols[index];
  const isOn = perm !== "-";
  const isActive = active?.section === section && active?.index === index;

  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center rounded-lg transition-all duration-200"
      style={{
        width: 44,
        height: 52,
        background: isActive
          ? `${PERM_COLORS[isOn ? symbol : "-"]}22`
          : isOn
          ? `${PERM_COLORS[symbol]}12`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${isActive ? PERM_COLORS[isOn ? symbol : "-"] + "80" : isOn ? PERM_COLORS[symbol] + "40" : "rgba(255,255,255,0.07)"}`,
        boxShadow: isActive ? `0 0 16px ${PERM_COLORS[isOn ? symbol : "-"]}40` : "none",
        cursor: "pointer",
      }}
    >
      <span
        className="text-base font-bold font-mono leading-none"
        style={{
          color: isOn ? PERM_COLORS[symbol] : "rgba(255,255,255,0.15)",
        }}
      >
        {isOn ? symbol : "-"}
      </span>
      <span
        className="text-xs mt-0.5 font-mono"
        style={{ color: "rgba(255,255,255,0.2)", fontSize: 9 }}
      >
        {isOn ? (symbol === "r" ? "4" : symbol === "w" ? "2" : "1") : "0"}
      </span>
    </button>
  );
}

export function PermissionsDecoder() {
  const [state, setState] = useState<State>(INITIAL);
  const [active, setActive] = useState<{ section: string; index: number } | null>(null);

  const sections: [string, PermSet][] = [
    ["owner", state.owner],
    ["group", state.group],
    ["others", state.others],
  ];

  const toggle = (section: keyof Omit<State, "type">, index: number) => {
    const symbols: Permission[] = ["r", "w", "x"];
    const current = state[section][index];
    const next: Permission = current === "-" ? symbols[index] : "-";
    const updated = [...state[section]] as PermSet;
    updated[index] = next;
    setState({ ...state, [section]: updated });

    const key = `${section}-${index}`;
    const wasActive = active?.section === section && active?.index === index;
    setActive(wasActive ? null : { section, index });
  };

  const octal = `${permToOctal(state.owner)}${permToOctal(state.group)}${permToOctal(state.others)}`;
  const symbolic = `${TYPE_META[state.type].symbol}${state.owner.join("")}${state.group.join("")}${state.others.join("")}`;
  const typeMeta = TYPE_META[state.type];

  const activeInfo = active
    ? PERM_LABELS[active.section]?.[state[active.section as keyof Omit<State, "type">][active.index]]
    : null;

  return (
    <div
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden"
      style={{
        background: "#0d0d14",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
        fontFamily: "'SF Mono', 'Fira Code', monospace",
      }}
    >
      {/* Symbolic string display */}
      <div
        className="px-4 py-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#10101a" }}
      >
        <div className="flex items-center justify-center gap-0.5">
          {/* Type char */}
          <span
            className="text-2xl font-bold w-8 text-center"
            style={{ color: typeMeta.color }}
          >
            {typeMeta.symbol}
          </span>

          {/* Permission chars */}
          {sections.map(([key, perms], si) => {
            const meta = SECTION_META[key as keyof typeof SECTION_META];
            return (
              <div key={key} className="flex">
                {perms.map((p, i) => {
                  const symbols: Permission[] = ["r", "w", "x"];
                  const sym = symbols[i];
                  const isOn = p !== "-";
                  const isAct = active?.section === key && active?.index === i;
                  return (
                    <span
                      key={i}
                      className="text-2xl font-bold w-7 text-center cursor-pointer transition-all duration-150"
                      style={{
                        color: isAct
                          ? PERM_COLORS[isOn ? sym : "-"]
                          : isOn
                          ? PERM_COLORS[sym] + "cc"
                          : "rgba(255,255,255,0.13)",
                        textShadow: isAct ? `0 0 12px ${PERM_COLORS[isOn ? sym : "-"]}` : "none",
                      }}
                      onClick={() => toggle(key as keyof Omit<State, "type">, i)}
                    >
                      {p}
                    </span>
                  );
                })}
                {si < 2 && (
                  <span className="text-2xl w-1" style={{ color: "rgba(255,255,255,0.06)" }} />
                )}
              </div>
            );
          })}

          {/* Octal */}
          <div className="ml-4 flex flex-col items-end">
            <span className="text-2xl font-bold" style={{ color: "#e0e0f0", letterSpacing: 2 }}>
              {octal}
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              octal
            </span>
          </div>
        </div>

        {/* Type selector */}
        <div className="flex justify-center gap-2 mt-3">
          {(Object.entries(TYPE_META) as [keyof typeof TYPE_META, typeof TYPE_META[keyof typeof TYPE_META]][]).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setState({ ...state, type: k })}
              className="px-2.5 py-1 rounded-md text-xs transition-all duration-200"
              style={{
                background: state.type === k ? `${v.color}20` : "transparent",
                border: `1px solid ${state.type === k ? v.color + "60" : "rgba(255,255,255,0.08)"}`,
                color: state.type === k ? v.color : "rgba(255,255,255,0.3)",
              }}
            >
              {v.symbol} {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive grid */}
      <div className="px-4 py-4">
        <div className="flex flex-col gap-2">
          {sections.map(([key, perms]) => {
            const meta = SECTION_META[key as keyof typeof SECTION_META];
            return (
              <div key={key} className="flex items-center gap-3">
                {/* Section label */}
                <div className="flex items-center gap-1.5 w-16 flex-shrink-0">
                  <span
                    className="text-xs font-bold w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: `${meta.color}20`, color: meta.color, fontSize: 9 }}
                  >
                    {meta.icon}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {meta.label}
                  </span>
                </div>

                {/* Bits */}
                <div className="flex gap-1.5">
                  {perms.map((p, i) => (
                    <PermBit
                      key={i}
                      perm={p}
                      section={key}
                      index={i}
                      active={active}
                      onClick={() => toggle(key as keyof Omit<State, "type">, i)}
                    />
                  ))}
                </div>

                {/* Octal value */}
                <div
                  className="ml-auto text-lg font-bold w-6 text-center"
                  style={{ color: meta.color }}
                >
                  {permToOctal(perms)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-3 mt-3 px-1">
          {(["r", "w", "x"] as Permission[]).map((p) => (
            <div key={p} className="flex items-center gap-1">
              <span className="text-xs font-bold" style={{ color: PERM_COLORS[p] }}>{p}</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                {p === "r" ? "read" : p === "w" ? "write" : "execute"}
              </span>
              <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.15)" }}>
                {p === "r" ? "=4" : p === "w" ? "=2" : "=1"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Info panel */}
      <div
        className="px-4 py-3 min-h-14 transition-all duration-300"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: active
            ? `${PERM_COLORS[state[active.section as keyof Omit<State, "type">][active.index] === "-" ? "-" : (["r", "w", "x"] as Permission[])[active.index]]}0a`
            : "transparent",
        }}
      >
        {active && activeInfo ? (
          <p
            className="text-xs leading-relaxed"
            style={{ color: "#8888aa", animation: "fadeUp 0.2s ease forwards" }}
          >
            <span
              className="font-bold mr-1"
              style={{
                color: SECTION_META[active.section as keyof typeof SECTION_META].color,
              }}
            >
              {SECTION_META[active.section as keyof typeof SECTION_META].label}.
            </span>
            {activeInfo}
          </p>
        ) : (
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
            Toca cualquier bit para ver qué significa. Tócalo de nuevo para activarlo o desactivarlo.
          </p>
        )}
      </div>

      {/* Presets */}
      <div
        className="px-4 py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0a0a10" }}
      >
        <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.2)" }}>
          Presets comunes
        </p>
        <div className="flex gap-2 flex-wrap">
          {PRESETS.map((p) => {
            const isActive = octal === p.label;
            return (
              <button
                key={p.label}
                onClick={() => {
                  setState(p.state);
                  setActive(null);
                }}
                className="px-2.5 py-1 rounded-md text-xs font-bold transition-all duration-200"
                style={{
                  background: isActive ? "#4A9EFF20" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${isActive ? "#4A9EFF60" : "rgba(255,255,255,0.08)"}`,
                  color: isActive ? "#4A9EFF" : "rgba(255,255,255,0.4)",
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {PRESETS.find((p) => p.label === octal) && (
          <p
            className="text-xs mt-2 leading-relaxed"
            style={{ color: "#8888aa", animation: "fadeUp 0.2s ease forwards" }}
          >
            {PRESETS.find((p) => p.label === octal)!.description}
          </p>
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}