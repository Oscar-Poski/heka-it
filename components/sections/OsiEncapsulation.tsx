"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LAYERS = [
  { id: 7, name: "Aplicación",   short: "HTTP request",          color: "#3A8DFF", track: "#00FFBF33" },
  { id: 6, name: "Presentación", short: "Cifrado TLS",           color: "#5bb8ff", track: "#00E8AD33" },
  { id: 5, name: "Sesión",       short: "Sesión abierta",        color: "#00FFBF", track: "#00CC9933" },
  { id: 4, name: "Transporte",   short: "Segmentos TCP",         color: "#94d400", track: "#00B38633" },
  { id: 3, name: "Red",          short: "Paquetes IP",           color: "#FFD700", track: "#00997333" },
  { id: 2, name: "Enlace",       short: "Tramas (MAC)",          color: "#FF9F43", track: "#007A5C33" },
  { id: 1, name: "Física",       short: "Señal eléctrica / luz", color: "#FF5C5C", track: "#005C4533" },
];

const ROW_H = 100;
const ROW_GAP = 6;
const STACK_TOP = 24;
const PACKET_W = 36;
const PACKET_H = 20;

function layerCY(idx: number) {
  return STACK_TOP + idx * (ROW_H + ROW_GAP) + ROW_H / 2;
}

type Phase = "idle" | "down" | "pause" | "up" | "done";

export function OsiEncapsulation() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [packetY, setPacketY] = useState<number>(layerCY(0) - PACKET_H / 2);
  const [packetOpacity, setPacketOpacity] = useState(0);
  const [hovered, setHovered] = useState<number>(-1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalH = STACK_TOP + 7 * (ROW_H + ROW_GAP) - ROW_GAP + 24;

  function clear() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  function schedule(fn: () => void, ms: number) {
    clear();
    timerRef.current = setTimeout(fn, ms);
  }

  function startAnim() {
    if (phase !== "idle" && phase !== "done") return;
    setActiveIdx(-1);
    setPacketOpacity(1);
    setPhase("down");
    setPacketY(layerCY(0) - PACKET_H / 2);
    setActiveIdx(0);
  }

  useEffect(() => {
    if (phase === "down") {
      if (activeIdx >= 0 && activeIdx < 7) {
        setPacketY(layerCY(activeIdx) - PACKET_H / 2);
        schedule(() => {
          if (activeIdx < 6) setActiveIdx(activeIdx + 1);
          else setPhase("pause");
        }, 750);
      }
    }
    if (phase === "pause") {
      setActiveIdx(6);
      schedule(() => {
        setPhase("up");
        setActiveIdx(6);
      }, 700);
    }
    if (phase === "up") {
      setPacketY(layerCY(activeIdx) - PACKET_H / 2);
      schedule(() => {
        if (activeIdx > 0) setActiveIdx(activeIdx - 1);
        else {
          setPhase("done");
          setPacketOpacity(0);
          setActiveIdx(-1);
        }
      }, 750);
    }
  }, [phase, activeIdx]);

  useEffect(() => () => clear(), []);

  const direction = phase === "up" ? "up" : "down";

  return (
    <div style={{ fontFamily: "var(--font-sans, system-ui)", padding: "1rem 0.5rem", userSelect: "none" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: 24, alignItems: "start" }}>

        <div style={{ position: "relative" }}>
          <svg
            width="100%"
            viewBox={`0 0 420 ${totalH}`}
            style={{ display: "block", overflow: "visible" }}
          >
            {LAYERS.map((l, i) => {
              const y = STACK_TOP + i * (ROW_H + ROW_GAP);
              const cx = 210;
              const w = 450;
              const x = cx - w / 2;
              const isActive = activeIdx === i;
              const isHov = hovered === i && phase === "idle" || phase === "done";

              return (
                <g
                  key={l.id}
                  style={{ cursor: phase === "idle" || phase === "done" ? "pointer" : "default" }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                >
                  <rect
                    x={x} y={y} width={w} height={ROW_H} rx={8}
                    fill={isActive ? l.color : isHov ? l.track : "var(--color-background-secondary)"}
                    stroke={isActive ? l.color : l.track}
                    strokeWidth={isActive ? 1.5 : 0.5}
                    style={{ transition: "fill 0.25s, stroke 0.25s" }}
                  />
                  <text
                    x={x + 14} y={y + ROW_H / 2}
                    dominantBaseline="central"
                    fontSize={40}
                    fontWeight={500}
                    fill={isActive ? "#002B22" : "var(--color-text-secondary)"}
                    style={{ transition: "fill 0.25s", fontFamily: "var(--font-mono, monospace)" }}
                  >
                    {l.id}
                  </text>
                  <text
                    x={x + 70} y={y + ROW_H / 2 - 7}
                    dominantBaseline="central"
                    fontSize={40}
                    fontWeight={500}
                    fill={isActive ? "#001F18" : "var(--color-text-primary)"}
                    style={{ transition: "fill 0.25s" }}
                  >
                    {l.name}
                  </text>
                  <text
                    x={x + 70} y={y + ROW_H / 2 + 30}
                    dominantBaseline="central"
                    fontSize={30}
                    fill={isActive ? "#003D2E" : "var(--color-text-secondary)"}
                    style={{ transition: "fill 0.25s" }}
                  >
                    {l.short}
                  </text>

                  {isActive && (
                    <rect
                      x={x} y={y + ROW_H - 2} width={w} height={2} rx={1}
                      fill={l.color} opacity={0.6}
                    />
                  )}
                </g>
              );
            })}


          </svg>
        </div>

        <div style={{ paddingTop: 24 }}>
          <AnimatePresence mode="wait">
            {activeIdx >= 0 ? (
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                style={{
                  borderRadius: 10,
                  border: `1.5px solid ${LAYERS[activeIdx].color}55`,
                  padding: "14px 16px",
                  background: "var(--color-background-secondary)",
                  marginBottom: 16,
                }}
              >
                <div style={{ fontSize: 24, color: LAYERS[activeIdx].color, fontWeight: 500, marginBottom: 6, letterSpacing: "0.04em" }}>
                  CAPA {LAYERS[activeIdx].id}
                </div>
                <div style={{ fontSize: 26, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 4, lineHeight: 1.2 }}>
                  {LAYERS[activeIdx].name}
                </div>
                <div style={{ fontSize: 22, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  {LAYERS[activeIdx].short}
                </div>

                <div style={{
                  marginTop: 12,
                  height: 3,
                  borderRadius: 2,
                  background: "var(--color-border-tertiary)",
                  overflow: "hidden"
                }}>
                  <motion.div
                    key={`bar-${activeIdx}-${phase}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    style={{ height: "100%", background: LAYERS[activeIdx].color, borderRadius: 2 }}
                  />
                </div>

                <div style={{ marginTop: 10, fontSize: 11, color: "var(--color-text-secondary)" }}>
                  {direction === "down" ? "Empaquetando datos..." : "Desempaquetando datos..."}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  borderRadius: 10,
                  border: "0.5px solid var(--color-border-tertiary)",
                  padding: "14px 16px",
                  background: "var(--color-background-secondary)",
                  marginBottom: 16,
                  minHeight: 100,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                {phase === "done" ? (
                  <>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#00FFBF22", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3" stroke="#00FFBF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div style={{ fontSize: 12, color: "var(--color-text-secondary)", textAlign: "center" }}>Transmisión completa</div>
                  </>
                ) : (
                  <div style={{ fontSize: 12, color: "var(--color-text-secondary)", textAlign: "center" }}>
                    Pulsa el botón para ver el recorrido
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={startAnim}
            disabled={phase !== "idle" && phase !== "done"}
            style={{
              width: "100%",
              padding: "10px 0",
              borderRadius: 8,
              border: (phase === "idle" || phase === "done") ? "1.5px solid #00FFBF" : "0.5px solid var(--color-border-tertiary)",
              background: (phase === "idle" || phase === "done") ? "#00FFBF15" : "var(--color-background-secondary)",
              color: (phase === "idle" || phase === "done") ? "#00FFBF" : "var(--color-text-secondary)",
              fontSize: 13,
              fontWeight: 500,
              cursor: (phase === "idle" || phase === "done") ? "pointer" : "not-allowed",
              fontFamily: "var(--font-sans, system-ui)",
              transition: "all 0.2s",
            }}
          >
            {phase === "idle" ? "Enviar un request" : phase === "done" ? "Repetir" : "Transmitiendo..."}
          </button>
        </div>
      </div>
    </div>
  );
}