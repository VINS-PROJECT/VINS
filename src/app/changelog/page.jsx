"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Sparkles,
  Wrench,
  Bug,
  ArrowDown,
} from "lucide-react";

/* =========================================================
   CHANGELOG DATA
   ========================================================= */

const CHANGELOGS = [
  {
    version: "v1.0.0",
    date: "2026-09-14",
    title: "VDE 2K27",
    description:
      "The first release of VINS Digital Experience 2K27 — a complete evolution of the portfolio experience, built around design, technology, creativity, and meaningful digital work.",

    changes: [
      {
        type: "update",
        text: "Introduced the VDE 2K27 portfolio experience.",
      },
      {
        type: "update",
        text: "Reworked the overall website architecture and navigation.",
      },
      {
        type: "update",
        text: "Introduced the new VDE 2K27 visual and design system.",
      },
      {
        type: "update",
        text: "Redesigned Projects, About, Articles, and Contact experiences.",
      },
      {
        type: "update",
        text: "Introduced VINS AI as an interactive portfolio experience.",
      },
      {
        type: "fix",
        text: "Improved responsive behavior, accessibility, and overall interface consistency.",
      },
      {
        type: "fix",
        text: "Improved performance and page structure across the portfolio.",
      },
    ],
  },
];

/* =========================================================
   CHANGE TYPES
   ========================================================= */

const CHANGE_TYPES = {
  update: {
    icon: Sparkles,
    label: "Added",
  },

  fix: {
    icon: Wrench,
    label: "Improved",
  },

  bug: {
    icon: Bug,
    label: "Bug",
  },
};

/* =========================================================
   ANIMATION
   ========================================================= */

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   PAGE
   ========================================================= */

export default function ChangelogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-35 blur-[130px]" />

        <div className="absolute bottom-[10%] left-[-15%] h-[450px] w-[450px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <motion.header
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="max-w-4xl"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-brand)]" />

            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
              PRODUCT UPDATE
            </span>
          </div>

          <h1 className="font-[var(--font-heading)] text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.82] tracking-[-0.08em] text-[var(--color-foreground)]">
            Change
            <br />
            <span className="text-[var(--color-brand)]">
              log.
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 border-t border-[var(--color-border)] pt-7 sm:flex-row sm:items-start sm:justify-between">

            <p className="max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              A transparent record of updates, experiments,
              improvements, and fixes across VINS Digital Experience.
            </p>

            <span className="shrink-0 rounded-full border border-[var(--color-border)] px-4 py-2 font-[var(--font-body)] text-xs text-[var(--color-muted)]">
              VDE 2K27
            </span>

          </div>
        </motion.header>

        {/* =====================================================
            TIMELINE
            ===================================================== */}

        <section className="mt-24 sm:mt-32">

          <div className="relative">

            {/* TIMELINE LINE */}

            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[var(--color-border)] sm:left-[15px]" />

            <div className="space-y-8 sm:space-y-10">

              {CHANGELOGS.map((log, index) => (
                <motion.article
                  key={log.version}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  variants={itemVariants}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="relative pl-9 sm:pl-12"
                >

                  {/* =================================================
                      TIMELINE DOT
                      ================================================= */}

                  <span className="absolute left-0 top-8 flex h-[23px] w-[23px] items-center justify-center rounded-full border-[5px] border-[var(--color-background)] bg-[var(--color-brand)] shadow-[0_0_0_1px_var(--color-border)] sm:h-[31px] sm:w-[31px]" />

                  {/* =================================================
                      CHANGELOG CARD
                      ================================================= */}

                  <div className="group overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.06)] sm:rounded-[32px]">

                    {/* CARD HEADER */}

                    <div className="flex flex-col gap-5 border-b border-[var(--color-border)] p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8 lg:p-10">

                      <div>

                        <div className="flex flex-wrap items-center gap-3">

                          <span className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1.5 font-[var(--font-body)] text-[10px] font-semibold tracking-[0.12em] text-[var(--color-brand-hover)]">
                            RELEASE
                          </span>

                          <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                            {index === 0
                              ? "Latest"
                              : `Release ${CHANGELOGS.length - index}`}
                          </span>

                        </div>

                        <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em] text-[var(--color-foreground)] sm:text-4xl">
                          {log.version}
                        </h2>

                        <h3 className="mt-2 font-[var(--font-heading)] text-lg font-medium tracking-[-0.03em] text-[var(--color-muted)]">
                          {log.title}
                        </h3>

                      </div>

                      {/* DATE */}

                      <div className="flex shrink-0 items-center gap-2 font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">

                        <CalendarDays
                          size={15}
                          strokeWidth={1.6}
                        />

                        {formatDate(log.date)}

                      </div>

                    </div>

                    {/* DESCRIPTION */}

                    <div className="p-6 sm:p-8 lg:p-10">

                      <p className="max-w-2xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                        {log.description}
                      </p>

                      {/* CHANGES */}

                      <div className="mt-9 border-t border-[var(--color-border)] pt-7">

                        <div className="space-y-5">

                          {log.changes.map((change, changeIndex) => {
                            const config =
                              CHANGE_TYPES[change.type];

                            const Icon = config.icon;

                            return (
                              <div
                                key={`${log.version}-${changeIndex}`}
                                className="flex items-start gap-4"
                              >

                                {/* ICON */}

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-[var(--color-brand-hover)]">

                                  <Icon
                                    size={15}
                                    strokeWidth={1.6}
                                  />

                                </div>

                                {/* TEXT */}

                                <div className="min-w-0 pt-0.5">

                                  <span className="font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-hover)]">
                                    {config.label}
                                  </span>

                                  <p className="mt-1.5 font-[var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
                                    {change.text}
                                  </p>

                                </div>

                              </div>
                            );
                          })}

                        </div>

                      </div>

                    </div>

                  </div>
                </motion.article>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            END OF TIMELINE
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 flex flex-col items-center sm:mt-20"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)]">
            <ArrowDown
              size={15}
              strokeWidth={1.5}
              className="text-[var(--color-muted-light)]"
            />
          </div>

          <p className="mt-4 font-[var(--font-body)] text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted-light)]">
            End of changelog
          </p>

        </motion.div>

      </div>
    </main>
  );
}

/* =========================================================
   DATE FORMATTER
   ========================================================= */

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(`${date}T00:00:00`));
}