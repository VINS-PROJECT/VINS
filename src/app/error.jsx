"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function Error({ reset }) {
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
            radial-gradient(circle at 60% 40%, var(--accent)20 0%, transparent 70%),
            radial-gradient(circle at 25% 70%, var(--accent-dark)12 0%, transparent 70%)
          `,
        }}
      />

      <div className="relative text-center z-10 max-w-md">

        {/* Icon */}
        <XCircle className="w-16 h-16 mx-auto mb-6 text-red-500" />

        {/* Title */}
        <h1
          className="
            text-5xl font-extrabold mb-2 
            bg-clip-text text-transparent
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          500
        </h1>

        {/* Message */}
        <p className="mt-3 text-lg opacity-70">
          Something went wrong on the server.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">

          {/* Retry Button */}
          <button
            onClick={() => reset()}
            className="
              px-6 py-3 text-sm font-medium rounded-xl 
              border border-[var(--accent)]
              text-[var(--accent)]
              hover:bg-[var(--accent)]/10
              hover:shadow-[0_0_12px_var(--accent)]
              transition-all
            "
          >
            Try Again
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="
              px-6 py-3 text-sm font-medium rounded-xl
              border border-[var(--border)]
              text-[var(--foreground)]
              hover:bg-[var(--card)]
              hover:border-[var(--accent)]
              transition-all
            "
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
