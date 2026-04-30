"use client";

import { useState } from "react";

type NodeDef = {
  name: string;
  type: "dir" | "file" | "device" | "link";
  color?: string;
  description: string;
  detail: string;
  children?: NodeDef[];
};

const TREE: NodeDef = {
  name: "/",
  type: "dir",
  color: "#FF5C5C",
  description: "Raíz del sistema",
  detail: "Todo el sistema de archivos cuelga de aquí. No hay nada por encima de /. Es el único punto de entrada al árbol completo.",
  children: [
    {
      name: "bin",
      type: "dir",
      color: "#4A9EFF",
      description: "Ejecutables esenciales",
      detail: "Aquí viven ls, cp, grep, bash. Disponibles antes de montar cualquier otro disco. Sin /bin no hay terminal.",
      children: [
        { name: "bash", type: "file", description: "Shell Bash", detail: "El intérprete de comandos más común. Es probable que sea tu shell por defecto.", color: "#4A9EFF" },
        { name: "ls", type: "file", description: "Listar archivos", detail: "Lista el contenido de un directorio. Uno de los comandos más usados del sistema.", color: "#4A9EFF" },
        { name: "grep", type: "file", description: "Buscar texto", detail: "Filtra líneas que coinciden con un patrón. La navaja suiza del texto en Linux.", color: "#4A9EFF" },
      ],
    },
    {
      name: "etc",
      type: "dir",
      color: "#FFB830",
      description: "Configuración del sistema",
      detail: "Archivos de configuración de todos los servicios. Aquí está /etc/hosts, /etc/fstab, /etc/ssh. Editar aquí es cirugía: siempre haz backup.",
      children: [
        { name: "hosts", type: "file", description: "Resolución de nombres local", detail: "Mapa de IPs a nombres de dominio que el sistema consulta antes que el DNS.", color: "#FFB830" },
        { name: "fstab", type: "file", description: "Tabla de discos montados", detail: "Define qué discos se montan al arrancar y en qué punto del árbol aparecen.", color: "#FFB830" },
        { name: "ssh", type: "dir", description: "Config de SSH", detail: "Contiene sshd_config (servidor) y ssh_config (cliente). Aquí configuras puertos, llaves y accesos.", color: "#FFB830" },
      ],
    },
    {
      name: "var",
      type: "dir",
      color: "#A855F7",
      description: "Datos variables",
      detail: "Lo que crece con el tiempo: logs, bases de datos de paquetes, colas de correo. /var/log es tu primera parada cuando algo falla.",
      children: [
        {
          name: "log",
          type: "dir",
          description: "Registros del sistema",
          detail: "auth.log, syslog, kern.log. El historial médico completo de tu sistema. Aquí empieza cualquier diagnóstico.",
          color: "#A855F7",
          children: [
            { name: "syslog", type: "file", description: "Log general del sistema", detail: "Mensajes del kernel y servicios. El log más consultado en producción.", color: "#A855F7" },
            { name: "auth.log", type: "file", description: "Autenticaciones", detail: "Cada intento de login, sudo y cambio de sesión queda registrado aquí.", color: "#A855F7" },
          ],
        },
      ],
    },
    {
      name: "dev",
      type: "dir",
      color: "#00FFBF",
      description: "Dispositivos como archivos",
      detail: "La magia de 'todo es un archivo'. /dev/sda es tu disco. /dev/null descarta todo. /dev/urandom genera entropía.",
      children: [
        { name: "sda", type: "device", description: "Primer disco duro", detail: "Representa tu disco físico completo. /dev/sda1 sería la primera partición.", color: "#00FFBF" },
        { name: "null", type: "device", description: "Agujero negro", detail: "Todo lo que escribas aquí desaparece. Ideal para silenciar output: comando > /dev/null.", color: "#00FFBF" },
        { name: "urandom", type: "device", description: "Generador de aleatoriedad", detail: "Fuente de bytes aleatorios del kernel. Usado en criptografía y generación de llaves.", color: "#00FFBF" },
      ],
    },
    {
      name: "home",
      type: "dir",
      color: "#FF9EFF",
      description: "Directorios de usuario",
      detail: "Cada usuario tiene su carpeta aquí. /home/ana, /home/dev. Es el único lugar donde los usuarios comunes tienen escritura libre.",
      children: [
        {
          name: "usuario",
          type: "dir",
          description: "Tu directorio personal (~)",
          detail: "El ~ apunta aquí. Tus documentos, configuraciones de apps y archivos personales viven en este árbol.",
          color: "#FF9EFF",
          children: [
            { name: ".bashrc", type: "file", description: "Config de Bash", detail: "Se ejecuta al abrir una terminal interactiva. Aquí defines aliases, variables y funciones personales.", color: "#FF9EFF" },
            { name: ".ssh", type: "dir", description: "Llaves SSH", detail: "Contiene tus llaves privadas y el archivo authorized_keys. Permisos críticos: 700 para la carpeta, 600 para las llaves.", color: "#FF9EFF" },
          ],
        },
      ],
    },
    {
      name: "proc",
      type: "dir",
      color: "#60A5FA",
      description: "Sistema de archivos virtual",
      detail: "No existe en disco. El kernel lo genera en memoria. /proc/cpuinfo muestra tu CPU, /proc/meminfo la RAM. Es una ventana directa al kernel.",
      children: [
        { name: "cpuinfo", type: "file", description: "Info del procesador", detail: "Modelo, velocidad, núcleos y flags de tu CPU. Generado en tiempo real por el kernel.", color: "#60A5FA" },
        { name: "meminfo", type: "file", description: "Estado de la memoria", detail: "RAM total, disponible, en caché. free -h lee de aquí.", color: "#60A5FA" },
        { name: "1", type: "dir", description: "Proceso PID 1 (systemd)", detail: "Cada proceso tiene su carpeta en /proc con su PID. Dentro hay info sobre su memoria, archivos abiertos y más.", color: "#60A5FA" },
      ],
    },
  ],
};

const TYPE_ICON: Record<string, string> = {
  dir: "▸",
  file: "·",
  device: "◈",
  link: "↗",
};

function TreeNode({
  node,
  depth,
  selected,
  onSelect,
  isLast,
}: {
  node: NodeDef;
  depth: number;
  selected: NodeDef | null;
  onSelect: (n: NodeDef) => void;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(depth < 1);
  const isSelected = selected?.name === node.name && selected?.description === node.description;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <button
        className="flex items-center gap-1.5 w-full text-left rounded-md px-2 py-1 transition-all duration-200"
        style={{
          paddingLeft: `${8 + depth * 16}px`,
          background: isSelected ? `${node.color}18` : "transparent",
          border: `1px solid ${isSelected ? node.color + "40" : "transparent"}`,
        }}
        onClick={() => {
          onSelect(node);
          if (hasChildren) setOpen((o) => !o);
        }}
      >
        {/* Tree line indicator */}
        <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 10, userSelect: "none" }}>
          {depth > 0 ? (isLast ? "└" : "├") : ""}
        </span>

        {/* Expand arrow */}
        <span
          className="transition-transform duration-200 text-xs w-3 flex-shrink-0"
          style={{
            color: hasChildren ? node.color ?? "rgba(255,255,255,0.4)" : "transparent",
            transform: open && hasChildren ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          {hasChildren ? "▸" : TYPE_ICON[node.type]}
        </span>

        {/* Icon */}
        {!hasChildren && (
          <span className="text-xs flex-shrink-0" style={{ color: node.color ?? "rgba(255,255,255,0.4)" }}>
            {TYPE_ICON[node.type]}
          </span>
        )}

        {/* Name */}
        <span
          className="text-sm font-mono transition-colors duration-200"
          style={{
            color: isSelected ? node.color : "rgba(255,255,255,0.75)",
            fontWeight: node.type === "dir" ? 600 : 400,
          }}
        >
          {node.name}
          {node.type === "dir" && "/"}
        </span>

        {/* Type badge */}
        {node.type === "device" && (
          <span
            className="ml-auto text-xs px-1.5 py-0.5 rounded"
            style={{ background: "#00FFBF18", color: "#00FFBF", fontSize: 9, fontFamily: "monospace" }}
          >
            dev
          </span>
        )}
      </button>

      {hasChildren && open && (
        <div>
          {node.children!.map((child, idx) => (
            <TreeNode
              key={`${child.name}-${idx}`}
              node={child}
              depth={depth + 1}
              selected={selected}
              onSelect={onSelect}
              isLast={idx === node.children!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FilesystemTree() {
  const [selected, setSelected] = useState<NodeDef | null>(TREE);

  return (
    <div className="w-full max-w-md mx-auto" style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}>
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-t-xl"
        style={{
          background: "#16161f",
          border: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "none",
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5C5C" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFB830" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#00FFBF" }} />
        <span className="ml-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          / — árbol de directorios
        </span>
      </div>

      <div
        className="rounded-b-xl overflow-hidden"
        style={{
          background: "#0d0d14",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Tree panel */}
        <div className="p-3 overflow-auto no-scrollbar" style={{ maxHeight: 280 }}>
          <TreeNode
            node={TREE}
            depth={0}
            selected={selected}
            onSelect={setSelected}
            isLast={true}
          />
        </div>

        {/* Info panel */}
        {selected && (
          <div
            className="px-4 py-3"
            style={{
              borderTop: `1px solid ${selected.color ?? "#ffffff"}22`,
              background: `${selected.color ?? "#4A9EFF"}08`,
              animation: "fadeUp 0.25s ease forwards",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: selected.color ?? "#4A9EFF" }}
              >
                {selected.type === "dir"
                  ? "directorio"
                  : selected.type === "device"
                  ? "dispositivo"
                  : selected.type === "link"
                  ? "enlace"
                  : "archivo"}
              </span>
              <span
                className="font-mono text-sm font-semibold"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                /{selected.name}
                {selected.type === "dir" && selected.name !== "/" ? "/" : ""}
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#8888aa" }}>
              {selected.detail}
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-3 px-1">
        {[
          { icon: "▸", label: "directorio", color: "#FFB830" },
          { icon: "·", label: "archivo", color: "#a0a0c0" },
          { icon: "◈", label: "dispositivo", color: "#00FFBF" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1">
            <span className="text-xs" style={{ color: l.color }}>
              {l.icon}
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              {l.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}