"use client";

import { motion } from "framer-motion";
import type { SeccionPasos } from "@/lib/types";

type Props = { seccion: SeccionPasos };

export function PasosBlock({ seccion }: Props) {
  return (
    <ol className="space-y-3">
      {seccion.pasos.map((paso, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex gap-3 rounded-card border border-border bg-surface p-3.5"
        >
          <div className="shrink-0 w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center text-[12px] font-semibold">
            {i + 1}
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-medium text-text-primary leading-snug">
              {paso.titulo}
            </div>
            <div className="text-[12.5px] text-text-muted mt-0.5 leading-relaxed">
              {paso.descripcion}
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
