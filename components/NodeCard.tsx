"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import { Icon } from "./Icon";
import type { Tema } from "@/lib/types";

export type NodeState = "bloqueado" | "explorar" | "en-curso" | "completado";

type Props = {
  tema: Tema;
  state: NodeState;
  capitulosCompletados: number;
  index: number;
  proximamente?: boolean;
  onProximamente?: () => void;
};

function Badge({ state }: { state: NodeState }) {
  const styles: Record<NodeState, { label: string; cls: string }> = {
    "en-curso": {
      label: "En curso",
      cls: "bg-accent/10 text-accent border-accent/30",
    },
    explorar: {
      label: "Explorar",
      cls: "bg-surface2 text-text-muted border-border",
    },
    completado: {
      label: "Listo",
      cls: "bg-accent text-bg border-accent",
    },
    bloqueado: {
      label: "Bloqueado",
      cls: "bg-surface2 text-text-dim border-border",
    },
  };
  const s = styles[state];
  return (
    <span
      className={`inline-flex items-center min-h-[24px] px-2.5 py-0.5 text-[11px] font-medium rounded-full border ${s.cls}`}
    >
      {s.label}
    </span>
  );
}

export function NodeCard({ tema, state, capitulosCompletados, index, proximamente, onProximamente }: Props) {
  const active = state === "en-curso";
  const completed = state === "completado";

  const progress =
    tema.totalCapitulos > 0
      ? (capitulosCompletados / tema.totalCapitulos) * 100
      : 0;

  const cardInner = (
    <div className="flex items-start gap-3 p-3.5">
      {/* Icon */}
      <div
        className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center border ${
          active
            ? "bg-accent/10 border-accent/40 text-accent"
            : completed
            ? "bg-accent/5 border-accent/20 text-accent"
            : "bg-surface2 border-border text-text-primary"
        }`}
      >
        <Icon name={tema.iconoLucide} size={20} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-semibold text-text-primary truncate">
            {tema.nombre}
          </h3>
          <Badge state={state} />
        </div>

        <p className="mt-1 text-[13.5px] text-text-muted leading-relaxed line-clamp-2">
          {tema.preguntaGancho}
        </p>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex-1 flex items-center gap-2">
            {capitulosCompletados > 0 && !completed && (
              <div className="flex-1 h-1 rounded-full bg-surface2 overflow-hidden max-w-[80px]">
                <div
                  className="h-full bg-accent/60 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
            <span className="text-[11px] text-text-dim">
              {capitulosCompletados} / {tema.totalCapitulos} cap.
            </span>
          </div>
          <ChevronRight size={15} className="text-text-muted shrink-0" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="relative pl-12"
    >
      {/* Node dot on the rail */}
      <div className="absolute left-[14px] top-[22px] -translate-x-1/2">
        <div
          className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
            completed
              ? "bg-accent border-accent"
              : active
              ? "bg-accent border-accent node-glow"
              : "bg-bg border-border"
          }`}
        >
          {completed && <Check size={7} strokeWidth={3} className="text-bg" />}
        </div>
      </div>

      {proximamente ? (
        <button
          onClick={onProximamente}
          className={`block w-full text-left rounded-card-lg border bg-surface transition-colors opacity-75 cursor-default ${
            active ? "border-accent/50" : "border-border"
          }`}
        >
          {cardInner}
        </button>
      ) : (
        <Link
          href={`/tema/${tema.slug}`}
          className={`block rounded-card-lg border bg-surface transition-colors active:bg-surface2 hover:border-border/80 ${
            active ? "border-accent/50" : "border-border"
          }`}
        >
          {cardInner}
        </Link>
      )}
    </motion.div>
  );
}