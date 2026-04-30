"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type GameState = "idle" | "running" | "done" | "dropped";
type HopPhase  = "idle" | "moving" | "arrived";

interface TrailPoint { x: number; y: number; }

// ─── Layout (viewBox 380 × 260) ───────────────────────────────────────────────

const ROUTERS = [
  { x: 30,  y: 130, label: "Origen",   sub: "Tu dispositivo" },
  { x: 120, y: 70,  label: "Router A", sub: "ISP local"      },
  { x: 200, y: 160, label: "Router B", sub: "Backbone"       },
  { x: 280, y: 80,  label: "Router C", sub: "CDN edge"       },
  { x: 355, y: 150, label: "Destino",  sub: "Servidor"       },
] as const;

const EDGES: [number, number][] = [[0,1],[1,2],[2,3],[3,4]];

const NODE_R    = 22;
const START_TTL = 64;
const HOP_MS    = 900;
const TRAIL_MAX = 8;
const TRAIL_MS  = 30;

const ACCENT = "#00FFBF";
const BLUE   = "#3A8DFF";

const HOP_MSGS = [
  "Saltando al siguiente router…",
  "Redirigiendo por backbone…",
  "Enrutando hacia destino…",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function easeIO(t: number) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

// ─── Component ────────────────────────────────────────────────────────────────

export function PacketJourney() {
  // Mutable animation state — no re-render on every frame
  const sim = useRef({
    state:      "idle" as GameState,
    hop:        0,
    ttl:        START_TTL,
    activeEdge: -1,
    arrivedAt:  -1,
    hopPhase:   "idle" as HopPhase,
    hopStart:   0,
    pktX:       ROUTERS[0].x as number,
    pktY:       ROUTERS[0].y as number,
    trail:      [] as TrailPoint[],
    lastTrail:  0,
    pulseT:     0,
    visible:    false,
  });

  const animRef   = useRef<number>(0);
  const pktRef    = useRef<SVGCircleElement>(null);
  const innerRef  = useRef<SVGCircleElement>(null);
  const glowRef   = useRef<SVGCircleElement>(null);
  const trailRef  = useRef<SVGGElement>(null);
  const edgeRefs  = useRef<(SVGLineElement | null)[]>([]);
  const nodeRefs  = useRef<(SVGCircleElement | null)[]>([]);
  const nodeRing  = useRef<(SVGCircleElement | null)[]>([]);

  // React state only for UI labels
  const [uiHop,   setUiHop]   = useState(0);
  const [uiTtl,   setUiTtl]   = useState(START_TTL);
  const [uiState, setUiState] = useState<GameState>("idle");
  const [msg,     setMsg]     = useState('Presiona "Enviar paquete" para comenzar');
  const [msgCls,  setMsgCls]  = useState("");

  const pushMsg = (text: string, cls = "") => { setMsg(text); setMsgCls(cls); };
  const syncUI  = () => {
    const s = sim.current;
    setUiHop(s.hop);
    setUiTtl(s.ttl);
    setUiState(s.state);
  };

  // ── Direct SVG DOM writes (no React re-render per frame) ──────────────────

  const updatePktPos = () => {
    const s = sim.current;
    pktRef.current?.setAttribute("cx",  String(s.pktX));
    pktRef.current?.setAttribute("cy",  String(s.pktY));
    innerRef.current?.setAttribute("cx", String(s.pktX));
    innerRef.current?.setAttribute("cy", String(s.pktY));
    glowRef.current?.setAttribute("cx",  String(s.pktX));
    glowRef.current?.setAttribute("cy",  String(s.pktY));

    const g = trailRef.current;
    if (!g) return;
    while (g.children.length > s.trail.length) g.removeChild(g.lastChild!);
    while (g.children.length < s.trail.length) {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      g.appendChild(c);
    }
    s.trail.forEach((pt, i) => {
      const c = g.children[i] as SVGCircleElement;
      const frac = i / TRAIL_MAX;
      c.setAttribute("cx",      String(pt.x));
      c.setAttribute("cy",      String(pt.y));
      c.setAttribute("r",       String(3 + frac * 2));
      c.setAttribute("fill",    ACCENT);
      c.setAttribute("opacity", String(frac * 0.3));
    });
  };

  const setEdgeActive = (idx: number, active: boolean) => {
    const el = edgeRefs.current[idx];
    if (!el) return;
    el.setAttribute("stroke",           active ? ACCENT : "rgba(180,180,220,0.15)");
    el.setAttribute("stroke-width",     active ? "1.5"  : "0.8");
    el.setAttribute("stroke-dasharray", active ? "0"    : "5 5");
  };

  const setNodeActive = (idx: number, active: boolean) => {
    const border = nodeRefs.current[idx];
    const ring   = nodeRing.current[idx];
    const isOrigin = idx === 0;
    const isDest   = idx === ROUTERS.length - 1;
    const baseStroke = isOrigin ? BLUE : isDest ? ACCENT : "rgba(100,100,160,0.4)";
    if (border) border.setAttribute("stroke", active ? ACCENT : baseStroke);
    if (ring)   ring.setAttribute("opacity", active ? "1" : "0");
  };

  const setPktVisible = (v: boolean) => {
    const val = v ? "1" : "0";
    pktRef.current?.setAttribute("opacity",   val);
    glowRef.current?.setAttribute("opacity",  val);
    innerRef.current?.setAttribute("opacity", val);
    trailRef.current?.setAttribute("opacity", val);
  };

  // ── Pulse (direct DOM) ────────────────────────────────────────────────────

  const updatePulse = () => {
    const s = sim.current;
    const p = 0.5 + 0.5 * Math.sin(s.pulseT * 3);
    ROUTERS.forEach((_, i) => {
      const ring = nodeRing.current[i];
      if (!ring) return;
      if (s.arrivedAt === i && s.state !== "idle") {
        ring.setAttribute("r",       String(NODE_R + 6 + p * 4));
        ring.setAttribute("opacity", String(0.12 + p * 0.2));
      }
    });
    if (glowRef.current && s.visible) {
      glowRef.current.setAttribute("r",       String(10 + p * 2));
      glowRef.current.setAttribute("opacity", String(0.25 + p * 0.12));
    }
  };

  // ── Animation loop ────────────────────────────────────────────────────────

  const loop = useCallback((now: number) => {
    const s = sim.current;
    s.pulseT = now / 1000;
    updatePulse();

    if (s.hopPhase === "moving") {
      const elapsed = now - s.hopStart;
      const t = easeIO(Math.min(elapsed / HOP_MS, 1));
      const [fromIdx, toIdx] = EDGES[s.activeEdge];
      s.pktX = lerp(ROUTERS[fromIdx].x, ROUTERS[toIdx].x, t);
      s.pktY = lerp(ROUTERS[fromIdx].y, ROUTERS[toIdx].y, t);

      if (now - s.lastTrail > TRAIL_MS) {
        s.trail.push({ x: s.pktX, y: s.pktY });
        if (s.trail.length > TRAIL_MAX) s.trail.shift();
        s.lastTrail = now;
      }
      updatePktPos();

      if (t >= 1) {
        s.hop++;
        s.ttl       = Math.max(0, s.ttl - Math.floor(8 + Math.random() * 6));
        s.arrivedAt = EDGES[s.activeEdge][1];
        s.hopPhase  = "arrived";
        s.hopStart  = now;
        s.trail     = [];
        syncUI();
        setEdgeActive(s.activeEdge, false);

        if (s.arrivedAt === ROUTERS.length - 1) {
          setNodeActive(s.arrivedAt, true);
          pushMsg(`¡Paquete entregado con éxito en ${s.hop} saltos!`, "text-[#00FFBF]");
          s.state = "done";
          setUiState("done");
          setPktVisible(false);
        } else if (s.ttl <= 0) {
          pushMsg("TTL agotado — el paquete fue descartado por el router.", "text-[#FF5C5C]");
          s.state = "dropped";
          setUiState("dropped");
          setPktVisible(false);
          ROUTERS.forEach((_, i) => setNodeActive(i, false));
        } else {
          pushMsg(HOP_MSGS[s.hop % HOP_MSGS.length]);
          setNodeActive(s.arrivedAt, true);
        }
      }
    } else if (s.hopPhase === "arrived" && s.state === "running") {
      if (now - s.hopStart > 500) {
        const next = s.activeEdge + 1;
        if (next < EDGES.length) {
          setNodeActive(EDGES[next][0], false);
          setEdgeActive(next, true);
          s.activeEdge = next;
          s.hopPhase   = "moving";
          s.hopStart   = now;
        }
      }
    }

    animRef.current = requestAnimationFrame(loop);
  }, []);

  // ── Controls ──────────────────────────────────────────────────────────────

  const handlePlay = useCallback(() => {
    const s = sim.current;
    if (s.state !== "idle") return;
    EDGES.forEach((_, i) => setEdgeActive(i, false));
    ROUTERS.forEach((_, i) => setNodeActive(i, false));

    s.state      = "running";
    s.hop        = 0;
    s.ttl        = START_TTL;
    s.arrivedAt  = 0;
    s.activeEdge = 0;
    s.hopPhase   = "moving";
    s.hopStart   = performance.now() + 600;
    s.pktX       = ROUTERS[0].x;
    s.pktY       = ROUTERS[0].y;
    s.trail      = [];
    s.visible    = true;

    syncUI();
    setEdgeActive(0, true);
    setNodeActive(0, true);
    setPktVisible(true);
    updatePktPos();
    pushMsg("Fragmentando mensaje y enviando primer paquete…");

    cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(loop);
  }, [loop]);

  const handleReset = useCallback(() => {
    cancelAnimationFrame(animRef.current);
    const s     = sim.current;
    s.state     = "idle";
    s.hop       = 0;
    s.ttl       = START_TTL;
    s.arrivedAt = -1;
    s.activeEdge = -1;
    s.hopPhase  = "idle";
    s.trail     = [];
    s.visible   = false;

    EDGES.forEach((_, i) => setEdgeActive(i, false));
    ROUTERS.forEach((_, i) => setNodeActive(i, false));
    setPktVisible(false);
    if (trailRef.current) trailRef.current.innerHTML = "";
    syncUI();
    setUiState("idle");
    pushMsg('Presiona "Enviar paquete" para comenzar');
  }, []);

  useEffect(() => {
    EDGES.forEach((_, i) => setEdgeActive(i, false));
    setPktVisible(false);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // ── Render ────────────────────────────────────────────────────────────────

  const isRunning = uiState === "running";
  const isDone    = uiState === "done" || uiState === "dropped";
  const ttlColor  = uiTtl <= 10 ? "text-[#FF5C5C]" : "text-[#00FFBF]";

  const STATE_LABELS: Record<GameState, string> = {
    idle: "En origen", running: "En tránsito", done: "Entregado", dropped: "Descartado",
  };

  return (
    <div className="w-full pb-6">
      {/* SVG scene */}
      <svg
        viewBox="0 0 380 260"
        width="100%"
        className="block"
        style={{ height: 260 }}
        aria-label="Visualización del viaje de un paquete de red entre routers"
      >
        <defs>
          <marker id="pj-arrow" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>

        {/* Edges */}
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            ref={el => { edgeRefs.current[i] = el; }}
            x1={ROUTERS[a].x} y1={ROUTERS[a].y}
            x2={ROUTERS[b].x} y2={ROUTERS[b].y}
            stroke="rgba(180,180,220,0.15)"
            strokeWidth="0.8"
            strokeDasharray="5 5"
          />
        ))}

        {/* Trail group */}
        <g ref={trailRef} opacity="0" />

        {/* Packet glow (behind body) */}
        <circle ref={glowRef} r="10" fill={ACCENT} opacity="0" />

        {/* Packet body */}
        <circle ref={pktRef} r="8" fill={ACCENT} opacity="0" />

        {/* Packet inner dot */}
        <circle ref={innerRef} r="3" fill="#0a0a0f" opacity="0" />

        {/* Nodes */}
        {ROUTERS.map((r, i) => {
          const isOrigin = i === 0;
          const isDest   = i === ROUTERS.length - 1;
          const baseStroke = isOrigin ? BLUE : isDest ? ACCENT : "rgba(100,100,160,0.35)";
          const fill       = isOrigin ? "#0d1f2e" : isDest ? "#091a12" : "#12121e";
          return (
            <g key={i}>
              <circle
                ref={el => { nodeRing.current[i] = el; }}
                cx={r.x} cy={r.y} r={NODE_R + 6}
                fill="none" stroke={ACCENT} strokeWidth="1.5" opacity="0"
              />
              <circle cx={r.x} cy={r.y} r={NODE_R} fill={fill} />
              <circle
                ref={el => { nodeRefs.current[i] = el; }}
                cx={r.x} cy={r.y} r={NODE_R}
                fill="none" stroke={baseStroke} strokeWidth="0.8"
              />
              <text
                x={r.x} y={r.y}
                textAnchor="middle" dominantBaseline="central"
                fontSize="14"
                fill={isOrigin ? BLUE : isDest ? ACCENT : "rgba(160,160,200,0.6)"}
              >⬡</text>
              <text
                x={r.x} y={r.y + NODE_R + 14}
                textAnchor="middle" dominantBaseline="hanging"
                fontSize="14" fontWeight="500" fill="#c0c0d0"
              >{r.label}</text>
              <text
                x={r.x} y={r.y + NODE_R + 32}
                textAnchor="middle" dominantBaseline="hanging"
                fontSize="12" fill="rgba(140,140,170,0.6)"
              >{r.sub}</text>
            </g>
          );
        })}
      </svg>

      {/* Stats */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {([
          { label: "Salto",  value: String(uiHop),         cls: "text-[#e0e0f0]" },
          { label: "TTL",    value: String(uiTtl),          cls: ttlColor },
          { label: "Estado", value: STATE_LABELS[uiState],  cls: "text-[#e0e0f0] text-xs pt-1" },
        ] as const).map(({ label, value, cls }) => (
          <div key={label}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center">
            <p className="text-[11px] uppercase tracking-wider text-[#9ca3af]">{label}</p>
            <p className={`mt-0.5 text-xl font-medium leading-none ${cls}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-3 flex gap-2">
        <button
          onClick={handlePlay}
          disabled={isRunning || isDone}
          className="flex-1 rounded-lg border border-white/20 bg-transparent py-2.5 text-sm text-[#e0e0f0] transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 active:scale-[0.97]"
        >
          Enviar paquete
        </button>
        <button
          onClick={handleReset}
          disabled={uiState === "idle"}
          className="flex-1 rounded-lg border border-white/20 bg-transparent py-2.5 text-sm text-[#e0e0f0] transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 active:scale-[0.97]"
        >
          Reiniciar
        </button>
      </div>

      {/* Message */}
      <p className={`mt-3 text-center text-sm leading-snug transition-colors ${msgCls || "text-[#9ca3af]"}`}>
        {msg}
      </p>
    </div>
  );
}