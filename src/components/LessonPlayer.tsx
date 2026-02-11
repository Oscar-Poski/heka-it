import { useEffect, useMemo, useState } from 'react';
import type { Lesson, LessonNode } from '@/lib/curriculum';

type LessonPlayerProps = {
  trackTitle: string;
  courseTitle: string;
  moduleTitle: string;
  lesson: Lesson;
  lessonId: string;
  courseHref: string;
  currentHref: string;
  allLessons: LessonNode[];
  previousLesson: LessonNode | null;
  nextLesson: LessonNode | null;
};

const STORAGE_KEY = 'heka-it-progress-v1';

type ProgressState = {
  completedLessonIds: string[];
};

function readProgress(): ProgressState {
  if (typeof window === 'undefined') {
    return { completedLessonIds: [] };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { completedLessonIds: [] };
    }

    const parsed = JSON.parse(raw) as ProgressState;
    if (!Array.isArray(parsed.completedLessonIds)) {
      return { completedLessonIds: [] };
    }

    return parsed;
  } catch {
    return { completedLessonIds: [] };
  }
}

function writeProgress(state: ProgressState) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function LessonPlayer({
  trackTitle,
  courseTitle,
  moduleTitle,
  lesson,
  lessonId,
  courseHref,
  currentHref,
  allLessons,
  previousLesson,
  nextLesson,
}: LessonPlayerProps) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const progress = readProgress();
    setCompletedIds(new Set(progress.completedLessonIds));
  }, []);

  const currentIndex = useMemo(
    () => allLessons.findIndex((node) => node.id === lessonId),
    [allLessons, lessonId]
  );

  const completedCount = useMemo(
    () => allLessons.filter((node) => completedIds.has(node.id)).length,
    [allLessons, completedIds]
  );
  const progressPercent = Math.round((completedCount / allLessons.length) * 100);
  const isCurrentCompleted = completedIds.has(lessonId);
  const canOpenNext = !nextLesson || isCurrentCompleted;

  const toggleCurrentLesson = () => {
    const nextSet = new Set(completedIds);
    if (nextSet.has(lessonId)) {
      nextSet.delete(lessonId);
    } else {
      nextSet.add(lessonId);
    }

    setCompletedIds(nextSet);
    writeProgress({ completedLessonIds: Array.from(nextSet) });
  };

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto grid gap-6 px-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="h-fit rounded-2xl border bg-card p-4 lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{trackTitle}</p>
          <h2 className="mt-1 text-lg font-semibold">{courseTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">Progreso del curso</p>

          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>{completedCount} / {allLessons.length} lecciones</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary">
              <div
                className="h-2 rounded-full bg-primary transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <a href={courseHref} className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
            Ver resumen del curso
          </a>

          <div className="mt-5 space-y-2">
            {allLessons.map((node, index) => {
              const previousNode = index > 0 ? allLessons[index - 1] : null;
              const unlocked = index === 0 || Boolean(previousNode && completedIds.has(previousNode.id)) || node.id === lessonId;
              const isCurrent = node.id === lessonId;
              const isDone = completedIds.has(node.id);

              return unlocked ? (
                <a
                  key={node.id}
                  href={node.href}
                  className={`block rounded-lg border px-3 py-2 text-sm transition ${
                    isCurrent
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border hover:border-primary/40 hover:bg-accent'
                  }`}
                >
                  <p className="text-xs text-muted-foreground">{node.moduleTitle}</p>
                  <p className="font-medium">{node.title}</p>
              {isDone && <p className="text-xs text-primary">Completada</p>}
                </a>
              ) : (
                <div key={node.id} className="rounded-lg border border-dashed px-3 py-2 text-sm opacity-60">
                  <p className="text-xs text-muted-foreground">{node.moduleTitle}</p>
                  <p className="font-medium">{node.title}</p>
                  <p className="text-xs text-muted-foreground">Bloqueada hasta completar la anterior</p>
                </div>
              );
            })}
          </div>
        </aside>

        <article className="rounded-2xl border bg-card p-6 md:p-8">
          <p className="text-sm text-muted-foreground">{moduleTitle}</p>
          <h1 className="mt-1 text-3xl font-bold">{lesson.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Leccion {currentIndex + 1} de {allLessons.length}
          </p>
          <p className="mt-3 text-base text-muted-foreground">{lesson.summary}</p>

          <div className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            Duracion estimada: {lesson.durationMinutes} min
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Objetivos</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
              {lesson.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 space-y-3">
            <h2 className="text-xl font-semibold">Leccion</h2>
            {lesson.content.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="mt-10 flex flex-wrap items-center gap-3 border-t pt-6">
            <button
              type="button"
              onClick={toggleCurrentLesson}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                isCurrentCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'bg-primary text-primary-foreground hover:opacity-90'
              }`}
            >
              {isCurrentCompleted ? 'Marcar como pendiente' : 'Marcar como completada'}
            </button>

            {previousLesson ? (
              <a href={previousLesson.href} className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent">
                Anterior
              </a>
            ) : (
              <a href={courseHref} className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent">
                Volver al curso
              </a>
            )}

            {nextLesson ? (
              canOpenNext ? (
                <a href={nextLesson.href} className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
                  Siguiente
                </a>
              ) : (
                <span className="rounded-lg border border-dashed px-4 py-2 text-sm text-muted-foreground">
                  Completa esta leccion para desbloquear la siguiente
                </span>
              )
            ) : (
              <a href={currentHref} className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
                Repetir leccion
              </a>
            )}
          </section>
        </article>
      </div>
    </section>
  );
}
