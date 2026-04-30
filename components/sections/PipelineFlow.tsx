"use client";

import { useState, useEffect, useRef } from "react";

type Stage = {
  id: string;
  cmd: string;
  label: string;
  color: string;
  icon: string;
  stdin: string;
  stdout: string;
  description: string;
  detail: string;
};

const PIPELINES: {
  title: string;
  description: string;
  stages: Stage[];
}[] = [
  {
    title: "Analizar errores 404",
    description: "Lee un log de nginx, extrae los 404 y cuenta cuáles URLs fallan más.",
    stages: [
      {
        id: "cat",
        cmd: "cat access.log",
        label: "Leer archivo",
        color: "#4A9EFF",
        icon: "📄",
        stdin: "— (archivo en disco)",
        stdout: `192.168.1.1 - GET /api/users 200
10.0.0.2 - GET /favicon.ico 404
10.0.0.5 - GET /api/data 200
10.0.0.2 - GET /favicon.ico 404
10.0.0.9 - GET /missing 404
192.168.1.1 - GET /api/users 200`,
        description: "Emite el archivo completo por stdout.",
        detail: "cat lee el archivo y lo vuelca línea a línea por stdout. No filtra ni transforma: solo emite. El pipe toma ese stdout y lo convierte en el stdin del siguiente comando.",
      },
      {
        id: "grep",
        cmd: "grep '404'",
        label: "Filtrar 404",
        color: "#FFB830",
        icon: "🔍",
        stdin: `192.168.1.1 - GET /api/users 200
10.0.0.2 - GET /favicon.ico 404
10.0.0.5 - GET /api/data 200
10.0.0.2 - GET /favicon.ico 404
10.0.0.9 - GET /missing 404
192.168.1.1 - GET /api/users 200`,
        stdout: `10.0.0.2 - GET /favicon.ico 404
10.0.0.2 - GET /favicon.ico 404
10.0.0.9 - GET /missing 404`,
        description: "Solo pasa las líneas que contienen '404'.",
        detail: "grep lee stdin línea a línea y solo emite las que coinciden con el patrón. Las demás se descartan. De 6 líneas entran 3 salen: el pipeline ya filtró el 50% del ruido.",
      },
      {
        id: "awk",
        cmd: "awk '{print $7}'",
        label: "Extraer URL",
        color: "#A855F7",
        icon: "✂️",
        stdin: `10.0.0.2 - GET /favicon.ico 404
10.0.0.2 - GET /favicon.ico 404
10.0.0.9 - GET /missing 404`,
        stdout: `/favicon.ico
/favicon.ico
/missing`,
        description: "Extrae solo el 7º campo de cada línea.",
        detail: "awk divide cada línea en campos separados por espacios. $7 es el séptimo: la URL. Descarta todo lo demás. Pasamos de líneas completas a solo lo que nos importa.",
      },
      {
        id: "sort",
        cmd: "sort",
        label: "Ordenar",
        color: "#FF9EFF",
        icon: "↕",
        stdin: `/favicon.ico
/favicon.ico
/missing`,
        stdout: `/favicon.ico
/favicon.ico
/missing`,
        description: "Ordena las líneas alfabéticamente.",
        detail: "sort necesita ver todas las líneas antes de emitir (no puede ordenar en streaming). Las agrupa para que las repetidas queden juntas — requisito de uniq en el siguiente paso.",
      },
      {
        id: "uniq",
        cmd: "uniq -c",
        label: "Contar únicos",
        color: "#00FFBF",
        icon: "#",
        stdin: `/favicon.ico
/favicon.ico
/missing`,
        stdout: `      2 /favicon.ico
      1 /missing`,
        description: "Colapsa duplicados y añade el conteo.",
        detail: "uniq -c cuenta cuántas veces aparece cada línea consecutiva. Por eso sort era necesario antes: uniq solo detecta duplicados adyacentes. Ahora cada URL tiene su frecuencia.",
      },
      {
        id: "sort2",
        cmd: "sort -rn",
        label: "Ordenar por frecuencia",
        color: "#FF5C5C",
        icon: "▼",
        stdin: `      2 /favicon.ico
      1 /missing`,
        stdout: `      2 /favicon.ico
      1 /missing`,
        description: "Ordena numéricamente de mayor a menor.",
        detail: "sort -r invierte el orden, -n trata los números como números (no como texto). Las URLs más fallidas quedan arriba. En un log real con miles de entradas, esto es la diferencia entre ver el problema o perderse en el ruido.",
      },
    ],
  },
  {
    title: "Buscar proceso por nombre",
    description: "Encuentra el PID de un proceso sin abrir htop.",
    stages: [
      {
        id: "ps",
        cmd: "ps aux",
        label: "Listar procesos",
        color: "#4A9EFF",
        icon: "⚙",
        stdin: "— (kernel: tabla de procesos)",
        stdout: `root         1  0.0  systemd
root       312  0.0  sshd
www-data   445  0.3  nginx
postgres   601  0.5  postgres
ana       1848  0.0  bash
ana       2041  2.1  top`,
        description: "Vuelca todos los procesos activos.",
        detail: "ps aux lee la tabla de procesos del kernel (vía /proc) y emite una línea por proceso. Sin filtrar es ruidoso: en producción pueden ser cientos de líneas.",
      },
      {
        id: "grep2",
        cmd: "grep 'nginx'",
        label: "Filtrar nginx",
        color: "#FFB830",
        icon: "🔍",
        stdin: `root         1  0.0  systemd
root       312  0.0  sshd
www-data   445  0.3  nginx
postgres   601  0.5  postgres
ana       1848  0.0  bash
ana       2041  2.1  top`,
        stdout: `www-data   445  0.3  nginx`,
        description: "Solo la línea de nginx.",
        detail: "grep filtra todo excepto la línea que contiene 'nginx'. De seis procesos a uno. Ahora el PID (445) es visible de inmediato sin scroll ni interfaz gráfica.",
      },
      {
        id: "awk2",
        cmd: "awk '{print $2}'",
        label: "Extraer PID",
        color: "#00FFBF",
        icon: "✂️",
        stdin: `www-data   445  0.3  nginx`,
        stdout: `445`,
        description: "Extrae solo el número de PID.",
        detail: "awk '{print $2}' imprime el segundo campo: el PID. La salida es un número limpio listo para usar en otro comando, como kill $(ps aux | grep nginx | awk '{print $2}').",
      },
    ],
  },
  {
    title: "Guardar y silenciar output",
    description: "Redirige stdout y stderr a distintos destinos.",
    stages: [
      {
        id: "cmd",
        cmd: "python3 deploy.py",
        label: "Script de deploy",
        color: "#4A9EFF",
        icon: "🐍",
        stdin: "— (argumentos del script)",
        stdout: `Connecting to server...
Uploading build/
Deploy complete. v2.4.1 live.`,
        description: "Emite logs por stdout y errores por stderr.",
        detail: "Un proceso tiene dos canales de salida separados: stdout para resultados normales y stderr para errores. Por defecto ambos aparecen mezclados en la terminal. La redirección los separa.",
      },
      {
        id: "stdout-redir",
        cmd: "> deploy.log",
        label: "stdout → archivo",
        color: "#00FFBF",
        icon: "▶",
        stdin: `Connecting to server...
Uploading build/
Deploy complete. v2.4.1 live.`,
        stdout: `[deploy.log]
Connecting to server...
Uploading build/
Deploy complete. v2.4.1 live.`,
        description: "> redirige stdout al archivo deploy.log.",
        detail: "> sobreescribe el archivo (>> lo añadiría). El stdout ya no va a la terminal: va al archivo. La terminal queda limpia. El log queda persistente para auditoría.",
      },
      {
        id: "stderr-redir",
        cmd: "2> errors.log",
        label: "stderr → archivo",
        color: "#FF5C5C",
        icon: "⚠",
        stdin: `[stderr del proceso]
FileNotFoundError: config.yml not found`,
        stdout: `[errors.log]
FileNotFoundError: config.yml not found`,
        description: "2> redirige stderr a un archivo separado.",
        detail: "El descriptor 2 es stderr. Con 2> lo mandas a su propio archivo. Ahora tienes logs limpios en deploy.log y errores aislados en errors.log. Combinado: comando > out.log 2> err.log.",
      },
    ],
  },
];

const OPERATOR_COLOR = "rgba(255,255,255,0.25)";

function DataStream({ active, color }: { active: boolean; color: string }) {
  return (
    <div className="flex items-center justify-center" style={{ width: 32, flexShrink: 0 }}>
      <div
        className="relative flex items-center"
        style={{ width: 32, height: 2, background: active ? `${color}40` : "rgba(255,255,255,0.06)", borderRadius: 1 }}
      >
        {active && (
          <>
            <div
              className="absolute h-full rounded-full"
              style={{
                width: 10,
                background: color,
                animation: "streamFlow 0.9s linear infinite",
                boxShadow: `0 0 6px ${color}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -5,
                width: 0,
                height: 0,
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                borderLeft: `5px solid ${color}`,
                filter: `drop-shadow(0 0 3px ${color})`,
              }}
            />
          </>
        )}
        {!active && (
          <div
            style={{
              position: "absolute",
              right: -4,
              width: 0,
              height: 0,
              borderTop: "3px solid transparent",
              borderBottom: "3px solid transparent",
              borderLeft: "4px solid rgba(255,255,255,0.1)",
            }}
          />
        )}
      </div>
    </div>
  );
}

export function PipelineFlow() {
  const [pipelineIdx, setPipelineIdx] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [tab, setTab] = useState<"stdin" | "stdout">("stdout");
  const [animKey, setAnimKey] = useState(0);

  const pipeline = PIPELINES[pipelineIdx];
  const stage = pipeline.stages[activeStage];

  const selectStage = (idx: number) => {
    setActiveStage(idx);
    setTab("stdout");
    setAnimKey((k) => k + 1);
  };

  const selectPipeline = (idx: number) => {
    setPipelineIdx(idx);
    setActiveStage(0);
    setTab("stdout");
    setAnimKey((k) => k + 1);
  };

  return (
    <div
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden"
      style={{
        background: "#0d0d14",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
        fontFamily: "'SF Mono', 'Fira Code', monospace",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#10101a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5C5C" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFB830" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#00FFBF" }} />
        <span className="ml-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          bash — pipeline interactivo
        </span>
      </div>

      {/* Pipeline selector */}
      <div
        className="flex gap-1 p-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0a0a10" }}
      >
        {PIPELINES.map((p, i) => (
          <button
            key={i}
            onClick={() => selectPipeline(i)}
            className="flex-1 text-xs py-1.5 px-2 rounded-md transition-all duration-200 truncate"
            style={{
              background: pipelineIdx === i ? "rgba(255,255,255,0.08)" : "transparent",
              color: pipelineIdx === i ? "#e0e0f0" : "rgba(255,255,255,0.3)",
              border: `1px solid ${pipelineIdx === i ? "rgba(255,255,255,0.12)" : "transparent"}`,
              fontSize: 10,
            }}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Pipeline description */}
      <div className="px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          {pipeline.description}
        </p>
      </div>

      {/* Stage nodes — horizontal scroll */}
      <div className="px-3 py-4 overflow-x-auto no-scrollbar" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center" style={{ minWidth: "max-content", gap: 0 }}>
          {pipeline.stages.map((s, idx) => {
            const isActive = idx === activeStage;
            const isPast = idx < activeStage;
            const isLast = idx === pipeline.stages.length - 1;

            return (
              <div key={s.id} className="flex items-center">
                {/* Node */}
                <button
                  onClick={() => selectStage(idx)}
                  className="flex flex-col items-center gap-1 transition-all duration-200"
                  style={{ minWidth: 56 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300"
                    style={{
                      background: isActive
                        ? `${s.color}22`
                        : isPast
                        ? `${s.color}10`
                        : "rgba(255,255,255,0.04)",
                      border: `1px solid ${isActive ? s.color + "60" : isPast ? s.color + "25" : "rgba(255,255,255,0.08)"}`,
                      boxShadow: isActive ? `0 0 16px ${s.color}40` : "none",
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{s.icon}</span>
                  </div>
                  <span
                    className="text-center leading-tight"
                    style={{
                      color: isActive ? s.color : isPast ? `${s.color}80` : "rgba(255,255,255,0.2)",
                      fontSize: 9,
                      maxWidth: 52,
                    }}
                  >
                    {s.label}
                  </span>
                </button>

                {/* Pipe connector */}
                {!isLast && (
                  <div className="flex flex-col items-center mx-0.5" style={{ marginTop: -14 }}>
                    <span style={{ color: OPERATOR_COLOR, fontSize: 10, lineHeight: 1 }}>|</span>
                    <DataStream active={isPast || isActive} color={s.color} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Command display */}
      <div className="px-4 pt-3 pb-1">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-lg"
          style={{ background: "rgba(0,0,0,0.4)", border: `1px solid ${stage.color}30` }}
        >
          <span style={{ color: "#00FFBF", fontSize: 12 }}>$</span>
          <span
            className="text-sm font-bold"
            style={{ color: stage.color }}
          >
            {stage.cmd}
          </span>
        </div>
        <p className="text-xs mt-1.5 px-1" style={{ color: "rgba(255,255,255,0.35)" }}>
          {stage.description}
        </p>
      </div>

      {/* stdin / stdout tabs */}
      <div className="px-4 pt-2">
        <div className="flex gap-1 mb-2">
          {(["stdin", "stdout"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="text-xs px-3 py-1 rounded-md transition-all duration-200"
              style={{
                background: tab === t ? (t === "stdin" ? "#4A9EFF18" : `${stage.color}18`) : "transparent",
                color:
                  tab === t
                    ? t === "stdin"
                      ? "#4A9EFF"
                      : stage.color
                    : "rgba(255,255,255,0.25)",
                border: `1px solid ${tab === t ? (t === "stdin" ? "#4A9EFF40" : stage.color + "40") : "rgba(255,255,255,0.07)"}`,
              }}
            >
              {t === "stdin" ? "← stdin" : "stdout →"}
            </button>
          ))}
        </div>

        {/* Data display */}
        <div
          key={`${animKey}-${tab}`}
          className="rounded-lg p-3 overflow-auto no-scrollbar"
          style={{
            background: "rgba(0,0,0,0.35)",
            border: `1px solid ${tab === "stdin" ? "#4A9EFF20" : stage.color + "20"}`,
            minHeight: 80,
            maxHeight: 110,
            animation: "fadeUp 0.2s ease forwards",
          }}
        >
          <pre
            className="text-xs leading-relaxed whitespace-pre-wrap"
            style={{ color: tab === "stdin" ? "#6699cc" : `${stage.color}cc`, margin: 0 }}
          >
            {tab === "stdin" ? stage.stdin : stage.stdout}
          </pre>
        </div>
      </div>

      {/* Detail */}
      <div
        key={`detail-${animKey}`}
        className="px-4 py-3 mt-1"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          animation: "fadeUp 0.25s ease forwards",
        }}
      >
        <p className="text-xs leading-relaxed" style={{ color: "#8888aa" }}>
          {stage.detail}
        </p>
      </div>

      {/* Footer nav */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a10" }}
      >
        <button
          onClick={() => selectStage(Math.max(0, activeStage - 1))}
          disabled={activeStage === 0}
          className="text-xs px-3 py-1.5 rounded-lg transition-all"
          style={{
            background: activeStage === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.06)",
            color: activeStage === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.06)",
            cursor: activeStage === 0 ? "not-allowed" : "pointer",
          }}
        >
          ← Anterior
        </button>

        <div className="flex gap-1.5 items-center">
          {pipeline.stages.map((s, i) => (
            <button
              key={i}
              onClick={() => selectStage(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeStage ? 18 : 5,
                height: 5,
                background:
                  i === activeStage
                    ? stage.color
                    : i < activeStage
                    ? `${pipeline.stages[i].color}50`
                    : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => selectStage(Math.min(pipeline.stages.length - 1, activeStage + 1))}
          disabled={activeStage === pipeline.stages.length - 1}
          className="text-xs px-3 py-1.5 rounded-lg transition-all"
          style={{
            background:
              activeStage === pipeline.stages.length - 1
                ? "rgba(255,255,255,0.02)"
                : "rgba(255,255,255,0.06)",
            color:
              activeStage === pipeline.stages.length - 1
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.06)",
            cursor: activeStage === pipeline.stages.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          Siguiente →
        </button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes streamFlow {
          from { left: -10px; }
          to   { left: calc(100% + 10px); }
        }
      `}</style>
    </div>
  );
}