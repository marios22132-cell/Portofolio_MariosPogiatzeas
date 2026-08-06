import type { Transition, Variants } from "motion/react";

/**
 * Shared motion tokens. Every animation on the site pulls its timing from here so the
 * whole page shares one rhythm — see CLAUDE.md §6.
 */

/** Custom ease-out curve: quick departure, soft landing. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  /** Micro-interactions: hover, toggles. */
  fast: 0.2,
  /** Standard entrances. */
  base: 0.4,
  /** The hero's one signature moment. */
  slow: 0.6,
} as const;

/** Springs feel more physical than curves for elements that carry weight. */
export const SPRING: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.9,
};

/** Fade + rise. The default entrance for text and cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.base, ease: EASE_OUT } },
};

/** Parent wrapper that releases its children one after another. */
export const stagger = (staggerChildren = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Standard viewport trigger — fires once, a quarter of the way in. */
export const VIEWPORT = { once: true, amount: 0.25 } as const;

/**
 * Reduced-motion fallback: content still appears, it just doesn't travel.
 * Pass the result of `useReducedMotion()`.
 */
export const respectMotion = (reduced: boolean | null, variants: Variants): Variants =>
  reduced ? fadeIn : variants;
