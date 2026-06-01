import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "rag",
  numero: 2,
  titulo: "Nivel 2 · Embeddings y búsqueda semántica",
  pasos: [
    {
      titulo: "Qué es un embedding",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Significado convertido en números",
          texto:
            "Un embedding es un vector de números (típicamente 384, 768 o 1536 dimensiones) que captura el significado de un texto. Frases con sentido parecido producen vectores parecidos; frases con sentidos distintos producen vectores muy alejados. Es lo que permite buscar por significado, no por palabra exacta.",
        },
        {
          tipo: "analogia",
          eyebrow: "Coordenadas, pero para conceptos",
          texto:
            "Igual que un GPS te ubica en el mundo con (latitud, longitud), un embedding ubica una frase en un «espacio de significado».",
          items: [
            {
              label: "GPS",
              valor: "Dos lugares cercanos en coordenadas están cerca en el mundo real.",
              icono: "MapPin",
            },
            {
              label: "Embedding",
              valor: "Dos frases cercanas en el espacio vectorial tienen significado parecido.",
              icono: "Network",
            },
          ],
        },
      ],
    },
    {
      titulo: "Búsqueda por similitud",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Pruébalo",
          texto:
            "Elige una frase como consulta y mira qué otras frases están cerca semánticamente. Fíjate cómo «perro» y «cachorro» son muy similares aunque no compartan palabras.",
          componente: "embedding-similarity",
        },
        {
          tipo: "highlight",
          texto:
            "Esto es lo que permite a un sistema RAG encontrar un chunk relevante aunque tu pregunta use sinónimos, parafrasee o esté en otro idioma. La búsqueda clásica por palabra clave no puede hacer esto.",
        },
      ],
    },
    {
      titulo: "Semántica vs palabra clave",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Dos formas de buscar",
          texto:
            "Compara cómo se comporta una búsqueda tradicional (keyword) vs una búsqueda semántica con embeddings.",
          columnas: [
            {
              titulo: "Búsqueda por palabra clave",
              subtitulo: "El buscador clásico",
              items: [
                "Busca coincidencia exacta de palabras",
                "«auto» y «coche» son resultados distintos",
                "Pierde sinónimos, parafraseos y traducciones",
                "Rápida y barata, sin necesidad de modelo",
                "Buena para identificadores y códigos exactos",
              ],
            },
            {
              titulo: "Búsqueda semántica (embeddings)",
              subtitulo: "Significado, no letras",
              destacada: true,
              items: [
                "Busca por similitud de significado",
                "«auto», «coche», «vehículo» están cerca",
                "Encuentra resultados aunque cambien las palabras",
                "Necesita un modelo de embeddings y una BD vectorial",
                "Buena para preguntas en lenguaje natural",
              ],
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
            "Un usuario pregunta «¿Cómo cambio mi clave de acceso?». En tu base de datos hay un documento titulado «Restablecimiento de contraseña». ¿Qué tipo de búsqueda los conecta mejor?",
          opciones: [
            { texto: "Búsqueda por palabra clave: «clave» aparece en ambos.", correcta: false },
            { texto: "Ninguna: hay que cambiar el título del documento.", correcta: false },
            { texto: "Búsqueda semántica con embeddings: capta que «clave de acceso» y «contraseña» significan lo mismo.", correcta: true },
            { texto: "Una búsqueda de texto exacto con expresiones regulares.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. «Clave de acceso» y «contraseña» son sinónimos: para keyword son palabras distintas, pero sus embeddings están cerca. La búsqueda semántica los conecta sin que tengas que mantener listas de sinónimos.",
          feedbackIncorrecto:
            "Las palabras «clave de acceso» y «contraseña» no coinciden literalmente. La búsqueda semántica resuelve esto: convierte ambas frases en embeddings y los vectores acaban siendo cercanos porque significan lo mismo.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Por qué dos frases sin palabras en común pueden tener embeddings muy similares?",
          opciones: [
            { texto: "Porque el modelo busca patrones de letras parecidos.", correcta: false },
            { texto: "Porque los embeddings codifican significado, no palabras concretas.", correcta: true },
            { texto: "Es un fallo del modelo que conviene corregir.", correcta: false },
            { texto: "Solo pasa cuando comparten al menos una sílaba.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Los embeddings se entrenan para capturar significado: aprenden que «cachorro» y «perro joven» tienden a aparecer en contextos parecidos, así que sus vectores quedan cerca. No miran letras, miran sentido.",
          feedbackIncorrecto:
            "Los embeddings no miran letras ni sílabas. Se entrenan con cantidades enormes de texto para que frases con significado parecido produzcan vectores cercanos, aunque no compartan ninguna palabra. Es una feature, no un bug.",
        },
      ],
    },
  ],
};

export default capitulo;
