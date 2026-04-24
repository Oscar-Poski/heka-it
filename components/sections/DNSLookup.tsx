"use client";

import { useState, useEffect, useRef } from "react";

const ACCENT = "#00FFBF";
const ACCENT_DIM = "#00FFBF22";
const DARK = "#0a0a0f";
const SURFACE = "#13131e";
const BORDER = "#2a2a3a";
const TEXT_MUTED = "#888";
const TEXT_DIM = "#444";

const NODES = [
  { x: 70,  y: 120, label: "Tu PC",         sub: "pregunta",    role: "pc"       },
  { x: 230, y: 120, label: "Resolver",       sub: "tu router",   role: "resolver" },
  { x: 390, y: 120, label: "DNS Raíz",       sub: "sabe todo",   role: "root"     },
  { x: 550, y: 120, label: "DNS .com",       sub: "sabe .com",   role: "tld"      },
  { x: 390, y: 240, label: "DNS Google",     sub: "responde",    role: "auth"     },
];

const STEPS = [
  {
    from: 0, to: 1, dir: "fwd",
    label: "Tu PC → Resolver",
    msg: `Tu PC no sabe la IP de google.com. Le pregunta al resolver (normalmente tu router o el de tu proveedor de internet).`,
    packet: "¿google.com?",
  },
  {
    from: 1, to: 2, dir: "fwd",
    label: "Resolver → DNS Raíz",
    msg: `El resolver tampoco sabe. Pregunta al servidor raíz, que conoce quién maneja cada extensión (.com, .org, .mx…).`,
    packet: "¿google.com?",
  },
  {
    from: 2, to: 1, dir: "back",
    label: "DNS Raíz → Resolver",
    msg: `El servidor raíz responde: "Yo no sé, pero el servidor DNS de .com sí sabe. Ve con él."`,
    packet: "→ DNS .com",
  },
  {
    from: 1, to: 3, dir: "fwd",
    label: "Resolver → DNS .com",
    msg: `El resolver ahora pregunta al servidor de .com. Ese servidor conoce todos los dominios .com registrados.`,
    packet: "¿google.com?",
  },
  {
    from: 3, to: 1, dir: "back",
    label: "DNS .com → Resolver",
    msg: `El servidor .com responde: "Yo tampoco tengo la IP exacta, pero el DNS oficial de Google sí. Ve con él."`,
    packet: "→ DNS Google",
  },
  {
    from: 1, to: 4, dir: "fwd",
    label: "Resolver → DNS Google",
    msg: `El resolver pregunta al servidor oficial de Google. ¡Este sí tiene la respuesta definitiva!`,
    packet: "¿google.com?",
  },
  {
    from: 4, to: 1, dir: "back",
    label: "DNS Google → Resolver",
    msg: `El DNS de Google responde con la IP: 142.250.80.46. El resolver la guarda en caché para no preguntar otra vez.`,
    packet: "142.250.80.46",
  },
  {
    from: 1, to: 0, dir: "back",
    label: "Resolver → Tu PC",
    msg: `¡Listo! El resolver le entrega la IP a tu PC. Ahora puede conectarse directamente a Google.`,
    packet: "142.250.80.46",
    final: true,
  },
];

const ROLE_COLORS: Record<string, { fill: string; stroke: string; text: string }> = {
  pc:       { fill: "#0d1f1a", stroke: ACCENT,    text: ACCENT },
  resolver: { fill: "#141428", stroke: "#7f77dd",  text: "#afa9ec" },
  root:     { fill: "#1a1410", stroke: "#ef9f27",  text: "#fac775" },
  tld:      { fill: "#1a1410", stroke: "#ef9f27",  text: "#fac775" },
  auth:     { fill: "#0d1a0d", stroke: "#639922",  text: "#97c459" },
};

function NodeIcon({ role, x, y }: { role: string; x: number; y: number }) {
  const s = SURFACE;
  const b = BORDER;
  if (role === "pc") return (
    <g>
      <rect x={x-16} y={y-14} width={32} height={22} rx={3} fill={s} stroke={b} strokeWidth={1}/>
      <rect x={x-11} y={y-11} width={22} height={14} rx={1} fill={DARK}/>
      {[0,4,8].map((dy,i) => <line key={i} x1={x-8} y1={y-10+dy} x2={x+(i===1?2:6)} y2={y-10+dy} stroke={TEXT_DIM} strokeWidth={0.8}/>)}
      <rect x={x-7} y={y+8} width={14} height={2.5} rx={1} fill={b}/>
      <rect x={x-12} y={y+10} width={24} height={2} rx={1} fill={b}/>
    </g>
  );
  if (role === "resolver") return (
    <g>
      <rect x={x-16} y={y-10} width={32} height={20} rx={4} fill={s} stroke={b} strokeWidth={1}/>
      {[-7,0,7].map((dx,i) => <circle key={i} cx={x+dx} cy={y} r={2} fill={TEXT_DIM}/>)}
      <rect x={x-12} y={y+6} width={24} height={3} rx={1} fill={b}/>
    </g>
  );
  if (role === "root" || role === "tld") return (
    <g>
      <circle cx={x} cy={y} r={14} fill={s} stroke={b} strokeWidth={1}/>
      {[[-6,-6],[0,-8],[6,-6],[8,0],[6,6],[0,8],[-6,6],[-8,0]].map(([dx,dy],i) =>
        <circle key={i} cx={x+dx} cy={y+dy} r={1.2} fill={TEXT_DIM}/>
      )}
      <circle cx={x} cy={y} r={4} fill="none" stroke={b} strokeWidth={0.8}/>
    </g>
  );
  if (role === "auth") return (
    <g>
      {[0,7,14].map((dy,i) => (
        <g key={i}>
          <rect x={x-16} y={y-12+dy} width={32} height={5.5} rx={1.5} fill={s} stroke={b} strokeWidth={1}/>
          <circle cx={x+9} cy={y-9.5+dy} r={1.5} fill={TEXT_DIM}/>
        </g>
      ))}
    </g>
  );
  return null;
}

function getEdge(from: number, to: number) {
  const a = NODES[from];
  const b = NODES[to];
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.sqrt(dx*dx + dy*dy);
  const r = 24;
  return {
    x1: a.x + dx/len*r, y1: a.y + dy/len*r,
    x2: b.x - dx/len*r, y2: b.y - dy/len*r,
  };
}

const EDGES = [
  [0,1],[1,2],[1,3],[1,4]
];

export function DNSLookup() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [packetPos, setPacketPos] = useState({ x: NODES[0].x, y: NODES[0].y });
  const [showPacket, setShowPacket] = useState(false);
  const [activeEdge, setActiveEdge] = useState<[number,number]|null>(null);
  const animRef = useRef<number|null>(null);

  function lerp(a: number, b: number, t: number) { return a + (b-a)*t; }
  function ease(t: number) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

  function animatePacket(fromN: number, toN: number, onDone: () => void) {
    const fx = NODES[fromN].x, fy = NODES[fromN].y;
    const tx = NODES[toN].x,  ty = NODES[toN].y;
    setActiveEdge([Math.min(fromN,toN) === fromN ? fromN : toN, Math.max(fromN,toN) === toN ? toN : fromN]);
    const dur = 900;
    const start = performance.now();
    function frame(now: number) {
      const t = Math.min((now-start)/dur, 1);
      const e = ease(t);
      setPacketPos({ x: lerp(fx,tx,e), y: lerp(fy,ty,e) });
      if (t < 1) { animRef.current = requestAnimationFrame(frame); }
      else { setActiveEdge(null); onDone(); }
    }
    animRef.current = requestAnimationFrame(frame);
  }

  function run() {
    if (running) return;
    setRunning(true); setDone(false);
    setPacketPos({ x: NODES[0].x, y: NODES[0].y });
    setShowPacket(true);
    setStep(0);

    let s = 0;
    function next() {
      if (s >= STEPS.length) { setRunning(false); setDone(true); return; }
      const cur = STEPS[s];
      setStep(s);
      animatePacket(cur.from, cur.to, () => {
        s++;
        setTimeout(next, 500);
      });
    }
    setTimeout(next, 400);
  }

  function reset() {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setStep(-1); setRunning(false); setDone(false);
    setShowPacket(false); setActiveEdge(null);
    setPacketPos({ x: NODES[0].x, y: NODES[0].y });
  }

  const curStep = step >= 0 && step < STEPS.length ? STEPS[step] : null;
  const finalIP = done;

  return (
    <div style={{
      background: DARK, borderRadius: 12, border: `1px solid ${BORDER}`,
      padding: "16px", fontFamily: "system-ui, sans-serif", maxWidth: 660,
    }}>
      <svg viewBox="0 0 620 310" style={{ width: "100%", height: "auto", display: "block" }}
        role="img" aria-label="Animación consulta DNS">

        {/* Edges base */}
        {EDGES.map(([a,b],i) => {
          const e = getEdge(a,b);
          const isActive = activeEdge && ((activeEdge[0]===a && activeEdge[1]===b)||(activeEdge[0]===b && activeEdge[1]===a));
          return (
            <g key={i}>
              <line x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
                stroke={BORDER} strokeWidth={1.5} strokeDasharray="5 4"/>
              {isActive && (
                <line x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
                  stroke={ACCENT} strokeWidth={2} strokeDasharray="5 4" opacity={0.7}/>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => {
          const col = ROLE_COLORS[n.role];
          const isActive = curStep && (curStep.from === i || curStep.to === i);
          const visited = finalIP && (n.role === "pc" || n.role === "resolver");
          return (
            <g key={i}>
              {isActive && (
                <circle cx={n.x} cy={n.y} r={28} fill={ACCENT_DIM}/>
              )}
              <circle cx={n.x} cy={n.y} r={24}
                fill={isActive ? col.fill : SURFACE}
                stroke={isActive ? col.stroke : (visited ? `${col.stroke}66` : BORDER)}
                strokeWidth={isActive ? 1.5 : 1}/>
              <NodeIcon role={n.role} x={n.x} y={n.y}/>
              <text x={n.x} y={n.y - 50} textAnchor="middle" fontSize={20}
                fill={isActive ? col.text : TEXT_MUTED}
                style={{ fontFamily: "system-ui" }}>{n.label}</text>
              <text x={n.x} y={n.y - 35} textAnchor="middle" fontSize={16}
                fill={isActive ? `${col.text}99` : TEXT_DIM}
                style={{ fontFamily: "system-ui" }}>{n.sub}</text>
            </g>
          );
        })}

        {/* Packet */}
        {showPacket && curStep && (() => {
          const label = curStep.packet;
          const isFinal = (curStep as any).final && done;
          const pColor = isFinal ? ACCENT : (curStep.dir === "back" ? "#7f77dd" : ACCENT);
          const textW = Math.max(label.length * 5.5 + 80, 50);
          return (
            <g>
              <rect x={packetPos.x - textW/2} y={packetPos.y - 8}
                width={textW} height={20} rx={4}
                fill={pColor} stroke={DARK} strokeWidth={0.8} opacity={0.95}/>
              <text x={packetPos.x} y={packetPos.y + 9}
                textAnchor="middle" fontSize={18} fill={DARK}
                style={{ fontFamily: "monospace", fontWeight: "bold" }}>{label}</text>
            </g>
          );
        })()}

        {/* Final IP glow on PC */}
        {finalIP && (
          <>
            <circle cx={NODES[0].x} cy={NODES[0].y} r={30} fill={`${ACCENT}18`}/>
            <text x={NODES[0].x} y={NODES[0].y + 46} textAnchor="middle" fontSize={18}
              fill={ACCENT} style={{ fontFamily: "monospace" }}>142.250.80.46 ✓</text>
          </>
        )}
      </svg>

      {/* Step progress dots */}
      <div style={{ display: "flex", gap: 4, marginTop: 10, justifyContent: "center" }}>
        {STEPS.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: step > i ? ACCENT : step === i ? `${ACCENT}77` : BORDER,
            transition: "background 0.3s",
          }}/>
        ))}
      </div>

      {/* Step label */}
      {curStep && (
        <div style={{
          marginTop: 6, textAlign: "center", fontSize: 18,
          color: `${ACCENT}99`, fontFamily: "monospace", letterSpacing: 1,
        }}>
          {curStep.label}
        </div>
      )}

      {/* Message */}
      <div style={{
        marginTop: 8, minHeight: 52, padding: "10px 14px",
        background: SURFACE, border: `0.5px solid ${step >= 0 ? `${ACCENT}33` : BORDER}`,
        borderRadius: 8, fontSize: 12, color: step >= 0 ? "#aaa" : TEXT_DIM,
        lineHeight: 1.6, transition: "border-color 0.3s",
      }}>
        {step >= 0 && curStep ? (
          <>
            <span style={{ color: ACCENT, fontWeight: 600, marginRight: 6 }}>
              [{STEPS[step].label}]
            </span>
            {curStep.msg}
          </>
        ) : done ? (
          <span style={{ color: ACCENT }}>
            ✓ Tu PC ahora tiene la IP <strong>142.250.80.46</strong> y puede conectarse a Google directamente. El proceso entero toma ~50ms.
          </span>
        ) : (
          <span style={{ color: TEXT_DIM }}>
            Presiona <strong style={{ color: TEXT_MUTED }}>Iniciar consulta</strong> para ver cómo tu PC descubre la IP de google.com paso a paso.
          </span>
        )}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <button onClick={run} disabled={running} style={{
          flex: 1, padding: "9px 0",
          background: running ? `${ACCENT}22` : ACCENT,
          color: running ? `${ACCENT}88` : DARK,
          border: "none", borderRadius: 7, fontSize: 12, fontWeight: 600,
          cursor: running ? "not-allowed" : "pointer",
          transition: "all 0.2s", fontFamily: "system-ui",
        }}>
          {running ? "Consultando…" : done ? "Consultar de nuevo" : "Iniciar consulta DNS →"}
        </button>
        {(step >= 0 || done) && !running && (
          <button onClick={reset} style={{
            padding: "9px 16px", background: "transparent", color: TEXT_MUTED,
            border: `0.5px solid ${BORDER}`, borderRadius: 7, fontSize: 12,
            cursor: "pointer", fontFamily: "system-ui",
          }}>Reset</button>
        )}
      </div>
    </div>
  );
}