"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { GithubIcon } from "@/components/icons/github";
import { Section } from "@/components/section";
import { PROFILE } from "@/lib/content";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      lead="I'm open to full-stack developer and IT roles. Email is the fastest way to reach me — the CV below has the full detail."
    >
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-14 md:mt-16"
      >
        <motion.a
          variants={fadeUp}
          href={`mailto:${PROFILE.email}`}
          className="group flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50 sm:p-8"
        >
          <Mail className="size-6 shrink-0 text-accent" aria-hidden="true" />
          <span className="font-display text-xl font-medium break-all sm:text-2xl">
            {PROFILE.email}
          </span>
          <ArrowUpRight className="size-5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>

          <a
            href={PROFILE.cv}
            download
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Download className="size-4" />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
