"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ListOrdered, Info, CircleEllipsis } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { ChapterCard, type ChapterState } from "@/components/ChapterCard";
import { StickyCTA } from "@/components/StickyCTA";
import { Icon } from "@/components/Icon";
import { temaBySlug } from "@/content/temas";
import { getCapitulo } from "@/content";
import { useProgress } from "@/hooks/useProgress";

export function TemaPageClient() {
  const params = useParams<{ slug: string }>();
  const tema = temaBySlug(params.slug);
  if (!tema) notFound();

  const { progress, hydrated, capitulosCompletadosDe } = useProgress();

  const completados = hydrated ? capitulosCompletadosDe(tema.slug) : [];
  const activoEsEsteTema = hydrated && progress.temaActivo === tema.slug;
  const ultimoCompletado = completados.length ? Math.max(...completados) : 0;

  const capActual = activoEsEsteTema
    ? progress.capituloActivo ?? ultimoCompletado + 1
    : ultimoCompletado + 1 || 1;
  const capActualClamp = Math.min(capActual, tema.totalCapitulos);

  const capitulosList = Array.from({ length: tema.totalCapitulos }, (_, i) => {
    const numero = i + 1;
    const data = getCapitulo(tema.slug, numero);
    return {
      numero,
      titulo: data?.titulo ?? `Capítulo ${numero}`,
    };
  });

  function stateOf(num: number): ChapterState {
    if (completados.includes(num)) return "completado";
    if (activoEsEsteTema && progress.capituloActivo === num) return "en-curso";
    return "disponible";
  }

  const ctaCap = capitulosList[capActualClamp - 1];
  const ctaLabel = `Continuar capítulo ${capActualClamp}`;
  const ctaSub = ctaCap?.titulo ?? "";
  const ctaHref = `/tema/${tema.slug}/${capActualClamp}`;

  return (
    // pb-36 + safe area para el StickyCTA con home indicator
    <main className="min-h-screen pb-[calc(9rem+env(safe-area-inset-bottom))]">
      <TopBar backHref="/" title="Inicio → Tema" subtitle={tema.nombre} />

      <section className="px-4 pt-5">
        {/* Breadcrumb — text-xs en lugar de text-[11px] */}
        <div className="text-xs text-text-dim mb-3">
          <Link href="/" className="hover:text-text-muted transition-colors">
            Inicio
          </Link>
          <span className="mx-1.5 opacity-40">/</span>
          <span className="text-text-muted">{tema.nombre}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent"
        >
          <Icon name={tema.iconoLucide} size={15} strokeWidth={1.9} />
          {/* tracking-wide + ALL CAPS eliminado — sentence case más legible */}
          <span className="text-[12px] font-medium">
            {tema.nombre}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          // text-[26px] → text-[28px], leading más cerrado para títulos pregunta
          className="mt-3 text-[28px] leading-[1.15] font-semibold tracking-tight"
        >
          {tema.preguntaGancho}
        </motion.h1>
      </section>

      {/* Stats */}
      <section className="px-5 mt-5">
        <div className="grid grid-cols-3 gap-5">
          <Stat
            icon={<CircleEllipsis size={20} strokeWidth={1.8} />}
            label="Capítulos"
            value={String(tema.totalCapitulos)}
          />
          <Stat
            icon={<Clock size={20} strokeWidth={1.8} />}
            label="Tiempo"
            value={`${tema.tiempoEstimadoMin} min`}
          />
          <Stat
            icon={<Info size={20} strokeWidth={1.8} />}
            label="Requisitos"
            value={tema.requisitos}
          />
        </div>
      </section>

      {/* Prerrequisitos — texto más grande y borde más visible */}
      <section className="px-4 mt-4">
        <p className="text-[13.5px] text-text-muted leading-relaxed border-l-2 border-accent/30 pl-3">
          {tema.prerrequisitos}
        </p>
      </section>

      {/* Lista de capítulos */}
      <section className="px-4 mt-7">
        {/* Eliminado tracking-[0.15em] y uppercase — sentence case */}
        <div className="text-[12px] font-semibold text-accent mb-3">
          Capítulos del tema
        </div>
        <div className="space-y-2">
          {capitulosList.map((c) => (
            <ChapterCard
              key={c.numero}
              temaSlug={tema.slug}
              numero={c.numero}
              titulo={c.titulo}
              state={hydrated ? stateOf(c.numero) : "disponible"}
            />
          ))}
        </div>
      </section>

      <StickyCTA href={ctaHref} label={ctaLabel} sub={ctaSub} />
    </main>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-card border border-border bg-surface p-3">
      <div className="flex items-center gap-1.5 text-text-dim mb-1.5">
        <span className="text-accent">{icon}</span>
        {/* text-[10px] uppercase → text-xs sentence case */}
        <span className="text-xs text-text-dim">{label}</span>
      </div>
      {/* text-[13px] → text-sm, leading-snug → leading-tight */}
      <div className="text-sm text-text-primary font-medium leading-snug">
        {value}
      </div>
    </div>
  );
}