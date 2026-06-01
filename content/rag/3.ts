import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "rag",
  numero: 3,
  titulo: "Nivel 3 · El pipeline RAG en acción",
  pasos: [
    {
      titulo: "Las dos fases del sistema",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Indexación (offline) + consulta (online)",
          texto:
            "Un sistema RAG tiene dos vidas: una fase de preparación que corres una vez (o cuando cambian los documentos), y una fase de consulta que corres en cada pregunta del usuario.",
          pasos: [
            {
              titulo: "Indexación (ocurre una vez)",
              descripcion:
                "Lees todos los documentos, los partes en chunks, conviertes cada chunk en embedding y guardas los vectores en una base de datos vectorial (Pinecone, Weaviate, pgvector, Qdrant). El usuario no ve esto.",
            },
            {
              titulo: "Consulta (ocurre por cada pregunta)",
              descripcion:
                "Conviertes la pregunta en embedding, buscas los top-K chunks más parecidos en la BD vectorial, los inyectas en el prompt junto con la pregunta original y dejas que el LLM responda. Esto pasa en milisegundos.",
            },
          ],
        },
      ],
    },
    {
      titulo: "El pipeline paso a paso",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "5 fases del flujo de consulta",
          texto:
            "Avanza paso a paso por lo que ocurre desde que el usuario pregunta hasta que recibe la respuesta. Mira la salida de cada fase.",
          componente: "rag-pipeline",
        },
        {
          tipo: "highlight",
          texto:
            "Casi todo el «truco» de un buen sistema RAG está en las fases 3 (qué tan buena es tu búsqueda) y 4 (cómo construyes el prompt aumentado). Un mal retrieval da contexto irrelevante y el LLM responde mal aunque sea Opus.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "En un sistema RAG, ¿qué pasa primero al recibir la pregunta del usuario?",
          opciones: [
            { texto: "Se envía la pregunta directamente al LLM.", correcta: false },
            { texto: "Se traduce la pregunta al inglés.", correcta: false },
            { texto: "Se busca en internet información relacionada.", correcta: false },
            { texto: "Se convierte la pregunta en un embedding para poder buscarla en la BD vectorial.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. La pregunta del usuario tiene que convertirse en un embedding (vector) para poder compararla con los embeddings de los chunks ya indexados en la base de datos vectorial. Sin ese paso, no hay búsqueda semántica.",
          feedbackIncorrecto:
            "En RAG el primer paso es generar el embedding de la pregunta. Sin ese vector, no puedes hacer la búsqueda semántica contra los chunks indexados. El LLM solo entra en juego al final, cuando ya tienes el contexto recuperado.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tu chatbot RAG da respuestas malas o irrelevantes, aunque uses el mejor LLM disponible. ¿Dónde es más probable que esté el problema?",
          opciones: [
            { texto: "En el LLM: hay que cambiarlo por uno más grande.", correcta: false },
            { texto: "En el retrieval: los chunks que recuperas no son los correctos.", correcta: true },
            { texto: "En la temperatura del modelo.", correcta: false },
            { texto: "En la velocidad de la red.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. En RAG el cuello de botella suele ser el retrieval. Si recuperas chunks irrelevantes, el LLM responde mal aunque sea el mejor del mundo: solo puede trabajar con el contexto que le diste. Diagnostica primero qué chunks llegan al prompt.",
          feedbackIncorrecto:
            "Si recuperas los chunks equivocados, cualquier LLM responderá mal. El modelo solo «ve» el contexto que le pasaste. La calidad del retrieval (búsqueda, chunking, embedding model) suele explicar más del 80% de los problemas de un RAG.",
        },
      ],
    },
  ],
};

export default capitulo;
