"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  return (
    <motion.div
      className="fixed top-14 left-0 right-0 h-[2px] bg-accent z-30 origin-left"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
