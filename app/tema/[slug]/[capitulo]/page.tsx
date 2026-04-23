import { CapituloPageClient } from "./CapituloPageClient";
import { getCapituloStaticParams } from "@/content";

export function generateStaticParams() {
  return getCapituloStaticParams();
}

export default function CapituloPage() {
  return <CapituloPageClient />;
}
