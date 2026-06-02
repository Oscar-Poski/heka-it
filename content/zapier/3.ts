import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "zapier",
  numero: 3,
  titulo: "Nivel 3 · Tu primer Zap, paso a paso",
  pasos: [
    {
      titulo: "El caso: form → Sheets → Slack",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Un Zap multi-step real",
          texto:
            "Vamos a construir mentalmente un Zap que un equipo de ventas usaría cada día: cuando alguien rellena un Typeform para pedir una demo, guardar el lead en una hoja de Sheets y avisar al canal #ventas en Slack. Trigger + 2 actions.",
        },
        {
          tipo: "pasos",
          eyebrow: "Construcción del Zap",
          texto:
            "Recorre cada paso como si lo configurases ahora mismo en zapier.com.",
          pasos: [
            {
              titulo: "1. Crear Zap nuevo",
              descripcion:
                "Click en «Create Zap». Te aparece un editor con dos cajas vacías: Trigger y Action. Nombra el Zap arriba a la izquierda: «Demo Request → Sheets + Slack».",
            },
            {
              titulo: "2. Configurar Trigger (Typeform)",
              descripcion:
                "App: Typeform. Event: «New Entry». Conecta tu cuenta de Typeform (OAuth). Selecciona el formulario «Demo Request». Test: Zapier descarga una entrada de ejemplo para que veas los campos disponibles.",
            },
            {
              titulo: "3. Action 1 (Google Sheets)",
              descripcion:
                "App: Google Sheets. Event: «Create Spreadsheet Row». Elige el spreadsheet y la hoja. Mapea: columna A ← `Email`, B ← `Name`, C ← `Company`, D ← `Submitted At`. Test: crea una fila real con los datos del paso 2.",
            },
            {
              titulo: "4. Action 2 (Slack)",
              descripcion:
                "App: Slack. Event: «Send Channel Message». Canal: `#ventas`. Texto: «🚀 Nueva demo: {{Name}} de {{Company}} ({{Email}})». Las llaves son referencias a datos del trigger. Test: el mensaje aparece en Slack.",
            },
            {
              titulo: "5. Publicar",
              descripcion:
                "Toggle ON. El Zap pasa a estado activo. Desde ahora cada entrada nueva del form dispara automáticamente las dos actions. Lo ves en «Zap History».",
            },
          ],
        },
      ],
    },
    {
      titulo: "Visualización del flujo",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Cómo se ve un run real",
          texto:
            "Esto es lo que pasa cuando alguien envía el formulario después de activar el Zap.",
          mensajes: [
            {
              rol: "user",
              texto:
                "[Typeform - 14:32]\nLaura López (Acme Corp, laura@acme.com) envía el formulario «Demo Request» pidiendo demo del producto.",
            },
            {
              rol: "claude",
              texto:
                "Zap «Demo Request → Sheets + Slack» ejecutado (3 tasks):\n\n✅ Trigger: Typeform - New Entry detectado a las 14:32:04\n✅ Action 1: Google Sheets - fila #128 creada en hoja «Leads»\n   • A: laura@acme.com  B: Laura López  C: Acme Corp  D: 2026-06-02T14:32:04\n✅ Action 2: Slack - mensaje enviado a #ventas\n   «🚀 Nueva demo: Laura López de Acme Corp (laura@acme.com)»\n\nTiempo total: 1.8s. Coste: 2 tasks (las actions, el trigger no cuenta).",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Cada vez que añades un paso, Zapier te obliga a hacer Test antes de continuar. NO te lo saltes: es donde detectas errores de mapping y autenticación en frío, antes de que el Zap esté en vivo procesando datos reales.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "En el ejemplo anterior, ¿cuántas tasks consume cada ejecución del Zap?",
          opciones: [
            { texto: "3 (trigger + 2 actions).", correcta: false },
            { texto: "2 (solo las actions; el trigger es gratis).", correcta: true },
            { texto: "1 (todo el Zap es una task).", correcta: false },
            { texto: "0 si está en plan free.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Zapier solo factura ACTIONS exitosas. El trigger es gratuito, no importa cuántas veces se dispare. Por eso un Zap con muchas actions sale más caro que dos Zaps con una action cada uno.",
          feedbackIncorrecto:
            "El trigger NO cuenta como task. Solo se cobran las actions ejecutadas con éxito. Un Zap con 2 actions = 2 tasks por ejecución. Esto es clave al diseñar Zaps: minimizar actions reduce coste.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Al configurar la action de Slack, escribes literalmente «Nueva demo: {{Name}}» en el mensaje, pero al ejecutarse llega «Nueva demo: {{Name}}» sin sustitución. ¿Qué pasó?",
          opciones: [
            { texto: "Slack no soporta variables.", correcta: false },
            { texto: "Escribiste el texto a mano en vez de seleccionar el campo del paso anterior en el dropdown.", correcta: true },
            { texto: "El Zap está en modo borrador.", correcta: false },
            { texto: "Te falta un plan pago.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Las llaves `{{ }}` son meramente cosméticas en la UI: para que Zapier sustituya el valor, tienes que SELECCIONAR el campo desde el menú de salidas del paso anterior. Si lo escribes a mano, queda como texto literal.",
          feedbackIncorrecto:
            "El editor de Zapier no parsea texto: necesita que arrastres o selecciones el dato desde el dropdown de outputs del paso previo. Escribir `{{Name}}` a mano no enlaza nada; queda como string literal.",
        },
      ],
    },
  ],
};

export default capitulo;
