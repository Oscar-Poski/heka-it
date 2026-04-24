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
};

export function getCapitulo(slug: string, numero: number): Capitulo | undefined {
  return capitulos[slug]?.[numero];
}

export function getCapituloStaticParams() {
  return temas.flatMap((tema) =>
    Array.from({ length: tema.totalCapitulos }, (_, index) => ({
      slug: tema.slug,
      capitulo: String(index + 1),
    }))
  );
}
