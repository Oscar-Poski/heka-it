import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering",
  numero: 4,
  titulo: "Nivel 4 · Errores comunes y refinamiento",
  pasos: [
    {
      titulo: "Vago vs. específico",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "El mismo objetivo, dos prompts",
          texto:
            "La diferencia entre un resultado mediocre y uno útil casi nunca está en el modelo. Está aquí.",
          columnas: [
            {
              titulo: "Prompt vago",
              subtitulo: "Resultado genérico",
              items: [
                "«Escríbeme algo sobre marketing»",
                "Sin rol ni audiencia",
                "Sin longitud ni formato",
                "Sin datos ni contexto",
                "Obliga a varias rondas de ajuste",
              ],
            },
            {
              titulo: "Prompt específico",
              subtitulo: "Resultado usable",
              destacada: true,
              items: [
                "«Actúa como growth marketer…»",
                "Audiencia y objetivo claros",
                "«…3 ideas, máx. 80 palabras»",
                "Incluye producto y presupuesto",
                "Acierta casi al primer intento",
              ],
            },
          ],
        },
      ],
    },
    {
      titulo: "Refinar es parte del proceso",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cómo iterar un prompt",
          texto:
            "Casi ningún prompt sale perfecto a la primera. Refinar es la habilidad real.",
          pasos: [
            {
              titulo: "Empieza simple",
              descripcion:
                "Lanza una primera versión clara. No intentes el prompt perfecto de entrada: necesitas ver qué devuelve.",
            },
            {
              titulo: "Diagnostica el fallo",
              descripcion:
                "¿Le faltó contexto? ¿El formato no era el que querías? ¿El tono falló? Identifica qué pieza del prompt corregir.",
            },
            {
              titulo: "Ajusta una cosa a la vez",
              descripcion:
                "Cambia un solo elemento y vuelve a pedir. Así sabes qué ajuste mejoró el resultado.",
            },
            {
              titulo: "Guarda lo que funciona",
              descripcion:
                "Cuando un prompt funciona bien, guárdalo como plantilla. Reutilizar buenos prompts ahorra horas.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Si el resultado no te gusta, no abandones: dile a la IA qué cambiar. Recuerda todo el hilo de la conversación, así que «más corto», «tono más formal» o «enfócate en X» basta para corregir.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tu prompt devolvió algo casi bueno pero demasiado largo y formal. ¿Cuál es el mejor siguiente paso?",
          opciones: [
            { texto: "Empezar una conversación nueva desde cero.", correcta: false },
            { texto: "Pedir en el mismo hilo: «más corto y en tono cercano».", correcta: true },
            { texto: "Cambiar de modelo de IA.", correcta: false },
            { texto: "Aceptarlo: la IA ya no va a mejorar.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. La IA recuerda el contexto del hilo. Pedir un ajuste concreto («más corto, tono cercano») refina el resultado sin reescribir todo el prompt.",
          feedbackIncorrecto:
            "No hace falta empezar de cero ni cambiar de modelo. La IA mantiene el contexto de la conversación: un ajuste concreto en el mismo hilo («más corto, tono cercano») corrige el resultado.",
        },
      ],
    },
  ],
};

export default capitulo;
