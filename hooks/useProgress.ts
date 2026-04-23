"use client";

import { useCallback, useEffect, useState } from "react";
import type { ProgresoUsuario } from "@/lib/types";

const STORAGE_KEY = "hekademos:progreso:v1";

const defaultProgress: ProgresoUsuario = {
  temaActivo: null,
  capituloActivo: null,
  temasCompletados: [],
  capitulosCompletados: {},
};

function readStorage(): ProgresoUsuario {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw) as Partial<ProgresoUsuario>;
    return {
      temaActivo: parsed.temaActivo ?? null,
      capituloActivo: parsed.capituloActivo ?? null,
      temasCompletados: parsed.temasCompletados ?? [],
      capitulosCompletados: parsed.capitulosCompletados ?? {},
    };
  } catch {
    return defaultProgress;
  }
}

function writeStorage(p: ProgresoUsuario) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // ignore quota
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgresoUsuario>(defaultProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(readStorage());
    setHydrated(true);
  }, []);

  const update = useCallback(
    (updater: (prev: ProgresoUsuario) => ProgresoUsuario) => {
      setProgress((prev) => {
        const next = updater(prev);
        writeStorage(next);
        return next;
      });
    },
    []
  );

  const setActive = useCallback(
    (temaSlug: string, capituloNumero: number) => {
      update((prev) => ({
        ...prev,
        temaActivo: temaSlug,
        capituloActivo: capituloNumero,
      }));
    },
    [update]
  );

  const completarCapitulo = useCallback(
    (temaSlug: string, capituloNumero: number, totalCapitulos: number) => {
      update((prev) => {
        const yaHechos = new Set(prev.capitulosCompletados[temaSlug] ?? []);
        yaHechos.add(capituloNumero);
        const lista = Array.from(yaHechos).sort((a, b) => a - b);
        const completados = new Set(prev.temasCompletados);
        if (lista.length >= totalCapitulos) completados.add(temaSlug);
        return {
          ...prev,
          capitulosCompletados: {
            ...prev.capitulosCompletados,
            [temaSlug]: lista,
          },
          temasCompletados: Array.from(completados),
        };
      });
    },
    [update]
  );

  const reset = useCallback(() => {
    update(() => defaultProgress);
  }, [update]);

  const isCapituloCompletado = useCallback(
    (temaSlug: string, capituloNumero: number) => {
      return (progress.capitulosCompletados[temaSlug] ?? []).includes(
        capituloNumero
      );
    },
    [progress]
  );

  const capitulosCompletadosDe = useCallback(
    (temaSlug: string) => progress.capitulosCompletados[temaSlug] ?? [],
    [progress]
  );

  return {
    progress,
    hydrated,
    setActive,
    completarCapitulo,
    reset,
    isCapituloCompletado,
    capitulosCompletadosDe,
  };
}
