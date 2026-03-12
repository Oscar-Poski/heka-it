export type CatalogModule = {
  slug: string;
  title: string;
  summary: string;
};

export type CatalogCourse = {
  slug: string;
  title: string;
  level: 'básico' | 'intermedio';
  summary: string;
  estimatedHours: number;
  modules: CatalogModule[];
};

export type CatalogTrack = {
  slug: string;
  title: string;
  summary: string;
  courses: CatalogCourse[];
};

export const curriculumCatalog: CatalogTrack[] = [
  {
    slug: 'fundamentos-it',
    title: 'Fundamentos IT',
    summary: 'Construye bases sólidas en sistemas, redes y herramientas de trabajo técnico.',
    courses: [
      {
        slug: 'linux-practico',
        title: 'Linux Básico',
        level: 'básico',
        summary: 'Aprende qué es Linux, cómo usar la terminal y administración básica del sistema.',
        estimatedHours: 15,
        modules: [
          {
            slug: 'intro-linux',
            title: 'Introducción a Linux',
            summary: 'Fundamentos, historia y contexto actual de Linux.',
          },
          {
            slug: 'uso-linux',
            title: 'Uso básico del sistema',
            summary: 'Terminal, comandos esenciales y edición básica en consola.',
          },
          {
            slug: 'sistema-archivos-linux',
            title: 'Sistema de archivos de Linux',
            summary: 'Estructura, rutas, permisos y administración de archivos.',
          },
          {
            slug: 'usuarios-y-permisos',
            title: 'Gestión de usuarios y permisos',
            summary: 'Administración de cuentas, grupos y control de acceso.',
          },
          {
            slug: 'gestion-de-procesos',
            title: 'Gestión de procesos',
            summary: 'Monitoreo, control y priorización de procesos en Linux.',
          },
          {
            slug: 'instalacion-y-gestion-de-software',
            title: 'Instalación y gestión de software',
            summary: 'Repositorios, gestores de paquetes e instalación manual.',
          },
          {
            slug: 'redes-en-linux',
            title: 'Redes en Linux',
            summary: 'Configuración, diagnóstico y seguridad básica de red.',
          },
          {
            slug: 'edicion-de-texto-linux',
            title: 'Edición de texto en Linux',
            summary: 'Uso de nano y vim para editar archivos del sistema.',
          },
          {
            slug: 'automatizacion-y-scripting',
            title: 'Automatización y scripting básico',
            summary: 'Scripts Bash para automatizar tareas repetitivas.',
          },
          {
            slug: 'administracion-basica-del-sistema',
            title: 'Administración básica del sistema',
            summary: 'Servicios, logs, diagnóstico y mantenimiento inicial.',
          },
          {
            slug: 'seguridad-basica-linux',
            title: 'Seguridad básica en Linux',
            summary: 'Buenas prácticas para proteger sistemas Linux.',
          },
          {
            slug: 'linux-en-el-mundo-profesional',
            title: 'Linux en el mundo profesional',
            summary: 'Aplicaciones reales y rutas de carrera con Linux.',
          }
        ]
      },
      {
        slug: 'redes-desde-cero',
        title: 'En Construcción: Redes Desde Cero',
        level: 'básico',
        summary: 'Comprende conectividad, diagnóstico y principios de red para soporte técnico.',
        estimatedHours: 0,
        modules: [
          /*{
            slug: 'fundamentos-red',
            title: 'Fundamentos de Red',
            summary: 'Conceptos clave para interpretar trafico y arquitectura basica.',
          }*/
        ]
      }
    ]
  },
  {
    slug: 'desarrollo-web',
    title: 'Desarrollo Web',
    summary: 'Ruta orientada a construir productos web modernos y desplegables.',
    courses: [
      {
        slug: 'frontend-moderno',
        title: 'En Construcción: Frontend Moderno',
        level: 'básico',
        summary: 'HTML semántico, CSS utilitario y componentes reutilizables.',
        estimatedHours: 0,
        modules: [
          /*{
            slug: 'fundamentos-ui',
            title: 'Fundamentos de UI',
            summary: 'Bases para interfaces claras, accesibles y mantenibles.',
          }*/
        ]
      }
    ]
  }
];
