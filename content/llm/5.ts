import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "llm",
  numero: 5,
  titulo: "Nivel 5 · Límites y alucinaciones",
  pasos: [
    {
      titulo: "Qué es una alucinación",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Cuando el modelo inventa con seguridad",
          texto:
            "Una alucinación es cuando un LLM genera información falsa con tono de certeza. No miente a propósito: literalmente no sabe que está mintiendo. Para el modelo, generar una cita inventada y una real son la misma operación: predecir la siguiente palabra más probable.",
        },
        {
          tipo: "chat",
          eyebrow: "Ejemplo real",
          texto:
            "Mira cómo un LLM puede fabricar una cita que suena perfectamente legítima.",
          mensajes: [
            {
              rol: "user",
              texto:
                "Dame una cita textual de Aristóteles sobre la felicidad, con el libro y la página exactos.",
            },
            {
              rol: "claude",
              texto:
                "«La felicidad depende de nosotros mismos.» — Aristóteles, Ética a Nicómaco, Libro I, página 47.\n\n(⚠️ La frase puede ser apócrifa, la edición y el número de página son inventados. El modelo los genera porque «suenan» como información real.)",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "El modelo prioriza sonar coherente sobre ser correcto. Cuando no tiene el dato exacto, lo construye con la forma esperada (autor + obra + página) porque esa estructura es lo que predice como «siguiente palabra más probable».",
        },
      ],
    },
    {
      titulo: "De dónde vienen los errores",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Las cuatro fuentes principales",
          texto:
            "Saber por qué un LLM se equivoca te ayuda a decidir cuándo confiar y cuándo verificar.",
          items: [
            {
              titulo: "Datos desactualizados",
              descripcion:
                "El modelo tiene una fecha de corte: no sabe nada después de esa fecha (precios actuales, eventos recientes, versiones nuevas). Salvo que le conectes una herramienta de búsqueda.",
              icono: "CalendarOff",
            },
            {
              titulo: "Sin acceso a herramientas",
              descripcion:
                "Por defecto no busca en internet, no ejecuta código, no abre archivos. Si necesita un dato en vivo y no tiene la herramienta conectada, lo inventa.",
              icono: "Unplug",
            },
            {
              titulo: "Inferencia probabilística",
              descripcion:
                "Rellena huecos con lo «más probable». Si no recuerda el dato exacto, genera uno plausible. Esto es lo que produce citas, fechas y referencias inventadas.",
              icono: "Dice5",
            },
            {
              titulo: "Sesgos del corpus",
              descripcion:
                "Aprendió de internet, que tiene sesgos culturales, de género, de idioma. Repite esos sesgos salvo que el RLHF los haya corregido específicamente.",
              icono: "Scale",
            },
          ],
        },
      ],
    },
    {
      titulo: "Cómo mitigar",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cuatro hábitos para reducir errores",
          texto:
            "No puedes eliminar las alucinaciones, pero sí reducirlas drásticamente con buenas prácticas.",
          pasos: [
            {
              titulo: "Verifica datos críticos",
              descripcion:
                "Si el dato importa (médico, legal, financiero, citas textuales), trátalo como una pista, no como verdad. Cruza con una fuente primaria antes de actuar.",
            },
            {
              titulo: "Da contexto en el prompt",
              descripcion:
                "No asumas que el modelo sabe. Si necesitas que use cierta información, ponla en el prompt. «Basándote en este documento adjunto…» reduce mucho la invención.",
            },
            {
              titulo: "Conecta herramientas (RAG, búsqueda, calculadora)",
              descripcion:
                "Si necesitas datos actuales o cálculos exactos, conecta una herramienta. Un LLM con buscador es 10x menos propenso a alucinar fechas o precios.",
            },
            {
              titulo: "Pide fuentes y dudas",
              descripcion:
                "Pregunta «¿estás seguro?», «cita la fuente», «si no sabes algo, dilo». No garantiza nada, pero baja la confianza ciega y a veces el modelo se autocorrige.",
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
            "Le preguntas a un LLM sin herramienta de web search por el precio actual de Bitcoin. ¿Qué problema deberías esperar?",
          opciones: [
            { texto: "Ninguno: los LLM tienen siempre datos en vivo.", correcta: false },
            { texto: "Tarda mucho porque tiene que buscar el precio.", correcta: false },
            { texto: "Da un error técnico y se queja.", correcta: false },
            { texto: "Datos desactualizados: el modelo no tiene acceso en vivo salvo que se le conecte una herramienta.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Por defecto, un LLM tiene una fecha de corte de entrenamiento y NO consulta internet. Para precios actuales necesita una herramienta de búsqueda conectada. Sin ella, te dará un valor desactualizado o, peor, inventado con apariencia de actual.",
          feedbackIncorrecto:
            "Los LLM NO tienen acceso a datos en vivo por defecto. Tienen una fecha de corte de entrenamiento. Para precios actuales necesitan una herramienta de búsqueda conectada. Si no la tienen, lo más probable es que inventen un valor plausible.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Un LLM te da una cita textual de un libro con autor, edición y número de página. Al revisar, descubres que la página y la edición no existen. ¿Por qué pasó?",
          opciones: [
            { texto: "El modelo intentó engañarte a propósito.", correcta: false },
            { texto: "El modelo prioriza generar texto coherente sobre ser exacto: rellenó los huecos con datos que «suenan» reales.", correcta: true },
            { texto: "Es un bug aislado que casi nunca pasa.", correcta: false },
            { texto: "El libro fue eliminado del corpus de entrenamiento.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Para un LLM, generar «página 47, edición 1992» es la misma operación que generar cualquier otra palabra: predecir lo más probable. Si no tiene el dato exacto, fabrica uno con la forma correcta. Esto es lo que llamamos alucinación.",
          feedbackIncorrecto:
            "No es engaño ni un bug raro: es el funcionamiento normal del modelo. Genera la siguiente palabra más probable. Cuando no tiene el dato real, construye uno que «suena» a dato real (autor + obra + página). Por eso siempre hay que verificar referencias.",
        },
      ],
    },
  ],
};

export default capitulo;
