"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

const tabs = [
  {
    key: "about",
    label: "About Me",
    icon: UserRound,
  },
  {
    key: "project",
    label: "My Work",
    icon: BriefcaseBusiness,
  },
];

const content = {
  about: {
    eyebrow: "ABOUT ME",
    year: "VDE 2K27",
    title: "Designing ideas into meaningful digital experiences.",
    description:
      "I'm Kevin Simorangkir — a designer and developer exploring the intersection of design, technology, and creativity to build digital experiences with purpose.",
    button: "Get to Know Me",
    href: "/about",
    imageLabel: "Creative Developer",
    imageTitle: "Kevin",
    imageSubtitle: "Simorangkir",
  },

  project: {
    eyebrow: "SELECTED WORK",
    year: "20+ PROJECTS",
    title: "Building digital products that turn ideas into experiences.",
    description:
      "From interfaces and websites to creative digital solutions, I approach every project with curiosity, structure, and attention to the details that make an experience feel right.",
    button: "Explore Projects",
    href: "/projects",
    imageLabel: "Selected Work",
    imageTitle: "Design",
    imageSubtitle: "Build · Create",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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

export default function AboutProjectSection() {
  const [active, setActive] = useState("about");

  const current = content[active];

  return (
    <section
      id="about-preview"
      className="relative overflow-hidden bg-[var(--color-background)]"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[10%] h-[420px] w-[420px] rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-[120px]" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[360px] w-[360px] rounded-full bg-[var(--color-surface-alt)] opacity-50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-8 lg:py-36">
        {/* =====================================================
            HEADER
            ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          {/* Heading */}

          <motion.div variants={itemVariants}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-brand)]" />

              <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
                EXPLORE
              </span>
            </div>

            <h2 className="max-w-4xl font-[var(--font-heading)] text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[var(--color-foreground)]">
              More than
              <br />
              <span className="text-[var(--color-brand)]">
                just a portfolio.
              </span>
            </h2>
          </motion.div>

          {/* Tab */}

          <motion.div
            variants={itemVariants}
            className="inline-flex w-fit rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActive(tab.key)}
                  aria-pressed={isActive}
                  className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-[var(--font-body)] text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm ${
                    isActive
                      ? "bg-[var(--color-foreground)] text-white shadow-sm"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  <Icon
                    size={14}
                    strokeWidth={1.7}
                  />

                  {tab.label}
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
            ===================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[0.95fr_1.05fr]"
          >
            {/* =================================================
                IMAGE
                ================================================= */}

            <div className="relative min-h-[500px] overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-brand-soft)] sm:min-h-[600px] lg:rounded-[36px]">
              {/* Decorative circle */}

              <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full border border-[var(--color-brand-light)]/30" />

              <div className="absolute left-[-60px] top-[35%] h-32 w-32 rounded-full bg-[var(--color-brand-soft)] blur-3xl" />

              {/* Image */}

              <Image
                src="/hero.png"
                alt="VINS Digital Experience"
                fill
                priority={active === "about"}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom"
              />

              {/* Gradient */}

              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--color-brand-soft)] via-[var(--color-brand-soft)]/30 to-transparent" />

              {/* Floating label */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.5,
                }}
                className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-5 sm:bottom-8 sm:left-8 sm:right-8"
              >
                <div className="rounded-2xl border border-white/60 bg-white/75 px-5 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-6 sm:py-5">
                  <p className="font-[var(--font-body)] text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {current.imageLabel}
                  </p>

                  <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-semibold leading-none tracking-[-0.05em] text-[var(--color-foreground)] sm:text-3xl">
                    {current.imageTitle}
                  </h3>

                  <p className="mt-1 font-[var(--font-heading)] text-sm font-medium tracking-tight text-[var(--color-brand-hover)]">
                    {current.imageSubtitle}
                  </p>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-[var(--color-foreground)] backdrop-blur-xl sm:flex">
                  <Sparkles
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>
              </motion.div>
            </div>

            {/* =================================================
                INFORMATION
                ================================================= */}

            <div className="flex min-h-[500px] flex-col justify-between rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9 lg:min-h-[600px] lg:rounded-[36px] lg:p-12">
              {/* Top */}

              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-5">
                <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.2em] text-[var(--color-muted-light)]">
                  {current.eyebrow}
                </span>

                <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                  {current.year}
                </span>
              </div>

              {/* Main */}

              <div className="py-14 sm:py-16 lg:py-20">
                <h3 className="max-w-2xl font-[var(--font-heading)] text-[clamp(2.25rem,4.5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--color-foreground)]">
                  {current.title}
                </h3>

                <p className="mt-7 max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                  {current.description}
                </p>

                <Link
                  href={current.href}
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-lg"
                >
                  {current.button}

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Bottom */}

              <div className="border-t border-[var(--color-border)] pt-6">
                <div className="flex flex-wrap gap-2">
                  {active === "about" ? (
                    <>
                      <span className="rounded-full bg-[var(--color-background)] px-4 py-2 text-xs text-[var(--color-muted)]">
                        Designer
                      </span>

                      <span className="rounded-full bg-[var(--color-background)] px-4 py-2 text-xs text-[var(--color-muted)]">
                        Developer
                      </span>

                      <span className="rounded-full bg-[var(--color-background)] px-4 py-2 text-xs text-[var(--color-muted)]">
                        Creative
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="rounded-full bg-[var(--color-background)] px-4 py-2 text-xs text-[var(--color-muted)]">
                        UI/UX
                      </span>

                      <span className="rounded-full bg-[var(--color-background)] px-4 py-2 text-xs text-[var(--color-muted)]">
                        Web Development
                      </span>

                      <span className="rounded-full bg-[var(--color-background)] px-4 py-2 text-xs text-[var(--color-muted)]">
                        Creative Solutions
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}