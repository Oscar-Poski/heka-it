"use client";

import { notFound, useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { QuizBlock } from "@/components/QuizBlock";
import { RevealSection } from "@/components/RevealSection";
import { temaBySlug } from "@/content/temas";
import { getCapitulo } from "@/content";
import { useProgress } from "@/hooks/useProgress";
import type { SeccionQuiz } from "@/lib/types";

export function CapituloPageClient() {
  const params = useParams<{ slug: string; capitulo: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const capNum = Number(params.capitulo);
  const tema = temaBySlug(params.slug);
  if (!tema) notFound();

  const capitulo = getCapitulo(tema.slug, capNum);
  const { setActive, completarCapitulo, hydrated } = useProgress();

  useEffect(() => {
    if (!Number.isFinite(capNum)) return;
    setActive(tema.slug, capNum);
  }, [tema.slug, capNum, setActive]);

  if (!capitulo) {
    return (
      <main className="min-h-screen">
        <TopBar
          backHref={`/tema/${tema.slug}`}
          title={tema.nombre}
          subtitle={`Cap. ${capNum} de ${tema.totalCapitulos}`}
        />
        <div className="px-4 pt-16 text-center flex flex-col items-center gap-4">
          <p className="text-[15px] text-text-muted">
            Este capítulo todavía no está disponible.
          </p>
          <Link
            href={`/tema/${tema.slug}`}
            className="inline-flex items-center gap-1.5 text-accent text-[14px] font-medium"
          >
            <ArrowRight size={14} className="rotate-180" />
            Volver al tema
          </Link>
        </div>
      </main>
    );
  }

  const totalPasos = capitulo.pasos.length;
  const pasoParam = Number(searchParams.get("paso") ?? "1");
  const pasoIndex = Math.max(0, Math.min(pasoParam - 1, totalPasos - 1));
  const pasoActual = capitulo.pasos[pasoIndex];
  const esUltimoPaso = pasoIndex === totalPasos - 1;

  const siguienteCap = capNum < tema.totalCapitulos ? capNum + 1 : null;
  const siguienteHref = siguienteCap
    ? `/tema/${tema.slug}/${siguienteCap}`
    : `/tema/${tema.slug}`;
  const nextLabel = siguienteCap ? "Siguiente Nivel" : "Volver al tema";

  const esPrimerPaso = pasoIndex === 0;

  const handleSiguiente = () => {
    if (esUltimoPaso) {
      if (hydrated) completarCapitulo(tema.slug, capNum, tema.totalCapitulos);
      router.push(siguienteHref);
    } else {
      router.push(`?paso=${pasoIndex + 2}`);
    }
  };

  const handleAnterior = () => {
    if (!esPrimerPaso) router.push(`?paso=${pasoIndex}`);
  };

  const quizSection = pasoActual.secciones.find(
    (s): s is SeccionQuiz => s.tipo === "quiz"
  );
  const nonQuizSections = pasoActual.secciones.filter((s) => s.tipo !== "quiz");

  return (
    <main className="min-h-screen pb-[calc(6rem+env(safe-area-inset-bottom))]">
      <TopBar
        backHref={`/tema/${tema.slug}`}
        title={`Cap. ${capNum} de ${tema.totalCapitulos}`}
        subtitle={capitulo.titulo}
      />

      {/* Step progress bar */}
      <div className="px-4 pt-3 pb-1">
        <div className="flex items-center gap-1.5">
          {capitulo.pasos.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i <= pasoIndex ? "bg-accent" : "bg-surface2"
              }`}
            />
          ))}
        </div>
        <p className="mt-1.5 text-[11px] text-text-dim">
          Paso {pasoIndex + 1} de {totalPasos}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pasoIndex}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
        >

          {/* Sections for this paso */}
          <div>
            {nonQuizSections.map((seccion, i) => (
              <SectionRenderer key={i} seccion={seccion} index={i} />
            ))}
          </div>

          {/* Quiz or next button */}
          {quizSection ? (
            <RevealSection>
              <QuizBlock
                quiz={quizSection}
                onComplete={() => {
                  if (hydrated && esUltimoPaso) {
                    completarCapitulo(tema.slug, capNum, tema.totalCapitulos);
                  }
                }}
                nextLabel={esUltimoPaso ? nextLabel : "Siguiente"}
                onNext={handleSiguiente}
              />
              {!esPrimerPaso ? (
                <button
                  onClick={handleAnterior}
                  className="mt-3 w-full flex items-center justify-center gap-2 min-h-[52px] border border-border bg-surface text-text-primary rounded-card px-5 py-3.5 active:scale-[0.98] active:bg-surface2 transition-all"
                >
                  <ArrowRight size={18} className="shrink-0 rotate-180 opacity-70" />
                  <span className="text-[15px] font-semibold">Anterior</span>
                </button>
              ) : null}
            </RevealSection>
          ) : (
            <RevealSection>
              <div className="flex items-center gap-3">
                {!esPrimerPaso ? (
                  <button
                    onClick={handleAnterior}
                    className="flex items-center justify-center gap-2 min-h-[52px] border border-border bg-surface text-text-primary rounded-card px-5 py-3.5 active:scale-[0.98] active:bg-surface2 transition-all"
                  >
                    <ArrowRight size={18} className="shrink-0 rotate-180 opacity-70" />
                    <span className="text-[15px] font-semibold">Anterior</span>
                  </button>
                ) : null}
                <button
                  onClick={handleSiguiente}
                  className="flex-1 flex items-center justify-between gap-3 min-h-[52px] bg-accent text-bg rounded-card px-5 py-3.5 active:scale-[0.98] active:bg-accent/90 transition-all"
                >
                  <span className="text-[15px] font-semibold">
                    {esUltimoPaso ? nextLabel : "Siguiente"}
                  </span>
                  <ArrowRight size={18} className="shrink-0 opacity-80" />
                </button>
              </div>
            </RevealSection>
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
