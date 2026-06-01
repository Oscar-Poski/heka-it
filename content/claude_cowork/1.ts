import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "claude-cowork",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es Claude?",
  pasos: [
    {
      titulo: "¿Qué es Claude?",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "¿Qué es Claude?",
          texto:
            "Claude es un asistente de IA desarrollado por Anthropic. No es un buscador ni un menú de comandos: entiende lenguaje natural y trabaja a tu lado como un colega experto.",
        },
        {
          tipo: "grid",
          items: [
            {
              titulo: "Conversación natural",
              descripcion:
                "Escríbele como a un colega. Entiende contexto, matices e instrucciones complejas. No hace falta usar comandos especiales.",
              icono: "MessageSquare",
            },
            {
              titulo: "Conectado a tu trabajo",
              descripcion:
                "En modo Cowork, puede leer tus archivos, conectarse a tus apps y producir resultados reales en tu máquina.",
              icono: "Plug",
            },
          ],
        },
      ],
    },
    {
      titulo: "Los tres modos",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Los tres modos de Claude",
          texto:
            "Claude se usa de tres formas distintas según lo que necesites. Toca cada modo para ver cuándo conviene.",
          partes: [
            {
              id: "chat",
              label: "Chat",
              color: "#3A8DFF",
              detalle:
                "Conversa y pregunta. Preguntas rápidas, redacción, análisis de documentos, brainstorming. Ideal cuando quieres una respuesta, un borrador o un análisis sin tocar archivos.",
            },
            {
              id: "cowork",
              label: "Cowork",
              color: "#00A896",
              detalle:
                "Trabaja en tus archivos. Claude lee, crea y edita archivos reales en tu computadora y ejecuta tareas multi-paso. Ideal cuando quieres un resultado real: un documento, una presentación, una investigación.",
            },
            {
              id: "code",
              label: "Code",
              color: "#FF6B35",
              detalle:
                "Programa y automatiza. Escribe, revisa y ejecuta código. Para quienes trabajan con scripts, datos o quieren automatizar tareas técnicas directamente desde la terminal.",
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
            "Necesitas que Claude genere un documento Word real, guardado en tu computadora. ¿Qué modo usas?",
          opciones: [
            { texto: "Cowork", correcta: true },
            { texto: "Chat", correcta: false },
            { texto: "Code", correcta: false },
            { texto: "Ninguno: Claude solo devuelve texto en pantalla.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Cowork es el modo que lee, crea y edita archivos reales en tu máquina. Chat solo devuelve texto en pantalla y Code está pensado para scripts y automatización técnica.",
          feedbackIncorrecto:
            "Chat solo produce texto en pantalla y Code es para programar. Cowork es el único modo que crea archivos reales (un Word, un Excel, una presentación) en tu computadora.",
        },
      ],
    },
  ],
};

export default capitulo;
