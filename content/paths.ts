import type { Path } from "@/lib/types";

export const paths: Path[] = [
  {
    slug: "inteligencia-artificial",
    nombre: "Inteligencia Artificial",
    descripcion:
      "De los prompts a los agentes: cómo trabajar con IA en tu día a día.",
    iconoLucide: "Sparkles",
    temaSlugs: [

      "prompt-engineering",
      "llm",
      "claude-cowork",
      "rag",
      "mcp",
      "zapier",
      "make",
      "n8n",
      "microsoft-copilot",
      "gemini",
      "agentforce",
    ],
  },
  {
    slug: "fundamentos-it",
    nombre: "Fundamentos IT",
    descripcion:
      "Los cimientos del mundo técnico: redes, sistemas, infraestructura y nube.",
    iconoLucide: "Server",
    temaSlugs: [
      "redes",
      "linux",
      "git",
      "seguridad",
      "bases-de-datos",
      "docker",
      "cloud",
      "terraform",
      "kubernetes",
    ],
  },
  {
    slug: "data-analysis",
    nombre: "Data Analysis",
    descripcion:
      "Convierte datos en decisiones: consultas, modelos, dashboards y narrativa visual.",
    iconoLucide: "BarChart3",
    temaSlugs: [
      "sql",
      "excel",
      "python-pandas",
      "power-bi",
      "tableau",
      "estadistica",
      "visualizacion-datos",
    ],
  },
];

export function pathBySlug(slug: string): Path | undefined {
  return paths.find((p) => p.slug === slug);
}

export function pathOfTema(temaSlug: string): Path | undefined {
  return paths.find((p) => p.temaSlugs.includes(temaSlug));
}
