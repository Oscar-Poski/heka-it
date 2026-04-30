"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type SimState = "idle" | "running" | "done";

interface PhaseConfig {
  id:        string;
  duration:  number;
  message:   string;
  msgCls:    string;
  edge:      string;
  activeNodes: string[];
  pktFrom?:  { x: number; y: number };
  pktTo?:    { x: number; y: number };
  pktColor?: string;
  midEdge?:  string;
  midAt?:    number; // 0-1 fraction of duration where edge changes
  midFrom?:  { x: number; y: number };
  showNatOut?:  boolean;
  showNatIn?:   boolean;
  pktStatic?:   boolean; // packet stays put (NAT phases)
  showDnsArrow?: boolean;
  showDnsLabel?: boolean;
}

// ─── Layout ───────────────────────────────────────────────────────────────────

const W = 380;
const H = 310;

const NODE = {
  device:   { x: 44,  y: 195, label: "Tu dispositivo", sub: "192.168.1.42"     },
  router:   { x: 160, y: 195, label: "Router",          sub: "NAT · IP pública" },
  dns:      { x: 102, y: 72,  label: "DNS",             sub: "" },
  internet: { x: 262, y: 195, label: "Internet",        sub: "backbone"          },
  server:   { x: 348, y: 195, label: "Google",          sub: "142.250.80.46"     },
} as const;

type NodeKey = keyof typeof NODE;

const NODE_R   = 26;
const TRAIL_MAX = 8;
const TRAIL_MS  = 30;

const ACCENT = "#00FFBF";
const BLUE   = "#3A8DFF";
const AMBER  = "#FFBF00";

// ─── Edges (static lines) ─────────────────────────────────────────────────────

const STATIC_EDGES: { id: string; x1: number; y1: number; x2: number; y2: number }[] = [
  { id: "dev-router",      x1: NODE.device.x,   y1: NODE.device.y,   x2: NODE.router.x,   y2: NODE.router.y   },
  { id: "router-dns",      x1: NODE.router.x,   y1: NODE.router.y,   x2: NODE.dns.x,      y2: NODE.dns.y      },
  { id: "router-internet", x1: NODE.router.x,   y1: NODE.router.y,   x2: NODE.internet.x, y2: NODE.internet.y },
  { id: "internet-server", x1: NODE.internet.x, y1: NODE.internet.y, x2: NODE.server.x,   y2: NODE.server.y   },
];

// ─── Phase timeline ───────────────────────────────────────────────────────────

const PHASES: PhaseConfig[] = [
  {
    id: "dns-query",
    duration: 950,
    message: "Tu dispositivo pregunta al DNS: ¿cuál es la IP de google.com?",
    msgCls: "",
    edge: "router-dns",
    activeNodes: ["device", "dns"],
    pktFrom:  { x: NODE.router.x, y: NODE.router.y },
    pktTo:    { x: NODE.dns.x,    y: NODE.dns.y    },
    pktColor: BLUE,
  },
  {
    id: "dns-response",
    duration: 950,
    message: "DNS responde: google.com → 142.250.80.46",
    msgCls: "text-[#3A8DFF]",
    edge: "router-dns",
    activeNodes: ["device", "dns"],
    pktFrom:  { x: NODE.dns.x,    y: NODE.dns.y    },
    pktTo:    { x: NODE.router.x, y: NODE.router.y },
    pktColor: BLUE,
    showDnsArrow: true,
    showDnsLabel: true,
  },
  {
    id: "packet-out",
    duration: 950,
    message: "Se construye el paquete con IP destino 142.250.80.46",
    msgCls: "",
    edge: "dev-router",
    activeNodes: ["device", "router"],
    pktFrom:  { x: NODE.device.x, y: NODE.device.y },
    pktTo:    { x: NODE.router.x, y: NODE.router.y },
    pktColor: ACCENT,
    showDnsLabel: true,
  },
  {
    id: "nat-out",
    duration: 1000,
    message: "El router hace NAT: reemplaza tu IP privada por la IP pública",
    msgCls: "",
    edge: "",
    activeNodes: ["router"],
    pktStatic: true,
    pktColor: AMBER,
    showNatOut: true,
  },
  {
    id: "internet",
    duration: 1600,
    message: "El paquete viaja por internet hasta el servidor de Google",
    msgCls: "",
    edge: "router-internet",
    midEdge: "internet-server",
    midAt: 0.5,
    midFrom: { x: NODE.internet.x, y: NODE.internet.y },
    activeNodes: ["router", "internet", "server"],
    pktFrom:  { x: NODE.router.x,   y: NODE.router.y   },
    pktTo:    { x: NODE.server.x,   y: NODE.server.y   },
    pktColor: ACCENT,
    showNatOut: true,
  },
  {
    id: "server-response",
    duration: 1600,
    message: "Google responde a tu IP pública",
    msgCls: "",
    edge: "internet-server",
    midEdge: "router-internet",
    midAt: 0.5,
    midFrom: { x: NODE.internet.x, y: NODE.internet.y },
    activeNodes: ["server", "internet", "router"],
    pktFrom:  { x: NODE.server.x,   y: NODE.server.y   },
    pktTo:    { x: NODE.router.x,   y: NODE.router.y   },
    pktColor: AMBER,
  },
  {
    id: "nat-in",
    duration: 1000,
    message: "El router revierte el NAT y entrega el paquete a 192.168.1.42",
    msgCls: "",
    edge: "",
    activeNodes: ["router"],
    pktStatic: true,
    pktColor: ACCENT,
    showNatIn: true,
  },
  {
    id: "delivered",
    duration: 950,
    message: "¡Respuesta entregada! Tu dispositivo recibe la página.",
    msgCls: "text-[#00FFBF]",
    edge: "dev-router",
    activeNodes: ["device", "router"],
    pktFrom:  { x: NODE.router.x, y: NODE.router.y },
    pktTo:    { x: NODE.device.x, y: NODE.device.y },
    pktColor: ACCENT,
  },
  {
    id: "done",
    duration: 0,
    message: "Presiona Reiniciar para volver a ver el recorrido completo.",
    msgCls: "",
    edge: "",
    activeNodes: ["device"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function easeIO(t: number) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
function clamp01(t: number) { return Math.min(1, Math.max(0, t)); }

// ─── Component ────────────────────────────────────────────────────────────────

export function IPv4Animation() {
  // ── Mutable sim state ────────────────────────────────────────────────────
  const sim = useRef({
    simState:    "idle" as SimState,
    phaseIdx:    -1,
    phaseStart:  0,
    pulseT:      0,
    pktX:        NODE.device.x as number,
    pktY:        NODE.device.y as number,
    pktVisible:  false,
    trail:       [] as { x: number; y: number }[],
    lastTrail:   0,
    // Per-phase settled flags (carry over across phases)
    dnsArrow:    false,
    dnsLabel:    false,
    natOut:      false,
    natIn:       false,
  });

  const animRef = useRef<number>(0);

  // SVG element refs — written directly, never via React state
  const pktBodyRef  = useRef<SVGCircleElement>(null);
  const pktGlowRef  = useRef<SVGCircleElement>(null);
  const pktDotRef   = useRef<SVGCircleElement>(null);
  const trailGRef   = useRef<SVGGElement>(null);

  const edgeRefs    = useRef<Record<string, SVGLineElement | null>>({});
  const nodeRingRef = useRef<Record<string, SVGCircleElement | null>>({});
  const nodeBorderRef = useRef<Record<string, SVGCircleElement | null>>({});

  const natLabelRef = useRef<SVGTextElement>(null);
  const natSubRef   = useRef<SVGTextElement>(null);
  const dnsArrowRef = useRef<SVGLineElement>(null);
  const dnsLabelRef = useRef<SVGTextElement>(null);

  // React state: only UI text labels
  const [msg,      setMsg]      = useState('Presiona "Iniciar" para ver cómo viaja un paquete');
  const [msgCls,   setMsgCls]   = useState("");
  const [simState, setSimState] = useState<SimState>("idle");

  // ── DOM helpers ──────────────────────────────────────────────────────────

  const setPktPos = (x: number, y: number) => {
    [pktBodyRef, pktGlowRef, pktDotRef].forEach(r => {
      r.current?.setAttribute("cx", String(x));
      r.current?.setAttribute("cy", String(y));
    });
  };

  const setPktColor = (color: string) => {
    pktBodyRef.current?.setAttribute("fill", color);
    pktGlowRef.current?.setAttribute("fill", color);
  };

  const setPktVisible = (v: boolean) => {
    const val = v ? "1" : "0";
    pktBodyRef.current?.setAttribute("opacity",  val);
    pktGlowRef.current?.setAttribute("opacity",  "0"); // glow managed by pulse
    pktDotRef.current?.setAttribute("opacity",   val);
    trailGRef.current?.setAttribute("opacity",   val);
    sim.current.pktVisible = v;
  };

  const setEdgeActive = (id: string, active: boolean) => {
    const el = edgeRefs.current[id];
    if (!el) return;
    el.setAttribute("stroke",           active ? ACCENT           : "rgba(180,180,220,0.15)");
    el.setAttribute("stroke-width",     active ? "1.5"            : "0.8");
    el.setAttribute("stroke-dasharray", active ? "0"              : "5 5");
  };

  const clearAllEdges = () => STATIC_EDGES.forEach(e => setEdgeActive(e.id, false));

  const setNodeActive = (key: string, active: boolean) => {
    const nk = key as NodeKey;
    const accent = nk === "dns" ? BLUE : nk === "router" ? AMBER : ACCENT;
    nodeBorderRef.current[key]?.setAttribute("stroke", active ? accent : "rgba(100,100,160,0.35)");
    nodeRingRef.current[key]?.setAttribute("opacity",  active ? "1" : "0");
  };

  const clearAllNodes = () => Object.keys(NODE).forEach(k => setNodeActive(k, false));

  const updateTrail = () => {
    const s = sim.current;
    const g = trailGRef.current;
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
      c.setAttribute("r",       String(2 + frac * 2.5));
      c.setAttribute("fill",    sim.current.pktVisible ? (pktBodyRef.current?.getAttribute("fill") ?? ACCENT) : ACCENT);
      c.setAttribute("opacity", String(frac * 0.28));
    });
  };

  // ── Pulse ────────────────────────────────────────────────────────────────

  const updatePulse = () => {
    const s = sim.current;
    const p = 0.5 + 0.5 * Math.sin(s.pulseT * 3.2);
    Object.keys(NODE).forEach(key => {
      const ring = nodeRingRef.current[key];
      if (!ring || ring.getAttribute("opacity") === "0") return;
      ring.setAttribute("r", String(NODE_R + 5 + p * 4));
      ring.setAttribute("opacity", String(0.12 + p * 0.18));
    });
    if (s.pktVisible && pktGlowRef.current) {
      pktGlowRef.current.setAttribute("r",       String(10 + p * 2.5));
      pktGlowRef.current.setAttribute("opacity", String(0.22 + p * 0.12));
    }
  };

  // ── Apply phase state ────────────────────────────────────────────────────

  const applyPhase = (cfg: PhaseConfig, t: number) => {
    const s = sim.current;

    // Active nodes
    clearAllNodes();
    cfg.activeNodes.forEach(k => setNodeActive(k, true));

    // Active edge (with mid-switch support)
    clearAllEdges();
    if (cfg.edge) {
      if (cfg.midEdge && cfg.midAt && t >= cfg.midAt) {
        setEdgeActive(cfg.midEdge, true);
      } else {
        setEdgeActive(cfg.edge, true);
      }
    }

    // Packet position
    if (cfg.pktStatic) {
      // stays at last position (router)
      if (cfg.pktColor) setPktColor(cfg.pktColor);
    } else if (cfg.pktFrom && cfg.pktTo) {
      let px: number, py: number;
      if (cfg.midEdge && cfg.midAt && cfg.midFrom) {
        if (t < cfg.midAt) {
          const t2 = easeIO(clamp01(t / cfg.midAt));
          px = lerp(cfg.pktFrom.x, cfg.midFrom.x, t2);
          py = lerp(cfg.pktFrom.y, cfg.midFrom.y, t2);
        } else {
          const t2 = easeIO(clamp01((t - cfg.midAt) / (1 - cfg.midAt)));
          px = lerp(cfg.midFrom.x, cfg.pktTo.x, t2);
          py = lerp(cfg.midFrom.y, cfg.pktTo.y, t2);
        }
      } else {
        px = lerp(cfg.pktFrom.x, cfg.pktTo.x, easeIO(t));
        py = lerp(cfg.pktFrom.y, cfg.pktTo.y, easeIO(t));
      }
      s.pktX = px; s.pktY = py;
      if (cfg.pktColor) setPktColor(cfg.pktColor);
      setPktPos(px, py);
    }

    // Settled flags
    if (cfg.showDnsArrow)  s.dnsArrow = true;
    if (cfg.showDnsLabel)  s.dnsLabel = true;
    if (cfg.showNatOut)    { s.natOut = true; s.natIn = false; }
    if (cfg.showNatIn)     { s.natIn  = true; s.natOut = false; }
    if (cfg.id === "delivered") { s.natIn = false; }

    // Apply settled flags to DOM
    dnsArrowRef.current?.setAttribute("opacity", s.dnsArrow ? "1" : "0");
    dnsLabelRef.current?.setAttribute("opacity", s.dnsLabel ? "1" : "0");
    if (natLabelRef.current && natSubRef.current) {
      if (s.natOut) {
        natLabelRef.current.setAttribute("opacity", "1");
        natLabelRef.current.textContent = "IP pública";
        natSubRef.current.setAttribute("opacity", "1");
        natSubRef.current.textContent = "201.85.42.9";
      } else if (s.natIn) {
        natLabelRef.current.setAttribute("opacity", "1");
        natLabelRef.current.textContent = "Revierte NAT";
        natSubRef.current.setAttribute("opacity", "1");
        natSubRef.current.textContent = "→ 192.168.1.42";
      } else {
        natLabelRef.current.setAttribute("opacity", "0");
        natSubRef.current.setAttribute("opacity",   "0");
      }
    }
  };

  // ── Animation loop ────────────────────────────────────────────────────────

  const loop = useCallback((now: number) => {
    const s = sim.current;
    s.pulseT = now / 1000;
    updatePulse();

    if (s.phaseIdx >= 0 && s.phaseIdx < PHASES.length) {
      const cfg = PHASES[s.phaseIdx];
      if (cfg.duration === 0) {
        // terminal phase
        animRef.current = requestAnimationFrame(loop);
        return;
      }
      const elapsed = now - s.phaseStart;
      const t = clamp01(elapsed / cfg.duration);

      // Trail
      if (!cfg.pktStatic && cfg.pktFrom && now - s.lastTrail > TRAIL_MS) {
        s.trail.push({ x: s.pktX, y: s.pktY });
        if (s.trail.length > TRAIL_MAX) s.trail.shift();
        s.lastTrail = now;
        updateTrail();
      }

      applyPhase(cfg, t);

      // Advance phase
      if (t >= 1) {
        s.phaseIdx++;
        s.phaseStart = now;
        s.trail = [];
        if (trailGRef.current) trailGRef.current.innerHTML = "";

        if (s.phaseIdx < PHASES.length) {
          const next = PHASES[s.phaseIdx];
          setMsg(next.message);
          setMsgCls(next.msgCls);
          if (next.id === "done") {
            setPktVisible(false);
            clearAllEdges();
            setSimState("done");
            s.simState = "done";
          }
        }
      }
    }

    animRef.current = requestAnimationFrame(loop);
  }, []);

  // ── Controls ──────────────────────────────────────────────────────────────

  const handleStart = useCallback(() => {
    const s = sim.current;
    // Reset flags
    s.phaseIdx   = 0;
    s.phaseStart = performance.now();
    s.trail      = [];
    s.dnsArrow   = false;
    s.dnsLabel   = false;
    s.natOut     = false;
    s.natIn      = false;
    s.pktX       = NODE.device.x;
    s.pktY       = NODE.device.y;
    s.simState   = "running";

    clearAllEdges();
    clearAllNodes();
    setPktColor(BLUE);
    setPktPos(NODE.device.x, NODE.device.y);
    setPktVisible(true);
    dnsArrowRef.current?.setAttribute("opacity", "0");
    dnsLabelRef.current?.setAttribute("opacity", "0");
    natLabelRef.current?.setAttribute("opacity", "0");
    natSubRef.current?.setAttribute("opacity",   "0");
    if (trailGRef.current) trailGRef.current.innerHTML = "";

    setMsg(PHASES[0].message);
    setMsgCls(PHASES[0].msgCls);
    setSimState("running");

    cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(loop);
  }, [loop]);

  const handleReset = useCallback(() => {
    cancelAnimationFrame(animRef.current);
    const s    = sim.current;
    s.phaseIdx = -1;
    s.simState = "idle";
    s.trail    = [];
    s.dnsArrow = false;
    s.dnsLabel = false;
    s.natOut   = false;
    s.natIn    = false;

    clearAllEdges();
    clearAllNodes();
    setPktVisible(false);
    dnsArrowRef.current?.setAttribute("opacity", "0");
    dnsLabelRef.current?.setAttribute("opacity", "0");
    natLabelRef.current?.setAttribute("opacity", "0");
    natSubRef.current?.setAttribute("opacity",   "0");
    if (trailGRef.current) trailGRef.current.innerHTML = "";

    setMsg('Presiona "Iniciar" para ver cómo viaja un paquete');
    setMsgCls("");
    setSimState("idle");
  }, []);

  useEffect(() => {
    clearAllEdges();
    setPktVisible(false);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // ── Render ────────────────────────────────────────────────────────────────

  const isRunning = simState === "running";
  const isDone    = simState === "done";

  return (
    <div className="w-full pb-6">
      {/* Legend */}
      <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1 px-1">
        {[
          { color: BLUE,   label: "Consulta DNS"     },
          { color: ACCENT, label: "Paquete de datos"  },
          { color: AMBER,  label: "Respuesta / NAT"   },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: color }} />
            <span className="text-[10px] text-[#9ca3af]">{label}</span>
          </div>
        ))}
      </div>

      {/* SVG scene */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        className="block"
        style={{ height: H }}
        aria-label="Visualización del recorrido de un paquete IPv4 con DNS y NAT"
      >
        {/* Private zone box */}
        <rect
          x="2" y="138" width="208" height="130"
          rx="8" fill="none"
          stroke={BLUE} strokeWidth="2" strokeDasharray="4 4"
          opacity="0.2"
        />
        <text x="14" y="155" fontSize="12" fill={BLUE} opacity="0.5">Red privada</text>

        {/* Static edges */}
        {STATIC_EDGES.map(e => (
          <line
            key={e.id}
            ref={el => { edgeRefs.current[e.id] = el; }}
            x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke="rgba(180,180,220,0.15)"
            strokeWidth="0.8"
            strokeDasharray="5 5"
          />
        ))}

        {/* DNS IP label */}
        <text
          ref={dnsLabelRef}
          x={(NODE.router.x + NODE.dns.x) / 2 }
          y={(NODE.router.y + NODE.dns.y) / 2 }
          fontSize="12" fill={BLUE} opacity="0" textAnchor="middle"
        >
          142.250.80.46
        </text>

        {/* Trail group */}
        <g ref={trailGRef} opacity="0" />

        {/* Packet glow */}
        <circle ref={pktGlowRef} r="10" fill={BLUE} opacity="0" />

        {/* Packet body */}
        <circle ref={pktBodyRef} r="8" fill={BLUE} opacity="0" />

        {/* Packet inner dot */}
        <circle ref={pktDotRef} r="3" fill="#0a0a0f" opacity="0" />

        {/* Nodes */}
        {(Object.entries(NODE) as [NodeKey, typeof NODE[NodeKey]][]).map(([key, n]) => {
          const accent =
            key === "dns"    ? BLUE  :
            key === "router" ? AMBER :
            ACCENT;
          const fill =
            key === "device" ? "#0d1f2e" :
            key === "server" ? "#091a12" :
            key === "router" ? "#1a1200" :
            key === "dns"    ? "#001020" :
            "#12121e";
          return (
            <g key={key}>
              <circle
                ref={el => { nodeRingRef.current[key] = el; }}
                cx={n.x} cy={n.y} r={NODE_R + 5}
                fill="none" stroke={accent} strokeWidth="1.5" opacity="0"
              />
              <circle cx={n.x} cy={n.y} r={NODE_R} fill={fill} />
              <circle
                ref={el => { nodeBorderRef.current[key] = el; }}
                cx={n.x} cy={n.y} r={NODE_R}
                fill="none" stroke="rgba(100,100,160,0.35)" strokeWidth="0.8"
              />
              <text
                x={n.x} y={n.y}
                textAnchor="middle" dominantBaseline="central"
                fontSize="14" fill={accent} opacity="0.7"
              >⬡</text>
              <text
                x={n.x + 10} y={n.y + NODE_R + 12}
                textAnchor="middle" dominantBaseline="hanging"
                fontSize="14" fontWeight="500" fill="#c0c0d0"
              >{n.label}</text>
              <text
                x={n.x} y={n.y + NODE_R + 28}
                textAnchor="middle" dominantBaseline="hanging"
                fontSize="12" fill="rgba(140,140,170,0.6)"
              >{n.sub}</text>
            </g>
          );
        })}

        {/* NAT label on router */}
        <text
          ref={natLabelRef}
          x={NODE.router.x} y={NODE.router.y - 6}
          textAnchor="middle" dominantBaseline="central"
          fontSize="9" fontWeight="500" fill={AMBER} opacity="0"
        />
        <text
          ref={natSubRef}
          x={NODE.router.x} y={NODE.router.y + 8}
          textAnchor="middle" dominantBaseline="central"
          fontSize="9" fill={AMBER} opacity="0"
        />

        <defs>
          <marker id="ipv4-arrow-blue" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke={BLUE}
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>
      </svg>

      {/* Controls */}
      <div className="mt-3 flex gap-2">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="flex-1 rounded-lg border border-white/20 bg-transparent py-2.5 text-sm text-[#e0e0f0] transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 active:scale-[0.97]"
        >
          {isDone ? "Ver de nuevo" : "Iniciar"}
        </button>
        <button
          onClick={handleReset}
          disabled={simState === "idle"}
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