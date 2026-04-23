export type SeccionTexto = {
  tipo: "texto";
  eyebrow: string;
  texto: string;
};

export type SeccionAnalogia = {
  tipo: "analogia";
  eyebrow?: string;
  texto?: string;
  items: { label: string; valor: string; icono: string }[];
};

export type SeccionAnatomia = {
  tipo: "anatomia";
  eyebrow?: string;
  texto?: string;
  partes: { id: string; label: string; color: string; detalle: string }[];
};

export type SeccionPasos = {
  tipo: "pasos";
  eyebrow?: string;
  texto?: string;
  pasos: { titulo: string; descripcion: string }[];
};

export type SeccionVisual = {
  tipo: "visual";
  eyebrow?: string;
  texto?: string;
  componente?: string;
};

export type SeccionHighlight = {
  tipo: "highlight";
  texto: string;
};

export type SeccionQuiz = {
  tipo: "quiz";
  pregunta: string;
  opciones: { texto: string; correcta: boolean }[];
  feedbackCorrecto: string;
  feedbackIncorrecto: string;
};

export type Seccion =
  | SeccionTexto
  | SeccionAnalogia
  | SeccionAnatomia
  | SeccionPasos
  | SeccionVisual
  | SeccionHighlight
  | SeccionQuiz;

export type Capitulo = {
  slug: string;
  numero: number;
  titulo: string;
  descripcion?: string;
  tiempoMin: number;
  preguntaGancho?: string;
  secciones: Seccion[];
};

export type Tema = {
  slug: string;
  nombre: string;
  preguntaGancho: string;
  iconoLucide: string;
  totalCapitulos: number;
  tiempoEstimadoMin: number;
  requisitos: string;
  prerrequisitos: string;
};

export type ProgresoUsuario = {
  temaActivo: string | null;
  capituloActivo: number | null;
  temasCompletados: string[];
  capitulosCompletados: Record<string, number[]>;
};
