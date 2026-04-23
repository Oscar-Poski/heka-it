"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 30,  y: 80,  label: "Origen"   },
  { x: 120, y: 40,  label: "Router 1" },
  { x: 210, y: 120, label: "Router 2" },
  { x: 300, y: 80,  label: "Destino"  },
];

const xs = NODES.map((n) => n.x);
const ys = NODES.map((n) => n.y);

// Keyframes: 0% → nodo 0, 33% → nodo 1, 66% → nodo 2, 100% → nodo 3
const times = [0, 0.33, 0.66, 1];

export function PacketJourney() {
  return (
    <div className="rounded-card border border-border bg-surface p-3">
      <svg
        viewBox="0 0 330 160"
        className="w-full h-auto"
        role="img"
        aria-label="Paquete viajando entre nodos de la red"
      >
        {/* Líneas de conexión */}
        {NODES.slice(0, -1).map((n, i) => {
          const next = NODES[i + 1];
          return (
            <line
              key={i}
              x1={n.x} y1={n.y}
              x2={next.x} y2={next.y}
              stroke="#1e1e2e"
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Trail animado — se dibuja una sola vez al entrar al viewport */}
        <motion.path
          d={`M${NODES.map((n) => `${n.x} ${n.y}`).join(" L ")}`}
          fill="none"
          stroke="#00FFBF"
          strokeOpacity={0.25}
          strokeWidth={1.5}
          strokeDasharray="2 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2.2, ease: "linear" }}
        />

        {/* Nodos */}
        {NODES.map((n, i) => {
          const isEnd = i === 0 || i === NODES.length - 1;
          return (
            <g key={i}>
              <circle
                cx={n.x} cy={n.y}
                r={isEnd ? 9 : 7}
                fill={isEnd ? "#00FFBF" : "#13131e"}
                stroke={isEnd ? "#00FFBF" : "#2a2a3a"}
                strokeWidth={1.5}
              />
              <text
                x={n.x}
                y={n.y + (n.y > 80 ? 22 : -14)}
                fontSize={9}
                fill="#666"
                textAnchor="middle"
                style={{ fontFamily: "system-ui" }}
              >
                {n.label}
              </text>
            </g>
          );
        })}

        {/* Paquete viajando en loop infinito */}
        <motion.rect
          x={-5} y={-4}
          width={10} height={8}
          rx={1.5}
          fill="#00FFBF"
          stroke="#0a0a0f"
          strokeWidth={1}
          animate={{
            attrX: xs.map((x) => x - 5),
            attrY: ys.map((y) => y - 4),
          }}
          transition={{
            duration: 3.2,
            ease: "linear",
            times,
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
        />
      </svg>
    </div>
  );
}