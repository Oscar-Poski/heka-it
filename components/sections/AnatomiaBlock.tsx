"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SeccionAnatomia } from "@/lib/types";

type Props = { seccion: SeccionAnatomia };

export function AnatomiaBlock({ seccion }: Props) {
  const [activeId, setActiveId] = useState<string>(seccion.partes[0]?.id);
  const active = seccion.partes.find((p) => p.id === activeId);

  return (
    <div>
      <div className="rounded-card border border-border bg-surface p-2">
        <div className="flex items-stretch gap-1 rounded-lg overflow-hidden">
          {seccion.partes.map((p) => {
            const selected = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className="flex-1 px-2 py-3 text-[11px] font-semibold tracking-wider uppercase transition-colors"
                style={{
                  borderRadius: 6,
                  border: `1px solid ${selected ? p.color + "80" : "var(--border)"}`,
                  background: selected ? p.color + "18" : "var(--surface2)",
                  color: selected ? p.color : "var(--text-muted)",
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="mt-3 min-h-[88px]">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="px-2 py-2"
              >
                <p
                  className="text-[11px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: active.color }}
                >
                  {active.label}
                </p>
                <p className="text-[13.5px] text-text-primary leading-relaxed">
                  {active.detalle}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-2 text-[11px] text-text-dim px-1">
        Toca cada una para ver qué guarda.
      </div>
    </div>
  );
}