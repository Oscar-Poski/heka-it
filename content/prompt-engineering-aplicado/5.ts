import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering-aplicado",
  numero: 4,
  titulo: "Nivel 4 · Prompts para gestión de proyectos",
  pasos: [
    {
      titulo: "Donde la IA acelera al PM",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Cuatro tareas con alto ROI",
          texto:
            "La gestión de proyectos tiene rituales: kickoff, status, riesgos, retro. Cada uno tiene plantilla. Con buenos prompts, la IA produce el 80% de cada entregable y tú añades el matiz humano que falta. La diferencia entre un PM ahogado y un PM que ve el bosque suele ser tiempo: la IA te lo devuelve.",
        },
        {
          tipo: "grid",
          eyebrow: "Cuatro entregables que la IA hace bien",
          items: [
            {
              titulo: "Kickoff doc",
              descripcion:
                "Documento de arranque: objetivos, alcance, fuera de alcance, riesgos iniciales, RACI, hitos. La IA hace el primer 70% si le das contexto del proyecto.",
              icono: "Rocket",
            },
            {
              titulo: "Status report",
              descripcion:
                "Reporte semanal: avance, bloqueos, decisiones pendientes. Patrón fijo que la IA replica perfectamente desde tus notas crudas.",
              icono: "ClipboardList",
            },
            {
              titulo: "Análisis de riesgos",
              descripcion:
                "Identifica riesgos del proyecto, los clasifica por impacto y probabilidad, propone mitigación. La IA sugiere ángulos que se te escapan.",
              icono: "AlertTriangle",
            },
            {
              titulo: "Retrospectiva",
              descripcion:
                "Sintetiza feedback de equipo en patrones, propone acciones concretas. Buena para empezar la conversación de mejora.",
              icono: "RotateCcw",
            },
          ],
        },
      ],
    },
    {
      titulo: "Plantillas que se reutilizan en cada proyecto",
      secciones: [
        {
          tipo: "promptlab",
          eyebrow: "Tres prompts de uso semanal",
          texto:
            "Plantillas listas para guardar como Project / Custom GPT / Gem. Cargas el contexto del proyecto una vez y luego cada semana solo pegas las notas.",
          ejemplos: [
            {
              id: "status-weekly",
              label: "Status semanal",
              icono: "ClipboardList",
              rol: "Actúa como Project Manager senior que comunica con sponsors ejecutivos.",
              tarea: "Convierte estas notas crudas de la semana en un status report ejecutivo.",
              contexto:
                "Proyecto: implementación de CRM para empresa con 200 empleados. Plazo total 4 meses, estamos en semana 6. Sponsor lee 30 segundos: necesita saber estado general, qué necesita escalar y qué viene la próxima semana. Notas crudas adjuntas son una mezcla de bullet points y conversaciones por chat.",
              formato:
                "Formato fijo: Semáforo global (verde/amarillo/rojo + 1 línea) · Avance vs plan (en %) · 3 logros · 2 bloqueos con dueño · 3 prioridades próxima semana · Decisiones que necesitamos del sponsor. Máximo 250 palabras.",
            },
            {
              id: "risk-register",
              label: "Mapa de riesgos",
              icono: "AlertTriangle",
              rol: "Actúa como PMO con experiencia identificando riesgos en proyectos de transformación.",
              tarea: "A partir del brief del proyecto, identifica los 8 riesgos principales con su mitigación.",
              contexto:
                "Proyecto: migración de ERP en empresa de retail. 14 meses. Cambio de proveedor. Equipo interno mixto (algunos llevan años con el sistema viejo). Histórico: dos intentos anteriores fallidos (uno por scope creep, otro por mala adopción).",
              formato:
                "Tabla: Riesgo · Categoría (técnico/equipo/negocio/proveedor) · Probabilidad (alta/media/baja) · Impacto · Mitigación concreta · Owner sugerido. Ordena de mayor a menor riesgo (impacto × probabilidad).",
            },
            {
              id: "retro",
              label: "Síntesis de retro",
              icono: "RotateCcw",
              rol: "Actúa como facilitador neutral que extrae patrones de feedback dispar.",
              tarea: "Sintetiza las notas de retrospectiva del sprint y propón acciones para el próximo.",
              contexto:
                "Equipo de 7 personas, sprint de 2 semanas. Notas: 14 stickies en \"What went well\", 11 en \"What didn't\", 9 en \"What to try\". Hay quejas recurrentes sobre testing y dudas sobre la priorización del backlog. Esta es la retro 4 del proyecto.",
              formato:
                "Output: 3 patrones positivos · 3 patrones a corregir (con causa probable, no síntoma) · 3 acciones concretas para próximo sprint (owner sugerido, criterio de éxito). Sin culpar a personas concretas, hablar de procesos.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Chaining real: del brief al plan",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cómo encadenar prompts para arrancar un proyecto",
          texto:
            "Un solo megaprompt no produce un buen plan. Esta es la cadena típica que un PM ejecuta en 30-40 minutos con la IA y sale con un kickoff sólido.",
          pasos: [
            {
              titulo: "1. Clarificar objetivos",
              descripcion:
                "«Antes de redactar nada, dime 7 preguntas críticas que necesito responder para que este proyecto tenga objetivos claros y medibles». Tú las contestas con el sponsor en una llamada de 30 min.",
            },
            {
              titulo: "2. Generar alcance y fuera de alcance",
              descripcion:
                "Con las respuestas, prompt: «Redacta alcance e items explícitamente fuera de alcance. Sé concreto, evita términos vagos como `optimizar` o `mejorar`».",
            },
            {
              titulo: "3. Identificar stakeholders y RACI",
              descripcion:
                "«Para este alcance, propón mapa RACI con roles tipo (no nombres). Marca decisiones que requieren consenso vs. unilaterales».",
            },
            {
              titulo: "4. Análisis de riesgos",
              descripcion:
                "«Con todo lo anterior, mapa de 8 riesgos con probabilidad × impacto y mitigación inicial». Usa la plantilla del paso anterior.",
            },
            {
              titulo: "5. Borrador del kickoff doc",
              descripcion:
                "«Une todo en un documento de kickoff de 2 páginas. Tono ejecutivo, sin jerga PM. Cierra con próximos pasos y fecha del primer status».",
            },
            {
              titulo: "6. Revisión crítica",
              descripcion:
                "«Lee el documento como si fueras el sponsor más exigente. Marca: contradicciones, asunciones no validadas, métricas ambiguas». Aplicas correcciones y listo.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Cada paso de la cadena tiene UN objetivo. Esto evita que la IA \"se invente\" piezas que no le diste y te deja revisar paso a paso. El paso 1 (preguntas críticas) suele ser el más infravalorado: te ahorra varias rondas de retrabajo.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Quieres que la IA prepare un status report semanal de 5 proyectos a la vez. ¿Cuál es el riesgo principal?",
          opciones: [
            { texto: "Que tarde demasiado en generarlo.", correcta: false },
            { texto: "Que mezcle datos entre proyectos y produzca información incorrecta.", correcta: true },
            { texto: "Que no encuentre las plantillas.", correcta: false },
            { texto: "Que use mal el lenguaje.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Mezclar contextos de proyectos distintos es la fuente principal de errores en reportes generados por IA. Solución: un Project / Custom GPT por proyecto, o un solo prompt por proyecto con su contexto claramente delimitado.",
          feedbackIncorrecto:
            "El riesgo serio es la contaminación cruzada de contextos: cifras del proyecto A en el reporte del B. Trabajar proyecto a proyecto, con contextos aislados, lo elimina. La velocidad y el lenguaje no son el problema crítico aquí.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Quieres usar IA para generar un análisis de riesgos sólido. ¿Qué paso elevaría MÁS la calidad?",
          opciones: [
            { texto: "Pedirlo en inglés.", correcta: false },
            { texto: "Pedir directamente «dame 8 riesgos» sin más contexto.", correcta: false },
            { texto: "Darle contexto del proyecto + historial de proyectos similares fallidos + criterios de impacto/probabilidad explícitos.", correcta: true },
            { texto: "Pedir 20 riesgos en lugar de 8.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. La calidad del análisis de riesgos depende casi enteramente del contexto. Mencionar proyectos similares que fallaron y por qué entrena el output. Sin eso, la IA produce riesgos genéricos que cualquiera podría escribir.",
          feedbackIncorrecto:
            "Más riesgos sin contexto solo añade ruido. La palanca real es el contexto: detalles del proyecto, qué falló en proyectos parecidos y criterios explícitos para impacto/probabilidad. Eso convierte un análisis genérico en uno accionable.",
        },
      ],
    },
  ],
};

export default capitulo;
