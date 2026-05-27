"use client";

import { Lightbulb } from "lucide-react";

type Props = {
  texto: string;
};

export function HighlightBox({ texto }: Props) {
  return (
    <div className="border-l-[3px] border-teal bg-surface rounded-r-card pl-4 pr-4 py-3 flex gap-3 items-start">
      <Lightbulb
        size={16}
        className="text-teal shrink-0 mt-0.5"
        strokeWidth={1.8}
      />
      <p className="text-[13.5px] text-text-primary leading-relaxed">{texto}</p>
    </div>
  );
}
