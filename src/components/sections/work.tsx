"use client";

import { motion } from "motion/react";

import { Section } from "@/components/section";
import { EXPERIENCE } from "@/lib/content";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

export function Work() {
  return (
    <Section
      id="work"
      title="Work"
      lead="Four years across university IT, a trading platform and a central bank — support, infrastructure and, increasingly, the code itself."
    >
      <motion.ol
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-16 space-y-12 md:mt-20 md:space-y-16"
      >
        {EXPERIENCE.map((job) => (
          <motion.li
            key={`${job.company}-${job.period}`}
            variants={fadeUp}
            className="relative border-l border-border pl-8 md:pl-10"
          >
            {/* Timeline marker. The background ring punches it out of the rail. */}
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[5px] size-2.5 rounded-full bg-accent ring-4 ring-background"
            />

            <p className="text-xs font-medium tracking-widest text-muted uppercase tabular-nums">
              {job.period}
            </p>

            <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{job.role}</h3>
            <p className="mt-1 font-display text-base font-medium text-accent">{job.company}</p>

            <ul className="mt-5 max-w-2xl space-y-3">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-6 text-muted">
                  <span
                    aria-hidden="true"
                    className="absolute top-3 left-0 h-px w-3.5 bg-accent/50"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
