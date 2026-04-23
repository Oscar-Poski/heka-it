"use client";

import { useState, useEffect, useRef } from "react";

type Phase = "idle" | "encapsulating" | "transmitting" | "decapsulating" | "done";

interface Layer {
  num: number;
  name: string;
  color: string;
  header: string;
  pdu: string;
  protocol: string;
}

const LAYERS: Layer[] = [
  { num: 7, name: "Aplicación",   color: "#3A8DFF", header: "HTTP GET /index.html",          pdu: "Datos",    protocol: "HTTP / DNS" },
  { num: 6, name: "Presentación", color: "#5bbdff", header: "TLS · UTF-8",                   pdu: "Cifrado",  protocol: "TLS / SSL"  },
  { num: 5, name: "Sesión",       color: "#00FFBF", header: "Session-ID: a3f9",               pdu: "Sesión",   protocol: "NetBIOS"    },
  { num: 4, name: "Transporte",   color: "#6dd400", header: "TCP · Puerto 443",               pdu: "Segmento", protocol: "TCP / UDP"  },
  { num: 3, name: "Red",          color: "#FFD700", header: "IP …1.5 → …80.46",              pdu: "Paquete",  protocol: "IP / ICMP"  },
  { num: 2, name: "Enlace",       color: "#FF9F43", header: "MAC A2:B3 → FF:EE",             pdu: "Trama",    protocol: "Ethernet"   },
  { num: 1, name: "Física",       color: "#FF5C5C", header: "01001011 11010010…",            pdu: "Bits",     protocol: "Señal"      },
];

const N = LAYERS.length;
const STEP_MS = 650;
const TX_MS   = 1400;

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

// ── Data block: muestra las cabeceras apiladas ────────────────────────────────
function DataBlock({ count }: { count: number }) {
  if (count <= 0) return null;
  const shown = LAYERS.slice(N - count);
  return (
    <div style={{ margin: "8px 0 4px", borderRadius: 8, overflow: "hidden", border: "1px solid #1e2840" }}>
      {shown.map((l, i) => {
        const isCore = i === shown.length - 1;
        return (
          <div
            key={l.num}
            style={{
              padding: isCore ? "5px 10px" : "3px 8px",
              background: isCore ? `${l.color}20` : `${l.color}10`,
              borderBottom: i < shown.length - 1 ? `1px solid ${l.color}30` : "none",
              display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <span style={{ fontSize: 9, color: l.color, fontWeight: 700, minWidth: 32, opacity: 0.85 }}>
              {isCore ? "DATA" : `H${l.num}`}
            </span>
            <span style={{ fontSize: 9, color: "#5a6a9a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {isCore ? "HTTP GET /index.html" : l.header}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── Fila de capa ─────────────────────────────────────────────────────────────
function LayerRow({
  layer, active, revealed, stripping, onClick,
}: {
  layer: Layer; active: boolean; revealed: boolean; stripping: boolean; onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "6px 10px", borderRadius: 8, cursor: "pointer",
        background: active ? `${layer.color}18` : revealed ? `${layer.color}08` : "transparent",
        border: `1px solid ${active ? layer.color : revealed ? `${layer.color}40` : "#1e2840"}`,
        opacity: revealed || active ? 1 : 0.3,
        transform: active ? "scale(1.02)" : "scale(1)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{
        minWidth: 26, height: 26, borderRadius: 6, display: "flex",
        alignItems: "center", justifyContent: "center",
        background: active || revealed ? `${layer.color}25` : "#0d1222",
        border: `1px solid ${active || revealed ? layer.color : "#1e2840"}`,
        fontSize: 10, fontWeight: 700,
        color: active || revealed ? layer.color : "#3a4a6a",
        transition: "all 0.3s ease",
      }}>
        {layer.num}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: active || revealed ? layer.color : "#3a4a6a", transition: "color 0.3s" }}>
          {layer.name}
        </div>
        {(active || revealed) && (
          <div style={{ fontSize: 9, color: "#8899cc", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {stripping
              ? <span style={{ color: "#FF5C5C", fontStyle: "italic" }}>retirando cabecera…</span>
              : layer.header}
          </div>
        )}
      </div>
      {(active || revealed) && (
        <div style={{
          fontSize: 8, padding: "2px 6px", borderRadius: 4, whiteSpace: "nowrap",
          background: `${layer.color}15`, color: layer.color, border: `1px solid ${layer.color}30`,
        }}>
          {layer.pdu}
        </div>
      )}
    </div>
  );
}

// ── Panel de detalle de capa ──────────────────────────────────────────────────
function LayerDetail({ layer, onClose }: { layer: Layer; onClose: () => void }) {
  return (
    <div style={{
      background: `${layer.color}10`, border: `1px solid ${layer.color}40`,
      borderRadius: 10, padding: "12px 14px", marginTop: 10,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: layer.color }}>
          Capa {layer.num} · {layer.name}
        </span>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "#5a6a9a", cursor: "pointer", fontSize: 14 }}>✕</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
        {[{ label: "PDU", value: layer.pdu }, { label: "Protocolo", value: layer.protocol }].map(item => (
          <div key={item.label}>
            <div style={{ fontSize: 9, color: "#5a6a9a", letterSpacing: "0.1em", marginBottom: 2 }}>{item.label}</div>
            <div style={{ fontSize: 11, color: "#e0e8ff" }}>{item.value}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 9, color: "#5a6a9a" }}>
        Cabecera: <span style={{ color: layer.color }}>{layer.header}</span>
      </div>
    </div>
  );
}

// ── Stack vertical (origen o destino) ─────────────────────────────────────────
function LayerStack({
  label, direction, activeIdx, revealedCount, phase, phaseLocal, dataCount, onLayerClick, selectedLayer, onCloseDetail,
}: {
  label: string;
  direction: "down" | "up";
  activeIdx: number;
  revealedCount: number;
  phase: Phase;
  phaseLocal: "enc" | "dec" | "done" | "idle";
  dataCount: number;
  onLayerClick: (l: Layer) => void;
  selectedLayer: Layer | null;
  onCloseDetail: () => void;
}) {
  return (
    <div>
      <div style={{ fontSize: 9, color: "#5a6a9a", letterSpacing: "0.12em", marginBottom: 8, textAlign: "center", textTransform: "uppercase" }}>
        {label} {direction === "down" ? "↓" : "↑"}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {LAYERS.map((layer, i) => {
          let revealed = false;
          let active   = false;
          if (phaseLocal === "enc") {
            revealed = i <= revealedCount;
            active   = i === activeIdx;
          } else if (phaseLocal === "dec") {
            revealed = i >= activeIdx;
            active   = i === activeIdx;
          } else if (phaseLocal === "done") {
            revealed = true;
          }
          const stripping = phaseLocal === "dec" && active && i > 0;
          return (
            <LayerRow
              key={layer.num}
              layer={layer}
              active={active}
              revealed={revealed}
              stripping={stripping}
              onClick={() => onLayerClick(layer)}
            />
          );
        })}
      </div>
      <DataBlock count={dataCount} />
      {selectedLayer && <LayerDetail layer={selectedLayer} onClose={onCloseDetail} />}
    </div>
  );
}

// ── Separador de transmisión ───────────────────────────────────────────────────
function TransmitDivider({ progress, active }: { progress: number; active: boolean }) {
  return (
    <div style={{ margin: "16px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{ fontSize: 9, color: "#3a4a6a", letterSpacing: "0.1em", textTransform: "uppercase" }}>Medio físico</div>
      <div style={{ position: "relative", width: "60%", height: 6, borderRadius: 3, background: "#1e2840", overflow: "hidden" }}>
        {active && (
          <div style={{
            position: "absolute", top: 0, left: 0, height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #FF5C5C, #FFD700)",
            borderRadius: 3, transition: "width 0.05s linear",
          }} />
        )}
        {!active && progress >= 100 && (
          <div style={{ position: "absolute", inset: 0, background: "#00FFBF30", borderRadius: 3 }} />
        )}
      </div>
      {active && (
        <div style={{ fontSize: 8, color: "#FFD70060", letterSpacing: "0.15em" }}>01001011 · 11010010 · 00110101</div>
      )}
    </div>
  );
}

// ── Tabla de referencia colapsable ────────────────────────────────────────────
function RefTable() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 16, background: "#0d1222", borderRadius: 10, border: "1px solid #1e2840", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <span style={{ fontSize: 9, color: "#3a4a6a", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Referencia rápida
        </span>
        <span style={{ fontSize: 11, color: "#3a4a6a" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "24px 1fr 60px 80px", fontSize: 9, padding: "4px 12px", color: "#3a4a6a", borderTop: "1px solid #1e2840", borderBottom: "1px solid #1e2840" }}>
            <span>#</span><span>Capa</span><span>PDU</span><span>Protocolo</span>
          </div>
          {LAYERS.map(l => (
            <div key={l.num} style={{ display: "grid", gridTemplateColumns: "24px 1fr 60px 80px", fontSize: 10, padding: "5px 12px", borderBottom: "1px solid #1a2035" }}>
              <span style={{ color: l.color, fontWeight: 700 }}>{l.num}</span>
              <span style={{ color: "#8899cc" }}>{l.name}</span>
              <span style={{ color: "#5a6a9a" }}>{l.pdu}</span>
              <span style={{ color: "#5a6a9a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.protocol}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export function OsiEncapsulation() {
  const isMobile = useIsMobile();

  const [phase, setPhase]               = useState<Phase>("idle");
  const [encapStep, setEncapStep]       = useState(-1);
  const [decapStep, setDecapStep]       = useState(-1);
  const [txProgress, setTxProgress]     = useState(0);
  const [selectedLeft, setSelectedLeft]   = useState<Layer | null>(null);
  const [selectedRight, setSelectedRight] = useState<Layer | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (animRef.current)  clearInterval(animRef.current);
  };

  const reset = () => {
    clear();
    setPhase("idle"); setEncapStep(-1); setDecapStep(-1); setTxProgress(0);
    setSelectedLeft(null); setSelectedRight(null);
  };

  const start = () => { setPhase("encapsulating"); setEncapStep(0); };

  useEffect(() => {
    if (phase === "encapsulating") {
      timerRef.current = setTimeout(() => {
        if (encapStep < N - 1) setEncapStep(s => s + 1);
        else { setPhase("transmitting"); setTxProgress(0); }
      }, STEP_MS);
    }
    if (phase === "transmitting") {
      animRef.current = setInterval(() => {
        setTxProgress(p => {
          if (p >= 100) { clearInterval(animRef.current!); setPhase("decapsulating"); setDecapStep(N - 1); return 100; }
          return p + 2.5;
        });
      }, TX_MS / 40);
    }
    if (phase === "decapsulating") {
      timerRef.current = setTimeout(() => {
        if (decapStep > 0) setDecapStep(s => s - 1);
        else setPhase("done");
      }, STEP_MS);
    }
    return clear;
  }, [phase, encapStep, decapStep]);

  const statusText = () => {
    if (phase === "idle")          return "Presiona Iniciar para ver cómo viajan los datos por las 7 capas.";
    if (phase === "encapsulating") return `↓ Encapsulando capa ${LAYERS[encapStep]?.num} · ${LAYERS[encapStep]?.name}…`;
    if (phase === "transmitting")  return "⟶ Transmitiendo bits por el medio físico…";
    if (phase === "decapsulating") return `↑ Desencapsulando capa ${LAYERS[decapStep]?.num} · ${LAYERS[decapStep]?.name}…`;
    return "✓ Mensaje recibido. Los datos llegaron intactos a la capa 7.";
  };

  const statusClass = { idle: "", encapsulating: "enc", transmitting: "tx", decapsulating: "dec", done: "done" }[phase];

  // Datos para el DataBlock izquierdo: cuántas cabeceras hay apiladas
  const leftDataCount  = phase !== "idle" ? encapStep + 1 : 0;
  // Datos para el DataBlock derecho
  const rightDataCount = phase === "decapsulating" ? decapStep + 1 : phase === "done" ? 1 : 0;

  // ── Desktop layout (3 columnas, el original) ──────────────────────────────
  if (!isMobile) {
    return (
      <div style={{ fontFamily: "'IBM Plex Mono', 'Fira Code', monospace", background: "#0a0e1a", color: "#e0e8ff", padding: 24, borderRadius: 16, maxWidth: 760, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#5a6a9a", textTransform: "uppercase" }}>Visualización</span>
          <h2 style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 700, color: "#e0e8ff" }}>OSI — Encapsulación y desencapsulación</h2>
        </div>
        <div style={{ fontSize: 11, color: phase === "idle" ? "#3a4a6a" : phase === "encapsulating" ? "#3A8DFF" : phase === "transmitting" ? "#FFD700" : "#00FFBF", marginBottom: 14, minHeight: 18 }}>
          {statusText()}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 1fr", gap: 8, marginBottom: 14 }}>
          {/* LEFT */}
          <div>
            <div style={{ fontSize: 9, color: "#5a6a9a", letterSpacing: "0.12em", marginBottom: 8, textAlign: "center" }}>ORIGEN · ENCAPSULACIÓN ↓</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {LAYERS.map((layer, i) => (
                <LayerRow key={layer.num} layer={layer}
                  active={phase === "encapsulating" && encapStep === i}
                  revealed={encapStep >= i && phase !== "idle"}
                  stripping={false}
                  onClick={() => setSelectedLeft(selectedLeft?.num === layer.num ? null : layer)}
                />
              ))}
            </div>
            {encapStep >= 0 && <DataBlock count={encapStep + 1} />}
            {selectedLeft && <LayerDetail layer={selectedLeft} onClose={() => setSelectedLeft(null)} />}
          </div>
          {/* CENTER */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: "0 4px" }}>
            <div style={{ fontSize: 8, color: "#3a4a6a", letterSpacing: "0.1em" }}>MEDIO FÍSICO</div>
            <div style={{ position: "relative", width: "80%", height: 6, borderRadius: 3, background: "#1e2840", overflow: "hidden" }}>
              {phase === "transmitting" && (
                <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${txProgress}%`, background: "linear-gradient(90deg,#FF5C5C,#FFD700)", borderRadius: 3, transition: "width 0.05s linear" }} />
              )}
              {(phase === "done" || phase === "decapsulating") && (
                <div style={{ position: "absolute", inset: 0, background: "#00FFBF30", borderRadius: 3 }} />
              )}
            </div>
            {phase === "transmitting" && (
              <div style={{ fontSize: 7, color: "#FFD70060", textAlign: "center", letterSpacing: "0.15em", lineHeight: 1.6 }}>01001011{"\n"}11010010</div>
            )}
            <button
              onClick={phase === "idle" || phase === "done" ? start : reset}
              style={{ background: phase === "idle" || phase === "done" ? "#3A8DFF" : "#1e2840", color: phase === "idle" || phase === "done" ? "#fff" : "#5a6a9a", border: "none", borderRadius: 8, padding: "8px 10px", fontSize: 11, fontFamily: "inherit", fontWeight: 700, cursor: "pointer", width: "100%" }}
            >
              {phase === "idle" ? "▶ Iniciar" : phase === "done" ? "↺ Repetir" : "✕ Reset"}
            </button>
          </div>
          {/* RIGHT */}
          <div>
            <div style={{ fontSize: 9, color: "#5a6a9a", letterSpacing: "0.12em", marginBottom: 8, textAlign: "center" }}>DESTINO · DESENCAPSULACIÓN ↑</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {LAYERS.map((layer, i) => {
                const revealedRight = phase === "decapsulating" ? i >= decapStep : phase === "done";
                const activeRight   = phase === "decapsulating" && decapStep === i;
                return (
                  <LayerRow key={layer.num} layer={layer}
                    active={activeRight} revealed={revealedRight}
                    stripping={activeRight && i > 0}
                    onClick={() => setSelectedRight(selectedRight?.num === layer.num ? null : layer)}
                  />
                );
              })}
            </div>
            {phase === "decapsulating" && decapStep >= 0 && <DataBlock count={decapStep + 1} />}
            {selectedRight && <LayerDetail layer={selectedRight} onClose={() => setSelectedRight(null)} />}
          </div>
        </div>
        <RefTable />
        <div style={{ marginTop: 12, fontSize: 11, color: "#3a4a6a", lineHeight: 1.6 }}>
          Cada capa añade su cabecera al bajar (encapsulación) y la retira al subir (desencapsulación).
        </div>
      </div>
    );
  }

  // ── Mobile layout (una sola columna) ─────────────────────────────────────
  const showDest = phase === "decapsulating" || phase === "done";

  return (
    <div style={{ fontFamily: "'IBM Plex Mono', 'Fira Code', monospace", background: "#0d0d0d", color: "#e0e8ff", padding: "20px 16px", borderRadius: 16 }}>
      {/* Header */}
      <div style={{ marginBottom: 12 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.16em", color: "#5a6a9a", textTransform: "uppercase" }}>Visualización</span>
        <h2 style={{ margin: "4px 0 0", fontSize: 16, fontWeight: 700, color: "#e0e8ff", lineHeight: 1.3 }}>OSI — Encapsulación</h2>
      </div>

      {/* Status */}
      <div style={{ fontSize: 11, color: phase === "idle" ? "#3a4a6a" : phase === "encapsulating" ? "#3A8DFF" : phase === "transmitting" ? "#FFD700" : "#00FFBF", marginBottom: 12, minHeight: 32, lineHeight: 1.5 }}>
        {statusText()}
      </div>

      {/* Botón de control */}
      <button
        onClick={phase === "idle" || phase === "done" ? start : reset}
        style={{
          width: "100%", minHeight: 44, background: phase === "idle" || phase === "done" ? "#3A8DFF" : "#1e2840",
          color: phase === "idle" || phase === "done" ? "#fff" : "#5a6a9a",
          border: "none", borderRadius: 10, fontSize: 13, fontFamily: "inherit", fontWeight: 700, cursor: "pointer", marginBottom: 16,
        }}
      >
        {phase === "idle" ? "▶ Iniciar" : phase === "done" ? "↺ Repetir" : "✕ Reset"}
      </button>

      {/* ORIGEN */}
      <LayerStack
        label="Origen · Encapsulación"
        direction="down"
        activeIdx={encapStep}
        revealedCount={encapStep}
        phase={phase}
        phaseLocal={phase === "encapsulating" || phase === "transmitting" ? "enc" : phase === "idle" ? "idle" : "enc"}
        dataCount={leftDataCount}
        onLayerClick={l => setSelectedLeft(selectedLeft?.num === l.num ? null : l)}
        selectedLayer={selectedLeft}
        onCloseDetail={() => setSelectedLeft(null)}
      />

      {/* Separador de transmisión */}
      <TransmitDivider progress={txProgress} active={phase === "transmitting"} />

      {/* DESTINO — solo aparece en decapsulación / done */}
      {showDest && (
        <LayerStack
          label="Destino · Desencapsulación"
          direction="up"
          activeIdx={decapStep}
          revealedCount={0}
          phase={phase}
          phaseLocal={phase === "decapsulating" ? "dec" : "done"}
          dataCount={rightDataCount}
          onLayerClick={l => setSelectedRight(selectedRight?.num === l.num ? null : l)}
          selectedLayer={selectedRight}
          onCloseDetail={() => setSelectedRight(null)}
        />
      )}

      {/* Tabla colapsable */}
      <RefTable />

      <div style={{ marginTop: 12, fontSize: 10, color: "#3a4a6a", lineHeight: 1.6 }}>
        Cada capa añade su cabecera al bajar y la retira al subir.
      </div>
    </div>
  );
}