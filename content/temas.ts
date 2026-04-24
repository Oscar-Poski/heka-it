import type { Tema } from "@/lib/types";

export const temas: Tema[] = [
  {
    slug: "redes",
    nombre: "Redes",
    preguntaGancho: "¿Cómo llega un video de YouTube a tu pantalla en menos de un segundo?",
    iconoLucide: "Network",
    totalCapitulos: 6,
    tiempoEstimadoMin: 45,
    requisitos: "Ninguno",
    prerrequisitos:
      "No necesitas saber nada antes. Solo ganas de entender cómo funciona internet por dentro.",
  },
  {
    slug: "linux",
    nombre: "Linux Admin",
    preguntaGancho: "La base de todos los servidores del mundo. También de Google, Netflix y Amazon.",
    iconoLucide: "Terminal",
    totalCapitulos: 6,
    tiempoEstimadoMin: 60,
    requisitos: "Ninguno",
    prerrequisitos:
      "Ideal si ya jugaste con Redes, pero no obligatorio. Se asume cero experiencia con la terminal.",
  },
  {
    slug: "git",
    nombre: "Git",
    preguntaGancho: "¿Cómo trabajan 50 personas sobre el mismo código sin estropearlo?",
    iconoLucide: "GitBranch",
    totalCapitulos: 5,
    tiempoEstimadoMin: 35,
    requisitos: "Familiaridad con la terminal ayuda",
    prerrequisitos: "Recomendado haber visto Linux Admin primero.",
  },
  {
    slug: "seguridad",
    nombre: "Seguridad",
    preguntaGancho: "¿Qué tiene que pasar para que alguien robe una contraseña?",
    iconoLucide: "ShieldCheck",
    totalCapitulos: 6,
    tiempoEstimadoMin: 50,
    requisitos: "Conceptos básicos de Redes",
    prerrequisitos: "Se construye sobre lo visto en Redes.",
  },
  {
    slug: "bases-de-datos",
    nombre: "Bases de Datos",
    preguntaGancho: "¿Dónde vive la información cuando cierras la app?",
    iconoLucide: "Database",
    totalCapitulos: 5,
    tiempoEstimadoMin: 40,
    requisitos: "Ninguno",
    prerrequisitos: "Independiente. Se puede ver en cualquier momento.",
  },
  {
    slug: "docker",
    nombre: "Docker",
    preguntaGancho: "¿Cómo empacar una app entera para abrirla en cualquier dispositivo?",
    iconoLucide: "Container",
    totalCapitulos: 5,
    tiempoEstimadoMin: 40,
    requisitos: "Linux Admin recomendado",
    prerrequisitos: "Conviene venir con Linux fresco en la cabeza.",
  },
  {
    slug: "cloud",
    nombre: "Cloud",
    preguntaGancho: "¿De quién es la computadora que ejecuta todos los programas que usas a diario?",
    iconoLucide: "Cloud",
    totalCapitulos: 6,
    tiempoEstimadoMin: 50,
    requisitos: "Redes y Linux",
    prerrequisitos: "Asume que ya viste Redes y Linux Admin.",
  },
  {
    slug: "terraform",
    nombre: "Terraform",
    preguntaGancho: "¿Y si la infraestructura se escribiera como un archivo de texto?",
    iconoLucide: "FileCode2",
    totalCapitulos: 4,
    tiempoEstimadoMin: 30,
    requisitos: "Cloud",
    prerrequisitos: "Requiere entender conceptos de Cloud primero.",
  },
  {
    slug: "kubernetes",
    nombre: "Kubernetes",
    preguntaGancho: "¿Cómo se orquestan cientos de contenedores al mismo tiempo?",
    iconoLucide: "Boxes",
    totalCapitulos: 5,
    tiempoEstimadoMin: 45,
    requisitos: "Docker y Cloud",
    prerrequisitos: "Necesitás Docker entendido y al menos haber rozado Cloud.",
  },
];

export function temaBySlug(slug: string): Tema | undefined {
  return temas.find((t) => t.slug === slug);
}

export function getTemaStaticParams() {
  return temas.map((tema) => ({
    slug: tema.slug,
  }));
}
