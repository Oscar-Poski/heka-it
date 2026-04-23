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
      <div className="shell px-4 pb-4 pt-6 bg-gradient-to-t from-bg via-bg/90 to-transparent pointer-events-auto">
        <Link
          href={href}
          className="flex items-center justify-between gap-3 w-full bg-accent text-bg rounded-card px-4 py-3 active:bg-accent/90 transition-colors"
        >
          <div className="min-w-0">
            <div className="text-[14px] font-semibold truncate">{label}</div>
            {sub ? (
              <div className="text-[11px] opacity-70 truncate">{sub}</div>
            ) : null}
          </div>
          <ArrowRight size={18} className="shrink-0" />
        </Link>
      </div>
    </div>
  );
}
