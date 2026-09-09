"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  Eye,
  Lock,
  Mail,
  ShieldCheck,
  Cookie,
} from "lucide-react";

/* =========================================================
   PRIVACY PRINCIPLES
   ========================================================= */

const PRINCIPLES = [
  {
    number: "01",
    icon: Database,
    title: "Information",
    description:
      "Information may be provided when you voluntarily interact with VDE, such as submitting a contact form or communicating directly.",
  },
  {
    number: "02",
    icon: Lock,
    title: "Protection",
    description:
      "Information submitted through VDE is handled with reasonable care and used only for the purpose for which it was provided.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Transparency",
    description:
      "VDE aims to keep its data practices clear and understandable as new features and services are introduced.",
  },
  {
    number: "04",
    icon: Cookie,
    title: "Cookies & Analytics",
    description:
      "VDE may introduce cookies or analytics technologies in future iterations to understand usage and improve the overall experience.",
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

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute right-[-15%] top-[5%] h-[480px] w-[480px] rounded-full bg-[var(--color-brand-soft)] opacity-30 blur-[130px]" />

        <div className="absolute bottom-[5%] left-[-15%] h-[420px] w-[420px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[120px]" />

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
              PRIVACY POLICY
            </span>

          </div>

          <h1 className="font-[var(--font-heading)] text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.08em]">

            Your data,

            <br />

            handled with

            <br />

            <span className="text-[var(--color-brand)]">
              care.
            </span>

          </h1>

          <div className="mt-10 flex flex-col gap-6 border-t border-[var(--color-border)] pt-7 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              This page explains how VINS Digital Experience approaches
              information, privacy, and transparency.
            </p>

            <span className="shrink-0 font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
              Effective September 14, 2026
            </span>

          </div>

        </motion.header>

        {/* =====================================================
            PRIVACY STATEMENT
            ===================================================== */}

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{
            delay: 0.1,
          }}
          className="mt-20 rounded-[30px] bg-[var(--color-foreground)] p-8 text-white sm:mt-24 sm:p-10 lg:rounded-[36px] lg:p-14"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand-hover)]">

            <ShieldCheck
              size={22}
              strokeWidth={1.6}
            />

          </div>

          <div className="mt-10 max-w-3xl">

            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
              THE PRINCIPLE
            </span>

            <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-4xl lg:text-5xl">
              Privacy should be simple, clear, and respectful.
            </h2>

            <p className="mt-7 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              VDE is designed as a personal digital experience. Any
              information voluntarily submitted through the website is
              intended to support communication and the functionality
              of the experience.
            </p>

          </div>

        </motion.section>

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
                DATA PRACTICES
              </span>

            </div>

            <h2 className="mt-6 max-w-3xl font-[var(--font-heading)] text-[clamp(2.75rem,5vw,4.75rem)] font-semibold leading-[0.9] tracking-[-0.07em]">

              What you should

              <br />

              <span className="text-[var(--color-brand)]">
                know.
              </span>

            </h2>

          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

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
            CONTACT
            ===================================================== */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="mt-24 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:mt-32 sm:p-10 lg:rounded-[36px] lg:p-12"
        >

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">

              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted-light)]">
                HAVE A QUESTION?
              </span>

              <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-4xl">
                Want to know more about how your information is handled?
              </h2>

              <p className="mt-5 max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                If you have a privacy-related question, you can contact
                me directly.
              </p>

            </div>

            <a
              href="mailto:vin.simorangkir81@gmail.com"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)]"
            >

              <Mail
                size={16}
                strokeWidth={1.7}
              />

              Contact

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </a>

          </div>

        </motion.section>

        {/* =====================================================
            FOOTNOTE
            ===================================================== */}

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-[var(--font-body)] text-xs leading-6 text-[var(--color-muted-light)]">
            This policy may evolve as VDE introduces new functionality.
          </p>

          <span className="font-[var(--font-body)] text-xs font-medium text-[var(--color-muted-light)]">
            VDE 2K27 · v1.0.0
          </span>

        </div>

      </div>
    </main>
  );
}