import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "mcp",
  numero: 3,
  titulo: "Nivel 3 · Las tres primitivas: Tools, Resources, Prompts",
  pasos: [
    {
      titulo: "Tres formas de exponer capacidades",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Qué puede ofrecer un servidor MCP",
          texto:
            "Un servidor MCP no es una API monolítica. Expone capacidades clasificadas en tres «primitivas». Saber cuál corresponde a cada caso es la diferencia entre un server limpio y uno que confunde al modelo.",
        },
        {
          tipo: "grid",
          eyebrow: "Las tres primitivas",
          items: [
            {
              titulo: "Tools (acciones)",
              descripcion:
                "Funciones que el modelo puede invocar para HACER algo: `create_issue`, `run_query`, `send_message`. Tienen efectos. Las decide el modelo en plena conversación.",
              icono: "Hammer",
            },
            {
              titulo: "Resources (datos)",
              descripcion:
                "Contenido que el modelo puede LEER: un archivo, una fila de BD, un documento. Identificado por URI (`file://`, `postgres://`). Los selecciona el usuario o el host.",
              icono: "FileText",
            },
            {
              titulo: "Prompts (plantillas)",
              descripcion:
                "Plantillas reutilizables de conversación que el usuario invoca como slash commands. Ej: `/review-pr`, `/explain-bug`. Pre-rellenan contexto y instrucciones.",
              icono: "Sparkles",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Regla rápida: si el modelo decide cuándo usarlo, es Tool. Si el usuario lo elige antes de pedir algo, es Resource o Prompt. Tools = autonomía del modelo; Resources/Prompts = control del humano.",
        },
      ],
    },
    {
      titulo: "Cómo se ve una Tool",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Tool call en pleno chat",
          texto:
            "El modelo recibe la lista de tools al inicio de la conversación. Cuando decide usar una, emite una `tool_call`. El host la ejecuta contra el servidor MCP y devuelve el resultado.",
          mensajes: [
            {
              rol: "user",
              texto: "¿Cuántos issues abiertos hay en el repo anthropics/claude-code?",
            },
            {
              rol: "claude",
              texto:
                "Voy a consultar GitHub.\n\n[tool_call] github.list_issues({ repo: \"anthropics/claude-code\", state: \"open\" })\n[tool_result] 47 issues abiertos, los 5 más recientes: #1203, #1199, #1187, #1185, #1180.\n\nHay 47 issues abiertos en anthropics/claude-code. Los más recientes tocan temas de hooks, MCP y permisos.",
            },
          ],
        },
        {
          tipo: "pasos",
          eyebrow: "Ciclo de vida de una tool call",
          texto:
            "Lo que ocurre entre que el usuario pregunta y recibe la respuesta final.",
          pasos: [
            {
              titulo: "1. El modelo elige la tool",
              descripcion:
                "Mira el catálogo expuesto y emite un JSON con `name` y `arguments`. Hasta aquí, nada se ejecutó: solo lo pidió.",
            },
            {
              titulo: "2. El host pide consentimiento",
              descripcion:
                "Por seguridad, muchas tools requieren que el usuario apruebe la ejecución (o que las haya marcado como auto-allow). El host muestra el prompt: «¿permitir github.list_issues?».",
            },
            {
              titulo: "3. El client llama al server",
              descripcion:
                "Envía `tools/call` con los argumentos. El server ejecuta la lógica (llamada HTTP a GitHub, query SQL, etc.) y devuelve el resultado.",
            },
            {
              titulo: "4. El modelo recibe el resultado",
              descripcion:
                "El resultado entra en el contexto como un mensaje de tool. El modelo lo lee y decide: ¿responde al usuario? ¿llama otra tool? Puede encadenar varias.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Tools vs Resources, en concreto",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "La confusión más común",
          texto:
            "Mucha gente expone como tool lo que debería ser resource y viceversa. Esta tabla aclara cuándo va cada cuál.",
          columnas: [
            {
              titulo: "Tool",
              subtitulo: "El modelo decide cuándo llamar",
              destacada: true,
              items: [
                "Tiene efectos (escribe, manda, ejecuta)",
                "El modelo elige los argumentos",
                "Ej: `create_issue`, `delete_file`, `run_sql`",
                "Suele requerir confirmación del usuario",
                "Aparece en la lista de capabilities del modelo",
              ],
            },
            {
              titulo: "Resource",
              subtitulo: "El usuario/host selecciona qué leer",
              items: [
                "Solo lectura, sin efectos",
                "Identificada por URI estable",
                "Ej: un archivo, fila de BD, página de Notion",
                "El usuario la «adjunta» a la conversación",
                "El modelo la consume como contexto, no la invoca",
              ],
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
            "Quieres que el modelo pueda CREAR un ticket en Jira cuando el usuario se lo pide en lenguaje natural. ¿Qué primitiva expones?",
          opciones: [
            { texto: "Un Resource con URI `jira://tickets`.", correcta: false },
            { texto: "Un Prompt llamado `/crear-ticket`.", correcta: false },
            { texto: "Una Tool llamada `create_jira_ticket`.", correcta: true },
            { texto: "Las tres a la vez, siempre.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Crear un ticket es una ACCIÓN con efecto: la decide el modelo cuando interpreta la intención del usuario. Eso es una tool. Resources son solo lectura; prompts son plantillas que invoca el humano.",
          feedbackIncorrecto:
            "La regla es «si tiene efecto y la decide el modelo, es tool». Crear un ticket modifica Jira, así que es una tool (`create_jira_ticket`). Un resource serviría para LEER tickets existentes; un prompt sería una plantilla que el humano invoca con slash command.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "El usuario quiere que el modelo lea el archivo `docs/architecture.md` y resuma sus puntos clave. ¿Cuál es la forma más limpia en MCP?",
          opciones: [
            { texto: "El modelo llama a una tool `read_file` que devuelve el contenido.", correcta: false },
            { texto: "El usuario adjunta el archivo como Resource (URI `file:///docs/architecture.md`) y el modelo lo lee del contexto.", correcta: true },
            { texto: "El servidor crea un Prompt automático con el contenido.", correcta: false },
            { texto: "No se puede: MCP no soporta archivos.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El usuario está eligiendo explícitamente qué leer, así que es un Resource. Adjuntarlo como recurso pone el contenido en el contexto desde el inicio, sin necesidad de gastar una tool call ni pedir confirmación. Limpio y barato.",
          feedbackIncorrecto:
            "Cuando el usuario elige conscientemente qué documento debe ver el modelo, la primitiva natural es Resource. Una tool `read_file` también funcionaría, pero gasta una llamada extra y suele pedir confirmación. Resources son justo para «mete esto al contexto».",
        },
      ],
    },
  ],
};

export default capitulo;
