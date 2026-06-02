import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "zapier",
  numero: 2,
  titulo: "Nivel 2 · Anatomía de un Zap",
  pasos: [
    {
      titulo: "Las piezas de cualquier Zap",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Vocabulario base",
          texto:
            "Un Zap es el flujo completo. Dentro tiene exactamente un Trigger (lo que dispara) y una o varias Actions (lo que se ejecuta). Si entiendes estas tres palabras, entiendes el 90% de Zapier.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Tres componentes clave",
          texto:
            "Toca cada parte para ver qué hace y dónde encaja.",
          partes: [
            {
              id: "trigger",
              label: "Trigger",
              color: "#F97316",
              detalle:
                "El evento que arranca el Zap. Siempre es el primer paso y siempre hay exactamente uno. Ejemplos: «nuevo email en Gmail», «nueva fila en Sheets», «pago en Stripe». Zapier hace polling cada 1-15 min (según plan) o recibe webhooks instantáneos si la app los soporta.",
            },
            {
              id: "action",
              label: "Action",
              color: "#00A896",
              detalle:
                "Lo que Zapier hace cuando el trigger ocurre. Puede ser «crear fila en Sheets», «mandar Slack», «llamar API». Un Zap puede tener varias actions en cadena (multi-step). Cada action recibe datos del trigger y de las actions anteriores.",
            },
            {
              id: "zap",
              label: "Zap",
              color: "#3A8DFF",
              detalle:
                "El flujo completo: trigger + actions, con un nombre, un estado (ON/OFF) y un historial de ejecuciones. Cada vez que el trigger se dispara, Zapier ejecuta una «task» (unidad de facturación).",
            },
          ],
        },
      ],
    },
    {
      titulo: "Cómo viajan los datos",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Del trigger a la action",
          texto:
            "Cada paso del Zap genera datos que los siguientes pueden usar. Es el concepto más importante de Zapier.",
          pasos: [
            {
              titulo: "1. Trigger se dispara",
              descripcion:
                "Llega un nuevo email a Gmail. Zapier lee el objeto completo: remitente, asunto, cuerpo, fecha, adjuntos. Todo eso queda disponible como variables.",
            },
            {
              titulo: "2. Mapeas campos en la action",
              descripcion:
                "Al configurar la action «crear fila en Sheets», eliges qué dato del trigger va a cada columna. Arrastras `Subject` a la columna A, `From` a la B. Esto se llama mapping.",
            },
            {
              titulo: "3. Action 2 usa salidas de action 1",
              descripcion:
                "Si añades un segundo paso «mandar Slack», puedes referenciar tanto datos del trigger como salidas del paso anterior (ej: la URL de la fila recién creada).",
            },
            {
              titulo: "4. Zapier registra la task",
              descripcion:
                "Cada acción ejecutada cuenta como una task. Si un Zap tiene 3 actions y se dispara 10 veces, son 30 tasks. Esto es lo que paga tu plan.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Cuello de botella mental: «trigger» y «action» NO son apps, son eventos. La misma app (Gmail) puede ser trigger en un Zap («new email») y action en otro («send email»).",
        },
      ],
    },
    {
      titulo: "Polling vs Webhooks",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Cómo detecta Zapier los eventos",
          texto:
            "No todas las integraciones reaccionan a la misma velocidad. Depende de cómo la app expone sus eventos.",
          columnas: [
            {
              titulo: "Polling",
              subtitulo: "Zapier pregunta cada X minutos",
              items: [
                "Default cuando la app no soporta webhooks",
                "Frecuencia: 1-15 min según tu plan",
                "Más lento, pero universal",
                "Hay un retraso visible entre evento y ejecución",
                "Apps típicas: Gmail, Sheets, Trello",
              ],
            },
            {
              titulo: "Webhooks (Instant)",
              subtitulo: "La app avisa a Zapier",
              destacada: true,
              items: [
                "Solo si la app lo soporta (marcado «Instant»)",
                "Latencia de segundos, no minutos",
                "Mejor para procesos críticos",
                "Misma cantidad de tasks, solo más rápido",
                "Apps típicas: Stripe, Typeform, Calendly",
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
            "Cuántos triggers puede tener un único Zap:",
          opciones: [
            { texto: "Tantos como quieras.", correcta: false },
            { texto: "Exactamente uno.", correcta: true },
            { texto: "Ninguno: el trigger es opcional.", correcta: false },
            { texto: "Depende del plan.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Un Zap = un trigger + N actions. Si necesitas varios disparadores distintos, son varios Zaps separados (o usas un trigger genérico tipo webhook y filtras dentro).",
          feedbackIncorrecto:
            "Por diseño, cada Zap tiene exactamente UN trigger. Es la regla base del modelo. Para múltiples disparadores creas varios Zaps o usas una capa intermedia (webhook genérico + filtros).",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tu Zap se dispara con «nuevo pago en Stripe» y necesitas que reaccione en segundos. ¿Qué tipo de trigger eliges si está disponible?",
          opciones: [
            { texto: "Polling: Zapier revisa Stripe cada 15 min.", correcta: false },
            { texto: "Instant (webhook): Stripe avisa a Zapier al momento.", correcta: true },
            { texto: "Manual: lo disparas tú haciendo clic.", correcta: false },
            { texto: "Cron: programado cada hora.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Stripe soporta triggers Instant (etiquetados con un rayo). Webhooks dan latencia de segundos vs minutos del polling. Para pagos críticos, siempre instant si está disponible.",
          feedbackIncorrecto:
            "Polling introduce hasta 15 min de retraso, lo cual es inaceptable para pagos. Manual no automatiza nada. Instant (webhook) es justo el caso de uso: Stripe avisa a Zapier en cuanto pasa el pago.",
        },
      ],
    },
  ],
};

export default capitulo;
