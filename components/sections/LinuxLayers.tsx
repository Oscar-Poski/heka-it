import { useState, useEffect, useRef } from "react";

const LAYERS = [
  {
    id: "userspace",
    label: "Espacio de usuario",
    sublabel: "Tus apps",
    color: "#00C896",
    bg: "#00C89612",
    border: "#00C89640",
    apps: ["Firefox", "nginx", "Python", "bash", "MySQL"],
    desc: "Aquí viven todos tus programas. Cada proceso tiene memoria aislada — si uno falla, no puede dañar a los demás. Para tocar el hardware, tienen que pedírselo al kernel.",
  },
  {
    id: "shell",
    label: "Shell",
    sublabel: "Terminal",
    color: "#4A9EFF",
    bg: "#4A9EFF12",
    border: "#4A9EFF40",
    apps: ["bash", "zsh", "fish"],
    desc: "Una app más del espacio de usuario. Interpreta lo que escribes, lo convierte en llamadas al sistema y muestra el resultado. Es el puente entre el humano y el kernel.",
  },
  {
    id: "kernel",
    label: "Kernel",
    sublabel: "El núcleo",
    color: "#FF5C5C",
    bg: "#FF5C5C12",
    border: "#FF5C5C40",
    apps: ["Scheduler", "Memoria", "FS", "Red", "Drivers"],
    desc: "El corazón de Linux. Ninguna app toca el hardware directamente — todo pasa por aquí. Decide qué proceso usa la CPU, gestiona la RAM y habla con cada dispositivo.",
  },
  {
    id: "hardware",
    label: "Hardware",
    sublabel: "Lo físico",
    color: "#888780",
    bg: "#88878012",
    border: "#88878040",
    apps: ["CPU", "RAM", "SSD", "NIC", "GPU"],
    desc: "Los componentes físicos. Solo el kernel puede hablarles, a través de drivers. Las apps nunca ven el hardware real — ven la abstracción que el kernel ofrece.",
  },
];

const SYSCALL_STEPS = [
  { label: "App llama read(\"datos.txt\")", layer: 0, dir: "down" },
  { label: "Kernel recibe la syscall", layer: 2, dir: "down" },
  { label: "Kernel accede al disco", layer: 3, dir: null },
  { label: "Disco devuelve los datos", layer: 2, dir: "up" },
  { label: "Kernel entrega datos a la app ✓", layer: 0, dir: null },
];

export function LinuxLayers() {
  const [active, setActive] = useState(null);
  const [syscallStep, setSyscallStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const timerRef = useRef([]);

  function toggleLayer(id) {
    setActive((prev) => (prev === id ? null : id));
  }

  function clearTimers() {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  }

  function runSyscall() {
    if (running) return;
    setRunning(true);
    setSyscallStep(0);
    clearTimers();
    SYSCALL_STEPS.forEach((_, i) => {
      const t = setTimeout(() => {
        setSyscallStep(i);
        if (i === SYSCALL_STEPS.length - 1) {
          const end = setTimeout(() => {
            setSyscallStep(-1);
            setRunning(false);
          }, 1800);
          timerRef.current.push(end);
        }
      }, i * 900);
      timerRef.current.push(t);
    });
  }

  useEffect(() => () => clearTimers(), []);

  const activeLayer = LAYERS.find((l) => l.id === active);

  return (
    <div style={{
      fontFamily: "'IBM Plex Mono', monospace",
      background: "#0d0d0f",
      minHeight: "100vh",
      padding: "20px 16px 40px",
      boxSizing: "border-box",
      color: "#e0dfd8",
    }}>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: "#f0efe8" }}>
          Capas del sistema
        </h1>
        <p style={{ margin: "6px 0 0", fontSize: 13, color: "#666", lineHeight: 1.5 }}>
          Toca cada capa para explorarla
        </p>
      </div>

      {/* Stack */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 28 }}>
        {LAYERS.map((layer, i) => {
          const isActive = active === layer.id;
          const isHighlighted = syscallStep >= 0 && SYSCALL_STEPS[syscallStep]?.layer === i;
          return (
            <div key={layer.id}>
              <button
                onClick={() => toggleLayer(layer.id)}
                style={{
                  width: "100%",
                  background: isHighlighted ? layer.bg.replace("12", "28") : isActive ? layer.bg : "#16161a",
                  border: `1px solid ${isHighlighted ? layer.color + "80" : isActive ? layer.border : "#2a2a2e"}`,
                  borderRadius: 10,
                  padding: "14px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "all 0.22s ease",
                  textAlign: "left",
                  outline: "none",
                  transform: isHighlighted ? "scale(1.01)" : "scale(1)",
                }}
              >
                {/* Dot */}
                <div style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: layer.color,
                  flexShrink: 0,
                  boxShadow: isHighlighted ? `0 0 10px ${layer.color}` : "none",
                  transition: "box-shadow 0.3s",
                }} />

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#f0efe8", letterSpacing: "-0.01em" }}>
                    {layer.label}
                  </div>
                  <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{layer.sublabel}</div>
                </div>

                {/* Chips preview */}
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 120 }}>
                  {layer.apps.slice(0, 3).map((a) => (
                    <span key={a} style={{
                      fontSize: 10,
                      padding: "2px 7px",
                      borderRadius: 4,
                      background: layer.bg,
                      border: `1px solid ${layer.border}`,
                      color: layer.color,
                      whiteSpace: "nowrap",
                    }}>{a}</span>
                  ))}
                </div>

                {/* Arrow */}
                <div style={{
                  fontSize: 12, color: "#444",
                  transition: "transform 0.2s",
                  transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                  flexShrink: 0,
                }}>▾</div>
              </button>

              {/* Expand panel */}
              <div style={{
                overflow: "hidden",
                maxHeight: isActive ? 240 : 0,
                transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}>
                <div style={{
                  background: "#13131a",
                  border: `1px solid ${layer.border}`,
                  borderTop: "none",
                  borderRadius: "0 0 10px 10px",
                  padding: "14px 16px 16px",
                }}>
                  <p style={{ margin: "0 0 12px", fontSize: 13, color: "#999", lineHeight: 1.65 }}>
                    {layer.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {layer.apps.map((a) => (
                      <span key={a} style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        borderRadius: 5,
                        background: layer.bg,
                        border: `1px solid ${layer.border}`,
                        color: layer.color,
                      }}>{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#1e1e24", marginBottom: 28 }} />

      {/* Syscall demo */}
      <div>
        <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "#555", textTransform: "uppercase", marginBottom: 12 }}>
          Simulación · Llamada al sistema
        </div>

        <p style={{ fontSize: 13, color: "#555", margin: "0 0 18px", lineHeight: 1.5 }}>
          Cuando una app lee un archivo, el control viaja por las capas y regresa.
        </p>

        {/* Step list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 20, position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 14, top: 14, bottom: 14,
            width: 1, background: "#1e1e24",
          }} />

          {SYSCALL_STEPS.map((step, i) => {
            const done = syscallStep > i;
            const current = syscallStep === i;
            const layerColor = LAYERS[step.layer].color;
            return (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "10px 0",
                position: "relative",
              }}>
                {/* Circle */}
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: current ? layerColor : done ? layerColor + "30" : "#16161a",
                  border: `1px solid ${current ? layerColor : done ? layerColor + "60" : "#2a2a2e"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, color: current ? "#0d0d0f" : done ? layerColor : "#333",
                  fontWeight: 700,
                  transition: "all 0.3s ease",
                  zIndex: 1,
                  boxShadow: current ? `0 0 12px ${layerColor}60` : "none",
                }}>
                  {done ? "✓" : i + 1}
                </div>

                {/* Text */}
                <div style={{
                  fontSize: 13,
                  color: current ? "#f0efe8" : done ? "#666" : "#3a3a44",
                  transition: "color 0.3s",
                  lineHeight: 1.4,
                }}>
                  <span style={{
                    fontSize: 10, color: LAYERS[step.layer].color,
                    opacity: current || done ? 1 : 0.3,
                    marginRight: 6,
                    transition: "opacity 0.3s",
                  }}>
                    [{LAYERS[step.layer].label.split(" ")[0].toLowerCase()}]
                  </span>
                  {step.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <button
          onClick={runSyscall}
          disabled={running}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: 10,
            border: running ? "1px solid #2a2a2e" : "1px solid #4A9EFF50",
            background: running ? "#16161a" : "#4A9EFF10",
            color: running ? "#333" : "#4A9EFF",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'IBM Plex Mono', monospace",
            cursor: running ? "not-allowed" : "pointer",
            letterSpacing: "0.05em",
            transition: "all 0.2s",
          }}
        >
          {running ? "ejecutando syscall..." : "▶  simular read()"}
        </button>
      </div>

    </div>
  );
}