import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "llm",
  numero: 3,
  titulo: "Nivel 3 · Cómo se entrena un LLM",
  pasos: [
    {
      titulo: "Tres etapas",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "De texto crudo a asistente útil",
          texto:
            "Un modelo no nace sabiendo conversar. Pasa por tres etapas, cada una con un objetivo distinto.",
          pasos: [
            {
              titulo: "1. Pretraining (entrenamiento base)",
              descripcion:
                "El modelo lee billones de palabras de internet, libros y código. Aprende gramática, hechos, estilo y patrones del lenguaje. Es como un bebé que escucha todas las conversaciones del planeta. Al terminar, sabe MUCHO pero solo sabe «continuar texto», no responder preguntas.",
            },
            {
              titulo: "2. Fine-tuning supervisado",
              descripcion:
                "Humanos le muestran miles de ejemplos del formato «pregunta → respuesta buena». El modelo aprende a seguir instrucciones y a responder con estructura. Es como darle a ese bebé un manual de modales y de cómo conversar.",
            },
            {
              titulo: "3. RLHF (refuerzo con feedback humano)",
              descripcion:
                "Humanos comparan dos respuestas del modelo y eligen cuál es mejor. El modelo aprende a preferir el tipo de respuesta que los humanos prefieren: clara, útil, no tóxica. Es el paso que convierte un modelo «que sabe» en un asistente «que ayuda».",
            },
          ],
        },
      ],
    },
    {
      titulo: "Por qué importa entenderlo",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Modelo base vs modelo alineado",
          texto:
            "Si solo hicieras pretraining, tendrías un modelo distinto al que usas hoy. Compara.",
          columnas: [
            {
              titulo: "Solo pretraining",
              subtitulo: "El modelo «en bruto»",
              items: [
                "Continúa texto: si le das «Los planetas son», sigue escribiendo prosa.",
                "No sigue instrucciones: «Resume esto» le suena igual que cualquier otra frase.",
                "Sin filtros: repite lo que vio, sea útil, sesgado o tóxico.",
                "Tono inconsistente: imita el estilo del texto que le diste.",
              ],
            },
            {
              titulo: "Con fine-tuning + RLHF",
              subtitulo: "El asistente que conoces",
              destacada: true,
              items: [
                "Sigue instrucciones: «Resume esto» → te da un resumen estructurado.",
                "Tono útil y consistente: explica, formatea, da contexto.",
                "Filtros de seguridad: rechaza pedidos peligrosos o tóxicos.",
                "Pide aclaraciones cuando el prompt es ambiguo.",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Lo que cambia entre Claude, ChatGPT y otros modelos a menudo NO es el conocimiento base (todos leyeron internet). Es el fine-tuning y el RLHF: qué consideran una «buena respuesta» y cómo decidieron alinear el modelo.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Cuál es la principal función del RLHF (Reinforcement Learning from Human Feedback)?",
          opciones: [
            { texto: "Enseñarle al modelo nuevos hechos y conocimientos.", correcta: false },
            { texto: "Hacer el modelo más rápido al responder.", correcta: false },
            { texto: "Reducir el tamaño del modelo para que use menos memoria.", correcta: false },
            { texto: "Alinear las respuestas con lo que los humanos prefieren (más útiles, claras y seguras).", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. RLHF no añade conocimiento nuevo. Lo que hace es enseñar al modelo a preferir el tipo de respuesta que los humanos valoran: útil, clara, segura, en el formato esperado. Es lo que convierte un modelo «que sabe mucho» en uno «que ayuda».",
          feedbackIncorrecto:
            "RLHF no añade hechos (eso es pretraining) ni cambia la arquitectura (eso afecta velocidad/tamaño). Su trabajo es alinear las respuestas: a partir de comparaciones humanas, enseñar al modelo qué tipo de respuesta se prefiere.",
        },
      ],
    },
  ],
};

export default capitulo;
