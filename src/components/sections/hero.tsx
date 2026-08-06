"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";

import { GithubIcon } from "@/components/icons/github";
import { PROFILE } from "@/lib/content";
import { DURATION, EASE_OUT, SPRING, fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col justify-center px-6 py-20 md:px-10 md:py-28 lg:min-h-[calc(100dvh-5rem)]"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Left — the pitch */}
        <motion.div
          variants={stagger(0.08, 0.05)}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-sm font-medium tracking-widest text-accent uppercase"
          >
            {PROFILE.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-bold text-balance sm:text-5xl lg:text-6xl"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 font-display text-xl font-medium text-balance text-foreground/90 sm:text-2xl"
          >
            {PROFILE.headline}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-muted">
            {PROFILE.bio}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-opacity duration-200 hover:opacity-90"
            >
              View my work
              <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <a
              href={PROFILE.cv}
              download
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <Download className="size-4" />
              Download CV
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              aria-label={`Email ${PROFILE.name}`}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" />
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${PROFILE.name} on GitHub`}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <GithubIcon className="size-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — the portrait */}
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          transition={
            reducedMotion
              ? { duration: DURATION.base, ease: EASE_OUT }
              : { ...SPRING, delay: 0.15 }
          }
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* Soft accent bloom behind the frame. */}
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-accent/15 blur-3xl dark:bg-accent/10"
          />

          {/* Offset outline for depth — purely decorative. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-4xl border border-accent/30"
          />

          <motion.div
            animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1 }
            }
            className="relative overflow-hidden rounded-4xl border border-border bg-surface shadow-xl shadow-black/5 dark:shadow-black/40"
          >
            <Image
              src={PROFILE.photo}
              alt={PROFILE.photoAlt}
              width={720}
              height={720}
              priority
              sizes="(max-width: 1024px) 24rem, 28rem"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
