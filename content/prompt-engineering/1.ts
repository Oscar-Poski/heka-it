import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es un prompt?",
  pasos: [
    {
      titulo: "Intro",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El prompt",
          texto:
            "Un prompt es la instrucción que le das a una IA. No es magia ni adivinación: el modelo solo trabaja con lo que le escribes. La misma pregunta, formulada de dos maneras distintas, produce resultados radicalmente diferentes.",
        },
      ],
    },
    {
      titulo: "La analogía",
      secciones: [
        {
          tipo: "analogia",
          eyebrow: "Receta vs. resultado",
          texto:
            "Piensa en el prompt como una receta que le pasas a un cocinero experto. Si la receta es vaga («haz algo de comida»), el plato será impredecible. Si es precisa («risotto para 2, sin lácteos, listo en 30 min»), el resultado se acerca a lo que imaginabas.",
          items: [
            { label: "Cocina", valor: "Receta detallada", icono: "ChefHat" },
            { label: "IA", valor: "Prompt detallado", icono: "MessageSquare" },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Garbage in, garbage out. La calidad del resultado nunca supera la calidad de la instrucción. Mejorar tus prompts es la palanca más barata para mejorar tus resultados con IA.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Dos personas le piden a la misma IA «escribe un email». Una obtiene algo útil, la otra algo genérico. ¿Cuál es la causa más probable?",
          opciones: [
            { texto: "La IA tuvo un buen día con una y mal día con la otra.", correcta: false },
            { texto: "Una escribió un prompt más específico y con más contexto.", correcta: true },
            { texto: "Usaron modelos distintos sin saberlo.", correcta: false },
            { texto: "El azar: la IA responde aleatoriamente.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El modelo solo trabaja con lo que le das. Más contexto y especificidad en el prompt = resultado más útil. Es la variable que tú controlas.",
          feedbackIncorrecto:
            "El factor que tú controlas es el prompt. La IA no tiene «días buenos»: responde a la instrucción que recibe. Un prompt específico y con contexto produce mejores resultados.",
        },
      ],
    },
  ],
};

export default capitulo;
