import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering",
  numero: 2,
  titulo: "Nivel 2 · Componentes de un buen prompt",
  pasos: [
    {
      titulo: "Las cuatro piezas",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Rol · Tarea · Contexto · Formato",
          texto:
            "Casi todo buen prompt tiene cuatro piezas. Toca cada una para ver qué responde.",
          partes: [
            {
              id: "rol",
              label: "Rol",
              color: "#3A8DFF",
              detalle:
                "¿Desde qué experiencia debe responder la IA? Ej: «Actúa como abogado laboralista». Enfoca el tono y el conocimiento.",
            },
            {
              id: "tarea",
              label: "Tarea",
              color: "#00A896",
              detalle:
                "¿Qué acción concreta quieres? Un verbo claro: redacta, resume, compara, clasifica, traduce. Evita pedir varias cosas a la vez.",
            },
            {
              id: "contexto",
              label: "Contexto",
              color: "#FF6B35",
              detalle:
                "¿Para quién, por qué y con qué datos? Audiencia, restricciones, cifras, ejemplos. Es lo que más sube la calidad del resultado.",
            },
            {
              id: "formato",
              label: "Formato",
              color: "#8B5CF6",
              detalle:
                "¿Cómo quieres la salida? Longitud, estructura, tono, idioma. Ej: «lista de 5 puntos, máx. 100 palabras, tono formal».",
            },
          ],
        },
      ],
    },
    {
      titulo: "El patrón en acción",
      secciones: [
        {
          tipo: "promptlab",
          eyebrow: "Mismo patrón, distintas tareas",
          texto:
            "Elige un ejemplo y observa cómo cada prompt separa el Rol, la Tarea, el Contexto y el Resultado.",
          ejemplos: [
            {
              id: "resumen",
              label: "Resumen",
              icono: "FileText",
              rol: "Actúa como analista que prepara informes para ejecutivos sin tiempo.",
              tarea: "Resume el documento adjunto.",
              contexto:
                "Es un contrato de arrendamiento de 12 páginas. El lector decide si firmar hoy. Le importan plazo, precio, penalizaciones y cláusulas de salida.",
              formato:
                "5 viñetas máximo, lenguaje claro sin jerga legal, marca en negrita cualquier riesgo o coste oculto.",
            },
            {
              id: "traduccion",
              label: "Traducción",
              icono: "Globe",
              rol: "Actúa como traductor especializado en marketing, no literal.",
              tarea: "Traduce el siguiente eslogan del español al inglés.",
              contexto:
                "Es para una campaña dirigida a startups en EE. UU. La marca es juvenil y directa. El eslogan original juega con una rima.",
              formato:
                "Da 3 opciones, cada una con una nota de una línea sobre el matiz que conserva o sacrifica.",
            },
            {
              id: "clasificar",
              label: "Clasificar",
              icono: "Layers",
              rol: "Actúa como agente de soporte que tría tickets entrantes.",
              tarea: "Clasifica cada mensaje en una categoría.",
              contexto:
                "Categorías: Facturación, Bug técnico, Solicitud de función, Otro. Los mensajes vienen de usuarios no técnicos y a veces mezclan temas.",
              formato:
                "Devuelve una tabla: mensaje | categoría | confianza (alta/media/baja). Sin explicaciones extra.",
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
            "«Dame una lista de 5 puntos, máximo 100 palabras, en tono formal». ¿Qué componente del prompt es?",
          opciones: [
            { texto: "Rol", correcta: false },
            { texto: "Tarea", correcta: false },
            { texto: "Contexto", correcta: false },
            { texto: "Formato", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Longitud, estructura y tono definen cómo quieres la salida: eso es el Formato. El Rol sería «actúa como…», la Tarea el verbo de acción y el Contexto el para quién y por qué.",
          feedbackIncorrecto:
            "Esa frase describe la forma de la respuesta (longitud, estructura, tono) — eso es el Formato. El Rol enfoca la experiencia, la Tarea es la acción, el Contexto aporta datos y audiencia.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "«Actúa como abogado laboralista con 10 años de experiencia». ¿Qué componente del prompt es?",
          opciones: [
            { texto: "Rol", correcta: true },
            { texto: "Tarea", correcta: false },
            { texto: "Contexto", correcta: false },
            { texto: "Formato", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Indicar desde qué experiencia debe responder la IA es el Rol. Enfoca el tono y el conocimiento de la respuesta.",
          feedbackIncorrecto:
            "«Actúa como…» define desde qué experiencia responde la IA: eso es el Rol. La Tarea es el verbo de acción, el Contexto los datos y el Formato la forma de la salida.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "De las cuatro piezas, ¿cuál suele subir más la calidad del resultado cuando la añades?",
          opciones: [
            { texto: "El Rol", correcta: false },
            { texto: "La Tarea", correcta: false },
            { texto: "El Contexto", correcta: true },
            { texto: "El Formato", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El Contexto (audiencia, datos, restricciones, ejemplos) es lo que más sube la calidad: le da a la IA la información concreta que necesita.",
          feedbackIncorrecto:
            "El que más mueve la aguja es el Contexto: audiencia, datos, restricciones y ejemplos. Sin él, la IA responde de forma genérica aunque el Rol y el Formato estén bien.",
        },
      ],
    },
  ],
};

export default capitulo;
