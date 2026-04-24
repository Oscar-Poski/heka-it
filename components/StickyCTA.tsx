"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  label: string;
  sub?: string;
};

export function StickyCTA({ href, label, sub }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      <div className="shell px-4 pt-8 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-gradient-to-t from-bg via-bg/95 to-transparent pointer-events-auto">
        <Link
          href={href}
          className="flex items-center justify-between gap-3 w-full min-h-[52px] bg-accent text-bg rounded-card px-5 py-3.5 active:scale-[0.98] active:bg-accent/90 transition-all"
        >
          <div className="min-w-0">
            <div className="text-[15px] font-semibold truncate">{label}</div>
            {sub ? (
              <div className="text-[12px] opacity-60 truncate mt-0.5">{sub}</div>
            ) : null}
          </div>
          <ArrowRight size={20} className="shrink-0 opacity-80" />
        </Link>
      </div>
    </div>
  );
}