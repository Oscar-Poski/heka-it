import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "zapier",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es Zapier?",
  pasos: [
    {
      titulo: "El problema que resuelve",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Apps que no se hablan",
          texto:
            "El trabajo moderno está repartido entre 20 herramientas: Gmail, Slack, Notion, Sheets, Calendly, Stripe, HubSpot, Drive... Cada vez que alguien envía un formulario, llega un pago o aparece un nuevo lead, alguien (probablemente tú) copia datos de una app a otra a mano. Zapier es un puente entre todas esas apps para que ese trabajo se haga solo.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como un becario que nunca duerme",
          texto:
            "Zapier es un servicio en la nube que conecta más de 7.000 apps mediante flujos llamados «Zaps». Cuando algo pasa en una app (un trigger), Zapier ejecuta acciones en otra (o varias).",
          items: [
            {
              label: "Sin Zapier",
              valor:
                "Llega un email → abres Sheets → copias los datos → vas a Slack → escribes mensaje al equipo. 5 minutos cada vez, todo el día.",
              icono: "User",
            },
            {
              label: "Con Zapier",
              valor:
                "Llega un email → Zapier lo detecta → añade fila en Sheets → manda mensaje a Slack. Cero clics tuyos, 24/7.",
              icono: "Bot",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Zapier es no-code: no escribes una línea. Eliges apps de un catálogo, configuras campos con formularios y listo. Si sabes usar Gmail y Sheets, sabes usar Zapier.",
        },
      ],
    },
    {
      titulo: "Para qué se usa en la vida real",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Casos típicos",
          texto:
            "Cualquier proceso repetitivo que cruza dos o más apps es candidato a un Zap.",
          items: [
            {
              titulo: "Leads → CRM",
              descripcion:
                "Nuevo formulario en Typeform / Calendly → crear contacto en HubSpot → notificar a ventas en Slack.",
              icono: "Users",
            },
            {
              titulo: "Pagos → contabilidad",
              descripcion:
                "Nuevo cobro en Stripe → fila en Sheets → email de bienvenida → enviar factura desde QuickBooks.",
              icono: "CreditCard",
            },
            {
              titulo: "Email → tareas",
              descripcion:
                "Email con etiqueta «urgente» en Gmail → tarea en Asana / Notion → recordatorio en calendario.",
              icono: "Mail",
            },
            {
              titulo: "Backups y archivado",
              descripcion:
                "Nuevo archivo adjunto en Gmail → guardar en Drive → registrar nombre en Sheets con fecha.",
              icono: "Archive",
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
            "Cuál de estas descripciones describe mejor Zapier:",
          opciones: [
            { texto: "Lenguaje de programación para automatizar tareas.", correcta: false },
            { texto: "Plataforma no-code que conecta apps mediante flujos disparados por eventos.", correcta: true },
            { texto: "Hosting de aplicaciones web.", correcta: false },
            { texto: "CRM para gestionar ventas.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Zapier no es código ni hosting: es una capa de orquestación visual. Defines «cuando pase X en app A, haz Y en app B». Sin servidores, sin código.",
          feedbackIncorrecto:
            "Zapier no es código (es no-code), no es hosting (es SaaS) ni es CRM. Es plataforma de automatización por eventos: conecta apps por triggers + actions.",
        },
      ],
    },
  ],
};

export default capitulo;
