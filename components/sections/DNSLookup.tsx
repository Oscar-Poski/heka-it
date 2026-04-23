"use client";

import { useState, useCallback } from "react";

type Direction = "fwd" | "bwd";

interface NodeDef {
  id: string;
  icon: string;
  label: string;
  sub: string;
}

interface StepDef {
  fromIdx: number;
  toIdx: number;
  dir: Direction;
  step: string;
  title: string;
  desc: string;
  final?: boolean;
}

type NodeState = "idle" | "active" | "done";

const NODES: NodeDef[] = [
  { id: "device", icon: "💻", label: "Tu dispositivo", sub: "Caché local" },
  { id: "isp",    icon: "🏢", label: "Resolver ISP",   sub: "Tu proveedor" },
  { id: "root",   icon: "🌐", label: "Servidor raíz",  sub: "13 en el mundo" },
  { id: "tld",    icon: "📂", label: "Servidor TLD",   sub: ".com / .org" },
  { id: "auth",   icon: "📋", label: "Autoritativo",   sub: "Respuesta final" },
];

const STEPS: StepDef[] = [
  {
    fromIdx: 0, toIdx: 1, dir: "fwd",
    step: "Paso 1 de 5",
    title: "Tu dispositivo pregunta al resolver del ISP",
    desc: "No tienes la respuesta en caché. Tu computadora envía la pregunta al servidor DNS de tu proveedor de internet (ISP).",
  },
  {
    fromIdx: 1, toIdx: 2, dir: "fwd",
    step: "Paso 2 de 5",
    title: "El resolver consulta un servidor raíz",
    desc: "El resolver tampoco tiene la respuesta. Pregunta a uno de los 13 servidores raíz del mundo.",
  },
  {
    fromIdx: 2, toIdx: 3, dir: "fwd",
    step: "Paso 3 de 5",
    title: "El servidor raíz apunta al servidor TLD",
    desc: 'El raíz responde: "No lo sé, pero el servidor .com sí sabe quién maneja ese dominio."',
  },
  {
    fromIdx: 3, toIdx: 4, dir: "fwd",
    step: "Paso 4 de 5",
    title: "El TLD apunta al servidor autoritativo",
    desc: 'El servidor .com dice: "El autoritativo de ese dominio es ns1.example.com".',
  },
  {
    fromIdx: 4, toIdx: 0, dir: "bwd",
    step: "Paso 5 de 5",
    title: "El autoritativo responde con la IP",
    desc: "El servidor autoritativo devuelve la IP al resolver, que la reenvía a tu dispositivo. ¡Listo!",
    final: true,
  },
];

const KNOWN_IPS: Record<string, string> = {
  "google.com":    "142.250.80.46",
  "wikipedia.org": "185.15.58.224",
  "github.com":    "140.82.112.4",
  "youtube.com":   "142.250.217.110",
  "amazon.com":    "205.251.242.103",
};

function randomIP(): string {
  const o = () => Math.floor(Math.random() * 200) + 20;
  return `${o()}.${o()}.${o()}.${o()}`;
}

// ---------------------------------------------------------------------------
// Layout zigzag para 5 nodos en grilla 2 columnas:
//
//  [0] → [1]
//          ↓
//  [3] ← [2]
//   ↓
//  [4]
//
// Posiciones en grid (row, col) base 0:
const NODE_POS = [
  [0, 0], // device
  [0, 1], // isp
  [1, 1], // root
  [1, 0], // tld
  [2, 0], // auth
] as const;

// Segmentos de flecha entre nodos consecutivos:
// { from, to, axis, headAt }
// axis: "h" = horizontal, "v" = vertical
// headAt: "end" = apunta hacia to, "start" = apunta hacia from (para bwd final)
const SEGMENTS = [
  { from: 0, to: 1, axis: "h" as const, col: 0, row: 0, bwdReturn: false },
  { from: 1, to: 2, axis: "v" as const, col: 1, row: 0, bwdReturn: false },
  { from: 2, to: 3, axis: "h" as const, col: 0, row: 1, bwdReturn: false, reverse: true },
  { from: 3, to: 4, axis: "v" as const, col: 0, row: 1, bwdReturn: false },
];

// ---------------------------------------------------------------------------

interface ArrowHProps {
  lit: boolean;
  dir: Direction;
  animating: boolean;
  reverse?: boolean;
}

function ArrowH({ lit, dir, animating, reverse = false }: ArrowHProps) {
  const lineColor = lit
    ? dir === "fwd" ? "bg-blue-400 dark:bg-blue-500" : "bg-green-400 dark:bg-green-500"
    : "bg-neutral-200 dark:bg-neutral-700";
  const headColor = lit
    ? dir === "fwd" ? "border-l-blue-400 dark:border-l-blue-500" : "border-l-green-400 dark:border-l-green-500"
    : "border-l-neutral-200 dark:border-l-neutral-700";
  const dotColor = dir === "fwd" ? "bg-blue-400 dark:bg-blue-500" : "bg-green-400 dark:bg-green-500";
  const animClass = reverse
    ? dir === "fwd" ? "animate-pkt-bwd" : "animate-pkt-fwd"
    : dir === "fwd" ? "animate-pkt-fwd" : "animate-pkt-bwd";

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative flex items-center w-full h-3">
        <div className={`flex-1 h-px transition-colors duration-300 ${lineColor}`} />
        <div className={`w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] transition-colors duration-300 ${headColor}`} />
        {animating && (
          <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${dotColor} ${animClass}`} />
        )}
      </div>
    </div>
  );
}

interface ArrowVProps {
  lit: boolean;
  dir: Direction;
  animating: boolean;
}

function ArrowV({ lit, dir, animating }: ArrowVProps) {
  const lineColor = lit
    ? dir === "fwd" ? "bg-blue-400 dark:bg-blue-500" : "bg-green-400 dark:bg-green-500"
    : "bg-neutral-200 dark:bg-neutral-700";
  const headColor = lit
    ? dir === "fwd" ? "border-t-blue-400 dark:border-t-blue-500" : "border-t-green-400 dark:border-t-green-500"
    : "border-t-neutral-200 dark:border-t-neutral-700";
  const dotColor = dir === "fwd" ? "bg-blue-400 dark:bg-blue-500" : "bg-green-400 dark:bg-green-500";
  const animClass = dir === "fwd" ? "animate-pkt-down" : "animate-pkt-up";

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative flex flex-col items-center h-full w-3">
        <div className={`w-px flex-1 transition-colors duration-300 ${lineColor}`} />
        <div className={`w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] transition-colors duration-300 ${headColor}`} />
        {animating && (
          <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${dotColor} ${animClass}`} />
        )}
      </div>
    </div>
  );
}

interface DnsNodeProps {
  node: NodeDef;
  state: NodeState;
}

function DnsNode({ node, state }: DnsNodeProps) {
  const border =
    state === "active"
      ? "border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/40"
      : state === "done"
      ? "border-green-400 bg-green-50 dark:border-green-500 dark:bg-green-950/40"
      : "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <div className={`rounded-lg border px-2 py-2.5 text-center transition-all duration-300 ${border}`}>
      <span className="block text-xl leading-none mb-1">{node.icon}</span>
      <p className="text-[11px] font-medium text-neutral-800 dark:text-neutral-100 leading-tight">{node.label}</p>
      <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight mt-0.5">{node.sub}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------

export function DNSLookup() {
  const [domainInput, setDomainInput] = useState("google.com");
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [animating, setAnimating] = useState(false);
  const [resolvedIP, setResolvedIP] = useState<string | null>(null);
  const [activeIP, setActiveIP] = useState("");

  const [nodeStates, setNodeStates] = useState<NodeState[]>(Array(NODES.length).fill("idle"));
  // litSegments[i] = true si el segmento i está iluminado
  const [litSegments, setLitSegments] = useState<boolean[]>(Array(SEGMENTS.length).fill(false));
  const [animSegments, setAnimSegments] = useState<boolean[]>(Array(SEGMENTS.length).fill(false));
  const [animDir, setAnimDir] = useState<Direction>("fwd");

  const reset = useCallback(() => {
    setStarted(false);
    setCurrentStep(-1);
    setAnimating(false);
    setResolvedIP(null);
    setNodeStates(Array(NODES.length).fill("idle"));
    setLitSegments(Array(SEGMENTS.length).fill(false));
    setAnimSegments(Array(SEGMENTS.length).fill(false));
    setAnimDir("fwd");
  }, []);

  const handleStart = useCallback(() => {
    const domain = domainInput.trim().toLowerCase() || "google.com";
    const ip = KNOWN_IPS[domain] ?? randomIP();
    setActiveIP(ip);
    reset();
    setTimeout(() => {
      setStarted(true);
      setCurrentStep(0);
      setNodeStates((prev) => { const n = [...prev]; n[0] = "active"; return n; });
    }, 50);
  }, [domainInput, reset]);

  const handleNext = useCallback(() => {
    if (animating || currentStep < 0 || currentStep >= STEPS.length) return;

    const step = STEPS[currentStep];
    const { fromIdx, toIdx, dir } = step;

    // Determinar qué segmentos atravesar (índices en SEGMENTS)
    // Cada step va de fromIdx a toIdx. Los segmentos van de nodo en nodo secuencialmente.
    // Para el paso final (bwd, de 4→0), iluminamos todos en reversa.
    let segIndices: number[];
    if (step.final) {
      segIndices = [3, 2, 1, 0]; // todos en reversa
    } else {
      // el segmento correspondiente al paso es currentStep (0-3)
      segIndices = [currentStep];
    }

    setAnimating(true);
    setAnimDir(dir);
    setNodeStates((prev) => { const n = [...prev]; n[toIdx] = "active"; return n; });

    let i = 0;
    function animSeg() {
      if (i >= segIndices.length) {
        setAnimating(false);
        if (step.final) {
          setResolvedIP(activeIP);
          setNodeStates((prev) => { const n = [...prev]; n[0] = "done"; return n; });
          setCurrentStep(STEPS.length);
        } else {
          setCurrentStep((c) => c + 1);
          const nextStep = STEPS[currentStep + 1];
          if (nextStep) {
            setNodeStates((prev) => { const n = [...prev]; n[nextStep.fromIdx] = "active"; return n; });
          }
        }
        return;
      }
      const si = segIndices[i];
      setLitSegments((prev) => { const n = [...prev]; n[si] = true; return n; });
      setAnimSegments((prev) => { const n = [...prev]; n[si] = true; return n; });
      setTimeout(() => {
        setAnimSegments((prev) => { const n = [...prev]; n[si] = false; return n; });
        i++;
        setTimeout(animSeg, 80);
      }, 460);
    }
    animSeg();
  }, [animating, currentStep, activeIP]);

  const progress = currentStep < 0 ? 0 : Math.round((Math.min(currentStep, STEPS.length) / STEPS.length) * 100);
  const stepInfo = currentStep >= 0 && currentStep < STEPS.length ? STEPS[currentStep] : null;
  const isFinished = currentStep >= STEPS.length;
  const nextDisabled = !started || animating || isFinished;

  return (
    <div className="font-sans py-4 select-none max-w-sm mx-auto">
      {/* Input */}
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={domainInput}
          onChange={(e) => setDomainInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleStart()}
          placeholder="dominio.com"
          className="flex-1 min-w-0 rounded-lg border border-neutral-200 dark:border-neutral-700
            bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-mono
            text-neutral-800 dark:text-neutral-100
            focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleStart}
          className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700
            bg-white dark:bg-neutral-900 text-sm text-neutral-700 dark:text-neutral-200
            hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap"
        >
          Resolver ↗
        </button>
        <button
          onClick={reset}
          className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700
            bg-white dark:bg-neutral-900 text-sm text-neutral-400 dark:text-neutral-500
            hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
        >
          ↺
        </button>
      </div>

      {/* Grilla de nodos: 2 columnas, flujo zigzag */}
      {/*
        Estructura de la grid (7 col × 5 row):
        col: node0 | arrowH | node1
                              arrowV
             node3  | arrowH | node2   (derecha←izquierda)
             arrowV
             node4
      */}
      <div
        className="mb-4"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 36px 1fr",
          gridTemplateRows: "auto 36px auto 36px auto",
          gap: "0",
        }}
      >
        {/* Row 0: node0, arrowH(0→1), node1 */}
        <div style={{ gridColumn: 1, gridRow: 1 }}>
          <DnsNode node={NODES[0]} state={nodeStates[0]} />
        </div>
        <div style={{ gridColumn: 2, gridRow: 1, display: "flex", alignItems: "center" }}>
          <ArrowH lit={litSegments[0]} dir={animDir} animating={animSegments[0]} />
        </div>
        <div style={{ gridColumn: 3, gridRow: 1 }}>
          <DnsNode node={NODES[1]} state={nodeStates[1]} />
        </div>

        {/* Row 1: arrowV col derecha (1→2) */}
        <div style={{ gridColumn: 3, gridRow: 2, display: "flex", justifyContent: "center" }}>
          <ArrowV lit={litSegments[1]} dir={animDir} animating={animSegments[1]} />
        </div>

        {/* Row 2: node3, arrowH(2→3 reversed), node2 */}
        <div style={{ gridColumn: 1, gridRow: 3 }}>
          <DnsNode node={NODES[3]} state={nodeStates[3]} />
        </div>
        <div style={{ gridColumn: 2, gridRow: 3, display: "flex", alignItems: "center" }}>
          <ArrowH lit={litSegments[2]} dir={animDir} animating={animSegments[2]} reverse />
        </div>
        <div style={{ gridColumn: 3, gridRow: 3 }}>
          <DnsNode node={NODES[2]} state={nodeStates[2]} />
        </div>

        {/* Row 3: arrowV col izquierda (3→4) */}
        <div style={{ gridColumn: 1, gridRow: 4, display: "flex", justifyContent: "center" }}>
          <ArrowV lit={litSegments[3]} dir={animDir} animating={animSegments[3]} />
        </div>

        {/* Row 4: node4 */}
        <div style={{ gridColumn: 1, gridRow: 5 }}>
          <DnsNode node={NODES[4]} state={nodeStates[4]} />
        </div>
      </div>

      {/* Info box */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-700
        bg-neutral-50 dark:bg-neutral-900/60 p-3 min-h-[80px] mb-3">
        {stepInfo ? (
          <>
            <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mb-1">
              {stepInfo.step}
            </p>
            <p className="text-[13px] font-medium text-neutral-800 dark:text-neutral-100 mb-1">
              {stepInfo.title}
            </p>
            <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {stepInfo.desc}
            </p>
          </>
        ) : isFinished ? (
          <p className="text-[13px] font-medium text-neutral-800 dark:text-neutral-100">Consulta completada ✓</p>
        ) : (
          <>
            <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mb-1">Listo</p>
            <p className="text-[13px] font-medium text-neutral-800 dark:text-neutral-100 mb-1">Ingresa un dominio y presiona Resolver</p>
            <p className="text-[12px] text-neutral-500 dark:text-neutral-400">La consulta DNS recorrerá hasta 5 etapas para encontrar la IP.</p>
          </>
        )}
      </div>

      {/* Result */}
      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border
        border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-950/40
        text-xs mb-3 transition-opacity duration-500
        ${resolvedIP ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <span className="text-neutral-400 dark:text-neutral-500">Dirección IP:</span>
        <span className="font-mono font-medium text-green-700 dark:text-green-400 text-[13px]">
          {resolvedIP ?? "—"}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleNext}
          disabled={nextDisabled}
          className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700
            bg-white dark:bg-neutral-900 text-sm text-neutral-700 dark:text-neutral-200
            hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors
            disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
        >
          Siguiente →
        </button>
        <div className="flex-1 h-[3px] rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-400 dark:bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[11px] text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
          {Math.min(currentStep < 0 ? 0 : currentStep, STEPS.length)} / {STEPS.length}
        </span>
      </div>

      <style>{`
        @keyframes pkt-fwd {
          from { transform: translateY(-50%) translateX(0); opacity: 1; }
          to   { transform: translateY(-50%) translateX(28px); opacity: 0; }
        }
        @keyframes pkt-bwd {
          from { transform: translateY(-50%) translateX(28px); opacity: 1; }
          to   { transform: translateY(-50%) translateX(0); opacity: 0; }
        }
        @keyframes pkt-down {
          from { transform: translateX(-50%) translateY(0); opacity: 1; }
          to   { transform: translateX(-50%) translateY(24px); opacity: 0; }
        }
        @keyframes pkt-up {
          from { transform: translateX(-50%) translateY(24px); opacity: 1; }
          to   { transform: translateX(-50%) translateY(0); opacity: 0; }
        }
        .animate-pkt-fwd  { animation: pkt-fwd  0.45s ease forwards; }
        .animate-pkt-bwd  { animation: pkt-bwd  0.45s ease forwards; }
        .animate-pkt-down { animation: pkt-down 0.45s ease forwards; }
        .animate-pkt-up   { animation: pkt-up   0.45s ease forwards; }
      `}</style>
    </div>
  );
}

export default DNSLookup;