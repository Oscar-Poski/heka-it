"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Icon } from "./Icon";
import type { Tema } from "@/lib/types";

export type NodeState = "bloqueado" | "explorar" | "en-curso" | "completado";

type Props = {
  tema: Tema;
  state: NodeState;
  capitulosCompletados: number;
  index: number;
};

function Badge({ state }: { state: NodeState }) {
  const styles: Record<NodeState, { label: string; cls: string }> = {
    "en-curso": {
      label: "EN CURSO",
      cls: "bg-accent/10 text-accent border-accent/30",
    },
    explorar: {
      label: "EXPLORAR",
      cls: "bg-surface2 text-text-muted border-border",
    },
    completado: {
      label: "COMPLETADO",
      cls: "bg-accent text-bg border-accent",
    },
    bloqueado: {
      label: "BLOQUEADO",
      cls: "bg-surface2 text-text-dim border-border",
    },
  };
  const s = styles[state];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wider rounded-md border ${s.cls}`}
    >
      {s.label}
    </span>
  );
}

export function NodeCard({ tema, state, capitulosCompletados, index }: Props) {
  const active = state === "en-curso";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="relative pl-12"
    >
      {/* Node dot on the rail */}
      <div className="absolute left-[14px] top-5 w-3 h-3 -translate-x-1/2">
        <div
          className={`w-3 h-3 rounded-full border-2 ${
            state === "completado"
              ? "bg-accent border-accent"
              : active
              ? "bg-accent border-accent node-glow"
              : "bg-bg border-border"
          }`}
        />
      </div>

      <Link
        href={`/tema/${tema.slug}`}
        className={`block rounded-card-lg border bg-surface p-4 transition-colors active:bg-surface2 hover:border-border/80 ${
          active ? "border-accent/50" : "border-border"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center border ${
              active
                ? "bg-accent/10 border-accent/40 text-accent"
                : state === "completado"
                ? "bg-accent/5 border-accent/20 text-accent"
                : "bg-surface2 border-border text-text-primary"
            }`}
          >
            <Icon name={tema.iconoLucide} size={20} strokeWidth={1.8} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[15px] font-semibold text-text-primary truncate">
                {tema.nombre}
              </h3>
              <Badge state={state} />
            </div>
            <p className="mt-1 text-[13px] text-text-muted leading-snug line-clamp-2">
              {tema.preguntaGancho}
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px] text-text-dim">
              <span>
                {capitulosCompletados} / {tema.totalCapitulos} capítulos
              </span>
              <ChevronRight size={14} className="text-text-muted" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
