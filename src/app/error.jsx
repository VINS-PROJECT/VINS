"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";

export default function Error({ reset }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-background)] px-6 py-24 text-[var(--color-foreground)]">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute right-[-15%] top-[-15%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-50 blur-[120px]"
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--color-surface-alt)] blur-[100px]"
        />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 w-full max-w-xl text-center"
      >
        {/* =================================================
            ERROR ICON
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.15,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-brand-hover)] shadow-sm"
        >
          <TriangleAlert
            size={27}
            strokeWidth={1.5}
          />
        </motion.div>

        {/* =================================================
            LABEL
            ================================================= */}

        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-[var(--color-brand)]" />

          <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.24em] text-[var(--color-muted)]">
            SOMETHING WENT WRONG
          </span>

          <span className="h-px w-7 bg-[var(--color-brand)]" />
        </div>

        {/* =================================================
            ERROR CODE
            ================================================= */}

        <h1 className="font-[var(--font-heading)] text-[clamp(6rem,18vw,11rem)] font-semibold leading-[0.8] tracking-[-0.09em] text-[var(--color-foreground)]">
          500
        </h1>

        {/* =================================================
            MESSAGE
            ================================================= */}

        <h2 className="mt-8 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-3xl">
          Something went wrong.
        </h2>

        <p className="mx-auto mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
          An unexpected error occurred while loading this page. You can try
          again or return to the homepage.
        </p>

        {/* =================================================
            ACTIONS
            ================================================= */}

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Retry */}

          <button
            type="button"
            onClick={() => reset()}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-[0_12px_35px_rgba(23,23,23,0.12)] sm:w-auto"
          >
            <RefreshCw
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-500 group-hover:rotate-180"
            />

            Try Again
          </button>

          {/* Home */}

          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-background)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-[var(--color-foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-foreground)] sm:w-auto"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />

            Back Home
          </Link>
        </div>

        {/* =================================================
            FOOTNOTE
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="mt-14 flex items-center justify-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />

          <span className="font-[var(--font-body)] text-[10px] font-medium tracking-[0.12em] text-[var(--color-muted-light)]">
            VDE 2K27
          </span>

          <ArrowUpRight
            size={11}
            strokeWidth={1.6}
            className="text-[var(--color-muted-light)]"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}