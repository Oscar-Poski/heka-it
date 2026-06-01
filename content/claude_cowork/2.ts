import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "claude-cowork",
  numero: 2,
  titulo: "Nivel 2 · El patrón de conversación",
  pasos: [
    {
      titulo: "Cómo hablarle a Claude",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cómo hablarle a Claude",
          texto:
            "Cuatro hábitos simples que mejoran cualquier resultado que le pidas a Claude.",
          pasos: [
            {
              titulo: "Habla en lenguaje natural",
              descripcion:
                "No hace falta usar comandos especiales ni tecnicismos. Escríbele como a un colega experto.",
            },
            {
              titulo: "Sé específico con el contexto",
              descripcion:
                "Cuantos más detalles des, mejor será el resultado: quién eres, para qué sirve el output y a quién va dirigido.",
            },
            {
              titulo: "Pide revisiones. Itera",
              descripcion:
                "Si no quedó perfecto, pídele que ajuste. Claude recuerda todo el contexto de la conversación.",
            },
            {
              titulo: "Sube archivos",
              descripcion:
                "Puedes adjuntar PDFs, Word, Excel o imágenes. Claude los analiza y trabaja con ellos.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Un ejemplo real",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Conversación de ejemplo",
          mensajes: [
            {
              rol: "user",
              texto:
                "Tengo una reunión mañana. Ayúdame a preparar 3 preguntas clave para negociar un aumento con mi jefe.",
            },
            {
              rol: "claude",
              texto:
                "Claro. Aquí tienes tres preguntas basadas en el valor que aportas:\n\n1. ¿Cuáles han sido mis contribuciones más impactantes este año?\n2. ¿Cómo se compensa este rol en el mercado actualmente?\n3. ¿Qué metas concretas justificarían un ajuste salarial?",
            },
          ],
        },
      ],
    },
    {
      titulo: "El patrón que multiplica",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Rol · Tarea · Contexto · Formato",
          texto:
            "El patrón que multiplica tus resultados. Toca cada pieza para ver qué responde.",
          partes: [
            {
              id: "rol",
              label: "Rol",
              color: "#3A8DFF",
              detalle:
                "¿Qué experto debe ser Claude? Ej: «Actúa como especialista en comunicación corporativa».",
            },
            {
              id: "tarea",
              label: "Tarea",
              color: "#00A896",
              detalle:
                "¿Qué quieres que haga exactamente? Ej: «Escribe un email formal de 150 palabras».",
            },
            {
              id: "contexto",
              label: "Contexto",
              color: "#FF6B35",
              detalle:
                "¿Para quién, por qué, con qué datos? Ej: «para anunciar el cambio de sede a 50 empleados».",
            },
            {
              id: "formato",
              label: "Formato",
              color: "#8B5CF6",
              detalle:
                "¿Cómo quieres el resultado? Ej: «Asunto + cuerpo. Tono formal pero cercano».",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Cada elemento del patrón reduce la ambigüedad. Cuanto más específico eres, más predecible y útil es el resultado — y menos rondas de ajuste necesitas.",
        },
      ],
    },
    {
      titulo: "El patrón en acción",
      secciones: [
        {
          tipo: "promptlab",
          eyebrow: "El patrón, departamento por departamento",
          texto:
            "Elige un área y descubre un prompt real. Fíjate cómo cada uno separa el Rol, la Tarea, el Contexto y el Formato.",
          ejemplos: [
            {
              id: "finanzas",
              label: "Finanzas",
              icono: "FileSpreadsheet",
              rol: "Actúa como analista financiero con experiencia en presentaciones a comités de dirección.",
              tarea:
                "Redacta el comentario ejecutivo del informe de resultados del Q2 para presentar al Comité de Dirección.",
              contexto:
                "Ingresos Q2: €4.2M (+12% vs Q1). Margen EBITDA: 22% (objetivo era 25%). El desvío se debe principalmente al incremento de costos de personal (+18%) por las nuevas contrataciones. Pipeline para Q3: €6.1M.",
              formato:
                "Máximo 200 palabras. Estructura: resultados clave → análisis de desvíos → outlook Q3. Tono ejecutivo, directo y sin eufemismos. Incluir 2-3 cifras clave destacadas.",
            },
            {
              id: "marketing",
              label: "Marketing",
              icono: "Sparkles",
              rol: "Actúa como especialista en marketing digital con experiencia en campañas B2B y copywriting persuasivo.",
              tarea:
                "Crea el asunto y el cuerpo de un email de campaña para el lanzamiento de nuestro nuevo producto.",
              contexto:
                "Dirigido a directores de IT de empresas de 200+ empleados en España. Lanzamos una integración nativa con Salesforce. El cliente ya conoce nuestra herramienta pero no ha renovado en los últimos 6 meses.",
              formato:
                "Asunto (máx. 8 palabras) + cuerpo de 150 palabras. Tono profesional pero cercano. Incluye una llamada a la acción clara al final.",
            },
            {
              id: "rrhh",
              label: "RRHH",
              icono: "Users",
              rol: "Actúa como especialista en Recursos Humanos con experiencia en onboarding y comunicación interna.",
              tarea:
                "Redacta un plan de bienvenida de 30 días para un nuevo empleado que se incorpora al equipo de ventas.",
              contexto:
                "La empresa tiene 80 empleados, cultura colaborativa y trabaja en remoto híbrido (3 días oficina). El nuevo empleado viene de una empresa grande y necesita adaptarse a la dinámica más ágil.",
              formato:
                "Documento Word estructurado: semana 1, semana 2-3 y semana 4. Para cada fase: objetivo, actividades clave y quién es responsable. Tono cálido y motivador.",
            },
            {
              id: "operaciones",
              label: "Operaciones",
              icono: "Settings",
              rol: "Actúa como consultor de operaciones especializado en optimización de procesos y gestión de equipos.",
              tarea:
                "Crea un informe de análisis de los cuellos de botella en nuestro proceso de aprobación de facturas.",
              contexto:
                "El proceso actual tarda 12 días de media. Participan 4 departamentos: Compras, Finanzas, Legal y Dirección. Los retrasos suelen producirse entre Legal y Dirección. El equipo de finanzas usa SAP.",
              formato:
                "Informe ejecutivo de 1 página: diagnóstico (2-3 causas raíz), impacto en costos estimado y 3 recomendaciones priorizadas por facilidad de implementación. Sin jerga técnica.",
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
            "En el patrón, «Actúa como especialista en comunicación corporativa» corresponde a…",
          opciones: [
            { texto: "Tarea", correcta: false },
            { texto: "Contexto", correcta: false },
            { texto: "Rol", correcta: true },
            { texto: "Formato", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El Rol define qué experto debe ser Claude. La Tarea es qué hace, el Contexto es para quién y por qué, y el Formato es el formato de salida.",
          feedbackIncorrecto:
            "Esa frase define qué experto debe ser Claude — eso es el Rol. La Tarea sería «escribe un email», el Contexto «para 50 empleados» y el Formato «tono formal, asunto + cuerpo».",
        },
      ],
    },
  ],
};

export default capitulo;
