"use client";

import { useState } from "react";
import { GraduationCap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NodeCard, type NodeState } from "@/components/NodeCard";
import { StickyCTA } from "@/components/StickyCTA";
import { temas } from "@/content/temas";
import { useProgress } from "@/hooks/useProgress";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[11px] font-semibold tracking-[0.08em] text-teal uppercase">
        {title}
      </span>
      <div className="flex-1 h-px bg-teal/30" />
    </div>
  );
}

const PREVIEW = 3;

export default function LandingPage() {
  const { progress, hydrated, capitulosCompletadosDe } = useProgress();
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const activeTema = progress.temaActivo
    ? temas.find((t) => t.slug === progress.temaActivo)
    : null;

  const ctaTema = activeTema ?? temas[0];
  const ctaCap = progress.capituloActivo ?? 1;
  const ctaLabel = hydrated && activeTema ? "Continuar" : "Empezar";
  const ctaSub = `${ctaTema.nombre} · Cap. ${ctaCap}`;
  const ctaHref = `/tema/${ctaTema.slug}/${ctaCap}`;

  const fundamentosVisibles = mostrarTodos ? temas : temas.slice(0, PREVIEW);

  return (
    <main className="min-h-screen pb-36 pb-[calc(9rem+env(safe-area-inset-bottom))]">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
            <GraduationCap size={20} strokeWidth={1.8} />
          </div>
          <div className="text-[15px] font-semibold tracking-tight">
            <span className="text-accent">IT</span> Academy & Consulting Services
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 pt-4 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-display text-[36px] leading-[1.1] tracking-tight text-ink"
        >
          Heka <span className="text-accent">it</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-2 text-base text-text-muted leading-relaxed max-w-[280px] lg:max-w-md"
        >
          Aprende a diseñar flujos de trabajo automatizados para tu empresa usando herramientas modernas. Contenido práctico, resultados reales.
        </motion.p>
      </section>

        {/* Academy */}
        <section className="px-4 pt-2 pb-10 lg:px-0 lg:pt-0 lg:pb-0">
          <SectionHeader title="Academy" />
          <div className="relative">
            <div
              className="absolute left-[16px] top-0 bottom-0 w-px bg-border"
              aria-hidden
            />
            <div className="space-y-2.5">
              {fundamentosVisibles.map((tema, i) => {
                const completed = progress.temasCompletados.includes(tema.slug);
                const isActive =
                  hydrated && progress.temaActivo === tema.slug && !completed;
                let state: NodeState;
                if (!hydrated) {
                  state = "explorar";
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
            {!mostrarTodos && (
              <button
                onClick={() => setMostrarTodos(true)}
                className="mt-3 pl-12 flex items-center gap-2 text-[13px] font-medium text-teal"
              >
                <ChevronDown size={15} />
                Mostrar todos ({temas.length - PREVIEW} más)
              </button>
            )}
          </div>
        </section>


      <StickyCTA href={ctaHref} label={ctaLabel} sub={ctaSub} />

    </main>
  );
}
