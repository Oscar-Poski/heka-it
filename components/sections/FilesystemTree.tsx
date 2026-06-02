"use client";

import { useState } from "react";
import { Folder, Info } from "lucide-react";

type Dir = {
  path: string;
  nombre: string;
  rol: string;
  detalle: string;
  ejemplos: string[];
};

const DIRS: Dir[] = [
  {
    path: "/",
    nombre: "raíz",
    rol: "El punto de partida",
    detalle: "La raíz del sistema. Todo lo demás cuelga de aquí. Solo root escribe en /.",
    ejemplos: ["No suele tocarse directamente"],
  },
  {
    path: "/bin",
    nombre: "binarios esenciales",
    rol: "Comandos básicos",
    detalle: "Ejecutables que el sistema necesita siempre, incluso en modo rescate. Sin esto no hay terminal.",
    ejemplos: ["ls", "cp", "mv", "bash", "cat", "grep"],
  },
  {
    path: "/etc",
    nombre: "configuración",
    rol: "Archivos de configuración del sistema",
    detalle: "Toda la config global vive aquí. Editar un archivo en /etc afecta a todos los usuarios.",
    ejemplos: ["/etc/hosts", "/etc/ssh/sshd_config", "/etc/fstab", "/etc/passwd"],
  },
  {
    path: "/var",
    nombre: "variable",
    rol: "Datos que cambian con el tiempo",
    detalle: "Logs, colas de correo, bases de datos de paquetes. El directorio que más crece en un servidor.",
    ejemplos: ["/var/log/syslog", "/var/log/auth.log", "/var/cache/apt", "/var/mail"],
  },
  {
    path: "/home",
    nombre: "usuarios",
    rol: "Carpetas personales",
    detalle: "Cada usuario tiene su carpeta en /home/<usuario>. Es donde puedes escribir sin sudo.",
    ejemplos: ["/home/oscar/", "/home/maria/", "~/Documents", "~/.ssh"],
  },
  {
    path: "/dev",
    nombre: "dispositivos",
    rol: "Hardware como archivos",
    detalle: "La filosofía «todo es un archivo» en acción. Tu disco, teclado o números aleatorios aparecen aquí como archivos especiales.",
    ejemplos: ["/dev/sda (disco)", "/dev/null (agujero negro)", "/dev/urandom (random)", "/dev/tty"],
  },
  {
    path: "/tmp",
    nombre: "temporal",
    rol: "Archivos temporales",
    detalle: "Cualquier usuario puede escribir aquí. Se borra automáticamente al reiniciar (en muchas distros).",
    ejemplos: ["Archivos de instaladores", "Sockets de procesos", "Caché de apps"],
  },
];

export function FilesystemTree() {
  const [selected, setSelected] = useState(2);
  const dir = DIRS[selected];

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Tree */}
      <div className="rounded-card border border-border bg-bg p-3 mb-3 font-mono text-[13px]">
        <div className="text-text-primary mb-1">/</div>
        {DIRS.slice(1).map((d, i) => {
          const active = i + 1 === selected;
          return (
            <button
              key={d.path}
              type="button"
              onClick={() => setSelected(i + 1)}
              className={`w-full flex items-center gap-2 text-left px-2 py-1 rounded-md transition-colors ${
                active
                  ? "bg-accent/15 text-accent"
                  : "text-text-muted hover:bg-surface2 hover:text-text-primary"
              }`}
            >
              <span className="opacity-50">├──</span>
              <Folder size={13} strokeWidth={1.8} />
              <span className="font-semibold">{d.path}</span>
              <span className="text-[11px] opacity-60 ml-auto">{d.nombre}</span>
            </button>
          );
        })}
      </div>

      {/* Detail card */}
      <div className="rounded-card border border-accent/40 bg-accent/5 p-3">
        <div className="flex items-center gap-2 mb-1.5 text-accent">
          <Info size={14} strokeWidth={1.8} />
          <span className="font-mono text-[13px] font-semibold">{dir.path}</span>
          <span className="text-[11.5px] opacity-70">— {dir.rol}</span>
        </div>
        <p className="text-[13px] text-text-primary leading-relaxed mb-2">
          {dir.detalle}
        </p>
        <div className="text-[11px] text-text-muted uppercase tracking-wide mb-1">
          Ejemplos
        </div>
        <div className="flex flex-wrap gap-1.5">
          {dir.ejemplos.map((e) => (
            <span
              key={e}
              className="inline-flex items-center px-2 py-0.5 rounded-md border border-border bg-bg text-[11.5px] font-mono text-text-primary"
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
