import { TemaPageClient } from "./TemaPageClient";
import { getTemaStaticParams } from "@/content/temas";

export function generateStaticParams() {
  return getTemaStaticParams();
}

export default function TemaPage() {
  return <TemaPageClient />;
}
