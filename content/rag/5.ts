import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "rag",
  numero: 5,
  titulo: "Nivel 5 · RAG vs alternativas, y cómo decidir",
  pasos: [
    {
      titulo: "Tres formas de darle conocimiento a un LLM",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "RAG no es la única opción",
          texto:
            "Cuando quieres que un LLM sepa algo que no sabe de fábrica, tienes tres caminos. Cada uno tiene su sweet spot.",
          items: [
            {
              titulo: "Contexto largo",
              descripcion:
                "Pegas todo el documento en el prompt. Simple, sin infraestructura. Bueno para 1-2 documentos pequeños.",
              icono: "FileText",
            },
            {
              titulo: "RAG",
              descripcion:
                "Indexas los documentos y recuperas solo lo relevante en cada pregunta. Bueno para cientos o miles de documentos.",
              icono: "Database",
            },
            {
              titulo: "Fine-tuning",
              descripcion:
                "Reentrenas el modelo con tus datos. Caro, lento, y los datos quedan «horneados» dentro. Bueno para enseñar formato o estilo, no hechos.",
              icono: "GraduationCap",
            },
          ],
        },
      ],
    },
    {
      titulo: "Cuándo usar cada uno",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "RAG vs Fine-tuning",
          texto:
            "La confusión más común. Aquí la diferencia que importa.",
          columnas: [
            {
              titulo: "RAG",
              subtitulo: "Para hechos y datos",
              destacada: true,
              items: [
                "Conocimiento que cambia con frecuencia",
                "Datos privados que no quieres en el modelo",
                "Necesitas citar fuentes",
                "Cientos o miles de documentos",
                "Quieres actualizar info sin reentrenar nada",
              ],
            },
            {
              titulo: "Fine-tuning",
              subtitulo: "Para formato y comportamiento",
              items: [
                "Enseñar un estilo o tono específico",
                "Enseñar a responder en un formato fijo (JSON, etiquetas)",
                "Tareas donde el prompt no basta",
                "Dataset estable que no cambia mucho",
                "Tienes presupuesto y tiempo de entrenamiento",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Mantra del campo: «RAG para qué dice, fine-tuning para cómo lo dice». La mayoría de chatbots empresariales sobre documentos internos quieren RAG, no fine-tuning.",
        },
      ],
    },
    {
      titulo: "Cómo decidir en la práctica",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Árbol de decisión rápido",
          texto:
            "Ante una nueva necesidad, recorre estas preguntas en orden.",
          pasos: [
            {
              titulo: "¿Cabe todo en el contexto?",
              descripcion:
                "Si tu corpus son 1-3 documentos pequeños (< 50K tokens), pégalos en el prompt y olvida RAG. Es la opción más simple. Solo justifica RAG cuando el contexto se queda corto.",
            },
            {
              titulo: "¿El conocimiento cambia?",
              descripcion:
                "Si los documentos se actualizan a menudo (políticas, precios, FAQs), RAG. Reindexar es barato; reentrenar es caro y lento.",
            },
            {
              titulo: "¿Necesitas citar fuentes?",
              descripcion:
                "Si la respuesta debe decir «según el manual p.14», RAG. Fine-tuning no tiene fuentes: el conocimiento se mezcla dentro del modelo y no sabes de dónde salió.",
            },
            {
              titulo: "¿El problema es el formato, no los datos?",
              descripcion:
                "Si el modelo ya sabe lo necesario pero no responde en el formato o tono que quieres, fine-tuning (o un buen system prompt). RAG no te ayuda aquí.",
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
            "Necesitas un chatbot que responda preguntas sobre los precios y políticas de tu empresa, que cambian cada mes. ¿Qué enfoque encaja mejor?",
          opciones: [
            { texto: "Fine-tuning con un dataset de preguntas y respuestas sobre los precios actuales.", correcta: false },
            { texto: "RAG: indexar las políticas en una BD vectorial y recuperarlas en cada pregunta.", correcta: true },
            { texto: "Pegar todas las políticas en el prompt en cada llamada.", correcta: false },
            { texto: "Solo cambiar el system prompt y confiar en el LLM.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. RAG brilla justo aquí: los datos cambian cada mes, así que solo actualizas el índice; el modelo no necesita reentrenarse. Además, puedes citar fuentes para que el usuario verifique los precios.",
          feedbackIncorrecto:
            "Fine-tuning quedaría desactualizado en un mes y reentrenar es caro. Pegar todo en el prompt encarece cada llamada y choca con el límite de contexto. RAG es el patrón estándar para conocimiento que cambia con frecuencia.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Quieres que el modelo responda SIEMPRE en formato JSON con campos «causa», «solución» y «severidad». ¿RAG o fine-tuning?",
          opciones: [
            { texto: "RAG: indexar ejemplos de JSON.", correcta: false },
            { texto: "Cambiar de LLM por uno más potente.", correcta: false },
            { texto: "Fine-tuning (o un system prompt muy estricto): el problema es de formato, no de datos.", correcta: true },
            { texto: "Aumentar la temperatura para que sea más creativo.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Aquí el problema no es qué sabe el modelo sino cómo lo dice. Fine-tuning con ejemplos de input → JSON enseña el formato; un buen system prompt con un ejemplo claro a menudo basta. RAG no resuelve esto: traería contexto sin afectar el formato de salida.",
          feedbackIncorrecto:
            "RAG aporta hechos relevantes; no enseña formato. Para forzar siempre un JSON estructurado, fine-tuning (o JSON mode / structured outputs / un system prompt con ejemplos) es el camino: el problema es de comportamiento, no de conocimiento.",
        },
      ],
    },
  ],
};

export default capitulo;
