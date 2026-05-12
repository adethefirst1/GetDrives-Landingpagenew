/** Mirrors landing motion presets — respects reduced motion */

import { useReducedMotion } from "framer-motion";

export const inView = { once: true, margin: "-80px" as const };

export function useAccessibleMotion() {
  const reduce = useReducedMotion();
  const ease = "easeOut";
  const tr = (full: number, reduced = Math.min(full * 0.72, 0.45)) => ({
    duration: reduce ? reduced : full,
    ease,
  });

  const heroBlock = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: tr(0.55, 0.42),
  };

  const fadeUp = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: inView,
    transition: tr(0.5, 0.38),
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0.06 : 0.12 },
    },
  };

  const staggerItem = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: tr(0.45, 0.36),
    },
  };

  const buttonHover = reduce
    ? { whileHover: { scale: 1 }, whileTap: { scale: 1 } }
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  return { heroBlock, fadeUp, staggerContainer, staggerItem, buttonHover, tr };
}
