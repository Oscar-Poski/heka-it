"use client";

import { motion } from "framer-motion";
import { Icon } from "../Icon";
import type { SeccionGrid } from "@/lib/types";

type Props = { seccion: SeccionGrid };

export function GridBlock({ seccion }: Props) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5">
        {seccion.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: (i % 2) * 0.06 }}
            className="rounded-card border border-border bg-surface p-3"
          >
            {item.icono ? (
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mb-2">
                <Icon name={item.icono} size={16} strokeWidth={1.8} />
              </div>
            ) : null}
            <div className="text-[13px] font-semibold text-text-primary leading-snug">
              {item.titulo}
            </div>
            <div className="text-[12px] text-text-muted mt-0.5 leading-relaxed">
              {item.descripcion}
            </div>
          </motion.div>
        ))}
      </div>

      {seccion.nota ? (
        <div className="mt-3 rounded-card bg-surface2 border-l-[3px] border-teal px-4 py-3 text-[13px] text-text-primary leading-relaxed">
          {seccion.nota}
        </div>
      ) : null}
    </div>
  );
}
