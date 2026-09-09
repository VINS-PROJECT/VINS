"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const fadeUp = {
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

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[var(--color-background)]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[var(--color-brand-soft)] opacity-70 blur-3xl" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--color-surface-alt)] blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_70%,var(--color-background))]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto grid min-h-screen w-full max-w-[1440px] items-center gap-14 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-16 lg:pb-24 lg:pt-32 xl:px-20">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)]/80 px-4 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand-light)] opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand)]" />
            </span>

            <span className="text-[10px] font-semibold tracking-[0.22em] text-[var(--color-muted)] sm:text-xs">
              VINS DIGITAL EXPERIENCE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-[var(--font-heading)] text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[var(--color-foreground)]"
          >
            Design.
            <br />

            Build.
            <br />

            Create{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand-hover)] to-[var(--color-foreground)] bg-clip-text text-transparent">
              Impact.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl font-[var(--font-body)] text-base leading-8 text-[var(--color-muted)] sm:text-[17px]"
          >
            I&apos;m Kevin Simorangkir — a digital creator focused on
            transforming ideas into meaningful digital experiences through
            UI/UX design, technology, and creative solutions.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-lg"
            >
              <span>View Projects</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-background)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-[var(--color-foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-foreground)]"
            >
              Let&apos;s Talk

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--color-border)] pt-6"
          >
            <div>
              <p className="font-[var(--font-heading)] text-lg font-semibold tracking-tight text-[var(--color-foreground)]">
                20+
              </p>

              <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                Digital Projects
              </p>
            </div>

            <div className="h-8 w-px bg-[var(--color-border)]" />

            <div>
              <p className="font-[var(--font-heading)] text-lg font-semibold tracking-tight text-[var(--color-foreground)]">
                UI/UX
              </p>

              <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                Design & Experience
              </p>
            </div>

            <div className="h-8 w-px bg-[var(--color-border)]" />

            <div>
              <p className="font-[var(--font-heading)] text-lg font-semibold tracking-tight text-[var(--color-foreground)]">
                Web
              </p>

              <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                Development
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          className="relative hidden min-h-[600px] items-center justify-center lg:flex"
        >
          {/* Decorative element */}
          <div className="pointer-events-none absolute right-0 top-6 h-32 w-32 rounded-full border border-[var(--color-brand-light)]/40" />

          <div className="pointer-events-none absolute bottom-10 left-0 h-20 w-20 rounded-full border border-[var(--color-border)]" />

          {/* Image Container */}
          <div className="relative h-[600px] w-full max-w-[560px] overflow-hidden rounded-[40px] border border-[var(--color-border)] bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-brand-soft)] shadow-[0_30px_100px_rgba(23,23,23,0.08)]">
            {/* Inner gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.9),transparent_45%)]" />

            <Image
              src="/hero.png"
              alt="VINS Digital Experience"
              fill
              priority
              sizes="(max-width: 1024px) 0vw, 560px"
              className="relative z-10 object-contain object-bottom"
            />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[var(--color-brand-soft)]/70 to-transparent" />
          </div>

          {/* Floating Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -bottom-5 left-[-28px] z-30 rounded-3xl border border-white/70 bg-white/80 px-7 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.09)] backdrop-blur-xl"
          >
            <div className="flex items-start gap-5">
              <div>
                <p className="font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)]">
                  20+
                </p>

                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Digital Projects
                </p>
              </div>

              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand-hover)]">
                <Sparkles size={17} strokeWidth={1.7} />
              </div>
            </div>
          </motion.div>

          {/* Floating Status Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[-20px] top-24 z-30 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/90 px-5 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.07)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand-light)] opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-brand)]" />
              </span>

              <div>
                <p className="text-xs font-semibold text-[var(--color-foreground)]">
                  Available for opportunities
                </p>

                <p className="mt-0.5 text-[11px] text-[var(--color-muted)]">
                  VDE 2K27
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[9px] font-medium tracking-[0.25em] text-[var(--color-muted-light)]">
          SCROLL TO EXPLORE
        </span>

        <div className="h-8 w-px bg-[var(--color-border-strong)]" />
      </motion.div>
    </section>
  );
}