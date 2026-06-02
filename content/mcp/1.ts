import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "mcp",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es MCP?",
  pasos: [
    {
      titulo: "El problema que resuelve",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Un modelo encerrado en una caja",
          texto:
            "Un LLM por sí solo es un cerebro brillante sin manos. Sabe muchísimo, pero no puede leer tu Notion, mirar tu calendario, consultar tu base de datos ni ejecutar un script. Cada vez que alguien quería conectar Claude a una herramienta nueva, había que escribir una integración a medida: lenta, frágil y que solo servía para esa app.",
        },
        {
          tipo: "analogia",
          eyebrow: "El USB-C de la IA",
          texto:
            "MCP (Model Context Protocol) es un estándar abierto que define cómo un modelo se conecta a herramientas y datos externos. La analogía oficial de Anthropic es directa: USB-C para aplicaciones de IA.",
          items: [
            {
              label: "Antes (sin MCP)",
              valor:
                "Cada combinación modelo+app necesita su propio cable. 10 modelos × 50 apps = 500 integraciones a mantener.",
              icono: "CableCar",
            },
            {
              label: "Con MCP",
              valor:
                "Un solo protocolo. Cualquier modelo que hable MCP se conecta a cualquier servidor MCP. 10 + 50 piezas, no 500.",
              icono: "Cable",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "MCP no es un modelo, ni una librería, ni un producto. Es un protocolo: un conjunto de reglas que define cómo el modelo pide cosas y cómo las herramientas externas responden. Igual que HTTP no es una web, MCP no es una IA.",
        },
      ],
    },
    {
      titulo: "Qué cambia en la práctica",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Para qué sirve MCP",
          texto:
            "Cuando un cliente (Claude Desktop, Cursor, una app propia) conecta servidores MCP, el modelo gana superpoderes concretos.",
          items: [
            {
              titulo: "Acceso a datos vivos",
              descripcion:
                "El modelo puede consultar tu base de datos, leer tickets de Jira, mirar archivos en Google Drive o pedir el clima ahora mismo. Datos reales, no entrenamiento congelado.",
              icono: "Database",
            },
            {
              titulo: "Acciones reales",
              descripcion:
                "Crear un issue, mandar un mensaje en Slack, abrir un PR en GitHub, ejecutar una query. El modelo no solo responde: hace cosas.",
              icono: "Zap",
            },
            {
              titulo: "Contexto compartido",
              descripcion:
                "Cualquier app que hable MCP puede aprovechar los mismos servidores. Conectas GitHub una vez y lo usan Claude Desktop, Cursor y tu propio agente.",
              icono: "Share2",
            },
            {
              titulo: "Open source y portable",
              descripcion:
                "El protocolo es público (spec abierta, SDKs en TS/Python/Java). No dependes de un proveedor: hoy Claude, mañana otro cliente compatible.",
              icono: "Github",
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
            "¿Cuál de estas afirmaciones describe mejor qué es MCP?",
          opciones: [
            { texto: "Un nuevo modelo de IA de Anthropic más rápido que Claude.", correcta: false },
            { texto: "Una librería de Python para llamar a Claude.", correcta: false },
            { texto: "Un protocolo abierto que estandariza cómo los LLMs se conectan a herramientas y datos externos.", correcta: true },
            { texto: "Un servicio en la nube para alojar bases de datos vectoriales.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. MCP es un protocolo (reglas de comunicación), no un modelo ni una librería específica. Cualquier LLM y cualquier herramienta que implementen la spec pueden hablar entre ellos sin integraciones a medida.",
          feedbackIncorrecto:
            "MCP no es un modelo ni una librería: es el «idioma común» que usan los modelos y las herramientas para hablar. Lo importante es que es abierto y estandarizado, así que evita el problema N×M de integraciones a medida.",
        },
      ],
    },
  ],
};

export default capitulo;
