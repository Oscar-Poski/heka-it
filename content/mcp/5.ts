import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "mcp",
  numero: 5,
  titulo: "Nivel 5 · MCP vs Function Calling, RAG y plugins",
  pasos: [
    {
      titulo: "Por qué existe MCP si ya había function calling",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema N×M otra vez",
          texto:
            "Antes de MCP, cada proveedor de LLM tenía su propio formato de function calling (OpenAI tools, Anthropic tools, Gemini functions). Y cada app que quisiera usar una herramienta tenía que implementarla a medida para cada modelo. MCP no reemplaza function calling: lo estandariza. El modelo sigue eligiendo tools como siempre; lo nuevo es que las tools vienen de servidores intercambiables.",
        },
        {
          tipo: "comparacion",
          eyebrow: "Function calling vs MCP",
          texto:
            "Lo que cambia: dónde vive la definición de la tool y quién la mantiene.",
          columnas: [
            {
              titulo: "Function calling solo",
              subtitulo: "Cada app integra cada tool",
              items: [
                "Tools definidas dentro de cada aplicación",
                "Si cambias de cliente, reescribes integraciones",
                "Acoplado al SDK del proveedor (OpenAI/Anthropic/…)",
                "Compartir tools entre apps = copiar código",
                "Bueno para tools internas y muy específicas",
              ],
            },
            {
              titulo: "MCP",
              subtitulo: "Tools como servidores reutilizables",
              destacada: true,
              items: [
                "Tools vivien en servidores independientes",
                "Mismo server sirve a Claude Desktop, Cursor, etc.",
                "Protocolo agnóstico del modelo",
                "Ecosistema compartido (un server, muchos clientes)",
                "Bueno para integraciones reusables y open source",
              ],
            },
          ],
        },
      ],
    },
    {
      titulo: "MCP, RAG y plugins: cuándo usar qué",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Tres soluciones para problemas distintos",
          texto:
            "Es fácil confundirlas porque las tres «dan más conocimiento» al modelo. Pero atacan ángulos distintos.",
          items: [
            {
              titulo: "RAG",
              descripcion:
                "Inyecta documentos relevantes en el contexto antes de responder. Sirve para preguntas sobre un corpus grande y estático. Es de lectura.",
              icono: "BookOpen",
            },
            {
              titulo: "MCP",
              descripcion:
                "Da al modelo herramientas que ejecuta on-demand. Sirve para acciones, datos vivos y APIs externas. Lee Y escribe.",
              icono: "PlugZap",
            },
            {
              titulo: "Plugins propietarios",
              descripcion:
                "Lo mismo que MCP pero atado a un ecosistema (ChatGPT plugins, custom GPTs). Más fácil de descubrir, pero no portable.",
              icono: "Puzzle",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "RAG y MCP no compiten: se combinan. Un servidor MCP puede exponer una tool `search_docs` que internamente hace RAG. Así el modelo decide cuándo buscar, y tú aprovechas tu pipeline de embeddings sin acoplarlo al cliente.",
        },
      ],
    },
    {
      titulo: "Cómo decidir",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Árbol de decisión práctico",
          texto:
            "Ante una nueva necesidad de «conectar el modelo a algo», recorre estas preguntas en orden.",
          pasos: [
            {
              titulo: "¿El modelo necesita HACER algo o solo LEER?",
              descripcion:
                "Solo leer un corpus grande y estable → RAG. Necesita ejecutar acciones (crear issues, mandar emails, hacer queries) → MCP. Ambos → MCP que internamente use RAG.",
            },
            {
              titulo: "¿La herramienta es interna y única o reusable?",
              descripcion:
                "Una lógica muy específica de tu app que nadie más va a usar → function calling tradicional, sin pasarla por MCP. Algo que tendría sentido compartir entre apps o usuarios → servidor MCP.",
            },
            {
              titulo: "¿Dónde corren tus clientes?",
              descripcion:
                "Si tus usuarios usan Claude Desktop, Cursor, Zed, etc., MCP es lo natural (todos lo soportan). Si solo tienes una app propia con API directa a Claude, function calling puede bastar.",
            },
            {
              titulo: "¿Hay ya un server MCP que lo haga?",
              descripcion:
                "Antes de escribir nada: revisa el catálogo oficial y la comunidad. Hay servers ya hechos para GitHub, Postgres, Slack, Notion, Brave Search, filesystem. Reutilizar > construir.",
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
            "Tu equipo quiere que Claude pueda «buscar en los 5.000 manuales internos y, además, crear tickets de soporte en Zendesk». ¿Qué arquitectura tiene más sentido?",
          opciones: [
            { texto: "Solo RAG sobre los 5.000 manuales.", correcta: false },
            { texto: "Solo function calling propietario en la app.", correcta: false },
            { texto: "Un servidor MCP con una tool de RAG (`search_docs`) y otra tool de acción (`create_ticket`).", correcta: true },
            { texto: "Fine-tuning del modelo con los manuales.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. RAG solo cubre la lectura; necesitas también la acción (crear ticket). MCP unifica ambas: un server expone `search_docs` (que internamente hace RAG) y `create_ticket` (que llama a Zendesk). El modelo decide cuándo usar cada una.",
          feedbackIncorrecto:
            "RAG solo no resuelve la creación del ticket (no tiene acciones). Function calling propietario funciona pero te ata a un cliente. Fine-tuning no soluciona ni la búsqueda ni la integración con Zendesk. MCP es el patrón que combina lectura y acción de forma portable.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Cuál de estas afirmaciones sobre MCP y function calling es CORRECTA:",
          opciones: [
            { texto: "MCP elimina function calling: el modelo ya no llama tools.", correcta: false },
            { texto: "MCP estandariza de dónde vienen las tools, pero el modelo las invoca con el mismo mecanismo de function calling que ya conocía.", correcta: true },
            { texto: "MCP solo funciona con Claude; los demás modelos usan function calling.", correcta: false },
            { texto: "Function calling es más nuevo que MCP.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. MCP no cambia cómo el modelo llama una tool: sigue siendo un tool_call con name y arguments. Lo que cambia es que las definiciones vienen de servidores reutilizables vía un protocolo común, en vez de hardcodearse en cada app y cada SDK.",
          feedbackIncorrecto:
            "MCP no reemplaza function calling: lo aprovecha. El modelo sigue emitiendo tool_calls como antes; lo que MCP estándariza es de dónde vienen esas tools y cómo se ejecutan. Y aunque nació en Anthropic, el protocolo es abierto y otros clientes (Cursor, Zed) ya lo soportan.",
        },
      ],
    },
  ],
};

export default capitulo;
