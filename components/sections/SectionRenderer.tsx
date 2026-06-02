"use client";

import type { ComponentType } from "react";
import type { Seccion, SeccionQuiz } from "@/lib/types";
import { Eyebrow, RevealSection } from "../RevealSection";
import { HighlightBox } from "../HighlightBox";
import { AnalogiaBlock } from "./AnalogiaBlock";
import { AnatomiaBlock } from "./AnatomiaBlock";
import { PasosBlock } from "./PasosBlock";
import { ComparacionBlock } from "./ComparacionBlock";
import { ChatBlock } from "./ChatBlock";
import { GridBlock } from "./GridBlock";
import { PromptLabBlock } from "./PromptLabBlock";
import { PacketJourney } from "./PacketJourney";
import { IPv4Animation } from "./IpDireccion";
import { DNSLookup } from "./DNSLookup";
import { TcpUdpCompare } from "./TCPUDPCompare";
import { HttpVsHttps } from "./HttpVsHttps";
import { OsiEncapsulation } from "./OsiEncapsulation";
import { LinuxLayers } from "./LinuxLayers";
import { TerminalFlow } from "./TerminalFlow"
import { FilesystemTree } from "./FilesystemTree"
import { PermissionsDecoder } from "./PermissionsDecoder"
import { ProcessTree } from "./ProcessTree"
import { PipelineFlow } from "./PipelineFlow"
import { Tokenizer } from "./Tokenizer";
import { ContextWindowMeter } from "./ContextWindowMeter";
import { TemperatureSlider } from "./TemperatureSlider";
import { EmbeddingSimilarity } from "./EmbeddingSimilarity";
import { RagPipeline } from "./RagPipeline";
import { ChunkingDemo } from "./ChunkingDemo";
import { GitThreeStates } from "./GitThreeStates";
import { GitGraph } from "./GitGraph";
import { GitConflict } from "./GitConflict";
import { PasswordStrength } from "./PasswordStrength";
import { CifradoDemo } from "./CifradoDemo";
import { AttackFlow } from "./AttackFlow";

const COMPONENT_MAP: Record<string, ComponentType> = {
  "packet-journey": PacketJourney,
  "ipv4-animation": IPv4Animation,
  "dns-lookup": DNSLookup,
  "tcp-udp-compare": TcpUdpCompare,
  "http-vs-https": HttpVsHttps,
  "osi-encapsulation": OsiEncapsulation,
  "linux-layers": LinuxLayers,
  "terminal-flow": TerminalFlow,
  "filesystem-tree": FilesystemTree,
  "permissions-decoder": PermissionsDecoder,
  "process-tree": ProcessTree,
  "pipeline-flow": PipelineFlow,
  "tokenizer-demo": Tokenizer,
  "context-window-meter": ContextWindowMeter,
  "temperature-slider": TemperatureSlider,
  "embedding-similarity": EmbeddingSimilarity,
  "rag-pipeline": RagPipeline,
  "chunking-demo": ChunkingDemo,
  "git-three-states": GitThreeStates,
  "git-graph": GitGraph,
  "git-conflict": GitConflict,
  "password-strength": PasswordStrength,
  "cifrado-demo": CifradoDemo,
  "attack-flow": AttackFlow,
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

    case "comparacion":
      return (
        <RevealSection delay={index * 0.02}>
          {seccion.eyebrow ? <Eyebrow>{seccion.eyebrow}</Eyebrow> : null}
          {seccion.texto ? (
            <p className="text-[14.5px] leading-relaxed text-text-primary mb-3">
              {seccion.texto}
            </p>
          ) : null}
          <ComparacionBlock seccion={seccion} />
        </RevealSection>
      );

    case "chat":
      return (
        <RevealSection delay={index * 0.02}>
          {seccion.eyebrow ? <Eyebrow>{seccion.eyebrow}</Eyebrow> : null}
          {seccion.texto ? (
            <p className="text-[14.5px] leading-relaxed text-text-primary mb-3">
              {seccion.texto}
            </p>
          ) : null}
          <ChatBlock seccion={seccion} />
        </RevealSection>
      );

    case "grid":
      return (
        <RevealSection delay={index * 0.02}>
          {seccion.eyebrow ? <Eyebrow>{seccion.eyebrow}</Eyebrow> : null}
          {seccion.texto ? (
            <p className="text-[14.5px] leading-relaxed text-text-primary mb-3">
              {seccion.texto}
            </p>
          ) : null}
          <GridBlock seccion={seccion} />
        </RevealSection>
      );

    case "promptlab":
      return (
        <RevealSection delay={index * 0.02}>
          {seccion.eyebrow ? <Eyebrow>{seccion.eyebrow}</Eyebrow> : null}
          {seccion.texto ? (
            <p className="text-[14.5px] leading-relaxed text-text-primary mb-3">
              {seccion.texto}
            </p>
          ) : null}
          <PromptLabBlock seccion={seccion} />
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
