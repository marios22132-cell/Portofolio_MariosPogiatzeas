"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";

import { GithubIcon } from "@/components/icons/github";
import { Section } from "@/components/section";
import { PROJECTS } from "@/lib/content";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      lead="Things I've shipped — client sites, full-stack products, and the experiment behind my thesis."
    >
      <motion.ul
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2"
      >
        {PROJECTS.map((project) => (
          <motion.li
            key={project.title}
            variants={fadeUp}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-8"
          >
            <p className="text-xs font-medium tracking-widest text-muted uppercase">
              {project.context}
            </p>

            <h3 className="mt-3 font-display text-xl font-semibold">{project.title}</h3>

            <p className="mt-4 flex-1 text-muted">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center gap-1.5 font-medium text-accent transition-opacity duration-200 hover:opacity-80"
                >
                  Live site
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center gap-1.5 font-medium text-muted transition-colors duration-200 hover:text-accent"
                >
                  <GithubIcon className="size-4" />
                  Source
                </a>
              )}

              {project.note && (
                <p className="inline-flex items-center gap-1.5 text-muted">
                  <Lock className="size-3.5" aria-hidden="true" />
                  {project.note}
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
