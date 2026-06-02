"use client";

import { useMemo, useState } from "react";
import { Key, KeyRound, Lock, Unlock, Users, User } from "lucide-react";

type Modo = "simetrico" | "asimetrico";

function caesar(text: string, shift: number): string {
  return text
    .split("")
    .map((ch) => {
      if (/[a-z]/.test(ch)) {
        return String.fromCharCode(((ch.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97);
      }
      if (/[A-Z]/.test(ch)) {
        return String.fromCharCode(((ch.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65);
      }
      return ch;
    })
    .join("");
}

export function CifradoDemo() {
  const [modo, setModo] = useState<Modo>("simetrico");
  const [mensaje, setMensaje] = useState("Hola mundo");
  const [shift, setShift] = useState(3);

  const cifrado = useMemo(() => caesar(mensaje, shift), [mensaje, shift]);
  const descifrado = useMemo(() => caesar(cifrado, -shift), [cifrado, shift]);

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Toggle */}
      <div className="flex gap-1 mb-4 p-1 rounded-card border border-border bg-surface2">
        <button
          type="button"
          onClick={() => setModo("simetrico")}
          className={`flex-1 inline-flex items-center justify-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card transition-colors ${
            modo === "simetrico"
              ? "bg-accent/10 text-accent font-semibold"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          <Key size={13} strokeWidth={2} />
          Simétrico (1 llave)
        </button>
        <button
          type="button"
          onClick={() => setModo("asimetrico")}
          className={`flex-1 inline-flex items-center justify-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card transition-colors ${
            modo === "asimetrico"
              ? "bg-teal/10 text-teal font-semibold"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          <KeyRound size={13} strokeWidth={2} />
          Asimétrico (2 llaves)
        </button>
      </div>

      {/* Inputs */}
      <label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
        Mensaje a cifrar
      </label>
      <input
        type="text"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="w-full rounded-card border border-border bg-bg px-3 py-2 text-[13.5px] text-text-primary focus:outline-none focus:border-accent mb-3"
      />

      {modo === "simetrico" && (
        <>
          <label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">
            Llave secreta (desplazamiento del César): {shift}
          </label>
          <input
            type="range"
            min={1}
            max={25}
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
            className="w-full accent-accent mb-3"
          />

          <div className="space-y-2 mb-3">
            <div className="rounded-card border border-border bg-bg p-2.5">
              <div className="text-[10.5px] text-text-dim uppercase tracking-wide mb-1">
                Mensaje original
              </div>
              <div className="font-mono text-[13px] text-text-primary">{mensaje}</div>
            </div>
            <div className="rounded-card border border-accent/40 bg-accent/5 p-2.5">
              <div className="flex items-center gap-1 text-[10.5px] text-accent uppercase tracking-wide mb-1">
                <Lock size={11} strokeWidth={2} />
                Cifrado con llave {shift}
              </div>
              <div className="font-mono text-[13px] text-text-primary">{cifrado}</div>
            </div>
            <div className="rounded-card border border-border bg-bg p-2.5">
              <div className="flex items-center gap-1 text-[10.5px] text-text-muted uppercase tracking-wide mb-1">
                <Unlock size={11} strokeWidth={2} />
                Descifrado con la MISMA llave {shift}
              </div>
              <div className="font-mono text-[13px] text-text-primary">{descifrado}</div>
            </div>
          </div>

          <div className="rounded-card border border-amber-500/40 bg-amber-500/5 p-2.5">
            <div className="flex items-center gap-1.5 text-amber-700 mb-1">
              <Users size={13} strokeWidth={2} />
              <span className="text-[11.5px] font-semibold">El problema</span>
            </div>
            <p className="text-[12px] text-text-primary leading-relaxed">
              Para que tu amigo descifre, necesita la MISMA llave. ¿Cómo se la envías
              de forma segura sin que un intermediario la intercepte? Ese es el dolor
              del cifrado simétrico clásico: el problema de distribución de llaves.
            </p>
          </div>
        </>
      )}

      {modo === "asimetrico" && (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-card border border-teal/40 bg-teal/5 p-3">
              <div className="flex items-center gap-1.5 text-teal mb-1">
                <Key size={13} strokeWidth={2} />
                <span className="text-[11.5px] font-semibold">Llave pública</span>
              </div>
              <p className="text-[11px] text-text-primary leading-relaxed">
                La compartes con todo el mundo. Cifrar con esta llave solo se puede
                deshacer con la privada correspondiente.
              </p>
            </div>
            <div className="rounded-card border border-red-500/40 bg-red-500/5 p-3">
              <div className="flex items-center gap-1.5 text-red-700 mb-1">
                <KeyRound size={13} strokeWidth={2} />
                <span className="text-[11.5px] font-semibold">Llave privada</span>
              </div>
              <p className="text-[11px] text-text-primary leading-relaxed">
                NUNCA sale de tu dispositivo. Solo tú la tienes. Descifra los mensajes
                cifrados con tu pública.
              </p>
            </div>
          </div>

          <div className="rounded-card border border-border bg-bg p-3">
            <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wide mb-2">
              Cómo funciona (esquema simplificado)
            </div>
            <div className="space-y-1.5 text-[12px] text-text-primary">
              <div className="flex items-start gap-2">
                <Users size={13} className="text-accent shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold">1.</span> Tu amigo te pide tu llave
                  pública. Se la mandas sin preocuparte: aunque la intercepten, no
                  sirve para descifrar.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Lock size={13} className="text-teal shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold">2.</span> Tu amigo cifra el mensaje
                  con tu llave pública y te lo envía.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Unlock size={13} className="text-red-600 shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold">3.</span> Solo tú puedes descifrarlo
                  con tu llave privada. Ni siquiera tu amigo puede volver a leerlo.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-card border border-accent/40 bg-accent/5 p-2.5">
            <div className="flex items-center gap-1.5 text-accent mb-1">
              <User size={13} strokeWidth={2} />
              <span className="text-[11.5px] font-semibold">Por qué cambió todo</span>
            </div>
            <p className="text-[12px] text-text-primary leading-relaxed">
              No hay que compartir secretos previamente. HTTPS, SSH, Bitcoin y la firma
              digital de tu DNI funcionan gracias a esto.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
