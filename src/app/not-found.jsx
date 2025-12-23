"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="
        relative min-h-screen flex items-center justify-center px-6
        bg-[var(--background)] text-[var(--foreground)]
        overflow-hidden transition-colors
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(60% 45% at 35% 30%, var(--accent)/22 0%, transparent 70%),
            radial-gradient(55% 40% at 75% 65%, var(--accent-dark)/16 0%, transparent 70%)
          `,
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center max-w-md">

        {/* ICON */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="
            mx-auto mb-6 w-16 h-16 rounded-2xl
            flex items-center justify-center
            bg-[var(--accent)]/15 text-[var(--accent)]
          "
        >
          <AlertCircle className="w-8 h-8" />
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            text-6xl font-extrabold tracking-tight
            bg-clip-text text-transparent
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          404
        </motion.h1>

        {/* MESSAGE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-4 text-base md:text-lg"
        >
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          {/* BACK */}
          <button
            onClick={() => window.history.back()}
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 text-sm font-semibold
              rounded-xl
              border border-[var(--border)]
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              transition
            "
          >
            <ArrowLeft size={16} />
            Go Back
          </button>

          {/* HOME */}
          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 text-sm font-semibold
              rounded-xl
              bg-[var(--accent)]
              text-black
              transition
              hover:opacity-90
              hover:shadow-[0_0_18px_var(--accent)]
            "
          >
            <Home size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
