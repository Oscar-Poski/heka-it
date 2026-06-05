"use client";

import { motion } from "framer-motion";
import type { SeccionChat } from "@/lib/types";

type Props = { seccion: SeccionChat };

export function ChatBlock({ seccion }: Props) {
  return (
    <div className="rounded-card border border-border bg-surface2/60 p-3 space-y-3">
      {seccion.mensajes.map((m, i) => {
        const isUser = m.rol === "user";
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: i * 0.12 }}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[85%] ${isUser ? "items-end" : "items-start"}`}>
              <div
                className={`text-[10px] uppercase tracking-wider mb-1 ${
                  isUser ? "text-right text-text-dim" : "text-teal"
                }`}
              >
                {isUser ? "Tú" : "IA"}
              </div>
              <div
                className={`rounded-card px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line ${
                  isUser
                    ? "bg-accent/10 border border-accent/30 text-text-primary"
                    : "bg-surface border border-border text-text-primary"
                }`}
              >
                {m.texto}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
