"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { NodeCard, type NodeState } from "@/components/NodeCard";
import { StickyCTA } from "@/components/StickyCTA";
import { temas, temaBySlug } from "@/content/temas";
import { paths } from "@/content/paths";
import { useProgress } from "@/hooks/useProgress";

function SectionHeader({
  title,
  expanded,
  onToggle,
  count,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      className="w-full flex items-center gap-3 mb-4 group"
    >
      <span className="text-[11px] font-semibold tracking-[0.08em] text-teal uppercase">
        {title}
      </span>
      <span className="text-[11px] font-medium text-text-dim">{count}</span>
      <div className="flex-1 h-px bg-teal/30" />
      <ChevronDown
        size={16}
        className={`text-teal shrink-0 transition-transform duration-200 ${
          expanded ? "rotate-180" : "rotate-0"
        }`}
        aria-hidden
      />
    </button>
  );
}

export default function AcademyPage() {
  const { progress, hydrated, capitulosCompletadosDe } = useProgress();
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(paths.map((p) => [p.slug, true]))
  );
  const togglePath = (slug: string) =>
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));

  const activeTema = progress.temaActivo
    ? temas.find((t) => t.slug === progress.temaActivo)
    : null;

  const ctaTema = activeTema ?? temas[0];
  const ctaCap = progress.capituloActivo ?? 1;
  const ctaLabel = hydrated && activeTema ? "Continuar" : "Empezar";
  const ctaSub = `${ctaTema.nombre} · Cap. ${ctaCap}`;
  const ctaHref = `/tema/${ctaTema.slug}/${ctaCap}`;

  return (
    <main className="min-h-screen pb-36 pb-[calc(9rem+env(safe-area-inset-bottom))]">
      <TopBar backHref="/" subtitle="Heka it" title="Academy" />

      {/* Hero */}
      <section className="px-4 pt-6 pb-6">
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

      {/* Learning paths */}
      {paths.map((path) => {
        const pathTemas = path.temaSlugs
          .map((slug) => temaBySlug(slug))
          .filter((t): t is NonNullable<typeof t> => Boolean(t));
        const isOpen = expanded[path.slug] ?? true;
        return (
          <section
            key={path.slug}
            className="px-4 pt-2 pb-6 lg:px-0 lg:pt-0 lg:pb-0"
          >
            <SectionHeader
              title={path.nombre}
              count={pathTemas.length}
              expanded={isOpen}
              onToggle={() => togglePath(path.slug)}
            />
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="relative">
                    <div
                      className="absolute left-[14px] top-0 bottom-0 w-px bg-border"
                      aria-hidden
                    />
                    <div className="space-y-2.5 pb-4">
                      {pathTemas.map((tema, i) => {
                  const proximamente = tema.totalCapitulos === 0;
                  const completed = progress.temasCompletados.includes(tema.slug);
                  const isActive =
                    hydrated && progress.temaActivo === tema.slug && !completed;
                  let state: NodeState;
                  if (proximamente) {
                    state = "proximamente";
                  } else if (!hydrated) {
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
                      proximamente={proximamente}
                      capitulosCompletados={
                        hydrated ? capitulosCompletadosDe(tema.slug).length : 0
                      }
                      index={i}
                    />
                  );
                })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        );
      })}

      <StickyCTA href={ctaHref} label={ctaLabel} sub={ctaSub} />
    </main>
  );
}
