"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Mode = "http" | "https";

interface Packet {
  id: number;
  progress: number; // 0..1
  mode: Mode;
  phase: "request" | "response";
  intercepted: boolean;
  opacity: number;
}

interface Burst {
  id: number;
  mode: Mode;
  age: number;
}

const HTTP_COLOR = "#FF4D4D";
const HTTPS_COLOR = "#00E5A0";
const GOLD = "#FFD700";

const PAYLOAD_HTTP = [
  { text: "POST /login HTTP/1.1", highlight: false },
  { text: "Host: banco.com", highlight: false },
  { text: "", highlight: false },
  { text: "usuario=juan", highlight: false },
  { text: "contraseña=miperro123", highlight: true },
  { text: "tarjeta=4532-1234-5678-9012", highlight: true },
];

const PAYLOAD_HTTPS = [
  { text: "TLSv1.3 Application Data", highlight: false },
  { text: "──────────────────", highlight: false },
  { text: "a2 9c 3e b1 7f 44 d0", highlight: false },
  { text: "08 cc 91 5a e3 12 88", highlight: false },
  { text: "4b 2d f0 19 37 5c 2a", highlight: false },
  { text: "[ AES-256-GCM ]", highlight: false },
];

let uid = 0;

export function HttpVsHttps() {
  const [running, setRunning] = useState(false);
  const [packets, setPackets] = useState<Packet[]>([]);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [log, setLog] = useState<{ id: number; text: string }[]>([]);
  const [tab, setTab] = useState<Mode>("http");

  const rafRef = useRef<number>(0);
  const tickRef = useRef(0);
  const spawnRef = useRef(0);
  const logId = useRef(0);

  const addLog = useCallback((text: string) => {
    setLog((p) => [{ id: logId.current++, text }, ...p].slice(0, 6));
  }, []);

  const stop = () => {
    cancelAnimationFrame(rafRef.current);
    setRunning(false);
  };

  const start = () => {
    cancelAnimationFrame(rafRef.current);
    setPackets([]);
    setBursts([]);
    setLog([]);
    tickRef.current = 0;
    spawnRef.current = 0;
    setRunning(true);
  };

  useEffect(() => {
    if (!running) return;

    const loop = () => {
      tickRef.current++;
      const t = tickRef.current;

      if (t - spawnRef.current > 80) {
        spawnRef.current = t;
        setPackets((p) => [
          ...p,
          { id: uid++, progress: 0, mode: "http", phase: "request", intercepted: false, opacity: 1 },
          { id: uid++, progress: 0, mode: "https", phase: "request", intercepted: false, opacity: 1 },
        ]);
      }

      setPackets((prev) => {
        const next: Packet[] = [];
        const newBursts: Burst[] = [];
        const newPackets: Packet[] = [];

        for (const p of prev) {
          if (p.opacity <= 0) continue;

          if (p.intercepted) {
            const op = p.opacity - 0.04;
            if (op > 0) next.push({ ...p, opacity: op });
            continue;
          }

          const speed = 0.012;
          const np = p.progress + speed;

          if (np >= 1) {
            if (p.phase === "request") {
              newPackets.push({ id: uid++, progress: 1, mode: p.mode, phase: "response", intercepted: false, opacity: 1 });
            }
            const op = p.opacity - 0.1;
            if (op > 0) next.push({ ...p, progress: 1, opacity: op });
            continue;
          }

          if (p.phase === "response" && np <= 0) {
            const op = p.opacity - 0.1;
            if (op > 0) next.push({ ...p, progress: 0, opacity: op });
            continue;
          }

          // Intercept HTTP at midpoint
          if (p.mode === "http" && !p.intercepted && Math.abs(np - 0.5) < 0.015) {
            newBursts.push({ id: uid++, mode: "http", age: 0 });
            addLog(p.phase === "request" ? "⚠ contraseña=miperro123 capturada" : "⚠ Set-Cookie: session interceptado");
            next.push({ ...p, progress: np, intercepted: true });
            continue;
          }

          const delta = p.phase === "response" ? -speed : speed;
          next.push({ ...p, progress: p.progress + delta });
        }

        return [...next, ...newPackets];
      });

      setBursts((p) =>
        p.map((b) => ({ ...b, age: b.age + 1 })).filter((b) => b.age < 25)
      );

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running, addLog]);

  // Map progress (0..1) to SVG x coordinate
  const toX = (progress: number) => 30 + progress * 260;

  const httpReq = packets.filter((p) => p.mode === "http" && p.phase === "request");
  const httpRes = packets.filter((p) => p.mode === "http" && p.phase === "response");
  const httpsReq = packets.filter((p) => p.mode === "https" && p.phase === "request");
  const httpsRes = packets.filter((p) => p.mode === "https" && p.phase === "response");

  return (
    <div style={{
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      background: "#0b0b0b",
      color: "#e0e8ff",
      padding: "16px",
      minHeight: "100vh",
      maxWidth: 420,
      margin: "0 auto",
      boxSizing: "border-box",
    }}>
      {/* Header */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#777777", textTransform: "uppercase", marginBottom: 4 }}>
          Seguridad Web
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
          HTTP <span style={{ color: "#3c3c3c" }}>vs</span> HTTPS
        </div>
        <div style={{ fontSize: 10, color: "#d6d6d6", marginTop: 2 }}>¿Qué ve el intermediario?</div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 14, marginBottom: 12, fontSize: 10 }}>
        {[
          { color: HTTP_COLOR, label: "HTTP · texto plano" },
          { color: HTTPS_COLOR, label: "HTTPS · cifrado" },
        ].map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: l.color }} />
            <span style={{ color: "#858585" }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Animation canvas */}
      <div style={{
        background: "#060606",
        borderRadius: 10,
        border: "1px solid #1a1a1a",
        marginBottom: 12,
        overflow: "hidden",
      }}>
        <svg width="100%" viewBox="0 0 320 180" style={{ display: "block" }}>
          {/* Track lines */}
          {/* HTTP req */}
          <line x1="30" y1="55" x2="290" y2="55" stroke="#1c1c1c" strokeWidth="1.5" />
          {/* HTTP res */}
          <line x1="30" y1="75" x2="290" y2="75" stroke="#1c1c1c" strokeWidth="1" strokeDasharray="3 5" />
          {/* HTTPS req */}
          <line x1="30" y1="115" x2="290" y2="115" stroke="#1c1c1c" strokeWidth="1.5" />
          {/* HTTPS res */}
          <line x1="30" y1="135" x2="290" y2="135" stroke="#1c1c1c" strokeWidth="1" strokeDasharray="3 5" />

          {/* Lane labels */}
          <text x="10" y="59" fontSize="8" fill={HTTP_COLOR} fontFamily="inherit" fontWeight="700" textAnchor="middle">H</text>
          <text x="10" y="119" fontSize="7" fill={HTTPS_COLOR} fontFamily="inherit" fontWeight="700" textAnchor="middle">S</text>

          {/* Direction hints */}
          <text x="32" y="48" fontSize="6" fill="#2a2a2a" fontFamily="inherit">→ req</text>
          <text x="32" y="88" fontSize="6" fill="#2a2a2a" fontFamily="inherit">← res</text>

          {/* Origin / Server boxes */}
          <rect x="14" y="40" width="18" height="105" rx="4" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="1" />
          <text x="23" y="96" textAnchor="middle" fontSize="5.5" fill="#333" fontFamily="inherit" transform="rotate(-90,23,96)">ORIGEN</text>

          <rect x="288" y="40" width="18" height="105" rx="4" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="1" />
          <text x="297" y="96" textAnchor="middle" fontSize="5.5" fill="#333" fontFamily="inherit" transform="rotate(-90,297,96)">SERVIDOR</text>

          {/* Intercept zone */}
          <rect x="148" y="30" width="24" height="130" fill={GOLD} fillOpacity="0.03" />
          <line x1="160" y1="30" x2="160" y2="160" stroke={GOLD} strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.2" />
          <text x="160" y="22" textAnchor="middle" fontSize="12">🕵️</text>
          <text x="160" y="170" textAnchor="middle" fontSize="6" fill={GOLD} fillOpacity="0.35" fontFamily="inherit">INTERMEDIARIO</text>

          {/* HTTP packets — request */}
          {httpReq.map((p) => (
            <g key={p.id} opacity={p.opacity}>
              <rect x={toX(p.progress) - 16} y="47" width="32" height="16" rx="4"
                fill={p.intercepted ? GOLD : HTTP_COLOR} fillOpacity="0.15"
                stroke={p.intercepted ? GOLD : HTTP_COLOR} strokeWidth="1" />
              <text x={toX(p.progress)} y="58" textAnchor="middle" fontSize="7" fill={p.intercepted ? GOLD : HTTP_COLOR} fontFamily="inherit">
                {p.intercepted ? "⚡" : "REQ"}
              </text>
            </g>
          ))}

          {/* HTTP packets — response */}
          {httpRes.map((p) => (
            <g key={p.id} opacity={p.opacity}>
              <rect x={toX(1 - p.progress) - 16} y="67" width="32" height="16" rx="4"
                fill={p.intercepted ? GOLD : HTTP_COLOR} fillOpacity="0.12"
                stroke={p.intercepted ? GOLD : HTTP_COLOR} strokeWidth="0.8" />
              <text x={toX(1 - p.progress)} y="78" textAnchor="middle" fontSize="7" fill={p.intercepted ? GOLD : HTTP_COLOR} fontFamily="inherit">
                {p.intercepted ? "⚡" : "RES"}
              </text>
            </g>
          ))}

          {/* HTTPS packets — request */}
          {httpsReq.map((p) => (
            <g key={p.id} opacity={p.opacity}>
              <rect x={toX(p.progress) - 14} y="107" width="28" height="16" rx="4"
                fill={HTTPS_COLOR} fillOpacity="0.12"
                stroke={HTTPS_COLOR} strokeWidth="1" />
              <text x={toX(p.progress)} y="118" textAnchor="middle" fontSize="9" fill={HTTPS_COLOR}>🔒</text>
            </g>
          ))}

          {/* HTTPS packets — response */}
          {httpsRes.map((p) => (
            <g key={p.id} opacity={p.opacity}>
              <rect x={toX(1 - p.progress) - 14} y="127" width="28" height="16" rx="4"
                fill={HTTPS_COLOR} fillOpacity="0.1"
                stroke={HTTPS_COLOR} strokeWidth="0.8" />
              <text x={toX(1 - p.progress)} y="138" textAnchor="middle" fontSize="9" fill={HTTPS_COLOR}>🔒</text>
            </g>
          ))}

          {/* Burst particles */}
          {bursts.map((b) => (
            <g key={b.id} opacity={1 - b.age / 25}>
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const r = (b.age / 25) * 16;
                const cy = b.mode === "http" ? 55 : 115;
                return (
                  <circle
                    key={angle}
                    cx={160 + Math.cos(rad) * r}
                    cy={cy + Math.sin(rad) * r}
                    r={1.5}
                    fill={GOLD}
                    opacity={0.9}
                  />
                );
              })}
            </g>
          ))}
        </svg>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button
          onClick={start}
          style={{
            flex: 1,
            background: "#FF4D4D",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 0",
            fontSize: 12,
            fontFamily: "inherit",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.06em",
          }}
        >
          {running ? "↺ REINICIAR" : "▶ INICIAR"}
        </button>
        <button
          onClick={stop}
          disabled={!running}
          style={{
            flex: 1,
            background: "transparent",
            color: running ? "#e0e8ff" : "#2a2a2a",
            border: `1px solid ${running ? "#2a2a2a" : "#1a1a1a"}`,
            borderRadius: 8,
            padding: "10px 0",
            fontSize: 12,
            fontFamily: "inherit",
            fontWeight: 700,
            cursor: running ? "pointer" : "not-allowed",
          }}
        >
          ⏸ PAUSAR
        </button>
      </div>

      {/* Bottom panels */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>

        {/* Payload inspector */}
        <div style={{ background: "#060606", borderRadius: 10, border: "1px solid #1a1a1a", overflow: "hidden" }}>
          <div style={{ display: "flex", borderBottom: "1px solid #1a1a1a" }}>
            {(["http", "https"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setTab(m)}
                style={{
                  flex: 1,
                  padding: "7px 0",
                  fontSize: 9,
                  fontFamily: "inherit",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  background: tab === m ? (m === "http" ? "#1a0808" : "#081a11") : "transparent",
                  color: tab === m ? (m === "http" ? HTTP_COLOR : HTTPS_COLOR) : "#333",
                  border: "none",
                  borderBottom: tab === m ? `2px solid ${m === "http" ? HTTP_COLOR : HTTPS_COLOR}` : "2px solid transparent",
                  cursor: "pointer",
                }}
              >
                {m.toUpperCase()}
              </button>
            ))}
          </div>
          <div style={{ padding: "8px 10px" }}>
            <div style={{ fontSize: 7.5, color: "#f8f8f8", marginBottom: 5, letterSpacing: "0.1em" }}>
              VE EL INTERMEDIARIO:
            </div>
            {(tab === "http" ? PAYLOAD_HTTP : PAYLOAD_HTTPS).map((line, i) => (
              <div key={i} style={{
                fontSize: 9,
                lineHeight: 1.8,
                color: line.highlight
                  ? HTTP_COLOR
                  : tab === "https"
                  ? HTTPS_COLOR
                  : "#fdfdfd",
                fontFamily: "inherit",
              }}>
                {line.text || "\u00a0"}
              </div>
            ))}
          </div>
        </div>

        {/* Intercept log */}
        <div style={{ background: "#060606", borderRadius: 10, border: "1px solid #1a1a1a", padding: "8px 10px" }}>
          <div style={{ fontSize: 7.5, color: "#ffffff", marginBottom: 7, letterSpacing: "0.1em" }}>
            INTERCEPTACIONES:
          </div>
          {log.length === 0 ? (
            <div style={{ fontSize: 9, color: "#222", lineHeight: 1.5 }}>
              Inicia la simulación...
            </div>
          ) : (
            log.map((l) => (
              <div key={l.id} style={{ fontSize: 9, color: HTTP_COLOR, marginBottom: 5, lineHeight: 1.5 }}>
                {l.text}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer note */}
      <div style={{ marginTop: 12, fontSize: 9.5, color: "#e4e4e4", lineHeight: 1.7 }}>
        HTTP expone todo el tráfico. HTTPS cifra con TLS: el intermediario solo ve datos ininteligibles.
      </div>
    </div>
  );
}