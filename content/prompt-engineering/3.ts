import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering",
  numero: 3,
  titulo: "Nivel 3 · Técnicas esenciales",
  pasos: [
    {
      titulo: "Cuatro técnicas",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Técnicas que cambian el resultado",
          texto:
            "Cuatro formas de estructurar un prompt según lo que necesitas.",
          items: [
            {
              titulo: "Zero-shot",
              descripcion: "Pides la tarea directa, sin ejemplos. Rápido y suficiente para tareas simples.",
              icono: "Zap",
            },
            {
              titulo: "Few-shot",
              descripcion: "Das 2-3 ejemplos del resultado que esperas. La IA copia el patrón.",
              icono: "Layers",
            },
            {
              titulo: "Chain-of-thought",
              descripcion: "Pides «razona paso a paso». Mejora tareas de lógica y cálculo.",
              icono: "Workflow",
            },
            {
              titulo: "Role prompting",
              descripcion: "Asignas un rol experto. Enfoca el tono y el nivel de detalle.",
              icono: "Users",
            },
          ],
        },
      ],
    },
    {
      titulo: "Few-shot en acción",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Ejemplo de few-shot",
          texto:
            "Dando ejemplos del formato exacto que quieres, la IA replica el patrón sin que tengas que explicarlo.",
          mensajes: [
            {
              rol: "user",
              texto:
                "Convierte títulos a formato slug. Ejemplos:\n«Hola Mundo» → hola-mundo\n«Guía de Precios 2026» → guia-de-precios-2026\n\nAhora: «Cómo Empezar con IA»",
            },
            {
              rol: "claude",
              texto: "como-empezar-con-ia",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Few-shot es la técnica más potente para tareas con formato estricto: en vez de describir las reglas, las muestras. La IA infiere el patrón de tus ejemplos.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Necesitas que la IA devuelva siempre datos en un formato muy específico y difícil de explicar con palabras. ¿Qué técnica usas?",
          opciones: [
            { texto: "Zero-shot: pídelo directo y ya.", correcta: false },
            { texto: "Few-shot: muéstrale 2-3 ejemplos del formato exacto.", correcta: true },
            { texto: "Chain-of-thought: pídele que razone paso a paso.", correcta: false },
            { texto: "Role prompting: asígnale un rol experto.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Cuando el formato es difícil de describir, mostrarlo con ejemplos (few-shot) es más efectivo que explicarlo. La IA copia el patrón de tus muestras.",
          feedbackIncorrecto:
            "Para un formato estricto y difícil de explicar, lo mejor es enseñarlo con ejemplos: eso es few-shot. Chain-of-thought ayuda en lógica; role prompting enfoca el tono; zero-shot no garantiza el formato.",
        },
      ],
    },
  ],
};

export default capitulo;
