"use client";

import { useState } from "react";

type Layer = {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  y: number;
  height: number;
  description: string;
  detail: string;
  examples: { label: string; icon: string }[];
};

const GAP = 5;

const LAYERS_BASE: Omit<Layer, "y">[] = [
  {
    id: "apps",
    label: "Aplicaciones",
    sublabel: "Espacio de usuario",
    color: "#00FFBF",
    height: 90,
    description: "Lo que el usuario ve y usa",
    detail:
      "Navegadores, editores, bases de datos, servidores web. Corren en espacio aislado: nunca tocan el hardware directamente. Si una app se cuelga, el resto del sistema sigue vivo.",
    examples: [
      { label: "nginx", icon: "🌐" },
      { label: "postgres", icon: "🗄" },
      { label: "vim", icon: "📝" },
      { label: "python", icon: "🐍" },
    ],
  },
  {
    id: "shell",
    label: "Shell",
    sublabel: "bash / zsh / fish",
    color: "#4A9EFF",
    height: 82,
    description: "Intérprete entre usuario y kernel",
    detail:
      "La terminal que ves es la shell. Traduce lo que escribes en llamadas al sistema. Bash, Zsh y Fish son distintas shells: misma idea, distinta sintaxis y ergonomía.",
    examples: [
      { label: "bash", icon: "$" },
      { label: "zsh", icon: "%" },
      { label: "fish", icon: "🐟" },
      { label: "pipes", icon: "|" },
    ],
  },
  {
    id: "syscalls",
    label: "Syscalls",
    sublabel: "Interfaz kernel–usuario",
    color: "#FFB830",
    height: 82,
    description: "La frontera entre software y kernel",
    detail:
      "System calls son la API del kernel. Las apps no pueden hablar con el hardware directamente: deben pedir permiso al kernel mediante funciones como read(), write(), fork(), open(). Es la frontera de seguridad más crítica del sistema.",
    examples: [
      { label: "read()", icon: "↓" },
      { label: "write()", icon: "↑" },
      { label: "fork()", icon: "⑂" },
      { label: "open()", icon: "🔓" },
    ],
  },
  {
    id: "kernel",
    label: "Kernel",
    sublabel: "El núcleo de Linux",
    color: "#FF5C5C",
    height: 90,
    description: "Árbitro entre software y hardware",
    detail:
      "El código que Linus Torvalds escribió en 1991. Gestiona memoria, CPU, discos y red. Decide qué proceso usa la CPU en cada milisegundo. Ninguna app puede saltárselo: es la ley.",
    examples: [
      { label: "scheduler", icon: "⚖" },
      { label: "mm", icon: "🧠" },
      { label: "vfs", icon: "📁" },
      { label: "net", icon: "📡" },
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    sublabel: "Física del sistema",
    color: "#A855F7",
    height: 82,
    description: "El substrato físico",
    detail:
      "CPU, RAM, disco, red. Son los únicos recursos reales del sistema. Todo lo de arriba es software que los abstrae, comparte y protege. El kernel habla con el hardware a través de drivers.",
    examples: [
      { label: "CPU", icon: "⚡" },
      { label: "RAM", icon: "💾" },
      { label: "Disco", icon: "💿" },
      { label: "Red", icon: "📶" },
    ],
  },
];

// Compute y positions
let _y = 0;
const LAYERS: Layer[] = LAYERS_BASE.map((l) => {
  const layer = { ...l, y: _y };
  _y += l.height + GAP;
  return layer;
});

const TOTAL_HEIGHT = _y - GAP;

export function LinuxLayers() {
  const [active, setActive] = useState<Layer | null>(LAYERS[2]);

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
      {/* Title bar — sin botón de flujo */}
      <div
        className="flex items-center px-4 py-3"
        style={{ background: "#10101a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5C5C" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFB830" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#00FFBF" }} />
          <span className="ml-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            arquitectura de Linux
          </span>
        </div>
      </div>

      {/* Diagram */}
      <div className="px-4 pt-5 pb-2">
        <div className="relative" style={{ height: TOTAL_HEIGHT }}>
          {/* Flow rail — siempre activo */}
          <div
            className="absolute"
            style={{
              left: 10,
              top: 10,
              bottom: 10,
              width: 2,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <div
              className="absolute w-full rounded-full"
              style={{
                height: 40,
                background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)",
                animation: "flowDown 1.8s linear infinite",
              }}
            />
          </div>

          {/* Layers */}
          {LAYERS.map((layer, idx) => {
            const isActive = active?.id === layer.id;

            return (
              <button
                key={layer.id}
                onClick={() => setActive(isActive ? null : layer)}
                className="absolute w-full transition-all duration-300 rounded-xl text-left"
                style={{
                  top: layer.y,
                  height: layer.height,
                  left: 0,
                  right: 0,
                  background: isActive ? `${layer.color}18` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? layer.color + "55" : "rgba(255,255,255,0.07)"}`,
                  boxShadow: isActive
                    ? `0 0 24px ${layer.color}25, inset 0 1px 0 ${layer.color}20`
                    : "none",
                  paddingLeft: 28,
                  paddingRight: 12,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 rounded-l-xl transition-all duration-300"
                  style={{
                    width: isActive ? 4 : 2,
                    background: isActive ? layer.color : `${layer.color}50`,
                    boxShadow: isActive ? `0 0 8px ${layer.color}` : "none",
                  }}
                />

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className="text-sm font-bold leading-none"
                      style={{ color: isActive ? layer.color : "rgba(255,255,255,0.7)" }}
                    >
                      {layer.label}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: isActive ? `${layer.color}99` : "rgba(255,255,255,0.2)" }}
                    >
                      {layer.sublabel}
                    </span>
                  </div>
                  {!isActive && (
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>
                      {layer.description}
                    </p>
                  )}
                </div>

                {/* Chips */}
                <div className="flex gap-1 flex-wrap justify-end flex-shrink-0 ml-2" style={{ maxWidth: 150 }}>
                  {layer.examples.map((ex) => (
                    <span
                      key={ex.label}
                      className="flex items-center gap-1 px-1.5 py-0.5 rounded-md"
                      style={{
                        background: isActive ? `${layer.color}18` : "rgba(255,255,255,0.04)",
                        border: `1px solid ${isActive ? layer.color + "30" : "rgba(255,255,255,0.06)"}`,
                        color: isActive ? layer.color : "rgba(255,255,255,0.3)",
                        fontSize: 10,
                      }}
                    >
                      <span style={{ fontSize: 12 }}>{ex.icon}</span>
                      {ex.label}
                    </span>
                  ))}
                </div>

                {/* Flow particle */}
                {idx < LAYERS.length - 1 && (
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: 6,
                      height: 6,
                      background: layer.color,
                      boxShadow: `0 0 8px ${layer.color}`,
                      bottom: -3,
                      left: 10,
                      transform: "translateX(-50%)",
                      animation: `particleBounce 1.8s ease-in-out ${idx * 0.36}s infinite`,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div
        className="mx-4 mb-4 rounded-xl overflow-hidden transition-all duration-300"
        style={{
          border: `1px solid ${active ? active.color + "30" : "rgba(255,255,255,0.05)"}`,
          background: active ? `${active.color}08` : "rgba(255,255,255,0.02)",
          minHeight: 90,
        }}
      >
        {active ? (
          <div key={active.id} style={{ animation: "fadeUp 0.22s ease forwards" }}>
            <div
              className="flex items-center gap-2 px-4 py-2"
              style={{ borderBottom: `1px solid ${active.color}20` }}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: active.color, boxShadow: `0 0 6px ${active.color}` }}
              />
              <span className="text-xs font-bold" style={{ color: active.color }}>
                {active.label}
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>—</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                {active.description}
              </span>
            </div>
            <p
              className="px-4 py-3 text-xs leading-relaxed"
              style={{ color: "#8888aa" }}
            >
              {active.detail}
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full px-4 py-8">
            <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.15)" }}>
              Toca cualquier capa para ver qué hace
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex px-4 pb-4 gap-1.5">
        {LAYERS.map((l) => (
          <button
            key={l.id}
            onClick={() => setActive(active?.id === l.id ? null : l)}
            className="flex-1 h-1 rounded-full transition-all duration-300"
            style={{
              background: active?.id === l.id ? l.color : `${l.color}30`,
              boxShadow: active?.id === l.id ? `0 0 6px ${l.color}` : "none",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes flowDown {
          from { top: -40px; }
          to   { top: 100%; }
        }
        @keyframes particleBounce {
          0%, 100% { opacity: 0; transform: translateX(-50%) translateY(0); }
          40% { opacity: 1; }
          60% { opacity: 1; transform: translateX(-50%) translateY(8px); }
          80% { opacity: 0; transform: translateX(-50%) translateY(12px); }
        }
      `}</style>
    </div>
  );
}