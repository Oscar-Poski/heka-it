"use client";

import { useMemo, useState } from "react";
import { Snowflake, Flame, Sparkles } from "lucide-react";

const PROMPT = "Escribe un titular para un café nuevo llamado «Solera».";

type Preset = {
  rango: [number, number];
  etiqueta: string;
  icono: typeof Snowflake;
  color: string;
  outputs: string[];
  descripcion: string;
};

const PRESETS: Preset[] = [
  {
    rango: [0, 0.4],
    etiqueta: "Predecible",
    icono: Snowflake,
    color: "text-blue-600",
    descripcion: "Casi siempre da la misma respuesta. Útil para tareas factuales.",
    outputs: [
      "Solera: el mejor café de tu mañana.",
      "Solera — café de calidad, todos los días.",
      "Descubre Solera, tu nuevo café favorito.",
    ],
  },
  {
    rango: [0.4, 1.0],
    etiqueta: "Equilibrado",
    icono: Sparkles,
    color: "text-accent",
    descripcion: "Mezcla creatividad y coherencia. Es el rango por defecto.",
    outputs: [
      "Solera: el café que despierta tus mañanas con carácter.",
      "Cada taza de Solera cuenta una historia tostada a fuego lento.",
      "Solera — tradición en grano, sabor en taza.",
    ],
  },
  {
    rango: [1.0, 1.5],
    etiqueta: "Creativo",
    icono: Flame,
    color: "text-red-600",
    descripcion: "Respuestas inesperadas y arriesgadas. Puede divagar o ser brillante.",
    outputs: [
      "Solera: licor negro para almas que aún no han desayunado.",
      "Despierta al volcán dormido en tus venas. Solera.",
      "Si la mañana fuera un grito, Solera sería su eco.",
    ],
  },
];

function presetFor(temp: number): Preset {
  return PRESETS.find((p) => temp >= p.rango[0] && temp <= p.rango[1]) ?? PRESETS[1];
}

export function TemperatureSlider() {
  const [temp, setTemp] = useState(0.7);
  const preset = useMemo(() => presetFor(temp), [temp]);
  const Icono = preset.icono;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Prompt fijo */}
      <div className="mb-4">
        <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
          Prompt (fijo)
        </div>
        <div className="rounded-card border border-border bg-bg p-3 text-[13.5px] text-text-primary font-mono leading-relaxed">
          {PROMPT}
        </div>
      </div>

      {/* Slider */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wide">
            Temperature
          </span>
          <span className={`inline-flex items-center gap-1.5 text-[13px] font-semibold ${preset.color}`}>
            <Icono size={14} strokeWidth={2} />
            {temp.toFixed(1)} · {preset.etiqueta}
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={1.5}
          step={0.1}
          value={temp}
          onChange={(e) => setTemp(parseFloat(e.target.value))}
          className="w-full accent-accent"
        />
        <div className="flex justify-between text-[10.5px] text-text-dim mt-1">
          <span>0.0</span>
          <span>0.5</span>
          <span>1.0</span>
          <span>1.5</span>
        </div>

        <p className="mt-2 text-[12.5px] text-text-muted leading-relaxed">
          {preset.descripcion}
        </p>
      </div>

      {/* Outputs */}
      <div>
        <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-2">
          3 respuestas posibles a esta temperatura
        </div>
        <div className="space-y-2">
          {preset.outputs.map((out, i) => (
            <div
              key={i}
              className="rounded-card border border-border bg-bg p-3 text-[13.5px] text-text-primary leading-relaxed"
            >
              <span className="text-[10.5px] text-text-dim mr-2">#{i + 1}</span>
              {out}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
