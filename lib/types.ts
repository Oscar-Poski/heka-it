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

export type SeccionComparacion = {
  tipo: "comparacion";
  eyebrow?: string;
  texto?: string;
  columnas: [
    { titulo: string; subtitulo?: string; items: string[]; destacada?: boolean },
    { titulo: string; subtitulo?: string; items: string[]; destacada?: boolean }
  ];
};

export type SeccionChat = {
  tipo: "chat";
  eyebrow?: string;
  texto?: string;
  mensajes: { rol: "user" | "claude"; texto: string }[];
};

export type SeccionGrid = {
  tipo: "grid";
  eyebrow?: string;
  texto?: string;
  nota?: string;
  items: { titulo: string; descripcion: string; icono?: string }[];
};

export type SeccionPromptLab = {
  tipo: "promptlab";
  eyebrow?: string;
  texto?: string;
  ejemplos: {
    id: string;
    label: string;
    icono?: string;
    rol: string;
    tarea: string;
    contexto: string;
    formato: string;
  }[];
};

export type Seccion =
  | SeccionTexto
  | SeccionAnalogia
  | SeccionAnatomia
  | SeccionPasos
  | SeccionVisual
  | SeccionHighlight
  | SeccionQuiz
  | SeccionComparacion
  | SeccionChat
  | SeccionGrid
  | SeccionPromptLab;

export type Paso = {
  titulo?: string;
  secciones: Seccion[];
};

export type Capitulo = {
  slug: string;
  numero: number;
  titulo: string;
  pasos: Paso[];
};

export type Tema = {
  slug: string;
  nombre: string;
  preguntaGancho: string;
  iconoLucide: string;
  totalCapitulos: number;
  tiempoEstimadoMin: number;
  nivel: string;
  prerrequisitos: string;
};

export type Path = {
  slug: string;
  nombre: string;
  descripcion: string;
  iconoLucide: string;
  temaSlugs: string[];
};

export type ProgresoUsuario = {
  temaActivo: string | null;
  capituloActivo: number | null;
  temasCompletados: string[];
  capitulosCompletados: Record<string, number[]>;
};
