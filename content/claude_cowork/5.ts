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
      titulo: "Modo dispatch",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Dirige a Claude desde el móvil",
          texto:
            "El modo dispatch es la forma de trabajar con Cowork desde tu celular, estés donde estés. No necesitas estar frente al ordenador: lanzas tareas, revisas avances y das instrucciones desde el móvil, y Claude trabaja en segundo plano. Cuando termina, recibes el resultado y decides el siguiente paso.",
        },
        {
          tipo: "highlight",
          texto:
            "Ideal para aprovechar tiempos muertos: despacha una tarea camino a una reunión y revisa el resultado cuando vuelvas. Tú diriges, Claude ejecuta.",
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
      titulo: "Los modelos de Claude",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Opus, Sonnet y Haiku",
          texto:
            "Claude viene en tres tamaños. Elegir el adecuado equilibra calidad, velocidad y coste.",
          items: [
            {
              titulo: "Opus",
              descripcion: "El más capaz. Para análisis complejos, razonamiento profundo y tareas críticas donde la calidad manda.",
              icono: "Brain",
            },
            {
              titulo: "Sonnet",
              descripcion: "El equilibrado. Rápido y muy capaz: la opción por defecto para el trabajo diario.",
              icono: "Scale",
            },
            {
              titulo: "Haiku",
              descripcion: "El más rápido y económico. Para tareas simples, alto volumen o respuestas casi instantáneas.",
              icono: "Zap",
            },
          ],
          nota:
            "Regla práctica: empieza con Sonnet. Sube a Opus si la tarea exige más profundidad; baja a Haiku si priorizas velocidad y coste.",
        },
      ],
    },
    {
      titulo: "Todo junto: un task completo",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Skill + connector + tarea programada",
          texto:
            "Aquí se combina todo lo del nivel. La tarea usa un skill de marca (genera el informe con la plantilla y estilo de tu empresa), un connector (lee los datos de una app externa) y se programa para que se repita sola cada semana.",
        },
        {
          tipo: "chat",
          eyebrow: "Ejemplo de task completo",
          mensajes: [
            {
              rol: "user",
              texto:
                "Cada lunes a las 8am, lee las ventas de la semana pasada desde Google Sheets y genera el informe semanal usando el skill de marca de Heka IT. Guárdalo en Drive y envíame el enlace por email.",
            },
            {
              rol: "claude",
              texto:
                "Listo. Tarea programada cada lunes 8am. Usaré:\n• Connector Google Sheets → leer ventas\n• Skill de marca Heka IT → informe con tu plantilla y estilo\n• Connector Drive + Gmail → guardar y enviarte el enlace\n\nEjecuto sola cada semana y te aviso al terminar.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Un solo task encadena las tres piezas: el connector trae los datos, el skill les da forma de marca y la programación lo repite sin que tengas que pedirlo otra vez.",
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
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tienes que analizar un caso complejo con razonamiento profundo y la calidad es lo más importante. ¿Qué modelo eliges?",
          opciones: [
            { texto: "Haiku, porque es el más rápido.", correcta: false },
            { texto: "Opus, el más capaz para análisis complejos.", correcta: true },
            { texto: "Sonnet, porque es gratis.", correcta: false },
            { texto: "Da igual, todos rinden lo mismo.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Opus es el modelo más capaz: para análisis complejos y razonamiento profundo donde la calidad manda, es la mejor opción.",
          feedbackIncorrecto:
            "Para análisis complejos donde la calidad manda, Opus es el indicado. Haiku prioriza velocidad y coste; Sonnet es el equilibrio para el día a día.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Estás fuera de la oficina y quieres lanzar una tarea a Claude y revisar su avance desde el móvil. ¿Qué usas?",
          opciones: [
            { texto: "El modo dispatch, que dirige a Claude desde el celular.", correcta: true },
            { texto: "Una tarea programada para cada lunes.", correcta: false },
            { texto: "Un connector de Gmail.", correcta: false },
            { texto: "Esperar a volver al ordenador.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El modo dispatch te deja dirigir a Claude desde el móvil, estés donde estés: lanzas la tarea, Claude trabaja en segundo plano y revisas el resultado cuando puedas.",
          feedbackIncorrecto:
            "Para dirigir a Claude desde el celular estando fuera está el modo dispatch. Las tareas programadas sirven para recurrencia automática, no para trabajar desde el móvil al momento.",
        },
      ],
    },
  ],
};

export default capitulo;
