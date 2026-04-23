"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import type { SeccionQuiz } from "@/lib/types";

type Props = {
  quiz: SeccionQuiz;
  onComplete: () => void;
  nextLabel: string;
  nextHref?: string;
  onNext?: () => void;
};

export function QuizBlock({
  quiz,
  onComplete,
  nextLabel,
  onNext,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealedCorrect, setRevealedCorrect] = useState(false);

  const handleSelect = (idx: number) => {
    if (revealedCorrect) return;
    setSelected(idx);
    if (quiz.opciones[idx].correcta) {
      setRevealedCorrect(true);
      onComplete();
    }
  };

  const selOpt = selected !== null ? quiz.opciones[selected] : null;

  return (
    <div className="rounded-card border border-border bg-surface p-4">
      <div className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase mb-2">
        Quiz
      </div>
      <h3 className="text-[16px] font-semibold text-text-primary leading-snug mb-4">
        {quiz.pregunta}
      </h3>

      <div className="space-y-2">
        {quiz.opciones.map((opt, idx) => {
          const isSelected = selected === idx;
          const isCorrect = opt.correcta;
          const showState = isSelected;
          const lock = revealedCorrect && !isCorrect;
          let cls =
            "border-border bg-surface2 text-text-primary active:bg-surface";
          if (showState && isCorrect) {
            cls = "border-accent bg-accent/10 text-accent";
          } else if (showState && !isCorrect) {
            cls = "border-red-400/40 bg-red-400/5 text-text-primary";
          } else if (revealedCorrect && isCorrect) {
            cls = "border-accent bg-accent/10 text-accent";
          }
          return (
            <button
              key={idx}
              disabled={lock}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left text-[14px] rounded-lg border px-3.5 py-3 transition-colors flex items-center gap-2.5 ${cls} ${
                lock ? "opacity-60 cursor-default" : ""
              }`}
            >
              <span className="flex-1">{opt.texto}</span>
              {showState && isCorrect ? (
                <Check size={16} className="text-accent" strokeWidth={2.5} />
              ) : null}
              {showState && !isCorrect ? (
                <X size={16} className="text-red-400" strokeWidth={2.5} />
              ) : null}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {selOpt ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`mt-3 rounded-lg px-3 py-2.5 text-[12.5px] leading-relaxed ${
              selOpt.correcta
                ? "bg-accent/5 text-text-primary border border-accent/30"
                : "bg-surface2 text-text-muted border border-border"
            }`}
          >
            {selOpt.correcta ? quiz.feedbackCorrecto : quiz.feedbackIncorrecto}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {revealedCorrect ? (
          <motion.button
            onClick={onNext}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-full flex items-center justify-between gap-2 bg-accent text-bg rounded-card px-4 py-3 active:bg-accent/90 transition-colors"
          >
            <span className="text-[14px] font-semibold">{nextLabel}</span>
            <ArrowRight size={18} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
