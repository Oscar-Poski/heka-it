import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering-aplicado",
  numero: 3,
  titulo: "Nivel 3 · Prompts para atención y seguimiento de clientes",
  pasos: [
    {
      titulo: "El ciclo del cliente, prompt a prompt",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Cinco momentos críticos",
          texto:
            "El seguimiento de clientes no es \"escribir emails\": es una secuencia de momentos con propósitos distintos. Cada uno necesita un prompt distinto, con su rol y su tono. Si usas el mismo prompt para todos, el cliente nota la plantilla y la respuesta pierde efecto.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Toca cada momento del ciclo",
          texto:
            "Cinco situaciones donde un buen prompt cambia el resultado de una conversación con el cliente.",
          partes: [
            {
              id: "calificacion",
              label: "Calificación",
              color: "#3A8DFF",
              detalle:
                "Primer contacto. Objetivo: entender si el cliente encaja antes de invertir tiempo. Prompt: «Redacta preguntas abiertas que destapen presupuesto, urgencia, decisor, alternativa que están evaluando. Tono curioso, no interrogatorio».",
            },
            {
              id: "propuesta",
              label: "Propuesta",
              color: "#00A896",
              detalle:
                "Envío de oferta. Objetivo: que entienda valor antes que precio. Prompt: «Reformula esta propuesta poniendo primero el problema que resolvemos, luego cómo, luego precio. Cada bloque máximo 3 frases».",
            },
            {
              id: "follow-up",
              label: "Follow-up",
              color: "#FF6B35",
              detalle:
                "Seguimiento sin presión. Objetivo: mantener contacto aportando valor, no insistiendo. Prompt: «Escribe seguimiento ligero. Aporta UN insight nuevo (artículo, dato, caso) relacionado con su situación. Cierre con pregunta abierta, no con \"¿lo has revisado?\"».",
            },
            {
              id: "objecion",
              label: "Manejo de objeción",
              color: "#8B5CF6",
              detalle:
                "Cliente plantea pega. Objetivo: validar antes de rebatir. Prompt: «Reconoce la preocupación específica del cliente, aporta contexto que la matice y propón siguiente paso pequeño. Sin tono defensivo ni promesas».",
            },
            {
              id: "renovacion",
              label: "Renovación / fidelización",
              color: "#10B981",
              detalle:
                "Cliente activo. Objetivo: que perciba valor antes de que toque renovar. Prompt: «Redacta resumen trimestral con 3 logros concretos del cliente con nuestro producto. Datos reales, no marketing. Cierre con próxima oportunidad de mejora».",
            },
          ],
        },
      ],
    },
    {
      titulo: "Personalización a escala sin perder calidez",
      secciones: [
        {
          tipo: "promptlab",
          eyebrow: "Tres tareas comerciales con plantilla",
          texto:
            "Estas plantillas reutilizan estructura pero cambian el contexto cliente a cliente. Son ejemplos de prompts \"de catálogo\" que conviene guardar como Custom GPT, Project o Gem.",
          ejemplos: [
            {
              id: "follow-up-fantasma",
              label: "Follow-up tras silencio",
              icono: "Ghost",
              rol: "Actúa como ejecutivo de cuenta senior. Tono cálido, profesional, nunca pasivo-agresivo.",
              tarea: "Redacta un email de seguimiento a un cliente que lleva 14 días sin responder a una propuesta.",
              contexto:
                "Cliente: Laura, Directora de Operaciones en una pyme manufacturera (120 empleados). Propuesta enviada hace 2 semanas para automatizar reporting. Última respuesta: \"Lo reviso con el equipo\". Sin novedad desde entonces. Sé que su empresa cerró trimestre la semana pasada (info pública).",
              formato:
                "Máximo 100 palabras. Estructura: contexto humano (mencionar cierre de trimestre), recordar valor concreto (1 línea), facilitar respuesta corta (3 opciones tipo: \"sí, agendemos\" / \"aún lo veo\" / \"ya no es prioridad\"), cierre amable.",
            },
            {
              id: "objecion-precio",
              label: "Objeción de precio",
              icono: "DollarSign",
              rol: "Actúa como consultor que vende valor, no precio. No defensivo.",
              tarea: "Responde a la objeción del cliente: \"vuestra propuesta es un 30% más cara que la competencia\".",
              contexto:
                "Es un cliente B2B grande, propuesta de servicio gestionado anual. Nuestro precio incluye SLA 24/7, formación a su equipo y revisiones trimestrales. La competencia no incluye estos tres puntos. El cliente lleva 4 meses en el proceso comercial; no es un \"shopping casual\".",
              formato:
                "Email 150 palabras. Estructura: reconocer la observación literal (1 línea), reformular el cálculo en términos de coste total (mantenimiento, riesgo, tiempo del equipo), proponer una opción intermedia o un pilot, cierre con disponibilidad para llamada.",
            },
            {
              id: "qbr",
              label: "Revisión trimestral (QBR)",
              icono: "TrendingUp",
              rol: "Actúa como Customer Success Manager. Datos por delante, narrativa después.",
              tarea: "Prepara un resumen de QBR para un cliente activo.",
              contexto:
                "Cliente desde hace 9 meses. Usa nuestro producto el 80% del equipo (objetivo era 60%). Han automatizado 4 procesos críticos. Tuvieron 1 incidencia mayor en agosto (resuelta en 48h). Pendiente: módulo de reporting avanzado que ya está disponible y aún no han activado.",
              formato:
                "Documento corto: 3 logros con cifras, 1 incidencia con análisis y aprendizaje, 1 próxima palanca de valor (módulo de reporting). Cierre con propuesta de fecha para sesión 30 min. Tono ejecutivo, sin marketing.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Patrón clave en CX: investiga el contexto público del cliente ANTES de generar el prompt. Una línea sobre un hito reciente (cierre de trimestre, lanzamiento de producto, cambio en su sector) eleva drásticamente la calidez del email sin pasarse de personal.",
        },
      ],
    },
    {
      titulo: "Cuidados especiales con clientes",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Cuatro reglas no negociables",
          texto:
            "Las cosas que conviene poner como \"reglas duras\" en el system prompt cuando la IA toca comunicación con clientes.",
          items: [
            {
              titulo: "Cero promesas sin verificación",
              descripcion:
                "Regla: «Si la respuesta implica compromiso de precio, plazo o disponibilidad, marca con [CONFIRMAR] y no inventes valores». Salva relaciones y demandas.",
              icono: "ShieldCheck",
            },
            {
              titulo: "Datos del cliente nunca cruzados",
              descripcion:
                "Si trabajas con varios clientes, evita prompts \"con todo\". Carga contexto por cliente o usa Projects/Custom GPTs separados. Nada peor que mezclar datos.",
              icono: "Lock",
            },
            {
              titulo: "Revisión humana antes de enviar",
              descripcion:
                "Para clientes en momento delicado (queja, renovación, propuesta grande), el output de la IA es siempre borrador. Tu ojo final detecta el matiz.",
              icono: "Eye",
            },
            {
              titulo: "Tono auditado",
              descripcion:
                "Pídele a la IA cada cierto tiempo que revise 10 emails enviados y diga si tu tono de marca es coherente. Sirve para detectar deriva en plantillas.",
              icono: "AudioLines",
            },
          ],
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Un cliente importante lleva 2 semanas sin responder. Pides a la IA un follow-up. ¿Qué línea NO debería incluir?",
          opciones: [
            { texto: "Una referencia a algo concreto reciente de la empresa del cliente.", correcta: false },
            { texto: "Tres opciones de respuesta cortas para facilitar la réplica.", correcta: false },
            { texto: "«Solo quería hacer ping a ver si lo has revisado» o variaciones pasivo-agresivas.", correcta: true },
            { texto: "Un recordatorio breve del valor concreto que aportaría.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Los «just checking in» repetidos transmiten falta de respeto al tiempo del cliente. Un buen follow-up aporta algo nuevo (contexto, dato, opción) y facilita una respuesta de un clic. Pon esto en tu system prompt como regla dura.",
          feedbackIncorrecto:
            "El típico «¿lo has visto?» es el anti-patrón clásico del follow-up. Suena pasivo-agresivo y no aporta valor. Un buen seguimiento aporta UN insight nuevo y facilita responder. Las otras tres opciones son patrones que SÍ funcionan.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Trabajas con 8 clientes activos y usas IA para preparar comunicaciones. ¿Qué arquitectura tiene MENOS riesgo de mezclar datos entre clientes?",
          opciones: [
            { texto: "Un único chat con \"todo\" el contexto de los 8 clientes.", correcta: false },
            { texto: "Un Project / Custom GPT por cliente, con su contexto e historial cargado.", correcta: true },
            { texto: "Una conversación nueva cada vez, sin contexto.", correcta: false },
            { texto: "Compartir el mismo prompt entre clientes y editar nombres a mano.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Aislar el contexto por cliente (un Project o Custom GPT por cliente) elimina prácticamente el riesgo de cruzar datos. Es la arquitectura estándar para CX serio con IA.",
          feedbackIncorrecto:
            "Mezclar contextos es la fuente principal de errores embarazosos (datos de otro cliente, tono que no encaja). La solución limpia: un \"espacio\" aislado por cliente (Project, Custom GPT o Gem). Empezar de cero cada vez funciona, pero pierdes la memoria útil.",
        },
      ],
    },
  ],
};

export default capitulo;
