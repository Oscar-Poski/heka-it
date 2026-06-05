import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering-aplicado",
  numero: 1,
  titulo: "Nivel 1 · Técnicas avanzadas: system prompts, chaining y meta-prompting",
  pasos: [
    {
      titulo: "Más allá de rol, tarea, contexto y formato",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Cuándo dejar de \"redactar prompts\" y empezar a diseñarlos",
          texto:
            "Hasta ahora pensábamos un prompt como un único mensaje. En la vida real, los buenos resultados muchas veces vienen de varios mensajes conectados, instrucciones que persisten entre conversaciones y prompts que tú no escribes solo: te ayuda la propia IA a escribirlos. Tres técnicas cambian la escala de lo que puedes pedir.",
        },
        {
          tipo: "grid",
          eyebrow: "Tres herramientas que multiplican",
          items: [
            {
              titulo: "System prompts",
              descripcion:
                "Instrucciones que se aplican a TODA la conversación o proyecto. Definen rol, restricciones y formato una sola vez. En ChatGPT son Custom GPTs; en Claude, Projects; en Gemini, Gems.",
              icono: "Cog",
            },
            {
              titulo: "Prompt chaining",
              descripcion:
                "Una tarea grande se parte en varios prompts encadenados. La salida del primero alimenta al siguiente. Resultados más fiables que un único megaprompt.",
              icono: "Link",
            },
            {
              titulo: "Meta-prompting",
              descripcion:
                "Pides a la IA que mejore tu propio prompt antes de ejecutarlo. Ella conoce sus límites mejor que tú.",
              icono: "Sparkles",
            },
          ],
        },
      ],
    },
    {
      titulo: "System prompts en la práctica",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Anatomía de un buen system prompt",
          texto:
            "Toca cada pieza. La diferencia entre un Custom GPT útil y uno que estorba está en estos cuatro bloques.",
          partes: [
            {
              id: "identidad",
              label: "Identidad",
              color: "#3A8DFF",
              detalle:
                "Quién es el asistente. Ej: «Eres el asistente administrativo de Heka IT. Tu trabajo es preparar comunicaciones internas, agendas y respuestas a clientes». Encuadra todo lo demás.",
            },
            {
              id: "tono",
              label: "Tono y estilo",
              color: "#00A896",
              detalle:
                "Cómo debe sonar. «Profesional pero cercano, español de México, frases cortas, sin emojis». Aplica a todas las salidas sin tener que recordarlo en cada turno.",
            },
            {
              id: "reglas",
              label: "Reglas duras",
              color: "#FF6B35",
              detalle:
                "Qué no debe hacer nunca. «Nunca prometas plazos sin antes preguntarme. Nunca compartas precios sin confirmación previa». Las reglas explícitas evitan errores costosos.",
            },
            {
              id: "formato",
              label: "Formato por defecto",
              color: "#8B5CF6",
              detalle:
                "Estructura de salida que se aplica si no pido lo contrario. «Email: saludo, cuerpo en 2-3 párrafos cortos, cierre con próximos pasos». Ahorra describirlo en cada prompt.",
            },
          ],
        },
        {
          tipo: "chat",
          eyebrow: "System prompt + mensaje del usuario",
          texto:
            "Así se ve en un Custom GPT o un Claude Project: el system prompt vive arriba (invisible para quien chatea), y los usuarios solo escriben mensajes cortos confiando en que la \"personalidad\" ya está cargada.",
          mensajes: [
            {
              rol: "user",
              texto:
                "[System prompt - cargado una vez]\nEres el asistente comercial de Acme. Hablas español neutro, cercano. Nunca prometes descuentos. Estructura los correos en: saludo, 1 párrafo de empatía, 1 párrafo de propuesta, próximos pasos. Firmas siempre como \"Equipo Acme\".\n\n[Mensaje del usuario]\nResponde a Laura que pide reducir el precio de la propuesta enviada ayer.",
            },
            {
              rol: "claude",
              texto:
                "Hola Laura,\n\nGracias por darnos tu feedback tan rápido. Entendemos que el precio es un punto importante y queremos asegurarnos de que la propuesta refleje el valor real para tu equipo.\n\nMe gustaría agendar 20 minutos esta semana para revisar contigo el alcance y ver si hay funcionalidades que ajustar antes de hablar de precio. A menudo encontramos formas de adaptar la propuesta sin sacrificar lo esencial.\n\n¿Te viene bien el jueves a las 11:00?\n\nEquipo Acme",
            },
          ],
        },
      ],
    },
    {
      titulo: "Prompt chaining",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cuando un solo prompt no basta",
          texto:
            "Una tarea grande se descompone en pasos. Cada uno tiene un objetivo claro y la salida alimenta al siguiente. La IA acierta más cuando cada paso pide UNA cosa.",
          pasos: [
            {
              titulo: "Paso 1 — Extraer",
              descripcion:
                "«De este reporte de 30 páginas, extrae las 5 cifras clave del trimestre con su fuente exacta. Solo cifras, sin opinión».",
            },
            {
              titulo: "Paso 2 — Comparar",
              descripcion:
                "Pegas la salida del paso 1 y pides: «Compara cada cifra con el trimestre anterior y marca variaciones >10%».",
            },
            {
              titulo: "Paso 3 — Narrar",
              descripcion:
                "«Con esa tabla, redacta 3 párrafos para el comité. Tono ejecutivo. Identifica la causa probable de cada variación crítica».",
            },
            {
              titulo: "Paso 4 — Pulir",
              descripcion:
                "«Revisa el texto del paso 3 buscando: cifras que no concuerden, afirmaciones sin respaldo, jerga innecesaria. Devuelve versión limpia».",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Regla: si tu prompt cabe en una sola frase imperativa («haz X»), una sola llamada basta. Si necesitas dos «y luego», considera encadenar. Cada eslabón es más fácil de auditar y depurar.",
        },
      ],
    },
    {
      titulo: "Meta-prompting",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Pídele a la IA que mejore tu propio prompt",
          texto:
            "Antes de ejecutar una tarea importante, gasta 30 segundos en pedir crítica del prompt. Suele encontrar gaps que tú no ves.",
          mensajes: [
            {
              rol: "user",
              texto:
                "Antes de ejecutar este prompt, dime qué información te falta para hacerlo bien y qué partes son ambiguas:\n\n«Redacta una propuesta para un cliente que quiere automatizar su proceso de facturación».",
            },
            {
              rol: "claude",
              texto:
                "Para hacerla bien me falta:\n1. Sector y tamaño del cliente (afecta tono y referencias).\n2. Stack actual de facturación (¿qué reemplazar/integrar?).\n3. Volumen mensual de facturas y dolor concreto (tiempo, errores, cumplimiento).\n4. Presupuesto orientativo o rango aceptable.\n5. Tu objetivo de la propuesta: ¿agendar reunión, cerrar, calificar?\n6. Formato esperado: ¿1 página, slide deck, documento detallado?\n\nAmbigüedad: «propuesta» puede ser un email corto, un PDF formal o un mini-deck. Dime el formato y reescribo el prompt antes de generar nada.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Patrón útil: «Antes de responder, dime qué falta». Lo conviertes en regla de tu system prompt para tareas de alto coste (propuestas, comunicaciones a clientes, informes financieros) y la IA aprenderá a no improvisar con datos inventados.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Cada lunes preparas el mismo tipo de minuta tras la reunión semanal: mismo formato, mismo tono, mismas secciones. ¿Cuál es la solución más eficiente?",
          opciones: [
            { texto: "Copiar y pegar el prompt completo cada semana.", correcta: false },
            { texto: "Pedirle a la IA que adivine el formato.", correcta: false },
            { texto: "Hacer prompt chaining cada vez.", correcta: false },
            { texto: "Configurar un Custom GPT / Claude Project con el system prompt de \"redactor de minutas\" y pegar solo las notas crudas cada semana.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Un system prompt cargado una sola vez convierte una tarea repetitiva en un \"pega tus notas y listo\". Es el caso ideal: instrucciones estables + insumo cambiante.",
          feedbackIncorrecto:
            "Copiar-pegar funciona pero es frágil y desperdicia tiempo cada semana. Para tareas recurrentes con estructura fija, un system prompt (Custom GPT, Claude Project, Gem) cargado una vez es la opción más eficiente.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tienes que producir un análisis trimestral de 12 páginas con 4 secciones distintas (cifras, comparativa, narrativa, recomendaciones). ¿Qué enfoque da mejor resultado?",
          opciones: [
            { texto: "Un único prompt enorme que pida todo de golpe.", correcta: false },
            { texto: "Prompt chaining: una llamada por sección, encadenando las salidas.", correcta: true },
            { texto: "Pedir un borrador y rezar.", correcta: false },
            { texto: "Usar meta-prompting pero ejecutar en un solo turno.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Tareas largas con múltiples sub-tareas se benefician de chaining: cada eslabón es enfocado, auditable y reutilizable. Un megaprompt suele perder calidad en alguna sección.",
          feedbackIncorrecto:
            "Para informes largos con secciones distintas, el chaining produce piezas más sólidas y trazables. Un megaprompt pierde foco; un borrador a la suerte es lo que precisamente quieres evitar en finanzas.",
        },
      ],
    },
  ],
};

export default capitulo;
