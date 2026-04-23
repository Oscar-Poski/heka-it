"use client";

import { useState, useCallback } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type StepId = 0 | 1 | 2 | 3 | 4;

interface StepDef {
  title: string;
  desc: string;
  tcp: LaneState;
  udp: LaneState;
}

interface LaneState {
  packetX: number;       // 0–100 (porcentaje del track)
  packetStatus: "idle" | "traveling" | "lost" | "retransmit" | "delivered";
  ackX?: number;         // 0–100, solo TCP en paso 5
  showAck?: boolean;
}

// ---------------------------------------------------------------------------
// Steps
// ---------------------------------------------------------------------------

const STEPS: StepDef[] = [
  {
    title: "Envío inicial",
    desc: "Ambos protocolos envían un paquete al destino.",
    tcp: { packetX: 15, packetStatus: "traveling" },
    udp: { packetX: 15, packetStatus: "traveling" },
  },
  {
    title: "En tránsito",
    desc: "Los paquetes viajan por la red. Hasta aquí el comportamiento es idéntico.",
    tcp: { packetX: 45, packetStatus: "traveling" },
    udp: { packetX: 45, packetStatus: "traveling" },
  },
  {
    title: "Pérdida de paquete",
    desc: "Un fallo en la red interrumpe ambos paquetes. TCP lo detecta; UDP no.",
    tcp: { packetX: 62, packetStatus: "lost" },
    udp: { packetX: 62, packetStatus: "lost" },
  },
  {
    title: "Respuesta al fallo",
    desc: "TCP retransmite el paquete perdido. UDP simplemente lo descarta y sigue.",
    tcp: { packetX: 30, packetStatus: "retransmit" },
    udp: { packetX: 0, packetStatus: "idle" },
  },
  {
    title: "Entrega y confirmación",
    desc: "TCP entrega el paquete y recibe un ACK. UDP no tiene confirmación de entrega.",
    tcp: { packetX: 100, packetStatus: "delivered", showAck: true, ackX: 60 },
    udp: { packetX: 0, packetStatus: "idle" },
  },
];

// ---------------------------------------------------------------------------
// Lane component
// ---------------------------------------------------------------------------

interface LaneProps {
  proto: "TCP" | "UDP";
  state: LaneState;
  animating: boolean;
}

function Lane({ proto, state, animating }: LaneProps) {
  const isTcp = proto === "TCP";

  const protoColor = isTcp
    ? "text-blue-500 dark:text-blue-400"
    : "text-emerald-500 dark:text-emerald-400";

  const trackBg = "bg-neutral-100 dark:bg-neutral-800";

  const packetColor =
    state.packetStatus === "lost"
      ? "bg-red-400 dark:bg-red-500 border-red-500 dark:border-red-400"
      : state.packetStatus === "retransmit"
      ? "bg-amber-400 dark:bg-amber-500 border-amber-500 dark:border-amber-400"
      : state.packetStatus === "delivered"
      ? isTcp
        ? "bg-blue-400 dark:bg-blue-500 border-blue-500 dark:border-blue-400"
        : "bg-emerald-400 dark:bg-emerald-500 border-emerald-500 dark:border-emerald-400"
      : isTcp
      ? "bg-blue-400 dark:bg-blue-500 border-blue-500 dark:border-blue-400"
      : "bg-emerald-400 dark:bg-emerald-500 border-emerald-500 dark:border-emerald-400";

  const packetLabel =
    state.packetStatus === "lost"
      ? "✕"
      : state.packetStatus === "retransmit"
      ? "↩ RET"
      : state.packetStatus === "delivered"
      ? "✓"
      : "PKT";

  const showPacket = state.packetStatus !== "idle";

  const statusLabel: Record<LaneState["packetStatus"], string> = {
    idle:        isTcp ? "— sin reenvío" : "— descartado",
    traveling:   "en tránsito",
    lost:        "paquete perdido",
    retransmit:  "retransmitiendo",
    delivered:   "entregado",
  };

  const statusColor: Record<LaneState["packetStatus"], string> = {
    idle:       "text-neutral-400 dark:text-neutral-500",
    traveling:  "text-neutral-500 dark:text-neutral-400",
    lost:       "text-red-500 dark:text-red-400",
    retransmit: "text-amber-500 dark:text-amber-400",
    delivered:  isTcp ? "text-blue-500 dark:text-blue-400" : "text-emerald-500 dark:text-emerald-400",
  };

  return (
    <div className="mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className={`text-[13px] font-medium ${protoColor}`}>{proto}</span>
        <span className={`text-[11px] ${statusColor[state.packetStatus]}`}>
          {statusLabel[state.packetStatus]}
        </span>
      </div>

      {/* Track */}
      <div className={`relative h-9 rounded-lg ${trackBg} overflow-hidden`}>
        {/* Origin node */}
        <div className="absolute left-0 top-0 bottom-0 w-9 flex items-center justify-center
          bg-neutral-200 dark:bg-neutral-700 z-10">
          <span className="text-[9px] text-neutral-500 dark:text-neutral-400 font-medium leading-none text-center">TX</span>
        </div>

        {/* Destination node */}
        <div className="absolute right-0 top-0 bottom-0 w-9 flex items-center justify-center
          bg-neutral-200 dark:bg-neutral-700 z-10">
          <span className="text-[9px] text-neutral-500 dark:text-neutral-400 font-medium leading-none text-center">RX</span>
        </div>

        {/* Track line */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-px bg-neutral-300 dark:bg-neutral-600" />

        {/* Packet */}
        {showPacket && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/5
              w-9 h-6 rounded border flex items-center justify-center
              text-[9px] font-medium text-white
              transition-all duration-500 ease-in-out z-20
              ${packetColor}
              ${animating ? "" : "transition-none"}`}
            style={{
              left: `calc(${state.packetX}% * (100% - 48px) / 100 + 24px)`,
            }}
          >
            {packetLabel}
          </div>
        )}

        {/* ACK packet (TCP only) */}
        {state.showAck && state.ackX !== undefined && (
          <div
            className="absolute top-1/2 -translate-y-1/5 -translate-x-1/5
              w-9 h-5 rounded border border-yellow-400 dark:border-yellow-500
              bg-yellow-400/20 dark:bg-yellow-500/20
              flex items-center justify-center
              text-[8px] font-medium text-yellow-600 dark:text-yellow-400
              transition-all duration-500 ease-in-out z-20"
            style={{
              left: `calc(${state.ackX}% * (100% - 48px) / 100 + 24px)`,
            }}
          >
            ACK
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function TcpUdpCompare() {
  const [stepIdx, setStepIdx] = useState<number>(-1);
  const [animating, setAnimating] = useState(false);

  const started = stepIdx >= 0;
  const isFinished = stepIdx >= STEPS.length - 1;
  const currentStep = stepIdx >= 0 ? STEPS[stepIdx] : null;

  const handleStart = useCallback(() => {
    setAnimating(true);
    setStepIdx(0);
    setTimeout(() => setAnimating(false), 520);
  }, []);

  const handleNext = useCallback(() => {
    if (animating || isFinished) return;
    setAnimating(true);
    setStepIdx((i) => i + 1);
    setTimeout(() => setAnimating(false), 520);
  }, [animating, isFinished]);

  const handleReset = useCallback(() => {
    setStepIdx(-1);
    setAnimating(false);
  }, []);

  const progress = stepIdx < 0 ? 0 : Math.round(((stepIdx + 1) / STEPS.length) * 100);

  return (
    <div className="font-sans py-4 select-none max-w-sm mx-auto">

      {/* Lane visualizations */}
      <div className="mb-4">
        <Lane
          proto="TCP"
          state={currentStep?.tcp ?? { packetX: 0, packetStatus: "idle" }}
          animating={animating}
        />
        <Lane
          proto="UDP"
          state={currentStep?.udp ?? { packetX: 0, packetStatus: "idle" }}
          animating={animating}
        />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
        {[
          { color: "bg-blue-400 dark:bg-blue-500",    label: "TCP" },
          { color: "bg-emerald-400 dark:bg-emerald-500", label: "UDP" },
          { color: "bg-red-400 dark:bg-red-500",      label: "Perdido" },
          { color: "bg-amber-400 dark:bg-amber-500",  label: "Retransmisión" },
          { color: "bg-yellow-400/30 border border-yellow-400 dark:border-yellow-500", label: "ACK" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-sm ${l.color}`} />
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-700
        bg-neutral-50 dark:bg-neutral-900/60 p-3 min-h-[72px] mb-3">
        {currentStep ? (
          <>
            <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500
              uppercase tracking-wide mb-1">
              Paso {stepIdx + 1} de {STEPS.length}
            </p>
            <p className="text-[13px] font-medium text-neutral-800 dark:text-neutral-100 mb-1">
              {currentStep.title}
            </p>
            <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {currentStep.desc}
            </p>
          </>
        ) : (
          <>
            <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500
              uppercase tracking-wide mb-1">Listo</p>
            <p className="text-[13px] font-medium text-neutral-800 dark:text-neutral-100 mb-1">
              Comparación TCP vs UDP
            </p>
            <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Presiona Iniciar para ver cómo cada protocolo maneja la pérdida de paquetes.
            </p>
          </>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        {!started ? (
          <button
            onClick={handleStart}
            className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700
              bg-white dark:bg-neutral-900 text-sm text-neutral-700 dark:text-neutral-200
              hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap"
          >
            Iniciar ↗
          </button>
        ) : (
          <>
            <button
              onClick={handleNext}
              disabled={animating || isFinished}
              className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700
                bg-white dark:bg-neutral-900 text-sm text-neutral-700 dark:text-neutral-200
                hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700
                bg-white dark:bg-neutral-900 text-sm text-neutral-400 dark:text-neutral-500
                hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              ↺
            </button>
          </>
        )}

        {/* Progress bar */}
        <div className="flex-1 h-[3px] rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-400 dark:bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[11px] text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
          {stepIdx < 0 ? 0 : stepIdx + 1} / {STEPS.length}
        </span>
      </div>
    </div>
  );
}

export default TcpUdpCompare;