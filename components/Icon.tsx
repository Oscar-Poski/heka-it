"use client";

import {
  Network,
  Terminal,
  GitBranch,
  ShieldCheck,
  Database,
  Container,
  Cloud,
  FileCode2,
  Boxes,
  GraduationCap,
  Mail,
  House,
  Laptop,
  BookOpen,
  Globe,
  PackageCheck,
  Phone,
  UtensilsCrossed,
  ChefHat,
  FileText,
  Layers,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Network,
  Terminal,
  GitBranch,
  ShieldCheck,
  Database,
  Container,
  Cloud,
  FileCode2,
  Boxes,
  GraduationCap,
  Mail,
  House,
  Laptop,
  BookOpen,
  Globe,
  PackageCheck,
  Phone,
  UtensilsCrossed,
  ChefHat,
  FileText,
  Layers,
};

type Props = { name: string } & LucideProps;

export function Icon({ name, ...rest }: Props) {
  const Cmp = icons[name] ?? Network;
  return <Cmp {...rest} />;
}
