"use client";

import Link from "next/link";
import { ArrowRight, Check, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";

const CONTACTO =
  "https://wa.me/523312890864?text=Hola%2C%20quiero%20automatizar%20los%20procesos%20de%20mi%20empresa";
const CONTACTO_EMAIL = "oscar@heka-it.org";
const CONTACTO_MAILTO = `mailto:${CONTACTO_EMAIL}?subject=Quiero%20automatizar%20los%20procesos%20de%20mi%20empresa`;

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.519 5.268l-.999 3.648 3.469-.609zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

const servicios = [
  {
    icono: "Workflow",
    titulo: "Diagnóstico de procesos",
    descripcion:
      "Mapeamos tus tareas repetitivas y detectamos dónde pierdes más horas. Sales con un plan claro de qué automatizar primero.",
  },
  {
    icono: "Zap",
    titulo: "Automatización de flujos",
    descripcion:
      "Conectamos tus apps (correo, hojas de cálculo, CRM, facturación) con n8n o Zapier para que el trabajo manual se haga solo.",
  },
  {
    icono: "Bot",
    titulo: "Integración de IA",
    descripcion:
      "Implementamos Claude en tu día a día: resúmenes, respuestas, documentos y reportes generados automáticamente.",
  },
  {
    icono: "GraduationCap",
    titulo: "Formación a tu equipo",
    descripcion:
      "Capacitamos a tu gente para que use estas herramientas con autonomía. La automatización se queda en casa.",
  },
];

const pasos = [
  { titulo: "Diagnóstico", descripcion: "Entendemos tu operación y priorizamos el mayor ahorro de tiempo." },
  { titulo: "Diseño", descripcion: "Proponemos la solución más simple que resuelve el problema." },
  { titulo: "Implementación", descripcion: "Construimos y probamos los flujos en tu entorno real." },
  { titulo: "Acompañamiento", descripcion: "Te formamos y ajustamos hasta que todo corra solo." },
];

const beneficios = [
  "Menos tareas manuales y errores",
  "Resultados en semanas, no meses",
  "Herramientas que ya usas, conectadas",
  "Sin necesidad de equipo técnico propio",
];

export default function LandingPage() {
  return (
    <main className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center shrink-0">
              <GraduationCap size={20} strokeWidth={1.8} />
            </div>
            <div className="text-[15px] font-semibold tracking-tight truncate">
              <span className="text-accent">IT</span> Academy & Consulting Services
            </div>
          </div>
          <Link
            href="/academy"
            className="shrink-0 inline-flex items-center gap-1 rounded-full border border-teal/40 text-teal text-[13px] font-semibold px-3.5 py-1.5 active:scale-[0.97] transition-transform"
          >
            Academy
            <ArrowRight size={13} className="opacity-70" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 pt-4 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-display text-[36px] leading-[1.1] tracking-tight text-ink"
        >
          Heka <span className="text-accent">it</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-2 text-base text-text-muted leading-relaxed max-w-[280px] lg:max-w-md"
        >
          Aprende a diseñar flujos de trabajo automatizados para tu empresa usando herramientas modernas. Contenido práctico, resultados reales.
        </motion.p>
      </section>

      {/* Servicios */}
      <section className="px-4 pt-2 pb-8">
        <h2 className="text-[11px] font-semibold tracking-[0.08em] text-teal uppercase mb-4">
          Qué hacemos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {servicios.map((s) => (
            <div key={s.titulo} className="rounded-card border border-border bg-surface p-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mb-3">
                <Icon name={s.icono} size={20} strokeWidth={1.8} />
              </div>
              <div className="text-[15px] font-semibold text-text-primary leading-snug">
                {s.titulo}
              </div>
              <p className="text-[13px] text-text-muted mt-1 leading-relaxed">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="px-4 pt-2 pb-8">
        <h2 className="text-[11px] font-semibold tracking-[0.08em] text-teal uppercase mb-4">
          Cómo trabajamos
        </h2>
        <ol className="space-y-3">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="flex gap-3 rounded-card border border-border bg-surface p-3.5">
              <div className="shrink-0 w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[12px] font-semibold">
                {i + 1}
              </div>
              <div>
                <div className="text-[14px] font-medium text-text-primary leading-snug">
                  {p.titulo}
                </div>
                <div className="text-[12.5px] text-text-muted mt-0.5 leading-relaxed">
                  {p.descripcion}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Beneficios */}
      <section className="px-4 pt-2 pb-8">
        <div className="rounded-card bg-surface2 border-l-[3px] border-teal px-4 py-4">
          <h2 className="text-[14px] font-semibold text-text-primary mb-3">
            Por qué automatizar con Heka it
          </h2>
          <ul className="space-y-2">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[13.5px] text-text-primary leading-snug">
                <Check size={15} strokeWidth={2.5} className="mt-0.5 shrink-0 text-teal" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-4 pt-2 pb-4">
        <div className="rounded-card bg-ink text-blanco px-5 py-6 text-center">
          <h2 className="font-display text-[24px] leading-tight">
            ¿Listo para recuperar tu tiempo?
          </h2>
          <p className="mt-2 text-[14px] text-blanco/70 leading-relaxed">
            Cuéntanos qué tarea te quita más horas. El diagnóstico inicial no tiene costo.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:justify-center gap-2.5">
            <a
              href={CONTACTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-accent text-bg rounded-card px-6 py-3 font-semibold text-[15px] active:scale-[0.98] transition-transform"
            >
              <WhatsAppIcon size={18} />
              +52 33 1289 0864
            </a>
            <a
              href={CONTACTO_MAILTO}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] bg-transparent border border-blanco/40 text-blanco rounded-card px-6 py-3 font-semibold text-[14px] active:scale-[0.98] transition-transform"
            >
              <Mail size={18} strokeWidth={2} />
              <span className="break-all">{CONTACTO_EMAIL}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 pt-10 pb-4">
        <div className="rounded-card border border-border bg-surface px-5 py-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center shrink-0">
              <GraduationCap size={20} strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-[15px] font-semibold tracking-tight text-text-primary">
                Heka <span className="text-accent">it</span>
              </div>
              <div className="text-[12px] text-text-muted leading-tight">
                IT Academy &amp; Consulting Services
              </div>
            </div>
          </div>

          <p className="mt-4 text-[13px] text-text-muted leading-relaxed">
            Automatización, IA y formación práctica para empresas que quieren recuperar su tiempo.
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.08em] text-teal uppercase mb-2">
                Contacto
              </div>
              <ul className="space-y-2 text-[13px] text-text-primary">
                <li>
                  <a
                    href={CONTACTO_MAILTO}
                    className="inline-flex items-center gap-2 hover:text-accent transition-colors break-all"
                  >
                    <Mail size={14} strokeWidth={2} className="shrink-0 text-teal" />
                    {CONTACTO_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACTO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <span className="shrink-0 text-teal">
                      <WhatsAppIcon size={14} />
                    </span>
                    +52 33 1289 0864
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 text-text-muted">
                  <MapPin size={14} strokeWidth={2} className="shrink-0 text-teal" />
                  Guadalajara, México
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-[0.08em] text-teal uppercase mb-2">
                Explora
              </div>
              <ul className="space-y-2 text-[13px] text-text-primary">
                <li>
                  <Link href="/academy" className="hover:text-accent transition-colors">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Servicios
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-text-muted">
            <div>© {new Date().getFullYear()} Heka IT. Todos los derechos reservados.</div>
            <div>Hecho con foco en resultados, no en buzzwords.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
