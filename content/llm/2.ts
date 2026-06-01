import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "llm",
  numero: 2,
  titulo: "Nivel 2 · Tokens y contexto",
  pasos: [
    {
      titulo: "Qué es un token",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "La unidad que cuenta el modelo",
          texto:
            "Un LLM no «ve» palabras como nosotros. Antes de procesar tu texto, lo parte en piezas llamadas tokens. Un token puede ser una palabra entera («hola»), un trozo de palabra («inter-», «-nacional») o un signo de puntuación. Esto importa porque casi todo se cobra y se limita por tokens: cuánto puedes meter, cuánto te cuesta, cuánto recuerda el modelo.",
        },
        {
          tipo: "visual",
          eyebrow: "Pruébalo",
          texto:
            "Escribe una frase y mira cómo se parte en tokens. Fíjate qué pasa con palabras largas o en inglés vs. español.",
          componente: "tokenizer-demo",
        },
        {
          tipo: "highlight",
          texto:
            "Regla práctica: en español, ~1 token equivale a ~3 letras. Una palabra promedio son 1-3 tokens. Un email de 200 palabras ≈ 300-400 tokens.",
        },
      ],
    },
    {
      titulo: "La ventana de contexto",
      secciones: [
        {
          tipo: "analogia",
          eyebrow: "La memoria de corto plazo del modelo",
          texto:
            "La ventana de contexto es cuántos tokens caben en una sola conversación: tu prompt + los mensajes anteriores + la respuesta que está generando. Si pasas el límite, lo más antiguo se pierde.",
          items: [
            {
              label: "Tu RAM",
              valor: "Tiene un tamaño máximo. Si abres demasiadas apps, las viejas se cierran.",
              icono: "MemoryStick",
            },
            {
              label: "La ventana de contexto",
              valor: "Tiene un máximo de tokens. Si la conversación crece demasiado, el inicio se olvida.",
              icono: "Brain",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Llena la ventana",
          texto:
            "Elige un tamaño de modelo y añade mensajes. Mira cuántos caben antes de saturar.",
          componente: "context-window-meter",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Llevas una hora chateando con la IA y de repente parece haber olvidado lo que le dijiste al principio. ¿Qué pasó?",
          opciones: [
            { texto: "El modelo está fallando técnicamente.", correcta: false },
            { texto: "La conversación superó la ventana de contexto y los primeros mensajes se truncaron.", correcta: true },
            { texto: "La IA decidió ignorar el principio porque no era importante.", correcta: false },
            { texto: "Se cambió de modelo automáticamente y empezó de cero.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Cada modelo tiene un límite de tokens en su ventana de contexto. Cuando lo superas, los mensajes más antiguos se descartan para hacer hueco a los nuevos. Por eso conviene resumir el contexto importante cada cierto tiempo.",
          feedbackIncorrecto:
            "No es un fallo: es el límite de tokens. La ventana de contexto es finita. Cuando una conversación se alarga lo suficiente, los mensajes iniciales se truncan y el modelo deja de «verlos», aunque tú los recuerdes.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Vas a pedirle a un LLM que resuma un email de unas 200 palabras. ¿A cuántos tokens equivale aproximadamente?",
          opciones: [
            { texto: "Unos 20 tokens.", correcta: false },
            { texto: "Exactamente 200 tokens (1 token = 1 palabra).", correcta: false },
            { texto: "Unos 300-400 tokens.", correcta: true },
            { texto: "Unos 2.000 tokens.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. La regla práctica en español: una palabra promedio son 1-3 tokens. 200 palabras ≈ 300-400 tokens. Tenerlo claro te ayuda a estimar coste y a saber si algo cabe en el contexto.",
          feedbackIncorrecto:
            "1 token NO es exactamente 1 palabra. En español, una palabra promedio se parte en 1-3 tokens. 200 palabras ≈ 300-400 tokens. Las palabras largas o poco comunes pesan más.",
        },
      ],
    },
  ],
};

export default capitulo;
