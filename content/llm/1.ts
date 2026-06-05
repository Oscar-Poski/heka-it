import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "llm",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es un LLM?",
  pasos: [
    {
      titulo: "La intuición",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Predicción de la siguiente palabra",
          texto:
            "Un LLM (Large Language Model, modelo grande de lenguaje) no «entiende» como tú. Lo que hace es mucho más simple y, a la vez, sorprendente: dada una secuencia de palabras, predice la siguiente palabra más probable. Repite eso cientos de veces y aparece una respuesta coherente.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como tu teclado, pero a escala masiva",
          texto:
            "Cuando tu teléfono te sugiere la siguiente palabra mientras escribes, hace una versión miniatura de lo que hace un LLM.",
          items: [
            {
              label: "Tu teclado",
              valor: "Predice la siguiente palabra entre 3 opciones, basado en lo que sueles escribir.",
              icono: "Smartphone",
            },
            {
              label: "Un LLM",
              valor: "Predice la siguiente palabra entre 50.000 opciones, basado en casi todo lo que la humanidad ha escrito en internet.",
              icono: "Brain",
            },
          ],
        },
      ],
    },
    {
      titulo: "Cómo decide qué palabra viene",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "El ciclo de generación",
          texto:
            "Cada palabra que ves en una respuesta de IA pasó por este ciclo. Toca cada paso.",
          partes: [
            {
              id: "entrada",
              label: "1. Entrada",
              color: "#3A8DFF",
              detalle:
                "El modelo recibe el prompt + todo lo que ha generado hasta ahora en esta respuesta.",
            },
            {
              id: "prediccion",
              label: "2. Predicción",
              color: "#00A896",
              detalle:
                "Calcula una probabilidad para cada palabra posible. «el» = 12%, «un» = 8%, «mi» = 3%… etc., para decenas de miles de candidatas.",
            },
            {
              id: "eleccion",
              label: "3. Elección",
              color: "#FF6B35",
              detalle:
                "Elige una palabra (no siempre la más probable: ahí entra la «temperatura», que verás más adelante).",
            },
            {
              id: "repetir",
              label: "4. Repetir",
              color: "#8B5CF6",
              detalle:
                "Añade esa palabra al final, y vuelve al paso 1. Repite hasta llegar a un final natural o al límite de longitud.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "El modelo no «piensa» antes de responder ni tiene un plan. Decide palabra por palabra, basándose solo en lo que vino antes. Que el resultado parezca inteligente es un efecto emergente de hacer esa predicción muy, muy bien.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Cuando un LLM te responde una pregunta compleja, ¿qué está haciendo realmente?",
          opciones: [
            { texto: "Busca en internet la respuesta correcta y te la copia.", correcta: false },
            { texto: "Tiene una base de datos de respuestas y elige la más parecida.", correcta: false },
            { texto: "Piensa el plan completo de la respuesta y luego lo escribe.", correcta: false },
            { texto: "Predice la siguiente palabra una y otra vez, basándose en patrones aprendidos.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Un LLM genera palabra por palabra. Cada nueva palabra depende solo del prompt + lo que ya generó. No busca, no piensa de antemano: predice secuencialmente.",
          feedbackIncorrecto:
            "Un LLM no busca, no recuerda respuestas exactas, ni planea de antemano. Lo único que hace es predecir la siguiente palabra más probable y repetir. La «inteligencia» emerge de hacer eso muy bien.",
        },
      ],
    },
    {
      titulo: "El corpus manda (parte 1)",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Mismo prompt, distinto entrenamiento",
          texto:
            "Un LLM no «sabe» nada del mundo: replica patrones del texto con el que lo entrenaron. Cambia el corpus y cambia la predicción, aunque el prompt sea idéntico.",
        },
        {
          tipo: "quiz",
          pregunta:
            "Entrenas un LLM solo con cuentos y obras literarias. Le das el prompt «El cielo es». ¿Qué palabra es más probable que prediga como siguiente?",
          opciones: [
            { texto: "«azul», porque el cielo es azul.", correcta: false },
            { texto: "«un», porque en cuentos abundan frases como «el cielo es un manto de estrellas».", correcta: true },
            { texto: "«cyan», porque es el término técnico para ese color.", correcta: false },
            { texto: "Una palabra al azar, porque el corpus es pequeño.", correcta: false },
          ],
          feedbackCorrecto:
            "Exacto. El modelo no «sabe» que el cielo es azul: solo reproduce los patrones que vio. En un corpus de cuentos, «el cielo es un…» co-ocurre muchísimo más que «el cielo es azul».",
          feedbackIncorrecto:
            "El LLM no tiene conocimiento del mundo, tiene estadísticas de su corpus. En cuentos, «el cielo es un manto/mar/techo de…» es una estructura mucho más frecuente que la afirmación literal «el cielo es azul».",
        },
      ],
    },
    {
      titulo: "El corpus manda (parte 2)",
      secciones: [
        {
          tipo: "highlight",
          texto:
            "Misma arquitectura, mismo prompt, distinto corpus → distinta respuesta. El «conocimiento» de un LLM es, literalmente, su corpus de entrenamiento.",
        },
        {
          tipo: "quiz",
          pregunta:
            "Ahora entrenas el mismo modelo con casi todo internet. Mismo prompt: «El cielo es». ¿Qué cambia?",
          opciones: [
            { texto: "Nada: el prompt es idéntico, así que predice lo mismo.", correcta: false },
            { texto: "Predice «azul» porque el modelo aprendió física y óptica.", correcta: false },
            { texto: "Predice «azul» porque en miles de millones de textos «el cielo es azul» co-ocurre masivamente.", correcta: true },
            { texto: "Predice palabras al azar: con tanto corpus hay demasiadas opciones posibles.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. No es que el modelo «entienda» el color del cielo: es que en internet esa secuencia exacta aparece millones de veces. Más datos → la distribución se vuelve más nítida, no más ruidosa.",
          feedbackIncorrecto:
            "Trampa común: el modelo no aprende física ni busca la verdad, aprende co-ocurrencias. Y más corpus no produce más ruido, produce distribuciones más afiladas hacia las frases más frecuentes.",
        },
      ],
    },
  ],
};

export default capitulo;
