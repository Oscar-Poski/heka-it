"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { QuizBlock } from "@/components/QuizBlock";
import { RevealSection, Eyebrow } from "@/components/RevealSection";
import { temaBySlug } from "@/content/temas";
import { getCapitulo } from "@/content";
import { useProgress } from "@/hooks/useProgress";
import type { SeccionQuiz } from "@/lib/types";

export function CapituloPageClient() {
  const params = useParams<{ slug: string; capitulo: string }>();
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

  const quizSection = capitulo.secciones.find(
    (s): s is SeccionQuiz => s.tipo === "quiz"
  );
  const nonQuizSections = capitulo.secciones.filter((s) => s.tipo !== "quiz");

  const siguienteCap = capNum < tema.totalCapitulos ? capNum + 1 : null;
  const siguienteHref = siguienteCap
    ? `/tema/${tema.slug}/${siguienteCap}`
    : `/tema/${tema.slug}`;
  const nextLabel = siguienteCap ? "Siguiente capítulo" : "Volver al tema";

  const handleQuizComplete = () => {
    if (!hydrated) return;
    completarCapitulo(tema.slug, capNum, tema.totalCapitulos);
  };

  const handleNext = () => {
    router.push(siguienteHref);
  };

  return (
    <main className="min-h-screen pb-[calc(6rem+env(safe-area-inset-bottom))]">
      <TopBar
        backHref={`/tema/${tema.slug}`}
        title={`Cap. ${capNum} de ${tema.totalCapitulos}`}
        subtitle={capitulo.titulo}
        tiempoMin={capitulo.tiempoMin}
      />
      <ScrollProgress />

      <section className="px-4 pt-6 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Eliminado uppercase + tracking exagerado — sentence case */}
          <div className="text-[12px] font-medium text-accent">
            Capítulo {capNum}
          </div>
          <h1 className="mt-2 text-[28px] leading-[1.15] font-semibold tracking-tight">
            {capitulo.titulo}
          </h1>
          {capitulo.preguntaGancho ? (
            // text-[14.5px] → text-base, max-w para líneas de lectura cómodas
            <p className="mt-3 text-base text-text-muted leading-relaxed max-w-[340px]">
              {capitulo.preguntaGancho}
            </p>
          ) : null}
        </motion.div>
      </section>

      <div>
        {nonQuizSections.map((seccion, i) => (
          <SectionRenderer key={i} seccion={seccion} index={i} />
        ))}
      </div>

      {quizSection ? (
        <RevealSection>
          <Eyebrow>Verifica</Eyebrow>
          <QuizBlock
            quiz={quizSection}
            onComplete={handleQuizComplete}
            nextLabel={nextLabel}
            onNext={handleNext}
          />
        </RevealSection>
      ) : (
        <RevealSection>
          <Link
            href={siguienteHref}
            onClick={handleQuizComplete}
            className="w-full flex items-center justify-between gap-3 min-h-[52px] bg-accent text-bg rounded-card px-5 py-3.5 active:scale-[0.98] active:bg-accent/90 transition-all"
          >
            <span className="text-[15px] font-semibold">{nextLabel}</span>
            <ArrowRight size={18} className="shrink-0 opacity-80" />
          </Link>
        </RevealSection>
      )}
    </main>
  );
}