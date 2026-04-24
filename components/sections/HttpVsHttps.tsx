"use client";

import { useEffect, useState, useRef } from "react";

const ACCENT = "#00FFBF";
const DANGER = "#FF4D6D";
const BG = "#0a0a0f";
const SURFACE = "#13131e";
const DIM = "#2a2a3a";
const MUTED = "#555";

type Mode = "http" | "https";
type Phase = "idle" | "sending" | "intercepted" | "delivered";

function useLoop(mode: Mode) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [t, setT] = useState(0); // 0..1 packet progress
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const phaseRef = useRef<Phase>("idle");

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    let running = true;

    function runCycle() {
      setPhase("sending");
      setT(0);
      startRef.current = null;

      const TRAVEL = 2200;

      function animate(ts: number) {
        if (!running) return;
        if (!startRef.current) startRef.current = ts;
        const elapsed = ts - startRef.current;
        const progress = Math.min(elapsed / TRAVEL, 1);
        setT(progress);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          if (mode === "http") {
            setPhase("intercepted");
            setTimeout(() => {
              if (!running) return;
              setPhase("idle");
              setTimeout(() => { if (running) runCycle(); }, 400);
            }, 2000);
          } else {
            setPhase("delivered");
            setTimeout(() => {
              if (!running) return;
              setPhase("idle");
              setTimeout(() => { if (running) runCycle(); }, 400);
            }, 1800);
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    const delay = setTimeout(runCycle, 300);
    return () => {
      running = false;
      clearTimeout(delay);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mode]);

  return { phase, t };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Packet position along path
// HTTP: 0..0.5 → Client to Sniffer X midpoint, 0.5..1 → goes UP to hacker
// HTTPS: 0..1 → straight Client to Server
function getPacketPos(t: number, mode: Mode, phase: Phase) {
  const clientX = 60, serverX = 320, y = 200;
  const snifferX = 190, hackerY = 80;

  if (mode === "https") {
    const e = easeInOut(t);
    return { x: lerp(clientX, serverX, e), y };
  }

  // HTTP
  if (t <= 0.5) {
    const e = easeInOut(t / 0.5);
    return { x: lerp(clientX, snifferX, e), y };
  } else {
    const e = easeInOut((t - 0.5) / 0.5);
    return { x: snifferX, y: lerp(y, hackerY, e) };
  }
}

export function HttpVsHttps() {
  const [mode, setMode] = useState<Mode>("http");
  const { phase, t } = useLoop(mode);

  const isHTTP = mode === "http";
  const clientX = 60, serverX = 320, pathY = 200;
  const snifferX = 190, hackerY = 80;

  const packetPos = phase === "sending" || phase === "intercepted" || phase === "delivered"
    ? getPacketPos(phase === "intercepted" ? 1 : phase === "delivered" ? 1 : t, mode, phase)
    : null;

  const packetColor = isHTTP ? DANGER : ACCENT;

  // Particles for HTTPS encryption effect
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(x => x + 1), 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      background: BG,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      padding: 16,
    }}>
      <div style={{ width: "100%", maxWidth: 480 }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 13, color: MUTED, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>
            Seguridad en la web
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>
            HTTP vs HTTPS
          </div>
        </div>

        {/* Mode Toggle */}
        <div style={{
          display: "flex",
          background: SURFACE,
          borderRadius: 12,
          padding: 4,
          marginBottom: 24,
          border: `1px solid ${DIM}`,
        }}>
          {(["http", "https"] as Mode[]).map((m) => (
            <button key={m} onClick={() => setMode(m)} style={{
              flex: 1,
              padding: "10px 0",
              borderRadius: 9,
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1,
              transition: "all 0.25s",
              background: mode === m
                ? (m === "http" ? DANGER : ACCENT)
                : "transparent",
              color: mode === m ? BG : MUTED,
            }}>
              {m.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Animation SVG */}
        <div style={{
          background: SURFACE,
          borderRadius: 16,
          border: `1px solid ${DIM}`,
          padding: "8px 4px",
          marginBottom: 20,
          position: "relative",
          overflow: "hidden",
        }}>
          <svg viewBox="0 0 380 280" style={{ width: "100%", height: "auto" }}>

            {/* Grid bg lines */}
            {[60, 100, 140, 180, 220, 260].map(yy => (
              <line key={yy} x1={0} y1={yy} x2={380} y2={yy}
                stroke="#1a1a28" strokeWidth={1} />
            ))}
            {[80, 160, 240, 320].map(xx => (
              <line key={xx} x1={xx} y1={0} x2={xx} y2={280}
                stroke="#1a1a28" strokeWidth={1} />
            ))}

            {/* === HACKER NODE (top center, HTTP only) === */}
            <g opacity={isHTTP ? 1 : 0.12} style={{ transition: "opacity 0.4s" }}>
              {/* Danger glow */}
              <circle cx={snifferX} cy={hackerY} r={28}
                fill={DANGER} fillOpacity={phase === "intercepted" ? 0.18 : 0.06} />
              <circle cx={snifferX} cy={hackerY} r={18}
                fill={SURFACE} stroke={DANGER} strokeWidth={2}
                strokeDasharray={phase === "intercepted" ? "none" : "4 3"} />
              <text x={snifferX} y={hackerY + 6} fontSize={14} textAnchor="middle">👤</text>
              <text x={snifferX} y={hackerY - 26} fontSize={9} fill={DANGER} textAnchor="middle" fontWeight={700}>
                ATACANTE
              </text>

              {/* Vertical intercept line */}
              <line x1={snifferX} y1={hackerY + 18} x2={snifferX} y2={pathY - 12}
                stroke={DANGER} strokeWidth={1.5} strokeDasharray="4 3"
                strokeOpacity={0.5} />
            </g>

            {/* === MAIN PATH === */}
            {/* Dashed base road */}
            <line x1={clientX} y1={pathY} x2={serverX} y2={pathY}
              stroke={DIM} strokeWidth={2} strokeDasharray="6 5" />

            {/* HTTPS encryption shield segments */}
            {!isHTTP && [0.2, 0.4, 0.6, 0.8].map((frac, i) => {
              const sx = lerp(clientX, serverX, frac);
              const pulse = Math.sin(tick * 0.3 + i * 1.5) * 0.3 + 0.7;
              return (
                <g key={i}>
                  <circle cx={sx} cy={pathY} r={7}
                    fill={ACCENT} fillOpacity={0.08 * pulse}
                    stroke={ACCENT} strokeWidth={1} strokeOpacity={0.3 * pulse} />
                  <text x={sx} y={pathY + 4} fontSize={8} textAnchor="middle" opacity={0.5 * pulse}>🔒</text>
                </g>
              );
            })}

            {/* Sniffer tap point (HTTP) */}
            {isHTTP && (
              <g>
                <circle cx={snifferX} cy={pathY} r={8}
                  fill={DANGER} fillOpacity={0.15}
                  stroke={DANGER} strokeWidth={1.5} />
                <line x1={snifferX - 5} y1={pathY - 5} x2={snifferX + 5} y2={pathY + 5}
                  stroke={DANGER} strokeWidth={1.5} />
                <line x1={snifferX + 5} y1={pathY - 5} x2={snifferX - 5} y2={pathY + 5}
                  stroke={DANGER} strokeWidth={1.5} />
              </g>
            )}

            {/* === CLIENT NODE === */}
            <g>
              <circle cx={clientX} cy={pathY} r={22}
                fill={SURFACE} stroke={ACCENT} strokeWidth={2} />
              <text x={clientX} y={pathY + 6} fontSize={18} textAnchor="middle">💻</text>
              <text x={clientX} y={pathY + 36} fontSize={9} fill={ACCENT} textAnchor="middle" fontWeight={600}>
                CLIENTE
              </text>
            </g>

            {/* === SERVER NODE === */}
            <g>
              <circle cx={serverX} cy={pathY} r={22}
                fill={SURFACE}
                stroke={phase === "delivered" ? ACCENT : DIM}
                strokeWidth={2}
                style={{ transition: "stroke 0.3s" }} />
              {phase === "delivered" && (
                <circle cx={serverX} cy={pathY} r={28}
                  fill="none" stroke={ACCENT} strokeWidth={1.5} strokeOpacity={0.3} />
              )}
              <text x={serverX} y={pathY + 6} fontSize={18} textAnchor="middle">🖥️</text>
              <text x={serverX} y={pathY + 36} fontSize={9}
                fill={phase === "delivered" ? ACCENT : MUTED}
                textAnchor="middle" fontWeight={600}
                style={{ transition: "fill 0.3s" }}>
                SERVIDOR
              </text>
            </g>

            {/* === PACKET === */}
            {packetPos && phase !== "delivered" && (
              <g transform={`translate(${packetPos.x}, ${packetPos.y})`}>
                {/* Glow */}
                <circle cx={0} cy={0} r={14} fill={packetColor} fillOpacity={0.15} />
                {/* Body */}
                <rect x={-11} y={-7} width={22} height={14} rx={3}
                  fill={packetColor} stroke={BG} strokeWidth={1.5} />
                <text x={0} y={4} fontSize={8} fill={BG} textAnchor="middle" fontWeight={800}>
                  {isHTTP ? "DATA" : "🔒"}
                </text>
              </g>
            )}

            {/* === STATUS LABELS === */}
            {/* HTTP intercepted */}
            {isHTTP && phase === "intercepted" && (
              <g>
                <rect x={snifferX - 58} y={hackerY + 40} width={116} height={22} rx={5}
                  fill={DANGER} fillOpacity={0.15} stroke={DANGER} strokeWidth={1} />
                <text x={snifferX} y={hackerY + 55} fontSize={10} fill={DANGER}
                  textAnchor="middle" fontWeight={700}>
                  ¡Datos expuestos!
                </text>
              </g>
            )}

            {/* HTTPS delivered */}
            {!isHTTP && phase === "delivered" && (
              <g>
                <rect x={serverX - 100} y={pathY - 54} width={140} height={22} rx={5}
                  fill={ACCENT} fillOpacity={0.12} stroke={ACCENT} strokeWidth={1} />
                <text x={serverX - 30} y={pathY - 38} fontSize={10} fill={ACCENT}
                  textAnchor="middle" fontWeight={700}>
                  Entregado con seguridad
                </text>
              </g>
            )}

            {/* Open packet content shown to hacker */}
            {isHTTP && phase === "intercepted" && (
              <g>
                <rect x={snifferX + 24} y={hackerY - 20} width={90} height={50} rx={6}
                  fill="#1a0810" stroke={DANGER} strokeWidth={1} strokeOpacity={0.6} />
                <text x={snifferX + 30} y={hackerY + 8} fontSize={12} fill="#ff8fa3">user: admin</text>
                <text x={snifferX + 30} y={hackerY + 20} fontSize={12} fill="#ff8fa3">pass: 1234</text>
              </g>
            )}

          </svg>
        </div>

        {/* Info card */}
        <div style={{
          background: SURFACE,
          borderRadius: 12,
          border: `1.5px solid ${isHTTP ? DANGER : ACCENT}`,
          padding: "14px 18px",
          transition: "border-color 0.3s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: isHTTP ? DANGER : ACCENT,
              boxShadow: `0 0 8px ${isHTTP ? DANGER : ACCENT}`,
            }} />
            <span style={{ fontWeight: 700, fontSize: 13, color: isHTTP ? DANGER : ACCENT }}>
              {isHTTP ? "Sin cifrado — texto plano" : "TLS/SSL — cifrado extremo a extremo"}
            </span>
          </div>
          <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.7 }}>
            {isHTTP
              ? "Cualquier nodo intermedio (router, ISP, atacante en la red) puede leer y modificar los datos que envías."
              : "Los datos se cifran antes de salir del cliente. Solo el servidor con la clave privada puede descifrarlos."}
          </div>
        </div>

      </div>
    </div>
  );
}