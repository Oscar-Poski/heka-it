"use client";

import { useState } from "react";
import { MessageSquare, Bot, RotateCcw, AlertTriangle } from "lucide-react";

type Message = { rol: "user" | "claude"; tokens: number };

const WINDOWS: { label: string; tokens: number; descripcion: string }[] = [
  { label: "Modelo pequeño", tokens: 3_000, descripcion: "Tipo GPT-3.5 antiguo" },
  { label: "Modelo medio", tokens: 32_000, descripcion: "Tipo GPT-4 estándar" },
  { label: "Modelo grande", tokens: 200_000, descripcion: "Tipo Claude Sonnet" },
];

const USER_MSG_TOKENS = 250;
const CLAUDE_MSG_TOKENS = 800;

export function ContextWindowMeter() {
  const [windowIdx, setWindowIdx] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);

  const limit = WINDOWS[windowIdx].tokens;
  const used = messages.reduce((sum, m) => sum + m.tokens, 0);
  const pct = Math.min((used / limit) * 100, 100);
  const overflow = used > limit;
  const near = pct >= 80 && !overflow;

  const barColor = overflow
    ? "bg-red-500"
    : near
    ? "bg-amber-500"
    : "bg-accent";

  const addUser = () =>
    setMessages((m) => [...m, { rol: "user", tokens: USER_MSG_TOKENS }]);
  const addClaude = () =>
    setMessages((m) => [...m, { rol: "claude", tokens: CLAUDE_MSG_TOKENS }]);
  const reset = () => setMessages([]);

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Window selector */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {WINDOWS.map((w, i) => (
          <button
            key={w.label}
            type="button"
            onClick={() => {
              setWindowIdx(i);
              setMessages([]);
            }}
            className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
              i === windowIdx
                ? "bg-accent text-bg border-accent"
                : "bg-surface2 text-text-muted border-border hover:border-accent/40"
            }`}
          >
            {w.label} · {w.tokens.toLocaleString()} tokens
          </button>
        ))}
      </div>

      {/* Bar */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[12px] font-semibold text-text-muted uppercase tracking-wide">
          Contexto usado
        </span>
        <span
          className={`text-[12px] font-semibold ${
            overflow ? "text-red-600" : near ? "text-amber-700" : "text-accent"
          }`}
        >
          {used.toLocaleString()} / {limit.toLocaleString()} ({pct.toFixed(0)}%)
        </span>
      </div>

      <div className="h-3 w-full rounded-full bg-surface2 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {overflow && (
        <div className="mt-3 flex items-start gap-2 rounded-card border border-red-500/40 bg-red-500/10 p-2.5 text-red-700">
          <AlertTriangle size={15} className="mt-0.5 shrink-0" />
          <span className="text-[12.5px] leading-relaxed">
            Contexto desbordado. El modelo olvidaría los mensajes más antiguos o
            devolvería un error.
          </span>
        </div>
      )}

      {/* Controls */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={addUser}
          className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card border border-border bg-bg text-text-primary hover:border-accent/40 transition-colors"
        >
          <MessageSquare size={14} strokeWidth={1.8} />
          + Mensaje usuario ({USER_MSG_TOKENS}t)
        </button>
        <button
          type="button"
          onClick={addClaude}
          className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card border border-border bg-bg text-text-primary hover:border-accent/40 transition-colors"
        >
          <Bot size={14} strokeWidth={1.8} />
          + Respuesta IA ({CLAUDE_MSG_TOKENS}t)
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card border border-border bg-surface2 text-text-muted hover:text-text-primary transition-colors"
        >
          <RotateCcw size={14} strokeWidth={1.8} />
          Reset
        </button>
      </div>

      {/* Message list */}
      <div className="mt-4">
        <div className="text-[11px] text-text-dim mb-1.5">
          {messages.length} mensajes en el hilo
        </div>
        <div className="flex flex-wrap gap-1">
          {messages.map((m, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1 text-[10.5px] px-1.5 py-0.5 rounded-md border ${
                m.rol === "user"
                  ? "bg-teal/10 text-teal border-teal/30"
                  : "bg-accent/10 text-accent border-accent/30"
              }`}
            >
              {m.rol === "user" ? "U" : "C"} · {m.tokens}t
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
