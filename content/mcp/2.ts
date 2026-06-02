import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "mcp",
  numero: 2,
  titulo: "Nivel 2 · Arquitectura: Host, Client y Server",
  pasos: [
    {
      titulo: "Tres piezas que siempre aparecen",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Quién es quién en MCP",
          texto:
            "Cada vez que un modelo usa MCP, hay tres roles. Confundirlos lleva a malentender la mitad de la documentación, así que conviene fijarlos de entrada.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Los tres roles",
          texto:
            "Toca cada pieza para ver qué hace y dónde vive.",
          partes: [
            {
              id: "host",
              label: "Host",
              color: "#00A896",
              detalle:
                "La aplicación que el usuario ve y maneja: Claude Desktop, Cursor, Zed, tu propio agente. Aloja al modelo (o llama a su API) y decide qué servidores MCP están conectados. Es el «cerebro» que orquesta todo.",
            },
            {
              id: "client",
              label: "Client",
              color: "#3A8DFF",
              detalle:
                "Un componente dentro del host. Mantiene una conexión 1-a-1 con un servidor MCP concreto. Si tu host conecta 5 servidores, hay 5 clients corriendo en paralelo dentro de él. Es el que habla MCP de verdad.",
            },
            {
              id: "server",
              label: "Server",
              color: "#F97316",
              detalle:
                "Un programa pequeño que expone capacidades concretas: leer archivos, consultar GitHub, hacer queries SQL, etc. Puede vivir en tu máquina (stdio) o en internet (HTTP/SSE). No conoce al modelo; solo responde lo que le piden.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Regla mental: el host tiene varios clients; cada client habla con un solo server. Un servidor MCP típico hace UNA cosa (filesystem, GitHub, Postgres). No intenta ser una navaja suiza.",
        },
      ],
    },
    {
      titulo: "Cómo se conectan",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "El handshake de arranque",
          texto:
            "Cuando arrancas tu host con un servidor configurado, ocurre esto antes de que puedas usarlo en una conversación.",
          pasos: [
            {
              titulo: "1. El host lanza el servidor",
              descripcion:
                "Lee tu config (claude_desktop_config.json, .cursor/mcp.json…) y ejecuta el comando. Para servidores locales suele ser un `npx` o `python -m`. Para remotos, abre una conexión HTTP.",
            },
            {
              titulo: "2. Negocian capacidades",
              descripcion:
                "Client y server se intercambian versiones de protocolo y qué soportan: ¿el server expone tools? ¿resources? ¿prompts? ¿sampling? Esto se llama `initialize`.",
            },
            {
              titulo: "3. El client pide el catálogo",
              descripcion:
                "Llama a `tools/list`, `resources/list`, `prompts/list`. Recibe nombres, descripciones y esquemas JSON de cada cosa que el servidor sabe hacer.",
            },
            {
              titulo: "4. El host inyecta el catálogo en el modelo",
              descripcion:
                "Convierte la lista en algo que el LLM entienda (tool definitions). A partir de aquí, el modelo «sabe» que existen esas tools y puede pedir usarlas durante la conversación.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Transportes: stdio vs HTTP",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Cómo viajan los mensajes",
          texto:
            "MCP define dos formas principales de transportar los mensajes entre client y server. La elección depende de dónde corre el servidor.",
          columnas: [
            {
              titulo: "stdio (local)",
              subtitulo: "Procesos en tu máquina",
              destacada: true,
              items: [
                "El host arranca al server como subproceso",
                "Mensajes viajan por stdin/stdout en JSON-RPC",
                "Latencia mínima, sin red",
                "Ideal para acceso a archivos, shell, BD local",
                "Es el default de Claude Desktop",
              ],
            },
            {
              titulo: "HTTP + SSE (remoto)",
              subtitulo: "Servidores en internet",
              items: [
                "El server corre como servicio web",
                "Cliente abre HTTP POST + Server-Sent Events",
                "Permite servidores compartidos por varios usuarios",
                "Necesita autenticación (OAuth, tokens)",
                "Ideal para SaaS como GitHub, Notion, Linear",
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
            "Tienes Claude Desktop con 3 servidores MCP conectados: filesystem, GitHub y Postgres. ¿Cuántos clients hay corriendo dentro del host?",
          opciones: [
            { texto: "Uno: el host comparte un solo client para todos los servers.", correcta: false },
            { texto: "Tres: un client por cada server conectado.", correcta: true },
            { texto: "Ninguno: el modelo habla directo con los servers.", correcta: false },
            { texto: "Depende de cuántos usuarios estén conectados.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. La relación client↔server es 1-a-1. Si conectas 3 servidores, el host tiene 3 clients vivos, cada uno con su propio canal de comunicación. Aislar conexiones así evita que un server roto afecte a los demás.",
          feedbackIncorrecto:
            "MCP define un client por cada conexión a un server. Con 3 servers conectados, hay 3 clients dentro del host, cada uno con su transporte y estado independiente. Esto es lo que permite aislar fallos: si GitHub se cae, filesystem sigue funcionando.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Qué transporte tiene más sentido para un servidor MCP que da acceso a la API de Linear (SaaS en la nube)?",
          opciones: [
            { texto: "stdio: el host arranca Linear como subproceso local.", correcta: false },
            { texto: "HTTP + SSE: el server corre como servicio web y se autentica con OAuth.", correcta: true },
            { texto: "Ninguno: Linear no se puede conectar por MCP.", correcta: false },
            { texto: "WebSockets sobre TCP puro, fuera de la spec.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Linear vive en internet, así que su servidor MCP es un servicio HTTP que necesita autenticación. El cliente abre una conexión SSE para recibir streams y autentica con OAuth. stdio no aplica: no puedes lanzar Linear como subproceso.",
          feedbackIncorrecto:
            "stdio solo sirve cuando el servidor corre en tu máquina como subproceso. Para SaaS remotos (Linear, Notion, GitHub), el transporte natural es HTTP + SSE, normalmente con OAuth para autenticarte como tú frente al servicio.",
        },
      ],
    },
  ],
};

export default capitulo;
