import { useEffect, useMemo, useRef, useState } from 'react';
import '@xterm/xterm/css/xterm.css';
import type { Lesson, LessonNode } from '@/lib/curriculum';
import { createTerminalLabSession } from '@/lib/terminal-lab-engine';

type LessonPlayerProps = {
  trackTitle: string;
  courseTitle: string;
  moduleTitle: string;
  lesson: Lesson;
  lessonId: string;
  courseHref: string;
  currentHref: string;
  moduleLessons: LessonNode[];
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

function createTerminalTheme(isDark: boolean) {
  if (isDark) {
    return {
      background: '#0b1418',
      foreground: '#f5feff',
      cursor: '#59d3e3',
      cursorAccent: '#0b1418',
      selectionBackground: '#1e3f47',
      black: '#0b1418',
      red: '#ff7d7d',
      green: '#8ce0a7',
      yellow: '#ffd166',
      blue: '#8ac6ff',
      magenta: '#d0a8ff',
      cyan: '#59d3e3',
      white: '#f5feff',
      brightBlack: '#4f646a',
      brightRed: '#ff9f9f',
      brightGreen: '#b7f0c7',
      brightYellow: '#ffe29a',
      brightBlue: '#b5dcff',
      brightMagenta: '#e2c6ff',
      brightCyan: '#8ee6f2',
      brightWhite: '#ffffff',
    };
  }

  return {
    background: '#0f1720',
    foreground: '#f8fbff',
    cursor: '#59d3e3',
    cursorAccent: '#0f1720',
    selectionBackground: '#1f3443',
    black: '#0f1720',
    red: '#ff8f8f',
    green: '#8be6a8',
    yellow: '#ffd166',
    blue: '#8dc5ff',
    magenta: '#d8adff',
    cyan: '#6ee7f3',
    white: '#f8fbff',
    brightBlack: '#566977',
    brightRed: '#ffacac',
    brightGreen: '#b8f1ca',
    brightYellow: '#ffe5a8',
    brightBlue: '#b6ddff',
    brightMagenta: '#e8cbff',
    brightCyan: '#a1eff7',
    brightWhite: '#ffffff',
  };
}

async function mountTerminalLab(
  preElement: HTMLElement,
  instructions: string,
  isDark: boolean
): Promise<() => void> {
  const [{ Terminal }, { FitAddon }] = await Promise.all([
    import('@xterm/xterm'),
    import('@xterm/addon-fit'),
  ]);

  const wrapper = document.createElement('section');
  wrapper.className = 'terminal-lab';

  const header = document.createElement('div');
  header.className = 'terminal-lab__header';
  header.innerHTML = '<strong>Lab de terminal</strong><span>Práctica</span>';
  wrapper.appendChild(header);

  if (instructions) {
    const hint = document.createElement('p');
    hint.className = 'terminal-lab__hint';
    hint.textContent = instructions;
    wrapper.appendChild(hint);
  }

  const viewport = document.createElement('div');
  viewport.className = 'terminal-lab__viewport';
  wrapper.appendChild(viewport);

  const actions = document.createElement('div');
  actions.className = 'terminal-lab__actions';
  const resetButton = document.createElement('button');
  resetButton.type = 'button';
  resetButton.className = 'terminal-lab__reset';
  resetButton.textContent = 'Reset lab';
  actions.appendChild(resetButton);
  wrapper.appendChild(actions);

  preElement.replaceWith(wrapper);

  const terminal = new Terminal({
    theme: createTerminalTheme(isDark),
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: 13,
    lineHeight: 1.4,
    cursorBlink: true,
    convertEol: true,
  });
  const fitAddon = new FitAddon();
  terminal.loadAddon(fitAddon);
  terminal.open(viewport);
  fitAddon.fit();

  const session = createTerminalLabSession();
  let inputBuffer = '';

  const writePrompt = () => {
    terminal.write(session.prompt());
  };

  const writeOutput = (lines: string[] | undefined) => {
    if (!lines) {
      return;
    }
    for (const line of lines) {
      terminal.writeln(line);
    }
  };

  terminal.writeln('Esta es una simulación de una terminal. Usa help para ver los comandos disponibles.');
  writePrompt();

  const dataListener = terminal.onData((data) => {
    if (data === '\r') {
      terminal.write('\r\n');
      const result = session.run(inputBuffer);
      inputBuffer = '';

      if (result.clear) {
        terminal.clear();
      }
      writeOutput(result.output);
      writePrompt();
      return;
    }

    if (data === '\u0003') {
      inputBuffer = '';
      terminal.write('^C\r\n');
      writePrompt();
      return;
    }

    if (data === '\u007f') {
      if (inputBuffer.length > 0) {
        inputBuffer = inputBuffer.slice(0, -1);
        terminal.write('\b \b');
      }
      return;
    }

    if (data.startsWith('\u001b')) {
      return;
    }

    inputBuffer += data;
    terminal.write(data);
  });

  const resizeObserver = new ResizeObserver(() => {
    fitAddon.fit();
  });
  resizeObserver.observe(viewport);

  const resetListener = () => {
    session.reset();
    inputBuffer = '';
    terminal.clear();
    terminal.writeln('Lab reset. Type help to see available commands.');
    writePrompt();
  };
  resetButton.addEventListener('click', resetListener);

  return () => {
    resetButton.removeEventListener('click', resetListener);
    resizeObserver.disconnect();
    dataListener.dispose();
    terminal.dispose();
  };
}

export function LessonPlayer({
  trackTitle,
  courseTitle,
  moduleTitle,
  lesson,
  lessonId,
  courseHref,
  currentHref,
  moduleLessons,
  previousLesson,
  nextLesson,
}: LessonPlayerProps) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const lessonContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const progress = readProgress();
    setCompletedIds(new Set(progress.completedLessonIds));
  }, []);

  useEffect(() => {
    const disposers: Array<() => void> = [];
    let unmounted = false;

    const renderInteractiveBlocks = async () => {
      const contentElement = lessonContentRef.current;
      if (!contentElement) {
        return;
      }

      const isDark = document.documentElement.classList.contains('dark');
      const terminalBlocks = Array.from(
        contentElement.querySelectorAll<HTMLElement>('pre > code.language-terminal')
      );

      for (const codeBlock of terminalBlocks) {
        const source = codeBlock.textContent?.trim() ?? '';
        const pre = codeBlock.closest('pre');
        if (!pre) {
          continue;
        }

        const disposeTerminal = await mountTerminalLab(pre, source, isDark);
        if (unmounted) {
          disposeTerminal();
          return;
        }
        disposers.push(disposeTerminal);
      }

      const mermaidBlocks = contentElement.querySelectorAll('pre > code.language-mermaid');
      if (mermaidBlocks.length > 0) {
        mermaidBlocks.forEach((codeBlock) => {
          const source = codeBlock.textContent?.trim();
          const pre = codeBlock.closest('pre');
          if (!source || !pre) {
            return;
          }

          const container = document.createElement('div');
          container.className = 'mermaid';
          container.textContent = source;
          pre.replaceWith(container);
        });

        const mermaid = (await import('mermaid')).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: isDark
            ? {
                background: '#0b1418',
                primaryColor: '#16323a',
                primaryBorderColor: '#59d3e3',
                primaryTextColor: '#f5feff',
                secondaryColor: '#13252b',
                tertiaryColor: '#102027',
                lineColor: '#8ee6f2',
                textColor: '#f5feff',
                mainBkg: '#16323a',
                secondBkg: '#13252b',
                tertiaryBkg: '#102027',
                clusterBkg: '#13252b',
                clusterBorder: '#59d3e3',
                nodeBorder: '#59d3e3',
                edgeLabelBackground: '#0b1418',
              }
            : {
                background: '#ffffff',
                primaryColor: '#e8f7f7',
                primaryBorderColor: '#14808c',
                primaryTextColor: '#14343a',
                secondaryColor: '#dff2f1',
                tertiaryColor: '#f4fbfb',
                lineColor: '#14808c',
                textColor: '#14343a',
                mainBkg: '#e8f7f7',
                secondBkg: '#dff2f1',
                tertiaryBkg: '#f4fbfb',
                clusterBkg: '#f4fbfb',
                clusterBorder: '#14808c',
                nodeBorder: '#14808c',
                edgeLabelBackground: '#ffffff',
              },
        });

        await mermaid.run({
          querySelector: '.markdown-content .mermaid',
        });
      }
    };

    void renderInteractiveBlocks();

    return () => {
      unmounted = true;
      for (const dispose of disposers) {
        dispose();
      }
    };
  }, [lessonId, lesson.contentHtml]);

  const currentIndex = useMemo(
    () => moduleLessons.findIndex((node) => node.id === lessonId),
    [moduleLessons, lessonId]
  );

  const completedCount = useMemo(
    () => moduleLessons.filter((node) => completedIds.has(node.id)).length,
    [moduleLessons, completedIds]
  );
  const progressPercent = moduleLessons.length > 0
    ? Math.round((completedCount / moduleLessons.length) * 100)
    : 0;
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
      <div className="container mx-auto grid gap-6 px-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <aside className="order-2 h-fit rounded-2xl border bg-card p-4 lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{courseTitle}</p>
          <h2 className="mt-1 text-lg font-semibold">{moduleTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">Progreso del módulo</p>

          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>{completedCount} / {moduleLessons.length} lecciones</span>
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
            Ver todos los módulos
          </a>

          <div className="mt-5 space-y-2">
            {moduleLessons.map((node, index) => {
              const previousNode = index > 0 ? moduleLessons[index - 1] : null;
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

        <article className="order-1 rounded-2xl border bg-card p-6 md:p-8">
          <p className="text-sm text-muted-foreground">{moduleTitle}</p>
          <h1 className="mt-1 text-3xl font-bold">{lesson.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Lección {currentIndex + 1} de {moduleLessons.length}
          </p>
          <p className="mt-3 text-base text-muted-foreground">{lesson.summary}</p>

          <div className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            Duración estimada: {lesson.durationMinutes} min
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
            <h2 className="text-xl font-semibold">Lección</h2>
            <div
              ref={lessonContentRef}
              className="markdown-content space-y-3 leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: lesson.contentHtml }}
            />
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
                  Completa esta lección para desbloquear la siguiente
                </span>
              )
            ) : (
              <a href={currentHref} className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
                Repetir lección
              </a>
            )}
          </section>
        </article>
      </div>
    </section>
  );
}
