"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../Icon";
import type { SeccionPromptLab } from "@/lib/types";

type Props = { seccion: SeccionPromptLab };

const SEGMENTOS = [
  { key: "rol", label: "Rol", color: "#3A8DFF" },
  { key: "tarea", label: "Tarea", color: "#00A896" },
  { key: "contexto", label: "Contexto", color: "#FF6B35" },
  { key: "formato", label: "Formato", color: "#8B5CF6" },
] as const;

export function PromptLabBlock({ seccion }: Props) {
  const [activeId, setActiveId] = useState<string>(seccion.ejemplos[0]?.id);
  const active = seccion.ejemplos.find((e) => e.id === activeId);

  return (
    <div>
      {/* Department selector */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {seccion.ejemplos.map((e) => {
          const selected = e.id === activeId;
          return (
            <button
              key={e.id}
              onClick={() => setActiveId(e.id)}
              className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 text-[12.5px] font-semibold transition-colors ${
                selected
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-surface2 text-text-muted"
              }`}
            >
              {e.icono ? <Icon name={e.icono} size={14} strokeWidth={1.9} /> : null}
              {e.label}
            </button>
          );
        })}
      </div>

      {/* Revealed prompt, split into labeled segments */}
      <div className="mt-3">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22 }}
              className="rounded-card border border-border bg-surface p-2.5 space-y-2"
            >
              {SEGMENTOS.map((seg) => (
                <div
                  key={seg.key}
                  className="rounded-lg p-2.5"
                  style={{
                    background: seg.color + "10",
                    borderLeft: `3px solid ${seg.color}`,
                  }}
                >
                  <div
                    className="text-[10px] font-bold uppercase tracking-wider mb-1"
                    style={{ color: seg.color }}
                  >
                    {seg.label}
                  </div>
                  <p className="text-[13px] text-text-primary leading-relaxed">
                    {active[seg.key]}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
