import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "zapier",
  numero: 4,
  titulo: "Nivel 4 · Filtros, Paths, errores y cuándo NO usar Zapier",
  pasos: [
    {
      titulo: "Lógica dentro del Zap",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Más allá de trigger + action",
          texto:
            "Los Zaps lineales (1 trigger → N actions) cubren mucho, pero la vida real necesita condiciones, ramas y transformaciones. Zapier tiene built-ins para eso.",
          items: [
            {
              titulo: "Filter",
              descripcion:
                "Detiene el Zap si una condición no se cumple. Ej: «solo continuar si el importe > 100». No consume tasks cuando bloquea.",
              icono: "Filter",
            },
            {
              titulo: "Paths",
              descripcion:
                "Ramifica el flujo según condiciones. «Si país = US → Slack a #us-team; si país = ES → Slack a #es-team». Hasta 10 rutas paralelas.",
              icono: "GitFork",
            },
            {
              titulo: "Formatter",
              descripcion:
                "Transforma datos sin código: formatear fechas, mayúsculas/minúsculas, extraer números, parsear emails. Una task por uso.",
              icono: "Wand2",
            },
            {
              titulo: "Delay & Schedule",
              descripcion:
                "Esperar X minutos antes del siguiente paso, o programar el Zap para que corra todos los lunes a las 9:00.",
              icono: "Clock",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Regla de oro: usa Filter ANTES del primer paso pago para no gastar tasks innecesarias. Un Filter que para el 80% de los runs reduce tu factura un 80%.",
        },
      ],
    },
    {
      titulo: "Errores y debugging",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cuando un Zap se rompe",
          texto:
            "Antes o después un Zap falla. Estos son los pasos típicos para depurarlo.",
          pasos: [
            {
              titulo: "1. Abre Zap History",
              descripcion:
                "Cada ejecución (con éxito o no) queda registrada. Filtra por «Errored» para ver solo los fallos. Cada entrada muestra exactamente qué paso falló y el mensaje del API.",
            },
            {
              titulo: "2. Inspecciona los datos del trigger",
              descripcion:
                "Mira qué datos llegaron del trigger. Si un campo está vacío o cambió de formato, suele explicar el 90% de los errores en las actions.",
            },
            {
              titulo: "3. Replay",
              descripcion:
                "Una vez arreglada la causa (token caducado, campo mapeado, etc.), puedes reintentar la ejecución concreta sin esperar a que vuelva a dispararse el trigger.",
            },
            {
              titulo: "4. Auto-replay y notificaciones",
              descripcion:
                "Activa «Notify on error» para recibir email cuando algo falle. En planes superiores, Zapier reintenta automáticamente errores transitorios (timeouts, 5xx).",
            },
          ],
        },
      ],
    },
    {
      titulo: "Zapier vs alternativas",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Zapier vs Make vs n8n",
          texto:
            "Zapier no es la única opción. La elección depende de volumen, control y presupuesto.",
          columnas: [
            {
              titulo: "Zapier",
              subtitulo: "El estándar mainstream",
              destacada: true,
              items: [
                "7.000+ apps, mayor catálogo del mercado",
                "Editor lineal simple, curva mínima",
                "Caro a partir de cierto volumen (paga por task)",
                "Cloud only, sin self-host",
                "Ideal para equipos no técnicos",
              ],
            },
            {
              titulo: "Make / n8n",
              subtitulo: "Más control, más curva",
              items: [
                "Editor visual con ramas, loops, branching nativo",
                "Make: pago por operación; n8n: open source self-host",
                "Mejor para flujos complejos y manipulación de datos",
                "n8n permite código JavaScript inline",
                "Curva mayor; pensados para perfiles más técnicos",
              ],
            },
          ],
        },
      ],
    },
    {
      titulo: "Cuándo NO usar Zapier",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Señales de alarma",
          texto:
            "Zapier brilla en flujos cortos entre apps. En estos casos suele ser la herramienta incorrecta.",
          items: [
            {
              titulo: "Volumen masivo",
              descripcion:
                "Miles de eventos al día. El coste por task explota. Mejor un worker propio o n8n self-host.",
              icono: "TrendingUp",
            },
            {
              titulo: "Lógica compleja",
              descripcion:
                "Más de 5-6 pasos con muchos paths y loops. El editor lineal de Zapier se vuelve inmanejable.",
              icono: "Workflow",
            },
            {
              titulo: "Latencia crítica (<1s)",
              descripcion:
                "Aunque haya triggers Instant, hay siempre cierto overhead. Para tiempo real, integración directa.",
              icono: "Zap",
            },
            {
              titulo: "Datos sensibles regulados",
              descripcion:
                "HIPAA, datos médicos sin BAA, claves criptográficas. Pasan por servidores de Zapier; revisa cumplimiento antes.",
              icono: "ShieldAlert",
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
            "Quieres que un Zap reaccione a nuevos pedidos de Shopify, pero SOLO si el importe > 500€. ¿Dónde pones la condición para gastar menos tasks?",
          opciones: [
            { texto: "Al final, después de todas las actions.", correcta: false },
            { texto: "Como un Filter justo después del trigger, antes de cualquier action.", correcta: true },
            { texto: "Dentro de cada action manualmente.", correcta: false },
            { texto: "En Shopify, no en Zapier.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Un Filter después del trigger detiene la ejecución sin gastar tasks si la condición no se cumple. Si lo pones al final, ya gastaste todas las actions. Es la diferencia entre pagar todos los pedidos o solo los > 500€.",
          feedbackIncorrecto:
            "Los Filters detienen el Zap sin consumir las actions posteriores. Colócalos lo antes posible (justo tras el trigger) para no pagar tasks por runs que vas a descartar. Es la optimización #1 de coste en Zapier.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tu Zap recibe 50.000 eventos al mes con lógica de 10 pasos y mucha manipulación de datos. ¿Qué señal te da Zapier?",
          opciones: [
            { texto: "Es el caso ideal de Zapier: contrátalo en plan Pro.", correcta: false },
            { texto: "Probable señal de que conviene evaluar Make o n8n: el coste por task y la complejidad superan el sweet spot de Zapier.", correcta: true },
            { texto: "Imposible, Zapier no soporta más de 100 eventos al mes.", correcta: false },
            { texto: "Mejor borrar todos los pasos y dejar uno solo.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. 50K eventos × 10 pasos = 500K tasks/mes: factura enorme en Zapier. Make cobra por operación (más barato a volumen) y n8n self-host elimina el coste por uso. La complejidad lineal de Zapier también empieza a estorbar a partir de ~6 pasos.",
          feedbackIncorrecto:
            "Zapier es genial en volumen bajo-medio y flujos simples. A 50K eventos × 10 pasos entras en el rango donde Make (precio por operación) o n8n (self-host) suelen ganar por orden de magnitud. Reevaluar la herramienta es la respuesta correcta.",
        },
      ],
    },
  ],
};

export default capitulo;
