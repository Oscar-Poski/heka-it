"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { NodeCard, type NodeState } from "@/components/NodeCard";
import { StickyCTA } from "@/components/StickyCTA";
import { temas } from "@/content/temas";
import { useProgress } from "@/hooks/useProgress";

export default function LandingPage() {
  const { progress, hydrated, capitulosCompletadosDe } = useProgress();

  const totalCompletados = progress.temasCompletados.length;

  const activeTema = progress.temaActivo
    ? temas.find((t) => t.slug === progress.temaActivo)
    : null;

  const ctaTema = activeTema ?? temas[0];
  const ctaCap = progress.capituloActivo ?? 1;
  const ctaLabel = hydrated && activeTema ? "Continuar" : "Empezar";
  const ctaSub = `${ctaTema.nombre} · Cap. ${ctaCap}`;
  const ctaHref = `/tema/${ctaTema.slug}/${ctaCap}`;

  return (
    // pb-safe cubre el home indicator en iPhone; pb-36 como fallback
    <main className="min-h-screen pb-36 pb-[calc(9rem+env(safe-area-inset-bottom))]">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
            <GraduationCap size={20} strokeWidth={1.8} />
          </div>
          <div className="text-[15px] font-semibold tracking-tight">
            Heka <span className="text-accent">IT</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 pt-4 pb-5">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[32px] leading-[1.1] font-semibold tracking-tight"
        >
          ¿Es <span className="text-accent">IT</span> para ti?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          // text-[15px] → text-base (16px), max-w para líneas más cortas
          className="mt-2 text-base text-text-muted leading-relaxed max-w-[280px]"
        >
          Explora los temas que cualquier profesional de IT conoce. Sin experiencia previa. A tu ritmo.
        </motion.p>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-text-dim mb-1.5">
            <span>Tu progreso</span>
            <span className="text-text-muted">
              {hydrated ? totalCompletados : 0} / {temas.length} temas
            </span>
          </div>
          {/* h-1.5 → h-2 para mejor visibilidad */}
          <div className="h-2 w-full rounded-full bg-surface2 overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{
                width: hydrated
                  ? `${(totalCompletados / temas.length) * 100}%`
                  : "0%",
              }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* Node map */}
      <section className="relative px-4 pt-4 pb-10">
        {/* Riel vertical — ajustado al nuevo padding de las cards */}
        <div
          className="absolute left-[30px] top-6 bottom-6 w-px bg-border"
          aria-hidden
        />

        {/* space-y-3 → space-y-2.5 para dar un ritmo más compacto pero respirado */}
        <div className="space-y-2.5">
          {temas.map((tema, i) => {
            const completed = progress.temasCompletados.includes(tema.slug);
            const isActive =
              hydrated && progress.temaActivo === tema.slug && !completed;
            let state: NodeState;
            if (!hydrated) {
              state = i === 0 ? "explorar" : "explorar";
            } else if (completed) {
              state = "completado";
            } else if (isActive) {
              state = "en-curso";
            } else {
              state = "explorar";
            }
            return (
              <NodeCard
                key={tema.slug}
                tema={tema}
                state={state}
                capitulosCompletados={
                  hydrated ? capitulosCompletadosDe(tema.slug).length : 0
                }
                index={i}
              />
            );
          })}
        </div>
      </section>

      <StickyCTA href={ctaHref} label={ctaLabel} sub={ctaSub} />
    </main>
  );
}