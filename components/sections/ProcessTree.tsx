"use client";

import { useState } from "react";

type Process = {
  pid: number;
  name: string;
  user: string;
  state: "R" | "S" | "Z" | "T";
  cpu: number;
  mem: number;
  description: string;
  detail: string;
  color: string;
  children?: Process[];
};

const TREE: Process = {
  pid: 1,
  name: "systemd",
  user: "root",
  state: "S",
  cpu: 0.0,
  mem: 0.1,
  color: "#FF5C5C",
  description: "Proceso raíz del sistema",
  detail: "PID 1. El primer proceso que lanza el kernel al arrancar. Padre de todo. Si muere, el sistema entra en pánico. Gestiona servicios, sockets, timers y dependencias de arranque.",
  children: [
    {
      pid: 142,
      name: "journald",
      user: "root",
      state: "S",
      cpu: 0.1,
      mem: 0.4,
      color: "#4A9EFF",
      description: "Recolector de logs del sistema",
      detail: "Centraliza todos los logs del kernel y los servicios. Lo que ves con journalctl -f viene de aquí. Escribe en binario para poder filtrar por tiempo, servicio o prioridad.",
    },
    {
      pid: 198,
      name: "networkd",
      user: "root",
      state: "S",
      cpu: 0.0,
      mem: 0.2,
      color: "#4A9EFF",
      description: "Gestor de red",
      detail: "Configura interfaces de red, rutas y DNS. El equivalente moderno de ifconfig. En servidores cloud suele ser quien asigna la IP al arrancar.",
    },
    {
      pid: 312,
      name: "sshd",
      user: "root",
      state: "S",
      cpu: 0.0,
      mem: 0.3,
      color: "#FFB830",
      description: "Servidor SSH",
      detail: "Escucha en el puerto 22 esperando conexiones entrantes. Cuando alguien hace ssh usuario@servidor, este proceso gestiona la autenticación y lanza un hijo para esa sesión.",
      children: [
        {
          pid: 1847,
          name: "sshd: ana",
          user: "ana",
          state: "S",
          cpu: 0.0,
          mem: 0.2,
          color: "#FFB830",
          description: "Sesión SSH activa",
          detail: "Proceso hijo creado para la sesión del usuario 'ana'. Cada conexión SSH activa tiene su propio proceso. Si matas este proceso, la sesión de ana se cierra.",
          children: [
            {
              pid: 1848,
              name: "bash",
              user: "ana",
              state: "S",
              cpu: 0.0,
              mem: 0.5,
              color: "#00FFBF",
              description: "Shell interactiva de ana",
              detail: "La terminal de ana. Todos los comandos que ella ejecute serán hijos de este proceso. Su directorio de trabajo y variables de entorno definen el contexto de su sesión.",
              children: [
                {
                  pid: 2041,
                  name: "top",
                  user: "ana",
                  state: "R",
                  cpu: 2.1,
                  mem: 0.3,
                  color: "#00FFBF",
                  description: "Monitor de procesos",
                  detail: "Estado R: Running. Está usando CPU activamente ahora mismo para refrescar la vista. Es hijo de bash: cuando ana lo lanzó, bash hizo fork() y exec('top').",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      pid: 445,
      name: "nginx",
      user: "www-data",
      state: "S",
      cpu: 0.3,
      mem: 1.2,
      color: "#A855F7",
      description: "Servidor web (proceso maestro)",
      detail: "El proceso maestro de nginx solo gestiona configuración y workers. No toca el tráfico directamente. Diseño deliberado: si un worker falla, el maestro lanza otro sin caída de servicio.",
      children: [
        {
          pid: 446,
          name: "nginx: worker",
          user: "www-data",
          state: "S",
          cpu: 1.4,
          mem: 0.8,
          color: "#A855F7",
          description: "Worker: maneja peticiones HTTP",
          detail: "Los workers son quienes realmente atienden el tráfico. Hay uno por CPU core típicamente. Este está en estado S (sleeping): espera conexiones entrantes en el socket.",
        },
        {
          pid: 447,
          name: "nginx: worker",
          user: "www-data",
          state: "S",
          cpu: 0.9,
          mem: 0.8,
          color: "#A855F7",
          description: "Worker: maneja peticiones HTTP",
          detail: "Segundo worker. nginx reparte las conexiones entre workers con un lock en el socket. Solo uno acepta a la vez, los demás esperan. Esto evita el thundering herd problem.",
        },
      ],
    },
    {
      pid: 601,
      name: "postgres",
      user: "postgres",
      state: "S",
      cpu: 0.5,
      mem: 4.2,
      color: "#60A5FA",
      description: "Base de datos PostgreSQL",
      detail: "Proceso postmaster. Como nginx, es el maestro: gestiona conexiones y lanza un proceso hijo por cada cliente conectado. Cada query corre en su propio proceso aislado.",
      children: [
        {
          pid: 2203,
          name: "postgres: api",
          user: "postgres",
          state: "R",
          cpu: 8.7,
          mem: 1.1,
          color: "#60A5FA",
          description: "Query activa — estado R",
          detail: "Estado R: está ejecutando una query ahora mismo. Está consumiendo CPU. Si ves muchos workers de postgres en estado R, tu base de datos está bajo carga real.",
        },
        {
          pid: 1102,
          name: "postgres: zombie",
          user: "postgres",
          state: "Z",
          cpu: 0.0,
          mem: 0.0,
          color: "#FF5C5C",
          description: "⚠ Proceso zombie",
          detail: "Estado Z: terminó su ejecución pero su padre no llamó wait(). Ocupa una entrada en la tabla de procesos pero no consume memoria ni CPU. Indica un bug en el proceso padre.",
        },
      ],
    },
    {
      pid: 788,
      name: "cron",
      user: "root",
      state: "S",
      cpu: 0.0,
      mem: 0.1,
      color: "#FF9EFF",
      description: "Planificador de tareas",
      detail: "Despierta cada minuto para revisar si hay tareas programadas. Si las hay, hace fork() y las ejecuta. Completamente dormido el 99.9% del tiempo. Bajo consumo por diseño.",
    },
  ],
};

const STATE_META = {
  R: { label: "Running", color: "#00FFBF", description: "Usando CPU activamente" },
  S: { label: "Sleeping", color: "#4A9EFF", description: "Esperando evento o I/O" },
  Z: { label: "Zombie", color: "#FF5C5C", description: "Terminado, no recogido" },
  T: { label: "Stopped", color: "#FFB830", description: "Pausado con SIGSTOP" },
};

function ProcessRow({
  proc,
  depth,
  selected,
  onSelect,
  isLast,
}: {
  proc: Process;
  depth: number;
  selected: Process | null;
  onSelect: (p: Process) => void;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(depth < 2);
  const isSelected = selected?.pid === proc.pid;
  const hasChildren = !!proc.children?.length;
  const stateMeta = STATE_META[proc.state];

  return (
    <div>
      <button
        className="w-full text-left flex items-center gap-2 rounded-lg py-1.5 px-2 transition-all duration-200"
        style={{
          paddingLeft: `${8 + depth * 18}px`,
          background: isSelected ? `${proc.color}15` : "transparent",
          border: `1px solid ${isSelected ? proc.color + "40" : "transparent"}`,
        }}
        onClick={() => {
          onSelect(proc);
          if (hasChildren) setOpen((o) => !o);
        }}
      >
        {/* Tree glyph */}
        {depth > 0 && (
          <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 10, fontFamily: "monospace", userSelect: "none" }}>
            {isLast ? "└" : "├"}
          </span>
        )}

        {/* Expand */}
        <span
          className="text-xs w-3 flex-shrink-0 transition-transform duration-200"
          style={{
            color: hasChildren ? proc.color : "transparent",
            transform: open && hasChildren ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          {hasChildren ? "▸" : "·"}
        </span>

        {/* State dot */}
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{
            background: stateMeta.color,
            boxShadow: proc.state === "R" ? `0 0 6px ${stateMeta.color}` : "none",
            animation: proc.state === "R" ? "pulse 1.5s ease-in-out infinite" : "none",
          }}
        />

        {/* Name */}
        <span
          className="text-sm font-mono font-semibold flex-1 min-w-0 truncate"
          style={{ color: isSelected ? proc.color : "rgba(255,255,255,0.8)" }}
        >
          {proc.name}
        </span>

        {/* PID */}
        <span className="text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>
          {proc.pid}
        </span>

        {/* CPU bar */}
        {proc.cpu > 0 && (
          <div
            className="flex-shrink-0 h-1 rounded-full"
            style={{
              width: 28,
              background: "rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(100, proc.cpu * 10)}%`,
                background: proc.cpu > 5 ? "#FF5C5C" : "#00FFBF",
              }}
            />
          </div>
        )}
      </button>

      {hasChildren && open && (
        <div>
          {proc.children!.map((child, idx) => (
            <ProcessRow
              key={child.pid}
              proc={child}
              depth={depth + 1}
              selected={selected}
              onSelect={onSelect}
              isLast={idx === proc.children!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProcessTree() {
  const [selected, setSelected] = useState<Process | null>(TREE);

  const stateMeta = selected ? STATE_META[selected.state] : null;

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
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ background: "#10101a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5C5C" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFB830" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#00FFBF" }} />
          <span className="ml-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            pstree — árbol de procesos
          </span>
        </div>
        <div className="flex gap-3">
          {Object.entries(STATE_META).map(([k, v]) => (
            <div key={k} className="flex items-center gap-1">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: v.color }}
              />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontSize: 9 }}>
                {k}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Column headers */}
      <div
        className="flex items-center px-2 py-1.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        <span className="flex-1 text-xs" style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, paddingLeft: 4 }}>
          PROCESO
        </span>
        <span className="text-xs w-10 text-right" style={{ color: "rgba(255,255,255,0.2)", fontSize: 9 }}>
          PID
        </span>
        <span className="text-xs w-7 text-right ml-2" style={{ color: "rgba(255,255,255,0.2)", fontSize: 9 }}>
          CPU
        </span>
      </div>

      {/* Tree */}
      <div className="p-2 overflow-auto no-scrollbar" style={{ maxHeight: 300 }}>
        <ProcessRow
          proc={TREE}
          depth={0}
          selected={selected}
          onSelect={setSelected}
          isLast={true}
        />
      </div>

      {/* Detail panel */}
      {selected && stateMeta && (
        <div
          key={selected.pid}
          className="px-4 py-3"
          style={{
            borderTop: `1px solid ${selected.color}22`,
            background: `${selected.color}08`,
            animation: "fadeUp 0.2s ease forwards",
          }}
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm" style={{ color: selected.color }}>
                {selected.name}
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded"
                style={{
                  background: `${stateMeta.color}18`,
                  color: stateMeta.color,
                  border: `1px solid ${stateMeta.color}40`,
                  fontSize: 9,
                }}
              >
                {selected.state} · {stateMeta.label}
              </span>
            </div>
            <span className="text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }}>
              user: {selected.user}
            </span>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mb-2">
            {[
              { label: "PID", value: selected.pid },
              { label: "CPU", value: `${selected.cpu}%` },
              { label: "MEM", value: `${selected.mem}%` },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontSize: 9 }}>
                  {s.label}
                </span>
                <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs leading-relaxed" style={{ color: "#8888aa" }}>
            {selected.detail}
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}