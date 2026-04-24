"use client";

import Link from "next/link";
import { ChevronLeft, Clock } from "lucide-react";

type Props = {
  backHref?: string;
  title?: string;
  subtitle?: string;
  tiempoMin?: number;
  right?: React.ReactNode;
};

export function TopBar({ backHref, title, subtitle, tiempoMin, right }: Props) {
  return (
    <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur-sm border-b border-border/60">
      <div className="shell flex items-center min-h-[52px] px-4 gap-2">
        {backHref ? (
          <Link
            href={backHref}
            className="inline-flex items-center justify-center w-10 h-10 -ml-2 rounded-xl text-text-primary hover:bg-surface2 active:scale-95 transition-all shrink-0"
            aria-label="Volver"
          >
            <ChevronLeft size={22} strokeWidth={1.8} />
          </Link>
        ) : null}

        <div className="flex-1 min-w-0">
          {subtitle ? (
            <div className="text-[15px] font-semibold text-text-primary truncate leading-tight">
              {subtitle}
            </div>
          ) : null}
          {title ? (
            <div className="text-[12px] text-text-dim truncate mt-0.5">
              {title}
            </div>
          ) : null}
        </div>

        {tiempoMin ? (
          <div className="flex items-center gap-1 text-[12px] text-text-muted shrink-0 bg-surface2 px-2.5 py-1 rounded-full">
            <Clock size={12} strokeWidth={1.8} />
            <span>{tiempoMin} min</span>
          </div>
        ) : null}

        {right}
      </div>
    </header>
  );
}