"use client";

import { useState, useEffect } from "react";

const STEPS = [
  {
    id: "input",
    label: "Entrada del usuario",
    code: "ls -la /var/log",
    description: "Escribes el comando en el prompt. La shell espera en stdin.",
    color: "#4A9EFF",
    icon: "⌨",
  },
  {
    id: "shell",
    label: "Shell (Bash/Zsh)",
    code: "parse → fork() → exec()",
    description: "La shell analiza el comando, crea un proceso hijo con fork() y lo reemplaza con el ejecutable usando exec().",
    color: "#FFB830",
    icon: "$",
  },
  {
    id: "kernel",
    label: "Kernel",
    code: "syscall: openat, getdents64",
    description: "El proceso llama al kernel mediante syscalls. El kernel accede al hardware de forma segura.",
    color: "#FF5C5C",
    icon: "⚙",
  },
  {
    id: "hardware",
    label: "Hardware",
    code: "disk I/O → inode table",
    description: "El disco lee la tabla de inodos y devuelve los metadatos del directorio al kernel.",
    color: "#A855F7",
    icon: "💾",
  },
  {
    id: "stdout",
    label: "stdout → terminal",
    code: "drwxr-xr-x  syslog\n-rw-r--r--  auth.log",
    description: "El resultado viaja de vuelta por stdout y la shell lo imprime en tu terminal.",
    color: "#00FFBF",
    icon: "▶",
  },
];

export function TerminalFlow() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const command = STEPS[0].code;
    let i = 0;
    const interval = setInterval(() => {
      setTyped(command.slice(0, i + 1));
      i++;
      if (i >= command.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const handleStep = (idx: number) => {
    if (animating || idx === active) return;
    setAnimating(true);
    setActive(idx);
    setTimeout(() => setAnimating(false), 400);
  };

  const step = STEPS[active];

  return (
    <div className="w-full max-w-md mx-auto select-none" style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}>
      {/* Terminal window */}
      <div
        className="rounded-xl overflow-hidden border"
        style={{
          background: "#0d0d14",
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.5), 0 24px 48px rgba(0,0,0,0.6)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: "#16161f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="w-3 h-3 rounded-full" style={{ background: "#FF5C5C" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#FFB830" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#00FFBF" }} />
          <span className="ml-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            bash — terminal
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-4 min-h-36">
          {/* Prompt */}
          <div className="flex items-center gap-2 mb-3">
            <span style={{ color: "#00FFBF" }}>user@server</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>:</span>
            <span style={{ color: "#4A9EFF" }}>~</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>$</span>
            <span className="ml-1" style={{ color: "#e0e0f0" }}>
              {active === 0 ? typed : STEPS[0].code}
            </span>
            <span
              className="inline-block w-2 h-4 ml-px"
              style={{
                background: "#e0e0f0",
                animation: "blink 1.1s step-end infinite",
              }}
            />
          </div>

          {/* Output area */}
          {active === 4 && (
            <div
              className="text-xs leading-relaxed"
              style={{
                color: "#a0a0c0",
                animation: "fadeUp 0.35s ease forwards",
              }}
            >
              <div style={{ color: "#4A9EFF" }}>total 128</div>
              <div>
                <span style={{ color: "#00FFBF" }}>drwxr-xr-x</span>
                {"  2 root  root  4096 Apr 30 "}
                <span style={{ color: "#e0e0f0" }}>syslog</span>
              </div>
              <div>
                <span style={{ color: "#FFB830" }}>-rw-r-----</span>
                {"  1 syslog adm  89482 Apr 30 "}
                <span style={{ color: "#e0e0f0" }}>auth.log</span>
              </div>
              <div>
                <span style={{ color: "#FF5C5C" }}>-rw-r-----</span>
                {"  1 syslog adm  12771 Apr 30 "}
                <span style={{ color: "#e0e0f0" }}>kern.log</span>
              </div>
            </div>
          )}

          {active !== 4 && active !== 0 && (
            <div
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.2)", animation: "fadeUp 0.35s ease forwards" }}
            >
              procesando...
            </div>
          )}
        </div>
      </div>

      {/* Flow steps */}
      <div className="mt-5 flex flex-col gap-1">
        {STEPS.map((s, idx) => {
          const isActive = idx === active;
          const isPast = idx < active;

          return (
            <button
              key={s.id}
              onClick={() => handleStep(idx)}
              className="flex items-start gap-3 p-3 rounded-lg text-left transition-all duration-300"
              style={{
                background: isActive
                  ? `${s.color}12`
                  : "transparent",
                border: `1px solid ${isActive ? s.color + "40" : "transparent"}`,
                cursor: "pointer",
              }}
            >
              {/* Icon + connector */}
              <div className="flex flex-col items-center gap-1 mt-0.5">
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300"
                  style={{
                    background: isActive ? s.color : isPast ? `${s.color}30` : "rgba(255,255,255,0.05)",
                    color: isActive ? "#0a0a0f" : isPast ? s.color : "rgba(255,255,255,0.3)",
                    boxShadow: isActive ? `0 0 16px ${s.color}60` : "none",
                  }}
                >
                  {s.icon}
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className="w-px flex-grow"
                    style={{
                      height: 16,
                      background: isPast
                        ? `linear-gradient(to bottom, ${s.color}80, ${STEPS[idx + 1].color}40)`
                        : "rgba(255,255,255,0.08)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{
                      color: isActive ? s.color : isPast ? `${s.color}90` : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {s.label}
                  </span>
                </div>

                {isActive && (
                  <div style={{ animation: "fadeUp 0.3s ease forwards" }}>
                    <div
                      className="mt-1 text-xs px-2 py-1 rounded"
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        color: s.color,
                        fontFamily: "inherit",
                        whiteSpace: "pre",
                      }}
                    >
                      {s.code}
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "#a0a0c0" }}>
                      {s.description}
                    </p>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => handleStep(Math.max(0, active - 1))}
          disabled={active === 0}
          className="text-xs px-3 py-1.5 rounded-lg transition-all"
          style={{
            background: active === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.07)",
            color: active === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.07)",
            cursor: active === 0 ? "not-allowed" : "pointer",
          }}
        >
          ← Anterior
        </button>

        <div className="flex gap-1.5">
          {STEPS.map((s, idx) => (
            <button
              key={idx}
              onClick={() => handleStep(idx)}
              className="rounded-full transition-all duration-300"
              style={{
                width: idx === active ? 20 : 6,
                height: 6,
                background: idx === active ? s.color : idx < active ? `${s.color}50` : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => handleStep(Math.min(STEPS.length - 1, active + 1))}
          disabled={active === STEPS.length - 1}
          className="text-xs px-3 py-1.5 rounded-lg transition-all"
          style={{
            background: active === STEPS.length - 1 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.07)",
            color: active === STEPS.length - 1 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.07)",
            cursor: active === STEPS.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          Siguiente →
        </button>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}