import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering-aplicado",
  numero: 5,
  titulo: "Nivel 5 · Prompts para finanzas, reportes y tu biblioteca personal",
  pasos: [
    {
      titulo: "Finanzas: precisión por encima de creatividad",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Donde un decimal cambia la decisión",
          texto:
            "Finanzas es el dominio donde la IA exige más disciplina. Un dato inventado en un email es incómodo; en un informe financiero, costoso. La regla: la IA no calcula a ojo, hace operaciones verificables (ChatGPT con intérprete de código, o tú validando) y nunca produce cifras sin trazabilidad.",
        },
        {
          tipo: "comparacion",
          eyebrow: "Dos modos de trabajar con cifras",
          texto:
            "Diferenciar estos dos modos evita el 90% de los errores de IA en finanzas.",
          columnas: [
            {
              titulo: "Modo narrativa",
              subtitulo: "La IA explica datos que TÚ le diste",
              destacada: true,
              items: [
                "Tú aportas las cifras finales",
                "La IA solo redacta el comentario",
                "Bajo riesgo de error de cálculo",
                "Pide explicitar cada cifra usada",
                "Ideal: comentario de variación, executive summary",
              ],
            },
            {
              titulo: "Modo cálculo",
              subtitulo: "La IA opera sobre datos crudos",
              items: [
                "Le das una fuente (Excel, CSV, PDF)",
                "Ejecuta operaciones (mejor con intérprete)",
                "Riesgo si no verificas: alucinaciones numéricas",
                "Pide siempre mostrar fórmulas y supuestos",
                "Ideal: análisis exploratorio, primer cruce de datos",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Regla dura para finanzas: pídele a la IA que devuelva las cifras como tabla con la fórmula o fuente al lado, no solo el número final. Si no puede mostrar la fuente, es señal de que la inventó.",
        },
      ],
    },
    {
      titulo: "Plantillas financieras tipo",
      secciones: [
        {
          tipo: "promptlab",
          eyebrow: "Tres prompts de uso frecuente en finanzas",
          texto:
            "Reutilizables tras un fin de mes o cierre trimestral. Diseñados para minimizar alucinación: el trabajo creativo de la IA es la narrativa, no las cifras.",
          ejemplos: [
            {
              id: "variacion",
              label: "Comentario de variación",
              icono: "TrendingUp",
              rol: "Actúa como controller financiero. Conciso, sin adornos. Solo datos y causa.",
              tarea: "Redacta el comentario de variación del P&L del mes vs presupuesto.",
              contexto:
                "Adjunto tabla con líneas: ingresos, COGS, OPEX, EBITDA. Cada línea trae: real, presupuesto, var absoluta, var %. Si una variación supera ±5%, hay que comentar causa probable. Te paso también notas de operaciones del mes (lanzamiento producto X, baja del cliente Y, contratación inesperada Z).",
              formato:
                "Output: bullet por cada línea con var >5%. Formato: «Línea — var: +X% / +Y€ — causa probable: ...». Cierra con 1 párrafo de outlook para el siguiente mes. Sin opiniones, solo lectura de datos. Máximo 300 palabras.",
            },
            {
              id: "executive-summary",
              label: "Executive summary",
              icono: "FileText",
              rol: "Actúa como CFO redactando para el board: brevedad y prioridades.",
              tarea: "Convierte el reporte financiero mensual completo (adjunto) en un executive summary.",
              contexto:
                "El reporte tiene 20 páginas con tablas, comentarios y gráficos. El board lee 2 minutos. Le importa: estamos en plan o no, qué tres cosas movieron el resultado, qué decisión necesitamos del board este mes.",
              formato:
                "Documento de 1 página: titular en 1 frase (estado vs plan) · 3 highlights cuantificados · 3 lowlights cuantificados · 1 sección \"decisión solicitada\" (vacía si no aplica). Cifras con fuente. Tono ejecutivo, sin jerga financiera complicada.",
            },
            {
              id: "presupuesto",
              label: "Defensa de presupuesto",
              icono: "Wallet",
              rol: "Actúa como business partner financiero acompañando a un líder de área.",
              tarea: "Prepara la narrativa de defensa del presupuesto Q+1 del área de Marketing.",
              contexto:
                "Marketing pide un 18% más que el año pasado. Justificación: nuevo canal de paid social, ampliación a 2 mercados, +1 headcount senior. El CEO va a cuestionar duro el gasto. Tengo 3 datos a favor: CAC bajó 22% año a año, expansión de mercados ya probada en piloto, vacante actual lleva 4 meses sin cubrir.",
              formato:
                "Estructura de slide: 1 frase titular del pitch · 3 bullets de evidencia con cifra concreta · 1 bullet de riesgo si NO se aprueba · 1 propuesta de KPIs de revisión trimestral. Tono confiado, no defensivo.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Tu biblioteca de prompts",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Convertir buenos prompts en activo personal",
          texto:
            "Después de unas semanas usando IA aplicada, descubres que escribes los mismos 10-15 prompts una y otra vez. Empaquetarlos como biblioteca personal multiplica el retorno de todo lo aprendido.",
          pasos: [
            {
              titulo: "1. Detecta el patrón",
              descripcion:
                "Cuando notes que repites un prompt similar más de 3 veces, esa es la señal de que merece una plantilla. Cópialo a un documento aparte.",
            },
            {
              titulo: "2. Genera variables claras",
              descripcion:
                "Identifica qué partes cambian (el cliente, el mes, el proyecto) y márcalas con placeholders tipo `{{cliente}}`, `{{mes}}`. Lo que NO cambia, déjalo fijo.",
            },
            {
              titulo: "3. Empaqueta como Project / GPT / Gem",
              descripcion:
                "Las plantillas de más alto uso se convierten en Custom GPT (ChatGPT), Project (Claude) o Gem (Gemini). El system prompt encapsula rol + tono + reglas duras + formato. Tú solo pegas el insumo del momento.",
            },
            {
              titulo: "4. Versiona y mide",
              descripcion:
                "Cuando ajustas un prompt, anota qué cambiaste y por qué. Revisa cada mes: ¿qué plantilla usaste más? ¿cuál habría que jubilar? La biblioteca es viva, no monumento.",
            },
            {
              titulo: "5. Compártela con tu equipo",
              descripcion:
                "Una biblioteca compartida multiplica el efecto. Hace que toda la organización suba de nivel sin tener que enseñar individualmente. Es el output más valioso de aprender prompt engineering aplicado.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Métrica simple para tu biblioteca: ¿cuánto tiempo te ahorra a la semana? Si una plantilla te ahorra 20 minutos cada lunes, son 17 horas al año. Cinco plantillas activas son una semana de trabajo recuperada cada año.",
        },
      ],
    },
    {
      titulo: "Cierre: el prompt engineering aplicado en una frase",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Para llevarte",
          texto:
            "Prompt engineering aplicado no es \"escribir mejor\": es diseñar pequeños sistemas que convierten tareas repetitivas en flujos de IA fiables. Rol, tarea, contexto y formato siguen mandando. Lo que añadiste en este nivel son herramientas (system prompts, chaining, meta-prompting), criterio (qué modelo para qué tarea) y, sobre todo, la disciplina de tratar tus prompts como código: probar, versionar, reutilizar.",
        },
        {
          tipo: "analogia",
          eyebrow: "El cambio mental",
          items: [
            {
              label: "Antes",
              valor: "Cada vez le pides a la IA \"que te ayude con esto\". Empiezas de cero.",
              icono: "RefreshCw",
            },
            {
              label: "Ahora",
              valor: "Tienes un kit de plantillas vivas y diseñadas por tarea. La IA es un colega entrenado, no un autocompletado.",
              icono: "Library",
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
            "Generas el comentario de variación del P&L con IA y devuelve cifras concretas (€ y %). ¿Qué deberías exigir SIEMPRE en el output?",
          opciones: [
            { texto: "Que use más adjetivos.", correcta: false },
            { texto: "Que las cifras sean siempre redondas.", correcta: false },
            { texto: "Que añada gráficos por su cuenta.", correcta: false },
            { texto: "Que muestre cada cifra junto con su fuente o fórmula, para auditarlas antes de enviar.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Trazabilidad de cifras es la regla de oro en finanzas con IA. Sin fuente al lado de cada número, no puedes detectar alucinaciones a tiempo. Conviértelo en regla dura del system prompt.",
          feedbackIncorrecto:
            "En finanzas, la fiabilidad importa más que la creatividad. Cualquier cifra que no puedas trazar es un riesgo. Pedir fuente o fórmula al lado de cada número es la única forma de auditar el output antes de enviarlo.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Repites el mismo tipo de prompt 5 veces al mes. ¿Qué hacer?",
          opciones: [
            { texto: "Convertirlo en plantilla con placeholders y/o empaquetarlo como Custom GPT, Project o Gem.", correcta: true },
            { texto: "Seguir reescribiéndolo cada vez: es más rápido.", correcta: false },
            { texto: "Memorizarlo.", correcta: false },
            { texto: "Pedirle a la IA que lo memorice.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Cualquier prompt usado más de 3 veces merece existir como plantilla. El paso siguiente es empaquetarlo en la herramienta nativa del modelo (Custom GPT, Project, Gem) para no tener ni que copiar el prompt: solo pegas el insumo.",
          feedbackIncorrecto:
            "Reescribir 60 veces al año un prompt que podría vivir empaquetado es desperdicio. Plantilla + Custom GPT / Project / Gem convierte la tarea en \"pegar y enter\". Es el output natural de aprender prompt engineering aplicado.",
        },
      ],
    },
  ],
};

export default capitulo;
