"use client";

import { ArrowLeftRight } from "lucide-react";
import { Icon } from "../Icon";
import type { SeccionAnalogia } from "@/lib/types";

type Props = { seccion: SeccionAnalogia };

export function AnalogiaBlock({ seccion }: Props) {
  const [a, b] = seccion.items;
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-stretch">
      <Card item={a} />
      <div className="flex items-center justify-center text-text-dim">
        <ArrowLeftRight size={16} strokeWidth={1.5} />
      </div>
      <Card item={b} accent />
    </div>
  );
}

function Card({
  item,
  accent = false,
}: {
  item: { label: string; valor: string; icono: string };
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-card border p-3 text-center ${
        accent
          ? "border-accent/40 bg-accent/5"
          : "border-border bg-surface"
      }`}
    >
      <div
        className={`mx-auto w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${
          accent ? "text-accent" : "text-text-primary"
        }`}
      >
        <Icon name={item.icono} size={22} strokeWidth={1.7} />
      </div>
      <div className="text-[10px] uppercase tracking-wider text-text-dim mb-0.5">
        {item.label}
      </div>
      <div className="text-[13px] text-text-primary font-medium leading-snug">
        {item.valor}
      </div>
    </div>
  );
}
