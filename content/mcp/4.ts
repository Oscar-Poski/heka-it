import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "mcp",
  numero: 4,
  titulo: "Nivel 4 · MCP en acción: configurar un servidor",
  pasos: [
    {
      titulo: "Anatomía de la config",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Un archivo JSON que orquesta todo",
          texto:
            "Conectar un servidor MCP a Claude Desktop, Cursor, Zed o cualquier host moderno se reduce casi siempre a editar un único archivo JSON. En Claude Desktop vive en `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS). Cada entrada bajo `mcpServers` describe un servidor que el host arrancará al iniciar.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Las cuatro claves de una entrada",
          texto:
            "Toca cada campo para ver qué hace en una entrada típica de servidor MCP local.",
          partes: [
            {
              id: "name",
              label: "Nombre",
              color: "#00A896",
              detalle:
                "La clave del objeto, p.ej. `filesystem`. Es solo un identificador para que el host se refiera al servidor en su UI y en los logs. No tiene que coincidir con nada del paquete.",
            },
            {
              id: "command",
              label: "command",
              color: "#3A8DFF",
              detalle:
                "El ejecutable que el host lanza. Para servidores en Node suele ser `npx`; para Python, `python` o `uvx`. El host lo arranca como subproceso al iniciarse.",
            },
            {
              id: "args",
              label: "args",
              color: "#F97316",
              detalle:
                "Los argumentos del comando. Aquí indicas qué paquete arrancar y con qué parámetros. Ej: `[\"-y\", \"@modelcontextprotocol/server-filesystem\", \"/Users/yo/proyecto\"]`.",
            },
            {
              id: "env",
              label: "env",
              color: "#8B5CF6",
              detalle:
                "Variables de entorno que recibe el subproceso. Aquí pasas API keys, tokens y secretos: `GITHUB_TOKEN`, `POSTGRES_URL`. No las hardcodees en args si puedes evitarlo.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo: filesystem + GitHub",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Cómo se ve en la vida real",
          texto:
            "Aquí una config típica con dos servidores: uno que da acceso a una carpeta local y otro que conecta con la API de GitHub. Fíjate cómo cada entrada es independiente y solo describe cómo arrancarse.",
        },
        {
          tipo: "chat",
          eyebrow: "claude_desktop_config.json",
          texto:
            "Lectura: Claude Desktop, al arrancar, leerá esto y lanzará dos subprocesos. Cada uno expondrá sus tools al modelo.",
          mensajes: [
            {
              rol: "user",
              texto:
                "{\n  \"mcpServers\": {\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"/Users/oscar/proyectos\"]\n    },\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-github\"],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"ghp_xxxxxxxxxxxx\"\n      }\n    }\n  }\n}",
            },
            {
              rol: "claude",
              texto:
                "Tras reiniciar Claude Desktop:\n• Conecta a filesystem → expone tools como `read_file`, `write_file`, `list_directory` con root en `/Users/oscar/proyectos`.\n• Conecta a github → expone `list_repos`, `create_issue`, `get_pr_diff`, etc. autenticadas con tu PAT.\n\nDesde la conversación puedes pedir cosas como: «lista los .md modificados esta semana y abre un issue en mi repo `docs` con los títulos».",
            },
          ],
        },
      ],
    },
    {
      titulo: "Buenas prácticas y trampas",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Antes de pegar tu primer servidor en prod",
          texto:
            "Errores típicos de las primeras veces que se configura MCP.",
          items: [
            {
              titulo: "Mínimo privilegio",
              descripcion:
                "Apunta el filesystem a una carpeta específica, no a `/`. Usa tokens con scopes acotados (solo `repo:read` si no necesitas escribir). El modelo solo puede tocar lo que tú le permitas.",
              icono: "ShieldCheck",
            },
            {
              titulo: "Secretos en `env`, no en `args`",
              descripcion:
                "Los `args` suelen aparecer en logs y crash reports. Las variables de entorno son ligeramente más privadas. Si puedes, usa un secrets manager y referencia.",
              icono: "Lock",
            },
            {
              titulo: "Un server, una responsabilidad",
              descripcion:
                "Evita servidores «todo en uno». Que cada server cubra un dominio (filesystem, github, postgres). Más fácil de auditar, depurar y revocar permisos.",
              icono: "Boxes",
            },
            {
              titulo: "Revisa el catálogo",
              descripcion:
                "Tras conectar, abre el panel de tools y léelas. Si un server expone `delete_repo` y no lo vas a usar, considera quitarlo. Cada tool añade superficie de fallo.",
              icono: "ListChecks",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Debug pro: si un server no aparece tras reiniciar, mira los logs del host. En Claude Desktop están en `~/Library/Logs/Claude/mcp-server-*.log`. El 90% de las veces es un comando mal escrito o una env var ausente.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Configuras un servidor de filesystem así: `args: [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"/\"]`. ¿Qué riesgo principal introduces?",
          opciones: [
            { texto: "Ninguno: el modelo nunca usaría esa tool sin pedirlo.", correcta: false },
            { texto: "El servidor no arrancará por falta de permisos.", correcta: false },
            { texto: "El modelo (o un prompt malicioso vía documento) tiene acceso de lectura/escritura a TODO tu disco.", correcta: true },
            { texto: "Claude Desktop bloquea las rutas con `/`.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El root del filesystem expuesto define el universo del server. Apuntar a `/` significa que cualquier tool de escritura puede tocar archivos de sistema, claves SSH, navegador… Aplica mínimo privilegio: solo la carpeta que el modelo realmente necesite.",
          feedbackIncorrecto:
            "MCP confía en lo que configuras. Si el root es `/`, no hay nada que impida que una tool de write toque archivos sensibles. Un prompt injection en un documento que el modelo lee podría incluso dirigir esa acción. Acota siempre al directorio mínimo necesario.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Reinicias Claude Desktop y tu nuevo servidor MCP «postgres» no aparece. ¿Por dónde empiezas a depurar?",
          opciones: [
            { texto: "Reinstalar Claude Desktop completo.", correcta: false },
            { texto: "Cambiar de modelo a Opus.", correcta: false },
            { texto: "Abrir los logs del host (`~/Library/Logs/Claude/mcp-server-postgres.log`) y leer el error de arranque.", correcta: true },
            { texto: "Borrar todos los demás servidores y probar uno a uno.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El host arranca cada server como subproceso y captura su stderr en un log dedicado. El 90% de los fallos son comandos mal escritos, paquetes inexistentes o env vars faltantes, y el log lo dice en la primera línea.",
          feedbackIncorrecto:
            "Reinstalar o cambiar de modelo no tiene relación: el modelo no participa en el arranque del server. El problema casi siempre es de proceso (comando, args, env) y queda registrado en `mcp-server-<nombre>.log`. Es el primer sitio donde mirar.",
        },
      ],
    },
  ],
};

export default capitulo;
