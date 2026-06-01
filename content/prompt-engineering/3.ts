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
      titulo: "Zero-shot en acción",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Zero-shot",
          texto:
            "Pides la tarea directa, sin ejemplos ni contexto. Funciona cuando la tarea es simple y clara.",
          mensajes: [
            {
              rol: "user",
              texto: "Traduce al inglés: «El servidor no responde».",
            },
            {
              rol: "claude",
              texto: "The server is not responding.",
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
      titulo: "Chain-of-thought en acción",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Chain-of-thought",
          texto:
            "Pides que razone paso a paso antes de responder. Mejora cálculos y problemas de lógica.",
          mensajes: [
            {
              rol: "user",
              texto:
                "Un servidor procesa 240 peticiones en 8 minutos. ¿Cuántas procesa en 1 hora? Razona paso a paso.",
            },
            {
              rol: "claude",
              texto:
                "Paso 1: 240 ÷ 8 = 30 peticiones por minuto.\nPaso 2: 30 × 60 = 1800 peticiones por hora.\n\nRespuesta: 1800 peticiones.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Role prompting en acción",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Role prompting",
          texto:
            "Asignas un rol experto. Enfoca el tono, el vocabulario y el nivel de detalle de la respuesta.",
          mensajes: [
            {
              rol: "user",
              texto:
                "Eres un profesor de redes para principiantes. Explica qué es una dirección IP en una frase.",
            },
            {
              rol: "claude",
              texto:
                "Una dirección IP es como la dirección postal de tu dispositivo: el número único que permite que los datos lleguen exactamente a él dentro de una red.",
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
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Necesitas resolver un problema de lógica con varios pasos de cálculo. ¿Qué técnica da mejores resultados?",
          opciones: [
            { texto: "Zero-shot: pídelo directo.", correcta: false },
            { texto: "Few-shot: dale ejemplos del formato.", correcta: false },
            { texto: "Chain-of-thought: pídele que razone paso a paso.", correcta: true },
            { texto: "Role prompting: asígnale un rol experto.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Pedir que razone paso a paso (chain-of-thought) reduce errores en cálculos y lógica, porque la IA descompone el problema antes de responder.",
          feedbackIncorrecto:
            "Para lógica y cálculo, lo mejor es chain-of-thought: pedir que razone paso a paso. Few-shot sirve para formatos, role prompting para el tono y zero-shot para tareas simples.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Solo quieres traducir una frase corta y sencilla. ¿Qué técnica es la más adecuada?",
          opciones: [
            { texto: "Zero-shot: pídelo directo, sin ejemplos.", correcta: true },
            { texto: "Few-shot: dale 3 ejemplos primero.", correcta: false },
            { texto: "Chain-of-thought: pídele que razone paso a paso.", correcta: false },
            { texto: "Role prompting: asígnale un rol experto.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Para tareas simples y claras, zero-shot basta: pedirlo directo sin ejemplos es lo más rápido y eficiente.",
          feedbackIncorrecto:
            "Para una tarea simple como traducir una frase corta, zero-shot es suficiente. Añadir ejemplos, razonamiento o rol sería esfuerzo innecesario.",
        },
      ],
    },
  ],
};

export default capitulo;
