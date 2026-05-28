"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { SeccionComparacion } from "@/lib/types";

type Props = { seccion: SeccionComparacion };

export function ComparacionBlock({ seccion }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {seccion.columnas.map((col, i) => {
        const destacada = !!col.destacada;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-card border overflow-hidden ${
              destacada ? "border-teal" : "border-border"
            }`}
          >
            {/* Header band */}
            <div
              className={`px-4 py-3 ${
                destacada ? "bg-teal text-blanco" : "bg-surface2 text-text-primary"
              }`}
            >
              <div className="text-[14px] font-semibold leading-tight">
                {col.titulo}
              </div>
              {col.subtitulo ? (
                <div
                  className={`text-[11.5px] mt-0.5 ${
                    destacada ? "text-blanco/80" : "text-text-muted"
                  }`}
                >
                  {col.subtitulo}
                </div>
              ) : null}
            </div>

            {/* Rows */}
            <ul className="bg-surface divide-y divide-border">
              {col.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 px-4 py-2.5 text-[13px] text-text-primary leading-snug"
                >
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className={`mt-0.5 shrink-0 ${
                      destacada ? "text-teal" : "text-text-dim"
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
