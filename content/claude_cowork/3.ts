import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "claude-cowork",
  numero: 3,
  titulo: "Nivel 3 · Organiza tu trabajo",
  pasos: [
    {
      titulo: "Proyectos",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Proyectos: tu espacio con memoria",
          texto:
            "Un Proyecto es un espacio de trabajo donde Claude recuerda el contexto de forma persistente: instrucciones específicas, archivos de referencia y el historial de conversaciones relacionadas.",
        },
        {
          tipo: "grid",
          texto: "Casos de uso típicos:",
          items: [
            {
              titulo: "Campaña de marketing",
              descripcion: "Brief, materiales y aprobaciones en un solo lugar.",
              icono: "Sparkles",
            },
            {
              titulo: "Onboarding de RRHH",
              descripcion: "Documentos estándar y procesos repetibles.",
              icono: "Users",
            },
            {
              titulo: "Reporte mensual",
              descripcion: "Plantillas y datos históricos siempre a mano.",
              icono: "FileSpreadsheet",
            },
            {
              titulo: "Gestión de cliente",
              descripcion: "Contexto continuo de una cuenta específica.",
              icono: "Building2",
            },
          ],
        },
      ],
    },
    {
      titulo: "Artefactos",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Artefactos: Claude crea cosas reales",
          texto:
            "Claude no solo responde — crea documentos, hojas de cálculo, presentaciones, páginas web y código directamente en tus archivos.",
          items: [
            { titulo: "Word / Docs", descripcion: "Informes, memos, contratos, propuestas.", icono: "FileText" },
            { titulo: "Excel / Sheets", descripcion: "Tablas, presupuestos, dashboards, análisis.", icono: "FileSpreadsheet" },
            { titulo: "PowerPoint", descripcion: "Presentaciones con diseño profesional.", icono: "Presentation" },
            { titulo: "PDF", descripcion: "Documentos listos para enviar o imprimir.", icono: "FileCode2" },
            { titulo: "HTML", descripcion: "Páginas, demos y visualizaciones en el navegador.", icono: "Globe" },
            { titulo: "Scripts / Código", descripcion: "Automatizaciones, herramientas, integraciones.", icono: "Code" },
          ],
          nota:
            "Los artefactos son archivos reales en tu computadora, no solo texto en pantalla. Puedes abrirlos, editarlos y compartirlos como cualquier otro archivo.",
        },
      ],
    },
    {
      titulo: "Connectors",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Connectors: Claude conectado a tus apps",
          texto:
            "Los Connectors (también llamados MCPs) dan a Claude acceso directo a tus herramientas externas.",
          items: [
            { titulo: "Gmail / Email", descripcion: "Leer emails, redactar respuestas, organizar bandeja.", icono: "Mail" },
            { titulo: "Drive / OneDrive", descripcion: "Buscar, leer y crear archivos.", icono: "Cloud" },
            { titulo: "Slack", descripcion: "Leer canales, resumir conversaciones, redactar mensajes.", icono: "MessageSquare" },
            { titulo: "Notion / Confluence", descripcion: "Leer y actualizar páginas y bases de datos.", icono: "BookOpen" },
            { titulo: "Jira / Asana", descripcion: "Ver tareas, crear tickets, actualizar estados.", icono: "FolderGit2" },
            { titulo: "Calendar", descripcion: "Ver agenda, crear eventos, proponer horarios.", icono: "Calendar" },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Conversación de ejemplo",
          mensajes: [
            {
              rol: "user",
              texto:
                "Agrega evento en mi calendario para mañana a las 11:00 AM. Cita con el Dentista.",
            },
            {
              rol: "claude",
              texto:
                "¡Listo! El evento quedó guardado en tu calendario:\n\nVista al dentista\n\n📅 Viernes 29 de mayo de 2026\n\n🕔 11:00 – 12:00 (hora de Guadalajara)",
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
          pregunta: "¿Qué es un Connector (MCP) en Claude?",
          opciones: [
            { texto: "Un archivo real que Claude crea en tu computadora.", correcta: false },
            { texto: "Un acceso directo de Claude a una app externa como Gmail o Slack.", correcta: true },
            { texto: "Un espacio de trabajo con memoria persistente.", correcta: false },
            { texto: "Una plantilla de prompt prediseñada.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Un Connector conecta a Claude con tus herramientas externas (Gmail, Drive, Slack…). Un artefacto, en cambio, es un archivo que Claude crea; un Proyecto es el espacio con memoria.",
          feedbackIncorrecto:
            "Un archivo creado por Claude es un artefacto, y el espacio con memoria es un Proyecto. Un Connector es lo que le da a Claude acceso directo a apps externas como Gmail o Slack.",
        },
      ],
    },
  ],
};

export default capitulo;
