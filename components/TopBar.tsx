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
    <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-border">
      <div className="shell flex items-center h-14 px-4 gap-3">
        {backHref ? (
          <Link
            href={backHref}
            className="inline-flex items-center justify-center w-9 h-9 -ml-1 rounded-lg text-text-primary hover:bg-surface2 transition-colors"
            aria-label="Volver"
          >
            <ChevronLeft size={20} />
          </Link>
        ) : null}
        <div className="flex-1 min-w-0">
          {title ? (
            <div className="text-[13px] font-medium truncate text-text-primary">
              {title}
            </div>
          ) : null}
          {subtitle ? (
            <div className="text-[11px] text-text-muted truncate">{subtitle}</div>
          ) : null}
        </div>
        {tiempoMin ? (
          <div className="flex items-center gap-1.5 text-[12px] text-text-muted">
            <Clock size={14} />
            <span>{tiempoMin} min</span>
          </div>
        ) : null}
        {right}
      </div>
    </header>
  );
}
