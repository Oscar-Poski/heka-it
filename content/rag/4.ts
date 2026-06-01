import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "rag",
  numero: 4,
  titulo: "Nivel 4 · Chunking, el arte de partir documentos",
  pasos: [
    {
      titulo: "Por qué partir los documentos",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El chunk es la unidad mínima de recuperación",
          texto:
            "No indexas documentos enteros: indexas trozos (chunks). Hay tres razones. Primero, un documento entero no cabe en el contexto del LLM. Segundo, recuperas mejor cuando los chunks son pequeños y específicos: «¿cuántos días de vacaciones?» recupera mejor el párrafo que habla de vacaciones que el manual completo. Tercero, el coste por token escala lineal: mejor pasar 3 chunks pequeños que un PDF entero.",
        },
        {
          tipo: "highlight",
          texto:
            "Regla práctica: un chunk debería contener UNA idea o respuesta completa. Si parte una idea por la mitad, el retrieval falla; si junta varias ideas dispares, los embeddings se «promedian» y pierden precisión.",
        },
      ],
    },
    {
      titulo: "Chunking en acción",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Mueve los deslizadores",
          texto:
            "Cambia el tamaño del chunk y el overlap (solape) para ver cómo se parte el mismo texto. Fíjate qué pasa cuando el chunk es muy pequeño o muy grande, y qué hace el overlap.",
          componente: "chunking-demo",
        },
      ],
    },
    {
      titulo: "Estrategias comunes",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Cuatro formas de trocear",
          texto:
            "Cada estrategia tiene un trade-off entre simplicidad, calidad y coste.",
          items: [
            {
              titulo: "Tamaño fijo",
              descripcion:
                "Cortas cada N caracteres o tokens. Simple, rápido, pero puede partir frases por la mitad. Punto de partida razonable.",
              icono: "Ruler",
            },
            {
              titulo: "Por párrafo o frase",
              descripcion:
                "Cortas en límites naturales (\\n\\n, punto y aparte). Respeta la estructura del texto. Mejor para documentos bien escritos.",
              icono: "AlignLeft",
            },
            {
              titulo: "Recursivo",
              descripcion:
                "Intenta cortar por párrafo; si el trozo sigue siendo grande, parte por frase; si sigue, por palabras. Es el default de LangChain.",
              icono: "GitBranch",
            },
            {
              titulo: "Semántico",
              descripcion:
                "Usa embeddings para detectar dónde cambia el tema y cortar ahí. Más caro pero produce chunks coherentes. Ideal para libros y textos largos.",
              icono: "Brain",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Overlap (solape) es repetir las últimas N letras del chunk anterior al inicio del siguiente. Sirve para que una idea que cae en el borde aparezca completa en al menos uno de los dos chunks. Valor típico: 10-20% del tamaño del chunk.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Indexas tus documentos en chunks de 50 caracteres (muy pequeños). ¿Cuál es el problema más probable?",
          opciones: [
            { texto: "Vas a usar demasiada memoria.", correcta: false },
            { texto: "La búsqueda será demasiado lenta.", correcta: false },
            { texto: "El LLM no podrá leerlos.", correcta: false },
            { texto: "Los chunks contienen ideas incompletas: «vacaciones acumulan 1.25 días por» se corta antes de decir «mes».", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Chunks demasiado pequeños rompen las ideas a la mitad. El embedding pierde sentido porque le faltan piezas clave, y aunque recuperes ese chunk, al LLM le llega información incompleta. Mejor 100-500 caracteres como punto de partida.",
          feedbackIncorrecto:
            "El problema real con chunks de 50 caracteres es que no caben ideas completas. Una política, una definición o una respuesta normalmente necesita 100-500 caracteres mínimo. Si parte una idea, ni los embeddings ni el LLM pueden recuperarla bien.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Para qué sirve el «overlap» entre chunks?",
          opciones: [
            { texto: "Para reducir el tamaño de la base de datos vectorial.", correcta: false },
            { texto: "Para que una idea que cae en el límite entre dos chunks aparezca completa en al menos uno de ellos.", correcta: true },
            { texto: "Para que el LLM responda más rápido.", correcta: false },
            { texto: "Para mejorar la ortografía del texto.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Sin overlap, una frase que cae justo en el límite se parte y ningún chunk la contiene completa. Con overlap (típicamente 10-20% del chunk), repites las últimas N letras al inicio del siguiente, así una idea fronteriza queda íntegra en al menos uno.",
          feedbackIncorrecto:
            "El overlap NO ahorra espacio: lo aumenta (repites texto). Tampoco afecta velocidad ni ortografía. Su único propósito es asegurar que ideas que caen entre chunks no se pierdan: repetir el final de un chunk al inicio del siguiente.",
        },
      ],
    },
  ],
};

export default capitulo;
