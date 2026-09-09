"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Code2,
  Heart,
  Rocket,
  Sparkles,
} from "lucide-react";

/* =========================================================
   PRINCIPLES
   ========================================================= */

const PRINCIPLES = [
  {
    number: "01",
    icon: Sparkles,
    title: "Design With Purpose",
    description:
      "Good design is more than visual polish. It should make information clearer, interactions easier, and digital experiences more meaningful.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Build With Intention",
    description:
      "Technology should support the experience. I value clean structure, thoughtful decisions, maintainable code, and details that work as well as they look.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Keep Moving Forward",
    description:
      "Every project is a chance to learn something new. VDE continues to evolve through iteration, experimentation, feedback, and curiosity.",
  },
];

/* =========================================================
   ANIMATION
   ========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   PAGE
   ========================================================= */

export default function DeveloperMessagePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute right-[-15%] top-[8%] h-[480px] w-[480px] rounded-full bg-[var(--color-brand-soft)] opacity-35 blur-[130px]" />

        <div className="absolute bottom-[10%] left-[-15%] h-[420px] w-[420px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[120px]" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-5xl"
        >

          <div className="mb-7 flex items-center gap-3">

            <span className="h-px w-8 bg-[var(--color-brand)]" />

            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
              FROM THE DEVELOPER
            </span>

          </div>

          <h1 className="font-[var(--font-heading)] text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.08em]">

            Built with

            <br />

            <span className="text-[var(--color-brand)]">
              intention.
            </span>

          </h1>

          <div className="mt-10 flex flex-col gap-6 border-t border-[var(--color-border)] pt-7 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              A short note about the ideas, principles, and thinking
              behind VINS Digital Experience.
            </p>

            <div className="flex shrink-0 items-center gap-2 font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">

              <CalendarDays
                size={14}
                strokeWidth={1.6}
              />

              September 14, 2026

            </div>

          </div>

        </motion.header>

        {/* =====================================================
            MESSAGE
            ===================================================== */}

        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{
            delay: 0.1,
          }}
          className="mt-20 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:mt-24 sm:p-10 lg:rounded-[36px] lg:p-14"
        >

          {/* TOP */}

          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-6">

            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted-light)]">
              DEVELOPER NOTE
            </span>

            <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
              VDE 2K27
            </span>

          </div>

          {/* CONTENT */}

          <div className="max-w-3xl py-12 sm:py-16 lg:py-20">

            <p className="font-[var(--font-heading)] text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
              This is more than a redesign. It is a reflection of how I
              want to create.
            </p>

            <div className="mt-10 space-y-6 font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">

              <p>
                Hello, I'm Kevin — the person behind VINS Digital
                Experience.
              </p>

              <p>
                VINS began as a personal portfolio: a place to collect
                projects, experiments, and things I had built. Over time,
                it became a way for me to document how I think about
                design, technology, and digital experiences.
              </p>

              <p>
                With VDE 2K27, I wanted to bring that idea into a more
                focused direction. The goal is not to build something
                complicated for the sake of complexity, but to create a
                digital experience that feels intentional, useful, and
                genuinely representative of my work.
              </p>

              <p>
                Every page, interaction, project, and small detail has a
                reason behind it. Some decisions are technical. Some are
                visual. Others simply come from curiosity and the desire
                to try something better.
              </p>

              <p>
                There will always be things to improve. That is part of
                the process. VDE 2K27 is not meant to be a final
                destination — it is a snapshot of where the work is now
                and a foundation for where it can go next.
              </p>

            </div>

          </div>

          {/* SIGNATURE */}

          <div className="flex flex-col gap-5 border-t border-[var(--color-border)] pt-7 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand-hover)]">
                <Heart
                  size={18}
                  strokeWidth={1.6}
                />
              </div>

              <div>

                <p className="font-[var(--font-heading)] text-sm font-semibold tracking-[-0.02em]">
                  Kevin Simorangkir
                </p>

                <p className="mt-0.5 font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                  Designer · Developer · Creator
                </p>

              </div>

            </div>

            <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
              VDE 2K27 · v1.0.0
            </span>

          </div>

        </motion.article>

        {/* =====================================================
            PRINCIPLES
            ===================================================== */}

        <section className="mt-24 sm:mt-32">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >

            <div className="flex items-center gap-3">

              <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-brand)]">
                01
              </span>

              <span className="h-px w-8 bg-[var(--color-border-strong)]" />

              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                PRINCIPLES
              </span>

            </div>

            <h2 className="mt-6 max-w-3xl font-[var(--font-heading)] text-[clamp(2.75rem,5vw,4.75rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              How I approach
              <br />
              <span className="text-[var(--color-brand)]">
                the work.
              </span>
            </h2>

          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">

            {PRINCIPLES.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  variants={fadeUp}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="group rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)] sm:p-8"
                >

                  {/* TOP */}

                  <div className="flex items-center justify-between">

                    <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-[var(--color-foreground)] transition-all duration-300 group-hover:bg-[var(--color-brand-soft)] group-hover:text-[var(--color-brand-hover)]">

                      <Icon
                        size={18}
                        strokeWidth={1.6}
                      />

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="mt-16">

                    <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.045em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </section>

        {/* =====================================================
            CLOSING
            ===================================================== */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="mt-24 border-t border-[var(--color-border)] pt-10 sm:mt-32 sm:pt-12"
        >

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted-light)]">
                WHAT COMES NEXT
              </span>

              <h2 className="mt-5 max-w-2xl font-[var(--font-heading)] text-3xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-4xl lg:text-5xl">
                Keep learning.
                <br />
                Keep building.
              </h2>

            </div>

            <div className="max-w-sm">

              <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                VDE 2K27 marks the beginning of a new chapter. The work
                continues through every project, experiment, and idea
                that comes next.
              </p>

              <div className="mt-6 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />

                <span className="font-[var(--font-body)] text-xs font-medium text-[var(--color-muted)]">
                  VDE 2K27 · v1.0.0
                </span>

              </div>

            </div>

          </div>

        </motion.section>

        {/* =====================================================
            FINAL LINE
            ===================================================== */}

        <div className="mt-20 flex items-center gap-3 border-t border-[var(--color-border)] pt-7">

          <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
            Designed & built with intention.
          </span>

          <ArrowUpRight
            size={13}
            strokeWidth={1.5}
            className="text-[var(--color-brand)]"
          />

        </div>

      </div>
    </main>
  );
}