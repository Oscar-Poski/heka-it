import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "claude-cowork",
  numero: 1,
  titulo: "Novato: ¿Qué es Claude? Los tres modos.",
  pasos: [
    {
      titulo: "Novato: ¿Qué es Claude? Los tres modos.",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "¿Qué es Claude?",
          texto: "Claude es un asistente de IA desarrollado por Anthopic.",
        },
        {
          tipo: "texto",
          eyebrow: "Conversación Natural",
          texto: "Escríbele como a un colega. Entiende contexto, matices e instrucciones complejas. No hace falta usar comandos especiales.",
        },
        {
          tipo: "texto",
          eyebrow: "Conectado a tu trabajo",
          texto: "En modo Cowork, puede leer tus archivos, conectarse a tus apps y producir resultados reales en tu máquina.",
        },
        {
          tipo: "quiz",
          pregunta: "¿Qué es Claude",
          opciones: [
            { texto: "Chatbot.", correcta: false },
            { texto: "Generador de imágenes.", correcta: false },
            { texto: "Asistente de IA.", correcta: true },
          ],
          feedbackCorrecto: "string",
          feedbackIncorrecto: "string",
        },
      ],
    },
  ],
};

export default capitulo;
