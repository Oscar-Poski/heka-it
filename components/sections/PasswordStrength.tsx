"use client";

import { useMemo, useState } from "react";
import { Eye, EyeOff, Shield, AlertTriangle, Clock } from "lucide-react";

function estimarEntropia(pwd: string): number {
  if (!pwd) return 0;
  let pool = 0;
  if (/[a-z]/.test(pwd)) pool += 26;
  if (/[A-Z]/.test(pwd)) pool += 26;
  if (/[0-9]/.test(pwd)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(pwd)) pool += 32;
  return pwd.length * Math.log2(pool);
}

function tiempoCrack(entropia: number): string {
  // Asume 1e10 intentos/segundo (GPU moderno).
  const intentos = Math.pow(2, entropia) / 2;
  const segundos = intentos / 1e10;
  if (segundos < 1) return "instantáneo";
  if (segundos < 60) return `${segundos.toFixed(0)} segundos`;
  if (segundos < 3600) return `${(segundos / 60).toFixed(0)} minutos`;
  if (segundos < 86400) return `${(segundos / 3600).toFixed(0)} horas`;
  if (segundos < 31536000) return `${(segundos / 86400).toFixed(0)} días`;
  const años = segundos / 31536000;
  if (años < 1000) return `${años.toFixed(0)} años`;
  if (años < 1e6) return `${(años / 1000).toFixed(1)} mil años`;
  if (años < 1e9) return `${(años / 1e6).toFixed(1)} millones de años`;
  return `${(años / 1e9).toFixed(1)} mil millones de años`;
}

function nivelDe(entropia: number): {
  label: string;
  bg: string;
  text: string;
  bar: string;
  icon: typeof Shield;
  consejo: string;
} {
  if (entropia < 28) {
    return {
      label: "Muy débil",
      bg: "border-red-500/40 bg-red-500/5",
      text: "text-red-700",
      bar: "bg-red-500",
      icon: AlertTriangle,
      consejo: "Se rompe en segundos. NO uses esto en ningún sitio real.",
    };
  }
  if (entropia < 50) {
    return {
      label: "Débil",
      bg: "border-amber-500/40 bg-amber-500/5",
      text: "text-amber-700",
      bar: "bg-amber-500",
      icon: AlertTriangle,
      consejo: "Aguanta poco. Añade longitud o caracteres especiales.",
    };
  }
  if (entropia < 70) {
    return {
      label: "Buena",
      bg: "border-accent/40 bg-accent/5",
      text: "text-accent",
      bar: "bg-accent",
      icon: Shield,
      consejo: "Aceptable para cuentas normales. Combina con MFA siempre.",
    };
  }
  return {
    label: "Excelente",
    bg: "border-teal/40 bg-teal/5",
    text: "text-teal",
    bar: "bg-teal",
    icon: Shield,
    consejo: "Resistente al brute force. Sigue activando MFA por las dudas.",
  };
}

const PRESETS = [
  { label: "Clásico fatal", pwd: "123456" },
  { label: "Con palabra", pwd: "Password1" },
  { label: "Mejorado", pwd: "P@ssw0rd!" },
  { label: "Frase larga", pwd: "perro-azul-corre-rápido-2025" },
];

export function PasswordStrength() {
  const [pwd, setPwd] = useState("Password1");
  const [show, setShow] = useState(false);

  const entropia = useMemo(() => estimarEntropia(pwd), [pwd]);
  const nivel = useMemo(() => nivelDe(entropia), [entropia]);
  const tiempo = useMemo(() => tiempoCrack(entropia), [entropia]);
  const Icon = nivel.icon;

  const pct = Math.min((entropia / 100) * 100, 100);

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
        Escribe una contraseña
      </label>
      <div className="relative mb-3">
        <input
          type={show ? "text" : "password"}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="w-full rounded-card border border-border bg-bg px-3 py-2.5 pr-10 text-[14px] font-mono text-text-primary focus:outline-none focus:border-accent"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-text-dim hover:text-text-primary transition-colors"
          aria-label={show ? "Ocultar" : "Mostrar"}
        >
          {show ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setPwd(p.pwd)}
            className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-surface2 text-text-muted hover:border-accent/40 hover:text-accent transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wide">
          Fortaleza estimada
        </span>
        <span className="text-[11px] font-mono text-text-dim">
          {entropia.toFixed(1)} bits de entropía
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-surface2 overflow-hidden mb-3">
        <div
          className={`h-full rounded-full transition-all duration-300 ${nivel.bar}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className={`rounded-card border p-3 mb-3 ${nivel.bg}`}>
        <div className={`flex items-center gap-2 mb-1.5 ${nivel.text}`}>
          <Icon size={15} strokeWidth={1.8} />
          <span className="text-[13.5px] font-semibold">{nivel.label}</span>
        </div>
        <p className="text-[12.5px] text-text-primary leading-relaxed">
          {nivel.consejo}
        </p>
      </div>

      <div className="rounded-card border border-border bg-bg p-3">
        <div className="flex items-center gap-1.5 text-text-muted mb-1">
          <Clock size={13} strokeWidth={1.8} />
          <span className="text-[11px] font-semibold uppercase tracking-wide">
            Tiempo estimado para romperla
          </span>
        </div>
        <div className="text-[15px] font-mono font-semibold text-text-primary">
          {tiempo}
        </div>
        <div className="text-[10.5px] text-text-dim mt-1">
          Asume 10.000 millones de intentos por segundo (GPU moderno, ataque offline).
        </div>
      </div>
    </div>
  );
}
