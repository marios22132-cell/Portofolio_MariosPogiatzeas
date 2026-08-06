"use client";

import { motion } from "motion/react";
import { BadgeCheck, GraduationCap, Languages } from "lucide-react";

import { Section } from "@/components/section";
import { CERTIFICATIONS, EDUCATION, LANGUAGES, SKILLS } from "@/lib/content";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

export function About() {
  return (
    <Section
      id="about"
      title="About"
      lead="I started in enterprise IT — four years keeping university systems and a trading floor running, administering Windows, Azure and Active Directory under SLA pressure."
    >
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Somewhere in there I stopped only supporting software and started building it. Today I work
          across the stack — React and Next.js on the front, Node.js with PostgreSQL and MongoDB
          behind it — and that support background is still the most useful thing I have: I know what
          breaks in production because I used to be the one paged about it.
        </motion.p>

        <div className="mt-16 grid gap-14 md:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Skills */}
          <motion.div variants={fadeUp}>
            <h3 className="font-display text-lg font-semibold">Skills</h3>
            <dl className="mt-8 space-y-7">
              {SKILLS.map((group) => (
                <div key={group.title}>
                  <dt className="text-xs font-medium tracking-widest text-muted uppercase">
                    {group.title}
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Education, certifications, languages */}
          <motion.div variants={fadeUp} className="space-y-10">
            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <GraduationCap className="size-5 text-accent" aria-hidden="true" />
                Education
              </h3>
              <div className="mt-5 rounded-2xl border border-border bg-surface p-6">
                <p className="font-medium">{EDUCATION.degree}</p>
                <p className="mt-1 text-accent">{EDUCATION.school}</p>
                <p className="mt-1 text-sm text-muted">{EDUCATION.faculty}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-foreground">Thesis — </span>
                  {EDUCATION.thesis}
                </p>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <BadgeCheck className="size-5 text-accent" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="mt-5 space-y-3">
                {CERTIFICATIONS.map((certification) => (
                  <li key={certification} className="relative pl-6 text-muted">
                    <span
                      aria-hidden="true"
                      className="absolute top-3 left-0 h-px w-3.5 bg-accent/50"
                    />
                    {certification}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Languages className="size-5 text-accent" aria-hidden="true" />
                Spoken Languages
              </h3>
              <ul className="mt-5 space-y-3">
                {LANGUAGES.map((language) => (
                  <li key={language} className="relative pl-6 text-muted">
                    <span
                      aria-hidden="true"
                      className="absolute top-3 left-0 h-px w-3.5 bg-accent/50"
                    />
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
