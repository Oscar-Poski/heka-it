import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "claude-cowork",
  numero: 5,
  titulo: "Nivel 5 · El contexto importa",
  pasos: [
    {
      titulo: "Los 4 niveles de contexto",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Los 4 niveles de contexto en Cowork",
          texto:
            "Son independientes y se combinan. Cuanto más contexto le das a Claude, mejores resultados produce. Toca cada nivel.",
          partes: [
            {
              id: "instrucciones",
              label: "Globales",
              color: "#3A8DFF",
              detalle:
                "Instrucciones globales. Claude aprende quién eres y cómo trabajas. Desbloquea: cada tarea comienza ya adaptada a tu rol, tus formatos y tus preferencias.",
            },
            {
              id: "proyectos",
              label: "Proyectos",
              color: "#00A896",
              detalle:
                "Proyectos. Claude aprende el contexto de una línea de trabajo. Desbloquea: trabaja como un miembro más del equipo, con acceso a los archivos, el historial y las decisiones tomadas.",
            },
            {
              id: "skills",
              label: "Skills",
              color: "#FF6B35",
              detalle:
                "Skills. Claude aprende cómo realizar un proceso específico. Desbloquea: ejecuta tareas similares con tus plantillas, tus estándares y tus pasos.",
            },
            {
              id: "plugins",
              label: "Plugins",
              color: "#8B5CF6",
              detalle:
                "Plugins. Claude gana la experiencia de tu rol o sector. Desbloquea: pasa de generalista a especialista, con los flujos, las conexiones y el conocimiento de tu puesto.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Instrucciones globales",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El briefing permanente de Claude",
          texto:
            "Las instrucciones globales son el contexto persistente que Claude recibe en CADA conversación. Se configuran en Settings → Profile e incluyen tu nombre y rol, idioma y tono, formato de output habitual, herramientas que usas y qué evitar.",
        },
        {
          tipo: "chat",
          eyebrow: "Ejemplo de instrucciones globales",
          mensajes: [
            {
              rol: "user",
              texto:
                "Soy Oscar Rivera, consultor de operaciones. Trabajo en español y prefiero respuestas concisas. Para documentos, usa Word salvo que indique otro formato. Evita listas genéricas: prefiero texto estructurado con ejemplos concretos.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Skills y Plugins",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Skill, Connector, Plugin: la diferencia",
          texto: "Tres piezas que amplían lo que Claude puede hacer.",
          items: [
            {
              titulo: "Skill",
              descripcion: "Una capacidad específica que se activa sola. Ej: crear archivos Word con formato perfecto.",
              icono: "Sparkles",
            },
            {
              titulo: "Connector",
              descripcion: "Acceso a una app externa. Ej: Gmail, Drive o Slack.",
              icono: "Plug",
            },
            {
              titulo: "Plugin",
              descripcion: "Un bundle temático que junta varios skills y connectors. Se instala del marketplace con un clic.",
              icono: "Puzzle",
            },
          ],
          nota:
            "Con el skill 'Create Plugin' puedes empaquetar tus propios skills y configuraciones en un plugin privado para tu equipo.",
        },
      ],
    },
    {
      titulo: "Tareas programadas",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Claude trabaja mientras no estás",
          texto:
            "Claude puede ejecutar tareas de forma automática y recurrente sin que estés presente. Basta con pedírselo: «Cada lunes a las 8am, revisa mis emails del fin de semana y envíame un resumen con las acciones pendientes». Requisito: el connector correspondiente debe estar conectado.",
        },
        {
          tipo: "grid",
          items: [
            { titulo: "Cada lunes", descripcion: "Resumen de emails y prioridades de la semana.", icono: "Mail" },
            { titulo: "Cada viernes", descripcion: "Informe de avance del proyecto principal.", icono: "FileText" },
            { titulo: "Cada mes", descripcion: "Dashboard de métricas compilado solo.", icono: "FileSpreadsheet" },
            { titulo: "Cada día", descripcion: "Revisión de agenda y recordatorios.", icono: "Calendar" },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Empieza con tareas de bajo riesgo (resúmenes, reportes de lectura) antes de automatizar tareas que envíen emails o creen documentos.",
        },
      ],
    },
    {
      titulo: "Uso responsable",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Trabajar con Claude de forma responsable",
          pasos: [
            {
              titulo: "Cuida la privacidad",
              descripcion:
                "No compartas datos sensibles sin revisar las políticas de tu organización. Usa proyectos para aislar contextos y revisa qué permisos diste a Cowork.",
            },
            {
              titulo: "Revisa siempre el output",
              descripcion:
                "Claude es muy bueno pero no infalible: puede errar en datos, fechas o matices de tu industria. Trátalo como un colaborador talentoso que necesita supervisión. La responsabilidad final es tuya.",
            },
            {
              titulo: "Elige bien el modelo",
              descripcion:
                "Opus para análisis complejos; Sonnet para el equilibrio del trabajo diario. Empieza con tareas de bajo riesgo antes de automatizar procesos críticos.",
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
          pregunta: "¿Cuál es la diferencia entre un Skill y un Plugin?",
          opciones: [
            { texto: "Son lo mismo con distinto nombre.", correcta: false },
            { texto: "Un skill es una capacidad concreta; un plugin es un bundle que junta skills y connectors.", correcta: true },
            { texto: "Un skill conecta apps externas; un plugin crea archivos.", correcta: false },
            { texto: "Un plugin es gratis y un skill se paga.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Un skill es una capacidad específica (ej. crear Word); un connector da acceso a una app; un plugin empaqueta varios skills y connectors en un bundle temático.",
          feedbackIncorrecto:
            "Un skill es una sola capacidad (ej. crear un Word) y un connector da acceso a una app. Un plugin es el bundle que combina varios skills y connectors en un paquete temático.",
        },
      ],
    },
  ],
};

export default capitulo;
