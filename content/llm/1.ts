import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "llm",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es un LLM?",
  pasos: [
    {
      titulo: "La intuición",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Predicción de la siguiente palabra",
          texto:
            "Un LLM (Large Language Model, modelo grande de lenguaje) no «entiende» como tú. Lo que hace es mucho más simple y, a la vez, sorprendente: dada una secuencia de palabras, predice la siguiente palabra más probable. Repite eso cientos de veces y aparece una respuesta coherente.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como tu teclado, pero a escala masiva",
          texto:
            "Cuando tu teléfono te sugiere la siguiente palabra mientras escribes, hace una versión miniatura de lo que hace un LLM.",
          items: [
            {
              label: "Tu teclado",
              valor: "Predice la siguiente palabra entre 3 opciones, basado en lo que sueles escribir.",
              icono: "Smartphone",
            },
            {
              label: "Un LLM",
              valor: "Predice la siguiente palabra entre 50.000 opciones, basado en casi todo lo que la humanidad ha escrito en internet.",
              icono: "Brain",
            },
          ],
        },
      ],
    },
    {
      titulo: "Cómo decide qué palabra viene",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "El ciclo de generación",
          texto:
            "Cada palabra que ves en una respuesta de IA pasó por este ciclo. Toca cada paso.",
          partes: [
            {
              id: "entrada",
              label: "1. Entrada",
              color: "#3A8DFF",
              detalle:
                "El modelo recibe el prompt + todo lo que ha generado hasta ahora en esta respuesta.",
            },
            {
              id: "prediccion",
              label: "2. Predicción",
              color: "#00A896",
              detalle:
                "Calcula una probabilidad para cada palabra posible. «el» = 12%, «un» = 8%, «mi» = 3%… etc., para decenas de miles de candidatas.",
            },
            {
              id: "eleccion",
              label: "3. Elección",
              color: "#FF6B35",
              detalle:
                "Elige una palabra (no siempre la más probable: ahí entra la «temperatura», que verás más adelante).",
            },
            {
              id: "repetir",
              label: "4. Repetir",
              color: "#8B5CF6",
              detalle:
                "Añade esa palabra al final, y vuelve al paso 1. Repite hasta llegar a un final natural o al límite de longitud.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "El modelo no «piensa» antes de responder ni tiene un plan. Decide palabra por palabra, basándose solo en lo que vino antes. Que el resultado parezca inteligente es un efecto emergente de hacer esa predicción muy, muy bien.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Cuando un LLM te responde una pregunta compleja, ¿qué está haciendo realmente?",
          opciones: [
            { texto: "Busca en internet la respuesta correcta y te la copia.", correcta: false },
            { texto: "Tiene una base de datos de respuestas y elige la más parecida.", correcta: false },
            { texto: "Piensa el plan completo de la respuesta y luego lo escribe.", correcta: false },
            { texto: "Predice la siguiente palabra una y otra vez, basándose en patrones aprendidos.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Un LLM genera palabra por palabra. Cada nueva palabra depende solo del prompt + lo que ya generó. No busca, no piensa de antemano: predice secuencialmente.",
          feedbackIncorrecto:
            "Un LLM no busca, no recuerda respuestas exactas, ni planea de antemano. Lo único que hace es predecir la siguiente palabra más probable y repetir. La «inteligencia» emerge de hacer eso muy bien.",
        },
      ],
    },
  ],
};

export default capitulo;
