"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ListOrdered, Info } from "lucide-react";
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
      descripcion: data?.descripcion,
      tiempoMin: data?.tiempoMin,
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
    <main className="min-h-screen pb-32">
      <TopBar backHref="/" title="Inicio → Tema" subtitle={tema.nombre} />

      <section className="px-4 pt-5">
        <div className="text-[11px] text-text-dim mb-3">
          <Link href="/" className="hover:text-text-muted">
            Inicio
          </Link>
          <span className="mx-1.5">→</span>
          <span className="text-text-muted">{tema.nombre}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent"
        >
          <Icon name={tema.iconoLucide} size={15} strokeWidth={1.9} />
          <span className="text-[12px] font-semibold tracking-wide">
            {tema.nombre}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="mt-4 text-[26px] leading-[1.2] font-semibold tracking-tight"
        >
          {tema.preguntaGancho}
        </motion.h1>
      </section>

      <section className="px-4 mt-5">
        <div className="grid grid-cols-3 gap-2">
          <Stat
            icon={<ListOrdered size={14} strokeWidth={1.8} />}
            label="Capítulos"
            value={String(tema.totalCapitulos)}
          />
          <Stat
            icon={<Clock size={14} strokeWidth={1.8} />}
            label="Estimado"
            value={`${tema.tiempoEstimadoMin} min`}
          />
          <Stat
            icon={<Info size={14} strokeWidth={1.8} />}
            label="Requisitos"
            value={tema.requisitos}
          />
        </div>
      </section>

      <section className="px-4 mt-4">
        <p className="text-[12.5px] text-text-muted leading-relaxed border-l-2 border-border pl-3">
          {tema.prerrequisitos}
        </p>
      </section>

      <section className="px-4 mt-7">
        <div className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase mb-3">
          Capítulos
        </div>
        <div className="space-y-2">
          {capitulosList.map((c) => (
            <ChapterCard
              key={c.numero}
              temaSlug={tema.slug}
              numero={c.numero}
              titulo={c.titulo}
              descripcion={c.descripcion}
              tiempoMin={c.tiempoMin}
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
    <div className="rounded-card border border-border bg-surface p-2.5">
      <div className="flex items-center gap-1.5 text-text-dim mb-1">
        <span className="text-accent">{icon}</span>
        <span className="text-[10px] uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-[13px] text-text-primary font-medium leading-snug">
        {value}
      </div>
    </div>
  );
}
