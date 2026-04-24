"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ACCENT = "#00FFBF";
const ACCENT_DIM = "#00FFBF33";
const DARK = "#0a0a0f";
const SURFACE = "#13131e";
const BORDER = "#2a2a3a";
const TEXT_MUTED = "#666";
const TEXT_DIM = "#444";

const NODES = [
  {
    x: 60,
    y: 110,
    label: "Tu PC",
    ip: "192.168.1.10",
    role: "origin" as const,
  },
  {
    x: 210,
    y: 110,
    label: "Router A",
    ip: "10.0.0.1",
    role: "router" as const,
  },
  {
    x: 360,
    y: 110,
    label: "Router B",
    ip: "10.0.1.1",
    role: "router" as const,
  },
  {
    x: 510,
    y: 110,
    label: "Servidor",
    ip: "93.184.216.34",
    role: "dest" as const,
  },
];

const DEST_IP = "93.184.216.34";

const STEPS = [
  {
    node: 0,
    msg: `Tu PC crea un paquete con destino ${DEST_IP}. Lo envía al primer router.`,
  },
  {
    node: 1,
    msg: `Router A lee la IP destino. No es suya → reenvía hacia Router B.`,
  },
  {
    node: 2,
    msg: `Router B verifica. Tampoco es suya → reenvía al servidor final.`,
  },
  {
    node: 3,
    msg: `¡Llegó! El servidor reconoce ${DEST_IP} como propia y acepta el paquete.`,
  },
];

const xs = NODES.map((n) => n.x);
const ys = NODES.map((n) => n.y);
const times = [0, 0.33, 0.66, 1];

function RouterIcon({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect
        x={x - 18}
        y={y - 12}
        width={36}
        height={24}
        rx={4}
        fill={SURFACE}
        stroke={BORDER}
        strokeWidth={1}
      />
      {[-8, 0, 8].map((dx, i) => (
        <circle key={i} cx={x + dx} cy={y} r={2} fill={TEXT_DIM} />
      ))}
      <rect x={x - 14} y={y + 6} width={28} height={3} rx={1} fill={BORDER} />
    </g>
  );
}

function ServerIcon({ x, y }: { x: number; y: number }) {
  return (
    <g>
      {[0, 8, 16].map((dy, i) => (
        <g key={i}>
          <rect
            x={x - 18}
            y={y - 14 + dy}
            width={36}
            height={6}
            rx={1.5}
            fill={SURFACE}
            stroke={BORDER}
            strokeWidth={1}
          />
          <circle cx={x + 10} cy={y - 11 + dy} r={1.5} fill={TEXT_DIM} />
        </g>
      ))}
    </g>
  );
}

function PCIcon({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect
        x={x - 18}
        y={y - 16}
        width={36}
        height={26}
        rx={3}
        fill={SURFACE}
        stroke={BORDER}
        strokeWidth={1}
      />
      <rect
        x={x - 13}
        y={y - 12}
        width={26}
        height={16}
        rx={1}
        fill={DARK}
        stroke="none"
      />
      {[0, 4, 8].map((dy, i) => (
        <line
          key={i}
          x1={x - 10}
          y1={y - 10 + dy}
          x2={x + 6 + (i === 1 ? -4 : 0)}
          y2={y - 10 + dy}
          stroke={TEXT_DIM}
          strokeWidth={0.8}
        />
      ))}
      <rect
        x={x - 8}
        y={y + 10}
        width={16}
        height={3}
        rx={1}
        fill={BORDER}
      />
      <rect
        x={x - 14}
        y={y + 13}
        width={28}
        height={2}
        rx={1}
        fill={BORDER}
      />
    </g>
  );
}

export function IPv4Animation() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [packetPos, setPacketPos] = useState({ x: xs[0] - 5, y: ys[0] - 4 });
  const [showPacket, setShowPacket] = useState(false);
  const [activeSegment, setActiveSegment] = useState(-1);

  const DURATION = 1200;

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }

  function animateSegment(
    fromIdx: number,
    toIdx: number,
    onDone: () => void
  ) {
    setActiveSegment(fromIdx);
    const start = performance.now();
    const fx = xs[fromIdx];
    const fy = ys[fromIdx];
    const tx = xs[toIdx];
    const ty = ys[toIdx];

    function frame(now: number) {
      const t = Math.min((now - start) / DURATION, 1);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setPacketPos({ x: lerp(fx, tx, ease) - 5, y: lerp(fy, ty, ease) - 4 });
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setActiveSegment(-1);
        onDone();
      }
    }
    requestAnimationFrame(frame);
  }

  function runAnimation() {
    if (running) return;
    setRunning(true);
    setDone(false);
    setStep(0);
    setPacketPos({ x: xs[0] - 5, y: ys[0] - 4 });
    setShowPacket(true);

    let s = 0;
    function next() {
      if (s >= NODES.length - 1) {
        setStep(NODES.length - 1);
        setRunning(false);
        setDone(true);
        return;
      }
      const from = s;
      const to = s + 1;
      s++;
      setStep(to);
      animateSegment(from, to, () => {
        setTimeout(next, 400);
      });
    }

    setTimeout(next, 600);
  }

  function reset() {
    setStep(-1);
    setRunning(false);
    setDone(false);
    setShowPacket(false);
    setActiveSegment(-1);
    setPacketPos({ x: xs[0] - 5, y: ys[0] - 4 });
  }

  const segPairs = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];

  return (
    <div
      style={{
        background: DARK,
        borderRadius: 12,
        border: `1px solid ${BORDER}`,
        padding: "16px",
        fontFamily: "system-ui, sans-serif",
        maxWidth: 620,
      }}
    >
      {/* Paquete flotante encima del SVG */}
      <div style={{ position: "relative" }}>
        <svg
          viewBox="0 0 570 200"
          style={{ width: "100%", height: "auto", display: "block" }}
          role="img"
          aria-label="Animación de ruteo IPv4"
        >
          {/* Líneas de conexión base */}
          {segPairs.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              stroke={BORDER}
              strokeWidth={1.5}
              strokeDasharray="5 4"
            />
          ))}

          {/* Segmento activo iluminado */}
          {activeSegment >= 0 && (
            <line
              x1={NODES[activeSegment].x}
              y1={NODES[activeSegment].y}
              x2={NODES[activeSegment + 1].x}
              y2={NODES[activeSegment + 1].y}
              stroke={ACCENT}
              strokeWidth={2}
              strokeDasharray="5 4"
              opacity={0.6}
            />
          )}

          {/* Nodos */}
          {NODES.map((n, i) => {
            const isActive = step === i;
            const isPast = step > i;
            const isOrigin = n.role === "origin";
            const isDest = n.role === "dest";
            const isRouter = n.role === "router";

            return (
              <g key={i}>
                {/* Halo cuando está activo */}
                {isActive && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isOrigin || isDest ? 26 : 22}
                    fill={ACCENT_DIM}
                  />
                )}

                {/* Círculo base */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isOrigin || isDest ? 22 : 20}
                  fill={
                    isActive
                      ? "#1a2e28"
                      : isPast
                      ? "#111820"
                      : SURFACE
                  }
                  stroke={
                    isActive
                      ? ACCENT
                      : isPast
                      ? `${ACCENT}66`
                      : BORDER
                  }
                  strokeWidth={isActive ? 1.5 : 1}
                />

                {/* Íconos */}
                {isOrigin && <PCIcon x={n.x} y={n.y} />}
                {isRouter && <RouterIcon x={n.x} y={n.y} />}
                {isDest && <ServerIcon x={n.x} y={n.y} />}

                {/* Label */}
                <text
                  x={n.x}
                  y={n.y - 34}
                  textAnchor="middle"
                  fontSize={16}
                  fill={isActive ? ACCENT : TEXT_MUTED}
                  style={{ fontFamily: "system-ui" }}
                >
                  {n.label}
                </text>

                {/* IP */}
                <text
                  x={n.x}
                  y={n.y + 55}
                  textAnchor="middle"
                  fontSize={16}
                  fill={isActive ? `${ACCENT}cc` : TEXT_DIM}
                  style={{ fontFamily: "monospace" }}
                >
                  {n.ip}
                </text>
              </g>
            );
          })}

          {/* Paquete viajando */}
          {showPacket && (
            <g>
              {/* Sombra del paquete */}
              <rect
                x={packetPos.x + 1}
                y={packetPos.y + 2}
                width={14}
                height={10}
                rx={2}
                fill={DARK}
                opacity={0.6}
              />
              {/* Paquete */}
              <rect
                x={packetPos.x}
                y={packetPos.y}
                width={14}
                height={10}
                rx={2}
                fill={ACCENT}
                stroke={DARK}
                strokeWidth={0.8}
              />
              {/* IP dentro del paquete */}
              <text
                x={packetPos.x + 7}
                y={packetPos.y + 7}
                textAnchor="middle"
                fontSize={4.5}
                fill={DARK}
                style={{ fontFamily: "monospace", fontWeight: "bold" }}
              >
                IP
              </text>
            </g>
          )}

          {/* Etiqueta de IP destino del paquete */}
          {showPacket && step >= 0 && (
            <g>
              <rect
                x={packetPos.x - 28}
                y={packetPos.y - 18}
                width={70}
                height={14}
                rx={3}
                fill={SURFACE}
                stroke={`${ACCENT}55`}
                strokeWidth={0.5}
              />
              <text
                x={packetPos.x + 7}
                y={packetPos.y - 8}
                textAnchor="middle"
                fontSize={6}
                fill={`${ACCENT}cc`}
                style={{ fontFamily: "monospace" }}
              >
                dst: {DEST_IP}
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Indicadores de paso */}
      <div
        style={{
          display: "flex",
          gap: 6,
          marginTop: 12,
          justifyContent: "center",
        }}
      >
        {STEPS.map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 2,
              background:
                step > i
                  ? ACCENT
                  : step === i
                  ? `${ACCENT}88`
                  : BORDER,
              transition: "background 0.4s",
            }}
          />
        ))}
      </div>

      {/* Mensaje del paso actual */}
      <div
        style={{
          marginTop: 12,
          minHeight: 48,
          padding: "10px 14px",
          background: SURFACE,
          border: `0.5px solid ${step >= 0 ? `${ACCENT}33` : BORDER}`,
          borderRadius: 8,
          fontSize: 12,
          color: step >= 0 ? "#aaa" : TEXT_DIM,
          lineHeight: 1.6,
          transition: "border-color 0.3s",
        }}
      >
        {step >= 0 ? (
          <>
            <span style={{ color: ACCENT, fontWeight: 600, marginRight: 6 }}>
              [{NODES[step].label}]
            </span>
            {STEPS[step].msg}
          </>
        ) : (
          <span style={{ color: TEXT_DIM }}>
            Presiona <strong style={{ color: TEXT_MUTED }}>Enviar paquete</strong> para ver cómo la IP dirige los datos.
          </span>
        )}
      </div>

      {/* Controles */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button
          onClick={runAnimation}
          disabled={running}
          style={{
            flex: 1,
            padding: "9px 0",
            background: running ? `${ACCENT}22` : ACCENT,
            color: running ? `${ACCENT}88` : DARK,
            border: "none",
            borderRadius: 7,
            fontSize: 12,
            fontWeight: 600,
            cursor: running ? "not-allowed" : "pointer",
            transition: "all 0.2s",
            fontFamily: "system-ui",
          }}
        >
          {running ? "Enviando…" : done ? "Enviar de nuevo" : "Enviar paquete →"}
        </button>
        {(step >= 0 || done) && !running && (
          <button
            onClick={reset}
            style={{
              padding: "9px 16px",
              background: "transparent",
              color: TEXT_MUTED,
              border: `0.5px solid ${BORDER}`,
              borderRadius: 7,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "system-ui",
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}