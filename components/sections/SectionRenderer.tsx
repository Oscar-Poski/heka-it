"use client";

import type { ComponentType } from "react";
import type { Seccion, SeccionQuiz } from "@/lib/types";
import { Eyebrow, RevealSection } from "../RevealSection";
import { HighlightBox } from "../HighlightBox";
import { AnalogiaBlock } from "./AnalogiaBlock";
import { AnatomiaBlock } from "./AnatomiaBlock";
import { PasosBlock } from "./PasosBlock";
import { PacketJourney } from "./PacketJourney";
import { DNSLookup } from "./DNSLookup";
import { TcpUdpCompare } from "./TCPUDPCompare";
import { HttpVsHttps } from "./HttpVsHttps";
import { OsiEncapsulation } from "./OsiEncapsulation";

const COMPONENT_MAP: Record<string, ComponentType> = {
  "packet-journey": PacketJourney,
  "dns-lookup": DNSLookup,
  "tcp-udp-compare": TcpUdpCompare,
  "http-vs-https": HttpVsHttps,
  "osi-encapsulation": OsiEncapsulation,
};

type Props = {
  seccion: Seccion;
  index: number;
  onQuizMount?: (quiz: SeccionQuiz, index: number) => void;
};

export function SectionRenderer({ seccion, index }: Props) {
  switch (seccion.tipo) {
    case "texto":
      return (
        <RevealSection delay={index * 0.02}>
          <Eyebrow>{seccion.eyebrow}</Eyebrow>
          <p className="text-[15px] leading-relaxed text-text-primary">
            {seccion.texto}
          </p>
        </RevealSection>
      );

    case "analogia":
      return (
        <RevealSection delay={index * 0.02}>
          {seccion.eyebrow ? <Eyebrow>{seccion.eyebrow}</Eyebrow> : null}
          {seccion.texto ? (
            <p className="text-[14.5px] leading-relaxed text-text-primary mb-3">
              {seccion.texto}
            </p>
          ) : null}
          <AnalogiaBlock seccion={seccion} />
        </RevealSection>
      );

    case "anatomia":
      return (
        <RevealSection delay={index * 0.02}>
          {seccion.eyebrow ? <Eyebrow>{seccion.eyebrow}</Eyebrow> : null}
          {seccion.texto ? (
            <p className="text-[14.5px] leading-relaxed text-text-primary mb-3">
              {seccion.texto}
            </p>
          ) : null}
          <AnatomiaBlock seccion={seccion} />
        </RevealSection>
      );

    case "pasos":
      return (
        <RevealSection delay={index * 0.02}>
          {seccion.eyebrow ? <Eyebrow>{seccion.eyebrow}</Eyebrow> : null}
          {seccion.texto ? (
            <p className="text-[14.5px] leading-relaxed text-text-primary mb-3">
              {seccion.texto}
            </p>
          ) : null}
          <PasosBlock seccion={seccion} />
        </RevealSection>
      );

    case "visual":
      const VisualComponent = seccion.componente
        ? COMPONENT_MAP[seccion.componente]
        : null;

      return (
        <RevealSection delay={index * 0.02}>
          {seccion.eyebrow ? <Eyebrow>{seccion.eyebrow}</Eyebrow> : null}
          {seccion.texto ? (
            <p className="text-[14.5px] leading-relaxed text-text-primary mb-3">
              {seccion.texto}
            </p>
          ) : null}
          {VisualComponent ? <VisualComponent /> : null}
        </RevealSection>
      );

    case "highlight":
      return (
        <RevealSection delay={index * 0.02}>
          <HighlightBox texto={seccion.texto} />
        </RevealSection>
      );

    case "quiz":
      // Quiz is rendered by the capítulo page directly so it can wire progress + nav.
      return null;
  }
}
