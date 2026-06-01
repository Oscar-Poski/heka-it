import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "rag",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es RAG?",
  pasos: [
    {
      titulo: "El problema que resuelve",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Tres límites de un LLM solo",
          texto:
            "Un LLM por sí solo tiene tres problemas grandes: (1) no sabe nada después de su fecha de corte de entrenamiento; (2) no tiene acceso a tus datos privados (documentos internos, base de conocimiento, manuales); (3) si no sabe algo, lo inventa. RAG ataca los tres a la vez.",
        },
        {
          tipo: "analogia",
          eyebrow: "Examen sin vs con apuntes",
          texto:
            "RAG significa Retrieval-Augmented Generation. La idea es darle al modelo los documentos relevantes ANTES de pedirle que responda.",
          items: [
            {
              label: "LLM solo",
              valor: "Estudiante en examen sin apuntes. Tira de memoria. Si no sabe, inventa con confianza.",
              icono: "BookX",
            },
            {
              label: "LLM con RAG",
              valor: "Estudiante con los apuntes correctos abiertos. Lee, cita, responde basándose en datos reales.",
              icono: "BookOpenCheck",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "RAG = buscar los documentos relevantes + meterlos en el prompt + dejar que el LLM responda con ese contexto. Suena simple porque lo es: lo difícil está en hacer cada paso bien.",
        },
      ],
    },
    {
      titulo: "Casos donde RAG brilla",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Cuándo tiene sentido usar RAG",
          texto:
            "Si tu pregunta exige datos que el modelo no tiene en memoria, RAG es probablemente la respuesta.",
          items: [
            {
              titulo: "Chatbot sobre docs internos",
              descripcion:
                "Responder preguntas sobre tu manual de empleado, políticas, procedimientos, base de conocimiento.",
              icono: "FileText",
            },
            {
              titulo: "Soporte sobre tu producto",
              descripcion:
                "Asistente que cita la documentación oficial y los tickets resueltos pasados.",
              icono: "Headphones",
            },
            {
              titulo: "Búsqueda semántica",
              descripcion:
                "Encontrar el contrato, el email o el documento que «hablaba de algo así» aunque no recuerdes las palabras exactas.",
              icono: "Search",
            },
            {
              titulo: "Información reciente",
              descripcion:
                "Conectar al modelo con noticias, precios o datos que cambian a diario y no están en su entrenamiento.",
              icono: "Newspaper",
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
            "Tu empresa quiere un asistente que responda preguntas sobre sus 500 documentos internos (manuales, políticas, procedimientos). ¿Qué enfoque tiene más sentido?",
          opciones: [
            { texto: "Usar el LLM tal cual y confiar en su entrenamiento general.", correcta: false },
            { texto: "Pegar los 500 documentos en cada prompt.", correcta: false },
            { texto: "Esperar a que el LLM aprenda esos documentos solo.", correcta: false },
            { texto: "Implementar RAG: indexar los documentos y dejar que el LLM responda con ese contexto.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. RAG es el patrón estándar para preguntas sobre datos privados o específicos. Indexas los documentos una vez, luego cada pregunta recupera solo los chunks relevantes y se los pasa al modelo.",
          feedbackIncorrecto:
            "El LLM tal cual no conoce tus documentos internos. Pegar 500 documentos en cada prompt rompe el límite de contexto y dispara el coste. RAG resuelve exactamente este caso: indexa una vez, recupera lo relevante en cada pregunta.",
        },
      ],
    },
  ],
};

export default capitulo;
