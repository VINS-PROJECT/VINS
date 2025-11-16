"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="
        min-h-screen flex items-center justify-center px-6
        bg-[var(--background)] text-[var(--foreground)]
        relative overflow-hidden transition-colors
      "
    >

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 40% 30%, var(--accent)20 0%, transparent 70%),
            radial-gradient(circle at 75% 65%, var(--accent-dark)12 0%, transparent 70%)
          `,
        }}
      />

      <div className="relative z-10 text-center max-w-md">

        {/* Icon */}
        <AlertCircle className="w-16 h-16 mx-auto mb-6 text-[var(--accent)]" />

        {/* Title */}
        <h1
          className="
            text-5xl font-extrabold 
            bg-clip-text text-transparent
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg opacity-70">
          The page you're looking for doesn’t seem to exist.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="
            inline-block mt-8 px-7 py-3 text-sm font-medium
            rounded-xl transition-all
            border border-[var(--accent)]
            text-[var(--accent)]
            hover:bg-[var(--accent)]/10
            hover:shadow-[0_0_12px_var(--accent)]
          "
        >
          Back to Home
        </Link>
      </div>

    </main>
  );
}
