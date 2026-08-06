"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

type SectionProps = {
  id: string;
  title: string;
  /** Short line under the heading giving the section context. */
  lead?: string;
  children?: ReactNode;
};

/**
 * Shared section shell: owns the vertical rhythm, the anchor id and the heading
 * entrance. Children never set page-level padding of their own.
 */
export function Section({ id, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="max-w-2xl"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold sm:text-4xl">
          {title}
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-4 h-px w-16 bg-accent" />
        {lead && (
          <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-muted">
            {lead}
          </motion.p>
        )}
      </motion.div>

      {children}
    </section>
  );
}
