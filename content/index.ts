import type { Capitulo } from "@/lib/types";
import { temas } from "./temas";
import redes1 from "./redes/1";
import redes2 from "./redes/2";
import redes3 from "./redes/3";
import redes4 from "./redes/4";
import redes5 from "./redes/5";
import redes6 from "./redes/6";
import linux1 from "./linux/1";
import linux2 from "./linux/2";
import linux3 from "./linux/3";
import linux4 from "./linux/4";
import linux5 from "./linux/5";
import linux6 from "./linux/6";
import cowork1 from "./claude_cowork/1";
import cowork2 from "./claude_cowork/2";
import cowork3 from "./claude_cowork/3";
import cowork4 from "./claude_cowork/4";
import cowork5 from "./claude_cowork/5";
import n8n1 from "./n8n/1";
import n8n2 from "./n8n/2";
import n8n3 from "./n8n/3";
import n8n4 from "./n8n/4";
import zapier1 from "./zapier/1";
import zapier2 from "./zapier/2";
import zapier3 from "./zapier/3";
import zapier4 from "./zapier/4";
import pe1 from "./prompt-engineering/1";
import pe2 from "./prompt-engineering/2";
import pe3 from "./prompt-engineering/3";
import pe4 from "./prompt-engineering/4";

type ContentMap = Record<string, Record<number, Capitulo>>;

export const capitulos: ContentMap = {
  redes: {
    1: redes1,
    2: redes2,
    3: redes3,
    4: redes4,
    5: redes5,
    6: redes6,
  },
  linux: {
    1: linux1,
    2: linux2,
    3: linux3,
    4: linux4,
    5: linux5,
    6: linux6,
  },
  "prompt-engineering": {
    1: pe1,
    2: pe2,
    3: pe3,
    4: pe4,
  },
  "claude-cowork": {
    1: cowork1,
    2: cowork2,
    3: cowork3,
    4: cowork4,
    5: cowork5,
  },
  n8n: {
    1: n8n1,
    2: n8n2,
    3: n8n3,
    4: n8n4,
  },
  zapier: {
    1: zapier1,
    2: zapier2,
    3: zapier3,
    4: zapier4,
  },
};

export function getCapitulo(slug: string, numero: number): Capitulo | undefined {
  return capitulos[slug]?.[numero];
}

export function getCapituloStaticParams() {
  return [...temas].flatMap((tema) =>
    Array.from({ length: tema.totalCapitulos }, (_, index) => ({
      slug: tema.slug,
      capitulo: String(index + 1),
    }))
  );
}
