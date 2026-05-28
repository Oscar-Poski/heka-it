import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "claude-cowork",
  numero: 4,
  titulo: "Nivel 4 · Setup y ciclo de trabajo",
  pasos: [
    {
      titulo: "Chat vs Cowork",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Chat vs Cowork: ¿cuál uso cuándo?",
          texto:
            "Ambos son Claude, pero resuelven problemas distintos. Esta es la diferencia práctica.",
          columnas: [
            {
              titulo: "Chat",
              subtitulo: "Conversación interactiva",
              items: [
                "Preguntas y respuestas rápidas",
                "Borradores, resúmenes, análisis",
                "Sin acceso a archivos locales",
                "Sin herramientas externas",
                "Output: texto en pantalla",
              ],
            },
            {
              titulo: "Cowork",
              subtitulo: "Sesión de trabajo autónoma",
              destacada: true,
              items: [
                "Tareas multi-paso largas",
                "Crea y edita archivos reales",
                "Lee y escribe en tu carpeta",
                "Conectado a apps con plugins",
                "Output: archivos en tu equipo",
              ],
            },
          ],
        },
      ],
    },
    {
      titulo: "Configurar Cowork",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Configurar Cowork: primeros pasos",
          pasos: [
            {
              titulo: "Descarga la app de escritorio",
              descripcion: "Disponible en claude.ai/download.",
            },
            {
              titulo: "Elige una carpeta de trabajo",
              descripcion:
                "Claude te pedirá elegir una carpeta. Todo lo que lea o cree irá ahí. Tip: crea una carpeta dedicada por área o proyecto.",
            },
            {
              titulo: "Empieza con una tarea concreta",
              descripcion:
                "Ej: «Crea un documento Word con los puntos clave de nuestra reunión del lunes». Verifica que el archivo apareció en tu carpeta.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Dale a Claude acceso solo a las carpetas relevantes para la tarea. Menos acceso = menos riesgo.",
        },
      ],
    },
    {
      titulo: "El ciclo de Cowork",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cómo funciona una sesión",
          pasos: [
            {
              titulo: "Describir",
              descripcion:
                "Explica la tarea con contexto completo: qué quieres, para qué sirve y cómo lo quieres. Más contexto = mejor resultado desde el primer intento.",
            },
            {
              titulo: "Planificar",
              descripcion:
                "Claude propone un plan de pasos. Puedes aprobarlo, corregirlo o ajustarlo antes de que empiece a trabajar.",
            },
            {
              titulo: "Ejecutar",
              descripcion:
                "Claude trabaja: lee, escribe, busca, conecta apps. Ves el progreso en tiempo real y puedes interrumpir si algo no va bien.",
            },
            {
              titulo: "Revisar",
              descripcion:
                "Revisa el resultado. Claude es un colaborador talentoso, no un oráculo: la revisión siempre es tu responsabilidad.",
            },
            {
              titulo: "Iterar",
              descripcion:
                "Pide ajustes, amplía el alcance o inicia una nueva tarea. El loop continúa hasta que el resultado es exactamente el que necesitas.",
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
            "Quieres que Claude lea tres archivos de una carpeta y produzca una cotización en PDF. ¿Qué eliges?",
          opciones: [
            { texto: "Chat, pegando el texto de los archivos en la conversación.", correcta: false },
            { texto: "Cowork, dándole acceso a la carpeta de la tarea.", correcta: true },
            { texto: "Da igual: ambos pueden escribir archivos en tu equipo.", correcta: false },
            { texto: "Ninguno: Claude no puede generar PDFs.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Leer archivos locales y producir un PDF real en tu equipo requiere Cowork. Chat no accede a tu sistema de archivos: solo devuelve texto en pantalla.",
          feedbackIncorrecto:
            "Chat no puede leer ni escribir archivos en tu equipo. La tarea —leer una carpeta y generar un PDF real— es exactamente para lo que existe Cowork.",
        },
      ],
    },
    {
      titulo: "¿Chat o Cowork?",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "«Actúa como CFO con experiencia en comités de dirección. Redacta el comentario ejecutivo del informe Q2: Ingresos €4.2M (+12% vs Q1, +8% vs objetivo), EBITDA 22% (objetivo 25%), desvío por costes de personal +18%, pipeline Q3 €6.1M. Estructura: resultados → desvíos → outlook. Máx. 200 palabras, tono ejecutivo.» ¿Chat o Cowork?",
          opciones: [
            { texto: "Chat", correcta: true },
            { texto: "Cowork", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El output es un texto redactado a partir de datos que ya tienes en el prompt. No hay archivos que leer ni crear: Chat te da el borrador al instante.",
          feedbackIncorrecto:
            "Aquí no hay archivos que leer ni generar — solo redactar un texto con datos que ya están en el prompt. Eso es trabajo de Chat. Cowork se reserva para cuando hay que tocar tu sistema de archivos.",
        },
      ],
    },
    {
      titulo: "¿Chat o Cowork?",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "«Crea un modelo de 3 escenarios para el cierre de año: conservador (-15% ingresos), base (en plan) y optimista (+10%). Para cada uno: ingresos, EBITDA, cash flow operativo y posición de caja a diciembre. Incluye hipótesis clave y el breakeven point.» ¿Chat o Cowork?",
          opciones: [
            { texto: "Chat", correcta: false },
            { texto: "Cowork", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Un modelo de escenarios con cálculos enlazados es un entregable real (un Excel). Cowork lo construye como archivo editable, no como texto en pantalla.",
          feedbackIncorrecto:
            "Un modelo financiero de 3 escenarios con métricas calculadas es un archivo real (Excel), no un texto. Eso requiere Cowork, que crea y edita el entregable en tu equipo.",
        },
      ],
    },
    {
      titulo: "¿Qué herramienta?",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "«Análisis estratégico del mercado de plataformas de gestión de flotas en Europa para evaluar una expansión: tamaño de mercado y CAGR, players y cuotas, barreras de entrada, regulación (GDPR, transporte) y oportunidad digital-first. Output: informe de 5 páginas + DAFO.» ¿Qué eliges?",
          opciones: [
            { texto: "Chat", correcta: false },
            { texto: "Cowork", correcta: false },
            { texto: "Chat + Research Mode", correcta: false },
            { texto: "Cowork + Research Mode", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Necesitas datos de mercado actualizados (Research Mode busca y cita fuentes) Y un entregable real de 5 páginas + DAFO (Cowork crea el archivo). La combinación cubre ambas necesidades.",
          feedbackIncorrecto:
            "La tarea pide datos de mercado actualizados —eso es Research Mode— y además un informe real de 5 páginas con DAFO —eso es Cowork—. Solo la combinación Cowork + Research Mode cubre las dos.",
        },
      ],
    },
  ],
};

export default capitulo;
