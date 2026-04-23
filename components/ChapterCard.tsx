"use client";

import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";

export type ChapterState = "disponible" | "en-curso" | "completado";

type Props = {
  temaSlug: string;
  numero: number;
  titulo: string;
  descripcion?: string;
  tiempoMin?: number;
  state: ChapterState;
};

export function ChapterCard({
  temaSlug,
  numero,
  titulo,
  descripcion,
  tiempoMin,
  state,
}: Props) {
  const isActive = state === "en-curso";
  const isDone = state === "completado";
  return (
    <Link
      href={`/tema/${temaSlug}/${numero}`}
      className={`block rounded-card border bg-surface p-4 active:bg-surface2 transition-colors ${
        isActive ? "border-accent/40" : "border-border"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border text-[13px] font-semibold ${
            isDone
              ? "bg-accent text-bg border-accent"
              : isActive
              ? "bg-accent/10 text-accent border-accent/40"
              : "bg-surface2 text-text-muted border-border"
          }`}
        >
          {isDone ? <Check size={16} strokeWidth={2.5} /> : numero}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-[14px] font-medium text-text-primary truncate">
              {titulo}
            </h3>
            {isActive ? (
              <span className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-semibold tracking-wider rounded bg-accent/10 text-accent border border-accent/30">
                EN CURSO
              </span>
            ) : null}
          </div>
          {descripcion ? (
            <p className="mt-0.5 text-[12px] text-text-muted line-clamp-2 leading-snug">
              {descripcion}
            </p>
          ) : null}
          {tiempoMin ? (
            <p className="mt-1 text-[11px] text-text-dim">{tiempoMin} min</p>
          ) : null}
        </div>
        <ChevronRight size={16} className="text-text-muted shrink-0" />
      </div>
    </Link>
  );
}
