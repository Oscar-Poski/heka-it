export type CatalogModule = {
  slug: string;
  title: string;
  summary: string;
};

export type CatalogCourse = {
  slug: string;
  title: string;
  level: 'basico' | 'intermedio';
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
    summary: 'Construye bases solidas en sistemas, redes y herramientas de trabajo tecnico.',
    courses: [
      {
        slug: 'linux-practico',
        title: 'Linux Practico',
        level: 'basico',
        summary: 'Aprende terminal, sistema de archivos y automatizacion inicial.',
        estimatedHours: 8,
        modules: [
          {
            slug: 'entorno-terminal',
            title: 'Entorno y Terminal',
            summary: 'Navegacion, comandos base y buenas practicas.',
          },
          {
            slug: 'automatizacion-inicial',
            title: 'Automatizacion Inicial',
            summary: 'Introduccion a scripts y tareas repetitivas.',
          }
        ]
      },
      {
        slug: 'redes-desde-cero',
        title: 'Redes Desde Cero',
        level: 'basico',
        summary: 'Comprende conectividad, diagnostico y principios de red para soporte tecnico.',
        estimatedHours: 7,
        modules: [
          {
            slug: 'fundamentos-red',
            title: 'Fundamentos de Red',
            summary: 'Conceptos clave para interpretar trafico y arquitectura basica.',
          }
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
        title: 'Frontend Moderno',
        level: 'intermedio',
        summary: 'HTML semantico, CSS utilitario y componentes reutilizables.',
        estimatedHours: 9,
        modules: [
          {
            slug: 'fundamentos-ui',
            title: 'Fundamentos de UI',
            summary: 'Bases para interfaces claras, accesibles y mantenibles.',
          }
        ]
      }
    ]
  }
];
