import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "prompt-engineering-aplicado",
  numero: 2,
  titulo: "Nivel 2 · Prompts para roles administrativos",
  pasos: [
    {
      titulo: "El día del administrativo, prompt a prompt",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Donde más rápido se nota la diferencia",
          texto:
            "Los roles administrativos son el caso de uso donde la IA tiene mayor retorno: tareas repetitivas con plantilla, tono cuidadoso y volumen alto. Correos, agendas, actas, comunicados internos, borradores de políticas. La clave: convertir cada tarea recurrente en una plantilla de prompt con todas las piezas (rol, tarea, contexto, formato) bien definidas.",
        },
        {
          tipo: "promptlab",
          eyebrow: "Cuatro tareas administrativas tipo",
          texto:
            "Elige cada ejemplo y observa cómo se especifica Rol, Tarea, Contexto y Formato para sacar resultados usables al primer intento. Estos prompts se reutilizan cambiando solo el contexto.",
          ejemplos: [
            {
              id: "comunicado-interno",
              label: "Comunicado interno",
              icono: "Megaphone",
              rol: "Actúa como responsable de comunicación interna de una empresa de 80 personas. Tono claro, cercano, sin corporativismo.",
              tarea: "Redacta un comunicado para anunciar el nuevo proceso de solicitud de vacaciones.",
              contexto:
                "A partir del 1 de julio se solicitan en la nueva plataforma (Personio). Antes era por email a RRHH. Hay sesión de formación opcional el día 25. La gente lleva años con el método antiguo; resistencia esperable.",
              formato:
                "Email de máximo 200 palabras. Estructura: qué cambia, por qué (1 línea), cómo se hace, dónde aprender más, a quién preguntar. Lista cortita en el \"cómo se hace\".",
            },
            {
              id: "acta-reunion",
              label: "Acta de reunión",
              icono: "FileText",
              rol: "Actúa como asistente que toma actas claras, accionables y neutras.",
              tarea: "Resume la transcripción adjunta en un acta operativa.",
              contexto:
                "Reunión de comité de dirección semanal, 45 min, 6 personas. Hay debate sobre presupuesto Q4, una decisión clave y 3 acciones pendientes. El acta la leen personas que no estuvieron y necesitan saber qué se decidió y qué tienen que hacer.",
              formato:
                "Estructura fija: Asistentes · Decisiones tomadas · Acciones (responsable + fecha) · Temas aplazados. Sin opinión ni adornos. Máximo 250 palabras.",
            },
            {
              id: "respuesta-queja",
              label: "Respuesta a queja",
              icono: "MessageCircle",
              rol: "Actúa como responsable de servicio al cliente con experiencia en escalado de quejas.",
              tarea: "Redacta una respuesta a la queja adjunta del cliente.",
              contexto:
                "El cliente lleva 6 meses con nosotros, tuvo una incidencia en su última factura (cargo duplicado) y se siente ignorado tras 4 días sin respuesta. Es un cliente de valor medio-alto. Ya devolvimos el cargo internamente pero no le hemos avisado. No queremos perderlo.",
              formato:
                "Email empático pero profesional, máximo 150 palabras. Estructura: disculpa concreta (no genérica), reconocimiento del fallo, solución exacta ya hecha, gesto adicional, cierre con persona de contacto directa.",
            },
            {
              id: "agenda-evento",
              label: "Agenda de evento",
              icono: "Calendar",
              rol: "Actúa como organizador experimentado de eventos corporativos.",
              tarea: "Propón la agenda para la jornada de planificación anual.",
              contexto:
                "Jornada presencial, 1 día (9:00-17:00), 25 personas, 3 equipos (ventas, producto, operaciones). Objetivo: alinear prioridades del año entrante. Mezcla de presentaciones, trabajo en grupo y momento social. Catering disponible.",
              formato:
                "Tabla con columnas: hora, bloque, formato (plenaria/grupo/pausa), responsable, output esperado. Incluye pausas reales. Identifica el bloque más arriesgado.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Anti-patrones que se ven a diario",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Lo que se ve vs. lo que funciona",
          texto:
            "Patrones que la gente arrastra del email y que NO funcionan bien con IA. Cambiarlos sube la calidad del primer borrador.",
          columnas: [
            {
              titulo: "Anti-patrón",
              subtitulo: "Lo que mucha gente escribe",
              items: [
                "«Redáctame un email profesional»",
                "«Hazlo bonito y largo»",
                "«Que suene como yo» (sin ejemplos)",
                "«Mejóralo» sin decir qué",
                "Pedir todo en un solo turno",
              ],
            },
            {
              titulo: "Mejor versión",
              subtitulo: "Lo que produce resultados usables",
              destacada: true,
              items: [
                "«Email a clientes B2B, tono cercano, 120 palabras»",
                "«Máx. 150 palabras, 2 párrafos cortos»",
                "Pega 2 emails tuyos como referencia",
                "«Demasiado formal, más breve, sin jerga»",
                "Pide borrador, luego pide ajuste concreto",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Truco práctico: cuando quieras que un texto «suene como tú», pega 2-3 emails reales tuyos como ejemplo (few-shot). La IA copia tono, longitud, fórmulas de cortesía y hasta tus tics. Más eficaz que cualquier descripción abstracta del «estilo personal».",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Quieres que la IA redacte emails «con tu estilo personal». ¿Cuál es la forma más eficaz?",
          opciones: [
            { texto: "Pedirle «escribe como yo».", correcta: false },
            { texto: "Pegarle 2-3 emails tuyos reales como ejemplos en el prompt (few-shot).", correcta: true },
            { texto: "Describir tu personalidad en abstracto.", correcta: false },
            { texto: "Pedirle que adivine.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Few-shot funciona muchísimo mejor que descripciones abstractas. La IA infiere tono, longitud, fórmulas y matices directamente de tus muestras. Es uno de los usos más rentables de la técnica.",
          feedbackIncorrecto:
            "La forma más eficaz es enseñar, no describir. 2-3 emails tuyos reales transmiten tu estilo mucho mejor que un párrafo describiéndolo. Es la aplicación práctica directa del few-shot.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Necesitas responder a una queja delicada de un cliente importante. ¿Qué prompt da MEJOR resultado?",
          opciones: [
            { texto: "«Redacta una respuesta a este cliente molesto».", correcta: false },
            { texto: "«Responde profesionalmente a la queja».", correcta: false },
            { texto: "Un prompt con rol (responsable de CX), contexto (historial del cliente, qué se resolvió ya), formato (longitud, estructura) y restricción de tono.", correcta: true },
            { texto: "Pegar la queja sin instrucciones.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. En situaciones delicadas, dejar al modelo improvisar es arriesgado. Especificar rol, contexto (historial, qué ya se hizo), formato y tono produce un borrador que solo necesita pequeños ajustes.",
          feedbackIncorrecto:
            "Las quejas son alto-riesgo: un email genérico puede empeorar la relación. La inversión de 30 segundos en escribir un prompt completo (rol + contexto + formato + tono) se paga sola en la calidad de la respuesta.",
        },
      ],
    },
  ],
};

export default capitulo;
