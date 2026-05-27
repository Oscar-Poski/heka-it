import { Suspense } from "react";
import { CapituloPageClient } from "./CapituloPageClient";
import { getCapituloStaticParams } from "@/content";

export function generateStaticParams() {
  return getCapituloStaticParams();
}

export default function CapituloPage() {
  return (
    <Suspense>
      <CapituloPageClient />
    </Suspense>
  );
}
