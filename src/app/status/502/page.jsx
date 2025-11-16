"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function BadGateway502() {
  return (
    <main
      className="
        min-h-screen flex items-center justify-center px-6
        bg-[var(--background)] text-[var(--foreground)]
        relative overflow-hidden transition-colors
      "
    >

      {/* Premium Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 55% 45%, var(--accent)18 0%, transparent 70%),
            radial-gradient(circle at 20% 80%, var(--accent-dark)12 0%, transparent 70%)
          `,
        }}
      />

      <div className="relative text-center z-10 max-w-md">

        {/* Icon */}
        <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />

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
          502
        </h1>

        {/* Message */}
        <p className="opacity-70 text-lg mt-3 leading-relaxed">
          Bad Gateway — The upstream server returned an invalid response.
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="
            inline-block mt-8 px-6 py-3 text-sm font-medium rounded-xl
            border border-[var(--accent)]
            text-[var(--accent)]
            hover:bg-[var(--accent)]/10
            hover:shadow-[0_0_12px_var(--accent)]
            transition-all
          "
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
