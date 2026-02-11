export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  objectives: string[];
  content: string[];
};

export type Module = {
  slug: string;
  title: string;
  summary: string;
  lessons: Lesson[];
};

export type Course = {
  slug: string;
  title: string;
  level: 'basico' | 'intermedio';
  summary: string;
  estimatedHours: number;
  modules: Module[];
};

export type LearningTrack = {
  slug: string;
  title: string;
  summary: string;
  courses: Course[];
};

export type LessonNode = {
  id: string;
  href: string;
  title: string;
  moduleTitle: string;
};

export type LessonContext = {
  track: LearningTrack;
  course: Course;
  module: Module;
  lesson: Lesson;
  lessonId: string;
  lessonPath: string;
  nodes: LessonNode[];
  currentIndex: number;
  previous: LessonNode | null;
  next: LessonNode | null;
};

const rawBaseUrl = import.meta.env.BASE_URL ?? '/';
const normalizedBaseUrl =
  rawBaseUrl === '/' ? '' : rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

export function withBase(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBaseUrl}${normalizedPath}`;
}

export const learningTracks: LearningTrack[] = [
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
            lessons: [
              {
                slug: 'primeros-comandos',
                title: 'Primeros comandos',
                summary: 'Comandos esenciales para moverte y entender el sistema.',
                durationMinutes: 18,
                objectives: [
                  'Entender pwd, ls, cd y man.',
                  'Usar rutas absolutas y relativas sin confusion.',
                  'Explorar ayuda integrada para aprender autonomamente.'
                ],
                content: [
                  'La terminal es tu interfaz principal para operar de forma rapida y repetible.',
                  'Trabaja con rutas claras y confirma siempre tu ubicacion con pwd antes de ejecutar cambios.',
                  'Usa man y --help para descubrir opciones en lugar de memorizar todo desde el inicio.'
                ]
              },
              {
                slug: 'archivos-y-directorios',
                title: 'Archivos y directorios',
                summary: 'Crear, mover y organizar recursos sin perder control.',
                durationMinutes: 22,
                objectives: [
                  'Crear y eliminar archivos de forma segura.',
                  'Mover y copiar directorios manteniendo estructura.',
                  'Aplicar convenciones de nombres para proyectos.'
                ],
                content: [
                  'mkdir, touch, cp y mv te permiten iterar rapido en tu entorno de trabajo.',
                  'Antes de borrar, lista el contenido y valida dos veces para evitar perdida de informacion.',
                  'Una estructura consistente ahorra tiempo cuando escalas proyectos o trabajas en equipo.'
                ]
              }
            ]
          },
          {
            slug: 'automatizacion-inicial',
            title: 'Automatizacion Inicial',
            summary: 'Introduccion a scripts y tareas repetitivas.',
            lessons: [
              {
                slug: 'bash-basico',
                title: 'Bash basico',
                summary: 'Variables, condiciones y bucles simples.',
                durationMinutes: 26,
                objectives: [
                  'Crear scripts ejecutables con shebang.',
                  'Usar variables y argumentos de entrada.',
                  'Controlar flujo con if y for.'
                ],
                content: [
                  'Un script pequeno elimina trabajo manual y reduce errores por repeticion.',
                  'Empieza con casos concretos: renombrar archivos, limpiar logs o validar estructura.',
                  'Versiona tus scripts para documentar evolucion y facilitar mantenimiento.'
                ]
              },
              {
                slug: 'tarea-final-linux',
                title: 'Mini proyecto Linux',
                summary: 'Automatiza una rutina diaria en un script reproducible.',
                durationMinutes: 30,
                objectives: [
                  'Definir un caso de uso real.',
                  'Implementar script con validaciones minimas.',
                  'Documentar ejecucion y resultados.'
                ],
                content: [
                  'Construye un script que prepare una carpeta de trabajo con estructura estandar.',
                  'Incluye verificaciones para no sobreescribir archivos existentes por accidente.',
                  'Termina dejando una guia breve de uso para otra persona del equipo.'
                ]
              }
            ]
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
            lessons: [
              {
                slug: 'modelo-osi-simple',
                title: 'Modelo OSI sin humo',
                summary: 'Entiende capas con ejemplos concretos y practicos.',
                durationMinutes: 20,
                objectives: [
                  'Relacionar capas con problemas reales.',
                  'Separar funciones de transporte y aplicacion.',
                  'Usar modelo como marco de diagnostico.'
                ],
                content: [
                  'El modelo OSI no es teoria vacia: te ayuda a localizar donde se rompe una comunicacion.',
                  'Evita memorizar capas sin contexto; conecta cada una con herramientas y sintomas comunes.',
                  'Practica analizando fallos simples: DNS caido, puerto bloqueado, cable desconectado.'
                ]
              },
              {
                slug: 'ip-y-subredes',
                title: 'IP y subredes',
                summary: 'Direccionamiento esencial para diagnosticar conectividad.',
                durationMinutes: 24,
                objectives: [
                  'Leer una direccion IP y su mascara.',
                  'Diferenciar red, host y gateway.',
                  'Detectar errores frecuentes de configuracion.'
                ],
                content: [
                  'Comprender subneteo basico reduce tiempos de soporte y evita cambios a ciegas.',
                  'Mapea rangos y reserva direcciones con criterio para crecimiento futuro.',
                  'Documenta siempre direccionamiento para tener trazabilidad operativa.'
                ]
              }
            ]
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
            lessons: [
              {
                slug: 'arquitectura-de-componentes',
                title: 'Arquitectura de componentes',
                summary: 'Disena interfaces por bloques independientes.',
                durationMinutes: 25,
                objectives: [
                  'Separar presentacion, estado y comportamiento.',
                  'Evitar acoplamiento entre secciones.',
                  'Definir componentes reutilizables con API clara.'
                ],
                content: [
                  'Un buen sistema de componentes acelera iteraciones y reduce bugs visuales.',
                  'Empieza pequeno: boton, tarjeta, formulario, y escala hacia patrones compuestos.',
                  'Documenta variantes para mantener consistencia del producto.'
                ]
              },
              {
                slug: 'accesibilidad-practica',
                title: 'Accesibilidad practica',
                summary: 'Mejoras concretas para navegacion y lectura inclusiva.',
                durationMinutes: 21,
                objectives: [
                  'Aplicar jerarquia semantica en titulos y landmarks.',
                  'Mejorar foco, contraste y navegacion por teclado.',
                  'Detectar problemas comunes de accesibilidad.'
                ],
                content: [
                  'La accesibilidad mejora experiencia para todos, no solo para casos extremos.',
                  'Priorizando foco visible y etiquetas correctas eliminas gran parte de friccion de uso.',
                  'Integra estas validaciones en cada iteracion para no dejar deuda tecnica.'
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export function getTrack(trackSlug: string) {
  return learningTracks.find((track) => track.slug === trackSlug);
}

export function getCourse(trackSlug: string, courseSlug: string) {
  const track = getTrack(trackSlug);
  if (!track) {
    return null;
  }

  const course = track.courses.find((item) => item.slug === courseSlug);
  if (!course) {
    return null;
  }

  return { track, course };
}

export function buildCourseLessonNodes(trackSlug: string, course: Course): LessonNode[] {
  return course.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      id: `${trackSlug}/${course.slug}/${module.slug}/${lesson.slug}`,
      href: withBase(`/cursos/${trackSlug}/${course.slug}/${module.slug}/${lesson.slug}`),
      title: lesson.title,
      moduleTitle: module.title,
    }))
  );
}

export function getLessonContext(
  trackSlug: string,
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string
): LessonContext | null {
  const courseContext = getCourse(trackSlug, courseSlug);
  if (!courseContext) {
    return null;
  }

  const { track, course } = courseContext;
  const module = course.modules.find((item) => item.slug === moduleSlug);
  if (!module) {
    return null;
  }

  const lesson = module.lessons.find((item) => item.slug === lessonSlug);
  if (!lesson) {
    return null;
  }

  const nodes = buildCourseLessonNodes(track.slug, course);
  const lessonId = `${track.slug}/${course.slug}/${module.slug}/${lesson.slug}`;
  const lessonPath = withBase(`/cursos/${track.slug}/${course.slug}/${module.slug}/${lesson.slug}`);
  const currentIndex = nodes.findIndex((node) => node.id === lessonId);

  if (currentIndex < 0) {
    return null;
  }

  return {
    track,
    course,
    module,
    lesson,
    lessonId,
    lessonPath,
    nodes,
    currentIndex,
    previous: currentIndex > 0 ? nodes[currentIndex - 1] : null,
    next: currentIndex < nodes.length - 1 ? nodes[currentIndex + 1] : null,
  };
}
